const sentence = "Life is not about waiting for the storm to pass, but learning to dance in the rain.";
const words = sentence.split(" ");
const typingText = document.getElementById("typing-text");

let index = 0;

function typeWordByWord() {
  if (index < words.length) {
    typingText.innerHTML += words[index] + " ";
    index++;
    setTimeout(typeWordByWord, 300);
  }
}

window.onload = typeWordByWord;
