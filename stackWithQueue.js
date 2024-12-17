
// class StackWithQueue{
//     constructor(){
//         this.q1 = []
//         this.q2 = []
//     }
//     isEmpty(){
//         return this.q1.length === 0
//     }
//     push(value){
//         this.q1.push(value)
//     }
//     pop(){
//         if(this.isEmpty()){
//             return console.log( 'empty');
            
//         }else{
//             while( this.q1.length > 1){
//                 this.q2.push(this.q1.shift())
//             }
//             let popped = this.q1.pop();
//             [[this.q1],[this.q2]] = [[this.q2],[this.q1]]
//             return popped          
//         }
//     }

//     display(){
//         console.log([...this.q1,...this.q2]);     
//     }
// }

// let stack = new StackWithQueue()
// stack.push(100)
// stack.push(100)
// stack.push(100)
// stack.push(100)
// stack.pop()
// stack.display()













// QueueWithStack

// class QueueWithStack{
//     constructor (){
//         this.stack1=[]
//         this.stack2 = []

//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     dequeue(){
//         if(this.stack1.length ===0){
//             if(this.stack2.length ===0){
//                 return empty
//             }
//         }
//         while(this.stack1.length>0){
//             this.stack2.push(this.stack1.pop())
//         }
//         return this.stack2.pop( )
//     }
//     display(){
//         console.log([...this.stack1,...this.stack2]);
        
//     }
// }

// let queue = new QueueWithStack()
// queue.enqueue(200)
// queue.enqueue(300)
// queue.enqueue(400)
// queue.display()










// reverse str using stak


// function reversing(input){
//     let stack = []
//     for(let chat of input){
//         stack.push(chat)
//     }
//     let reversed = ''
//     while(stack.length >0){
//         reversed += stack.pop()
//     }
//     return reversed
// }
// const str = 'llkklloo'
// const output = reversing(str)
// console.log(output);





