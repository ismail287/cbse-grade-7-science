import { Chapter } from "../curriculumData";

export const chapter12: Chapter = {
  id: "12",
  title: "Forests: Our Lifeline",
  subject: "Biology",
  description: "Explore ecosystems, the forest canopy, and food chains.",
  topics: [
    {
      id: "12.1",
      title: "Profile of a Forest",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "A forest is a system comprising various plants, animals and micro-organisms. The various components of the forest are interdependent on one another."
        },
        {
          type: "definition",
          content: "Canopy: The branches of the tall trees look like a roof over the other plants in the forest. This is called a canopy."
        },
        {
          type: "definition",
          content: "Understorey: Trees had crowns of different types and sizes. These had created different horizontal layers in the forest. These are known as understoreys."
        }
      ],
      quiz: [
        {
          id: "12.1-q1",
          question: "The roof-like covering formed by branches of tall trees is called:",
          options: ["Understorey", "Canopy", "Crown", "Trunk"],
          correctAnswerIndex: 1,
          explanation: "The canopy acts as a roof over the lower plants."
        }
      ]
    },
    {
      id: "12.2",
      title: "Interdependence of Plants and Animals",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "All animals, whether herbivores or carnivores, depend ultimately on plants for food. Organisms which feed on plants often get eaten by other organisms, and so on."
        },
        {
          type: "example",
          content: "Food Chain: Grass is eaten by insects, which in turn, is eaten by the frog. The frog is consumed by snakes. This is said to form a food chain: Grass -> insects -> frog -> snake -> eagle."
        },
        {
          type: "important",
          content: "Many food chains can be found in the forest. All food chains are linked. If any one food chain is disturbed, it affects other food chains."
        }
      ],
      quiz: [
        {
          id: "12.2-q1",
          question: "A sequence of organisms where one is eaten by the other is called:",
          options: ["Food Web", "Food Chain", "Ecosystem", "Canopy"],
          correctAnswerIndex: 1,
          explanation: "A food chain represents the transfer of energy through consumption."
        }
      ]
    },
    {
      id: "12.3",
      title: "Forests as 'Green Lungs'",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Plants release oxygen through the process of photosynthesis. The plants help to provide oxygen for animal respiration. They also maintain the balance of oxygen and carbon dioxide in the atmosphere."
        },
        {
          type: "important",
          content: "That is why forests are called green lungs."
        },
        {
          type: "text",
          content: "Forests also protect the soil from erosion. The roots of the trees bind the soil particles together."
        }
      ],
      quiz: [
        {
          id: "12.3-q1",
          question: "Forests are called 'green lungs' because they:",
          options: ["Are green in color", "Release oxygen", "Release carbon dioxide", "Prevent soil erosion"],
          correctAnswerIndex: 1,
          explanation: "By taking in carbon dioxide and releasing oxygen, they act like lungs for the earth."
        }
      ]
    }
  ]
};
