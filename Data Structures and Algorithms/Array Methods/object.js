let user = {
    name: "Hiba",
    age: "27",
    education: "BBA"
}

//let user = ["Hiba", "27", "BBA"] - this is how you represent array

// traversal using for loop

let traverse = "";
for (let key in user) {
    console.log(traverse + user[key] + " ")
        
    }

// Does age property exist or not

for (let key in user) {
    if (key == "age") {
        console.log("Age Exists - True");    
    }
    else {
        console.log("Age Does not Exist - False")
    }
}