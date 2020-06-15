const container = document.querySelector('#container');
container.classList.add('container');
container.style.cssText = 'display: grid; justify-items: stretch';
container.style.cssText += 'grid-template-columns: [col1]1fr [col2] 1fr [col3] 1fr [col4] 1fr;'; 
container.style.cssText += 'grid-template-rows: [row1] 1fr [row2] 1fr [row3] 1fr [row4] 1fr;';
let containerHeight = 4;
let containerWidth = 4;
let containerSize = containerHeight * containerWidth;
for(i = 1; i <= containerSize; i++){

    const box = document.createElement('div');
    box.classList.add('box');

    let rowNum = rowNumber(i);
    let colNum = columnNumber(i);
    box.setAttribute('row-value', rowNum);
    box.setAttribute('column-value', colNum);

    box.style.cssText = 'grid-column-start: ' + colNum + '; grid-column-end: ' + colNum + ';';
    box.style.cssText += 'grid-row-start: ' + rowNum + '; grid-row-end: ' + rowNum + ';'
    box.textContent='fish';
    box.style.cssText += 'border-width: 2px; border-style: solid;';
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

  let rowNumber = divNumber / containerWidth;
  rowNumber = Math.ceil(rowNumber);
  return rowNumber;
}