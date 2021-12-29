const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://localhost:27017/nucampsite';
// connects us to the nucampsite db
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {

    console.log('Connected correctly to server');
// created new doc based on mongoose model named campsite
    const newCampsite = new Campsite({
        name: 'React Lake Campground',
        description: 'test'
    });
// then we saved doc to campsite collection n console.logged all saved documents
// created from the campsite model
    newCampsite.save()
    .then(campsite => {
        console.log(campsite);
        return Campsite.find();
    })
    // delete campsites
    .then(campsites => {
        console.log(campsites);
        return Campsite.deleteMany();
    })
    // closed connection
    .then(() => {
        return mongoose.connection.close();
    })
    .catch(err => {
        console.log(err);
        mongoose.connection.close();
    });
});