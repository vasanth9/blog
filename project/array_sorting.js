
const BubbleSortContainer = document.getElementById("bubble-sort");
let HEIGHT = 200;
let WIDTH = 500;
let SPEED = 50;
let SIZE = 20;


const randomArrayGenerator = () => {
    let size = SIZE;
   let array = Array.from({length:size},(_,index)=> 0);
   for(let i=size-1;i>=0;i--){
    const j = (Math.floor(Math.random()*(size)))+1;
    array[i]=j;
   }
   return array;
}
const paintArrayElements = () => {
    
    BubbleSortArray.map((element)=>{
        const node = document.createElement("span");
        node.setAttribute("class","array-element");
        node.setAttribute("id",`bubble-sort-${element}`);
        const nodeHeight = Math.floor((HEIGHT/SIZE)*element);
        const nodeWidth = (Math.floor(WIDTH/SIZE));
        node.setAttribute("style",`height:${nodeHeight}px; width: ${nodeWidth-(nodeWidth/SIZE)}px`)
        BubbleSortContainer.appendChild(node);
    })
}

let BubbleSortArray = randomArrayGenerator();

const sortDivs = async () => {
    let n = BubbleSortArray.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            const firstChild = BubbleSortContainer.children[j];
            const secondChild = BubbleSortContainer.children[j+1];
            firstChild.classList.add('array-element-compare');
            secondChild.classList.add('array-element-compare');
            await new Promise(resolve => setTimeout(resolve, SPEED));
                if(BubbleSortArray[j]>BubbleSortArray[j+1]){

                   
                    const firstheight = firstChild.style.height;
                    const secondheight = secondChild.style.height;
                   

                    let temp = BubbleSortArray[j];
                    BubbleSortArray[j] = BubbleSortArray[j+1];
                    BubbleSortArray[j+1] = temp;

                    firstChild.style.height = secondheight;
                    secondChild.style.height = firstheight;
                    firstChild.classList.add('array-element-swap');
                    secondChild.classList.add('array-element-swap');

                    await new Promise(resolve => setTimeout(resolve, SPEED));
                    firstChild.classList.remove('array-element-swap');
                    secondChild.classList.remove('array-element-swap');

                }
                firstChild.classList.remove('array-element-compare');
                secondChild.classList.remove('array-element-compare');
                
            
        }
        BubbleSortContainer.children[n-i-1].classList.add("array-element-sorted");
    }
    BubbleSortContainer.children[0].classList.add("array-element-sorted");

}

paintArrayElements();

const regenerateArray = () => {
    BubbleSortArray = randomArrayGenerator();
    const myNode = BubbleSortContainer;
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    paintArrayElements();
}

