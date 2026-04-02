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
        const currentStep = ref(1)
        const showHomepage = ref(true)
        const showStepper = ref(false)
        const nextButtonLabel = ref(null)


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
                title: 'Your Cart: Is it really that simple?',
                description: [
                'You’ve been eyeing this item on Amazon for days, and finally, it’s on sale and just a few clicks away! The promise of it arriving tomorrow is so enticing that you wouldn’t even bother finding a similar one locally. You imagine the excitement of seeing the parcel on your doorstep, ready to be opened. You tell yourself: “What’s the harm? It’s just one small package, and I’ll be saving time, gas and effort buying it right now!”',
                'Being one of the world’s largest “Ocean Vendors,” Amazon proudly ensures that you will have access to resources and equipment at a cheap and fast rate (Tarasov, 2021). From main production hubs, like China, to Amazon fulfillment centres situated across the globe, you are sure to receive your parcel just like you were promised! Skyrocketing in the number of packages delivered annually, peaking at over 8 billion in 2025, Amazon is highly regarded for its fast, reliable worldwide delivery (ShopUniverse, 2025).',
                "However, far away, a massive cargo ship with “AMAZON” scrawled on the side is rerouted, picking up more parcels ordered by people thinking the same thing as you. Suddenly, your little Amazon shopping spree has become something more, something detrimental. Prior to the widely held belief that Amazon predominantly uses air freight, Amazon has been using a significant and growing number of cargo ships to transport packages, particularly from China, to popular consumer destinations like North America. In 2017, Amazon invested in its own private charter of container ships, sometimes even shipping half-empty parcel loads to ensure efficient delivery (Tarasov, 2021). Currently producing 5,000 to 10,000 shipping containers every two years, cargo ships are filling up faster due to Amazon purchases (Tarasov, 2021).",
                "As items sell out at an increasingly rapid rate, with out-of-stock items rising to 14% on the platform, Amazon’s business is at an all-time high. While you rate your order with a big smile and 5 stars, the very cargo ship you received your package from is barrelling right into the migration path of a whale pod . . .", 
                 ],
                stepperImage: "route.jpg", 
                customNextLabel: "Add to cart",
                // Citations for description: Tarasov, 2021; Ionescu, 2024; ShipUniverse, 2025
            },
            {
                title: 'Intercepted Migration and Trade Routes',
                description: [
                "Whales are more than just ocean giants; they have unique traits that resemble many aspects of human culture (Welch, 2021). These emotional beings are highly intelligent, exhibiting ritualistic migration, social units, and languages passed down from generation to generation.",
                "With China’s busy shipping routes over international waters, especially in the North Atlantic and Pacific routes, intersection with migrating whale pods is almost inevitable. Did you know that one of your packages may have contributed to the confusion, dietary alteration and distress of a humpback, sperm, fin, or blue whale pod? These common trade routes, confirmed by Amazon, are hotspots for whale migration (Ionescu, 2024).",
                "When a cargo ship intercepts a whale migration route, the pod faces a high risk of collisions that can cause serious injuries or death; in just one year, scientists indicated that at least 20,000 whales are killed by ship strikes worldwide – not including unreported casualties (Ionesu, 2021).",
                "A simple human activity, such as ordering a package, directly impacts whale habitats and migration routes. Protecting these routes is crucial to sustaining whale populations and the health of the ocean. How, might you ask?",
                ],
                stepperImage: "route.png",
                customNextLabel: "Launch the ship",
                // Citations for description: Welch, 2021; Ionescu, 2024; Nisi, et. al, 2024
            },
            {
                title: 'Whales: The Carbon Champions',
                description: [
                    "Most of us recognize that trees are carbon stores, but did you know that whales are keystone species in the marine carbon cycle, fostering ocean health and subsequently human health? They contribute to a cycle that captures four times more carbon than the Amazon rainforest! These giants sit at the top of the marine food chain, playing an important role in carbon storage and nutrient dispersion in all ocean regions (Ellis, 2022).",
                    "First, whales help support organisms that aren’t even visible to the naked eye, yet they help the earth’s biodiversity far more than we give them credit for (Nisi et al., 2024). When whales dive down into the depths of the ocean, they stir up and circulate nutrients that feed phytoplankton and zooplankton: small phototrophic organisms that not only remove greenhouse gas emissions from the atmosphere, but also produce large amounts of oxygen through photosynthesis (Ellis, 2022). Ellis (2022) also reports that these powerhouses capture 37 billion metric tons of carbon annually – that's 40% of all carbon produced by human-driven activity, including your online purchases!",
                    "Whale feces are also rich in nutrients, nourishing the plankton that are later consumed by the whales, who store the carbon in their bodies until death (IFAW, 2025). When a whale passes away, the carbon stored in their sunken bodies are kept far away from the atmosphere for centuries.",
                    "Evidently, the beauty of whales extends far beyond their tourism appeal; they are silent champions of the ocean, playing a vital role in maintaining the health of marine ecosystems. Your health depends on this crucial contribution to the carbon cycle, as well! Through their movement and biological processes, whales help capture carbon, keeping our Earth’s climate in balance (Nisi et al., 2024). When their migration routes are intercepted by cargo ships, these processes are altered or halted entirely.",
                    "Changing your online purchasing habits is crucial to sparking necessary conversations about whale conservation; this underscores how human choices in the Anthropocene directly affect crucial natural processes. By demanding more sustainable practices from large e-commerce platforms, like Amazon, we can help reform supply chains and protect the whales and our planet’s health."
                ],
                stepperImage: "carbon.jpg",
                customNextLabel: "Follow the carbon",
                // Citations for description: Ellis, 2022; IFAW, 2024; Nisi, et. al, 2024; IFAW, 2025; 
            },
            {
                title: 'CO2: The Silent Catalyst of Climate Change',
                description: [
                "Carbon dioxide, or CO2, is a greenhouse gas that helps regulate Earth’s temperature by trapping heat in the atmosphere (United Nations). Unlike nitrogen and oxygen, which make up most of the air we breathe, CO2 absorbs heat radiating from the earth’s surface and redirects it back; this is a natural greenhouse effect, essential for warming our planet to support life. However, human activities have critically increased the amount of CO2 in our atmosphere, warming the temperature of our planet more than ever before (NASA, 2026). Direct consequences of high CO2 levels are warmer temperatures, severe storms, increased drought, and rising ocean levels; the effects of this increased carbon footprint stretch beyond the environment, threatening agricultural safety, human health and even poverty or displacement in vulnerable regions (Lindsey, 2025).",
                "From an anthropocene critical lens, the rise in CO2 emissions reflects the deep interconnection between human systems and natural processes; in this case, it would be how e-commerce and consumer culture contribute to environmental degradation. Online shopping, particularly on large sites such as Amazon, exemplifies Anthropocene’s paradox discussed previously: the convenience of rapid consumption overruling animal welfare and environmental conservation (Heller, 2018). These human behaviours are accelerating carbon emissions, pushing them beyond our environment’s capacity to manage (Lindsey, 2025). We are actively driving ourselves toward degradation.",
                "Whales are not just gentle giants; they are vital components in Earth’s natural balance, just as an Amazon package is not simply a delivery, but a symbol of the complex relationship between human activity and the Anthropocene. Through the connection of e-commerce and consumer choices, we are actively shaping the future of our planet – one that is not bright if these destructive behaviours persist."
                ],
                stepperImage: "climate.png", 
                customNextLabel: "Wrap it up",
                // Citations for description: Lindsey, 2025; NASA, 2025; United Nation, n.d.
            },
              {
                title: 'The Power of Your Choices',
                description: [
                "Arguably, it is in our nature to select the fastest and cheapest way to reap the benefits of a material purchase; after all, who doesn’t want convenience at their fingertips? However, every package sailing on the ocean forcibly alters whale migration routes, disturbing these majestic creatures who have called these oceans home for millennia.",
                "Through the Anthropocene lens, our simple human action is more than just ordering a package; it sets off a ripple in a crucial process that has harmonized Earth for far longer than we have existed. Whales are not just beautiful, intelligent creatures – they are vital components of a system far greater than ourselves: the carbon cycle and climate health.",
                "Anthropocene lens scholars urge us to overrule the normalized priority of speed and savings, as we risk disrupting a sacred balance that will only speed up our planet’s degradation. Resisting the ease of “international communication” and e-shopping in the Anthropocene to extend our environment’s well-being is not a simple solution; it is a nuanced issue that requires targeting and altering multiple phases of consumerism.",
                "There are 2 feasible changes to your shopping habits to consider. These small actions can help a massive cause!",
                "1. Analyze your consuming tendencies: Try prioritizing second-hand materials – you are bound to find a plethora of fashion, dishes, and furniture items that fit your needs, and they won’t contribute to additional shipping container space or new materials to make!",
                "2. Delay the rush derived from clicking “Buy now!”: You can practice delaying a leisure purchase for a day or two, taking time to reflect on whether it's a need or simply a want. Taking time away from the temptation of an easy purchase may convince you that the item you were eyeing may have been an impulsive “want”.",
                "Ideally, these small changes to your purchasing habits will normalize alternatives to hyper-consumerism, enforcing collective change that combats the Anthropocene’s destructive influence. While buying locally doesn’t fully escape global networks, it shifts economic power toward strengthening community resource availability, reduces cargo ship numbers and packaging waste, and creates visible demand for sustainable consumerism that shifts the status quo.",
                "So, next time you open Amazon to browse, you must ask yourself how greatly you value haste over a process that enables all forms of life to thrive."
                ],
                stepperImage: "power.jpg",
                customNextLabel: "Thanks for playing!"
            }
        ];
        
        // These constants label the items in the menu in the app bar
        const items = [
            { title: 'Home Page', link: 'https://artssci.github.io/Maritime-Commerce-and-Whale-Risks-Collective-App/'},
            { title: 'Ocean Route Explorer', link: 'https://ameliag116.github.io/Ocean-Route-Explorer/'},
            { title: 'Temporal Tides', link: 'https://nkkkkkkkkkkk.github.io/Temporal-Tides/'},
            { title: 'Ocean Commotion', link: 'https://madsb04.github.io/Ocean-Commotion-/' },
            { title: 'Jepordy: Whale Health', link: 'https://roco100.github.io/Jeopardy-Whale-Health/'},
            { title: 'Indigenous Perspectives in Reducing Harm in Shipping Practice', link: 'https://alipanju12.github.io/Traditional-Ecological-Knowledge-connection-to-Whales/' },
            { title: 'Dive into the World of Whales', link: 'https://safiya-fs.github.io/Whale-Anatomy-Module/'},
        ]

        // These constants are referenced for the sparkline in the html documant
    const carbonDioxideGraph = [
    {
    topic: 'Atmospheric Carbon Dioxide',
    subtitle: 'Increasing CO2 from 1960 to 2025',
    trend: [313.8, 356.5, 425.9]
    }
    ];

    const packageGraph = [
        {
            topic: 'Anual Amazon Package Deliveries',
            subtitle: 'Number of Amazon packages delivered from 2023 to 2025',
            trend: [5.9, 6.3, 8]
        }
    ];
    
        // This function creates the sequential steps in the stepper
        function step(index) {
            let stepNumber = index + 1
            return "item." + stepNumber
        }

        function chooseNextButtonLabel() {
            if (currentStep.value === stages.length) {
                return 'Start again'
            } else {
                return stages[currentStep.value - 1].customNextLabel
            }
        }


        // All of these variables are returned to the index.html file 
        return {
            currentStep,
            title, 
            description,
            button,
            homeImage,
            showHomepage,
            showStepper,
            toggleHomepage,
            stages,
            step,
            items,
            nextButtonLabel,
            chooseNextButtonLabel,
            carbonDioxideGraph,   
            packageGraph,
        };

    }
}

createApp(App).use(vuetify).mount('#app');

// Next steps:
//      make information easier to read and engage with (eg. break up text, add links for references, add more images, etc)
//      change the “Next” buttons for each stepper stage to align better with the story of the component (eg. “Launch the cargo ship” instead of “Next”)
//      add dropdowns which will have statistics to backup our information, as well as other functional aspects to the module is time permits
