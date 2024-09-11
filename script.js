const slide = document.getElementById("slide");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnThree = document.getElementById("3");
const btnFour = document.getElementById("4");
const btnFive = document.getElementById("5");

const next = () => {
  const id = slide.dataset.id;

  switch(id) {
    case "1":
      slide.dataset.id = "2";
      slide.src = "images/image2.jpeg";
      btnOne.classList.toggle("current");
      btnTwo.classList.toggle("current");
      break;
    case "2":
      slide.dataset.id = "3";
      slide.src = "images/image3.jpeg";
      btnTwo.classList.toggle("current");
      btnThree.classList.toggle("current");
      break;
    case "3":
      slide.dataset.id = "4";
      slide.src = "images/image4.jpeg";
      btnThree.classList.toggle("current");
      btnFour.classList.toggle("current");
      break;
    case "4":
      slide.dataset.id = "5";
      slide.src = "images/image5.jpeg";
      btnFour.classList.toggle("current");
      btnFive.classList.toggle("current");
      break;
    case "5":
      slide.dataset.id = "1";
      slide.src = "images/image1.jpeg";
      btnFive.classList.toggle("current");
      btnOne.classList.toggle("current");
      break;
  }
};

const previous = () => {
 const id = slide.dataset.id;

  switch(id) {
    case "1":
      slide.dataset.id = "5";
      slide.src = "images/image5.jpeg";
      btnOne.classList.toggle("current");
      btnFive.classList.toggle("current");
      break;
    case "2":
      slide.dataset.id = "1";
      slide.src = "images/image1.jpeg";
      btnTwo.classList.toggle("current");
      btnOne.classList.toggle("current");
      break;
    case "3":
      slide.dataset.id = "2";
      slide.src = "images/image2.jpeg";
      btnThree.classList.toggle("current");
      btnTwo.classList.toggle("current");
      break;
    case "4":
      slide.dataset.id = "3";
      slide.src = "images/image3.jpeg";
      btnFour.classList.toggle("current");
      btnThree.classList.toggle("current");
      break;
    case "5":
      slide.dataset.id = "4";
      slide.src = "images/image4.jpeg";
      btnFive.classList.toggle("current");
      btnFour.classList.toggle("current");
      break;
  }
};

const removeCurrent = () => {
  const btns = document.querySelector(".buttons").childNodes;

  for (i = 1; i < btns.length; i += 2) {
    if (btns[i].classList == "button current") {
      btns[i].classList.remove("current");
    }
  };
};

prevBtn.addEventListener("click", previous);
nextBtn.addEventListener("click", next);

btnOne.addEventListener("click", () => {
  slide.dataset.id = "1";
  slide.src = "images/image1.jpeg";

  removeCurrent();

  btnOne.classList.add("current");
});

btnTwo.addEventListener("click", () => {
  slide.dataset.id = "2";
  slide.src = "images/image2.jpeg";

  removeCurrent();

  btnTwo.classList.add("current");
});

btnThree.addEventListener("click", () => {
  slide.dataset.id = "3";
  slide.src = "images/image3.jpeg";

  removeCurrent();

  btnThree.classList.add("current");
});

btnFour.addEventListener("click", () => {
  slide.dataset.id = "4";
  slide.src = "images/image4.jpeg";

  removeCurrent();

  btnFour.classList.add("current");
});

btnFive.addEventListener("click", () => {
  slide.dataset.id = "5";
  slide.src = "images/image5.jpeg";

  removeCurrent();

  btnFive.classList.add("current");
});

setInterval(next, 5000);