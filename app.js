console.log("Works!");

const imgs = document.querySelector('.imgs');
const company = document.querySelector('main');

let a = [];

fetch('./small_business_directory.json') 
  .then(response => response.json())
  .then(data => {
    
    for(i = 0; i<10; i++){
        const comps = document.createElement('div');
        const title = document.createElement('h1');
        const ratings = document.createElement('p');
        const description = document.createElement('p');
        const category = document.createElement('p');
        const subtitle = document.createElement('div');
        title.innerHTML = data[i].name;
        ratings.innerHTML = 'Rating: ' +data[i].rating;
        description.innerHTML = data[i].description;
        category.innerHTML = data[i].category;
        ratings.setAttribute("class", "ratings");
        subtitle.setAttribute("class", "sub");
        subtitle.appendChild(category);
        subtitle.appendChild(ratings);
        comps.setAttribute("class", "inner");
        comps.appendChild(title);
        comps.appendChild(subtitle);
        comps.appendChild(description);
        imgs.appendChild(comps);
        comps.style.backgroundImage = `url(${data[i].contact.image_url})`;
        comps.addEventListener('click', (i) => {
          console.log(i);
          const contact = document.createElement('p');
          contact.innerHTML = data[i].contact.email;
          comps.appendChild(contact);
        });
  }
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

  

//   document.addEventListener('DOMContentLoaded', () => {
//     const parentElement = document.getElementById('parent');
//     const childElement = document.createElement('div');
//     childElement.textContent = 'I am a child element!';
//     parentElement.appendChild(childElement);
//   });




