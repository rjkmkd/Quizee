const Questions = [
  {
    id: 1,
    text: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    Correctans: "Paris",
  },
  {
    id: 2,
    text: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    Correctans: "Mars",
  },
  {
    id: 3,
    text: "Who wrote 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Leo Tolstoy",
    ],
    Correctans: "William Shakespeare",
  },
  {
    id: 4,
    text: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    Correctans: "H2O",
  },
  {
    id: 5,
    text: "Which is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    Correctans: "Pacific Ocean",
  },
  {
    id: 6,
    text: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    Correctans: "8",
  },
  {
    id: 7,
    text: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    Correctans: "Leonardo da Vinci",
  },
  {
    id: 8,
    text: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "South Korea", "Japan", "Thailand"],
    Correctans: "Japan",
  },
  {
    id: 9,
    text: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    Correctans: "2",
  },
  {
    id: 10,
    text: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Galileo Galilei",
      "Albert Einstein",
      "Nikola Tesla",
    ],
    Correctans: "Albert Einstein",
  },
  {
    id: 11,
    text: "Which is the longest river in the world?",
    options: [
      "Amazon River",
      "Nile River",
      "Yangtze River",
      "Mississippi River",
    ],
    Correctans: "Nile River",
  },
  {
    id: 12,
    text: "Who is known as the Father of Computers?",
    options: [
      "Alan Turing",
      "Charles Babbage",
      "John von Neumann",
      "Bill Gates",
    ],
    Correctans: "Charles Babbage",
  },
  {
    id: 13,
    text: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    Correctans: "Nitrogen",
  },
  {
    id: 14,
    text: "In which year did World War II end?",
    options: ["1942", "1945", "1948", "1950"],
    Correctans: "1945",
  },
  {
    id: 15,
    text: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    Correctans: "Blue Whale",
  },
  {
    id: 16,
    text: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Oxygen", "Lithium"],
    Correctans: "Hydrogen",
  },
  {
    id: 17,
    text: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    Correctans: "Canberra",
  },
  {
    id: 18,
    text: "Which planet is closest to the Sun?",
    options: ["Venus", "Mars", "Mercury", "Earth"],
    Correctans: "Mercury",
  },
  {
    id: 19,
    text: "Who wrote '1984'?",
    options: [
      "George Orwell",
      "Aldous Huxley",
      "Ray Bradbury",
      "Ernest Hemingway",
    ],
    Correctans: "George Orwell",
  },
  {
    id: 20,
    text: "Which country hosted the 2016 Summer Olympics?",
    options: ["China", "Brazil", "United Kingdom", "Japan"],
    Correctans: "Brazil",
  },
  {
    id: 21,
    text: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Onion", "Avocado", "Pepper"],
    Correctans: "Avocado",
  },
];

let quizQue = document.querySelector(".quizQue");
let form = document.querySelector("#Form");
let correctAns = document.querySelector(".correctans")
let wrongAns = document.querySelector(".wrongans");
// let option1=form.querySelector('#option1')
let option1=form.querySelector('label[for="option1"]')
let option2=form.querySelector('label[for="option2"]')
let option3=form.querySelector('label[for="option3"]')
let option4=form.querySelector('label[for="option4"]')
let input1=form.querySelector('input[id="option1"]')
let input2=form.querySelector('input[id="option2"]')
let input3=form.querySelector('input[id="option3"]')
let input4=form.querySelector('input[id="option4"]')

const selectedOption = form.querySelector('input[name="answer"]:checked');

let submit=document.querySelector('.submit')
let count=1
let correctans = 0;
let wrongans = 0;

for(let question of Questions ){
  if(question.id==count){
    quizQue.innerText=`${question.id}. ${question.text}`
    // quizQue.innerText=question.text
       option1.innerHTML = input1.value = question.options[0];
       option2.innerHTML = input2.value = question.options[1];
       option3.innerHTML = input3.value = question.options[2];
       option4.innerHTML = input4.value = question.options[3];
     
  }
}

submit.addEventListener('click',()=>{
const selectedOption = form.querySelector('input[name="answer"]:checked');
if(selectedOption.value==Questions[count-1].Correctans){
  console.log("correct");
  count++
  correctans=correctans+1
  correctAns.innerHTML=`Correct Answer: ${correctans}`
}
else{
  console.log("Wrong");
  count++
  wrongans=wrongans+1
  wrongAns.innerHTML=`Wrong Answer: ${wrongans}`
  
}
for (let question of Questions) {
  if (question.id == count) {
    quizQue.innerText = `${question.id}. ${question.text}`;
    option1.innerHTML = input1.value = question.options[0];
    option2.innerHTML = input2.value = question.options[1];
    option3.innerHTML = input3.value = question.options[2];
    option4.innerHTML = input4.value = question.options[3];
    
  }
}

})





