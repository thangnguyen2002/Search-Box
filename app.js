var btnSearch =  document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function(){
    // arrow funtion ko co this, phai dung func thuong

    // console.log(this) .search-box__btn
    // console.log(btnSearch.parentElement) .search-box
    // console.log(btnSearch.previousSibling) text (type of input)
    // console.log(btnSearch.previousElementSibling) .search-box__input
    
    btnSearch.parentElement.classList.toggle('open')
    btnSearch.previousElementSibling.focus()
})