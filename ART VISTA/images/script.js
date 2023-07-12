// script.js

// Execute JavaScript code after the document has finished loading
document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after the page has finished loading
  
    // Example of handling form submission
    const searchForm = document.getElementById("search-form");
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get the search query from the input field
      const searchInput = document.getElementById("search-input");
      const searchQuery = searchInput.value;
  
      // Perform a search based on the query
      performSearch(searchQuery);
    });
  
    // Example of performing a search
    function performSearch(query) {
      // Perform the search logic here
      console.log("Performing search for query: " + query);
    }
  });
  