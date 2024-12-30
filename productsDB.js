require("dotenv").config();// sends data in database of cloud mongoose 

const connectDB = require("./db/connect");
const Product = require("./models/products");
const ProductJson = require("./products.json");

const start =async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("Data Imported");

} catch (error) {
    console.log(error);

}
};
start();
