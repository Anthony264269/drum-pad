const touches = document.querySelectorAll('.key');
const musiques = document.querySelectorAll('audio');
console.log(musiques);

      document.addEventListener('keydown', (e) => {
         console.log(e.key);
         if(e.key==='a'){
            touches[0].classList.add('playing');
            musiques[0].play();
         }
          
      })    
      document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='z'){
               touches[1].classList.add('playing');
               musiques[1].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='e'){
               touches[2].classList.add('playing');
               musiques[2].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='q'){
               touches[3].classList.add('playing');
               musiques[3].play();
            }
             
         })       
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='s'){
               touches[4].classList.add('playing');
               musiques[4].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='d'){
               touches[5].classList.add('playing');
               musiques[5].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='w'){
               touches[6].classList.add('playing');
               musiques[6].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key==='x'){
               touches[7].classList.add('playing');
               musiques[7].play();
            }
             
         })      
         document.addEventListener('keydown', (e) => {
            console.log(e.key);
            if(e.key === 'c'){
               touches[8].classList.add('playing');
               musiques[8].play();
            }
           else(e.key !== 'c') {
            touches.classList.add('none');
           }
             
         })      

            
        
           
            




























//document.addEventListener('keydown', (e) => {
//console.log(e);
//      touches.forEach(touche => {
//            console.log(touche.textContent);
//
//            
//
//      });
//
//
//})

