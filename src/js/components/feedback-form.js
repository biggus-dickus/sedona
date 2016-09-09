(function() {
  if (!("FormData" in window)) {
    return;
  }

  var form = document.getElementById('feedback-form'); 
  
  if (form) {
    var modal = document.getElementById('modal-window'),
        navbar = document.querySelector('.navbar'),
        data = new FormData(form),
        xhr = new XMLHttpRequest(),
        time = (new Date()).getTime();

    form.addEventListener('submit', function(evt) {
      evt.preventDefault();

      xhr.open('post', 'https://echo.htmlacademy.ru/adaptive?' + time);
      xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState == 4) {
          console.log(xhr.responseText);
          modal.classList.remove('hidden');
          navbar.classList.add('index-one');
        }
      });
      
      xhr.send(data);
    });

    
    // Form autofill
    form['first-name'].addEventListener('keyup', function() {
      if (form['first-name'].value === 'test') {
        form['first-name'].value = 'Антонина';
        form['surname'].value = 'Мандавошина';
        form['patronymic'].value = 'Львовна';

        form['phone-number'].value = '0991234567';
        form['email'].value = 'test@test.com';

        form['undecided'].setAttribute('checked', true);
        form['slide-park'].setAttribute('checked', true);
        form['red-rocks'].setAttribute('checked', true);

        form['feedback-textarea'].value = 'Трясла мандой сначала под Харьковом! Потом на Волоколамском направлении! Потом в столице нашей Родины городе-герое Москве! Жевала говно лет двадцать, в комитете блядских, ссаных, сраных, хуесосовых советских матерей-дочерей! Трижды тридцать три раза распроебанных! Задрюченных до крови! Она показывала свою кислую, лохматую, червивую пизду! Медали, блядь! Ордена! Звания и заслуги! Почет, блядь! Уважение! Да я срал и ссал на твой горб! Я срал и ссал на твои сисяры потные! Я срал, ебал и ссал на мать твою, мокрожопую! Я срал и ссал на медали! Я срал и ссал на ордена! Я срал на вареных детей! Я срал! Я срал! Сра-а-ал! Сра-а-ал!!!';
      }
    });
  }
  
})();
