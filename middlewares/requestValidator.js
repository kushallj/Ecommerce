const db = require("../models");
const Category = db.category;
const validateCategoryRequest = (req, res, next ) =>{
    if(!req.body.name) {
        res.status(400).send({
            message: "Name of the category can't be empty !"
        })
    }
    next();
}const validateProductRequest=(req,res,next)

module.exports = {
    validateCategoryRequest: validateCategoryRequest
}