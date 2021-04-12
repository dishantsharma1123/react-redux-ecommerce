const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51IagTlSJSMA09VcpoC7yYd25BTLUDctsodVhGDGFEWsEcqsRHK8m9TWaUBImLmm7QjG6qN83wM7CX0Ryf8KMiuKh00CpiFNQ0S')
const { v4: uuidv4 } = require('uuid')
const PORT = process.env.PORT || 8080;

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome into React Shop Website.")
})

app.post('/checkout', async (req, res) => {
    let error
    let status
    try {
        const { product, token } = req.body
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const key = uuidv4()
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: 'INR',
                customer: customer.id,
                receipt_email: token.mail,
                description: 'all products description',
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip,
                    }
                }
            },
            { idempotencyKey: key })
        status = 'success'
    } catch (err) {
        console.log(err)
        status = 'error'
    }
    res.json({ status })
})

app.listen(PORT, () => {
    console.log('App is successfully ruuning on port 8080')
})

//11 min 12 sec
