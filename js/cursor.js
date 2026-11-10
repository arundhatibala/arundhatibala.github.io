// set the starting position of the cursor outside of the screen
var clientX = -300,
    clientY = -300
var linkList = []
// elements 
var outerCursor = document.querySelector(".cursor--outer");
var innerCursor = document.querySelector(".cursor--inner");

function generateLinks() {
  linkList = document.getElementsByClassName("link");
  console.log(linkList);
}

var initCursor = function() {
  // Check if screen width is larger than 768px (non-mobile devices)
  if (window.innerWidth > 768) {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", function(e) {
      clientX = e.clientX;
      clientY = e.clientY;
    });

    var render = function() {
      TweenMax.set(outerCursor, {
        x: clientX,
        y: clientY,
        delay: .05,
        ease: Power1.easeOut
      });

      TweenMax.set(innerCursor, {
        x: clientX,
        y: clientY
      });

      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  } else {
    // Hide the custom cursor if on a smaller screen
    outerCursor.style.display = "none";
    innerCursor.style.display = "none";
    document.body.style.cursor = "default"; // Make sure the default cursor shows up
  }
};

initCursor();

function growOnHover() {
  generateLinks();
  for(var i = 0; i < linkList.length; i++) {
    let link = linkList[i];
    link.addEventListener("mouseleave", function() {
      TweenMax.to(outerCursor, 1, {scale: 1});
    });
    link.addEventListener("mouseenter", function() {
      TweenMax.to(outerCursor, 1, {scale: 2});
    });
  }
}

growOnHover();

// // Add event listener for window resize to handle screen size changes dynamically
// window.addEventListener("resize", function() {
//   // Reinitialize cursor behavior based on new screen size
//   initCursor();
// });
