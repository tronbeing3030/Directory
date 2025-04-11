console.log("Works!");

const imgs = document.querySelector('.imgs');

let a = [];

fetch('./small_business_directory.json') 
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    for(i = 0; i<10; i++){
        const comps = document.createElement('div');
        const title = document.createElement('h1');
        const ratings = document.createElement('p');
        const description = document.createElement('p');
        const category = document.createElement('p');
        // comps.style.backgroundImage = data[i].
        title.innerHTML = data[i].name;
        ratings.innerHTML = data[i].rating;
        description.innerHTML = data[i].description;
        category.innerHTML = data[i].category;
        comps.setAttribute("class", "inner");
        comps.appendChild(title);
        comps.appendChild(ratings);
        comps.appendChild(description);
        comps.appendChild(category);
        imgs.appendChild(comps);
        comps.style.backgroundImage = `url(${data[i].contact.image_url})`;
        console.log(comps.style.backgroundImage);
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




