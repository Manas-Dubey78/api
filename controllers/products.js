const Product = require("../models/products");
const getAllProducts = async(req, res) =>{
    const { company, name, price, sort, select } = req.query;
    
    const queryOject = {};
    if(company){
        queryOject.company = company;
        }
        if(name){
            queryOject.name = { $regex: name, $options: "i"};   // $regex and $options is use whan you serarch wrong spell it ignore it
            }
            if(price){
                queryOject.price = price; 
                }

 let apiData =  Product.find(queryOject);

                if(sort){ // to sort
                    let sortFix = sort.replace(",", " ");
                    apiData =apiData.sort(sortFix);
                }
                if(select){ // to select\
                   // let selectFix = select.replace(",", " ");
                    let selectFix = select.split(",").join(" ");
                    apiData = apiData.select(selectFix);
                }

                let page = Number(req.query.page) || 1;    // this is used for pagination. "|| 1" is used to if user does not select page it ive bydefault first page
                let limit = Number(req.query.limit) || 3;
                const skip = (page - 1) * limit;//formula of pagination
                apiData = apiData.skip(skip).limit(limit);
                


    const myData = await apiData; // provide the searchrd data

 res.status(200).json({myData, nbHits: myData.length}); // nbHites provide total number of documents it give eg-3 will give because 3 is limit
 
};
const getAllProductsTesting = async(req, res) =>{  // you can remove testing part do it from all file
    const myData = await Product.find(req.query).sort("name");


 res.status(200).json({myData});
   

};

module.exports = { getAllProducts, getAllProductsTesting};