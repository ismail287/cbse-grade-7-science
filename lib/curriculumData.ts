export type Subject = "Biology" | "Chemistry" | "Physics";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Chapter {
  id: string; // e.g., "1"
  title: string;
  subject: Subject;
  description: string;
  keyConcepts: string[];
  simulatorType?: "acids-bases" | "motion" | "plant-anatomy" | "none";
  quiz: QuizQuestion[];
}

export const curriculumData: Chapter[] = [
  {
    id: "1",
    title: "Nutrition in Plants",
    subject: "Biology",
    description: "Learn about photosynthesis, autotrophs, and heterotrophs in the plant kingdom.",
    keyConcepts: [
      "Autotrophic Nutrition: Plants making their own food using sunlight, water, and carbon dioxide.",
      "Photosynthesis Process: The role of chlorophyll and stomata.",
      "Heterotrophic Nutrition: Parasitic, saprophytic, and insectivorous plants.",
      "Replenishment of Nutrients: How fertilizers and manure add nutrients back to the soil."
    ],
    simulatorType: "plant-anatomy",
    quiz: [
      {
        id: "q1",
        question: "Which of the following is essential for photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Soil"],
        correctAnswerIndex: 1,
        explanation: "Plants take in carbon dioxide from the air and water from the soil to perform photosynthesis in the presence of sunlight."
      },
      {
        id: "q2",
        question: "What is the green pigment in leaves called?",
        options: ["Hemoglobin", "Chloroplast", "Chlorophyll", "Stomata"],
        correctAnswerIndex: 2,
        explanation: "Chlorophyll is the green pigment that captures the energy of sunlight."
      },
      {
        id: "q3",
        question: "Through which part do plants take in carbon dioxide from the air?",
        options: ["Root hair", "Stomata", "Leaf veins", "Sepals"],
        correctAnswerIndex: 1,
        explanation: "Stomata are tiny pores present on the surface of leaves through which gaseous exchange occurs."
      }
    ]
  },
  {
    id: "2",
    title: "Nutrition in Animals",
    subject: "Biology",
    description: "Explore the human digestive system and digestion in microscopic organisms like amoeba.",
    keyConcepts: [
      "Different Ways of Taking Food: Chewing, swallowing, sucking, etc.",
      "Human Digestive System: The alimentary canal, stomach, liver, and intestines.",
      "Digestion in Grass-eating Animals: The concept of rumination.",
      "Feeding and Digestion in Amoeba: Use of pseudopodia and food vacuoles."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Where does the digestion of carbohydrates like starch begin?",
        options: ["Stomach", "Small Intestine", "Buccal Cavity (Mouth)", "Large Intestine"],
        correctAnswerIndex: 2,
        explanation: "Saliva in the buccal cavity breaks down starch into sugars."
      },
      {
        id: "q2",
        question: "Which organ secretes bile juice?",
        options: ["Pancreas", "Liver", "Stomach", "Gall Bladder"],
        correctAnswerIndex: 1,
        explanation: "The liver secretes bile juice, which is stored in the gall bladder."
      }
    ]
  },
  {
    id: "3",
    title: "Heat",
    subject: "Physics",
    description: "Understand the concepts of conduction, convection, radiation, and reading thermometers.",
    keyConcepts: [
      "Hot and Cold: Using touch vs. reliable measurements.",
      "Measuring Temperature: Clinical vs. Laboratory thermometers.",
      "Transfer of Heat: Conduction in solids, convection in fluids, and radiation in empty space.",
      "Kinds of Clothes: Why we wear light colors in summer and dark in winter."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "By which process does heat transfer through a solid iron rod?",
        options: ["Radiation", "Convection", "Conduction", "Insulation"],
        correctAnswerIndex: 2,
        explanation: "Conduction is the process by which heat is transferred from the hotter end to the colder end of an object."
      }
    ]
  },
  {
    id: "4",
    title: "Acids, Bases and Salts",
    subject: "Chemistry",
    description: "Investigate natural indicators and neutralisation reactions.",
    keyConcepts: [
      "Acids and Bases: Sour vs. bitter taste, and soapy feel.",
      "Natural Indicators: Litmus, turmeric, and China rose.",
      "Neutralisation: The reaction between an acid and a base to form salt and water.",
      "Neutralisation in Everyday Life: Indigestion, ant bite, soil treatment, and factory wastes."
    ],
    simulatorType: "acids-bases",
    quiz: [
      {
        id: "q1",
        question: "What color does blue litmus paper turn in an acidic solution?",
        options: ["Remains Blue", "Red", "Green", "Colorless"],
        correctAnswerIndex: 1,
        explanation: "Acids turn blue litmus paper red."
      },
      {
        id: "q2",
        question: "What is formed when an acid and a base react together?",
        options: ["Only Salt", "Salt and Water", "Only Water", "Hydrogen Gas"],
        correctAnswerIndex: 1,
        explanation: "The reaction between an acid and a base is known as neutralisation. Salt and water are produced in this process."
      },
      {
        id: "q3",
        question: "Which of these is a natural indicator?",
        options: ["Phenolphthalein", "Methyl Orange", "Turmeric", "Hydrochloric Acid"],
        correctAnswerIndex: 2,
        explanation: "Turmeric is a natural indicator that changes color in basic solutions."
      }
    ]
  },
  {
    id: "5",
    title: "Physical and Chemical Changes",
    subject: "Chemistry",
    description: "Differentiate between rusting, crystallisation, and chemical reactions.",
    keyConcepts: [
      "Physical Changes: Changes in shape, size, color, and state (usually reversible).",
      "Chemical Changes: Changes where one or more new substances are formed.",
      "Rusting of Iron: The reaction of iron with oxygen and moisture.",
      "Crystallisation: Obtaining pure crystals of a substance from its solution."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which of the following is a chemical change?",
        options: ["Melting of ice", "Boiling of water", "Rusting of iron", "Tearing of paper"],
        correctAnswerIndex: 2,
        explanation: "Rusting of iron forms a new substance (iron oxide), making it a chemical change."
      }
    ]
  },
  {
    id: "6",
    title: "Respiration in Organisms",
    subject: "Biology",
    description: "Study aerobic/anaerobic respiration and the human respiratory system.",
    keyConcepts: [
      "Why Do We Respire?: Breakdown of food to release energy.",
      "Breathing vs. Cellular Respiration: Aerobic (with oxygen) vs. Anaerobic (without oxygen).",
      "Human Respiratory System: Nostrils, trachea, and lungs.",
      "Breathing in Other Animals: Earthworms, insects, and fish."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which acid is produced in our muscles during heavy exercise due to anaerobic respiration?",
        options: ["Acetic acid", "Lactic acid", "Citric acid", "Hydrochloric acid"],
        correctAnswerIndex: 1,
        explanation: "Partial breakdown of glucose produces lactic acid in muscles during heavy exercise."
      }
    ]
  },
  {
    id: "7",
    title: "Transportation in Animals and Plants",
    subject: "Biology",
    description: "Learn about the heart, blood vessels, and xylem/phloem transport.",
    keyConcepts: [
      "Circulatory System: Blood, blood vessels (arteries, veins, capillaries), and the heart.",
      "Excretion in Animals: Removal of waste products, the human excretory system (kidneys).",
      "Transport of Substances in Plants: Xylem (water/minerals) and Phloem (food).",
      "Transpiration: Loss of water from leaves generating a suction pull."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which vascular tissue transports water in plants?",
        options: ["Phloem", "Stomata", "Xylem", "Root hair"],
        correctAnswerIndex: 2,
        explanation: "The xylem forms a continuous network of tubes that transports water and minerals from the roots to the leaves."
      }
    ]
  },
  {
    id: "8",
    title: "Reproduction in Plants",
    subject: "Biology",
    description: "Discover seed dispersal, pollination, and vegetative propagation.",
    keyConcepts: [
      "Asexual Reproduction: Vegetative propagation, budding, fragmentation, spore formation.",
      "Sexual Reproduction: Parts of a flower, unisexual vs. bisexual flowers.",
      "Pollination: Transfer of pollen (self vs. cross-pollination).",
      "Seed Dispersal: By wind, water, and animals."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "What is the reproductive part of a plant?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        correctAnswerIndex: 3,
        explanation: "Flowers perform the function of reproduction in plants."
      }
    ]
  },
  {
    id: "9",
    title: "Motion and Time",
    subject: "Physics",
    description: "Calculate speed, interpret distance-time graphs, and study simple pendulums.",
    keyConcepts: [
      "Slow or Fast: Comparing motion of objects.",
      "Speed: Distance covered per unit time.",
      "Measurement of Time: Periodic motion, the simple pendulum.",
      "Distance-Time Graphs: Representing motion graphically."
    ],
    simulatorType: "motion",
    quiz: [
      {
        id: "q1",
        question: "What is the basic unit of speed?",
        options: ["km/min", "m/min", "km/h", "m/s"],
        correctAnswerIndex: 3,
        explanation: "The basic unit of speed is meters per second (m/s)."
      },
      {
        id: "q2",
        question: "Which instrument measures the distance moved by a vehicle?",
        options: ["Speedometer", "Odometer", "Thermometer", "Barometer"],
        correctAnswerIndex: 1,
        explanation: "An odometer records the distance traveled by a vehicle."
      },
      {
        id: "q3",
        question: "A distance-time graph for an object moving with a constant speed is a:",
        options: ["Straight line", "Curved line", "Circle", "Zig-zag line"],
        correctAnswerIndex: 0,
        explanation: "If an object moves at a constant speed, the distance traveled is directly proportional to time, resulting in a straight line on the graph."
      }
    ]
  },
  {
    id: "10",
    title: "Electric Current and Its Effects",
    subject: "Physics",
    description: "Draw circuit diagrams and explore electromagnets and heating effects.",
    keyConcepts: [
      "Symbols of Electric Components: Cells, batteries, bulbs, switches.",
      "Heating Effect of Electric Current: Electric iron, heaters, fuses.",
      "Magnetic Effect of Electric Current: Hans Christian Oersted's discovery.",
      "Electromagnet: A coil of wire behaving like a magnet when current flows.",
      "Electric Bell: How an electromagnet makes the hammer strike the gong."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "What is a combination of two or more cells called?",
        options: ["A switch", "A battery", "An electromagnet", "A fuse"],
        correctAnswerIndex: 1,
        explanation: "A battery is formed by connecting two or more cells together."
      }
    ]
  },
  {
    id: "11",
    title: "Light",
    subject: "Physics",
    description: "Understand reflection, mirrors, lenses, and the splitting of white light.",
    keyConcepts: [
      "Light Travels along a Straight Line.",
      "Reflection of Light: Plane mirrors and image formation.",
      "Spherical Mirrors: Concave and convex mirrors.",
      "Lenses: Convex (magnifying) and concave lenses.",
      "Sunlight: White light splitting into seven colors (spectrum/rainbow)."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which type of mirror is used by dentists to see an enlarged image of teeth?",
        options: ["Plane Mirror", "Convex Mirror", "Concave Mirror", "None of the above"],
        correctAnswerIndex: 2,
        explanation: "Concave mirrors can form enlarged and erect images when the object is placed close to them."
      }
    ]
  },
  {
    id: "12",
    title: "Forests: Our Lifeline",
    subject: "Biology",
    description: "Explore ecosystems, the forest canopy, and food chains.",
    keyConcepts: [
      "Profile of a Forest: Canopy, understorey, and forest floor.",
      "Interdependence of Plants and Animals: Food chains and webs.",
      "Role of Decomposers: Humus formation.",
      "Forests as 'Green Lungs': Maintaining the balance of oxygen and carbon dioxide."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which organisms break down dead plants and animals into humus?",
        options: ["Herbivores", "Carnivores", "Decomposers", "Producers"],
        correctAnswerIndex: 2,
        explanation: "Micro-organisms like bacteria and fungi decompose dead matter into humus."
      }
    ]
  },
  {
    id: "13",
    title: "Wastewater Story",
    subject: "Chemistry",
    description: "Examine water treatment plants and sanitation.",
    keyConcepts: [
      "Sewage: Liquid waste containing suspended impurities.",
      "Wastewater Treatment Plant (WWTP): Physical, chemical, and biological processes.",
      "Better Housekeeping Practices: Minimising waste at the source.",
      "Sanitation and Disease: The importance of proper sewage disposal."
    ],
    simulatorType: "none",
    quiz: [
      {
        id: "q1",
        question: "Which of the following is NOT a step in treating wastewater?",
        options: ["Passing through bar screens", "Adding chlorine", "Boiling all the water", "Allowing sludge to settle"],
        correctAnswerIndex: 2,
        explanation: "Boiling large volumes of wastewater is not practically feasible at treatment plants."
      }
    ]
  }
];
