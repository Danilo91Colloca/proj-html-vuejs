
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
    navBar : [{
      navMenu : {
        menu1 : '',
        menu2 : '',
        menu3 :  '',
        manu4 : '',
        menu5 : ''
      }      
    },
    {
      userIcon : 'far fa-user'
    }
        
      
    ]
      
  },
  methods: {
    //inserire trattino prima di un elemento generato in v-for che non si trovi in prima posizione
    dashClass : function(index){ 
      if(index !== 0){
        return 'workdays-data-dashed'
      }
    }
    
      
  }
  
  
})






Vue.config.devtools = true;