let dataSlider = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?cs=srgb&dl=pexels-pixabay-33109.jpg&fm=jpg&_gl=1*8g3zgq*_ga*MTQzODIwOTc1MS4xNjY0MjUzOTU5*_ga_8JE65Q40S6*MTY2ODE0MzU5NC41LjEuMTY2ODE0MzU5NS4wLjAuMA..",
      title: "Beautiful Autumn",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/6054896/pexels-photo-6054896.jpeg?cs=srgb&dl=pexels-james-lee-6054896.jpg&fm=jpg",
      title: "Leopard",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/8152002/pexels-photo-8152002.jpeg?cs=srgb&dl=pexels-anna-tarazevich-8152002.jpg&fm=jpg",
      title: "Hey Cutie Look Woof Woof",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/3680903/pexels-photo-3680903.jpeg?cs=srgb&dl=pexels-abbas-mohammed-3680903.jpg&fm=jpg",
      title: "City at night",
    },
    {
      id:5,
      imageUrl:
        "https://images.pexels.com/photos/3510717/pexels-photo-3510717.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3510717.jpg&fm=jpg",
      title: "Mountains",
    },
    {
      id:6,
      imageUrl:
        "https://images.pexels.com/photos/449500/pexels-photo-449500.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-449500.jpg&fm=jpg",
      title: "Nature",
    },
    {
      id:7,
      imageUrl:
        "https://images.pexels.com/photos/2457317/pexels-photo-2457317.png?cs=srgb&dl=pexels-anni-roenkae-2457317.jpg&fm=jpg",
      title: "Art",
    },
  ];
  
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderContent = document.getElementById("slider-content");
  const dotItem = document.getElementsByClassName('dot');
  let sliderIndex = 0;
  

  function createDivTag(item) {
    const div = document.createElement("div");
    div.style.backgroundImage=`url(${item.imageUrl})`;
    div.classList.add("slide");
   return div;
  }
  
  // function createImgTag(item) {
  //   const img = document.createElement("div");
  //   img.setAttribute("src", item.imageUrl);
  //   img.setAttribute("alt", item.title);
  //   return img;
  // }

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
  
  function setSlide() {
    sliderContent.innerHTML = " ";
    const slideDiv = createDivTag(dataSlider[sliderIndex]);
    // const imgTag = createImgTag(dataSlider[sliderIndex]);
    const h2Tag = createh2Tag(dataSlider[sliderIndex]);
    const dots = createDots();
  
    // slideDiv.appendChild(imgTag);
    // slideDiv.appendChild(h2Tag);
    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(h2Tag)
    sliderContent.appendChild(dots);
    
    currentDotActive();
  }
  
  function currentDotActive() {
      dotItem[sliderIndex].classList.add('active');
  }
  
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
  
  setInterval(() => {
    arrowRightClick();
  }, 3000);
  
  setSlide();
  