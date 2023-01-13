import  express  from "express";
import Stripe from "stripe";

const app = express();
const port = 3000;

const API_KEY = "pk_test_r967oFlUe6TsZFrT9wmrgElB";
const SECRET_KEY = "sk_test_KdqdxlYzsQNMvsHGoL80PsbT";

const stripe = Stripe(SECRET_KEY);

app.get('/name/', function(req, res){
    res.send("Hello world!");
 });
 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.post("/create-payment-intent",async (req, res) => {
    const { total_order_value } = req.body;
    try {
      const payment = await stripe.paymentIntents.create({
        amount:total_order_value,
        currency: "inr",
        automatic_payment_methods: {
          enabled: true,
        },
      });
  
      res.json({ clientSecret: payment.client_secret });
    } catch (error) {
      console.log(error);
    }
  });