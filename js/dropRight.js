function dropUp() {
    let doc = document.getElementById('rightBar_drop');
    doc.id = 'rightBar'
}

function dropDown() {
    let doc = document.getElementById('rightBar');
    doc.id = 'rightBar_drop'
}

function showCars() {
    let input = document.getElementsByClassName('choiceCar')[0];
    input.className = 'choiceCar-none';
    let doc = document.getElementsByClassName('horizontal-scroll-wrapper-none')[0];
    doc.className = 'horizontal-scroll-wrapper squares';
    let desc = document.getElementsByClassName('inputsDes-none')[0];
    desc.className = 'inputsDes';
    let inputs = document.getElementsByClassName('inputs-none')[0];
    inputs.className = 'inputs';
    let add = document.getElementsByClassName('addCar-none')[0];
    add.className = 'addCar';

}