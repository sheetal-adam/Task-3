// script.js

const quoteText = document.getElementById('quoteText');
const nextBtn = document.getElementById('nextBtn');

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "If you can dream it, you can achieve it. - Zig Ziglar",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = randomQuote;
}

nextBtn.addEventListener('click', generateRandomQuote);

generateRandomQuote();
