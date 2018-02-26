import express from 'express';
import mongoose from 'mongoose';
import BodyParser from 'body-parser';
import routes from './src/routes/crmRoute';
const app = express();
const PORT =3000;
//
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
  useMongoClient:true
});

app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
routes(app);

app.use(express.static('public'));
app.get('/' ,  (req, res)   =>
  res.send(`Node and Express Server is Running on port ${PORT}`)
);

app.listen(PORT,()=>
console.log(`Your Server is running on port ${PORT}`)
);


