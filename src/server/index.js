const Server = require('./server');

async function start() {
  try {
    const server = new Server();
    await server.start();
    console.log(`> Ready on ${server.url}`);
  } catch (e) {
    console.error('> Failed to start the server');
    console.error(e);
    process.exit(-1);
  }
}

start();
