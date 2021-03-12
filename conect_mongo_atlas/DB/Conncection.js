const mongoose = require('mongoose');

const URI ="mongodb+srv://admin:123@practicasweb.3qkbi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Conexion Exitosa!!');
};

module.exports = connectDB;
