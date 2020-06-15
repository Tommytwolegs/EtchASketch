const container = document.querySelector('#container');
container.cssText = 'grid | inline-grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr';
let containerHeight = 4;
let containerWidth = 4;
let containerSize = containerHeight * containerWidth;
for(i = 1; i <= containerSize; i++){

    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('row-value', rowNumber(i));
    box.setAttribute('column-value', columnNumber(i));
    
    box.textContent='fish';
    box.style.cssText = 'border-width: 2px; border-style: solid;';
    box.style.cssText += 'border-color: black;';
    
    container.appendChild(box);

};

function columnNumber(divNumber){
    let columnNumber = containerWidth;
    if (divNumber % containerWidth != 0){
        columnNumber = divNumber % containerWidth;
    }
    return columnNumber;
}

function rowNumber(divNumber){
    let rowNumber = 1;
    let count = 1;

    rowNumber = divNumber % 4;
    return rowNumber;

}