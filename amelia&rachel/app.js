const { createApp, ref } = Vue; // extracting Vue functions: createApp to make the application and ref to enable reactivity
const { createVuetify } = Vuetify; // extracting Vuetify function function to initiate the UI framework 

const vuetify = createVuetify(); // initializing Vuetify

const App = { // creating a Vue component object and storing it in the 'App' variable
    setup() {

        function findCoordinates(event) {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const xPercent = (event.clientX / windowWidth) * 100;
            const yPercent = (event.clientY / windowHeight) * 100;
            console.log(`X: ${xPercent.toFixed(2)}%, Y: ${yPercent.toFixed(2)}%`);
        }
        const drawer = ref(false); // declaring the variable 'drawer', which represents the navigation bar defined in the index.html file, ensuring it is reactive, and setting the variable to false, ensuring it is closed by default; if the user clicks the navigation drawer icon, the variable 'drawer' should change to true 
        const panel = ref([]); // declaring the variable 'panel', which represents the expansion panel defined in the index.html file, ensuring the expansion panel is reactive and starts at a closed position (closed position is denoted by an empty []); if the user clicks the expansion panel header, the variable 'panel' should change to [1]

        const popup1 = ref(false); // declaring the first popup window as a variable; if the user clicks on the first popup window, the variable 'popup1' should change to true
        const popup2 = ref(false); // declaring the second popup window as a variable, additional windows can be added as the module is developed; if the user clicks on the second popup window, the variable 'popup2' should change to true
        const popup3 = ref(false); // declaring the third popup window as a variable
        const popup4 = ref(false); // declaring the fourth popup window as a variable

        const showTrueFalseCard = Vue.ref(false); // declaring the reactive "showTrueFalseCard" variable which controls whether the True/False card is visible; when the user clicks on the corresponding button, the value changes to true and the card will appear
        const userAnswer = Vue.ref(null); // delcaring the "userAnswer" variable to store the user's answer to the true/false statement; the value is initially set to null but will change to true or false, when the user clicks the corresponding true or false buttons
        const result = Vue.ref(""); // declaring the "result" variable, the variable begins as an empty string but will change to either correct or incorrect when the user clicks on the validate result button, depending on their true/false choice

        function recordUserAnswer(answer) {
            userAnswer.value = answer
        }; // when the user clicks on the true or false buttons, this function changes the userAnswer from null to either true or false

        function validateResult() {
            if (userAnswer.value === false) {
                result.value = "Correct! There are fewer than 400 remaining."
            } else {
                result.value = "Incorrect. There are fewer than 400 remaining."
            }
        }; // when the user clicks on the validate results button, this function changes the results from an empty string ("") to the feedback message based on whether the userAnswer equals false

        const selectedPollAnswer = Vue.ref(null); // defining the "selectedPollAnswer" variable to store the user's answer to the multiple choice question; the value is initially set to null but will change to the value of their answer, when the user clicks the corresponding button
        const pollResult = Vue.ref(""); // defining the "pollResult" variable, the variable begins as an empty string but will change to either correct or incorrect when the user clicks on the validate result button, depending on their previous multiple choice answer


        function submitPoll() {
            if (!selectedPollAnswer.value) {
                pollResult.value = "Please select an option."
                return
            } if (selectedPollAnswer.value == "speed") {
                pollResult.value = "Correct! Speed reduction is an effective method to reduce ship strikes."
            } else {
                pollResult.value = "Incorrect! Speed reduction is proven to be the most effect method."
            }
        }; // when the user clicks on the submit button, this function checks the selectedPollAnswer (which already changed from null to a string value) and updates pollResult from an empty string ("") to the corresponding feedback message

        function openEmail() {
            alert("Open email");
        }; // declaring the openEmail function which will trigger a pop-up window with relevant information when users click on the email icon; if the user clicks on the email icon, the "Open email" alert will show (this text can be replaced with an actual email address)

        function openSettings() {
            alert("Open settings");
        }; // declaring the openSettings function which will trigger a pop-up window with relevant information when users click on the settings icon; if the user clicks on the setting icon, the "Open settings" alert will show (this text can be replaced with settings/display information)



        // example of animated maritime routes
        const maritimeRoutes = ref([
            {
                name: "Canada to Colombia",
                route: [-40, 50, 60, 60, 50, -40],
                top: "32%",
                left: "-5%",
                width: "45%",
                height: "15%",
                lineHeight: 1000,
                lineWidth: 4,
                transform: "rotate(-120deg)"
            },
            {
                name: "Brazil to France",
                route: [-40, 50, 60, 70, 80],
                top: "20%",
                left: "8%",
                width: "40%",
                height: "30%",
                lineHeight: 1000,
                lineWidth: 4,
                transform: "rotate(0deg)"
            },

            {
                name: "Russia to Australia",
                route: [0, 10, 15, 0, -5],
                top: "15%",
                left: "70%",
                width: "20%",
                height: "45%",
                lineHeight: 150,
                lineWidth: 10,
                transform: "rotate(90deg)"
            }
        ])

        return {
            drawer,
            panel,
            popup1,
            popup2,
            popup3,
            userAnswer,
            result,
            recordUserAnswer,
            validateResult,
            popup4,
            selectedPollAnswer,
            pollResult,
            submitPoll,
            openEmail,
            openSettings,
            maritimeRoutes, 
            findCoordinates
        }
    }
}

createApp(App).use(vuetify).mount('#app');