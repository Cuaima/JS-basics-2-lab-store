// TODO:

// Declare `shoppingCart`, something where you will be storing all products that the user buys.
var shoppingCart = []
// Declare `products`, the different that you will be selling under each of the departments.
// var products = []
var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]

var shopFromStore =  function () {
  var refNr = askUserForReferenceNumber();
  // Add the product with the matching referenceNumber to the shoppingCart
  products.forEach(function(product){
    // check if product refNR is something?
    // console.log(typeof refNr);
    // console.log(refNr);

    // 1.access product DONE
    // console.log(product);
    // 2. access product refference referenceNumber DONE
    // console.log(product.referenceNumber)
    // console.log(typeof product.referenceNumber);
    // 3. compare with user input
    if (parseInt(refNr) === product.referenceNumber){

      // console.log('match!'); //posts 'match!' if the number given matches an item in the product list

    // 4. return the product we want DONE
      var productSelected = product;
      // console.log(productSelected);
      shoppingCart.push(productSelected);
      // console.log(shoppingCart);

    // 5. figure out how to add to shopping cart
    }
    // console.log(productSelected);
    // console.log(shoppingCart);

  })

  // test
  console.log(shoppingCart);


  displayProductsFromShoppingCart();

  // calculate the total price of your cart, and use it:
  displayTotalPrice(/*The variable holding the totol price*/);

  // Ask the user if they want to continue shopping,
  // if yes, call this function again
  // if no, print the goodbye message
};

var displayProductsFromShoppingCart = function() {
  // iterate over the shoppingCart and display the contents


  // use the printProductsOnScreen function for inspiration
};

var askUserForReferenceNumber = function() {
  // Use window.prompt to ask the user a question and capture their response,
  // then, return the response from this function back to our caller
  //test
  // console.log('this runs');
  // return prompt('Please, fill in the reference number of the item you would like to buy');
  // this works
  var answer = window.prompt('WHAT!');
  return answer;
};

//
// do not change the code below (but feel free to change it if your WHOLE project works!)
//

var displayTotalPrice = function (amount = 0) {
  document.getElementById('total-price').innerText = amount;
};

var printProductsOnScreen = function () {
  for(var product of products){

    // create elements for refNr, name, price, with a class and the proper innerText
    var referenceNumberElement = document.createElement('span');
    referenceNumberElement.className  = 'referenceNumber';
    referenceNumberElement.innerText = product.referenceNumber;

    var nameElement = document.createElement('span');
    nameElement.className  = 'name';
    nameElement.innerText = product.name;

    var priceElement = document.createElement('span');
    priceElement.className  = 'price';
    priceElement.innerText = product.price;

    // Wrap our just created elements in a div
    var productElement = document.createElement('div');
    productElement.className = 'product';

    productElement.appendChild(referenceNumberElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);

    // Hang that div on the page
    document.getElementById('product-overview').appendChild(productElement);


  }
};

var runApp = function () {
  printProductsOnScreen();

  shopFromStore();
};

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    runApp();
  }
};
