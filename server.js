const webData = require('./data.js');

const http = require('node:http');

const port = 4000;

const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end( getHtml());
  
  });

  server.listen(port, () => {
    console.log(
      `server listening on port https://localhost:${
        server.address().port
      }`
    );
  });

  function getHtml(){

    let datosWeb = webData.getData();
    let webPage = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=, initial-scale=1.0">
          <title>${datosWeb.title}</title>
      </head>
      <body>
      <main>
      <nav>
            <ul>
              <li><a href="${datosWeb.enlaces[0].url}">${datosWeb.enlaces[0].nombre}</a></li>
              <li><a href="${datosWeb.enlaces[1].url}">${datosWeb.enlaces[1].nombre}</a></li>
              <li><a href="${datosWeb.enlaces[2].url}">${datosWeb.enlaces[2].nombre}</a></li>
            </ul>
        </nav>
        <h1>${datosWeb.subtitle}</h1>
        <p>
        ${datosWeb.description}</p>
      </main>
         
      </body>
      </html>`;
    return webPage;
  }
