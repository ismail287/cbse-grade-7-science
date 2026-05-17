import { Chapter } from "../curriculumData";

export const chapter1: Chapter = {
  id: "1",
  title: "Exploration: Entering the World of Secondary Science",
  subject: "Physics",
  description: "Learn how scientific ideas help us make sense of nature, technology, and our place within them.",
  topics: [
    {
      id: "1.1",
      title: "The World of Secondary Science",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "In the middle stage, science invited you to be curious and observe the world closely, to ask questions, and to find out how things work. As you now enter the secondary stage, this journey continues, but with an emphasis on deep exploration."
        },
        {
          type: "important",
          content: "Science is not only about what we know, but also about how we know it — how observations lead to measurements, how patterns are expressed using symbols and equations, how models are built to represent complex systems, and how ideas are tested, often revised, and sometimes even discarded."
        },
        {
          type: "image",
          content: "To reflect the approach of this textbook, the page numbers have been thoughtfully designed, and are framed by a magnifying glass and a compass. The magnifying glass symbolises careful observation. The compass reminds us that exploration also needs direction.",
          diagramUrl: "/images/chapter1/magnifying_compass.png"
        },
        {
          type: "definition",
          content: "Models: These are simplified ways of looking at real systems that focus only on what is most important for a given question. The natural world is complex, and studying it in full detail is often impossible. To make sense of this complexity, science uses models."
        },
        {
          type: "example",
          content: "In physics, a moving car may be represented as a single point, while in chemistry, atoms and molecules are drawn as spheres and bonds. In biology, cells are shown as diagrams highlighting key parts, and in earth science, the Earth may be treated as a smooth sphere layered into distinct regions."
        },
        {
          type: "example",
          content: "Example 1.1: A cricket shot. Think of a cricket ball being hit for a six. You want to make a simple model. We must ask, 'Will the ball cross the boundary without hitting the ground first?'. The mass of the ball, and the speed and direction in which it has been hit will be very important. Air resistance, the spin of the ball, and the stitching of the threads at the seam have smaller effects that can be ignored in a simple model."
        }
      ],
      quiz: [
        {
          id: "1.1-q1",
          question: "Why do scientists use models?",
          options: ["Because reality is too simple", "To focus on what is most important for a given question", "To avoid doing experiments", "Because mathematics requires models"],
          correctAnswerIndex: 1,
          explanation: "Models simplify real systems to focus on the key variables needed to answer a specific question."
        }
      ]
    },
    {
      id: "1.2",
      title: "The Language of Science",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "As you explore science more deeply, you will notice that it uses language in a very careful and precise way. Many words that we use in everyday life, such as force, work, cell, or reaction, have specific meanings in science."
        },
        {
          type: "definition",
          content: "Symbols and Units: Quantities, such as mass, velocity, force, and electric current are represented by symbols like m, v, F, and I, each associated with a defined unit."
        },
        {
          type: "important",
          content: "Science uses a shared language of specific terms, symbols, and units. This allows scientists across the world to describe observations, compare results, and build ideas clearly and unambiguously."
        },
        {
          type: "image",
          content: "A vegetable seller using a pan balance to measure mass.",
          diagramUrl: "/images/chapter1/pan_balance.png"
        },
        {
          type: "example",
          content: "Airplane fuel miscalculation: In a well-known incident, a passenger aircraft ran out of fuel mid-flight due to a mix-up in units. The ground crew miscalculated the fuel required, since they used the density of fuel in pounds (lb) per litre rather than kilograms (kg) per litre."
        },
        {
          type: "text",
          content: "To make this even more precise, science often turns to mathematics. Mathematics allows relationships between quantities to be expressed clearly and tested carefully."
        },
        {
          type: "example",
          content: "Why is the speed of light denoted by 'c'? It comes from the Latin word celeritas, meaning speed. Today, the speed of light is one of the physical constants, defined to be exactly 299,792,458 m/s."
        }
      ],
      quiz: [
        {
          id: "1.2-q1",
          question: "Why are standard (SI) units used everywhere?",
          options: ["They avoid conversions and errors", "They are historical traditions", "They make calculations more difficult", "They are easier to memorize"],
          correctAnswerIndex: 0,
          explanation: "Using standard units everywhere avoids conversions and potentially dangerous errors."
        }
      ]
    },
    {
      id: "1.3",
      title: "Theories, Laws, and Predictions",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "definition",
          content: "Scientific Law: A law usually describes a regular pattern observed in nature, often expressed using words or mathematical relationships. For example, Newton's laws of motion."
        },
        {
          type: "definition",
          content: "Scientific Theory: A theory goes a step further and provides an explanation of why those patterns occur, usually based on evidence gathered over time. For example, the atomic theory explains how molecules are formed."
        },
        {
          type: "definition",
          content: "Scientific Principle: Principles are broad ideas that help us make sense in a given situation. For example, the principle of conservation of energy."
        },
        {
          type: "important",
          content: "In science, a theory does not mean a guess or an untested idea, it is an explanation based on careful testing and critical examination. These ideas are always open to improvement and often change as new evidence becomes available."
        },
        {
          type: "text",
          content: "One of the most remarkable strengths of science is its ability to make predictions. When laws, theories, and models are well established, they allow us to anticipate what will happen under new or different conditions."
        },
        {
          type: "example",
          content: "Example 1.2: How do we check predictions? Varsha told her friend Meghna, 'It will rain this afternoon because the clouds look dark'. Meghna could ask Varsha for measurable evidence: 'What is today's wind speed and direction? Is the temperature dropping?'"
        },
        {
          type: "example",
          content: "Checking 'viral' claims on social media: Is eating food harmful during an eclipse? An eclipse is just a play of shadows. What physical change occurs during an eclipse? Does temperature change significantly? You will conclude that no physical, chemical, or biological mechanism supports such a claim."
        }
      ],
      quiz: [
        {
          id: "1.3-q1",
          question: "What is the difference between a scientific law and a scientific theory?",
          options: ["A law is a guess, a theory is a fact", "A law explains why patterns occur, a theory describes the pattern", "A law describes a regular pattern in nature, a theory explains why the pattern occurs", "There is no difference"],
          correctAnswerIndex: 2,
          explanation: "Laws describe patterns (often with mathematics), while theories provide explanations for those patterns based on evidence."
        }
      ]
    },
    {
      id: "1.4",
      title: "Estimation and Problem Solving",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Learning to estimate helps you build intuition, detect errors, and develop confidence in your thinking. Exact values are not always necessary, especially in the early stages of reasoning. Often, an approximate estimate is enough to tell us whether a result is reasonable or impossible."
        },
        {
          type: "image",
          content: "Rice being cooked on a gas stove",
          diagramUrl: "/images/chapter1/rice_cooking.png"
        },
        {
          type: "example",
          content: "How much rice would feed a family of four for a month? An average adult needs about 2000 - 2500 kilocalories per day. We can estimate the daily requirement and check whether the answer makes sense. A few tonnes is far too much, while 100g for a month is clearly too little."
        },
        {
          type: "example",
          content: "Example 1.3: Estimate how many litres of air you breathe in one day. We take roughly 18-22 thousand breaths a day. One breath is perhaps about 0.5 litre (since it takes 4-5 breaths to fill a 2-litre balloon). So we breathe in about 10,000 litres of air a day!"
        },
        {
          type: "important",
          content: "To make sense of the world fully, we need to connect multiple ways of knowing and expressing ideas, each enriching the other. Solving real problems requires knowledge from several branches of science."
        },
        {
          type: "example",
          content: "How does a mask really work? Understanding how a mask works requires concepts from physics (particle motion), chemistry (properties of polymer fibres), biology (behaviour of viruses), and mathematics (modelling filtration efficiency)."
        }
      ],
      quiz: [
        {
          id: "1.4-q1",
          question: "Why is estimation a useful scientific skill?",
          options: ["Because exact calculations are too hard", "To tell whether a result is reasonable or impossible", "To avoid doing experiments", "Because math is not used in science"],
          correctAnswerIndex: 1,
          explanation: "Estimation helps build intuition and verify if a detailed answer or claim makes sense in the real world."
        }
      ]
    }
  ]
};
