const adresstbn = document.querySelector('#address-form')
adresstbn.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "flex"
})
const adressclose = document.querySelector('#address-form-close')
adressclose.addEventListener("click", function(){
    document.querySelector('.address-form').style.display = "none"
})
