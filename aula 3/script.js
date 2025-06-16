const jogos = [
    {
        nome: "Misterio Sombrio",
        lancamento: 2024,
        classificacaoIndicativa: "16+",
        estilo: "Suspense",
        autores: ["Carla Z.", "Ricardo Y."],
        musicas: [
            {
                compositor: "Gabriel W.",
                duracao: "3:40",
                url: "https://example.com/dark_music1.mp3",
                genero: "Ambient",
                artistas: ["Gabriel W."]
            },
            {
                compositor: "Sofia V.",
                duracao: "2:55",
                url: "https://example.com/dark_music2.mp3",
                genero: "Horror",
                artistas: ["Sofia V."]
            },
            {
                compositor: "Lucas U.",
                duracao: "4:15",
                url: "https://example.com/dark_music3.mp3",
                genero: "Misterioso",
                artistas: ["Lucas U."]
            },
            {
                compositor: "Isabela T.",
                duracao: "3:20",
                url: "https://example.com/dark_music4.mp3",
                genero: "Orquestral Sombrio",
                artistas: ["Isabela T."]
            },
            {
                compositor: "Pedro S.",
                duracao: "2:30",
                url: "https://example.com/dark_music5.mp3",
                genero: "Tensão",
                artistas: ["Pedro S."]
            }
        ],
        wallpapers: [
            {
                url: "img/misterio_sombrio.jpg",
                nome: "Floresta Assombrada",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/misterio_sombrio.jpg",
                nome: "Mansão Abandonada",
                resolution: { height: 720, width: 1280 }
            },
            {
                url: "img/misterio_sombrio.jpg",
                nome: "Rua Nebulosa",
                resolution: { height: 1440, width: 2560 }
            },
            {
                url: "img/misterio_sombrio.jpg",
                nome: "Noite Estrelada",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/misterio_sombrio.jpg",
                nome: "Cemitério Antigo",
                resolution: { height: 768, width: 1366 }
            }
        ],
        comprarEm: {
            Steam: { preco: 129.90, url: "https://store.steampowered.com/misterio-sombrio" },
            EpicGames: { preco: 119.90, url: "https://www.epicgames.com/misterio-sombrio" },
            GOG: { preco: 125.00, url: "https://www.gog.com/game/misterio-sombrio" }
        }
    },
    {
        nome: "Reino Perdido",
        lancamento: 2020,
        classificacaoIndicativa: "Livre",
        estilo: "Aventura",
        autores: ["Lucas F.", "Isabela G."],
        musicas: [
            {
                compositor: "Carlos A.",
                duracao: "3:10",
                url: "https://example.com/musica1.mp3",
                genero: "Orquestral",
                artistas: ["Carlos A."]
            },
            {
                compositor: "Ana B.",
                duracao: "2:45",
                url: "https://example.com/musica2.mp3",
                genero: "Rock",
                artistas: ["Ana B."]
            },
            {
                compositor: "Pedro C.",
                duracao: "4:00",
                url: "https://example.com/musica3.mp3",
                genero: "Eletrônica",
                artistas: ["Pedro C."]
            },
            {
                compositor: "Mariana D.",
                duracao: "3:30",
                url: "https://example.com/musica4.mp3",
                genero: "Acústico",
                artistas: ["Mariana D."]
            },
            {
                compositor: "Rafa E.",
                duracao: "2:00",
                url: "https://example.com/musica5.mp3",
                genero: "Folk",
                artistas: ["Rafa E."]
            }
        ],
        wallpapers: [
            {
                url: "img/montanha_geleda.jpg",
                nome: "Montanha Gelada",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/montanha_geleda.jpg",
                nome: "Floresta Sombria",
                resolution: { height: 720, width: 1280 }
            },
            {
                url: "img/montanha_geleda.jpg",
                nome: "Cidade Antiga",
                resolution: { height: 1440, width: 2560 }
            },
            {
                url: "img/montanha_geleda.jpg",
                nome: "Deserto Infinito",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/montanha_geleda.jpg",
                nome: "Oceano Profundo",
                resolution: { height: 768, width: 1366 }
            }
        ],
        comprarEm: {
            Steam: { preco: 59.90, url: "https://store.steampowered.com/reino-perdido" },
            GOG: { preco: 55.00, url: "https://www.gog.com/game/reino-perdido" }
        }
    },
    {
        nome: "A lenda do Herói",
        lancamento: 2022,
        classificacaoIndicativa: "16+",
        estilo: "Ação",
        autores: ["Felipe H.", "Larissa I."],
        musicas: [
            {
                compositor: "Carlos A.",
                duracao: "3:10",
                url: "https://example.com/musica1.mp3",
                genero: "Orquestral",
                artistas: ["Carlos A."]
            },
            {
                compositor: "Ana B.",
                duracao: "2:45",
                url: "https://example.com/musica2.mp3",
                genero: "Rock",
                artistas: ["Ana B."]
            },
            {
                compositor: "Pedro C.",
                duracao: "4:00",
                url: "https://example.com/musica3.mp3",
                genero: "Eletrônica",
                artistas: ["Pedro C."]
            },
            {
                compositor: "Mariana D.",
                duracao: "3:30",
                url: "https://example.com/musica4.mp3",
                genero: "Acústico",
                artistas: ["Mariana D."]
            },
            {
                compositor: "Rafa E.",
                duracao: "2:00",
                url: "https://example.com/musica5.mp3",
                genero: "Folk",
                artistas: ["Rafa E."]
            }
        ],
        wallpapers: [
            {
                url: "img/A_lenda_do_heroi.jpg",
                nome: "Montanha Gelada",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/A_lenda_do_heroi.jpg",
                nome: "Floresta Sombria",
                resolution: { height: 720, width: 1280 }
            },
            {
                url: "img/A_lenda_do_heroi.jpg",
                nome: "Cidade Antiga",
                resolution: { height: 1440, width: 2560 }
            },
            {
                url: "img/A_lenda_do_heroi.jpg",
                nome: "Deserto Infinito",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/A_lenda_do_heroi.jpg",
                nome: "Oceano Profundo",
                resolution: { height: 768, width: 1366 }
            }
        ],
        comprarEm: {
            Steam: { preco: 119.90, url: "https://store.steampowered.com/caminho-do-heroi" },
            EpicGames: { preco: 109.90, url: "https://www.epicgames.com/caminho-do-heroi" }
        }
    },
    {
        nome: "Guardiões da Galáxia",
        lancamento: 2023,
        classificacaoIndicativa: "18+",
        estilo: "Ficção Científica",
        autores: ["Gabriel J.", "Sofia K."],
        musicas: [
            {
                compositor: "Carlos A.",
                duracao: "3:10",
                url: "https://example.com/musica1.mp3",
                genero: "Orquestral",
                artistas: ["Carlos A."]
            },
            {
                compositor: "Ana B.",
                duracao: "2:45",
                url: "https://example.com/musica2.mp3",
                genero: "Rock",
                artistas: ["Ana B."]
            },
            {
                compositor: "Pedro C.",
                duracao: "4:00",
                url: "https://example.com/musica3.mp3",
                genero: "Eletrônica",
                artistas: ["Pedro C."]
            },
            {
                compositor: "Mariana D.",
                duracao: "3:30",
                url: "https://example.com/musica4.mp3",
                genero: "Acústico",
                artistas: ["Mariana D."]
            },
            {
                compositor: "Rafa E.",
                duracao: "2:00",
                url: "https://example.com/musica5.mp3",
                genero: "Folk",
                artistas: ["Rafa E."]
            }
        ],
        wallpapers: [
            {
                url: "img/Guardiões_da_Galáxia.jpg",
                nome: "Montanha Gelada",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/Guardiões_da_Galáxia.jpg",
                nome: "Floresta Sombria",
                resolution: { height: 720, width: 1280 }
            },
            {
                url: "img/Guardiões_da_Galáxia.jpg",
                nome: "Cidade Antiga",
                resolution: { height: 1440, width: 2560 }
            },
            {
                url: "img/Guardiões_da_Galáxia.jpg",
                nome: "Deserto Infinito",
                resolution: { height: 1080, width: 1920 }
            },
            {
                url: "img/Guardiões_da_Galáxia.jpg",
                nome: "Oceano Profundo",
                resolution: { height: 768, width: 1366 }
            }
        ],
        comprarEm: {
            Steam: { preco: 149.90, url: "https://store.steampowered.com/guardioes-da-galaxia" },
            EpicGames: { preco: 139.90, url: "https://www.epicgames.com/guardioes-da-galaxia" },
            UbisoftStore: { preco: 145.00, url: "https://store.ubi.com/guardioes-da-galaxia" }
        }
    }
];

