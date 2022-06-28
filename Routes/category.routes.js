
const { requestValidator } = require("../middlewares")

const categoryController = require("../controllers/category.controller")

module.exports = function(app){
    app.post("/ecom/api/v1/categories", [requestValidator.validateCategoryRequest]);
    app.get("/ecom/api/v1/categories", categoryController.findAll); 
    app.get("/ecom/api/v1/categories/:id", categoryController.findOne); 
    app.put("/ecom/api/v1/categories", categoryController.validateCategoryRequest); 
    app.delete("/ecom/api/v1/categories", categoryController.delete);
}
