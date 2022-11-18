function ChangeContents(){
    var fourthDivContent = document.getElementsByClassName("fourth")[0].innerHTML;
    var fifthDivContent = document.getElementsByClassName("fifth")[0].innerHTML;

    var temp = fourthDivContent;

    document.getElementsByClassName("fourth")[0].innerHTML = fifthDivContent;
    document.getElementsByClassName("fifth")[0].innerHTML = temp;
}