
new Vue({
  el:  '#app',

  data: {

    rotation : [
      {
      faIcon : 'fas fa-clock',
      dayHour : {
          firstDayWork : 'Mon',
          lastDayWork : 'Sat',
          hoursOpen : '9:00',
          hoursClosed : '18:00'
        }
      }
    ],
    contacts : [
      {
        faIcon : 'fas fa-phone-alt',
        contact : '+1(305) 1234-5678'
      },
      {
        faIcon : 'fas fa-envelope',
        contact : 'hello@example.com'
      }
    ],
    social : {
      fb : 'fab fa-facebook-f',
      twitt : 'fab fa-twitter',
      linked : 'fab fa-linkedin-in'
    },
    navBar : [
        {
        navMenu : {
          menu1 : 'home',
          menu2 : 'about',
          menu3 :  'services',
          manu4 : 'team',
          menu5 : 'blog'
        }      
      },
      {
        userIcon : 'far fa-user'
      }
    ],
    results : [
      {
        number : 128,
        sector : 'certifications'
      },
      {
        number : 230,
        sector : 'employees'
      },
      {
        number : 517,
        sector : 'customers'
      },
      {
        number : 94,
        sector : 'countries served'
      }
    ],
    dynamicResults : [
      {
        number : 0
      },
      {
        number : 0
      },
      {
        number : 0
      },
      {
        number : 0
      }
    ]

  },
  methods: {
    //inserire trattino prima di un elemento generato in v-for che non si trovi in prima posizione
    dashClass : function(index){ 
      if(index !== 0){
        return 'workdays-data-dashed'
      };
    },
    //funzione che genera i numeri da 0 a n per animare la grafica dei risulati
    numGenerator : function(nMax, idx) {
      let num = -1;
      this.dynamicResults.forEach((element, index) => {
        if(idx === index){
          let countIn = setInterval(function(){
            num++;
            element.number = num;
            console.log(num, index)
            if(num === nMax) {
              clearInterval(countIn)
            } 
          }, 10)
        }
      });
    }
  }
})






Vue.config.devtools = true;