let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 
                     'easily', 'the', 'first', 'time', 'it', 'is', 'about', 
                     'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 
                     'Pine,', 'Learn', 'JavaScript'];

// using pop method to remove the last string of the array
secretMessage.pop();

// logging the size of the arrys using the length method
console.log(secretMessage.length);

// adding two words to the end of the array using the push method
secretMessage.push('to', 'Program');

// accessing and replacing an element within an array using its index 
secretMessage[7] = 'right';

// removing the first element in the array using the shift method
secretMessage.shift();

// adding an element to the beginning of the array using the unshift method
secretMessage.unshift('Programming');

// removing element from and array and replacing them with a single element with the splice method
secretMessage.splice(6, 5, 'know,');

// displaying the contents of an array concatenated and using the designated delimiter
console.log(secretMessage.join(' '));
