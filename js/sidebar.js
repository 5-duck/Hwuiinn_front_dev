
const arrow = document.querySelector('.arrow');

export const sideToggle = function sideToggle() {
    const sidebar = arrow.style.left;
    
    if(sidebar ==="0%") {
        show = "100%";
    } else {
        show = "0%";
    }
    arrow.style.left = show;
}

// arrow.addEventListener("click", sideToggle);

// const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor ==="blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;