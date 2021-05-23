function printVariable(color) {
    let color1 = color
    console.log(color1);

    if (color == 'red') {
        alert("red traffic light")
    }

    else if (color == 'yellow') {
        alert("Yellow traffic light")
    }

    else if (color =='blue') {
        alert("blue traffic light")
        
    }

    else {
        alert("Not a traffic light. This is "+color1+" color")
    }
}
