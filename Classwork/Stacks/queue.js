function Queue() {
    this.queue = {}
    this.head = 0
    this.tail = 0
}

//Add an element to the end of queue
Queue.prototype.enqueue = function(element) {
    this.queue[this.tail++] = element;
  }
  
// Delete the first element of the queue.
Queue.prototype.dequeue = function() {
    if (this.tail === this.head)
    return undefined
  
    var element = this.queue[this.head];
    delete this.elements[this.head++];
    return element;
  }