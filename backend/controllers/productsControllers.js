const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const validateProduct = require('../utils/productsValidate');
const productsTable = 'products';
// 🆕 Create product
exports.createProduct = (req, res) => {
  try {
    const data = {
      productId: uuidv4(),
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      offerprice: req.body.offerprice,
      stock: req.body.stock,
      category: req.body.category,
      image: req.body.image
    };

    const error = validateProduct(data);
    if (error) return res.status(400).json({ message: error });

    const sql = `
      INSERT INTO \`${productsTable}\` 
      (productId, name, description, price, offerprice, stock, category, image)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      data.productId, data.name, data.description,
      data.price, data.offerprice, data.stock,
      data.category, data.image
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("DB Insert Error:", err);
        return res.status(500).json({ message: 'Database error', error: err });
      }

      res.status(201).json({
        message: 'Product created successfully',
        productId: data.productId
      });
    });

  } catch (err) {
    console.error('Caught in catch block:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// 🔍 Get all products
// 🔍 Get all products with optional pagination
exports.getAllProducts = (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const isPaginated = !isNaN(page) && !isNaN(limit);

  if (isPaginated) {
    const offset = (page - 1) * limit;

    // First: Get total product count
    db.query(`SELECT COUNT(*) AS total FROM \`${productsTable}\` `, (countErr, countResult) => {
      if (countErr) {
        return res.status(500).json({ message: 'Failed to count products', error: countErr });
      }

      const total = countResult[0].total;
      const totalPages = Math.ceil(total / limit);

      // Second: Fetch paginated products
      db.query(`SELECT * FROM \`${productsTable}\`  LIMIT ? OFFSET ?`, [limit, offset], (dataErr, result) => {
        if (dataErr) {
          return res.status(500).json({ message: 'Failed to fetch products', error: dataErr });
        }

        return res.status(200).json({
          currentPage: page,
          totalPages,
          totalItems: total,
          limit,
          data: result
        });
      });
    });
  } else {
    // If no pagination provided, return all products
    db.query(`SELECT * FROM \`${productsTable}\` `, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to fetch products', error: err });
      }

      res.status(200).json(result);
    });
  }
};


// 🔍 Get product by ID
exports.getProductById = (req, res) => {
  const { id } = req.params;

  db.query(`SELECT * FROM \`${productsTable}\`  WHERE productId = ?`, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(result[0]);
  });
};

// ✏️ Update product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const data = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    offerprice: req.body.offerprice,
    stock: req.body.stock,
    category: req.body.category,
    image: req.body.image
  };

  const error = validateProduct({ ...data, productId: id });
  if (error) return res.status(400).json({ message: error });

  const sql = `
    UPDATE \`${productsTable}\`  SET
      name = ?, description = ?, price = ?, offerprice = ?, stock = ?, category = ?, image = ?
    WHERE productId = ?
  `;

  const values = [
    data.name, data.description, data.price,
    data.offerprice, data.stock, data.category, data.image, id
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database update error', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found to update' });
    }

    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// ❌ Delete product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query(`DELETE FROM \`${productsTable}\`  WHERE productId = ?`, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database delete error', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Product not found to delete' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  });
};


exports.searchProducts = (req, res) => {
  const name = req.query.name?.trim();

  if (!name || name.length < 2) {
    return res.status(400).json({ message: 'Search term must be at least 2 characters' });
  }

  const keyword = `%${name}%`; // No need to force lowercase if DB collation is case-insensitive
  console.log("Search keyword:", keyword);

  const sql = `SELECT * FROM \`${productsTable}\`  WHERE name LIKE ?`;

  db.query(sql, [keyword], (err, result) => {
    if (err) {
      console.error("Database error during search:", err);
      return res.status(500).json({ message: 'Database error', error: err });
    }

    console.log("Search result:", result);

    if (result.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ results: result });
  });



};




exports.sortProductsByPrice = (req, res) => {
  const sortOrder = req.query.order === 'desc' ? 'DESC' : 'ASC'; // get query param

  const sql = `SELECT * FROM products ORDER BY price ${sortOrder}`;

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json({
      sortBy: 'price',
      sortOrder,
      results: result
    });
  });
};

