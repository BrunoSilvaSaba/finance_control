const modal = {
    open() {

    //adicionar class active    
        document.querySelector('.modal-overlay')
        .classList.add('active');
    }, //remove class active
    close() {
        document.querySelector('.modal-overlay')
        .classList.remove('active');
    }
}