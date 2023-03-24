let counter = document.querySelector('#counter');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');

let number = 0;


increase.addEventListener('click', () => {
    number++;
    counter.innerHTML = number;
    

})

decrease.addEventListener('click', () => {
    number--;
    counter.innerHTML = number;
})

reset.addEventListener('click', () => {
    number = 0;
    counter.innerHTML = number;
})