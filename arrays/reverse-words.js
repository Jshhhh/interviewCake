function reverseWords(message) {

  // Decode the message by reversing the words
  // let word = message.join('').split(' ').reverse().join(' ');
  let end = 0;
  for (let i = 0; i < message.length; i++) {
    if (message[i+1] === ' ' || i === message.length - 1) {
      let reverse = i;
      while (reverse > end) {
        let temp = message[reverse];
        message[reverse] = message[end];
        message[end] = temp;
        reverse--;
        end++;
      }
      end = i + 2;
    }
  }

  for (let j = 0; j < message.length/2; j++) {
    let temp = message[j];
    message[j] = message[message.length - 1 - j];
    message[message.length - 1 - j] = temp;
  }
}


















// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}