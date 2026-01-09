const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex].text}"`;
  quoteAuthor.textContent = `— ${quotes[randomIndex].author}`;
}

// Load a random quote on page load
generateQuote();

// New quote on button click
newQuoteBtn.addEventListener("click", generateQuote);
