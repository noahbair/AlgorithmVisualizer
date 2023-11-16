/**
 * BUBBLE: This class handles operations necessary to perform the bubble sorting
 * algorithm. Inside Insert (), Sort () -> Button, BubbleSort (), Swap (), Sleep
 * (), and Display () are handled. Each function has comments associated with it
 * to explain the purpose behind the particular code.
 */
class Bubble {
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
     * bubbleSort() which will sort the data according to the bubble sort
     * algorithm.
     */
    Sort() {
        bubble.bubbleSort(values, values.length);
    }

    /**
     * STEP: This allows the user to sort one step at a time. There is a 
     * check in bubble sort to determine if this button was used. This is useful
     * for allowing the user to really understand each "step" in the process. 
     */
    Step() {
        step = 1; // << Used for step test
        bubble.bubbleSort(values, values.length);
    }
    
    /**
     * BUBBLE_SORT: This function handles the actual bubble sort algorithm. This
     * function makes a call to Swap() when it becomes necessary for elements to
     * change place so that they can be returned in sorted order.
     * 
     * @param values: The array of data to be sorted 
     * @param size: The length of the array to be sorted 
     */
    async bubbleSort(values, size) {
    	status = 1;
        for(var i = 0; i < size - 1; i++) { 
            for(var j = 0; j < size - i - 1; j++) { 
                if(values[j] >= values[j + 1]) { 
                    states[j] = 1; 
                    document.getElementById("stat").innerHTML = ("Comparing: " + values[j] + " with " + values[j + 1]);
                    await this.swap(values, j, j+1); 
                    states[j + 1] = 0; 
                    if (step == 1) { // << User wants to iterate once
                        return;
                    }
                } 
                states[j] = 2; 
            } 
            states[j] = 0; 
        } 
        status = 0;
        return values; 
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

            rect(i * 40, height - values[i] - 100, 40, 100 + values[i]);
            fill(0);
            text(values[i], i * 40 + 16, height - values[i] - 75);
        }
    }
}