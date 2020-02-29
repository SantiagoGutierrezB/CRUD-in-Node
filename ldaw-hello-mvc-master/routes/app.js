// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

router.get('/newProduct', PagesController.newProduct);

router.get('/product/:id', PagesController.productInfo);

router.get('/product/:id/edit', PagesController.editProduct);

router.post('/newProduct', PagesController.addNewProduct);

router.post('/product/:id/edit', PagesController.updateProduct);

router.post('/', PagesController.deleteProduct);

// Exporta las configuraciones
module.exports = router;