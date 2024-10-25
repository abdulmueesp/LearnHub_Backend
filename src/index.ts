import express from 'express';
const app = express();
const port =3000
const cors = require('cors')


const corsOptions={
    origin:"http://localhost:5173"
}


// routers 
const adminRouter =require("../src/Router/Adminrouter")

// buffer fromats 
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use("/admin",adminRouter)

app.listen(port, () => {
    console.log('The application is listening on port 3000!');
})