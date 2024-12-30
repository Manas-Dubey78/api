require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT =  process.env.port || 5000;  // give server to run

const products_routes = require("./routes/products"); // brigs json on screen which is in controller part 

app.get("/",(req, res) => {   // to check error and it is a root
    res.send("Hello, World!");
    });
    // middleware or to set router
    app.use("/api/products", products_routes);  // by api/product we will call json
    const start = async () => {
        try {
            await connectDB(process.env.MONGODB_URL); // connect to database and this mongodb_url is taken from now .env file
            app.listen(PORT, () => {
                console.log(`${PORT} Yes connected`);
            });
        }
        catch (error) {
            console.log(error);
        }

    };
    start();
