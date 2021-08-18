class Node {
    constructor(value=""){
        this.value=value;
        this.children=new Map();
        this.end=false;
    }
}

class Trie{
    constructor() {
        this.root = new Node();
    }

    has(string){
        let currentNode = this.root;

        for (const char of string){
            if (!currentNode.children.has(char)){
                return false;
            }
            currentNode=currentNode.children.get(char);
            
        }
        return true;
    }
    insert(string){
        let currentNode = this.root;

        for (const char of string){
            if(!currentNode.children.has(char)){
                currentNode.children.set(
                    char,
                    new Node(currentNode.value+char)
                );
            }

            currentNode = currentNode.children.get(char);
        }
        currentNode.fin=true;
    }
    list(str) {
        const nodeList = [];
        let currentNode = this.root;
    
        for (const chr of str) {
          if (!currentNode.children.has(chr)) return false;
    
          currentNode = currentNode.children.get(chr);
        }
    }
   
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.list("ca"));