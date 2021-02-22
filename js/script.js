
new Vue({
  el:  '#app',

  data: {
    maps : 'https://www.google.it/maps/place/Silicon+Valley,+California,+Stati+Uniti/@37.4027209, -123.1617104,8z/data=!4m5!3m4!1s0x808fb68ad0cfc739:0x7eb356b66bd4b50e!8m2!3d37.387474!4d-122.0575434',
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
      },
      
    ],
    address : {
      faIcon : 'fas fa-map-marker-alt',
      address : 'main avenue, 987'
    },
    socialContacts : [
      {
      pageLink : 'https://www.facebook.com/',
      socialIcon : 'fab fa-facebook-f'
    },
    {
      pageLink : 'https://twitter.com/',
      socialIcon : 'fab fa-twitter'
    },
    {  
      pageLink : 'https://www.linkedin.com/',
      socialIcon : 'fab fa-linkedin-in'
    }
  ],
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
    ],
    services : [
      {
        symbol : 'fas fa-network-wired',
        arrow : 'fas fa-arrow-right',
        title : 'audit & assurance',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        symbol : 'fas fa-briefcase',
        arrow : 'fas fa-arrow-right',
        title : 'financial advisory',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        symbol : 'far fa-chart-bar',
        arrow : 'fas fa-arrow-right',
        title : 'financial advisory',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        symbol : 'fas fa-plane',
        arrow : 'fas fa-arrow-right',
        title : 'middle marketing',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        symbol : 'fas fa-globe-americas',
        arrow : 'fas fa-arrow-right',
        title : 'legal consulting',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      },
      {
        symbol : 'fas fa-journal-whills',
        arrow : 'fas fa-arrow-right',
        title : 'regulatory risk',
        text : 'Lorem ipsum dolor sit amet consectetur adipiscing elit.'
      }
    ],
    teamPersons : [
      {
        photo : 'images/team-1.jpg',
        name : 'David',
        surname : 'Cooper',
        role : 'cto & co-founder',
        contacts : {
          socialLink : 'https://www.facebook.com/',
          fbIcon : 'fab fa-facebook-f', 
          twitt : 'https://twitter.com/',
          twittIcon : 'fab fa-twitter',
          linked : 'https://www.linkedin.com/',
          linkedIcon : 'fab fa-linkedin-in'
        }
      },
      {
        photo : 'images/team-3.jpg',
        name : 'Oliver',
        surname : 'Jones',
        role : 'chief procurement',
        contacts : {
          fb : 'https://www.facebook.com/',
          fbIcon : 'fab fa-facebook-f', 
          twitt : 'https://twitter.com/',
          twittIcon : 'fab fa-twitter',
          linked : 'https://www.linkedin.com/',
          linkedIcon : 'fab fa-linkedin-in'
        }
      },
      {
        photo : 'images/team-2.jpg',
        name : 'Emma',
        surname : 'Lopez',
        role : 'chief marketing',
        contacts : {
          fb : 'https://www.facebook.com/',
          fbIcon : 'fab fa-facebook-f', 
          twitt : 'https://twitter.com/',
          twittIcon : 'fab fa-twitter',
          linked : 'https://www.linkedin.com/',
          linkedIcon : 'fab fa-linkedin-in'
        }
      },
      {
        photo : 'images/team-4.jpg',
        name : 'T.',
        surname : 'Johnson',
        role : 'ceo & president',
        contacts : {
          fb : 'https://www.facebook.com/',
          fbIcon : 'fab fa-facebook-f', 
          twitt : 'https://twitter.com/',
          twittIcon : 'fab fa-twitter',
          linked : 'https://www.linkedin.com/',
          linkedIcon : 'fab fa-linkedin-in'
        }
      }
    ],
    news : [
      {
        image : "images/news-1.jpg",
        textNews : 'Increase creativity is possible for everyone.'
      },
      {
        image : "images/news-2.jpg",
        textNews : 'Beacause market research is part of the business plan.'
      },
      {
        image : "images/news-3.jpg",
        textNews : 'Working from home is now a trend.'
      },
    ],
    //new data for newsletter
    subscriptName : '', 
    subscriptMail : '',
    subscriptionsList : [],
    //new data from form
    userName : '',
    userMail : '',
    userPhone : '',
    userMoreInfo : '',
    userMsg : '',
    formUserData : []
   

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
          }, 5)
        }
      });
    },
    //funzione che salva i dati inseriti nella newsletter
    postSubscription : function() {
      let name = this.subscriptName;
      let mail = this.subscriptMail;
      if(
        name !== "" && mail !== "" && isNaN(name) 
        && name.length >= 3 && name.length <=18
      ){
        this.subscriptionsList.push({
        name : name,
        email : mail
        })
        this.subscriptName = '';
        this.subscriptMail = '';
      }
    },
        //da implementare con delle verifiche di inserimento
    postFormMsg : function() { 
      let name = this.userName;
      let email = this.userMail;
      let phone = this.userPhone;
      let moreInfo = this.userMoreInfo;
      let msg = this.userMsg;
      this.formUserData.push(
        {
          name : name,
          email : email,
          phone : phone,
          moreInfo : moreInfo,
          message : msg
        }
      );
      this.userName = '';
      this.userMail = '';
      this.userPhone = '';
      this.userMoreInfo = '';
      this.userMsg = '';
    }
  }
})






Vue.config.devtools = true;