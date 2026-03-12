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
      // {
      //   title: "",
      //   category: "General Overview",
      //   url: "",
      //   image: ""

      // },
      {
        title: "Temporal Tides",
        url: "Nimrat, Omaimah & Kareena/index.html",
        category: "Human versus Whale Time",
        image: "images/temporalTides.png"
      },
      {
        title: "Ocean Commotion",
        url: "Erin, Hannah & Madeline/index.html",
        category: "The Anthropocene and Consumer Culture",
        image: "images/oceanCommotion.png"
      },
      {
        title: "Jeopardy: Whale Health",
        category: "Integrated Cognitive Framework  ",
        url: "Rowan, Anh, and Jing Yi/ModuleJeopardy.html",
        image: "images/WhaleJeopardy.png"
      },
      {
        title: "Indigenous Perspectives in Reducing Whale Harm in Shipping Practice",
        url: "Claire & Geneva/index.html",
        category: "Indigenous Perspectives in Canada",
        image: "images/indigenousPerspectives.png"
      },
      {
        title: "Dive into the world of whales!",
        url: "Safiya, Ava & Naila/index.html",
        category: "Traditional Ecological Knowledge ",
        image: "images/diveIntoTheWorlOfWhales.png"
      },
      

      {
        title: "",
        category: "Traditional Ecological Knowledge ",
        url: "", 
        image: ""
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
