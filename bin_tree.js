class Queue{
    constructor(){
        this.queue=[];
        this.front=0;
        this.rear=0;
    }

    enqueue(value){
        this.queue[this.rear++]=value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.fornt +=1;
        return value;
    }
    
    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front
    }
}

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;

    }
}
class Tree{
    constructor(node){
        this.root=node;
    }

    display(){
        const queue = new Queue();
        queue.enqueue(this.root);
        while (queue.size) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if (currentNode.left)queue.enqueue(currentNode.left);
            if (currentNode.right) queue.enqueue(currentNode.right);
            
        }
    }
    In_order(node) {
        if(node) {
        this.In_order(node.left);
        console.log(node.value);
        this.In_order(node.right);
        }
    }
    Pre_order(node) {
        if(node) {
        console.log(node.value);
        this.Pre_order(node.left);
        this.Pre_order(node.right);
        }
    }
    Post_order(node) {
        if(node) {
        this.Post_order(node.left);
        this.Post_order(node.right);
        console.log(node.value);
        }
    }

}

const tree = new Tree(new Node(1));
 tree.root.left= new Node(2);
 tree.root.right= new Node(3);
 tree.root.left.right= new Node(5);
 tree.root.left.left= new Node(4);
 tree.root.right.left= new Node(6);
 tree.root.right.right= new Node(7);
 console.log('inorder:')
 tree.In_order(tree.root);
 console.log('preorder:')
 tree.Pre_order(tree.root);
 console.log('postorder:')
 tree.Post_order(tree.root);
