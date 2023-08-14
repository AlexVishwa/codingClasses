const { validationResult } = require("express-validator");
const {Order} = require("../model/orderModel");

const getOrder = (req, res) => {
    res.render("pages/order");
};

const postOrder = (req, res) => {
    let errors = validationResult(req);



  



    if (!errors.isEmpty()) {
        res.render("pages/order", { errors: errors.array() });
    } else {

        let fname = req.body.fname;
        let email = req.body.email;
        let cnumber = req.body.cnumber;
        let address = req.body.address;
        let city = req.body.city;
        let postalCode = req.body.postalCode;
        let province = req.body.province;
        let dAddress = `${address},${city},${province},${postalCode}`;
        let deliveryDate= req.body.deliveryDate;

        let product1 = 2 * req.body.productOne;
        let product1Quantity = req.body.productOne;
        let product2Quantity = req.body.productTwo;
        let product3Quantity = req.body.productThree;
        let product4Quantity = req.body.productFour;

        let productTwo = 3 * req.body.productTwo;
        let product2 = productTwo;

        let productThree = 5 * req.body.productThree;
        let product3 = productThree;

        let productFour = 10 * req.body.productFour;
        let product4 = productFour;

        let final = product1 + product2 + product3 + product4;
        let TaxRate = 0;
        switch (province) {


            case "Ontario":
            case "ON":
                TaxRate = 0.13;
                break;
            case "PEI":
            case "PE":
                TaxRate = 0.15;
                break;
            case "Manitoba":
            case "MB":
                TaxRate = 0.12;
                break;
                    
            case "Newfoundland and Labrador:":
            case "NL":
                 TaxRate = 0.15;
                  break;
            case "New Brunswick":
            case "NB":
                 TaxRate = 0.15;
                  break;
            case "Nova Scotia:":
             case "NS":
                 TaxRate = 0.15;
                   break;
                    
                    
            case "Quebec":
            case "QC":
                TaxRate = 0.14;
                break;
           
            case "British Columbia":
            case "BC":
                TaxRate = 0.12;
                break;
            case "Alberta":
            case "AB":
                TaxRate = 0.05;
                break;    
           
            case "Yukon":
            case "YT":
                TaxRate = 0.05;
                break;
            case "Nunavut":
             case "NU":
                TaxRate = 0.05;
                break;
            case "Saskatchewan":
            case "SK":
                TaxRate = 0.11;
                break;
           
            case "Northwest Territories":
            case "NT":
                TaxRate = 0.05;
                break;
        }

        let sCharges = 20;
        let taxes =  final * TaxRate;
        
       let subtotal = product1 + product2 + product3 + product4 + sCharges;
       let total = final + taxes + sCharges;

       //console.log('product 4 is'+product4);


        let newOrder = new Order({
            fname : fname,
            email : email,
            cnumber: cnumber,
            address: address,
            city: city,
            postalCode: postalCode,
            province: province,
            product1: product1,
            product2: product2,
            product3: product3,
            product4: product4,
            deliveryDate: deliveryDate,
            sCharges: sCharges,
            taxes: taxes.toFixed(2),
            total: total.toFixed(2),
        });
        
        newOrder.save()
            .then(()=>{console.log(`Saved!!`)})
            .catch(()=>{console.log(errors.message)});

        res.render("./pages/recipt", {
            fname: fname,
            email: email,
            cnumber: cnumber,
            dAddress: dAddress,
            province: province,
            product1: product1,
            product2: product2,
            product3: product3,
            product4: product4,
            sCharges: sCharges,
            subtotal: subtotal,
            taxes: taxes.toFixed(2),
            total: total.toFixed(2),
            product1Quantity: product1Quantity,
            product2Quantity: product2Quantity,
            product3Quantity: product3Quantity,
            product4Quantity: product4Quantity
        });
    }
};

// Export Modules
module.exports = {
    getOrder,
    postOrder
};
