const fs = require('fs').promises;
const path = require('path');

const COLLECTIONS_DIR = path.join(__dirname, 'collections');


async function ensureCollectionsDir() {
  try {
    await fs.mkdir(COLLECTIONS_DIR, { recursive: true });
  } catch (err) {
    console.log('Erro ao criar pasta collections:', err.message);
  }
}

async function createCollection(name, overwrite = false) {
  await ensureCollectionsDir();
  const filePath = path.join(COLLECTIONS_DIR, `${name}.json`);

  try {
    if (!overwrite) {
      await fs.access(filePath);
      console.log(`A coleção "${name}" já existe. Use overwrite = true para sobrescrever.`);
      return;
    }
  } catch {}

  const collection = {
    schema: {},
    config: {},
    data: [],
  };

  await fs.writeFile(filePath, JSON.stringify(collection, null, 2));
  console.log(`Coleção "${name}" criada com sucesso.`);
}

async function readCollection(name) {
  const filePath = path.join(COLLECTIONS_DIR, `${name}.json`);
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(content);
  } catch {
    console.log(`Coleção "${name}" não encontrada.`);
  }
}

async function deleteCollection(name) {
  const filePath = path.join(COLLECTIONS_DIR, `${name}.json`);
  try {
    await fs.unlink(filePath);
    console.log(`Coleção "${name}" deletada com sucesso.`);
  } catch {
    console.log(`Coleção "${name}" não encontrada para deletar.`);
  }
}


async function createDocument(collectionName, documentData) {
  if (!collectionName || !documentData) {
    console.log('Collection e documento são obrigatórios.');
    return;
  }

  const collection = await readCollection(collectionName);
  if (!collection) return;

  collection.data.push(documentData);
  await fs.writeFile(
    path.join(COLLECTIONS_DIR, `${collectionName}.json`),
    JSON.stringify(collection, null, 2)
  );
  console.log('Documento adicionado com sucesso.');
}

async function readDocument(collectionName, match) {
  const collection = await readCollection(collectionName);
  if (!collection) return;

  const results = collection.data.filter(doc => {
    return Object.entries(match).every(([key, value]) => doc[key] === value);
  });

  if (results.length === 0) {
    console.log('Nenhum documento encontrado.');
  }

  return results;
}

async function updateDocument(collectionName, match, updateData) {
  const collection = await readCollection(collectionName);
  if (!collection) return;

  let updated = false;
  collection.data = collection.data.map(doc => {
    if (Object.entries(match).every(([k, v]) => doc[k] === v)) {
      updated = true;
      return { ...doc, ...updateData };
    }
    return doc;
  });

  if (updated) {
    await fs.writeFile(
      path.join(COLLECTIONS_DIR, `${collectionName}.json`),
      JSON.stringify(collection, null, 2)
    );
    console.log('Documento(s) atualizado(s) com sucesso.');
  } else {
    console.log('Nenhum documento correspondente para atualizar.');
  }
}

async function deleteDocument(collectionName, match) {
  const collection = await readCollection(collectionName);
  if (!collection) return;

  const originalLength = collection.data.length;
  collection.data = collection.data.filter(doc => {
    return !Object.entries(match).every(([k, v]) => doc[k] === v);
  });

  if (collection.data.length < originalLength) {
    await fs.writeFile(
      path.join(COLLECTIONS_DIR, `${collectionName}.json`),
      JSON.stringify(collection, null, 2)
    );
    console.log('Documento(s) deletado(s) com sucesso.');
  } else {
    console.log('Nenhum documento correspondente para deletar.');
  }
}

module.exports = {
  createCollection,
  readCollection,
  deleteCollection,
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
};
