import express, {json} from 'express'
import cors from 'cors'

//Importing Routes
import timeConverted from './routes/timeConverted'


//Initialization
const app = express()
app.use(cors())


//Middlewares
app.use(json())
app.use(express.urlencoded({ extended: true })); 

//Def. Routes
app.use('/api/transform-time/json', timeConverted)

//export
export default app