import { Chapter } from "../curriculumData";

export const chapter1: Chapter = {
  id: "1",
  title: "Nutrition in Plants",
  subject: "Biology",
  description: "Learn how plants synthesize their food, types of nutrition, and how nutrients are replenished in the soil.",
  topics: [
    {
      id: "1.1",
      title: "Mode of Nutrition in Plants",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Living organisms require food to survive, grow, and repair damaged parts of their bodies. The process of taking in food by an organism and its utilization by the body is called nutrition."
        },
        {
          type: "definition",
          content: "Autotrophic Nutrition: The mode of nutrition in which organisms make food themselves from simple substances is called autotrophic (auto = self; trophos = nourishment) nutrition."
        },
        {
          type: "important",
          content: "Plants are the only organisms that can prepare food for themselves by using water, carbon dioxide, and minerals. Hence, plants are called autotrophs."
        },
        {
          type: "definition",
          content: "Heterotrophic Nutrition: Animals and most other organisms take in food prepared by plants. They are called heterotrophs (heteros = other)."
        }
      ],
      quiz: [
        {
          id: "1.1-q1",
          question: "Organisms that make their own food are called:",
          options: ["Heterotrophs", "Autotrophs", "Saprotrophs", "Parasites"],
          correctAnswerIndex: 1,
          explanation: "Auto means self, and trophos means nourishment. Plants are autotrophs."
        }
      ]
    },
    {
      id: "1.2",
      title: "Photosynthesis: Food Making Process in Plants",
      simulatorType: "plant-anatomy",
      contentBlocks: [
        {
          type: "text",
          content: "Leaves are the food factories of plants. Therefore, all the raw materials must reach the leaf. Water and minerals present in the soil are absorbed by the roots and transported to the leaves."
        },
        {
          type: "definition",
          content: "Stomata: Tiny pores present on the surface of leaves, surrounded by 'guard cells'. Carbon dioxide from air is taken in through these pores."
        },
        {
          type: "text",
          content: "The leaves have a green pigment called chlorophyll. It helps leaves capture the energy of the sunlight. This energy is used to synthesize (prepare) food from carbon dioxide and water."
        },
        {
          type: "formula",
          content: "Carbon dioxide + Water --(Sunlight & Chlorophyll)--> Carbohydrate + Oxygen"
        },
        {
          type: "diagram",
          content: "Photosynthesis Diagram",
          diagramUrl: "/images/placeholders/photosynthesis.svg"
        },
        {
          type: "important",
          content: "In the absence of photosynthesis, there would not be any food. The survival of almost all living organisms directly or indirectly depends upon the food made by the plants. Furthermore, oxygen is produced during photosynthesis."
        }
      ],
      quiz: [
        {
          id: "1.2-q1",
          question: "What is the green pigment in leaves called?",
          options: ["Stomata", "Chloroplast", "Chlorophyll", "Guard cell"],
          correctAnswerIndex: 2,
          explanation: "Chlorophyll captures the sunlight required for photosynthesis."
        },
        {
          id: "1.2-q2",
          question: "Which gas is released during photosynthesis?",
          options: ["Carbon Dioxide", "Nitrogen", "Hydrogen", "Oxygen"],
          correctAnswerIndex: 3,
          explanation: "Plants take in carbon dioxide and release oxygen during photosynthesis."
        }
      ]
    },
    {
      id: "1.3",
      title: "Other Modes of Nutrition in Plants",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "There are some plants which do not have chlorophyll. They cannot synthesize their food. How do they survive? They use the heterotrophic mode of nutrition."
        },
        {
          type: "definition",
          content: "Parasite: A plant that derives its food from another living plant (the host). Example: Cuscuta (Amarbel)."
        },
        {
          type: "example",
          content: "Insectivorous Plants: Pitcher plant. The leaf is modified into a pitcher-like structure. When an insect lands in the pitcher, the lid closes and the trapped insect is digested by digestive juices secreted in the pitcher."
        }
      ],
      quiz: [
        {
          id: "1.3-q1",
          question: "Cuscuta is an example of a:",
          options: ["Autotroph", "Parasite", "Saprotroph", "Host"],
          correctAnswerIndex: 1,
          explanation: "Cuscuta deprives the host plant of valuable nutrients, hence it is a parasite."
        }
      ]
    },
    {
      id: "1.4",
      title: "Saprotrophs",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "You might have seen packets of mushrooms sold in the market or fluffy umbrella-like patches growing in moist soils or on rotting wood. These organisms are called fungi."
        },
        {
          type: "definition",
          content: "Saprotrophic Nutrition: This mode of nutrition in which organisms take in nutrients from dead and decaying matter is called saprotrophic nutrition. Such organisms are called saprotrophs."
        },
        {
          type: "example",
          content: "Fungi also grow on pickles, leather, clothes and other articles that are left in hot and humid weather for a long time."
        }
      ],
      quiz: [
        {
          id: "1.4-q1",
          question: "Which mode of nutrition do fungi use?",
          options: ["Autotrophic", "Parasitic", "Saprotrophic", "Insectivorous"],
          correctAnswerIndex: 2,
          explanation: "Fungi take nutrients from dead and decaying matter."
        }
      ]
    },
    {
      id: "1.5",
      title: "How Nutrients are Replenished in the Soil",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Plants absorb minerals and nutrients from the soil, so their amounts in the soil keep on declining. Fertilizers and manures contain nutrients such as nitrogen, potassium, and phosphorus."
        },
        {
          type: "important",
          content: "Though nitrogen gas is available in plenty in the air, plants cannot use it in the manner they can use carbon dioxide. They need nitrogen in a soluble form."
        },
        {
          type: "text",
          content: "The bacterium called Rhizobium can take atmospheric nitrogen and convert it into a usable form. Rhizobium cannot make its own food, so it lives in the roots of gram, peas, moong, beans and other legumes, providing them with nitrogen in exchange for food and shelter. This is a symbiotic relationship."
        }
      ],
      quiz: [
        {
          id: "1.5-q1",
          question: "Which bacteria helps in nitrogen fixation for leguminous plants?",
          options: ["Lactobacillus", "Rhizobium", "Streptococcus", "E. coli"],
          correctAnswerIndex: 1,
          explanation: "Rhizobium lives in root nodules and fixes atmospheric nitrogen."
        }
      ]
    }
  ]
};
