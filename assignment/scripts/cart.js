console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named `basket` and set it to an empty array
let basket = [];
//Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

//Create a function called `addItem`
function addItem( item ){
  console.log(`addItem - basket is: ${basket}`);

  //add the new item to the global array `basket`.
  console.log(`addItem - adding item: ${item}`);
  basket.push(item);

  //return `true` indicating the item was added
  console.log(`addItem - basket is now: ${basket}`);
  return true;
} //end addItem

function empty(){
  console.log(`empty - basket is: ${basket}`);
  //reset the `basket` to an empty array
  basket = [];
  console.log(`empty - final basket is: ${basket}`);
} //end empty

//Create a function called `listItems`
function listItems() {
  console.log(`listItems - basket is: ${basket}`);
  //loop over the items in the `basket` array
  for(let item of basket){
    //console.log each individual item on a new line
    console.log(item);
  }
} //end listItems



// testing!
listItems();
console.log(`should return true: ${addItem('apple')}`);
listItems();
addItem('eggs');
listItems();
addItem('butter');
listItems();
addItem('flour');
listItems();
addItem('scotch');
listItems();
addItem('pineapple');
empty();
listItems();
addItem('apple');
