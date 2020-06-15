const container = document.querySelector('#container');
container.cssText = 'grid | inline-grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr';

for(i = 1; i <= 16; i++){

    const box = document.createElement('div');
    box.classList.add('box');
    box.textContent='fish';
    box.style.cssText = 'border-width: 2px; border-style: solid;';
    box.style.cssText += 'border-color: black;';
    
    container.appendChild(box);

};