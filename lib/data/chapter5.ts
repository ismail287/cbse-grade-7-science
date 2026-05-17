import { Chapter } from "../curriculumData";

export const chapter5: Chapter = {
  id: "5",
  title: "Physical and Chemical Changes",
  subject: "Chemistry",
  description: "Differentiate between rusting, crystallisation, and chemical reactions.",
  topics: [
    {
      id: "5.1",
      title: "Physical Changes",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Properties such as shape, size, colour and state of a substance are called its physical properties."
        },
        {
          type: "definition",
          content: "Physical Change: A change in which a substance undergoes a change in its physical properties is called a physical change. A physical change is generally reversible. In such a change no new substance is formed."
        },
        {
          type: "example",
          content: "Melting of ice, boiling of water, tearing a paper, dissolving sugar in water."
        }
      ],
      quiz: [
        {
          id: "5.1-q1",
          question: "Which of the following is a physical change?",
          options: ["Burning of wood", "Rusting of iron", "Melting of wax", "Digestion of food"],
          correctAnswerIndex: 2,
          explanation: "Melting changes the state (solid to liquid) but no new substance is formed."
        }
      ]
    },
    {
      id: "5.2",
      title: "Chemical Changes",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "A change with which you are quite familiar is the rusting of iron. If you leave a piece of iron in the open for some time, it acquires a film of brownish substance. This substance is called rust and the process is called rusting."
        },
        {
          type: "definition",
          content: "Chemical Change: A change in which one or more new substances are formed is called a chemical change. A chemical change is also called a chemical reaction."
        },
        {
          type: "important",
          content: "Chemical changes are very important in our lives. All new substances are formed as a result of chemical changes."
        },
        {
          type: "example",
          content: "Burning of magnesium ribbon, reaction between vinegar and baking soda, rusting of iron."
        }
      ],
      quiz: [
        {
          id: "5.2-q1",
          question: "What is formed when magnesium ribbon is burnt in air?",
          options: ["Magnesium Carbonate", "Magnesium Oxide", "Magnesium Hydroxide", "Magnesium Chloride"],
          correctAnswerIndex: 1,
          explanation: "Magnesium reacts with oxygen in the air to form magnesium oxide."
        }
      ]
    },
    {
      id: "5.3",
      title: "Rusting of Iron",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Let us get back to rusting. This is one change that affects iron articles and slowly destroys them."
        },
        {
          type: "formula",
          content: "Iron (Fe) + Oxygen (O2, from the air) + water (H2O) -> rust (iron oxide, Fe2O3)"
        },
        {
          type: "important",
          content: "For rusting, the presence of both oxygen and water (or water vapour) is essential."
        },
        {
          type: "definition",
          content: "Galvanisation: The process of depositing a layer of zinc on iron is called galvanisation. It prevents iron from coming in contact with oxygen and water, thus preventing rusting."
        }
      ],
      quiz: [
        {
          id: "5.3-q1",
          question: "Which two components are necessary for rusting?",
          options: ["Air and sunlight", "Water and oxygen", "Heat and water", "Carbon dioxide and moisture"],
          correctAnswerIndex: 1,
          explanation: "Both water and oxygen are required for iron to rust."
        }
      ]
    },
    {
      id: "5.4",
      title: "Crystallisation",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Salt can be obtained by the evaporation of sea water. The salt obtained in this manner is not pure and its crystals are small."
        },
        {
          type: "definition",
          content: "Crystallisation: Large crystals of pure substances can be formed from their solutions. The process is called crystallisation. It is an example of a physical change."
        }
      ],
      quiz: [
        {
          id: "5.4-q1",
          question: "Crystallisation is an example of:",
          options: ["A physical change", "A chemical change", "A biological change", "None of these"],
          correctAnswerIndex: 0,
          explanation: "Crystallisation only involves a change in physical state; no new chemical substance is formed."
        }
      ]
    }
  ]
};
