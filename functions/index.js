const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hb9GUBFe7Bk9Qsgu8L3jV2rVSCNZN3qwWuzRG33Jz3YUA0wW6VqOHhHH4l7CT0UURHUu37DoHIm9kEh3kwZgpRY00AmStgpFK')

// API


   // App config
const app = express();

   // Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

   // API routes
app.get('/', (request, response) => response.status(200).send("hello!"))

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;

   console.log("Payment Request Recieved, For this amount >>> ", total)

   const paymentIntent = await stripe.paymentIntents.create({
      amount: total,    // Subunits of currency
      currency: "usd",
   });

   // OK - Created
   response.status(201).send({
      clientSecret: paymentIntent.client_secret,
   });
});

   // Listen Command
exports.api = functions.https.onRequest(app);

// Example Endpoint

// http://localhost:5001/amz-clone-8c5ef/us-central1/api


