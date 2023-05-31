const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
  let data = req.body.order_data || [];
  data.splice(0, 0, { Order_date: req.body.order_date });
  

  //if email not existing in db then create: else: InsertMany()
  let eId = await Order.findOne({ 'Email': req.body.Email });
  console.log(eId);

  if (eId === null) {
    try {
      console.log(data);

      await Order.create({
        Email: req.body.Email,
        order_data: [data]
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error: " + error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate({ Email: req.body.Email }, { $push: { order_data: data } }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error: " + error.message);
    }
  }
});
router.post('/myOrderData', async (req, res) => {
    try {
        console.log(req.body.Email)
        let eId = await Order.findOne({ 'Email': req.body.Email })
        //console.log(eId)
        res.json({orderData:eId})
    } catch (error) {
        res.send("Error",error.message)
    }
    

});

module.exports = router;
