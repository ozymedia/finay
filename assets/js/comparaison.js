

  // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
  if (document.querySelector(".comparison-slider")[0]) {
    let compSlider = document.querySelector(".comparison-slider");

    //let's loop through the sliders and initialise each of them
    compSlider.each(function() {
      let compSliderWidth = document.querySelector(this).width() + "px";
      document.querySelector(this).querySelector(".resize img").css({ width: compSliderWidth });
      drags(document.querySelector(this).querySelector(".divider"), document.querySelector(this).querySelector(".resize"), document.querySelector(this));
    });

    //if the user resizes the windows lets update our variables and resize our images
    document.querySelector(window).addEventListener("resize", function() {
      let compSliderWidth = compSlider.width() + "px";
      compSlider.querySelector(".resize img").css({ width: compSliderWidth });
    });
  }


// This is where all the magic happens
// This is a modified version of the pen from Ege Görgülü - https://codepen.io/bamf/pen/jEpxOX - and you should check it out too.
function drags(dragElement, resizeElement, container) {

  // This creates a variable that detects if the user is using touch input insted of the mouse.
  let touched = false;
  window.addEventListener('touchstart', function() {
    touched = true;
  });
  window.addEventListener('touchend', function() {
    touched = false;
  });

  // clicp the image and move the slider on interaction with the mouse or the touch input
  dragElement.addEventListener("mousedown touchstart", function(e) {

      //add classes to the emelents - good for css animations if you need it to
      dragElement.classList.add("draggable");
      resizeElement.classList.add("resizable");
      //create vars
      let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
      let dragWidth = dragElement.outerWidth();
      let posX = dragElement.offset().left + dragWidth - startX;
      let containerOffset = container.offset().left;
      let containerWidth = container.outerWidth();
      let minLeft = containerOffset + 10;
      let maxLeft = containerOffset + containerWidth - dragWidth - 10;

      //add event listner on the divider emelent
      dragElement.parents().addEventListener("mousemove touchmove", function(e) {

        // if the user is not using touch input let do preventDefault to prevent the user from slecting the images as he moves the silder arround.
        if ( touched === false ) {
          e.preventDefault();
        }

        let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let leftValue = moveX + posX - dragWidth;

        // stop the divider from going over the limits of the container
        if (leftValue < minLeft) {
          leftValue = minLeft;
        } else if (leftValue > maxLeft) {
          leftValue = maxLeft;
        }

        let widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + "%";

        document.querySelector(".draggable").css("left", widthValue).addEventListener("mouseup touchend touchcancel", function() {
          document.querySelector(this).removeClass("draggable");
          resizeElement.removeClass("resizable");
        });

        document.querySelector(".resizable").css("width", widthValue);

      }).addEventListener("mouseup touchend touchcancel", function() {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");

      });

    }).addEventListener("mouseup touchend touchcancel", function(e) {
      // stop clicping the image and move the slider
      dragElement.removeClass("draggable");
      resizeElement.removeClass("resizable");

    });

}
