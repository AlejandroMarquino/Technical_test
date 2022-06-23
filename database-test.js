const sqlite = require('sqlite');

async function setup() {
    const db = await sqlite.open("./mydb.sqlite");
    await db.migrate({force: 'last'})

    const event = await db.all('SELECT * FROM event')
    console.log('ALL EVENT', JSON.stringify(event, null))

    
}

setup();