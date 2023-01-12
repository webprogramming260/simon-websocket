/**
  https://picsum.photos/
 */
function displayPicture(data) {
  const containerEl = document.querySelector("#picture");

  const width = containerEl.offsetWidth;
  const height = containerEl.offsetHeight;

  const imgUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  containerEl.appendChild(imgEl);
}

/**
  https://github.com/lukePeavey/quotable
 */
function displayQuote(data) {
  const containerEl = document.querySelector("#quote");

  const quoteEl = document.createElement("p");
  quoteEl.classList.add("quote");
  const authorEl = document.createElement("p");
  authorEl.classList.add("author");

  quoteEl.textContent = data.content;
  authorEl.textContent = data.author;

  containerEl.appendChild(quoteEl);
  containerEl.appendChild(authorEl);
}

function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}

const random = Math.floor(Math.random() * 1000);
callService(
  `https://picsum.photos/v2/list?page=${random}&limit=1`,
  displayPicture
);
callService("https://api.quotable.io/random", displayQuote);
