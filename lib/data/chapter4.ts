import { Chapter } from "../curriculumData";

export const chapter4: Chapter = {
  id: "4",
  title: "Acids, Bases and Salts",
  subject: "Chemistry",
  description: "Investigate natural indicators, neutralisation reactions, and salts.",
  topics: [
    {
      id: "4.1",
      title: "Acids and Bases",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Curd, lemon juice, orange juice, and vinegar taste sour. These substances taste sour because they contain acids. The chemical nature of such substances is acidic."
        },
        {
          type: "definition",
          content: "Acid: The word acid comes from the Latin word 'acere' which means sour. The acids in these substances are natural acids."
        },
        {
          type: "text",
          content: "What about baking soda? Does it also taste sour? If not, what is its taste? Since it does not taste sour it means that it has no acids in it. It is bitter in taste. If you rub its solution between fingers, it feels soapy."
        },
        {
          type: "definition",
          content: "Base: Substances like baking soda which are bitter in taste and feel soapy on touching are known as bases. The nature of such substances is said to be basic."
        },
        {
          type: "important",
          content: "We cannot taste every substance to find its nature. Special type of substances are used to test whether a substance is acidic or basic. These substances are known as indicators."
        }
      ],
      quiz: [
        {
          id: "4.1-q1",
          question: "Substances that are bitter in taste and feel soapy are called:",
          options: ["Acids", "Bases", "Salts", "Indicators"],
          correctAnswerIndex: 1,
          explanation: "Bases have a bitter taste and a slippery/soapy feel."
        }
      ]
    },
    {
      id: "4.2",
      title: "Neutralisation",
      simulatorType: "acids-bases",
      contentBlocks: [
        {
          type: "text",
          content: "We have learned that acids turn blue litmus red and bases turn red litmus blue. Let us see what happens when an acid is mixed with a base."
        },
        {
          type: "definition",
          content: "Neutralisation: The reaction between an acid and a base is known as neutralisation. Salt and water are produced in this process with the evolution of heat."
        },
        {
          type: "formula",
          content: "Acid + Base -> Salt + Water (Heat is evolved)"
        },
        {
          type: "example",
          content: "Hydrochloric acid (HCl) + Sodium hydroxide (NaOH) -> Sodium chloride (NaCl) + Water (H2O)"
        },
        {
          type: "important",
          content: "In neutralisation reaction a new substance is formed. This is called salt. Salt may be acidic, basic or neutral in nature."
        }
      ],
      quiz: [
        {
          id: "4.2-q1",
          question: "What are the products of a neutralisation reaction?",
          options: ["Acid and Water", "Base and Salt", "Salt and Water", "Only Salt"],
          correctAnswerIndex: 2,
          explanation: "When an acid reacts with a base, they neutralize each other to form salt and water."
        },
        {
          id: "4.2-q2",
          question: "Which of the following is produced when HCl reacts with NaOH?",
          options: ["Calcium Carbonate", "Sodium Chloride", "Sulphuric Acid", "Ammonium Hydroxide"],
          correctAnswerIndex: 1,
          explanation: "Sodium Chloride (table salt) is formed."
        }
      ]
    },
    {
      id: "4.3",
      title: "Neutralisation in Everyday Life",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Neutralisation is very important in our everyday life, helping to solve problems related to indigestion, ant bites, and soil treatment."
        },
        {
          type: "example",
          content: "Indigestion: Our stomach contains hydrochloric acid. Too much acid causes indigestion. We take an antacid such as milk of magnesia (which contains magnesium hydroxide, a base) to neutralize the excessive acid."
        },
        {
          type: "example",
          content: "Ant bite: The sting of an ant contains formic acid. When an ant bites, it injects the acidic liquid into the skin. The effect can be neutralized by rubbing moist baking soda (sodium hydrogen carbonate) or calamine solution."
        },
        {
          type: "example",
          content: "Soil treatment: When the soil is too acidic, it is treated with bases like quick lime (calcium oxide) or slaked lime (calcium hydroxide). If the soil is basic, organic matter (compost) is added which releases acids."
        }
      ],
      quiz: [
        {
          id: "4.3-q1",
          question: "Which acid is injected into the skin by an ant bite?",
          options: ["Lactic acid", "Hydrochloric acid", "Formic acid", "Acetic acid"],
          correctAnswerIndex: 2,
          explanation: "Ant sting contains formic acid which causes irritation."
        }
      ]
    }
  ]
};
