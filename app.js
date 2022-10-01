const url = "https://source.unsplash.com/collection/139386/300x200/?sig=";
const images = document.querySelectorAll("img");

const randomNum = () => {
  return Math.floor(Math.random() * 1000);
};

function shufflePics() {
  for (let att of images) {
    att.src = `${url}${randomNum()}`;
    {
      console.log(att.src);
    }
  }
}

document.querySelector("button").addEventListener("click", shufflePics);
