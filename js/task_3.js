function FindMax(){
    var formValue = document.getElementById("GET-values").value;
    var intsArray = formValue.split(' ').map(Number);
    
    var maxValue = intsArray[0];
    var maxValueCounter = 1;

    for (let i = 1; i < intsArray.length; i++) {
        if(intsArray[i] == maxValue){
            maxValueCounter++;
        }
        
        if(intsArray[i] > maxValue){
            maxValue = intsArray[i];
            maxValueCounter = 1;
        }
    }

    alert("Maximum value: " + maxValue + ", max value amount: " + maxValueCounter);

    document.cookie = "MaxValue=" + maxValue;
    document.cookie = "maxValueCounter=" + maxValueCounter;
}

window.onload = function() {
    var cookies = document.cookie.split(";");
    
    if(cookies.length != 1){
        ShowCookiesAlert();
    }
};

function ShowCookiesAlert(){
    var cookies = document.cookie.split(";");
    var output = `Saved cookies:\n${cookies}\nClick "OK" to delete them`;

    alert(output);

    document.cookie = 'MaxValue=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'maxValueCounter=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    alert(`Cookies have been deleted successfully!\nClick "OK" to reload the page`);
    window.location.reload();
}