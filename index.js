const stripe = require('stripe')('sk_test_51OzNzKSBG9MAmZLJVIIyi4Lv8x8Udr795atNPAWyRMzu0dlzJGakYZEyXOw0UjfLiPwRQi28Hyivy9S4jhrWnkVk00kcIdp0tL');
const express = require('express');
const app = express();
const YOUR_DOMAIN = 'http://localhost:4242';
app.use(express.static('public'));//middleware to serve static checkout pages
app.get("/", (req, res) => {
    res.status(201).send({
        success: 'true',
        message: 'server running on port 4242'
    });
});

// payment stripe endpoint
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1PQP0QSBG9MAmZLJ426IPCUo',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });

    res.redirect(303, session.url);
});
app.listen(4242, () => { console.log('server listening on port 4242') });