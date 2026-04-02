const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
  setup() {

    const openDrawer = ref(true)
    function toggleDrawer() {
      if (openDrawer.value == false) {
        openDrawer.value = true
      } else {
        openDrawer.value = false
      }
    }


    const modules = [
      {
        title: "Ocean Route Explorer",
        category: "General Overview",
        url: "https://ameliag116.github.io/Ocean-Route-Explorer/",
        image: "images/oceanRouteExplorer.png"

      },
      {
        title: "Temporal Tides",
        url: "https://nkkkkkkkkkkk.github.io/Temporal-Tides/",
        category: "Human versus Whale Time",
        image: "images/temporalTides.png"
      },
      {
        title: "Ocean Commotion",
        url: "https://madsb04.github.io/Ocean-Commotion-/",
        category: "The Anthropocene and Consumer Culture",
        image: "images/oceanCommotion.png"
      },
      {
        title: "Jeopardy: Whale Health",
        category: "Integrated Cognitive Framework  ",
        url: "https://roco100.github.io/3C03-Assignment/",
        image: "images/WhaleJeopardy.png"
      },
      {
        title: "Indigenous Perspectives in Reducing Whale Harm in Shipping Practice",
        url: "https://genevawhite.github.io/genevacoding/",
        category: "Indigenous Perspectives in Canada",
        image: "images/indigenousPerspectives.png"
      },        

      {
        title: "Relationships Between Traditional and Western Ecological Knowledge in Whale Protection Practices",
        category: "Traditional Ecological Knowledge ",
        url: "https://alipanju12.github.io/Relationships-Between-Western-and-TEK-respect-to-Whales/", 
        image: "images/relationshipBetween.png"
      }, 

         {
        title: "Whale Anatomy, Maritime Threats, and Traditional Ecological Knowledge",
        url: "https://safiya-fs.github.io/Whale-Anatomy-Module/",
        category: "Whale Anatomy, Maritime Threats, and Traditional Ecological Knowledge ",
        image: "images/diveIntoTheWorlOfWhales.png"
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
