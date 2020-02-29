// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}

exports.newProduct = (req, res) => {
  res.render('pages/newProduct');
}

exports.productInfo = (req, res) => {
  const id = req.params.id;

  ProductModel.show(id).then((info) => {
    res.render('pages/productInfo', {product: info})
  });
}

exports.editProduct = (req, res) => {
  const id = req.params.id;

  ProductModel.show(id).then((info) => {
    res.render('pages/editProduct', {product: info})
  });
}

exports.addNewProduct = (req, res) => {
  const newProduct = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
  };
  
  ProductModel.insert(newProduct).then(() => {
    res.redirect('/');
  });
}

exports.updateProduct = (req, res) => {
  const edit = {
    name: req.body.name,
    description: req.body.description,
    price: parseFloat(req.body.price),
    updated_at: new Date(),
  };
  
  const id = req.params.id;

  ProductModel.update(edit, id).then(() => {
    res.redirect('/');
  });
}

exports.deleteProduct = (req, res) => {
  const id = req.body.id;

  ProductModel.delete(id).then(() => {
    res.redirect('/');
  });
}

