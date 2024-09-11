const slide = document.getElementById("slide");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

const next = () => {
  const img = slide.src;

  switch(img) {
    case "file:///home/af1991/repos/image-carousel/images/image1.jpeg":
      slide.src = "images/image2.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image2.jpeg":
      slide.src = "images/image3.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image3.jpeg":
      slide.src = "images/image4.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image4.jpeg":
      slide.src = "images/image5.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image5.jpeg":
      slide.src = "images/image1.jpeg";
      break;
  }
};

const previous = () => {
  const img = slide.src;

  switch(img) {
    case "file:///home/af1991/repos/image-carousel/images/image1.jpeg":
      slide.src = "images/image5.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image2.jpeg":
      slide.src = "images/image1.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image3.jpeg":
      slide.src = "images/image2.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image4.jpeg":
      slide.src = "images/image3.jpeg";
      break;
    case "file:///home/af1991/repos/image-carousel/images/image5.jpeg":
      slide.src = "images/image4.jpeg";
      break;
  }
};

prevBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next);