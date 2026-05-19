const app = require('./src/app');
const connectDB = require('./src/config/database');
const  decriptedPassword  = require('./src/bycript');
require("dotenv").config();
connectDB()

app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
    // console.log(decriptedPassword('Sahil.in15052006', '$2b$10$N/.kmswwCghOM0Y5NVTNCuhoCEHKpj0fUIJxiFEUV6qXFifedAKIq')); 
})

