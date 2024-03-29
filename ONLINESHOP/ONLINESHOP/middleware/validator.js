const { check, oneOf, body } = require("express-validator");

const ValidateOrder = [
    check("fname")
        .not().isEmpty().withMessage("Please Enter the Full Name!!"),
    check("postalCode")
        .matches(/^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d/).withMessage("Please Enter a Valid Postal Code!!"),
    check("email")
        .isEmail().withMessage("Please Enter a valid E-mail ID!!"),
    check("province")
        .not().isEmpty().withMessage("Please Enter the Province!!"),
    check("cnumber")
        .matches(/^\d{3}-\d{3}-\d{4}/).withMessage("Please Enter a Valid Contact Number!!"),
    check("address")
        .not().isEmpty().withMessage("Please Enter Address for shipping!!"),
    check("city")
        .not().isEmpty().withMessage("Please Enter a City!!"),
    check("productOne")
        .not().equals("0").isInt().withMessage("Product Purchase must be greater than 0!!"),
        check("productTwo")
        .not().equals("0").isInt().withMessage("Product Purchase must be greater than 0!!"),
        check("productThree")
        .not().equals("0").isInt().withMessage("Product Purchase must be greater than 0!!"),
    
    check().custom((value, { req }) => {
        const productOneQuantity = parseInt(req.body.productOne);
        const productTwoQuantity = parseInt(req.body.productTwo);
        const productThreeQuantity = parseInt(req.body.productThree);
        const productFourQuantity = parseInt(req.body.productFour);
        const Total = (productOneQuantity * 2) + (productTwoQuantity * 3) + (productThreeQuantity * 5) + (productFourQuantity * 10);

        if (Total < 10) {
            throw new Error("Minimum Order should of atleast $10!!");
            
        }
        return true;
    }),
    oneOf([
        body("productOne").not().isEmpty(),
        body("productTwo").not().isEmpty(),
        body("productThree").not().isEmpty(),
        body("productFour").not().isEmpty(),
    ], { message: "At least one product should be purchased!!" })
];

module.exports = {
    ValidateOrder
};