// Função para exibir os detalhes do jogo
function displayGameDetails(game) {
    document.getElementById('game-name').textContent = game.nome;
    document.getElementById('game-info').textContent = `Gênero: ${game.estilo} / Lançamento: ${game.lancamento} - Autores: ${game.autores.join(', ')}`;
    document.getElementById('main-wallpaper').src = game.wallpapers[0].url;

    const buyLinksUl = document.getElementById('buy-links');
    buyLinksUl.innerHTML = ''; // Limpa os links existentes
    for (const store in game.comprarEm) {
        const li = document.createElement('li');
        li.textContent = `${store}: R$${game.comprarEm[store].preco.toFixed(2)}`;
        buyLinksUl.appendChild(li);
    }

    const musicListDiv = document.getElementById('music-list');
    musicListDiv.innerHTML = ''; // Limpa as músicas existentes
    game.musicas.forEach(music => {
        const musicItem = document.createElement('div');
        musicItem.classList.add('music-item');
        musicItem.innerHTML = `
            <span class="play-icon">▶</span>
            <p>${music.compositor} - ${music.genero} - ${music.duracao}</p>
            <span class="music-artists">${music.artistas.join(', ')}</span>
        `;
        musicListDiv.appendChild(musicItem);
    });

    const galleryMainDisplay = document.getElementById('gallery-main-display');
    const thumbnailGalleryImagesDiv = document.querySelector('.thumbnail-gallery-images');

    galleryMainDisplay.src = game.wallpapers[0].url;
    galleryMainDisplay.alt = game.wallpapers[0].nome;

    thumbnailGalleryImagesDiv.innerHTML = ''; // Limpa as miniaturas existentes
    game.wallpapers.slice(1).forEach(wallpaper => {
        const img = document.createElement('img');
        img.src = wallpaper.url;
        img.alt = wallpaper.nome;
        img.addEventListener('click', () => {
            galleryMainDisplay.src = wallpaper.url;
            galleryMainDisplay.alt = wallpaper.nome;
        });
        thumbnailGalleryImagesDiv.appendChild(img);
    });
}

// Event listeners para a lista de jogos
document.addEventListener('DOMContentLoaded', () => {
    const gameNavListDiv = document.getElementById('game-nav-list');
    gameNavListDiv.innerHTML = ''; // Limpa qualquer conteúdo estático, embora não haja no novo HTML

    jogos.forEach(game => {
        const a = document.createElement('a');
        a.textContent = game.nome;
        a.href = "#"; // Links vazios por enquanto, ou você pode adicionar IDs de seção
        a.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link
            displayGameDetails(game);
            // Opcional: Adicionar uma classe 'active' para o jogo selecionado
            Array.from(gameNavListDiv.children).forEach(child => child.classList.remove('active'));
            a.classList.add('active');
        });
        gameNavListDiv.appendChild(a);
    });

    // Exibir o primeiro jogo por padrão e adicionar classe active
    if (jogos.length > 0) {
        displayGameDetails(jogos[0]);
        if (gameNavListDiv.firstElementChild) {
            gameNavListDiv.firstElementChild.classList.add('active');
        }
    }
}); 