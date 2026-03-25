const express = require('express');
const mongoose = require('mongoose');
const paystack = require('paystack')('your_paystack_secret_key');
const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb:')
    const user = mongoose.model('//localhost/dobby',{useNewUrlParser: true, useUnifieldtopology: true});
    const User = mongoose.model ('User' , {
        name: String,
        phone: String,
        earnings: { type: Number,default: 0}
    });
    app.post('/signup', async (req,res) => {
        const {name,phone} =req.body;
        const User = new User ({name,phone});
        await user.save();
        res.send('User created');
    });
    app.post('/withdraw', async (req,res) =>{
        const { userId,amount }=req.body

        playstack.transfer.created({
            amount: amount * 100,
            recipient: 'user_playstack_recipient_code',
            reason: 'Dobby withdrawal'
        }, (err , transfer)=>{
            if (err) return res.status(400).send(err);
            res.send('withdrawal initiated');
        })
    })
    app.listen(3000, () => console.log('Dobby running'));
