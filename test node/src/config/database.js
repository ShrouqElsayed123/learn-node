const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://shrouqwork123_db_user:<db_password>@learn-mongodb.qqx0vgy.mongodb.net/?retryWrites=true&w=majority&appName=Learn-mongodb');
        console.log('DB connected ✅');

    }
    catch (err) {
        console.log("DB Error", err);
        process.exit(1);

    }

}

module.exports = connectDB;