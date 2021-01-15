const gridContainer = document.getElementById('grid-container');
const clearbtn = document.getElementById('reset'); 
const rangeSize = document.getElementById('size'); 
const Sizetxt = document.getElementById('Sizetxt'); 

//creates a default grid sized 16x16
function defaultGrid(){
  createColumn(16);
  fillGrid(16);
  Sizetxt.innerHTML = "16x16";
  }

//Function for the slider, it clears and changes the area of the grid.
function setSize(){
  Sizetxt.innerHTML = this.value + "x" + this.value;
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
  gridContainer.removeChild(element);
  });
  createColumn(this.value);
  fillGrid(this.value);
}

//this function is for the clear button, it just resets the grid.
function reset(){
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
  createColumn(rangeSize.value);
  fillGrid(rangeSize.value);
}

//these are the functions that change the area of the grid depending on the value.
function createColumn(size){
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
function fillGrid(size){
  gridArea = size*size;
  for(i = 0; i < gridArea; i++){
    const element = document.createElement('div');
    element.classList = "grid-element";
    element.addEventListener("mouseover", colorChange); //in this function is already created the mouseover with the function to change color
    gridContainer.appendChild(element);
  }
}

//Function that allows the elements in the grid to change color.
function colorChange(e){
  let a = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  let c = Math.floor(Math.random()*256); 
  e.target.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")"; 
}

//EventListeners
window.addEventListener("load",defaultGrid); //this function allows the grid to load with the initial values (16x16).
clearbtn.addEventListener("click",reset);
rangeSize.addEventListener("mouseup", setSize);