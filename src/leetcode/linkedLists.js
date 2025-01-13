class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // INSERT FIRST NODE

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // INSERT LAST NODE

  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // INSERT AT INDEX

  insertAt(data, index) {
    //if index out of range
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // this is the node before index we want to insert
      count++;

      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // GET AT INDEX

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

  // GET BY VALUE

  // REMOVE AT INDEX

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;

    // REMOVE FIRST
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //  CLEAR LIST

  clearList() {
    this.head = null;
    this.size = 0;
  }

  //  PRINT LIST DATA
  printListData() {
    let current = this.head;
    if (!this.head) {
      console.log("list is empty");

      return;
    }
    while (current) {
      console.log("print list", current.data);
      current = current.next;
    }
  }

  // REMOVE FIRST
  removeFirst() {
    let current = this.head;
    this.head = current.next;
    this.size--;
  }

  // REMOVE LAST
  removeLast() {
    let current = this.head;
    let previous;

    if (this.head === null) {
      console.log("removelast", "list is empty");

      return;
    }

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }

  // REMOVE BY VALUE
  removeValue(value) {
    //empty
    if (!this.head) {
      console.log("list is empty");

      return;
    }
    //first
    if (this.head.data === value) {
      this.head = this.head.next;
    }
    let current = this.head;
    let previous;
    //treverse

    while (current !== null) {
      if (current.data === value) {
        previous.next = current.next;
        current = current.next;
        console.log(current);
      } else {
        previous = current;
        current = current.next;
      }
    }
    //last
  }
}

const ll = new LinkedList();

// ll.insertLast(2);

// // ll.insertFirst(1);
// // ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(2);
// ll.insertFirst(3);

// // ll.insertFirst(1);
// // ll.insertAt(5, 0);
// // ll.insertAt(5, 4);

// // ll.getAt(2);
// // ll.getAt(0);
// ll.removeValue(2);
// // ll.removeValue(1);
// // ll.removeValue(3);

// // ll.clearList();
// // ll.removeFirst();
// // ll.removeLast();
// ll.printListData();
// // ll.removeLast();
