class MinHeap {
    constructor() {
        this.heap = [];
    }



    // Get the parent index
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }



    // Get the left child index
    leftChildIndex(index) {
        return 2 * index + 1;
    }




    // Get the right child index
    rightChildIndex(index) {
        return 2 * index + 2;
    }






    // Swap elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }



    // Add a new element to the heap
    insert(value) {
        this.heap.push(value); 
        this.bubbleUp();     
    }



    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIdx = this.parentIndex(index);

            if (this.heap[index] >= this.heap[parentIdx]) break; // Heap property satisfied

            this.swap(index, parentIdx); // Swap with parent
            index = parentIdx;          // Update index to parent's index
        }
    }

    // Remove and return the smallest element
    extractMin() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];       
        this.heap[0] = this.heap.pop(); 
        this.bubbleDown();             
        return min;
    }

    bubbleDown() {
        let index = 0;

        while (this.leftChildIndex(index) < this.heap.length) {
            const leftIdx = this.leftChildIndex(index);
            const rightIdx = this.rightChildIndex(index);
            let smallerChildIdx = leftIdx;

            if (rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[leftIdx]) {
                smallerChildIdx = rightIdx;
            }

            if (this.heap[index] <= this.heap[smallerChildIdx]) break; 

            this.swap(index, smallerChildIdx); 
            index = smallerChildIdx;         
        }
    }


    // View the minimum value
    peek() {
        return this.heap[0] || null;
    }
}


const minHeap = new MinHeap();

minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(20);
minHeap.insert(17);
minHeap.insert(8);


console.log(minHeap.heap); 






