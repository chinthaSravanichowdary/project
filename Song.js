let closetSection = document.getElementById("music");
document.getElementById("btn-music").addEventListener('click', getMusic);

function getMusic(e) {
  fetch('songs.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.forEach((item) => {
      let section = 
      `
         <div class="music">
           <h2>${item.name}</h2> 
           <p>Type: ${item.type}</p>
         </div>  
      `;
      musicSection.innerHTML += section;
    })
  })
  .catch((err) => console.log(`Error: ${err}`));
}

