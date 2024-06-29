const mongoose = require('mongoose');
//pass=process.env.PASSWORD
const url =
  'mongodb+srv://davharshbajaj2009:<#Harshjee2009>@cluster0.hynae8h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url, { useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err));
connection.on('connected', () => console.log('MongoDB connected'));
