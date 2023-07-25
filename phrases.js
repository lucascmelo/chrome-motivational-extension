const phrases = [
  "Looking for something?",
  "Go back to work!",
  "It's not the time to have fun!",
  "Back to work, you need to buy Olivia's milk!",
  "How many tasks did you finish today?",
  "Come back tomorrow!",
  "No Pain<br/>No Gain",
  "🧐",
  "😳",
  "🤡",
];
const randomPhraseIndex = Math.floor(Math.random() * phrases.length);
const content = document.getElementsByTagName("html");
content[0].innerHTML = `<h1>⚠️<br/>${phrases[randomPhraseIndex]}</h1>`;
