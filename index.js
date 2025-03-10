const express = require('express');
 const cors = require('cors');

 const app = express();
  const port = process.env.PORT || 5000;

//   MIDDLEWARE
app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('This is Coffee store server running')
})


app.listen(port, ()=>{
    console.log(`coffee server is running ${port}`)
})