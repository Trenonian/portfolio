changeColor() {
    this.onclick.style.background = "#444";
}

myFunction() {
    $('p').click(changeColor);
    console.log('mamaluigi');
}

$(document).onload = function(){
    myFunction();
};
