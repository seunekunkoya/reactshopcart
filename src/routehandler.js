const productRoutes = require('./routes/carts');
const cartRoutes = require('./Cart/cartroute');

module.exports = app => {
    app.use("/api/v1/product", productRoutes);
    app.use("/api/v1/carts", cartRoutes);
}