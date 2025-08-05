const buzzes = document.querySelector('.buzzes');
const company = document.querySelector('main');
const searchBar = document.querySelector('input');
const categories = document.querySelector('#Kinds');

let a = [];


fetch('./data.json') 
  .then(response => response.json())
  .then(data => {

    a = data.map(info => info);
    compItem();
    
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });



const compItem = () => {
    a.forEach(item => {
        const buzz = document.createElement('div');
        const title = document.createElement('h1');
        const ratings = document.createElement('p');
        const category = document.createElement('p');

        title.innerHTML = item.name;
        ratings.innerHTML = '★ ' + item.rating;
        category.innerHTML = item.category;

        category.setAttribute("class", "category");
        ratings.setAttribute("class", "ratings");

        buzz.setAttribute("class", "inner");
        buzz.append(ratings, title, category);
        buzzes.appendChild(buzz);

        buzz.style.backgroundImage = `url(${item.contact.image_url})`;

        buzz.onclick = () => showPopup(item);

    });
}

// Show the pop-up
function showPopup(item) {
  const pop = document.createElement('div');
  const popcont = document.createElement('div');
  const close = document.createElement('span');
  const content = document.createElement('span');
  const heading = document.createElement('span');
  const titles = document.createElement('span');
  const title = document.createElement('h1');
  const ratings = document.createElement('p');
  const description = document.createElement('p');
  const image = document.createElement('div');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const location = document.createElement('p');

  pop.setAttribute("class", "popup");
  popcont.setAttribute("class", "popup-content");
  heading.setAttribute("class", "heading");
  titles.setAttribute("class", "titles");
  close.setAttribute("class", "popup-close");
  location.setAttribute("class", "location");
  ratings.setAttribute("class", "ratings");
  description.setAttribute("class", "description");
  image.setAttribute("class", "image");

  close.innerHTML = "&#10005;";
  // console.log(item);  
  title.innerHTML = item.name;
  ratings.innerHTML = '★ ' + item.rating;
  description.innerHTML = item.description;
  // category.innerHTML = item.category + ', ' + item.location;
  email.innerHTML = '&#9993; ' + item.contact.email;
  phone.innerHTML = '&phone; ' + item.contact.phone;
  location.innerHTML = item.location;
  image.style.backgroundImage = `url(${item.contact.image_url})`;

  content.append(ratings, description, email, phone);
  titles.append(title, location);
  heading.append(close, titles);
  popcont.append(heading, image, content);
  pop.appendChild(popcont);

  pop.style.display = "block";

  company.appendChild(pop);
  
  // console.log(pop.style.display);

  close.onclick = () => {
    const pop = document.querySelector(".popup");
    // console.log(pop.style.display);
    company.removeChild(pop);
    // console.log(pop.style.display);

  }
}
