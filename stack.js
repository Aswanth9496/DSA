


// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   // Push an element onto the stack
//   push(value) {
//     this.items.push(value);
//   }

//   // Pop an element from the stack
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }

//   // Check if the stack is empty
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Peek at the top element without removing it
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }
// }


// const stack = new Stack();
// stack.push(10)
// stack.push(120)
// stack.push(1)


// console.log(stack.peek());
// console.log(stack.isEmpty()); 




// reverse a string using stack

// function reverse(str){
//     let stack = []
//     let reverse=''

//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i]);
//     }

//     while(stack.length>0){
//         reverse+=stack.pop();
//     }

//     return reverse
// }



// let a= 'aswanth'

// console.log(reverse(a))






// function bublesort(array){
//     let swaped
//     do{
//            swaped  =false
//         for(let j=0;j<array.length-1;j++){
//             if(array[j]>array[j+1]){
//                let temp = array[j+1]
//                array[j+1]=array[j]
//                array[j]=temp;
//                 swaped  =true
//             }
//         }
//     }while(swaped)
    
// }

// let a=[1,2,3,8,4,6,9,2]
// bublesort(a)

// console.log(a);







// function selectionsort(array){
   
//     for(let i=0;i<array.length;i++){
//       let min =i
//        for(let j=i+1;j<array.length;j++){
//         if(array[min]>array[j]){
//             min=j
//         }
//        }
//        if(min!==i){
//         let temp =array[min]
//         array[min]=array[i]
//         array[i]=temp
//        }
//     }
    
// }


// let a=[1,2,3,8,4,6,9,2]

// selectionsort(a)

// console.log(a);





// function insertionsort(array){
//     for(let i=1;i<array.length;i++){
//         let j=i-1
//         let val =array[i]
//         while(j>=0&& array[j]>val){
//             array[j+1]=array[j]
//              j=j-1
//         }

//         array[j+1]=val
//     }
//     return array
// }

// let a=[1,2,3,8,4,6,9,2]

// console.log(insertionsort(a))




// function quicksort(array){
//     if(array.length<2){
//         return array
//     }
//     let pivot = array[array.length-1];
//     let left =[]
//     let right =[]

//     for(let i=0;i<array.length-1;i++){
//         if(array[i]>pivot){
//             right.push(array[i])
//         }else{
//             left.push(array[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }


// const array =[-2,5,8,61,2,7,35,8]


// console.log(quicksort(array))






//---------------------------------------------------------------------------------------------------------------------------------------




// class HashTable{

//     constructor(size){
//         this.table = new Array(size)
//         this.size =size
//     }

//     hash(key){
//         let total = 0

//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }

//         return total % this.size
//     }


//     set(key,val){
//         const index = this.hash(key)
//         this.table[index]=val
//     }

//     get(key){
//         const index = this.hash(key)
//         this.table[index]=undefined
//     }


//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }


//  const h = new HashTable(50)

//  h.set('age',25)
//  h.set('name','aswanth')

//  h.display()






// function mergesort(array){
//     if(array.length<2){
//         return array
//     }


//     let pivot = Math.floor(array.length/2)
//         let left =array.slice(0,pivot)
//      let rigtht=array.slice(pivot)

//     return merge(mergesort(left),mergesort(rigtht))

     

// }


// function merge(left,right){
    
//     const sortedArray  =[]
//      while(left.length && right.length){
//         if(right[0]<left[0]){
//             sortedArray.push(right.shift());
//         }else{
//             sortedArray.push(left.shift());
//         }
//      }

//      return [...soetarray,...left,...right]
// }










// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));




// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i];
//         let j = i - 1;

//         // Move elements of arr[0..i-1] that are greater than key one position ahead
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = key;
//     }
//     return arr;
// }

// console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));



// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let minIndex = i;

//         // Find the minimum element in the unsorted part
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         // Swap the found minimum element with the first element
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//     return arr;
// }

// console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));



// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // Add an element to the stack
//     push(element) {
//         this.items.push(element);
//     }

//     // Remove and return the top element
//     pop() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.pop();
//     }

//     // Return the top element without removing it
//     peek() {
//         if (this.isEmpty()) {
//             return "No elements in the stack";
//         }
//         return this.items[this.items.length - 1];
//     }

//     // Check if the stack is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Display the stack contents
//     printStack() {
//         return this.items.join(", ");
//     }
// }

// // Example usage
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack.printStack()); // Output: 10, 20, 30
// console.log(stack.pop()); // Output: 30
// console.log(stack.peek()); // Output: 20



// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     // Add an element to the queue
//     enqueue(element) {
//         this.items.push(element);
//     }

//     // Remove and return the front element
//     dequeue() {
//         if (this.isEmpty()) {
//             return "Underflow";
//         }
//         return this.items.shift();
//     }

//     // Return the front element without removing it
//     peek() {
//         if (this.isEmpty()) {
//             return "No elements in the queue";
//         }
//         return this.items[0];
//     }

//     // Check if the queue is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Display the queue contents
//     printQueue() {
//         return this.items.join(", ");
//     }
// }

// // Example usage
// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.printQueue()); // Output: 10, 20, 30
// console.log(queue.dequeue()); // Output: 10
// console.log(queue.peek()); // Output: 20





