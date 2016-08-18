(function() {
  if (!("FormData" in window)) {
    return;
  }

  var form = document.getElementById('feedback-form');

  if (form) {   
    form.addEventListener('submit', function(evt) {
      evt.preventDefault();
      
      var data = new FormData(form);
      request(data, function(response) {
        console.log(response);
      });
    });
  }

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });
    
    xhr.send(data);
  }
  
})();
