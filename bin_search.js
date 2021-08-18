const array=[1,1,5,124,400,599,1004,2876,8712];

function binarySearch(array,findvalue){
    let left=0;
    let right = array.length-1;
    let mid = Math.floor((left+right)/2);
    while(left<right){
        if(array[mid]===findvalue){
            return mid;
        }

        if (array[mid]<findvalue){
            left=mid+1;

        }
        else{
            right=mid-1;
        }

        mid=Math.floor((left+right)/2);
    }
    return -1;
}

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;

    }
}
class BinarySearchTree{
    constructor(node){
        this.root=node;
    }
    insert(value){
        const newNode=new Node(value);
        if (this.root === null){
            this.root=newNode;
            return;
        }

        let currentNode = this.root;
        while(currentNode !== null){
            if (currentNode.value<value){
                if (currentNode.right===null){
                    currentNode.right=newNode;
                    break;
                }
            
            currentNode=currentNode.right;
            }
            else{
                if(currentNode.left === null){
                    currentNode.left=newNode;
                    break;
                }
                currentNode=currentNode.left;
            }
        }

    }
    has(value){
        let currentNode=this.root;
        while(currentNode!==null){
            if(currentNode.value==value){
                return tree;
            }
        }

        if(currentNode.value<value){
            currentNode=currentNode.right;
            
        }
        else{
            currentNode=currentNode.left;
        }
        return false;
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

}
