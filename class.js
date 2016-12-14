'use strict'


var filePath = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var products = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can'];

var randomizedImages;
var clickTotal = 0;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//CONSTRUCTOR FUNCTION -----------for each one of the products of the stores we're going to make the following calculations //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
var allProducts = [];

function MakeProducts (products, filePath) {
//instances
  this.products = products;
  this.filePath = filePath;
  this.clicks = 0;
  this.views = 0;
  allProducts.push(this);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//new object that are created from the above constructor function
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
function create (){
  for (var i = 0; i < filePath.length; i++) {
  new MakeProducts(products[i], filePath[i]); //new here means new instance//
  }
}
create();
console.table(allProducts);

//Check to Make Sure Not Duplicates //
// var newArray =[];
// var oldArray = [];

// function noDuplicatesImages() {
//     oldArray[0] === newArray[0];
//     oldArray[1] === newArray[1];
//     oldArray[2] === newArray[2];
//
//     rand();
//     newArray[0] = filePath[randomizedImages];
//     while (newArray[0] === newArray [0] || newArray[0] === newArray[1] ||
//       newArray[0] === oldArray[2]){
//       console.log(newArray, 'broken value in first position of the array')
//       newArray[2] = filePath[randomizedImages];
//       console.log('fixed');
//     }
//     rand();
//     newArray[1] = filePath[randomizedImages];
//     while (newArray[1] === newArray[0] || newArray[1] === oldArray[0] || newArray[1] === oldArray[1] || newArray[1] === oldArray[2]){
//     // console.log(newArray, 'old broken array');
//     newArray[1] = filePath[randomizedImages];
//     // console.log('caught dupes between 1st and 2nd numbers');
//     }
//     rand();
//     newArray[2] = filePath[randomizedImages];
//     while (newArray[2] === newArray[0] || newArray[2] === newArray[1] || newArray[2] === oldArray[0] || newArray[2] === oldArray[1] || newArray[2] === oldArray[2]){
//       // console.log(newArray, 'old broken array');
//       newArray[2] = filePath[randomizedImages];
//       // console.log('caught a dupe with the 3rd number');
//     }
//     console.log('new array' + newArray)
//     console.log('old array' + oldArray)
//     renderProducts();
// }

function renderProducts () {
  //you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.

  var leftImage = document.getElementById('left');
  leftImage.src = newArray[0];

//you are defining that the left image is going to be attached to the HTML in the spot with the 'left' attribute. Then you set the src attribute to an actual file path so that it will be displayed on the page.

  var centerImage = document.getElementById('center');
  centerImage.src = newArray[1];


  var rightImage = document.getElementById('right');
  rightImage.src = newArray[2];
  console.log('render Products is working');
}

// renderProducts();

//Random Images//
function rand () {
  randomizedImages = Math.floor(Math.random() * (20-0) + 0);
  console.log('randomized is working ' + randomizedImages);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Event Handler//
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//   function handleClick(event){
//     event.preventDefault();
// //identify what image was clicked
//     console.log(event.target.src, 'was clicked');
//
// // alert for clicks not on images
//     if (event.target.id === 'picContainer'){
//     return alert ('Click on the right spot!')
//     }
//     if (event.target.id === 'left'){
//       allProducts[newArray[0]].clicks +=1;
//       console.log(allProducts[newArray[0]]);
//     }
//     if (event.target.id === 'center'){
//       allPRoducts[newArray[1]].clicks +=1;
//       console.log(allProducts[newArray[1]]);
//     }
//     if (event.target.id === 'right'){
//       allProducts[newArray[2]].clicks +=1;
//       console.log(allProducts[newArray[2]]);
//     }
// // tally the click
//     if (clickCounter < 5) {
//       return ('YOU OUTTA CLICKS, JACK')
//     }
    // check whether total clicks 25 times
    // after 25, remove event listeners on PicNames
      //after 25, show "results" button
      //clear old images
    // display 3 new images
// makeArrayOfThreeNumbers();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Event Listener
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// makeArrayOfThreeNumbers();
// picContainer.addEventListener('click', handleClick)
