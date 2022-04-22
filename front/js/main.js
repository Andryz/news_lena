window.addEventListener('scroll', ()=>{
    console.log( 'Текущая прокрутка сверху: ' + window.pageYOffset );
    if (window.pageYOffset > 60){
        document.body.classList.add('fixed-header');
    }else{
        document.body.classList.remove('fixed-header');
    }
})
