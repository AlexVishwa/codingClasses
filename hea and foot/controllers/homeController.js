'use strict'
exports.homeController = (req, res) => {
    const data = {
        "name":"rudra"
    }
   
    res.render('index', data)
}





