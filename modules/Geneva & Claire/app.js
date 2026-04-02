// This JavaScript set up pulls functions from Vue and Vuetify libraries
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

// This module centers around the theme of 'Indigenous Perspectives on Reducing Harm to Whales in Shipping Practices.' 
// With a focus on Canada's coasts and the First Nations and Inuit groups who govern them, this module aims to 
// highlight Indigenous ways of thinking that are often overlooked. Indigenous perspectives present a strong 
// stewardship of the marine environment that helps us understand the interactions between shipping practices and 
// local marine life. Importantly, Indigenous relational values shift the dominant narrative that humans and human activity
// is separate from other life forms of the land and sea. The case studies presented demonstrate how listening, collaboration,
// and care are valued ways of reducing harm to whales in shipping practices. 
// The map format aligns well with this theme as users navigate certain locations across Canada and their shared significance
// to whales and Indigenous people. At each point, this relationship is highlighted along with a method developed through 
// Indigenous knowledge. 


//Steps made in this assignment: 
//1. Adjusted colour scheme to fit overall app cohesiveness
//2. Implemented the navigation bar for the overall app 
//3. Added Module Theme, Instructions and References 
//4. Reorganized and clarified content in the cards, emphasizing a cultural connection to the Indigenous communities 
//5. Made clickable links

