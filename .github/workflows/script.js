//made by Harry!
document.addEventListener("DOMContentLoaded", function() {
    const htmlColumn = document.querySelector('.column1');
  
    htmlColumn.addEventListener('click', function() {
      const htmlInfoDiv = document.querySelector('.html-info');
      htmlInfoDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const htmlColumn = document.querySelector('.column2');
  
    htmlColumn.addEventListener('click', function() {
      const htmlInfoDiv = document.querySelector('.css-info');
      htmlInfoDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
 
  document.addEventListener("DOMContentLoaded", function() {
    const htmlColumn = document.querySelector('.column3');
  
    htmlColumn.addEventListener('click', function() {
      const htmlInfoDiv = document.querySelector('.java-info');
      htmlInfoDiv.scrollIntoView({ behavior: 'smooth' });
    });
  });
 

  window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById("scrollToTop");
    var scrollToTopPopup = document.getElementById("scrollToTopPopup");
  
    // Show or hide the scroll to top button and popup based on scroll position
    if (window.pageYOffset > 100) {
      scrollToTopButton.style.display = "block";
      scrollToTopPopup.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
      scrollToTopPopup.style.display = "none";
    }
  });
  

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  
  document.getElementById("scrollToTop").addEventListener("click", scrollToTop);


 // Get the elements
const infoLink = document.getElementById('infoLink1');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Event listener for clicking the "Info" link
infoLink.addEventListener('click', function() {
    popup.style.display = 'block';
});

// Event listener for clicking the close button in the popup
closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

  
// Get the elements
const infoLink2 = document.getElementById('infoLink2');
const popup2 = document.getElementById('popup2');
const closePopup2 = document.getElementById('closePopup2');

// Event listener for clicking the "Info" link
infoLink2.addEventListener('click', function() {
    popup2.style.display = 'block';
});

// Event listener for clicking the close button in the popup
closePopup2.addEventListener('click', function() {
    popup2.style.display = 'none';
});



 
   