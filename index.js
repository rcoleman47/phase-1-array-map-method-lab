const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials
}

const split = tutorials.map(((array)=> array.split(" ")
  ))
console.log(split)
const uppercase = (array) => {
  return array.map((string) => {
    return string.toString().charAt(0).toUpperCase();
    });
}


console.log(uppercase(split))