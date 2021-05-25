console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` and set it to an empty array
let basket = [];

//Create a function called `addItem`
function addItem( item ){

  //add the new item to the global array `basket`.
  basket.push(item);

  //return `true` indicating the item was added
  return true;
} //end addItem

//Create a function called `listItems`
function listItems() {
  //loop over the items in the `basket` array
  for(let item of basket){
    //console.log each individual item on a new line
    console.log(item);
  }
} //end listItems

function empty(){
  //reset the `basket` to an empty array
  basket = [];
} //end empty
