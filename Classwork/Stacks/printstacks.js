function print() {  
    var t = this.top - 1; // as top variable points to the element position  
    while(t >= 0) {   
      console.log(this.data[t]);  
      t--;  
    }  
  }