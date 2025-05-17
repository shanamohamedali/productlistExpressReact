const express = require("express");
const app = express();
const cors = require("cors");
const products = require("../backend/product.json");

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("==", id);
  const filterProduct = products.filter(item =>item.id===id);
  // console.log("...", filterProduct);
  if(filterProduct){
    res.json(filterProduct);
  }else
  {
    res.status(404).json({
      message:`The product with id - ${id} doesn't exist`
    });
  }
 
});

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
