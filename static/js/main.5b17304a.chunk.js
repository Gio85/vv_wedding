(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(e,a,t){e.exports=t(60)},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(25),s=t.n(l),c=t(5),i=t(8),m=!1,o=function(){m=!m};var d=Object(i.f)((function(){return n.a.createElement("nav",{className:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},n.a.createElement(c.b,{to:"",role:"button",className:m?"navbar-burger is-active":"navbar-burger","data-target":"navMenu","aria-label":"menu","aria-expanded":"false",onClick:function(){return o()}},n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"})),n.a.createElement("div",{id:"navbarBasicExample",className:m?"navbar-menu is-active":"navbar-menu"},n.a.createElement("div",{className:"navbar-start"},n.a.createElement(c.b,{exact:!0,to:"/",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"Home"),n.a.createElement(c.b,{to:"/our_story",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"Where it all began"),n.a.createElement(c.b,{to:"/bridal_party",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"Bridal Party"),n.a.createElement(c.b,{to:"/wedding_itinerary",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"4th July 2020"),n.a.createElement(c.b,{to:"/recommendations",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"Where to stay"),n.a.createElement(c.b,{to:"/registry",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"Honeymoon"),n.a.createElement(c.b,{to:"/rsvp",className:"navbar-item",onClick:function(){return o()},activeClassName:"currentPage"},"RSVP"))))})),u=t(7);function E(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function g(){var e=Object(r.useState)("url(/images/vera_vincenzo/IMG_0001.JPG)"),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(r.useState)(0),c=Object(u.a)(s,2),i=c[0],m=c[1],o=["url(/images/vera_vincenzo/IMG_0121.JPG)","url(/images/vera_vincenzo/IMG_0334.JPG)","url(/images/vera_vincenzo/IMG_2598.JPG)","url(/images/vera_vincenzo/IMG_3544.JPG)","url(/images/vera_vincenzo/IMG_9242.JPG)","url(/images/vera_vincenzo/IMG_1303.JPG)","url(/images/vera_vincenzo/IMG_1928.JPG)","url(/images/vera_vincenzo/IMG_2283.JPG)","url(/images/vera_vincenzo/IMG_0697.JPG)","url(/images/vera_vincenzo/4July2.JPG)","url(/images/vera_vincenzo/bridalParty1.JPG)","url(/images/vera_vincenzo/bridalParty2.JPG)","url(/images/vera_vincenzo/honeyMoon1.JPG)","url(/images/vera_vincenzo/honeyMoon2.JPG)","url(/images/vera_vincenzo/IMG_0002.JPG)","url(/images/vera_vincenzo/IMG_0003.JPG)","url(/images/vera_vincenzo/IMG_0005.JPG)","url(/images/vera_vincenzo/IMG_0009.JPG)","url(/images/vera_vincenzo/IMG_0012.JPG)","url(/images/vera_vincenzo/IMG_0018.JPG)","url(/images/vera_vincenzo/ourStory.JPG)","url(/images/vera_vincenzo/ourStory1.JPG)","url(/images/vera_vincenzo/ourStory2.JPG)","url(/images/vera_vincenzo/rsvp2.JPG)","url(/images/vera_vincenzo/whereToStay2.JPG)","url(/images/vera_vincenzo/IMG_0001.JPG)"];(function(){var e=Object(r.useState)(E()),a=Object(u.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){function e(){n(E())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t})().width<=400&&(o.splice(o.indexOf("url(/images/vera_vincenzo/honeyMoon2.JPG)"),1),o.splice(o.indexOf("url(/images/vera_vincenzo/IMG_0005.JPG)"),1)),Object(r.useEffect)((function(){var e=setInterval((function(){i===o.length-1?m(0):m((function(e){return e+1})),l(o[i])}),4500);return function(){return clearInterval(e)}}),[o,i]);var d={backgroundImage:t};return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"title"},"Vera & Vincenzo")),n.a.createElement("div",{className:"vera_vincenzo is-bordered",style:d}))}var h=t(11),p=t.n(h);function b(e){var a=e.timeTillDate,t=e.timeFormat,l=p()(a,t),s=p()(),c=l.diff(s),i=p.a.duration(c),m=i.months(),o=i.days(),d=i.hours(),E=function(){var e={};return l.diff(s)>0&&(e={months:m,days:o,hours:d}),e},g=Object(r.useState)(E()),h=Object(u.a)(g,2),b=h[0],v=h[1];Object(r.useEffect)((function(){setTimeout((function(){v(E())}),1e3)}));var N=[];return Object.keys(b).forEach((function(e){b[e]&&N.push(n.a.createElement("span",{key:e},b[e]," ",e," "))})),n.a.createElement("div",null,N.length?N:n.a.createElement("span",null,"Time's up!"))}function v(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("div",{className:"countdown"},n.a.createElement("h1",null,n.a.createElement(b,{timeTillDate:"2020-07-04 17:00:00",timeFormat:"YYYY-MM-DD HH:mm"}))),n.a.createElement("p",{className:"paragraphQuote"},"Amor n\xe3o se conjuga no passado, ou se ama para sempre, ou nunca se amou verdadeiramente"),n.a.createElement("span",{className:"smallParagraph"},"- Fernando Pessoa -")))}function N(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"ourStory"},n.a.createElement("p",{className:"ourStoryHeader bold"},"A slightly different story to most, but this is our unique one."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"It all begun back in 2013, in fair London we set our scene,"),n.a.createElement("p",{className:"storyParagraph"},"in the fancy neighbourhood of South Kensington."),n.a.createElement("p",{className:"storyParagraph"},"Some said it was destiny, some said it was love "),n.a.createElement("p",{className:"storyParagraph"}," but we like to call it \u201cmagic\u201d."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"It was only another noisy day in the Italian restaurant Carluccios,"),n.a.createElement("p",{className:"storyParagraph"}," but that day Vincenzo and Vera\u2019s life was about to change."),n.a.createElement("p",{className:"storyParagraph"},"The story of two star-crossed lovers was about to start."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"The crazy Vincenzo, was making his living as a barista,"),n.a.createElement("p",{className:"storyParagraph"},"but London had far more challenges for him."),n.a.createElement("p",{className:"storyParagraph"},"He did not know that the providence "),n.a.createElement("p",{className:"storyParagraph"},"was preserving him something special and one day,"),n.a.createElement("p",{className:"storyParagraph"}," Vera burnished as a Brightstar,"),n.a.createElement("p",{className:"storyParagraph"},"\u201cshe doth teach the torches to burn bright!\u201d."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"Vincenzo couldn\u2019t stand such beauty and instantly"),n.a.createElement("p",{className:"storyParagraph"},"he realised that his heart did not know love until now."),n.a.createElement("p",{className:"storyParagraph"},"But once again the challenge was in every morning"),n.a.createElement("p",{className:"storyParagraph"}," and the language gave him a warning."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"The first attempts from the Italian chap were, actually, very crap,"),n.a.createElement("p",{className:"storyParagraph"}," but soon Vera decided to start."),n.a.createElement("p",{className:"storyParagraph"}," Beauty too rich for use, for Earth too dear."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"}," Every day he tried."),n.a.createElement("p",{className:"storyParagraph"},"Written notes and broken verse. "),n.a.createElement("p",{className:"storyParagraph"}," The two lovers engaged in a mix of Italo-Portu-Spanish language"),n.a.createElement("p",{className:"storyParagraph"}," and a whole lot of hand gestures."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"The destiny finally worked in their favour."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"storyParagraph"},"Fast forward 6 years later, off they go to embark in yet another adventure"),n.a.createElement("p",{className:"storyParagraph"}," and live the rest of their lives together!")),n.a.createElement("div",{id:"heart"}))}var f=function(){return n.a.createElement("section",{className:"section"},n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"heading-secondary "},"Bridesmaids"))),n.a.createElement("div",{className:"columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd u-margin-bottom-small"},n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Violeta"),n.a.createElement("figure",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/brides_maids/IMG_0010.JPG",alt:"bride"}))),n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Sara"),n.a.createElement("figure",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/brides_maids/IMG_0016.JPG",alt:"bride"})))),n.a.createElement("div",{className:"columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd"},n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Camille"),n.a.createElement("figure",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/brides_maids/camille.JPG",alt:"bride"}))),n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Stella"),n.a.createElement("figure",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/brides_maids/IMG_5334.JPG",alt:"bride"}))),n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Danielle"),n.a.createElement("figure",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/brides_maids/IMG_4171.JPG",alt:"bride"})))))},y=function(){return n.a.createElement("section",{className:"section"},n.a.createElement("section",{className:"hero u-margin-bottom-medium"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"heading-secondary "},"Groomsman"))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Michele & Gianfranco"),n.a.createElement("div",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/grooms_man/theBrothers.JPG",alt:"brothers"})))),n.a.createElement("div",{className:"columns"},n.a.createElement("div",{className:"column "},n.a.createElement("h3",{className:"heading-tertiary"},"Davide"),n.a.createElement("div",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/grooms_man/davide.JPG",alt:"davide"}))),n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Giovanni"),n.a.createElement("div",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/grooms_man/giovanni2.JPG",alt:"giovanni"}))),n.a.createElement("div",{className:"column"},n.a.createElement("h3",{className:"heading-tertiary"},"Francesco"),n.a.createElement("div",{className:"image bridal_image"},n.a.createElement("img",{className:"is-rounded",src:"/images/grooms_man/francesco.JPG",alt:"francesco"})))))};function P(){return n.a.createElement("section",{className:"container"},n.a.createElement(f,null),n.a.createElement(y,null))}function _(){return n.a.createElement("div",null,n.a.createElement("div",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"hWeddingItinerary"}," Ceremony, Cocktail, Reception and Party "),n.a.createElement("p",{className:"paragraphWeddingItinerary"}," Quinta Casa Portuguesa \u2013 Colares, Sintra Estrada Nacional N247, 2705-655 "),n.a.createElement("p",{className:"paragraphWeddingItinerary"}," Please join us at 16:00 to begin the celebration! "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"paragraphWeddingItinerary"},n.a.createElement("b",null,"Dress code:")),n.a.createElement("p",{className:"paragraphWeddingItinerary"},"Formal attire "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"paragraphWeddingItinerary is-italic"},"The ceremony will be held outdoors, so we advise ladies not to wear any stiletto high heels."),n.a.createElement("p",{className:"paragraphWeddingItinerary is-italic"},"Temperatures may also drop in the evening, so please bring a little something to keep you warm!"))),n.a.createElement("div",{className:"columns location"},n.a.createElement("div",{className:"column is-half"},n.a.createElement("figure",null,n.a.createElement("img",{className:"is-bordered",src:"/images/location.jpg",alt:"bride"}))),n.a.createElement("div",{className:"column is-half"},n.a.createElement("div",{className:"locationWrapper"},n.a.createElement("iframe",{className:"is-bordered",title:"location",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49756.983224713986!2d-9.498577322855613!3d38.79095656081532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ece7534ec342f%3A0xc141684ae435b078!2sQuinta%20Casa%20Portuguesa!5e0!3m2!1sen!2suk!4v1580672092761!5m2!1sen!2suk",allowFullScreen:!0})))))}function w(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"title"},"Locations"),n.a.createElement("p",{className:"paragraphLocations"},"If you are wondering where to stay, here are some suggestions: ")),n.a.createElement("h3",{className:"heading-tertiary"},"Lisbon City - ",n.a.createElement("span",{className:"heading-lowercase"},"city break ")),n.a.createElement("iframe",{className:"is-bordered",title:"locations",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119158.43955819997!2d-9.245720854539815!3d38.77249702420197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisbon%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672225747!5m2!1sen!2suk",width:"600",height:"450",frameBorder:"0",allowFullScreen:""}),n.a.createElement("p",{className:"paragraphLocations"},"We recommend the following areas: "),n.a.createElement("ul",{className:"paragraph description"},n.a.createElement("li",null,"Bairro Alto"),n.a.createElement("li",null,"Lapa"),n.a.createElement("li",null,"Santos"),n.a.createElement("li",null,"Baixa / Chiado")),n.a.createElement("h3",{className:"heading-tertiary"},"Cascais / Estoril - ",n.a.createElement("span",{className:"heading-lowercase"}," seaside break")),n.a.createElement("iframe",{className:"is-bordered",title:"locations",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99577.09330348072!2d-9.370086679608269!3d38.74571481633865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec47379b79a97%3A0x870d3b7e1807bbc2!2sCascais%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672635285!5m2!1sen!2suk",width:"600",height:"450",frameBorder:"0",allowFullScreen:""}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h3",{className:"heading-tertiary"},"Sintra - ",n.a.createElement("span",{className:"heading-lowercase"},"near the wedding venue ")),n.a.createElement("iframe",{className:"is-bordered",title:"locations",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99523.63420679854!2d-9.380496266069747!3d38.78403075718309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edac1a7510ee9%3A0x13585cc0b00f573c!2sSintra%2C%20Portugal!5e0!3m2!1sen!2suk!4v1580672554615!5m2!1sen!2suk",width:"600",height:"450",frameBorder:"0",allowFullScreen:""}),n.a.createElement("br",null),n.a.createElement("p",{className:"paragraphLocations airport"},"Please note: the closest airport to the ceremony is the Lisbon Airport."))}var G=function(e){var a=Object(r.useState)(e),t=Object(u.a)(a,2),n=t[0],l=t[1];return{value:n,setValue:l,reset:function(){return l("")},bind:{value:n,onChange:function(e){l(e.target.value)}}}},k=function(e){var a=e.handleSubmit,t=e.bindFirstName,r=e.bindLastName,l=e.bindEmail,s=e.bindIsComing,c=e.bindFoodAllergies,i=e.bindNumberOfGuests;return n.a.createElement("div",{className:"rsvpForm is-half"},n.a.createElement("h3",{className:"h3Form"},"Please kindly respond by the 1st of May"),n.a.createElement("form",{onSubmit:a},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"First Name"),n.a.createElement("div",{className:"control is-medium"},n.a.createElement("input",Object.assign({className:"input",type:"text",placeholder:"First Name",name:"firstName"},t,{required:!0})))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Last Name"),n.a.createElement("div",{className:"control is-medium"},n.a.createElement("input",Object.assign({className:"input",type:"text",placeholder:"Last Name",name:"lastName"},r,{required:!0})))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Email"),n.a.createElement("div",{className:"control"},n.a.createElement("input",Object.assign({className:"input",type:"email",placeholder:"Email input",name:"email"},l,{required:!0})))),n.a.createElement("div",{className:"control"},n.a.createElement("label",{className:"label"},"Will you be attending?"),n.a.createElement("label",{className:"radio"},n.a.createElement("input",Object.assign({type:"radio",name:"isComing"},s,{value:"yes",checked:!0}))," Bags are packed!"),n.a.createElement("label",{className:"radio"},n.a.createElement("input",Object.assign({type:"radio",name:"isComing"},s,{value:"no"}))," Will be thinking of you at home")),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("label",{className:"label"},"Number of guests attending"),n.a.createElement("div",{className:"select is-info is-rounded"},n.a.createElement("select",Object.assign({name:"numberOfGuests"},i),n.a.createElement("option",{disabled:!0},"Please choose accordingly"),n.a.createElement("option",{value:"0"},"0"),n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"))))),n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label"},"Food Allergies"),n.a.createElement("div",{className:"control is-medium"},n.a.createElement("textarea",Object.assign({className:"textarea",placeholder:"Textarea",name:"foodAllergies"},c,{required:!0})))),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{className:"button is-link"},"Submit")))))},I=t(28),J=t.n(I),z="https://script.google.com/macros/s/".concat("AKfycbxf78LKsBlXZRl3d6ByvmUPDaEx7Mc0zLxZXANdJJcqtlIF-Z6j","/exec");function C(e){var a=G(""),t=a.value,r=a.bind,l=a.reset,s=G(""),c=s.value,i=s.bind,m=s.reset,o=G(""),d=o.value,u=o.bind,E=o.reset,g=G(""),h=g.value,p=g.bind,b=g.reset,v=G(""),N=v.value,f=v.bind,y=v.reset,P=G(""),_=P.value,w=P.bind,I=P.reset;return n.a.createElement(k,{handleSubmit:function(){J()({url:"".concat(z,"?firstName=").concat(t,"&lastName=").concat(c,"&email=").concat(d,"&isComing=").concat(h,"&numberOfGuests=").concat(_,"&foodAllergies=").concat(N),method:"get"}).then((function(){return e.history.push("/thanks")})).catch((function(e){return console.log(e)})),l(),m(),E(),y(),b(),I()},bindFirstName:r,bindLastName:i,bindEmail:u,bindIsComing:p,bindFoodAllergies:f,bindNumberOfGuests:w})}function M(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"hRegistry"},n.a.createElement("i",null,"Dulcis in fundo"))),n.a.createElement("p",{className:"paragraphRegistry"},"Your presence on our special day is the greatest present of all! However, if you do wish to celebrate with a gift, a contribution to our honeymoon would be warmly appreciated."),n.a.createElement("h3",{className:"heading-tertiary"},"Bank Details"),n.a.createElement("div",{className:"paragraph description"},"Euro Account"," ",n.a.createElement("span",{role:"img","aria-label":"euro flag"},"\ud83c\uddea\ud83c\uddfa"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"Beneficiary: "),"Vincenzo Vessichelli"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"IBAN: "),"GB39 REVO 0099 7061 1818 33"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"BIC: ")," REVOGB21")),n.a.createElement("div",{className:"paragraph description"},"British Pound Account"," ",n.a.createElement("span",{role:"img","aria-label":"british flag"},"\ud83c\uddec\ud83c\udde7"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"Beneficiary: ")," Vincenzo Vessichelli"),n.a.createElement("p",null,n.a.createElement("span",{className:"bold"},"Account: ")," 09685146"),n.a.createElement("p",null," ",n.a.createElement("span",{className:"bold"},"Sort Code: ")," 04-00-75"," ")))}function O(){return n.a.createElement("section",{className:"hero"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("h1",{className:"title"},"Thank you! "),n.a.createElement("h1",{className:"title"},"Obrigado! "),n.a.createElement("h1",{className:"title"},"Grazie! ")))}var S=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content has-text-centered"},n.a.createElement("p",{className:"paragraph"},"Made with"," ",n.a.createElement("span",{role:"img","aria-label":"laptop"},"\ud83d\udc68\ud83c\udffc\u200d\ud83d\udcbb")," ","by"," ",n.a.createElement("a",{href:"http://www.giovannigaliero.co.uk/",rel:"noopener noreferrer",target:"_blank"}," ","Giovanni Galiero.")," ","Copyright \xa9 by Giovanni Galiero")))};t(57),t(58),t(59);s.a.render(n.a.createElement((function(){return n.a.createElement(c.a,null,n.a.createElement("div",{className:"container"},n.a.createElement(d,null),n.a.createElement(g,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/our_story",component:N}),n.a.createElement(i.a,{path:"/bridal_party",component:P}),n.a.createElement(i.a,{path:"/wedding_itinerary",component:_}),n.a.createElement(i.a,{path:"/recommendations",component:w}),n.a.createElement(i.a,{path:"/registry",component:M}),n.a.createElement(i.a,{path:"/rsvp",component:C}),n.a.createElement(i.a,{path:"/thanks",component:O}),n.a.createElement(i.a,{exact:!0,path:"/",component:v}))),n.a.createElement(S,null))}),null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.5b17304a.chunk.js.map