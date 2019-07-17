const db = require('./models/index');
const express = require('express');
const app = express();

// app.get('/', (req, resp) => {
//   resp.send('lwgal');
// });

// app.get('/users/:user_id', (req, resp) => {
//   resp.send('vc consultou o ' + req.params.user_id
//     // [
//     //   {id:1, name:'ka'},
//     //   {id:2, name:'caio'},
//     //   {id:3, name:'lion'},
//     // ]
//   );
// });

app.listen(3666, () => {console.log('comecou')});

app.use(express.json());
app.use('/users', require('./routes/user'));
app.use('/orders', require('./routes/orders'));

db.sequelize.sync();

