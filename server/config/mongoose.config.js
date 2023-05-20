const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.3:27017/DroneBucket', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));