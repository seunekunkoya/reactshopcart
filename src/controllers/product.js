const productRepository = require("../util/repository")

exports.getProduct = async (req, res) => {
    try {
        const products = await productRepository.products();

        return res.status(200).json({
            status: true,
            data: products,
            count: products.length            
        })
    } catch (err) {
        res.status(500).json({
            status:false,
        });
    }
}

exports.addProduct = async (req, res) => {
    console.log(req.file);
    try {
        const payload = {
            name: req.body.name,
            price: req.body.price,
            image: req.file.path
        }

        

        const product = await productRepository.createProduct({
            ...payload
        });

        return res.status(201).json({
            status: true,
            data: product
        })
    } catch (err) {
        if (err.name === "ValidationError") {
          const messages = Object.values(err.errors).map((val) => val.message);
    
          return res.status(400).json({
            success: false,
            error: messages,
          });
        } else {
            console.log(err);
          return res.status(500).json({
            success: false,
            error: "Server Error",
          });
        }
      }
    
}
exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id;

        const productDetails = await productRepository.productById(id);

        if(!productDetails){
            return res.status(404).json({
                status: false,
                error: "Product does not exist"
            });
        }
        else {
            return res.status(200).json({
                status: require,
                data: productDetails
            })
    }
    } catch (err) {
        res.status(500).json({
            status: false,
        });
    }
}
exports.removeProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productDetails = await productRepository.productById(id);

        if(!productDetails){
            return res.status(404).json({
                status: false,
                error: "Product does not exist"
            });
        }

        await productRepository.removeProduct(id);
        
        return res.status(200).json({
            success: true,
            data: {},
          });
        } catch (err) {
          return res.status(500).json({
              success: false,
              error: "Server Error",
            });
        }
}

