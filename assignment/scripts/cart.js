console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//GLOBAL VARIABLES (ALPHABETICAL)

//Create a global variable named `basket` and set it to an empty array
let basket = [];
//Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;

//FUNCTION DEFINITIONS (ALPHABETICAL)

//Create a function called `addItem`
function addItem( item ){
  console.log(`addItem - basket is: ${basket}, item is ${item}`);

  //update addItem to use isFull to prevent adding more than maxItems
  if(!isFull()){
    //add the new item to the global array `basket`.
    console.log(`addItem - adding item: ${item}`);
    basket.push(item);

    //return `true` indicating the item was added
    console.log(`addItem - basket is now: ${basket}`);
    return true;
  } //end addItem

  // if there was no room and the item could not be added, return false
  console.log(`addItem - basket is full. ${item} was not added`);
  return false;
} //end addItem

//Create a function called `empty`.
function empty(){
  console.log(`empty - basket is: ${basket}`);
  //reset the `basket` to an empty array
  basket = [];
  console.log(`empty - final basket is: ${basket}`);
} //end empty

//Create a function called isFull()
function isFull() {
  console.log(`isFull - basket is: ${basket}, length: ${basket.length}`);
  console.log(`isFull - maxItems is: ${maxItems}`);
  if (basket.length < maxItems){
    //return `false` if the basket contains *less* than max number of items
    return false;
  } else {
    //return `true` otherwise (equal or more than maxItems)
    return true;
  }
} //end isFull

//Create a function called `listItems`
function listItems() {
  console.log(`listItems - basket is: ${basket}`);
  //loop over the items in the `basket` array
  for(let item of basket){
    //console.log each individual item on a new line
    console.log(item);
  }
} //end listItems

//Create a function called `removeItem`
function removeItem( item ) {
  console.log(`remove item: ${item} from basket: ${basket}`);
  //use array.indexOf to find the index of the first matching item in the basket.
  let itemIndex = basket.indexOf(item);
  console.log(`first instance of item in basket is at ${itemIndex} (if -1, not in basket)`);
  //make sure item is in array
  if ( itemIndex >= 0 ) {
    //use array.splice to remove the first matching item from the basket.
    basket.splice(itemIndex, 1);
    console.log(`the basket with the item removed: ${basket}`);
    //return removed item
    return item;
  } else {
    //item is not in array. return null
    return null;
  }
} //end removeItem

// testing!
listItems();
console.log(addItem('apple'));
listItems();
console.log(addItem('eggs'));
listItems();
console.log(addItem('butter'));
listItems();
console.log(addItem('flour'));
listItems();
console.log(`Is basket full (should be false): ${isFull()}`);
console.log(addItem('scotch'));
listItems();
console.log(`Is basket full (should be true): ${isFull()}`);
console.log(addItem('pineapple'));
listItems();
console.log(`Attempting to remove pineapple, which isn't in basket - should be null: ${removeItem('pineapple')}`);
console.log(`Removing eggs from basket: ${removeItem('eggs')}`);
empty();
listItems();
addItem('apple');
