/* ======= Model ======= */

let model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: "Tabby",
      imgSrc: "cat.png",
      imgAttribution: "https://www.flickr.com/photos/bigtallguy/434164568"
    },
    {
      clickCount: 0,
      name: "Tiger",
      imgSrc: "cat2.png",
      imgAttribution: "https://www.flickr.com/photos/xshamx/4154543904"
    },
    {
      clickCount: 0,
      name: "Scaredy",
      imgSrc: "cat3.png",
      imgAttribution: "https://www.flickr.com/photos/kpjas/22252709"
    },
    {
      clickCount: 0,
      name: "Shadow",
      imgSrc: "cat4.png",
      imgAttribution: "https://www.flickr.com/photos/malfet/1413379559"
    },
    {
      clickCount: 0,
      name: "Sleepy",
      imgSrc: "cat5.png",
      imgAttribution: "https://www.flickr.com/photos/onesharp/9648464288"
    }
  ]
};

/* ======= Controls ======= */

let control = {
  increaseCounter: function() {
    model.currentCat.clickCount++;
    return views.setCatAttribute();
  },

  getAllCats: function() {
    return model.cats;
  },
  getCurrentCat: function() {
    return model.currentCat;
  },

  setCurrentCat: function(curCat) {
    model.currentCat = curCat;
  },

  init: function() {
    model.currentCat = model.cats[0];
    viewsList.render();
  }
};
/* ======= Views ======= */
let views = {
  getCatAttribute: function() {
    this.catName = document.querySelector("#catname");
    this.catImage = document.querySelector("#catimage");
    this.catClick = document.querySelector("#catcount");
    this.cat = document.querySelector(".cat");

    this.cat.addEventListener("click", function() {
      control.increaseCounter();
    });
  },

  setCatAttribute: function() {
    let currentCatt = control.getCurrentCat();
    this.catName.innerHTML = currentCatt.name;
    this.catImage.src = currentCatt.imgSrc;
    this.catClick.innerHTML = currentCatt.clickCount;
  }
};

let viewsList = {
  render: function() {
    views.getCatAttribute();
    let cats, elem;
    cats = control.getAllCats();
    this.catList = document.querySelector(".catlist");

    for (let cat of cats) {
      elem = document.createElement("li");
      elem.innerText = cat.name;

      elem.addEventListener(
        "click",
        (function(catCopy) {
          return function() {
            control.setCurrentCat(catCopy);
            views.setCatAttribute();
          };
        })(cat)
      );
      views.setCatAttribute();
      this.catList.appendChild(elem);
    }
  }
};
control.init();
console.log(model.cats[0]);
