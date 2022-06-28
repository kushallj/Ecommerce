const express = require("express");
const serverConfig= require("./config/server.config");
const bodyParser = require("body-parser");


const app= express();





app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const db= require("./module");
const Category= db.category;

db.sequelize.sync({force: true})
.then(()=>{
    console.log("tables dropped and created");
    init();
})

function init(){
    var categories =[
        {
            name:"Electronics",
            description:"This category will contain all the electronic products"
        },
        {
            name:"KitchenItems",
            description:"This category will contain all the kitchen products" 

        }
    ];
    Category.bulkCreate(categories).then(()=>{
        console.log();

    })
    .catch(err=>{
        console.log("Error while initialising categories table");
    })
}

require("./routes/category.routes")(app)

app.listen(serverConfig.PORT, ()=>{
    console.log(`Application started on the port no : $(server.Config.PORT)`)
})



