// hamburgur
    let forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    let hamburgers = document.querySelectorAll(".hamburger");
    let hamList = document.querySelector(".hamburger-list");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click",
        function () {
          if (hamburger.classList.contains("is-active") === true) {
            hamList.classList.add("share-animation-back");
            hamList.classList.remove("share-animation");
            this.classList.remove("is-active");
            setTimeout('hamList.classList.remove("share-animation-back")',1000);
          } else {
            this.classList.add("is-active");
            hamList.classList.add("share-animation");
            hamList.classList.remove("share-animation-back");
      }});
      })
    }

// logo hover到變色(用jQuery)


