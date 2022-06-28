const { init } = require("express/lib/application");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



const db= require(./)
const Category=
const Product= db.product;

Category.hasMany(Product);

db.sequelize.sync((force: true))
.then(()=>{
    console.log('tables dropped and created')
    init();
})

function init(){
    var categories= [
        {
            name:"Electronics",
            description:"This category will contain all the electronic product"
        },
       {
            name:"",
            description:""
        } 
    ]
}






