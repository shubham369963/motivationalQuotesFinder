const quote = document.getElementById('quote');
const author = document.getElementById('auther');
const newq = document.getElementById('newq');
let jsondata = '';
let quotesdata = '';

const getnewquotes = () => {
  let quotecount = jsondata.length;
  let num = Math.floor(Math.random() * quotecount);

  quotesdata = jsondata[num];

  quote.innerText = `${quotesdata.text}`;

  if (quotesdata.author == null) {
    author.innerText = 'unknown';
  } else {
    author.innerText = `${quotesdata.author}`;
  }
};

const getquotes = async () => {
  const url = 'https://type.fit/api/quotes';

  try {
    let data = await fetch(url);
    jsondata = await data.json();

    getnewquotes();
  } catch (error) {}
};
getquotes();

newq.addEventListener('click', getquotes);
