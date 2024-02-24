import { fetchApi } from './services/api-service';
import { showIziToast } from './services/iziToast';
import { setSpinner } from './spinner';

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
      addTextContent(quoteContent, author);
      return;
    }
  }
  fetchGetExercisesQuote();
}

getQuoteData();

async function fetchGetExercisesQuote() {
  try {
    setSpinner(true);
    const resp = await fetchApi.getExercisesQuote();
    const { quote: newQuote, author } = resp;
    const quoteData = { quote: newQuote, author, date: new Date() };
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
    addTextContent(newQuote, author);
  } catch (err) {
    showIziToast(err.message);
  } finally {
    setSpinner(true);
  }
}

function addTextContent(content, author) {
  quote.content.textContent = content;
  quote.author.textContent = author;
}
