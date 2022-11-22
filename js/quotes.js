const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote:
      "If you are not willing to risk the usual, you will have to settle for the ordinary. ",
    author: "Jim Rohn",
  },
  {
    quote: "Every horse thinks it's own pack heavies.",
    author: "Thomas Fuller",
  },
  {
    quote:
      "Failure is delay, but not defeat. It is a temporary detour, not a dead-end street.",
    author: "William Ward",
  },
  {
    quote: "I never dreamed about success, I worked for it",
    author: "Estee Lauder",
  },
  {
    quote:
      "The only thing worse than starting something and failing is not starting something.",
    author: "Seth Godin",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(quotes[Math.floor(Math.random() * quotes.length)]);
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
