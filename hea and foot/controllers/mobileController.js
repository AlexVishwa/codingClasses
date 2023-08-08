'use strict'
exports.mobileController = (req, res) => {
    const data = {
        "name":"rudra"
    }
   
    res.render('mobile', data)
}
