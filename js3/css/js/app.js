
function zaman() {
    var input = document.getElementById("inp1").value
    var number = Number(input.slice(-3, -2))
    var txt = document.getElementById("h2")
    var bgcolor1 = document.getElementById('color')


    if (number == 3) {
        document.getElementById("h2").innerHTML = "seher qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://st4.depositphotos.com/35745102/37834/v/600/depositphotos_378345928-stock-video-sunrise-4000-islands-mekong-river.jpg)"

    }
    else if (number == 2) {
        document.getElementById("h2").innerHTML = "gunorta qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://videohive.img.customer.envatousercontent.com/files/b307c47c-d9d0-44b0-babb-52aad897c39a/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=390ef0ddcf77309b7d4fda0dae62ac44)"

    }
    else if (number == 1) {
        document.getElementById("h2").innerHTML = "axsam qrupusuz"
        bgcolor1.style.backgroundImage = "url(https://images.unsplash.com/photo-1505322022379-7c3353ee6291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHR8ZW58MHx8MHx8&w=1000&q=80)"

    }
    else {
        document.getElementById("h2").innerHTML = "qrup sehv daxil edilib veya bele qrup yoxdur"

    }
}
