import express,{ Request, Response, json } from 'express';
import rescepieRouter from './routes/recipes'
import categoryRouter from './routes/category'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
import { connect } from 'mongoose';

// connect('mongodb://localhost:27017/recepies-db').then(() =>{
//     app.listen(port, () =>{
//         console.log('hello im listening to port ' + port)
//     })
// })

connect(`mongodb+srv://${process.env.USER2}:${process.env.PASSWORD}@recept-app.gvbqh.mongodb.net/kaffesajten?retryWrites=true&w=majority`).then(() =>{
    app.listen(port, () =>{
        console.log('hello im listening to port ' + port)
    })
})


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://shakana:<password>@recept-app.gvbqh.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



const app = express()
app.use(cors())
app.use(json());
app.use('/recipes', rescepieRouter)
app.use('/category', categoryRouter)

// const port = 3030;
const port = process.env.PORT || 3030;
app.get('/', (req: Request, res: Response) =>{
    res.send('Hallooojjj')
})
