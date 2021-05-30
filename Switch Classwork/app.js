let color = "blue"

function myFunction() {
    var color = document.getElementById("myInput").value;
  
    switch(color) {
      case "blue":
        text = "BLUE is a wonderful choice!";
        console.log (color)
      break;
      case "yellow":
      text = "I am not a fan of yellow.";
      console.log (color)
      break;
      case "red":
      text = "Is your favorite color red?";
      console.log (color)
      break;
      default:
      text = "I have never heard of that color...";
      console.log ('default condition')

    }
    document.getElementById("demo").innerHTML = text;
  }