const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
    setup() {

        // the helper function to find the coordinates in the screen from lab 4
        function findCoordinates(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const xPercent = (event.clientX / windowWidth) * 100;
            const yPercent = (event.clientY / windowHeight) * 100;
            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }

        const showDetails = ref(false); // Allows details to be shown when 'learn more' is clicked

        const frontIndex = ref(0); // Determines which card is at the 'front' or center of the deck

        function toggleOpenCloseCard(){
            if (showDetails.value == false) {
                showDetails.value = true
            } else {
                showDetails.value = false 
            }
        }

        const cards = ref([ // Each represents one card
            {
                id: 0, // To differentiate each card we assign them an id as a unique identifier.
                unlocked: true, // True means card is currently unlocked, false means it's still locked
                title: "Cultural Practice of Whaling",
                subtitle: "Learn about the Indigenous practice of whaling.",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", // Description section for each card left blank (placeholder).
                image: "https://smartcdn.gprod.postmedia.digital/nationalpost/wp-content/uploads/2014/08/greenpeace-whale.jpg?w=620",
                // add another field for the dialog content 
                details: "Loading...", // Details (i.e. information) to be added in next step
                x: "40%",
                y: "20%",
                z: "5"
                // move showDetails here and into the other cards below, see lab 5 for reference.
            },
            {
                id: 1,
                unlocked: false,
                title: "Whales as Spiritual Beings",
                subtitle: "Learn about Indigenous peoples' spiritual connection to whales.",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image: "https://assets.hellovector.com/product-images/b_7220.jpg",
                details: "Loading...",
                x: "35%",
                y: "20%",
                z: "4"
            },
            {
                id: 2,
                unlocked: false,
                title: "Indigenous Sustainability",
                subtitle: "Putting It Together",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image: "https://pbs.twimg.com/media/GSp6oAHXAAAjoop.jpg",
                details: "Loading...",
                x: "30%",
                y: "20%",
                z: "3"
            },
            {
                id: 3,
                unlocked: false,
                title: "Whales in Indigenous Art",
                subtitle: "Thinking Deeper",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image: "https://i.etsystatic.com/32921179/r/il/320bc7/4301282342/il_fullxfull.4301282342_3ky1.jpg",
                details: "Loading...",
                x: "25%",
                y: "20%",
                z: "2"
            },
            {
                id: 4,
                unlocked: false,
                title: "[Title]: Indigenous Whale Story",
                subtitle: "Case Study",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                image: "https://m.media-amazon.com/images/I/81oBDVb5jrL._AC_UF1000,1000_QL80_.jpg",
                details: "Loading...",
                x: "20%",
                y: "20%",
                z: "1"
            }
        ]);

        // a function to make the cards be at the center/front by switching the x and z positions
        function translateCards() {
            if (frontIndex.value === 0) {
                cards.value[0].x = "40%";
                cards.value[0].z = "5"
                cards.value[1].x = "35%";
                cards.value[1].z = "4"
                cards.value[2].x = "30%";
                cards.value[2].z = "3"
                cards.value[3].x = "25%";
                cards.value[3].z = "2"
                cards.value[4].x = "20%";
                cards.value[4].z = "1"
            } else if (frontIndex.value === 1) {
                cards.value[1].x = "40%";
                cards.value[1].z = "5"
                cards.value[2].x = "35%";
                cards.value[2].z = "4"
                cards.value[3].x = "30%";
                cards.value[3].z = "3"
                cards.value[4].x = "25%";
                cards.value[4].z = "2"
                cards.value[0].x = "20%";
                cards.value[0].z = "1"
            } else if (frontIndex.value === 2) {
                cards.value[2].x = "40%";
                cards.value[2].z = "5"
                cards.value[3].x = "35%";
                cards.value[3].z = "4"
                cards.value[4].x = "30%";
                cards.value[4].z = "3"
                cards.value[0].x = "25%";
                cards.value[0].z = "2"
                cards.value[1].x = "20%";
                cards.value[1].z = "1"

            } else if (frontIndex.value === 3) {
                cards.value[3].x = "40%";
                cards.value[3].z = "5"
                cards.value[4].x = "35%";
                cards.value[4].z = "4"
                cards.value[0].x = "30%";
                cards.value[0].z = "3"
                cards.value[1].x = "25%";
                cards.value[1].z = "2"
                cards.value[2].x = "20%";
                cards.value[2].z = "1"
            } else {
                cards.value[4].x = "40%";
                cards.value[4].z = "5"
                cards.value[0].x = "35%";
                cards.value[0].z = "4"
                cards.value[1].x = "30%";
                cards.value[1].z = "3"
                cards.value[2].x = "25%";
                cards.value[2].z = "2"
                cards.value[3].x = "20%";
                cards.value[3].z = "1"
            }
        }

        return {
            findCoordinates,
            frontIndex,
            cards,
            translateCards, 
            showDetails, 
            toggleOpenCloseCard

        }
    }
}


createApp(App).use(vuetify).mount('#app');
