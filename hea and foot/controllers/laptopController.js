'use strict'
exports.laptopController = (req, res) => {
    const data = {
        "name":"rudra"
    }
   
    res.render('laptops', data)
}
