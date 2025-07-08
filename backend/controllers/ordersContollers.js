const db = require('../config/db');
const {v4:uuidv4} = require('uuid');
const myOrdersTable =  'cart';

exports.addToCart = (req, res) => {
    const cartId = uuidv4();
    const  {userId, productId, quantity } = req.body;

    if(!userId ||  !productId || !quantity || quantity <= 0) {
        return res.status(400).json({
            message: 'User Id, Product ID , Quantity fileds must be >'
        })
    }
    
    const sqlQuery = `INSERT INTO \`${myOrdersTable}\` 
                     (cartId, userId, productId, quantity) VALUES (?, ?, ?, ?)
                     ON DUBLICATE KEY UPDATE quantity = quantity + ?`;

    db.query(sqlQuery, [cartId, userId, productId, quantity], (err, result) => {
        if(err) {
            return res.status(500).json({
                message: 'Failed to add to cart',
                error: err
            })
        }
        res.status(200).json({ message: 'Product added to cart' });
    });

}

exports.viewCart = (Req, res) => {
    
}