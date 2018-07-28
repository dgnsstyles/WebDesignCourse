var btn = document.getElementById('cta');
        var btn2 = document.getElementById('cta2');

        btn.onclick = function(){
            var morphing = anime({
           targets: '.polymorph',
           points: [
           { value: '9.09494702e-13 -4.54747351e-13 352.005342 -4.54747351e-13 1440 -4.54747351e-13 1440 1024 9.09494702e-13 1024'},
           { value: '0 0 352.005342 0 489.802407 684.378019 1440 1024 0 1024' },
           { value: '0 0 127.059835 186.939842 489.802407 684.378019 1440 1024 0 1024'}
      
           ],
           easing: 'easeOutQuad',
           duration: 2000,
           loop: false
  });
            anime({
                targets: '#blip',
                opacity: 1,
                duration: 500,
                transalateY: 150
            })

            var promise = morphing.finished.then(() =>{
                btn2.onclick = function(){
                    var morphing = anime({
                        targets: 'polimorph',
                        points: [
                            { value: '0 0 127.059835 186.939842 489.802407 684.378019 1440 1024 0 1024'},
                            { value: '9.09494702e-13 -4.54747351e-13 352.005342 -4.54747351e-13 1440 -4.54747351e-13 1440 1024 9.09494702e-13 1024'}
                        ],
                        easing: 'easeOutQuad',
                        duration: 1200,
                        loop: false
                        
                    });
                    anime({
                        targets: '#blip',
                        opacity: 0,
                        duration: 300,
                        transalateY: -800

                    })
                    
                };
            })

        }
  