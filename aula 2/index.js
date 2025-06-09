const {
  createCollection,
  readCollection,
  deleteCollection,
  createDocument,
  readDocument,
  updateDocument,
  deleteDocument,
} = require('./db');

async function run() {
  await createCollection('usuarios');

  await createDocument('usuarios', { name: 'João', age: 20 });
  await createDocument('usuarios', { name: 'Maria', age: 25 });

  const encontrados = await readDocument('usuarios', { name: 'João' });
  console.log('Documentos encontrados:', encontrados);

  await updateDocument('usuarios', { name: 'João' }, { age: 30 });

  await deleteDocument('usuarios', { name: 'Maria' });

  const final = await readCollection('usuarios');
  console.log('Coleção final:', final);
}

run();
