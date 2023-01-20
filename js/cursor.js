// set the starting position of the cursor outside of the screen
var clientX = -300,
    clientY = -300
var linkList = []
// elements 
    outerCursor = document.querySelector(".cursor--outer")
    // innerCursor = document.querySelector(".cursor--inner"),
    
    function generateLinks() {
      linkList = document.getElementsByClassName("link")
      console.log(linkList)
    }

var initCursor = function() {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", function(e) {
    clientX = e.clientX
    clientY = e.clientY
  });
  
  var render = function() {
    TweenMax.set(outerCursor, {
      x: clientX,
      y: clientY,
      delay: .08,
      ease: Power1.easeOut
    });
    
    //  TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });
    
    requestAnimationFrame(render);
  };
  
  requestAnimationFrame(render);
};

initCursor();

function growOnHover() {
  generateLinks();
    for(var i = 0; i < linkList.length; i++) {
        link = linkList[i];
        link.addEventListener("mouseleave", function() {
        TweenMax.to(outerCursor, 1, {scale: 1})
    });
link.addEventListener("mouseenter", function() {
    TweenMax.to(outerCursor, 1, {scale: 2})
  });
}
}

growOnHover();