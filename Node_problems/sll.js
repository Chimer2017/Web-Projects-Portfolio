function LinkedList() {
  this.head = null;
  this.tail = null;
}


function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.setHead = function (value) {
  const newHead = new Node(value);
  if(this.head) {
    const tmp = this.head;
    this.head = newHead;
    newHead.next = tmp;
  } else {
    this.head = newHead;
    this.tail = newHead;
  }
};

LinkedList.prototype.addNode = function(value) {
  const newTail = new Node(value);
  if (this.tail) {
    this.tail.next = newTail;
  } else {
    this.head = newTail;
  }
    this.tail = newTail;
};

LinkedList.prototype.traverse = function () {
  current = this.head;
  while (current != null)
  {
      console.log(current.value);
      current = current.next;
  }
};


const list = new LinkedList();
list.addNode(10);
list.addNode(5);
list.addNode(6);
list.traverse();
