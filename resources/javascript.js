// Your Javascript will go here!
$(document).ready(function() {
  replaceName = function() {
    var myNewName = window.prompt('Pick a new name!');
    document.getElementById('user-name').innerHTML = myNewName;
  };

  document.getElementById('change-name-button').onclick = replaceName;
  }  
);
