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
          content: "In Class VI you learnt that food is essential for all living organisms. You also learnt that carbohydrates, proteins, fats, vitamins and minerals are components of food. These components of food are necessary for our body and are called nutrients."
        },
        {
          type: "important",
          content: "Plants can make their food themselves but animals including humans cannot. They get it from plants or animals that eat plants. Thus, humans and animals are directly or indirectly dependent on plants."
        },
        {
          type: "definition",
          content: "Nutrition: The mode of taking food by an organism and its utilisation by the body. The nutrients enable living organisms to build their bodies, to grow, to repair damaged parts of their bodies and provide the energy to carry out life processes."
        },
        {
          type: "image",
          content: "Living organisms require nutrition for growth and energy",
          diagramUrl: ""
        },
        {
          type: "text",
          content: "Based on how they obtain food, the mode of nutrition is broadly divided into two categories: Autotrophic and Heterotrophic."
        },
        {
          type: "definition",
          content: "Autotrophic Nutrition: The mode of nutrition in which organisms make food themselves from simple substances is called autotrophic (auto = self; trophos = nourishment) nutrition. Therefore, plants are called autotrophs."
        },
        {
          type: "example",
          content: "Green plants like mango trees, rose bushes, and even tiny algae floating in ponds are all autotrophs."
        },
        {
          type: "definition",
          content: "Heterotrophic Nutrition: Animals and most other organisms take in ready-made food prepared by the plants. They are called heterotrophs (heteros = other)."
        },
        {
          type: "example",
          content: "Lions, deer, humans, and even non-green plants like fungi are heterotrophs because they cannot synthesize their own food."
        }
      ],
      quiz: [
        {
          id: "1.1-q1",
          question: "Organisms that make their own food are called:",
          options: ["Heterotrophs", "Autotrophs", "Saprotrophs", "Parasites"],
          correctAnswerIndex: 1,
          explanation: "Auto means self, and trophos means nourishment. Plants are autotrophs."
        },
        {
          id: "1.1-q2",
          question: "Which of the following is NOT a nutrient?",
          options: ["Carbohydrates", "Proteins", "Sunlight", "Vitamins"],
          correctAnswerIndex: 2,
          explanation: "Sunlight is an energy source for plants, not a chemical nutrient consumed by humans."
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
          type: "image",
          content: "Section of a leaf showing stomata and guard cells",
          diagramUrl: ""
        },
        {
          type: "definition",
          content: "Stomata: Tiny pores present on the surface of leaves through which carbon dioxide from air is taken in. These pores are surrounded by 'guard cells'."
        },
        {
          type: "text",
          content: "Water and minerals are transported to the leaves by the vessels which run like pipes throughout the root, the stem, the branches and the leaves. They form a continuous path or passage for the nutrients to reach the leaf."
        },
        {
          type: "important",
          content: "The leaves have a green pigment called chlorophyll. It helps leaves to capture the energy of the sunlight. This energy is used to synthesise (prepare) food from carbon dioxide and water."
        },
        {
          type: "text",
          content: "Since the synthesis of food occurs in the presence of sunlight, it is called photosynthesis (photo: light; synthesis: to combine). So we find that chlorophyll, sunlight, carbon dioxide and water are necessary to carry out the process of photosynthesis. It is a unique process on the earth. The solar energy is captured by the leaves and stored in the plant in the form of food."
        },
        {
          type: "important",
          content: "Thus, sun is the ultimate source of energy for all living organisms."
        },
        {
          type: "formula",
          content: "Carbon dioxide + Water --(Sunlight / Chlorophyll)--> Carbohydrate + Oxygen"
        },
        {
          type: "image",
          content: "Diagram showing photosynthesis",
          diagramUrl: ""
        },
        {
          type: "example",
          content: "Besides leaves, photosynthesis also takes place in other green parts of the plant — in green stems and green branches. The desert plants have scale- or spine-like leaves to reduce loss of water by transpiration. These plants have green stems which carry out photosynthesis."
        },
        {
          type: "text",
          content: "During the process oxygen is released. The presence of starch in leaves indicates the occurrence of photosynthesis. Starch is also a carbohydrate."
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
        },
        {
          id: "1.2-q3",
          question: "What is the ultimate source of energy for all living organisms?",
          options: ["Water", "Soil", "Sun", "Chlorophyll"],
          correctAnswerIndex: 2,
          explanation: "The solar energy from the sun is captured by leaves and stored as food, making the sun the ultimate source of energy."
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
