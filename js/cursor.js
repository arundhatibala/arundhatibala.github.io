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

function matchImageToTextHeight() {
    const textContent = document.getElementById('about-text-content');
    const imageWrapper = document.querySelector('.about-image-wrapper');
    const screenWidth = window.innerWidth;
    
    // Check if both elements exist
    if (!textContent || !imageWrapper) {
        return;
    }

    // Use height matching only on screens larger than mobile (>= 768px for Bootstrap 'md')
    if (screenWidth >= 768) {
        // 1. Get the computed height of the text content block
        const textHeight = textContent.offsetHeight;

        // 2. Set the image wrapper to be a square matching the text height
        imageWrapper.style.width = `${textHeight}px`;
        imageWrapper.style.height = `${textHeight}px`;
        imageWrapper.style.paddingTop = '0'; // Ensure custom sizing is used

    } else {
        // On mobile/smaller screens: Switch back to a responsive, width-based circle.
        // The container's width will shrink with the column, and padding-top makes it a square.
        imageWrapper.style.width = '100%'; 
        imageWrapper.style.height = 'auto'; // Reverts to flexible height
        imageWrapper.style.paddingTop = '100%'; // Forces a 1:1 aspect ratio square
    }
}

// Ensure the function runs on load and resize
window.addEventListener('load', matchImageToTextHeight);
window.addEventListener('resize', matchImageToTextHeight);