class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class SinglyLinkedList{
    constructor() {
        this.head=null;
        this.tail=null;
    }

   //노드를 엮어주기만 할뿐

 find(value){
    let currNode = this.head;
    while (currNode.value!==value){
        currNode=currNode.next;
    }
    return currNode;
 }

 append(newValue){
    const newNode = new Node(newValue);
    if(this.head ===null){
        this.head = newNode;
        this.tail = newNode;
    }
    else{
        this.tail.next=newNode; //테일포인터를 새로생성된 노드에 가르키게 한다.
        this.tail=newNode;
    }
 }

 insert(node, newvalue){
    const newNode = new Node(newvalue);
    newNode.next=node.next;
    node.next = newNode;
 }

 remove(value){
    let preNode=this.head;
    while (preNode.next.value!==value){
        preNode=preNode.next;
    }
    
    if (preNode.next !==null) {
        preNode.next =preNode.next.next;
    }
 }

 display() {
    let currNode =this.head;
    let displayString ="[";
    while (currNode != null){
        displayString += `${currNode.value}, `;
        currNode = currNode.next;
    }
    displayString=displayString
        .substr(0, displayString.length-2);
    displayString += "]";
    console.log(displayString);
    }
 }
 
 size() 
 {
     const size=0;
    console.log(size=linkedList.size);
 }
 

const linkedlist = new SinglyLinkedList();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.append(3);
linkedlist.append(4);
linkedlist.append(5);
console.log(linkedlist.find(3));
linkedlist.size();