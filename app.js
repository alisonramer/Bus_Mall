//++++++++++++++++++++++++++++++++++++++++++++++++++++
// BUS MALL - CodeFellows Project by Alison Ramer
//++++++++++++++++++++++++++++++++++++++++++++++++++++

'use strict'

var filePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var allProducts = [];
var randomizedImages;
var clickCounter = 0;
var numberofApperances = 0;

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// CONSTRUCTOR FUNCTION
//++++++++++++++++++++++++++++++++++++++++++++++++++++
function MakeProducts (products, filePath) {
  //for each one of the products of the stores we're going to make the following calculations //
  this.products = products;
  this.filePath = filePath;
  this.clicks = 0;
  this.numberofApperances = 0;
}
//new object that has the above qualities defined.

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function makeNewProducts (){
  for (var i = 0; i < filePath.length; i++) {
    allProducts.push (new MakeProducts(products[i], filePath[i]));
  }
}
makeNewProducts();

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//  RANDOMIZED IMAGES
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function randomizeImages () {
  randomizedImages = Math.floor(Math.random() * (20-0) + 0);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// RENDER PRODCUCTS
//now we are going to take the information that we organized and print it onto the screen - with images
//++++++++++++++++++++++++++++++++++++++++++++++++++++

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
  rightImage.src = filePath[randomizedImages].numberofApperances;

  //Number of Appearances Counter//
  numberofApperances +=1;
  console.log(clickCounter, 'total appearances');

  //Make sure there are no Duplicates //

  while (leftImage.src === centerImage.src || leftImage.src === rightImage.src || centerImage.src === rightImage.src){
    randomizeImages ();
    leftImage.src = filePath[randomizedImages];
    randomizeImages ();
    centerImage.src = filePath[randomizedImages];
    randomizeImages ();
    rightImage.src = filePath[randomizedImages];
  }
}
renderProducts();

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT HANDLER
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function handleClick(event) {
  event.preventDefault();
  //identify who was clicked
  console.log(event.target.src, 'was clicked')
  //alert for clicks not on images
  if(event.target.id === 'picContainer'){
    return alert('Please, click on a picture.');
  }

  if (event.target.id === 'left'){
    allProducts[0].clicks +=1;
    console.log(allProducts[0]);
  }

  if (event.target.id === 'center'){
    allProducts[1].clicks +=1;
    console.log(allProducts[1]);
  }

  if (event.target.id === 'right'){
    allProducts[2].clicks +=1;
    console.log(allProducts[2]);
  }
  //tally valid clicks
  clickCounter +=1;
  console.log(clickCounter, 'total clicks');

  //check if total clicks <25
  if (clickCounter > 25) {
    return alert ('You Outta Clicks Jane');
  }
  //after 25, remove event listener on PicNames
    //after 25, show "results" button
    //clear old images
  //display 3 new images
  console.log(event.target, 'was clicked before')
  renderProducts();
  console.log(event.target, 'was clicked after')

  randomizeImages();
  displayList();
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// ADD EVENT LISTENER
//++++++++++++++++++++++++++++++++++++++++++++++++++++

picContainer.addEventListener('click', handleClick)

var picList = document.getElementById('picList');
function displayList() {
  picList.innerHTML = '';
  for (var i = 0; i < allProducts.length; i++) {
    var liEl = document.createElement('li');
    var liEl2 = document.createElement('li');
    liEl.textContent = allProducts[i].products + ' has been clicked ' + allProducts[i].clicks + ' times';
    liEl2.textContent = allProducts[i].products + ' has been viewed ' + allProducts[i].numberofApperances + ' times';
    picList.appendChild(liEl);
    picList.appendChild(liEl2);
  }
}

renderProducts();
