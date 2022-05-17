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

connect(`mongodb+srv://${process.env.USER2}:${process.env.PASSWORD}@recept-app.gvbqh.mongodb.net/kaffesajten`).then(() =>{
    app.listen(port, () =>{
        console.log('hello im listening to port ' + port)
    })
})


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
