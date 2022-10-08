const Datastore = require('nedb');
const { promisify } = require('util');

const db = new Datastore();

db.insertPromise = promisify(db.insert);
db.frindOnePromise = promisify(db.findOne);