function sendMessage() {
    var name = document.getElementById('name').value
    var message = document.getElementById('message').value
    var phoneNumber = '6283173886797'

    var url = "https://api.whatsapp.com/send?phone= "
    +phoneNumber + 
    "&text=hallo, nama saya" 
    +name + "," 
    +message;

    window.open(url)
}