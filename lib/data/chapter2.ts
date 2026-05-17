import { Chapter } from "../curriculumData";

export const chapter2: Chapter = {
  id: "2",
  title: "Nutrition in Animals",
  subject: "Biology",
  description: "Explore the human digestive system and digestion in microscopic organisms like amoeba.",
  topics: [
    {
      id: "2.1",
      title: "Different Ways of Taking Food",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "The mode of taking food into the body varies in different organisms. Bees and humming-birds suck the nectar of plants, infants of humans and many other animals feed on mother's milk."
        },
        {
          type: "example",
          content: "Snakes like the python swallow the animals they prey upon. Some aquatic animals filter tiny food particles floating nearby and feed upon them."
        }
      ],
      quiz: [
        {
          id: "2.1-q1",
          question: "How do bees take their food?",
          options: ["Swallowing", "Sucking nectar", "Chewing", "Filtering"],
          correctAnswerIndex: 1,
          explanation: "Bees suck nectar from flowers."
        }
      ]
    },
    {
      id: "2.2",
      title: "Digestion in Humans",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "We take in food through the mouth, digest and utilize it. The continuous canal which begins at the buccal cavity and ends at the anus is called the alimentary canal."
        },
        {
          type: "definition",
          content: "The Alimentary Canal is divided into: 1. Buccal cavity 2. Foodpipe (oesophagus) 3. Stomach 4. Small intestine 5. Large intestine 6. Anus."
        },
        {
          type: "diagram",
          content: "Human Digestive System",
          diagramUrl: "/images/placeholders/digestive_system.svg"
        },
        {
          type: "text",
          content: "The inner walls of the stomach, the small intestine, and various glands like salivary glands, liver, and pancreas secrete digestive juices. The digestive juices convert complex substances into simpler ones."
        },
        {
          type: "important",
          content: "The digestive tract and the associated glands together constitute the digestive system."
        }
      ],
      quiz: [
        {
          id: "2.2-q1",
          question: "Which gland secretes bile?",
          options: ["Salivary Gland", "Pancreas", "Liver", "Stomach"],
          correctAnswerIndex: 2,
          explanation: "The liver is the largest gland in the body and it secretes bile juice."
        }
      ]
    },
    {
      id: "2.3",
      title: "Digestion in Grass-eating Animals",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Have you observed cows, buffaloes and other grass-eating animals chewing continuously even when they are not eating? Actually, they quickly swallow the grass and store it in a part of the stomach called rumen."
        },
        {
          type: "definition",
          content: "Rumination: Here the food gets partially digested and is called cud. But later the cud returns to the mouth in small lumps and the animal chews it. This process is called rumination and these animals are called ruminants."
        },
        {
          type: "important",
          content: "Grass is rich in cellulose, a type of carbohydrate. Many animals, including humans, cannot digest cellulose."
        }
      ],
      quiz: [
        {
          id: "2.3-q1",
          question: "The partially digested food in the rumen is called:",
          options: ["Chyme", "Cud", "Bolus", "Cellulose"],
          correctAnswerIndex: 1,
          explanation: "In the rumen, food is partially digested and known as cud."
        }
      ]
    },
    {
      id: "2.4",
      title: "Feeding and Digestion in Amoeba",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Amoeba is a microscopic single-celled organism found in pond water. It constantly changes its shape and position. It pushes out one, or more finger-like projections, called pseudopodia or false feet for movement and capture of food."
        },
        {
          type: "definition",
          content: "Food Vacuole: When amoeba senses food, it pushes out pseudopodia around the food particle and engulfs it. The food becomes trapped in a food vacuole."
        },
        {
          type: "text",
          content: "Digestive juices are secreted into the food vacuole. They act on the food and break it down into simpler substances."
        }
      ],
      quiz: [
        {
          id: "2.4-q1",
          question: "Amoeba captures food using:",
          options: ["Cilia", "Tentacles", "Pseudopodia", "Flagella"],
          correctAnswerIndex: 2,
          explanation: "Pseudopodia (false feet) are used for movement and capturing food."
        }
      ]
    }
  ]
};
