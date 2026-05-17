import { Chapter } from "../curriculumData";

export const chapter13: Chapter = {
  id: "13",
  title: "Wastewater Story",
  subject: "Chemistry",
  description: "Examine water treatment plants and sanitation.",
  topics: [
    {
      id: "13.1",
      title: "What is Sewage?",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Clean water that is fit for use is unfortunately not available to all. We use water for various purposes and make it dirty."
        },
        {
          type: "definition",
          content: "Sewage: Sewage is wastewater released by homes, industries, hospitals, offices and other users. It also includes rainwater that has run down the street during a storm or heavy rain. Sewage is a liquid waste."
        },
        {
          type: "important",
          content: "Most of it is water, which has dissolved and suspended impurities. These impurities are called contaminants."
        }
      ],
      quiz: [
        {
          id: "13.1-q1",
          question: "The suspended impurities in sewage are called:",
          options: ["Minerals", "Nutrients", "Contaminants", "Vitamins"],
          correctAnswerIndex: 2,
          explanation: "Impurities that contaminate the water are known as contaminants."
        }
      ]
    },
    {
      id: "13.2",
      title: "Wastewater Treatment Plant (WWTP)",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Treatment of wastewater involves physical, chemical, and biological processes, which remove physical, chemical and biological matter that contaminates the wastewater."
        },
        {
          type: "definition",
          content: "Bar Screens: Wastewater is passed through bar screens. Large objects like rags, sticks, cans, plastic packets, napkins are removed."
        },
        {
          type: "definition",
          content: "Sludge: Solid feces settle at the bottom and are removed with a scraper. This is the sludge. A skimmer removes the floatable solids like oil and grease."
        },
        {
          type: "text",
          content: "The cleared water is called clarified water. Air is pumped into the clarified water to help aerobic bacteria to grow. Bacteria consume human waste, food waste, soaps and other unwanted matter still remaining in clarified water."
        }
      ],
      quiz: [
        {
          id: "13.2-q1",
          question: "Large solid objects are removed from wastewater by passing it through:",
          options: ["Bar screens", "Aerators", "Chlorinators", "Skimmers"],
          correctAnswerIndex: 0,
          explanation: "Bar screens physically block large debris."
        }
      ]
    },
    {
      id: "13.3",
      title: "Better Housekeeping Practices",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "One of the ways to minimise or eliminate waste and pollutants at their source is to see what you are releasing down the drain."
        },
        {
          type: "example",
          content: "Cooking oil and fats should not be thrown down the drain. They can harden and block the pipes. Chemicals like paints, solvents, insecticides, motor oil, medicines may kill microbes that help purify water."
        },
        {
          type: "important",
          content: "Used tealeaves, solid food remains, soft toys, cotton, sanitary towels, etc. should also be thrown in the dustbin."
        }
      ],
      quiz: [
        {
          id: "13.3-q1",
          question: "Why shouldn't cooking oil be thrown down the drain?",
          options: ["It smells bad", "It hardens and blocks pipes", "It causes rain", "It produces oxygen"],
          correctAnswerIndex: 1,
          explanation: "Fats and oils can solidify in the pipes, leading to blockages."
        }
      ]
    }
  ]
};
