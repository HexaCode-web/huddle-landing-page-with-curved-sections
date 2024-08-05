const clientHeight = document.documentElement.clientHeight;
const communties = document.querySelector(".communities");
const sent = document.querySelector(".sent");
const img1 = document.querySelector("#Grow");
const sec1 = document.querySelector(".SectionContent");
const sec2 = document.querySelector(".SectionContent2");
const sec3 = document.querySelector(".SectionContent3");
const img2 = document.querySelector("#flowing");
const img3 = document.querySelector("#users");

document.addEventListener("scroll", function () {
  let communtiesposition = communties.getBoundingClientRect().top;
  let sentPos = sent.getBoundingClientRect().top;
  let img1pos = img1.getBoundingClientRect().top;
  let sec1pos = sec1.getBoundingClientRect().top;
  let sec2pos = sec2.getBoundingClientRect().top;
  let sec3pos = sec3.getBoundingClientRect().top;
  let img2pos = img2.getBoundingClientRect().top;
  let img3pos = img3.getBoundingClientRect().top;

  clientHeight > communtiesposition && communtiesposition > -100
    ? communties.classList.add("SlideInLeft")
    : communties.classList.remove("SlideInLeft");

  clientHeight > sentPos && sentPos > -100
    ? sent.classList.add("SlideInRight")
    : sent.classList.remove("SlideInRight");

  clientHeight > img1pos && img1pos > -100
    ? img1.classList.add("SlideInRight")
    : img1.classList.remove("SlideInRight");

  clientHeight > sec1pos && sec1pos > -100
    ? sec1.classList.add("SlideInLeft")
    : sec1.classList.remove("SlideInLeft");

  clientHeight > sec2pos && sec2pos > -100
    ? sec2.classList.add("SlideInLeft")
    : sec2.classList.remove("SlideInLeft");

  clientHeight > sec3pos && sec3pos > -100
    ? sec3.classList.add("SlideInLeft")
    : sec3.classList.remove("SlideInLeft");

  clientHeight > img2pos && img2pos > -100
    ? img2.classList.add("SlideInRight")
    : img2.classList.remove("SlideInRight");

  clientHeight > img3pos && img3pos > -100
    ? img3.classList.add("SlideInRight")
    : img3.classList.remove("SlideInRight");
});
