const askButton = document.getElementById('askButton');
const answerDiv = document.getElementById('answer');
const popup = document.getElementById('popup');

askButton.addEventListener('click',function(){
    askButton.classList.add('shake');
    setTimeout(() => askButton.classList.remove('shake'), 500);
    const userQuestion = document.getElementById('question').value;
    if (userQuestion === '') {
        popup.classList.remove('hidden');
        return;
    }
    popup.classList.add('hidden');
    
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch(randomNumber){
        case 0:
            eightBall = 'It is certain';
            break;
        case 1:
            eightBall = 'It is decidedly so';
            break;
        case 2:
            eightBall = 'Reply hazy try again';
            break;
        case 3:
            eightBall = 'Cannot predict now';
            break;
        case 4:
            eightBall = 'Do not count on it';
            break;
        case 5:
            eightBall = 'My sources say no';
            break;
        case 6:
            eightBall = 'Outlook not so good';
            break;
        case 7:
            eightBall = 'Signs point to yes';
            break; 

    }

    answerDiv.textContent = eightBall; 
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service Worker registered!');
      })
      .catch(function(error) {
        console.log('Service Worker failed:', error);
      });
  });
}