window.addEventListener("load", (event) => {
    var savedColor = localStorage.getItem('color');

    if(savedColor == null){
        EnterAndChangeBoxColor();
    }
    else{
        ChangeBoxColor();
    }
});

function EnterAndChangeBoxColor(){
    var color = prompt(`Enter a color:\nSupported colors: "red", "green", "blue", "yellow" or enter another value to leave it default`);

    localStorage.setItem('color', color);

    ChangeBoxColor();
}

function ChangeBoxColor(){
    var color = localStorage.getItem('color')

    if(color == "red"){
        document.getElementsByClassName("third")[0].style.backgroundColor = '#FF7F7F';
    }
    else if(color == "green"){
        document.getElementsByClassName("third")[0].style.backgroundColor = '#90ee90';
    }
    else if(color == "blue"){
        document.getElementsByClassName("third")[0].style.backgroundColor = '#ADD8E6';
    }
    else if(color == "yellow"){
        document.getElementsByClassName("third")[0].style.backgroundColor = '#FFF9A6';
    }
    else{
        document.getElementsByClassName("third")[0].style.backgroundColor = '#FFFFFF';
    }
}