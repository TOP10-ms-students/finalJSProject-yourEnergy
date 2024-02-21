import { fetchApi } from './services/api-service';

const quote = {
  content: document.querySelector('.js-quote-content'),
  author: document.querySelector('.js-quote-author'),
};

function getQuoteData() {
  const storedQuote = localStorage.getItem('quoteData');
  if (storedQuote) {
    const { quote: quoteContent, author, date } = JSON.parse(storedQuote);
    const savedDate = new Date(date);
    const currentDate = new Date();

    if (savedDate.getDate() === currentDate.getDate()) {
      quote.content.textContent = quoteContent;
      quote.author.textContent = author;
      return;
    }
  }

  fetchApi
    .getExercisesQuote()
    .then(resp => {
      const { quote: newQuote, author } = resp;
      const quoteData = { quote: newQuote, author, date: new Date() };
      localStorage.setItem('quoteData', JSON.stringify(quoteData));
      quote.content.textContent = newQuote;
      quote.author.textContent = author;
    })
    .catch(err => console.log(err));
}
getQuoteData();
