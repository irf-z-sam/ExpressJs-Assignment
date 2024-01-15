//Assignment 1
// const express = require('express');
// const app = express();
// app.use((req, res, next)=>{
// console.log('In the middleware!');
// next();//Allows the request to continue to the next middleware in line
// });
// app.use((req, res, next)=>{
//     console.log('In the another middleware!');
//     res.send('<h1>Hello from Express..!</h1>')
//     });
//  app.listen(3000);

//Assignment 2
// const express = require('express');
// const app = express();
// app.use('/', (req, res, next)=>{
//     console.log('This always runs!');
//     next();
// })
// app.use('/add-product',(req, res, next)=>{
//     console.log('In the middleware!');
//     res.send('<h1>The "Add product" page...!</h1>')
//     });

// app.use('/',(req, res, next)=>{
//     console.log('In the another middleware!');
//     res.send('<h1>Hello from Express..!</h1>')
//     });
//  app.listen(3000);

//Assignment-2
 //Parsing Incoming Request
//  const express = require('express');
//  const bodyParser = require('body-parser');
// const app = express();
// // app.use(bodyParser.urlencoded());
// // app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/add-product',(req, res, next)=>{
//     res.send(`<form action="/product" method = "POST">
//     <input type = "text" name = "title" placeholder = "Product Title">
//     <input type = "text" name = "size" placeholder = "Product size">
//     <button type = "submit">Add Product</button></form>`)
//     });

//     app.use('/product',(req, res, next)=>{
//         console.log(req.body);
//         res.redirect('/');
//     })

// app.use('/',(req, res, next)=>{
//     res.send('<h1>Hello from Express..!</h1>')
//     });
//  app.listen(3000);

// const express = require('express');
//  const bodyParser = require('body-parser');
// const app = express();
// app.use(bodyParser.urlencoded({extended:true}));
// app.use('/add-product',(req, res, next)=>{
//     res.send('<form action="/product" method = "POST"><input type = "text" name = "title"><button type = "submit">Add Product</button></form>')
//     });
//     // app.get('/product',(req, res, next)=>{
//     //     console.log(req.body);
//     //     res.redirect('/');
//     // })

//     app.post('/product',(req, res, next)=>{
//         console.log(req.body);
//         res.redirect('/');
//     })

// app.use('/',(req, res, next)=>{
//     res.send('<h1>Hello from Express..!</h1>')
//     });
//  app.listen(3000);

//Assignment-3(Routers and Filters)
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')))

// app.use(adminRoutes);
app.use('/admin',adminRoutes);
app.use(shopRoutes);

// Page Not Found (404) Middleware
app.use((req, res, next) => {
    // res.status(404).send('<h1>Page Not Found</h1>');
res.status(404).sendFile(path.join(__dirname,'views','404.html'))

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});