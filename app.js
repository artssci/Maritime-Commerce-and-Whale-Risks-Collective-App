const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
  setup() {

    const openDrawer = ref(false)
    function toggleDrawer() {
      if (openDrawer.value == false) {
        openDrawer.value = true
      } else {
        openDrawer.value = false
      }
    }


    const modules = [
      {
        title: "Temporal Tides",
        url: "Nimrat, Omaimah & Kareena/index.html",
        image: "images/temporalTides.png"
      }, 
      {
        title: "Ocean Commotion",
        url: "Erin, Hannah & Madeline/index.html",
        image: "images/oceanCommotion.png"
      }, 
      {
        title: "Indigenous Perspectives in Reducing Whale Harm in Shipping Practice",
        url: "Claire & Geneva/index.html", 
        image: "images/indigenousPerspectives.png"
      }, 
      {
        title: "Dive into the world of whales!",
        url: "Safiya, Ava & Naila/index.html", 
        image: "images/diveIntoTheWorlOfWhales.png"
      }, 
      {
        title: "Jeopardy: Whale Health",
        url: "Rowan, Anh, and Jing Yi/ModuleJeopardy.html", 
        image: "images/WhaleJeopardy.png"
      }, 
      {
        title: "",
        url: ""
      }, 
      {
        title: "",
        url: ""
      }
    ]


  

    return {
      openDrawer,
      toggleDrawer,
      modules
    }
  }
}


createApp(App).use(vuetify).mount('#app');
