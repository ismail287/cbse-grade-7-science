import { Chapter } from "../curriculumData";

export const chapter10: Chapter = {
  id: "10",
  title: "Electric Current and Its Effects",
  subject: "Physics",
  description: "Draw circuit diagrams and explore electromagnets and heating effects.",
  topics: [
    {
      id: "10.1",
      title: "Symbols of Electric Components",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Some common electric components can be represented by symbols. In the symbol for the electric cell, the longer line represents the positive terminal and the thicker, shorter line represents the negative terminal."
        },
        {
          type: "definition",
          content: "Battery: A combination of two or more cells is called a battery. The positive terminal of one cell is connected to the negative terminal of the next cell."
        },
        {
          type: "important",
          content: "Many devices such as torches, transistors, toys, TV remote controls use batteries."
        }
      ],
      quiz: [
        {
          id: "10.1-q1",
          question: "In the symbol for an electric cell, what does the longer line represent?",
          options: ["Negative terminal", "Positive terminal", "Switch", "Wire"],
          correctAnswerIndex: 1,
          explanation: "The longer line represents the positive terminal."
        }
      ]
    },
    {
      id: "10.2",
      title: "Heating Effect of Electric Current",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "When an electric current flows through a wire, the wire gets hot. It is the heating effect of the current. You might have seen an electric room heater or an electric heater used for cooking."
        },
        {
          type: "definition",
          content: "Element: All these contain a coil of wire. This coil of wire is called an element."
        },
        {
          type: "definition",
          content: "Electric Fuse: Wires made from some special materials melt quickly and break when large electric currents are passed through them. These wires are used for making electric fuses, which prevent fires and damage to electrical appliances."
        }
      ],
      quiz: [
        {
          id: "10.2-q1",
          question: "What is a safety device based on the heating effect of electric current?",
          options: ["Battery", "Switch", "Fuse", "Bulb"],
          correctAnswerIndex: 2,
          explanation: "A fuse melts and breaks the circuit if the current exceeds a safe limit."
        }
      ]
    },
    {
      id: "10.3",
      title: "Magnetic Effect of Electric Current",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "When electric current passes through a wire, it behaves like a magnet. This is the magnetic effect of the electric current."
        },
        {
          type: "example",
          content: "Hans Christian Oersted was the first person who noticed the deflection of compass needle every time the current was passed through the wire."
        },
        {
          type: "definition",
          content: "Electromagnet: A current-carrying coil of an insulated wire wrapped around a piece of iron is called an electromagnet."
        }
      ],
      quiz: [
        {
          id: "10.3-q1",
          question: "Who discovered the magnetic effect of electric current?",
          options: ["Isaac Newton", "Thomas Edison", "Hans Christian Oersted", "Albert Einstein"],
          correctAnswerIndex: 2,
          explanation: "Oersted discovered that a compass needle deflects near a current-carrying wire."
        }
      ]
    }
  ]
};
