// fetch API
//fetch is a promise so we can use async await

async function getMissions() {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    //.json() gives us the body of the request
    const data = await response.json();

    data.forEach((launch) => {
      const name = launch.name;
      const title = document.createElement('a');
      title.href = launch.links.wikipedia;
      title.innerHTML = `<h2>${name}</h2>`;
      //grabd the img url
      const imgUrl = launch.links.patch.small;
      //create the img element
      const image = document.createElement('img');

      image.src = imgUrl;
      //Add the image below the title

      //Bonus: Make the title clickable and redirecting to the wikipedia article of the mission
      document.body.appendChild(title);
      document.body.appendChild(image);

      //console.log(name);
    });

    console.log(data[0].links.patch.small);
  } catch (error) {
    console.log(error);
  }
}

getMissions();

/* 

Example using .then()

fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement('img');

      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);
      document.body.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(err));

*/
