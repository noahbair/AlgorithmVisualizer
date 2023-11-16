/**
 * ARRAY: This class handles the queue data structure which is composed of elements.
 * Inside Push (), Pop (), Peek (), and Display () are handled. Each function
 * has comments associated with it to explain the purpose behind the particular
 * code.
 */
class Array {
    constructor() {
        // Here For Consistency
    }

    /**
     * PUSH: This function handles inserting elements into the array. Insertions start at 
     * index zero and increase as necessary. 
     * 
     * @param data: User passed value to be added to the array
     */
    push(data) {
        if (data != null && data === parseInt(data)) { // << Requires Integer
            var size = 10;
            if (values.length > size - 1) {  
            	Insert_Alert();
            } else {
                values.push(data);
            }
        }
    }

    /**
     * POP: This function handles deleting elements from the array. Deletions start at 
     * index zero and increase accordingly.
     * 
     * @param data: User passed value to be removed from the array
     */
    pop(data) {
        if (data != null && data === parseInt(data)) { // << Requires Integer
            values.splice(data, 1);
        }
    }

    /**
     * DISPLAY: This function handles drawing necessary visualizations on the screen. There are
     * no external calls necessary for this implementation.
     */
    display() {
    	var index = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
        for (var j = 0; j <= index.length - 1; j++) {
            translate(70, 0);
            textSize(25);
        	text(index[j], -25, 150);
        }
        
        for (var i = 0; i <= values.length - 1; i++) {
            translate(70, 0);
            stroke(0);
            strokeWeight(2);
            fill('#E0E0E0');
            rect(-748, 20, 60, 90);

            fill(0);
            noStroke();
            textSize(25);
            text(values[i], -725, 75);
        }
    }
}