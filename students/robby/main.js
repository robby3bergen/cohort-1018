  /* Student search feature */

  var searchInput = document.querySelector('.input-student input');
  var searchResultElement = document.querySelector('div.search-results');
  searchInput.addEventListener('keyup', handleKeyUp);

  function findStudents(search){
    // Returns students who's name matches the search string
    return students.filter(function(student){
      return student.name.toLowerCase().includes(search);
    })
  }

  function displayResults(studentsFound){
    // Clears the div content in search results before inserting a new one
    searchResultElement.innerHTML = '';
    
    // Create a list do display the results
    var studentsList = document.createElement('ul');
    
    // For each student found create a li and add the name of the student
    studentsFound.forEach(function(student){
      var studentListElement = document.createElement('li');
      studentListElement.innerText = student.name;
      studentsList.appendChild(studentListElement);
    })

    // append li (students list) to the result list
    searchResultElement.appendChild(studentsList);
  }

  
  function handleKeyUp(){
    var search = searchInput.value.toLowerCase();
    var studentsFound = findStudents(search);
    displayResults(studentsFound);
  }

  // eventhandler for buttons
  var buttons = document.querySelectorAll('button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      button.previousElementSibling.classList.toggle('hidden');
      button.innerText === 'Show' ? button.innerText = 'Hide' : button.innerText = 'Show';     
    })
  })