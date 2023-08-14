'use strict'
exports.homeController = (req, res) => {
    const data = {
        "name":"rudra"
    }
   
    res.render('index', data)
}

function onclickDelete(){
alert("Your item will be deleted");
}





