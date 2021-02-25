
/* 
const container = document.querySelector(`.bg`);

//Star
const star = document.createElement(`div`)
      star.className = `star`;  */

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      const container = document.querySelector('.bg');
      var fragment = new DocumentFragment()
      
      for (let i = 0; i < 1000; i++) {
        const top = getRandomInt(-5, 100);
        const left = getRandomInt(0, 100);
        const size = getRandomInt(1, 4);
        
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = top + '%';
        star.style.left = left + '%';
        star.style.height = size + 'px';
        star.style.width = size + 'px';
      
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
      