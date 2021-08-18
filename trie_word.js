
class Node {
    constructor(value = ""){
        this.value = value; 
        this.children = {} //map함수가 이해가 잘 안되어, 객체로 하였습니다.
        this.fin = false; //노드의 끝부분 검사
    }
}

 class Trie {
     constructor(){
        this.root = new Node();
     }

     insert(string){
        let currentNode = this.root; 
    
        for(let i = 0; i <string.length ; i++) {
            
            const currentChar = string[i];

            
            if(!currentNode.children[currentChar]){//이 키를 가지지 않았다면,
                currentNode.children[currentChar] = new Node(currentNode.value + currentChar);//새로추가
            }

            currentNode = currentNode.children[currentChar]; // 자식 노드로 이동한다.
        }
        currentNode.fin = true //해당 노드는 자식이없다는 것 을 알려준다.
     }

     search(string) {
        let currentNode = this.root;

        for(let i = 0; i <string.length ; i++) {
            const chr = string[i]; 
            if(currentNode.children[chr]){//해당 지금 검사하는 문자가 있으면
                currentNode = currentNode.children[chr]; // 밑(자식)으로 이동
            } else {
                return false;//문자를 못찾았으면 false리턴
            }
        }
        return currentNode;//찾았으면 노드를 리턴
     }

    autoComplete(string) {

        const currentNode = this.search(string); // 검색어가 있는 노드를 먼저 찾고, 밑으로 탐색시작
        if(!currentNode){
          return '문자가 없습니다.';
        }
        let word=[];
        const start_node=[];
        start_node.push(currentNode);//배열에 넣고 검사

    
        while(start_node.length) {//node의 끝까지
    
          const check_Node= start_node.pop();//하나씩 pop
    
          if(check_Node.fin){ //자식이 없다면(fin=true)
            word.push(check_Node.value);
          }
          else{
            Object.values(check_Node.children).forEach(function(node){ 
              if(node){ 
                start_node.push(node);
                };
            });
          };
        };
      
    
        return word;
    }
}

 const trie = new Trie();

 trie.insert("cat");
 trie.insert("can");
 trie.insert("call");
 trie.insert("cell");
 trie.insert("vcell");
 trie.insert("just do it");
 console.log(trie.autoComplete("j"));