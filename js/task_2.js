function CalculateTriangleArea(){
    var firstSide = 3;
    var secondSide = 4;
    var thirdSide = 5;

    var p = (firstSide + secondSide + thirdSide)/2;
    var area = Math.sqrt(p * (p-firstSide) * (p-secondSide) * (p-thirdSide));

    var thirdDivContent = document.getElementById("third_box_text").innerText;
    thirdDivContent += "\nArea of the triangle is: " + area;

    document.getElementById("third_box_text").innerText = thirdDivContent;
}