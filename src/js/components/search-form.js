(function() {
  var searchForm = document.querySelector('.search-form'),
      numInput = document.querySelectorAll('.search-form__input--num'),
      NUM_FIELD_CONSTRAINT = 10;

  
  if (searchForm) {
    for (var i = 0; i < numInput.length; i++) {
      numInput[i].onkeyup = function() {
        constrainNumField(this);
      }
    }

    searchForm.addEventListener('click', function(evt) {
      var clickedElement = evt.target,
          inputField = getInputField(),
          number = parseNumField(inputField);

      if (clickedElement.classList.contains('search-form__control--plus')) {
        inputField.value = ++number;
      } else if (clickedElement.classList.contains('search-form__control--minus')) {
        inputField.value = --number;
      }

      constrainNumField(inputField);

      
      /**
       * Find out the DOM relation of a number input field to the actually clicked control
       * @return {Object}
       */
      function getInputField() {
        if (clickedElement.classList.contains('search-form__control--plus') && 
            clickedElement.previousElementSibling.classList.contains('search-form__input--num')) {
          inputField = clickedElement.previousElementSibling;
        } else {
          inputField = clickedElement.nextElementSibling;
        }

        return inputField;
      }
    });

    
    /**
     * Get a numeric value from the input field
     * @param  {Object} elem
     */
    function parseNumField(elem) {
      if (elem) {
        var number = parseInt(+elem.value, 10);
      }

      return number;
    }


    /**
     * Make sure the input field value is not less than 0 and not greater than 10
     * @param {Object} elem
     */
    function constrainNumField(elem) {
      if (elem && elem.value < 0) {
        elem.value = 0;
      } else if (elem && elem.value > NUM_FIELD_CONSTRAINT) {
        elem.value = NUM_FIELD_CONSTRAINT;
      } 
    }
  }
})();
