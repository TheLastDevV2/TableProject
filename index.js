//the base storage, can be updated to a SQL sever 
let storage = {
    
}

//this function create a key with the values of input and tranform it in a object
//and append to the tabble
const createKey = () =>{
    event.preventDefault()

    let newObject = document.getElementById("object").value;
    let newItem = document.getElementById("item").value;
    let newPrice = document.getElementById("price").value;


    storage[newObject] = {item: newItem, price: newPrice};
    
    const newLine = createTable(newObject, storage[newObject])
    const table = document.querySelector("table tbody");
    table.appendChild(newLine)
    
};

//function to clear the table previous created
const clearTable = () => {
    event.preventDefault()
    const table = document.querySelector("table tbody");
    table.innerHTML = ""
}

//function to create a table with the input value colleted by html form
function createTable(key, object) {

    const newObject = document.createElement("tr");

    //this block is assigned to do the class of item row
    const keyCell = document.createElement("td");
    keyCell.textContent = key;
    newObject.appendChild(keyCell);

     //this block is assigned to do the item row
    const itemCell = document.createElement("td");
    itemCell.textContent = object.item;
    newObject.appendChild(itemCell);

    //this block is assigned to do the price row
    const priceCell = document.createElement("td");
    priceCell.textContent = "R$"+object.price;
    newObject.appendChild(priceCell);

    return newObject; //return updated table
}
// a