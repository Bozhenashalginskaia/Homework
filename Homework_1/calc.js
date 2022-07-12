const calc = document.querySelector('.calc');
calc.addEventListener('.click', function (event){
    if(!e.target.classList.contains('calc__btn')) return;

    console.log(event.target);
});