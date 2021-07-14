class Stack {
    constructor(){
        this.items = []
        this.size
    }

    push(item){
        // this.data[this.top] = element;
        // this.top = this.top + 1;
        this.items.push(item);
    }

    pop(){
        this.top = this.top -1;
        return this.items.pop(); // removes the last element
    }

    peek(){
        return this.items[this.top -1 ];
    }

    isEmpty(){
        return this.top === 0;
    }

    printStack(){
        for(let i = 0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();
myStack.push('karachi');
myStack.push('islamabad');
myStack.push('lahore');