const buttonClick = window.addEventListener("load", () => {
    const button = document.getElementsByClassName('colorBtn')[0];
    button.addEventListener('click', handleButtonClick)
});

function componentFromStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

const rgbToHex = (rgb) => {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);

        hex =  "#"+(0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}

const newColor = () => {
    const setColors = ["#1ecbe1", "#E1341E", "#CBE11E", "#6AE11E", "#961EE1", "#1E6AE1", "#1EE196"]
    let randomColor = setColors[Math.floor(Math.random() * setColors.length)]
    return randomColor
}
const handleButtonClick = () => {
    let body = document.body.style.backgroundColor
    let newColors = newColor(); 
    const current_color = rgbToHex(body)
    console.log(`current color: ${current_color}`)
    console.log(`new color: ${newColors.toLowerCase()}`)
    if(newColors.toLowerCase() === current_color){
       alert("The same color was re-selected, please try again.")
    } else{
        document.body.style.backgroundColor = newColors
        document.getElementById("header").style.color = "white";
        document.getElementById("header").innerHTML = newColors.toUpperCase();
    }
    
  
}