const App = {
  setup() {

    //References within the "Lean More" button -- these sources will provide the reader with additional information about our theme,Indigenous Perspectives on Reducing Harm to Whales in Shipping Practices, more generally. 
    const LearnMoreReferences= [
      {
        reference: "Arctic WWF: Giving Whales the Right of Way",
        referenceLink: "https://www.arcticwwf.org/the-circle/stories/giving-whales-the-right-of-way-over-ships/"
      },
      {
        reference: "Coastal First Nations: Marine Response and Shipping Safety",
        referenceLink: "https://coastalfirstnations.ca/initiatives/marine-response-and-shipping-safety/"
      },
    ]

    const collection = [ //Each card highlights an Indigenous community along the coast that is actively taking steps to reduce whale harm in shipping routes. 
      {
        location: "Gitga'at First Nation, British Columbia ",
        issue: "Hydrophones and Alternate Routing",
        response: "Hydrophones and Alternate Routing",
        issueText: "The traditional waters of the Gitga’at First Nation are home to a very dense population of humpback whales. When combined with a rapidly growing rate of ship traffic in BC, it makes ship whale strikes a rising concern. During the summer of 2023, there were three humpback strikes in three days along the pacific coast.",
        responseText: "There has been a tremendous effort from the Gitga’at First Nation to protect the waters through research and conservation initiatives, such as the SWAG project (Ships Whales and Acoustics in Gitga’at Territory). This project focuses on monitoring ship traffic through the use of hydrophones to track ships as well as whales located in a 200km radius. The goal of this project is to suggest different ship traffic practices such as alternative routing and slow down areas to lower the impact of marine shipping on humpback habitat. ",
        cultureText:"The Gitga’at First Nation express a deep and personal relationship with the whales of the area. “The whales are our relatives. A dead whale is like losing a family member, and I know I don’t like seeing pictures of dead whales. We, as Gitga’at, carry a responsibility to protect them, just as they have always sustained us,” said Councillor Cam Hill of the Gitga’at First Nation. This message was shared after the loss of the humpback whale, Midnight, who was struck and killed by vessel traffic. The Gitga’at First Nation remains committed to protecting their marine territory so that future generations of humans and whales alike can thrive in their traditional waters. ",
        reference1: "Clear Seas: Traditional Waters, Modern Threats",
        reference1Link:"https://clearseas.org/insights/traditional-waters-modern-threats-the-gitgaats-fight-for-humpbacks/",
        reference2:"Ship-strike forecast and mitigation for whales in Gitga’at First Nation territory.",
        reference2Link:"https://doi.org/10.3354/esr01244",
        reference3: "Statement from the Gitga’at First Nation",
        reference3Link: "https://www.gitgaatnation.ca/post/statement-from-the-gitga-at-first-nation#:~:text=This%20tragedy%20is%20a%20stark,whale%20populations%20in%20the%20region",
        image: "images/humpback.png",
        left: "10%",
        top: "67%",
        showReferenceCard: ref(false) //This fucntion ensures that the card doesn't automatically open, it is linked to the open and close of the toggle. 
      },
      {
        location: "Mahalat Nation, British Columbia",
        issue: "",
        response:"Underwater hydrophone stations",
        issueText:"British Columbia's coastal waters are populated with toothed and baleen whales as well as killer whales, humpback whales and fin whales. The marine vessel traffic through this area is currently growing, and is projected to continue  as industrial projects are implemented; vessel noise will then rise as a consequence. The noise emitted from vessels negatively impacts marine mammals' ability to hunt, communicate and breed, which poses a serious threat to the marine ecosystem and for whales in particular.",
        responseText:"Underwater hydrophone systems provide an efficient method to detect underwater soundscapes, and the impact of vessels on marine mammals as a result. The Mahalat Nation sought to understand these human and non-human interactions and invested in developing 20 separate hydrophone stations to examine the underwater noises. With the data they collect, they hope to prevent damage done by vessels in their local waters.",
        cultureText:"The Malahat Nation has long been engaged in marine stewardship due to a close cultural connection particularly with the Southern Resident Killer Whales (“SRKW”). These whales appear as important figures in Malahat stories and are believed to embody the spirits of ancestors. Additionally, the Malahat people have traditionally relied on killer whales for assistance in catching salmon in their fishing nets. This relationship over many years is what has supported the Malahat dedication to marine stewardship and whale protection.",
        reference1Link: "https://clearseas.org/insights/mitigating-underwater-noise-with-indigenous-knowledge/",
        reference2: "Quantifying vessel noise and acoustic habitat loss in marine soundscapes",
        reference2Link:"https://doi.org/10.1016/j.marpolbul.2025.118150",
        reference3:"Mahalat Nation Review Panel",
        reference3Link: "https://iaac-aeic.gc.ca/050/documents/p80054/129374E.pdf",
        image: "images/malahat.png",
        left: "17%",
        top: "79%",
        showReferenceCard: ref(false)
      },
      {
        location: "Mohawk Council of Kahnawà:ke, Quebec",
        issueText:"Whales in the St. Lawrence River are largely affected by the underwater noise emitted from shipping vessels traveling in the area, as seen in behavioral changes like foraging efficiency, changes in vocalizing behavior, communication masking and hearing loss.",
        response:"Speed Reduction Areas",
        responseText:"To address this critical issue, the collaborative efforts of The Conseil de la Première Nation des Innus Essipit and the Mohawk Council of Kahnawà:ke has proposed the Enhanced Maritime Situational Awareness (EMSA) approach. EMSA specifically uses Geographic Information Systems (GIS) to map whale sightings along vessel routes. This data, combined with the knowledge of Indigenous communities who understand the area, helps identify critical habitats and inform decisions on speed restrictions to reduce sound disturbance.",
        cultureText:"The Mohawk Nation’s longstanding concern for the St. Lawrence River marine ecosystem extends to a deep historical and cultural connection. For generations, the river has been a site of hunting, fishing, and trading practices. The Mohawk Nation acts with a strong reciprocal relationship, believing that if they take care of the marine ecosystem, that it will take care of them. This practice is a factor of why the Mohawks were established keepers of the Eastern Door for the St. Lawrence River. This role has influenced their efforts in protecting the whale populations and other life within the river’s ecosystem.",
        reference1:"Government of Canada: Oceans Protection Plan",
        reference1Link: "https://tc.canada.ca/en/campaigns/protecting-our-coasts-oceans-protection-plan/stronger-partnerships-indigenous-coastal-communities/expanding-enhanced-maritime-situational-awareness-program",
        reference2: "Underwater acoustic impacts of shipping management measures",
        reference2Link:"https://doi.org/10.1016/j.ecolmodel.2017.03.014",      
        image: "images/mohawk.png",
        left: "76%",
        top: "80%",
        showReferenceCard: ref(false)
      },
      {
        location: "Gjoa Haven and Resolute Communities, Nunavut",
        issueText:"Community members from Resolute and Gjoa Haven raised concerns that the existing Arctic shipping corridors pass through ecologically and culturally significant marine areas.",
        response:" Low Impact Shipping Corridors",
        responseText:"They recommended rerouting corridors to shift traffic away from Peel Sound and Eclipse Sound, sensitive calving grounds, nurseries, and molting areas for 5000 beluga whales. Suggesting alternative areas like M’Clintock Channel, this example shows how Inuit knowledge collected over thousands of years provides critical insights into sensitive ecosystems that would be affected by shipping activity.",
        cultureText:"Beluga whales, also known as qilalugaq or qinalugaq in Inuktitut, are significantly important to Inuit nations across Nunavut. To this day, the beluga are economically, nutritionally, and culturally integrated into Inuit life. For instance, cultural practices such as food sharing are important for families and social cohesiveness. Additionally, the beluga meat is a vital source of nutrition for all communities in Nunavut. This relationship with beluga whales has extended over generations and has granted the Gjoa Haven and Resolute communities the traditional knowledge to contribute to helpful collaborative efforts in research and preservation.",
        reference1:"Canadian Geographic: Inuit Communities Consulted in Plans for Low Impact Shipping Routes",
        reference1Link: "https://canadiangeographic.ca/articles/inuit-communities-consulted-in-plans-for-low-impact-arctic-shipping-routes/",
        reference2:"Infusing Inuit and local knowledge into the Low Impact Shipping Corridors",
        reference2Link: "https://doi.org/10.1016/j.envsci.2019.11.013",
        reference3: "Beluga whale stewardship and collaborative research practices among Indigenous peoples in the Arctic",
        reference3Link: "10.33265/polar.v40.5522",
        image: "images/beluga.png",
        left: "51%",
        top: "32%", 
        showReferenceCard: ref(false)
      },
      {
        location: "Paulatuk community, NWT",
        issueText:"Ship traffic has particularly impacted the Canadian Arctic over the past decade, nearly tripling as a result of climate change making the area navigable.",
        response:" Low Impact Shipping Corridors",
        responseText:"The Arctic Corridors and Northern Voices (ACNV) research project was established in 2014 to incorporate Inuit perspectives into the governance of shipping routes in culturally significant marine areas. The Paulatuk community, as one of 13 communities included, recommended that part of the Arctic shipping corridor be redirected to avoid the Anguniaqvia Niqiqyuam Marine Protected Area (ANMPA) and Cape Parry sanctuary for beluga whales.",
        cultureText:"The Paulatuk community in the North West Territories has a deep traditional connection with beluga whales as the meat is an important part of their diet and culture. The community enjoys an annual beluga harvest which has brought the community together since 1989. However, with whale populations declining in the area, the community must ensure that hunting is sustainable. Collaborative efforts have been made to address climate change, shipping, industrial development, pollution, and other threats to the health and abundance of beluga whales.",
        reference1:"Canadian Geographic: Inuit Communities Consulted in Plans for Low Impact Shipping Routes",
        reference1Link: "https://canadiangeographic.ca/articles/inuit-communities-consulted-in-plans-for-low-impact-arctic-shipping-routes/",
        reference2:"Infusing Inuit and local knowledge into the Low Impact Shipping Corridors",
        reference2Link: "https://doi.org/10.1016/j.envsci.2019.11.013",
        reference3: "Beluga whale stewardship and collaborative research practices among Indigenous peoples in the Arctic",
        reference3Link: "10.33265/polar.v40.5522",
        image: "images/nunavut.png",
        left: "20%",
        top: "32%", 
        showReferenceCard: ref(false)
      }

    ]
//This links the projects of the other class into a workable navigation bar for the overall app.
    const projects = [
      {
        title:"Home",
        url:"https://artssci.github.io/Maritime-Commerce-and-Whale-Risks-Collective-App/index.html",
      },
      {
        title: "Ocean Route Explorer",
        url: "https://ameliag116.github.io/Ocean-Route-Explorer/",
      },
      {
        title: "Temporal Tides",
        url: "https://nkkkkkkkkkkk.github.io/Temporal-Tides/"
      },
      {
        title: "Ocean Commotion",
        url:"https://madsb04.github.io/Ocean-Commotion-/ "
      },
      {
        title:"Jeopardy: Whale Health",
        url:"https://roco100.github.io/3C03-Assignment/ ",
      },
      {
        title:"Relationships Between Traditional and Western Ecological Knowledge in Whale Protection Practices",
        url:"https://alipanju12.github.io/Traditional-Ecological-Knowledge-connection-to-Whales/ ",
      },
      {
        title:"Whale Anatomy, Maritime Threats, and Traditional Ecological Knowledge",
        url:"safiya-fs.github.io/Whale-Anatomy-Module/ ",
      },
      {
        title:"Indigenous Perspectives in Reducing Whale Harm in Shipping Practice",
        url:"https://genevawhite.github.io/genevacoding/",
      }
      
    ]

    //this will open the application bar
    const openDrawer = ref(false)

    function toggleDrawer() {
    if (openDrawer.value == false) {openDrawer.value = true} 
    else {openDrawer.value = false}
}

   // This will open the welcome card automatically when the page is opened
    const dialog = ref(true)  
    // This will open the 'Learn More Here' button so that users can navigate to provided sources
    const clickHereDialog = ref(false)
    // This function toggles the state of a dialoge so that clicking 'Learn More Here' will open a dialoge pop up
    function toggleClickHere(){
      clickHereDialog.value = !clickHereDialog.value;
    }

    // Toggle Function for opening and closing the info cards for each selected location
    function toggleOpenCloseReferenceCard(card) {
      if (card.showReferenceCard.value == false) {
        card.showReferenceCard.value = true;
      } else {
        card.showReferenceCard.value = false;
      }
    }

    // This is where we return all the functions previously outlined 
    return {
      collection,
      toggleOpenCloseReferenceCard,
      findCoordinates,
      dialog,
      clickHereDialog,
      toggleClickHere,
      openDrawer,
      projects,
      toggleDrawer,
      LearnMoreReferences,
    };

    // This function allows us to find coordinates on the page to place our toggles
    function findCoordinates(event) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const xPercent = (event.clientX / windowWidth) * 100;
      const yPercent = (event.clientY / windowHeight) * 100;
      console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
    }

  }
}

createApp(App).use(vuetify).mount('#app');