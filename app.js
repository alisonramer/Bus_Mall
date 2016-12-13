'use strict'

var allProducts = [];
var filePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var randomizedImages;

var clickTotal = 0;

function MakeProducts (products, filePath) {
  //for each one of the products of the stores we're going to make the following calculations //
  this.products = products;
  this.filePath = filePath;
  this.clickTotal = 0;
  this.numberofApperances = 0;
  this.displayedLastTime = false;

}
//new object that has the above qualities defined.

function create (){
  for (var i = 0; i < filePath.length; i++) {
    allProducts.push (new MakeProducts(products[i], filePath[i]));
  }
}
create();
//now we are going to take the information that we organized and print it onto the screen - with images


function renderProducts () {
  //you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.
  randomizeImages ();
  var leftImage = document.getElementById('left');
  leftImage.src = filePath[randomizedImages];

//you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.
  randomizeImages ();
  var centerImage = document.getElementById('center');
  centerImage.src = filePath[randomizedImages];

  randomizeImages ();
  var rightImage = document.getElementById('right');
  rightImage.src = filePath[randomizedImages];
}
renderProducts();
//Random Images//
function randomizeImages () {
  randomizedImages = Math.floor(Math.random() * (20-0) + 0);
}
randomizeImages ();

//Check to Make Sure Not Duplicates //



//Event Handler//
