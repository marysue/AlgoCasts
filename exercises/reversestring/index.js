// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

/*
 function reverse(str) {
   return str
     .split('')
     .reverse()
     .join('');
 }
 */
/*
 function reverse(str) {
   let reversed = '';

   for (let character of str) {
     reversed = character + reversed;
   }

   return reversed;
 }
 */
 
 /*
 function reverse(string) {

  let count = 0;

  let newString = "";

  while (count < string.length) {

    const index = string.length - (count + 1);

    newString += string[index];

    count++;
  }
	  return newString;
  }

 
  */
 
 		 
 function reverse(string)
 {
	var newstring = '';
	var len = string.length - 1;
	for (i = len; i >= 0; i--) {
		newstring += string[i];
	}
	return newstring;
 }


module.exports = reverse;