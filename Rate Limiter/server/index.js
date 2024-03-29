// server.js
const express = require('express');
const RateLimiter =require( '../src/RateLimiter.js') 
const rateLimiter = new RateLimiter()
const app = express();
const PORT = 3000;
const cors = require('cors')
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });

  app.get('/', (req, res) => { res.json('connected'); });

  app.get('/search', (req, res) => { 
    const user = req.headers.user
    if(!rateLimiter.isAllowed(user))
    {
      res.status(429).send('Too Many Requests');
      
    } else { res.status(200).send(user);}
   });
   
   app.get('*', (req,res)=>{

    res.status(400).send('Bad Request')
   })
// API endpoint to search data





