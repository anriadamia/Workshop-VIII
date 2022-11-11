let dataSlider = [
    {
      id: 1,
      imageUrl:
        "https://i.pinimg.com/originals/bb/67/c4/bb67c4782515e7bb6bdb7e50c843dff7.png",
      title: "title1",
    },
    {
      id: 2,
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "title2",
    },
    {
      id: 3,
      imageUrl:
        "https://i.pinimg.com/originals/bb/67/c4/bb67c4782515e7bb6bdb7e50c843dff7.png",
      title: "title3",
    },
    {
      id: 4,
      imageUrl:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
      title: "title4",
    },
  ];
  
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderContent = document.getElementById("slider-content");
  const dotItem = document.getElementsByClassName('dot');
  let sliderIndex = 0;
  
  // ამ ფუნქციის საშუალებიტ ვქმნი დივ ტეგს
  function createDivTag(item) {
    // item = მასივიდან დაბრუნებული იტემ
    const div = document.createElement("div");
    div.classList.add("slide");
    return div;
  }
  
  //  ამ ფუნქციის საშუალებიტ ვქმნი სურათის ტეგს
  function createImgTag(item) {
    const img = document.createElement("img");
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.title);
    return img;
  }
  
  // ამ ფუნქციის საშუალებიტ ვქმნი სათაურის ტეგს
  function createh2Tag(item) {
    const title = document.createElement("h2");
    title.textContent = item.title;
    return title;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsWraper");
  
    dataSlider.forEach((element) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-id", element.id - 1);
  
      dot.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
      dotsParent.appendChild(dot);
    });
  
    return dotsParent;
  }
  
  // მთავარი ფუქნცია რომელიც განსაზავღავს რომელი სლიდი უნდა გამოჩნდეს
  function setSlide() {
    sliderContent.innerHTML = " ";
    const slideDiv = createDivTag(dataSlider[sliderIndex]);
    const imgTag = createImgTag(dataSlider[sliderIndex]);
    const h2Tag = createh2Tag(dataSlider[sliderIndex]);
    const dots = createDots();
  
    slideDiv.appendChild(imgTag);
    slideDiv.appendChild(h2Tag);
    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(dots);
    currentDotActive();
  }
  
  function currentDotActive() {
      dotItem[sliderIndex].classList.add('active');
  }
  
  // click eventebi
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSlider.length - 1;
      setSlide();
      return;
    }
    // sliderIndex = sliderIndex - 1;
    // sliderIndex -= 1;
    sliderIndex--;
    setSlide();
  }
  function arrowRightClick() {
    if (sliderIndex == dataSlider.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRightClick);
  
  // setInterval(() => {
  //   arrowRightClick();
  // }, 3000);
  
  setSlide();
  