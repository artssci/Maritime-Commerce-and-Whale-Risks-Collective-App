const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();
 
const App = {
    setup() {

        // These are constants that will be drawn on for the app's home page
        const homeImage = "Whale-Home.jpg"
        const title = "Ocean Commotion";
        const description = "Let's find out how online shopping impacts whales and the earth!";
        const button = "Begin!"

        // These constants and function determine when the home page and stepper are present (ie. true, false)
        const showHomepage = ref(true)
        const showStepper = ref(false)

        function toggleHomepage() {
            if (showHomepage.value == false) {
                showHomepage.value = true
                showStepper.value = false
            } else {
                showHomepage.value = false
                showStepper.value = true
            }
        }


        // These constants are divided into stages to be included in the stepper stages
        const stages = [
            {
                title: 'The Anthropocene Lens: What Is It?',
                description: 'Anthropocene is the geological epoch we are currently in, characterized by significant human activity impacting Earths geology, natural cycles and ecosystems. This critical lens emphasizes how “sustainable ecologies” are often decentralized from our focus in favour of human values like wealth, efficiency and advancement (Heller, 2018). The Anthropocene lens highlights an interesting paradox: while humans general well-being is rising, our actions are making our planet barrel into a future void of natural biodiversity (Heller, 2018). Unfortunately, seemingly small “local actions”  like driving to work or ordering a package online have become so normalized and interconnected that they are actively contributing to “global risks and consequences” for our environment (Biermann et al., 2016). A large goal in the Anthropocene epoch is to “facilitate effective international communication” (Heller, 2018). On the surface, the goal seems positive, but when viewed through the Anthropocene critical lens, this goal can have catastrophic environmental effects. The surge in international communication has contributed to the rapid expansion of e-commerce, which relies heavily on international supply chains, packaging materials and ocean transportation; these factors contribute significantly to waste management and carbon emissions. Almost no region is void of this expansive “international communication”; how might you be impacting this human-shaped epoch?',
                stepperImage: "anthrop.jpeg",
                // Citations for description: Biertmann, et. al, 2016; Heller, 2019
            },
            {
                title: 'Your Cart: Is it really that simple?',
                description: 'You have been eyeing this item on Amazon for days, and finally, it is on sale and just a few clicks away! The promise of it arriving tomorrow is so enticing that you would not even bother finding a similar one locally. You imagine the excitement of seeing the parcel on your doorstep, ready to be opened. You tell yourself: “What is the harm? It is just one small package, and I will be saving time, gas and effort buying it right now!” Being the worlds largest “Ocean Vendor,” Amazon proudly ensures that you will have access to resources and equipment at a cheap and fast rate. From main production hubs, like China, to Amazon fulfillment centres situated across the globe, you are sure to receive your parcel just like you were promised! However, far away, a massive cargo ship with “AMAZON” scrawled on the side is rerouted, picking up more parcels ordered by people thinking the same thing as you. Suddenly, your little Amazon shopping spree has become something more, something detrimental. As items become sold out at increasingly faster rates, with out-of-stock items rising to 14% on the platform, Amazons business is at an all-time high. While you rate your order with a big smile and 5 stars, the very cargo ship you received your package from is barrelling right into the migration path of a whale pod . . . ',
                stepperImage: "add-to-cart-button.png",
                // Citations for description: Tarasov, 2021; Ionescu, 2024; ShipUniverse, 2025
            },
            {
                title: 'Intercepted Migration and Trade Routes',
                description: 'Whales are more than just ocean giants; they have unique traits that resemble many aspects of human culture. These emotional beings are highly intelligent, displaying ritualistic migration, social units, and languages that are passed down to each generation. With Chinas busy shipping routes over international waters, especially in the North Atlantic and Pacific routes, intersection with migrating whale pods is almost inevitable. Did you know that one of your packages may have contributed to the confusion, dietary alteration and distress of a humpback, sperm, fin, or blue whale pod? These common trade routes, which have been confirmed by Amazon, are a hotspot for whale migration. When a cargo ship intercepts a whale migration route, the pod faces a high risk of collisions that can cause serious injuries or death; in just one year, scientists indicated that at least 20,000 whales are killed by ship strikes worldwide, not including unreported casualties. A simple human activity like ordering a package directly impacts whale habitats and migration routes. Protecting these routes is crucial to sustaining whale populations and the oceans health. How, might you ask?',
                stepperImage: "route.png",
                // Citations for description: Welch, 2021; Ionescu, 2024; Nisi, et. al, 2024
            },
            {
                title: 'Whales: The Carbon Champions',
                description: 'Most of us recognize that trees are carbon champions, known for storing carbon in their trunks. But, did you know that whales are keystone species in the marine carbon cycle, fostering ocean health, and subsequently human health? They contribute to a cycle that captures four times more carbon than the Amazon rainforest! These giants sit at the top of the marine food chain, playing an important role in carbon storage and nutrient dispersion in all ocean regions. First, whales help support organisms that are not even visible to the naked eye, yet they help the earths biodiversity far more than we give them credit for. When whales dive down into the depths of the ocean, they stir up and circulate nutrients that feed phytoplankton and zooplankton: small phototrophic organisms that not only remove greenhouse gas emissions from the atmosphere, but also produce large amounts of oxygen through photosynthesis. These powerhouses capture 37 billion metric tons of carbon annually, thats 40% of all carbon produced by human-driven activity, including your online purchases! Whale feces are also rich in nutrients, nourishing the plankton that are later consumed by the whales, who store the carbon in their bodies until death. When a whale passes away, the carbon stored in their sunken bodies are kept far away from the atmosphere for centuries. Evidently, the beauty of whales extends far beyond their tourism appeal; they are silent champions of the ocean, playing a vital role in maintaining the health of marine ecosystems. Your health depends on this crucial contribution to the carbon cycle, as well! Through their movement and biological processes, whales help capture carbon, keeping our Earths climate in balance. When their migration routes are intercepted by cargo ships, these processes are altered or halted entirely. Changing your online purchasing habits is crucial to sparking necessary conversations about whale conservation; this highlights how human choices in the Anthropocene directly impact crucial, natural processes. By demanding more sustainable practices from large e-commerce platforms, like Amazon, we can help reform supply chains and protect the whales and our planets health.  ',
                stepperImage: "carbon.jpg",
                // Citations for description: Ellis, 2022; IFAW, 2024; Nisi, et. al, 2024; IFAW, 2025; 
            },
            {
                title: 'CO2: The Silent Catalyst of Climate Change',
                description: 'Carbon dioxide, or CO2, is a greenhouse gas that helps regulate Earths temperature by trapping heat in the atmosphere. Unlike nitrogen and oxygen, which make up most of the air we breathe, CO2 absorbs heat radiating from the earths surface and redirects it back; this is a natural greenhouse effect, essential for warming our planet to support life. However, human activities have critically increased the amount of CO2 in our atmosphere, warming the temperature of our planet more than ever before. Direct consequences of high CO2 levels are warmer temperatures, severe storms, increased drought, and rising ocean levels; the effects of this increased carbon footprint stretch beyond the environment, threatening agricultural safety, human health and even poverty or displacement in vulnerable regions. From an anthropocene critical lens, the rise in CO2 emissions reflects the deep interconnection between human systems and natural processes; in this case, it would be how e-commerce and consumer culture contribute to environmental degradation. Online shopping, particularly on large sites such as Amazon, exemplifies Anthropocenes paradox discussed previously: the convenience of rapid consumption overruling animal welfare and environmental conservation. These human behaviours are accelerating carbon emissions, pushing them beyond our environments capacity to manage. We are actively driving ourselves toward degradation. Whales are not just gentle giants; they are vital components in Earths natural balance, just as an Amazon package is not simply a delivery, but a symbol of the complex relationship between human activity and the Anthropocene. Through the connection of e-commerce and consumer choices, we are actively shaping the future of our planet, one that is not bright if these destructive behaviours persist. ',
                stepperImage: "climate.png", 
                // Citations for description: Lindsey, 2025; NASA, 2025; United Nation, n.d.
            },
              {
                title: 'The Power of Your Choices',
                description: 'Arguably, it is in our nature to select the fastest and cheapest way to reap the benefits of a material purchase; afterall, who does not want convenience at their fingertips? However, every package sailing on the ocean forcibly changes whale migration routes, disturbing these majestic creatures who have had these oceans for millennia. Through the Anthropocene lens, our simple human action is more than just ordering a package; it initiates a ripple through a crucial process that has harmonized Earth for far longer than we have existed. Whales are not just beautiful, intelligent creatures, they are vital components of a system far greater than ourselves: the carbon cycle and climate health. Anthropocene lens scholars urge us to overrule the normalized priority of speed and savings, as we risk disrupting a sacred balance that will only speed up our planets degradation. So, next time you open Amazon to browse, you must ask yourself how greatly you value haste over a process that enables all forms of life to thrive. ',
                stepperImage: "power.jpg",
            }
        ];
        
        // These constants label the items in the menu in the app bar
        const items = [
            { title: 'Home Page' },
            { title: 'Component 1' },
            { title: 'Component 2' },
            { title: 'Component 3' },
            { title: 'Component 4' },
        ]

        // This function creates the sequential steps in the stepper
        function step(index) {
            let stepNumber = index + 1
            return "item." + stepNumber
        }

        // All of these variables are returned to the index.html file 
        return {
            title, 
            description,
            button,
            homeImage,
            showHomepage,
            showStepper,
            toggleHomepage,
            stages,
            step,
            items
        };

    }
}

createApp(App).use(vuetify).mount('#app');

// Next steps:
//      make information easier to read and engage with (eg. break up text, add links for references, add more images, etc)
//      change the “Next” buttons for each stepper stage to align better with the story of the component (eg. “Launch the cargo ship” instead of “Next”)
//      add dropdowns which will have statistics to backup our information, as well as other functional aspects to the module is time permits
