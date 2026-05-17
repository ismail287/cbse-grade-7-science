import { Chapter } from "../curriculumData";

export const chapter8: Chapter = {
  id: "8",
  title: "Reproduction in Plants",
  subject: "Biology",
  description: "Discover seed dispersal, pollination, and vegetative propagation.",
  topics: [
    {
      id: "8.1",
      title: "Modes of Reproduction",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "To produce its kind is a characteristic of all living organisms. The production of new individuals from their parents is known as reproduction."
        },
        {
          type: "definition",
          content: "Asexual Reproduction: New plants are obtained without production of seeds. Methods include vegetative propagation, budding, fragmentation, and spore formation."
        },
        {
          type: "definition",
          content: "Sexual Reproduction: New plants are obtained from seeds. Flowers are the reproductive parts of a plant."
        }
      ],
      quiz: [
        {
          id: "8.1-q1",
          question: "Which of the following is a method of asexual reproduction?",
          options: ["Pollination", "Fertilisation", "Vegetative propagation", "Seed dispersal"],
          correctAnswerIndex: 2,
          explanation: "Vegetative propagation produces new plants from vegetative parts like roots, stems, and leaves without seeds."
        }
      ]
    },
    {
      id: "8.2",
      title: "Sexual Reproduction",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "The flowers are the reproductive parts of a plant. Stamens are the male reproductive part and pistil is the female reproductive part."
        },
        {
          type: "definition",
          content: "Pollination: Generally, pollen grains have a tough protective coat which prevents them from drying up. Since pollen grains are light, they can be carried by wind or water. The transfer of pollen from the anther to the stigma of a flower is called pollination."
        },
        {
          type: "definition",
          content: "Fertilisation: The cell which results after fusion of the gametes is called a zygote. The process of fusion of male and female gametes is called fertilisation."
        }
      ],
      quiz: [
        {
          id: "8.2-q1",
          question: "The transfer of pollen from anther to stigma is called:",
          options: ["Fertilisation", "Pollination", "Reproduction", "Fragmentation"],
          correctAnswerIndex: 1,
          explanation: "Pollination is the physical transfer of pollen grains."
        }
      ]
    },
    {
      id: "8.3",
      title: "Fruits and Seed Formation",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "After fertilisation, the ovary grows into a fruit and other parts of the flower fall off. The fruit is the ripened ovary. The seeds develop from the ovules."
        },
        {
          type: "text",
          content: "Seed Dispersal: In nature same kind of plants grow at different places. This happens because seeds are dispersed to different places by wind, water, and animals."
        }
      ],
      quiz: [
        {
          id: "8.3-q1",
          question: "The fruit is the ripened:",
          options: ["Ovule", "Ovary", "Stigma", "Anther"],
          correctAnswerIndex: 1,
          explanation: "After fertilisation, the ovary ripens into a fruit."
        }
      ]
    }
  ]
};
