const slide = document.getElementById("slide");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const next = () => {
  const id = slide.dataset.id;

  switch(id) {
    case "1":
      slide.dataset.id = "2";
      slide.src = "images/image2.jpeg";
      break;
    case "2":
      slide.dataset.id = "3";
      slide.src = "images/image3.jpeg";
      break;
    case "3":
      slide.dataset.id = "4";
      slide.src = "images/image4.jpeg";
      break;
    case "4":
      slide.dataset.id = "5";
      slide.src = "images/image5.jpeg";
      break;
    case "5":
      slide.dataset.id = "1";
      slide.src = "images/image1.jpeg";
      break;
  }
};

const previous = () => {
 const id = slide.dataset.id;

  switch(id) {
    case "1":
      slide.dataset.id = "5";
      slide.src = "images/image5.jpeg";
      break;
    case "2":
      slide.dataset.id = "1";
      slide.src = "images/image1.jpeg";
      break;
    case "3":
      slide.dataset.id = "2";
      slide.src = "images/image2.jpeg";
      break;
    case "4":
      slide.dataset.id = "3";
      slide.src = "images/image3.jpeg";
      break;
    case "5":
      slide.dataset.id = "4";
      slide.src = "images/image4.jpeg";
      break;
  }
};

prevBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next);