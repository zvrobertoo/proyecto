class product {
    constructor(name, price, year){
     this.name = name;
     this.price = price;
     this.year = year;
    }
}
class UI {
    addProduct(){
const productList = document.getElementById("product-list");
const element = document.createElement("div");
element.innerHTML =
<div class="card text-center mb-4">
    <div class="card-budy">
<strong>Product Name</strong>: ${product.name}
<strong>Product Price</strong>: ${product.price}
<strong>Product Year</strong>: ${product.year}
<a href = "#" class = "btn btn-danger" name="delete">delete</a>
    </div>
</div>
;
productList.appendChild(element);
this.resetForm();

    }
    resetForm(){
        document.getElementById("product-form").reset();
    }

    deleteProduct(){
        if(elemetn. name === "delete")
        element.parentElement.parentElement.parentElement.remove();
        this.ShowMessage("Product deleted successfullly", "danger")
    }
    ShowMessage(message, cssClass){
        const div = document.createElement("div");
        div.className = "alert alert- $ {cssClass} mt-4"; 
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        setTimeout(function () {
        document.querySelector("alert").remove();
        }, 3000);
    }
}
// DOM events
Document.getElementById("product-form").addEventListener("submit" , function (e) {
    const name= document.getElementById("name").Value;
    const price = document.getElementById("price").Value;
    const year= document.getElementById("year").Value;

    const product = new product (name, price, year);

    const ui = new UI();

    if(name === "" || price === "" || year === ""){
        return ui.ShowMessage("complete fields please", "danger")
    }
    ui.addProduct(product);
    ui.resetForm();
    ui.ShowMessage("Product Added Successfully", "succes");

    e.preventDefault();
}); 

document.getElementById("product-list").addEventListener("click" , function(){
    const ui = new UI();
    ui.deleteProduct(e.target);
})

