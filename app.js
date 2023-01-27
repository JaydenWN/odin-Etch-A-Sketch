const gridContainer = document.querySelector('#gridContainer')
const rows = document.querySelectorAll('.row')

//Set Size Grid
const rangeInput = document.querySelector('#rangeInput')
let pixelSize;

rangeInput.addEventListener('mouseup', ()=>{
    //Remove old grid
   for(let i = gridContainer.childNodes.length - 1; i >= 0; i--){
    gridContainer.removeChild(gridContainer.childNodes[i])
   }
   //Create new grid
   pixelSize = rangeInput.value * 10
   newGrid(rangeInput.value * 10, rangeInput.value * 10)
   addPixelListener()
   console.log(rangeInput.value)   
})



//Creates a pixel to then be added to a row
function createPixel(){
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.style.setProperty('min-width', `calc(500px / ${pixelSize})`)
    pixel.style.setProperty('min-height', `calc(500px / ${pixelSize})`)
    return pixel
}

//Creates a Grid given a number.
function newGrid(numRows, numCols){

    for(i = 0; i < numRows; i++){
        let gridRow = document.createElement('div')
        gridRow.classList.add('row')
        gridContainer.appendChild(gridRow)
        for(j=0; j<numCols; j++){
            gridRow.appendChild(createPixel())
        }
        
    }
    
}
newGrid(10,10)



function addPixelListener(){
    pixelList = document.querySelectorAll('.pixel')
    pixelList.forEach(e => {
        e.addEventListener('mouseover', ()=>{
            e.classList.toggle('pixelPressed')
        })
    });
}

console.log(500 / pixelSize)

