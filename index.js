// class quee{
//     constructor(){
//      this.element =[]
//     }


//     push(element){
//         this.element.push(element)
//     }

//     pop(){

//         if(this.isEmpty()){
//             return "Stack is empty";
//         }

//        return this.element.pop()
//     }


//     isEmpty(){
//         return this.element.length ===0 
//     }

//     size(){
//         return this.element.length
//     }

//     print(){
//         console.log(this.element.join(' '))
//     }
// }



// let a =new quee()


// a.push(10)
// a.push(20)

// a.pop()
// a.print()



//-----------------------------------------------------------------------------------------------------------------------------------------

//Selection Sort algorithm 

// let arr = [10,2,50,30,40,]


// function selectionSorta(array){
      
//     for(let i=0;i<array.length-1;i++){
//         let min = i
        
//         for(let j=i+1;j<array.length ;j++){
//              if(array[min]>array[j]){
//                min=j
//              }
//         }
//         if(min!==i){
//             let temp = array[i]
//             array[i]=array[min]
//             array[min]=temp
//         }

//     }

//     return array
// }


// console.log(selectionSorta(arr))





//----------------------------------------------------------------------------------------------------------------------------

// insertion sort



// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let j=i-1
//         let min=arr[i]
//         while(j>=0 && arr[j]>min){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=min
//     }
    
//     return arr
// }

// let a=[1,3,67,-9,-5]

// console.log(insertionSort(a))



//----------------------------------------------------------------------------------------------------------------------

// quick sort


// function swap(a, start, end) {
//     let temp = a[start];
//     a[start] = a[end];
//     a[end] = temp;
// }

// function partition(a, lb, ub) {
//     let pivot = a[lb];
//     let start = lb;
//     let end = ub;

//     while (start < end) {
//         while (a[start] <= pivot && start < ub) {
//             start++;
//         }

//         while (a[end] > pivot && end > lb) {
//             end--;
//         }

//         if (start < end) {
//             swap(a, start, end);
//         }
//     }

//     swap(a, lb, end);
//     return end;
// }

// function quickSort(a, lb, ub) {
//     if (lb < ub) {
//         let loc = partition(a, lb, ub);
//         quickSort(a, lb, loc - 1);
//         quickSort(a, loc + 1, ub);
//     }
// }

// // Example Usage
// let a = [2, 5, 9, 2, 3, 1, 75, 84, 6, 8];
// quickSort(a, 0, a.length - 1);
// console.log("Sorted Array:", a);


