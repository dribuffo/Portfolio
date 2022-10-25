let flareon = "https://img.pokemondb.net/artwork/avif/flareon.avif";
let cheatcode = "";
var headshot = document.getElementById("head_shot");

$(document).ready(function() {
    $("#code_input").submit(function(event) {
        event.preventDefault();
    });
});

function change() {
    var input = document.getElementById("input_code").value;

    switch(input){
        case "Pokemon":
        case "POKEMON":
        case "pokemon":
            headshot.src = "https://img.pokemondb.net/artwork/avif/flareon.avif";
            $(".photos .head_shot img").css({"border-radius": "25%"});
            $(".photos .head_shot img").css({"margin-left": "40%"});
            break;
        case "TTRPG":
        case "Ttrpg":
        case "ttrpg":
            $(".background span").css({"width": "0"});
            $(".background span").css({"height": "0"});
            $(".background").css({"background": "#431d9b"});
            $(".background").css({"background-image": "url(https://icon-library.com/images/d20-icon/d20-icon-12.jpg)"});
            break;
        case "lex":
        case "Lex":
        case "LEX":
            //unmounts previous background:
            $(".background span").css({"width": "22vmin"});
            $(".background span").css({"height": "22vmin"});
            $(".background").css({"background": "#44729b"});
            $(".background").css({"background-image": ""});
            //changing purple orbs to yellow
            $(".background span:nth-child(8)").css({"color": "#CC9901"});
            $(".background span:nth-child(12)").css({"color": "#CC9901"});
            //changing the light blue orbs to red
            $(".background span:nth-child(0)").css({"color": "#7C0A01"});
            $(".background span:nth-child(2)").css({"color": "#7C0A01"});
            $(".background span:nth-child(4)").css({"color": "#7C0A01"});
            $(".background span:nth-child(5)").css({"color": "#7C0A01"});
            $(".background span:nth-child(9)").css({"color": "#7C0A01"});
            $(".background span:nth-child(10)").css({"color": "#7C0A01"});
            $(".background span:nth-child(13)").css({"color": "#7C0A01"});
            $(".background span:nth-child(16)").css({"color": "#7C0A01"});
            $(".background span:nth-child(17)").css({"color": "#7C0A01"});
            $(".background span:nth-child(19)").css({"color": "#7C0A01"});
            //changing the dark blue orbs to black
            $(".background span:nth-child(1)").css({"color": "#000000"});
            $(".background span:nth-child(3)").css({"color": "#000000"});
            $(".background span:nth-child(6)").css({"color": "#000000"});
            $(".background span:nth-child(7)").css({"color": "#000000"});
            $(".background span:nth-child(11)").css({"color": "#000000"});
            $(".background span:nth-child(14)").css({"color": "#000000"});
            $(".background span:nth-child(15)").css({"color": "#000000"});
            $(".background span:nth-child(18)").css({"color": "#000000"});
            break;
        case "xiv":
        case "XIV":
        case "14":
            $('#CheatCodeModal .modal-body').text("Did you know that the critically acclaimed MMORPG Final Fantasy XIV has a free trial, and includes the entirety of A Realm Reborn AND the award-winning Heavensward expansion up to level 60 with no restrictions on playtime?");
            $('#CheatCodeModal').modal('show');
            break;
        default:
            alert("Cheat Code Not Found");
            break;
    }
}