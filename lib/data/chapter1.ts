import { Chapter } from "../curriculumData";

export const chapter1: Chapter = {
  id: "1",
  title: "Exploration: Entering the World of Secondary Science",
  subject: "Physics",
  description: "Learn how scientific ideas help us make sense of nature, technology, and our place within them — through observation, modeling, and the language of science.",
  topics: [
    // ─────────────────────────────────────────────────────────────
    // TOPIC 1.1 – The World of Secondary Science
    // ─────────────────────────────────────────────────────────────
    {
      id: "1.1",
      title: "The World of Secondary Science",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "image",
          content: "A magnifying glass and a compass — the symbols of this textbook. The magnifying glass represents careful observation; the compass represents the need for direction in exploration.",
          diagramUrl: "/images/chapter1/magnifying_compass.png"
        },
        {
          type: "text",
          content: "In the middle stage, science invited you to be curious and observe the world closely, to ask questions, and to find out how things work. As you now enter the secondary stage, this journey continues, but with an emphasis on deep exploration."
        },
        {
          type: "important",
          content: "Science is not only about WHAT we know, but also about HOW we know it — how observations lead to measurements, how patterns are expressed using symbols and equations, how models are built to represent complex systems, and how ideas are tested, often revised, and sometimes even discarded."
        },
        {
          type: "definition",
          content: "Models: Simplified ways of looking at real systems that focus only on what is most important for a given question. The natural world is complex, and studying it in full detail is often impossible. To make sense of this complexity, science uses models."
        },
        {
          type: "text",
          content: "Building such models involves making assumptions and deliberately ignoring certain details. In physics, a moving car may be represented as a single point. In chemistry, atoms and molecules are drawn as spheres and bonds. In biology, cells are shown as diagrams highlighting key parts. In earth science, the Earth may be treated as a smooth sphere layered into distinct regions."
        },
        {
          type: "example",
          content: "Example 1.1 — A Cricket Shot: Think of a cricket ball being hit for a six. To make a simple model, we ask: 'Will the ball cross the boundary without hitting the ground first?'. For this question, the mass of the ball and its speed and direction are the most important factors. Air resistance, the spin of the ball, and the stitching have smaller effects that can be ignored in a simple model. As we build more complex models, we add those details back for greater accuracy.",
          imageUrl: "/images/chapter1/cricket_shot.png"
        }
      ],
      quiz: [
        {
          id: "1.1-q1",
          question: "Why do scientists use models?",
          options: [
            "Because reality is too simple",
            "To focus on what is most important for a given question",
            "To avoid doing experiments",
            "Because mathematics requires models"
          ],
          correctAnswerIndex: 1,
          explanation: "Models simplify real systems to focus on the key variables needed to answer a specific question, ignoring unnecessary complexity."
        },
        {
          id: "1.1-q2",
          question: "In a simple model of a cricket ball's trajectory, which factor can be IGNORED?",
          options: [
            "Mass of the ball",
            "Speed of the ball",
            "Direction of the hit",
            "Stitching of the seam"
          ],
          correctAnswerIndex: 3,
          explanation: "In a simple model, we focus on mass, speed, and direction. The stitching has a smaller effect and can be ignored at first."
        }
      ]
    },
    // ─────────────────────────────────────────────────────────────
    // TOPIC 1.2 – The Language of Science
    // ─────────────────────────────────────────────────────────────
    {
      id: "1.2",
      title: "The Language of Science",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "As you explore science more deeply, you will notice that it uses language in a very careful and precise way. Many words that we use in everyday life, such as force, work, cell, or reaction, have very specific meanings in science."
        },
        {
          type: "definition",
          content: "Symbols and Units: Quantities such as mass, velocity, force, and electric current are represented by symbols like m, v, F, and I, each associated with a defined unit. Science uses this shared language so that scientists across the world can describe observations, compare results, and build ideas clearly and unambiguously."
        },
        {
          type: "image",
          content: "Fig. 1.1 — A vegetable seller using a pan balance. Standard units like the kilogram ensure that measurements are consistent everywhere, enabling fair trade and scientific comparison.",
          diagramUrl: "/images/chapter1/pan_balance.png"
        },
        {
          type: "important",
          content: "Standard (SI) units allow scientific results to be compared internationally. When we buy rice or vegetables, we expect a kilogram to mean the same amount everywhere. Measurements are based on agreed international standards, not local objects or opinions."
        },
        {
          type: "example",
          content: "Real-World Disaster: Airplane Fuel Miscalculation — A passenger aircraft once ran out of fuel mid-flight because the ground crew used the density of fuel in pounds per litre instead of kilograms per litre. The aircraft was about 15,000 litres short of fuel. Luckily, the pilot could glide to an emergency landing. This shows why using standard SI units everywhere avoids dangerous errors.",
          imageUrl: "/images/chapter1/airplane_fuel.png"
        },
        {
          type: "text",
          content: "To make science even more precise, mathematics is used to express relationships between quantities. Mathematics allows these relationships to be expressed clearly and tested carefully. An equation in science is not just a calculation tool — it is a compact statement about how things are related."
        },
        {
          type: "example",
          content: "Why is the speed of light denoted by 'c'? It comes from the Latin word 'celeritas', meaning speed. Today, the speed of light is a fundamental physical constant, defined to be exactly 299,792,458 m/s. Scientific symbols like this often come from history and international agreements, not necessarily abbreviations of English words.",
          imageUrl: "/images/chapter1/speed_of_light.png"
        }
      ],
      quiz: [
        {
          id: "1.2-q1",
          question: "Why are standard (SI) units used everywhere?",
          options: [
            "They avoid conversions and dangerous errors",
            "They are historical traditions",
            "They make calculations more difficult",
            "They are easier to memorize"
          ],
          correctAnswerIndex: 0,
          explanation: "Using standard units everywhere avoids conversions and potentially dangerous errors, as seen in the airplane fuel incident."
        },
        {
          id: "1.2-q2",
          question: "The symbol 'c' for the speed of light comes from which Latin word?",
          options: ["Candela", "Celeritas", "Celsius", "Charge"],
          correctAnswerIndex: 1,
          explanation: "'c' comes from the Latin 'celeritas', meaning speed."
        }
      ]
    },
    // ─────────────────────────────────────────────────────────────
    // TOPIC 1.3 – Theories, Laws, and Predictions
    // ─────────────────────────────────────────────────────────────
    {
      id: "1.3",
      title: "Theories, Laws, and Predictions",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "As observations are repeated, measurements refined, and ideas tested through experiments, we can organise our understanding of the world in a systematic way. In the secondary stage, you will come across terms such as laws, theories, and principles."
        },
        {
          type: "definition",
          content: "Scientific Law: A law usually describes a regular pattern observed in nature, often expressed using words or mathematical relationships. For example, Newton's laws of motion describe the jerk felt when a bus stops suddenly."
        },
        {
          type: "definition",
          content: "Scientific Theory: A theory goes a step further and provides an explanation of WHY those patterns occur, based on evidence gathered over time. For example, the atomic theory explains how molecules are formed."
        },
        {
          type: "definition",
          content: "Scientific Principle: Principles are broad ideas that help us make sense in a given situation. For example, the principle of conservation of energy applies when climbing stairs."
        },
        {
          type: "important",
          content: "In science, a THEORY does not mean a guess or untested idea. It is an explanation based on careful testing and critical examination. Scientific theories are always open to improvement and often change as new evidence becomes available. This openness to being corrected by nature itself is what makes science powerful."
        },
        {
          type: "text",
          content: "One of the most remarkable strengths of science is its ability to make predictions. When laws, theories, and models are well established, they allow us to anticipate what will happen under new or different conditions, often before we even perform an experiment."
        },
        {
          type: "example",
          content: "Example 1.2 — How do we check predictions? Varsha told her friend Meghna: 'It will rain this afternoon because the clouds look dark.' Good scientific thinking pushes us to ask measurable questions: What is today's wind speed and direction? Is the temperature dropping like it did before the recent rains? What is the humidity? Was it above 80% the last time it rained? These questions look for measurable evidence rather than simple observations.",
          imageUrl: "/images/chapter1/weather_prediction.png"
        },
        {
          type: "image",
          content: "Fig. 1.2 — A total solar eclipse. A commonly circulated claim is that 'food should not be eaten during an eclipse because it becomes harmful.' But an eclipse is just a play of shadows. No physical, chemical, or biological mechanism changes food during an eclipse.",
          diagramUrl: "/images/chapter1/solar_eclipse.png"
        },
        {
          type: "important",
          content: "Scientific claims must be testable. Ask: What physical change actually occurs during an eclipse? Does food temperature change? Does any chemical reaction happen? When no evidence supports a claim, science requires us to reject it — even if it is widely believed."
        }
      ],
      quiz: [
        {
          id: "1.3-q1",
          question: "What is the difference between a scientific law and a scientific theory?",
          options: [
            "A law is a guess, a theory is a fact",
            "A law explains why patterns occur, a theory describes the pattern",
            "A law describes a regular pattern in nature, a theory explains WHY the pattern occurs",
            "There is no difference"
          ],
          correctAnswerIndex: 2,
          explanation: "Laws describe patterns (often mathematically), while theories provide explanations for those patterns based on evidence."
        },
        {
          id: "1.3-q2",
          question: "Why is it wrong to say 'it's just a theory' to dismiss a scientific explanation?",
          options: [
            "Because theories are always true",
            "Because in science, a theory is an explanation based on careful testing, not a guess",
            "Because theories cannot be changed",
            "Because only laws matter in science"
          ],
          correctAnswerIndex: 1,
          explanation: "In science, 'theory' means a well-tested explanation based on evidence — not an informal guess or speculation."
        }
      ]
    },
    // ─────────────────────────────────────────────────────────────
    // TOPIC 1.4 – Estimation and Problem Solving
    // ─────────────────────────────────────────────────────────────
    {
      id: "1.4",
      title: "Estimation and Problem Solving",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "As you continue your journey through science, you will gradually develop habits of thinking that are useful far beyond the classroom. A helpful strategy is to first understand the situation being studied, identify the quantities that matter, and then make a rough estimate to check whether an answer makes sense."
        },
        {
          type: "important",
          content: "Learning to estimate helps you build intuition, detect errors, and develop confidence in your thinking. Science values careful reasoning — perhaps much more than accurate calculations! Often, an approximate estimate is enough to tell us whether a result is reasonable or impossible."
        },
        {
          type: "image",
          content: "Fig. 1.3 — Rice being cooked on a gas stove. How much rice would feed a family of four for a month? An adult needs about 2,000–2,500 kcal per day. A rough estimate helps us check whether our answer is reasonable — a few tonnes is too much, while 100g per month is clearly too little.",
          diagramUrl: "/images/chapter1/rice_cooking.png"
        },
        {
          type: "example",
          content: "Example 1.3 — Estimate how many litres of air you breathe in one day. At rest, we take about 12–15 breaths per minute. With 60×24 = 1,440 minutes in a day, that's roughly 18,000–22,000 breaths per day. One breath fills about 0.5 litres (it takes 4–5 breaths to fill a 2-litre balloon). So we breathe approximately 10,000 litres of air per day! We can verify this estimate: filling 3 balloons per minute × 2 litres × 1,440 minutes = 8,640 litres — reasonably close."
        },
        {
          type: "text",
          content: "Solving real problems often requires connecting ideas from several branches of science. The divisions into physics, chemistry, biology, and earth science are made by us to help organise knowledge — the natural world does not have any such boundaries."
        },
        {
          type: "image",
          content: "Fig. 1.4 — A collection of surgical masks. Understanding how a mask works requires physics (particle motion and electrostatic attraction), chemistry (properties of polymer fibres), biology (size and behaviour of viruses), and mathematics (modelling airflow and filtration efficiency). Real science is always interdisciplinary.",
          diagramUrl: "/images/chapter1/mask_filtration.png"
        },
        {
          type: "important",
          content: "Science is not just a collection of facts, equations, or experiments. It is a human activity shaped by curiosity, creativity, collaboration, and careful questioning. It grows as people ask questions, test ideas, share results, and learn from mistakes."
        }
      ],
      quiz: [
        {
          id: "1.4-q1",
          question: "Approximately how many litres of air do you breathe in one day?",
          options: ["100 litres", "1,000 litres", "10,000 litres", "100,000 litres"],
          correctAnswerIndex: 2,
          explanation: "About 18,000 breaths/day × 0.5 litres/breath ≈ 10,000 litres per day."
        },
        {
          id: "1.4-q2",
          question: "Why is estimation a useful scientific skill?",
          options: [
            "Because exact calculations are too hard",
            "To check whether a result is reasonable or impossible",
            "To avoid doing experiments",
            "Because mathematics is not used in science"
          ],
          correctAnswerIndex: 1,
          explanation: "Estimation helps build intuition and verify if a detailed answer or claim makes sense — detecting errors before committing to full calculations."
        }
      ]
    }
  ]
};
