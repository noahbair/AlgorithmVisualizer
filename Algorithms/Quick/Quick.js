/**
 * QUICK: This class handles operations necessary to perform the quick sort algorithm.
 * Inside Insert (), Sort () -> Button, QuickSort (), Swap (), Sleep (), and Display () are 
 * handled. Each function has comments associated with it to explain the purpose behind the 
 * particular code.
 */
class Quick {
    constructor() {
        // Here For Consistency
    }

    /**
     * INSERT: The allows the user to pass a value into the array "values". The 
     * "states" are then modified so that they can be changed when Display () is
     * called below. 
     * 
     * @param data: User passed value to be added to the algorithm
     */
    Insert(data) {
        values.push(data);

        for (var i = 0; i < values.length; i++) {
            states[i] = -1; // << Set all states to (grey)
        }
    }

    /**
     * RANDOM: This allows the user to populate the array with 20 random values. This
     * becomes really useful when testing to save time.
     */
    Random() {
        while (values.length < 20) {
            var r = Math.floor(Math.random() * 100) + 1;
            if (values.indexOf(r) === -1) {
                values.push(r);
            }
        }
    }

    /**
     * SORT: Once the data is inserted, this can be used to make a call to
     * quickSort() which will sort the data according to the bubble sort
     * algorithm.
     */
    Sort() {
        quick.quickSort(values, 0, values.length - 1);
    }
    
    /**
     * ITERATE: This allows the user to sort one step at a time. There is a 
     * check in bubble sort to determine if this button was used. This is useful
     * for allowing the user to really understand each "step" in the process. 
     */
    Step() {
    	step = 1; // << Used for step test
        quick.quickSort(values, 0, values.length - 1);
    }

    /**
     * QUICK_SORT: This function handles the actual quick sort algorithm. This
     * function makes a call to Swap () when necessary and otherwise performs
     * the bulk of the operation.
     * 
     * @param values: The array of data to be sorted 
     * @param start: The beginning of the array
     * @param end: The end of the array 
     */
    async quickSort(values, start, end) {
    	status = 1;
    	if (start >= end) {
    		return
    	}
    	var index = await this.partition(values, start, end); // << Calculate the index
    	await this.quickSort(values, start, index - 1);
    	await this.quickSort(values, index + 1, end);
    	status = 0;
    }
   
    /**
     * PARTITION: This starts at the leftmost element "start" and keeps track of the elements smaller or
     * equal to the "start" and stores them as "i". Swaps are performed if necessary using an external
     * swap function.  
     * 
     * @param arr: The array passed from QuickSort ()
     * @param start: The left most element "start"
     * @param high: The right most element "end"
     */
    async partition(values, start, end) {
        var pivot = values[end];
        console.log("Pivot: " + values[end])
        var index = start; // << Pivot index  
        
        for (var i = start; i < end; i++) {
            if (values[i] < pivot) {
                await this.swap(values, i, index);
                document.getElementById("stat").innerHTML = ("Comparing: " + values[i] + " with " + values[index]);
                states[index] = -1;
                index++;
                states[index] = 1;
            } 
        }
        await this.swap(values, index, end);
        return index; 
    } 
    
    /**
     * SWAP: This function is crucial to the bubble sort algorithm. This function is
     * used when necessary swap operations become necessary to put the contents of the
     * data in a sorted order. Swap works in sync with sleep() to delay the swap operation.   
     * 
     * @param arr: The array that is passed to be modified
     * @param a: Element to be swapped
     * @param b: Element to be swapped
     */
    async swap(arr, a, b) {
        var spd = parseInt(document.getElementById('vol').value); // << User passed value for slider
        await this.sleep(spd);
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    /**
     * SLEEP: This function is important because it delays the swap operation shown above.
     * The delay is controlled by the slider on screen above. This allows the swap transitions
     * to appear as an animation instead of being performed instantly. 
     * 
     * @param ms: Time to delay response from the slider
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * DISPLAY: This function handles drawing all necessary shapes, text, and other necessary 
     * screen visulaization resources. There are no external calls made in this function.
     */
    display() {
        for (var i = 0; i < values.length; i++) {
            stroke(0);
            fill(255);

            if (states[i] == 0) { // << Sorted Order (red)
                fill('#FFCCCC');
            } else if (states[i] == 1) { // << Determining (green)
                fill('#E5FFCC');
            } else {
                fill('#E0E0E0'); // << Not Discovered (grey)
            }

            rect(i * w, height - values[i] - 100, w, 100 + values[i]);
            fill(0);
            text(values[i], i * w + 16, height - values[i] - 75);
        }
    }
}