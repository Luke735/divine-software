//called when user clicks Submit button
function parseForm() {
    q1 = Array.from(document.getElementsByClassName("1"));
    q2 = Array.from(document.getElementsByClassName("2"));

    
    getRadioAnswer(q1);
    getCheckboxAnswer(q2);
}

//returns: the value of the radio button that was selected, -1 if not answered
function getRadioAnswer(array) {
   for (i = 0; i < array.length; ++i) {
      if (array.at(i).checked) { 
        console.log(array.at(i).value + '\n'); 
        return array.at(i).value; }
   }
   return -1;
}

//returns: an array with the values of all checkboxes selected, empty array if none checked
function getCheckboxAnswer(array) {
    let returnArray = [];
    for (i = 0; i < array.length; ++i) {
        if (array.at(i).checked) { 
            console.log(array.at(i).value + '\n'); 
            returnArray.push(array.at(i).value);
        }
    }
    return returnArray;
 }

/*
let person = {
    name: 'Mosh',
    age: 30
};

//objects and size of array is dynamic
let array = ['red', 'blue'];
*/
