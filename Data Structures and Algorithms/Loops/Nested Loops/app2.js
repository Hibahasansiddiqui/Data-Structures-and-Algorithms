/*Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], 
[‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  
Now, when you encounter ‘car or ‘rabbit’ inside a nested loop, 
print ‘pet animals’ in the console. Also, if you encounter 
‘pigeon’ or ‘parrot’, print ‘pet birds’. 
Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’*/

let arr = [['cat', 'rabbit'], ['pigeon', 'parrot'], ['goldfish', 'whale']];
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        
        if((array[i][j])==="cat"){
            console.log("pet animals");
        }
        else if((array[i][j])==="rabbit"){
            console.log("pet animals");
        }
    
        else if(array[i][j]==="pigeon"){
            console.log("pet birds");
        }
        else if(array[i][j]==="parrot"){
            console.log("pet birds");
        }
        else if(array[i][j]==='goldfish'){
        console.log("fish");
        }
        else if(array[i][j]==='whale'){
            console.log("fish");
            }
    }
    }