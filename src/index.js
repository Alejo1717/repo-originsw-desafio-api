require('dotenv').config();
const app = require('./app');
const database = require('./database');

async function main() {
    database.connection.sync();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();
