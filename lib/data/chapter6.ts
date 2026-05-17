import { Chapter } from "../curriculumData";

export const chapter6: Chapter = {
  id: "6",
  title: "Respiration in Organisms",
  subject: "Biology",
  description: "Study aerobic/anaerobic respiration and the human respiratory system.",
  topics: [
    {
      id: "6.1",
      title: "Why do we respire?",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "All living organisms are made of small microscopic units called cells. Each cell of an organism performs certain functions such as nutrition, transport, excretion and reproduction. To perform these functions, the cell needs energy."
        },
        {
          type: "definition",
          content: "Cellular Respiration: The process of breakdown of food in the cell with the release of energy is called cellular respiration. Cellular respiration takes place in the cells of all organisms."
        },
        {
          type: "definition",
          content: "Aerobic Respiration: When breakdown of glucose occurs with the use of oxygen it is called aerobic respiration."
        },
        {
          type: "formula",
          content: "Glucose -> (in the presence of oxygen) -> Carbon dioxide + Water + Energy"
        },
        {
          type: "definition",
          content: "Anaerobic Respiration: Food can also be broken down, without using oxygen. This is called anaerobic respiration."
        },
        {
          type: "important",
          content: "Our muscle cells can also respire anaerobically, but only for a short time, when there is a temporary deficiency of oxygen (e.g. during heavy exercise). The partial breakdown of glucose produces lactic acid."
        }
      ],
      quiz: [
        {
          id: "6.1-q1",
          question: "Which of the following is produced during anaerobic respiration in yeast?",
          options: ["Lactic acid", "Alcohol", "Water", "Oxygen"],
          correctAnswerIndex: 1,
          explanation: "In yeast, glucose breaks down without oxygen to yield alcohol, carbon dioxide, and energy."
        }
      ]
    },
    {
      id: "6.2",
      title: "Breathing",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Breathing means taking in air rich in oxygen and giving out air rich in carbon dioxide with the help of respiratory organs."
        },
        {
          type: "definition",
          content: "Inhalation: The taking in of air rich in oxygen into the body is called inhalation."
        },
        {
          type: "definition",
          content: "Exhalation: Giving out of air rich in carbon dioxide is known as exhalation."
        },
        {
          type: "important",
          content: "The number of times a person breathes in a minute is termed as the breathing rate."
        }
      ],
      quiz: [
        {
          id: "6.2-q1",
          question: "The process of taking air into the lungs is called:",
          options: ["Respiration", "Exhalation", "Inhalation", "Transpiration"],
          correctAnswerIndex: 2,
          explanation: "Taking in air rich in oxygen is called inhalation."
        }
      ]
    },
    {
      id: "6.3",
      title: "How do we breathe?",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Let us now learn about the mechanism of breathing. Normally we take in air through our nostrils. When we inhale air, it passes through our nostrils into the nasal cavity. From the nasal cavity, the air reaches our lungs through the windpipe."
        },
        {
          type: "diagram",
          content: "Human Respiratory System",
          diagramUrl: "/images/placeholders/respiratory_system.svg"
        },
        {
          type: "definition",
          content: "Diaphragm: A large, muscular sheet called diaphragm forms the floor of the chest cavity."
        },
        {
          type: "text",
          content: "Breathing involves the movement of the diaphragm and the rib cage. During inhalation, ribs move up and outwards and diaphragm moves down. This movement increases space in our chest cavity and air rushes into the lungs."
        }
      ],
      quiz: [
        {
          id: "6.3-q1",
          question: "What happens to the diaphragm during inhalation?",
          options: ["Moves up", "Moves down", "Relaxes", "Does not move"],
          correctAnswerIndex: 1,
          explanation: "During inhalation, the diaphragm moves down to increase the space in the chest cavity."
        }
      ]
    },
    {
      id: "6.4",
      title: "Breathing in other animals",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "example",
          content: "Cockroach: A cockroach has small openings on the sides of its body. These openings are called spiracles. Insects have a network of air tubes called tracheae for gas exchange."
        },
        {
          type: "example",
          content: "Earthworm: Earthworms breathe through their skin. The skin of an earthworm feels moist and slimy on touching. Gases can easily pass through them."
        },
        {
          type: "example",
          content: "Fish: Gills in fish help them to use oxygen dissolved in water. Gills are projections of the skin."
        }
      ],
      quiz: [
        {
          id: "6.4-q1",
          question: "Earthworms breathe through their:",
          options: ["Lungs", "Gills", "Spiracles", "Skin"],
          correctAnswerIndex: 3,
          explanation: "Earthworms have moist and slimy skin through which gas exchange occurs."
        }
      ]
    }
  ]
};
