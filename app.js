//++++++++++++++++++++++++++++++++++++++++++++++++++++
// BUS MALL PROJECT - CodeFellows Project by Alison Ramer
//++++++++++++++++++++++++++++++++++++++++++++++++++++

'use strict'

var filePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

// var chartDrawn = false;
// var productsChart;

// ++++++++++++++++++++++++++++++++++++++++++++
// LOCAL STORAGE
// ++++++++++++++++++++++++++++++++++++++++++++

if(localStorage.getItem('allProducts')){
  var localStorageAllProducts = localStorage.getItem('allProducts');
  //With 'getItem' we are adding all products to the local storage.
  var allProducts = JSON.parse(localStorageAllProducts);
  //With JSON.parse we are retrieving localStorageAllProducts (all products in the local storage).
}else{
  //If there's nothing in the local storage, then make new products (makeNewProducts function).
  console.log('allProducts is blank');

  var allProducts = [];

  makeNewProducts();
}
//First we check to see if we have anything in local storage
//If we have stuff then we set our allProducts array equal to local storage.
//If we don't have things in local storage, we make twenty new products and a blank all products array and we fill it.
//

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
    // clicks[i] = allProducts[i].clicks;
  }
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++
//  RANDOMIZED IMAGES
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function randomizeImages () {
  randomizedImages = Math.floor(Math.random() * (20-0) + 0);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// ARRAY TO HOLD CHART DATA ???????????
//++++++++++++++++++++++++++++++++++++++++++++++++++++
// var clicks = [];
//
// function updateChartArrays() {
//   for (var i = 0; i < allProducts.length; i++) {
//     titles[i] = allProducts[i].title;
    // clicks[i] = allProducts[i].clicks;
//   }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++
// RENDER PRODUCTS
//now we are going to take the information that we organized and print it onto the screen - with images
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function renderProducts () {
  //you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.
  randomizeImages ();
  var leftImage = document.getElementById('left');
  leftImage.src = filePath[randomizedImages];
  leftImage.alt = randomizedImages;
  allProducts[randomizedImages].numberofApperances+=1;

//you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.
  randomizeImages ();
  var centerImage = document.getElementById('center');
  centerImage.src = filePath[randomizedImages];
  centerImage.alt = randomizedImages;
  allProducts[randomizedImages].numberofApperances+=1;

  randomizeImages ();
  var rightImage = document.getElementById('right');
  rightImage.src = filePath[randomizedImages];
  rightImage.alt = randomizedImages;
  allProducts[randomizedImages].numberofApperances+=1;

  //Number of Appearances Counter//
  numberofApperances +=1;
  // console.log(clickCounter, leftImage.alt, centerImage.alt, rightImage.alt, 'total appearances');

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

function storeAllProducts (){
  localStorageAllProducts = JSON.stringify(allProducts);
  localStorage.setItem('allProducts', localStorageAllProducts);
}
//In this function, we are making a string of the allProducts array and turning the string into the key. Then we are setting the values of the storeAllProducts to ('allProducts' the key, and 'localStorageAllProducts' the value).

// Lastly we will call this inside the event handler below.

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// EVENT HANDLER
//++++++++++++++++++++++++++++++++++++++++++++++++++++

function handleClick(event) {
  event.preventDefault();
  //identify who was clicked
  // console.log(event.target.src, 'was clicked')
  //alert for clicks not on images
  if(event.target.id === 'picContainer'){
    return alert('Please, click on a picture.');
  }

  if (event.target.id === 'left'){
    allProducts[event.target.alt].clicks +=1;
    // console.log(allProducts[0]);
  }

  if (event.target.id === 'center'){
    allProducts[event.target.alt].clicks +=1;
    // console.log(allProducts[1]);
  }

  if (event.target.id === 'right'){
    allProducts[event.target.alt].clicks +=1;
    // console.log(allProducts[2]);
  }
  //tally valid clicks
  clickCounter +=1;
  // console.log(clickCounter, 'total clicks');

  //check if total clicks <25
  if (clickCounter > 5) {
    return alert ('You Outta Clicks Jane');
  }
  displayList();
  //after 25, remove event listener on PicNames
    //after 25, show "results" button
    //clear old images
  //display 3 new images
  // console.log(event.target, 'was clicked before')
  renderProducts();
  // console.log(event.target, 'was clicked after')
  randomizeImages();
  storeAllProducts();
  //Call new list here//
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++
// ADD EVENT LISTENER
//++++++++++++++++++++++++++++++++++++++++++++++++++++

picContainer.addEventListener('click', handleClick)

function displayList() {
var picList = document.getElementById('picList');
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

//++++++++++++++++++++++++++++++++++++++++++++
//BUTTON LISTENERS
//++++++++++++++++++++++++++++++++++++++++++++

// // document.getElementById('draw-chart').addEventListener('click', function(){
// //   drawChart();
// //
//
// document.getElementById('list-button').addEventListener('click', function(){
//   showList();
// });
//
// // document.getElementById('list-button').addEventListener('click', showSongsAsList);
//
// document.getElementById('funky-list').addEventListener('click', function(){
//   document.getElementById('funky-list').hidden = true;
// });
//
// document.getElementById('voting').addEventListener('click', function(event){
//   if (event.target.id !== 'voting') {
//     tallyVote(event.target.id);
//   };
//
//   if (chartDrawn) {
//     songChart.update();
//   }



// ++++++++++++++++++++++++++++++++++++++++++++
// CHART STUFF
// ++++++++++++++++++++++++++++++++++++++++++++
//
// var data = {
//   labels: products, // titles array we declared earlier
//   datasets: [
//     {
//       data: clicks, // clicks array we declared earlier
//       backgroundColor: [
//         'bisque',
//         'darkgray',
//         'burlywood',
//         'lightblue',
//         'navy'
//       ],
//       hoverBackgroundColor: [
//         'purple',
//         'purple',
//         'purple',
//         'purple',
//         'purple'
//       ]
//     }]
// };

// function drawChart() {
//   var ctx = document.getElementById('funky-chart').getContext('2d');
//   productsChart = new Chart(ctx,{
//     type: 'bar',
//     data: data,
//     options: {
//       responsive: false
//     },
//     scales: [{
//       ticks: {
//         beginAtZero: true
//       }
//     }]
//   });
//   chartDrawn = true;
// }
//
// function hideChart() {
//   document.getElementById('funky-chart').hidden = true;
// }
