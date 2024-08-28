// var index=0;

// function ChangeColors(){

//     const colors=["red","orange","green","purple","yellow"];

//     document.getElementsByTagName("body")[0].style.backgroundColor=colors[index++];

//     if (index> colors.length-1)
//         index=0;

// }

var index = 0;

// Define two sets of colors: one for the body and one for the container
const bodyColors = ["lightblue", "lightgray", "lightpink", "lightgreen", "lightyellow"];
const containerColors = ["orange", "green", "purple", "yellow","blue","violet"];

function ChangeColors() {
    // Change the background color of the body
    document.body.style.backgroundColor = bodyColors[index];

    // Change the background color of the container
    document.querySelector('.container').style.backgroundColor = containerColors[index];

    // Update index and reset if it exceeds the length of color arrays
    index++;
    if (index >= bodyColors.length) index = 0;
}
