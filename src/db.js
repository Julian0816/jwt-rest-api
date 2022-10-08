// const Datastore = require('nedb');
// const { promisify } = require('util');


// const db = new Datastore();

// db.insertPromise = promisify(db.insert);
// db.findOnePromise = promisify(db.findOne);

// module.exports = db;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://abc:123@cluster0.feunnve.mongodb.net/AuthDB?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const User = mongoose.model('User', {
    username: {
        type: String
    },
    password: {
        type: String
    }
});

const db = {
    insertPromise: function ({ username, password}) {
        const userDoc = new User({username, password});
        return userDoc.save()
    },
    findOnePromise: function ({username}) {
        return User.findOne({username}).exec();
    }
}

module.exports = db;