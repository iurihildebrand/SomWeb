class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../../global.css" />
        <title>Header</title>
    </head>
    <body>
        <header>
        <a href="../HomePage/index.html">
        <h1>SomWeb</h1>
        </a>
        <ul>
            <a href="../MusicalGenders/index.html">
            <li>Generos Musicais</li>
            </a>
            <a href="../CoverGallery/index.html">
            <li>Galeria de Álbuns/Grade de Shows</li>
            </a>
            <a href="../Playlists/index.html">
            <li>Lista de Gêneros/Tabela de Discos</li>
            </a>
        </ul>
        </header>
    </body>
    </html>
`;
  }
}

customElements.define("main-header", Header);
