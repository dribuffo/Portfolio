let flareon = "https://img.pokemondb.net/artwork/avif/flareon.avif";
let cheatcode = "";

$(document).ready(function() {
    $("#code_input").submit(function(event) {
        event.preventDefault();
    });
});

function change() {
    var input = document.getElementById("input_code").value;
    var img = document.getElementById("head_shot");


    switch(input){
        case "Pokemon":
        case "POKEMON":
        case "pokemon":
            img.src = "https://img.pokemondb.net/artwork/avif/flareon.avif";
            break;
        default:
            alert("Cheat Code Not Found");
            break;
    }
}