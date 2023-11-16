/**
 * STACK: This class handles the stack data structure which is composed of elements.
 * Inside Push (), Pop (), Peek (), and Display () are handled. Each function
 * has comments associated with it to explain the purpose behind the particular
 * code.
 */
class Stack {
    constructor() {
        // Here For Consistency
    }

    /**
     * PUSH: This function handles inserting (push) elements onto the top of the stack. Since
     * each element is always added to the top of the stack no special handling is needed. 
     * 
     * @param data: User passed value to be added to the stack
     */
    push(data) {
        if (data != null && data === parseInt(data)) { // << Requires Integer
            values.push(data);
        }
    }


    /**
     * POP: This function handles deleting (pop) elements from the top of the stack. Since
     * each element is always removed from the top of the stack no special handling is needed. 
     * 
     */
    pop() {
        return values.pop();

    }

    /**
     * PEEK: This function handles returning the value of the element at the top of the stack
     * at any given time. This is used for the text explanation. 
     */
    peek() {
        return values[values.length - 1];
    }

    /**
     * DISPLAY: This function handles drawing necessary visualizations on the screen. There are
     * no external calls necessary for this implementation.
     */
    display() {
        for (var i = values.length - 1; i >= 0; i--) {
            translate(70, 0); 
            stroke(0);
            strokeWeight(2);
            line(10, 45, 20, 45); 
            fill('#E0E0E0');
            rect(-50, 20, 60, 50);
            
            fill(0);
            noStroke(); 
            textSize(25);
            text(values[i], -25, 50); 
        }
        document.getElementById("stat").innerHTML = ("Stack Peek: " + stack.peek());
    }
}