console.log("main.js loaded");

// Variables
const bgColor = {
    r: 255, 
    g: 0,
    b: 0,
    a: 1,

    toCSS: function () {
        let result = `rgba(${this.r},${this.g}, ${this.b}, ${this.a})`;

        return result;
    },

    toHex: function () {
        let result = "";
        // bewerk hier het resultaat naar een hexadecimaal getal. 
        
        return result;
    }
}

const redSlider = document.querySelector("input.red");
const greenSlider = document.querySelector("input.green");
const blueSlider = document.querySelector("input.blue");
const alphaSlider = document.querySelector("input.alpha");

const redValue = document.querySelector(".r-value")
const greenValue = document.querySelector(".g-value")
const blueValue = document.querySelector(".b-value")
const alphaValue = document.querySelector(".a-value")

//Event listeners
redSlider.addEventListener("change", (event) => {
    bgColor.r = event.target.value;
    console.log("changing red: " + bgColor.r)

    redValue.textContent = bgColor.r
    
    changeCircleColor();
});

greenSlider.addEventListener("change", (event) => {
    bgColor.g = event.target.value;
    console.log("changing green: " + bgColor.g)

    greenValue.textContent = bgColor.g
    
    changeCircleColor();
});

blueSlider.addEventListener("change", (event) => {
    bgColor.b = event.target.value;
    console.log("changing blue: " + bgColor.b)

    blueValue.textContent = bgColor.b
    
    changeCircleColor();
});

alphaSlider.addEventListener("change", (event) => {
    bgColor.a = event.target.value / 100;
    console.log("changing alpha: " + bgColor.a)

    alphaValue.textContent = bgColor.a
    
    changeCircleColor();
});


//Functions
function changeCircleColor(){
    const circleDiv = document.querySelector("div.circle");
    circleDiv.style.backgroundColor = bgColor.toCSS(); 
    
}