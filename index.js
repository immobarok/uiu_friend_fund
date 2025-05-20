const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5500;

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1vqmal2.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   }
});

async function run() {
   try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      const fundraisersCollection = client.db('Fundraisers').collection('naturalDisasterFundraisers');
      const fundraisersCollection2 = client.db('Fundraisers').collection('fundraisersStudents');
      const fundraisersCollection3 = client.db('Fundraisers').collection('donations');
      const fundraisersCollection4 = client.db('Fundraisers').collection('confirmDonations');

      app.get('/naturalFundraisers', async (req, res) => {
         const cursor = fundraisersCollection.find();
         const result = await cursor.toArray()
         res.send(result);
      })
      app.get('/fundraisers', async (req, res) => {
         const cursor = fundraisersCollection2.find();
         const result = await cursor.toArray()
         res.send(result);
      })
      app.get('/fundraiser/:id', async (req, res) => {
         const id = req.params.id;
         const query = { _id: new ObjectId(id) };
         const result = await fundraisersCollection2.findOne(query);
         res.send(result)
      })
      app.get('/confirmDonations/:email', async (req, res) => {
         const userEmail = req.params.email;
         const query = { email: userEmail };
         const result = await fundraisersCollection4.find(query).toArray();
         res.send(result)



      })

      app.post('/fundraisers', async (req, res) => {
         const newFundraiser = req.body;
         const result = await fundraisersCollection2.insertOne(newFundraiser);
         res.send(result);

      })
      app.post('/confirmDonations', async (req, res) => {
         const confirmDoner = req.body;
         const result = await fundraisersCollection4.insertOne(confirmDoner);
         res.send(result);
      })
      //auth related api

      app.post('/jwt', async (req, res) => {
         const user = req.body;
         console.log(user);
         const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, { expiresIn: '1h' })
         res.
            cookie('token', token, {
               httpOnly: true,
               secure: true,
               sameSite: 'none'
            })
            .send({ success: true })
      })

      //clear cookies
      app.post('/logOut', async (req, res) => {
         const user = req.body;
         res.clearCookie('token', { maxAge: 0 }).send({ success: true })
      })

      app.post('/donations', async (req, res) => {
         const user = req.body;
         const result = await fundraisersCollection3.insertOne(user);
         res.send(result);
      })



      // app.post('/jwt', async(req, res)=>{
      //   const user = req.body;
      //   console.log(user);
      //   const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN, {expiresIn: '1h'})
      //   res.cookie('token', token, {
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV === 'production',
      //     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
      //     })
      //     .send({status: true});

      // })


      // const ObjectId = require('mongodb').ObjectId;
      // app.get('/donations/:id', async(req, res)=>{
      //     const id = req.params.id;
      //     const query = {_id: ObjectId(id)}
      //     console.log(query);
      // })

      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
   }
}
run().catch(console.dir);


app.get('/', (req, res) => {
   res.send('Server is running!!!')
})

app.listen(port, () => {
   console.log(`Server running on the port ${port}`);
})