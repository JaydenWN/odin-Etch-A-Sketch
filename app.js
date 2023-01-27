const gridContainer = document.querySelector('#gridContainer')
const rows = document.querySelectorAll('.row')

function createPixel(){
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    return pixel
}

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

newGrid(16,16)
