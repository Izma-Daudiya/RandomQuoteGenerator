const quote = document.querySelector('.quote-text')
const author = document.querySelector('.quote-author')
const btn = document.querySelector('.generate-btn')

  const quotes = [
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    }
];

btn.addEventListener('click', function () {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const selectedQuote = quotes[randomIndex]
  quote.innerHTML = `${selectedQuote.text}`
  author.innerHTML = `-${selectedQuote.author}`
})