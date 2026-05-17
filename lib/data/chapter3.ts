import { Chapter } from "../curriculumData";

export const chapter3: Chapter = {
  id: "3",
  title: "Heat",
  subject: "Physics",
  description: "Understand the concepts of conduction, convection, radiation, and reading thermometers.",
  topics: [
    {
      id: "3.1",
      title: "Hot and Cold",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "In our daily life, we come across a number of objects. Some of them are hot and some of them are cold. We usually decide whether an object is hot or cold by touching it."
        },
        {
          type: "important",
          content: "Our sense of touch is not always a reliable guide to the degree of hotness of an object."
        },
        {
          type: "definition",
          content: "Temperature: A reliable measure of the hotness of an object is its temperature. Temperature is measured by a device called a thermometer."
        }
      ],
      quiz: [
        {
          id: "3.1-q1",
          question: "Which device is used to measure temperature?",
          options: ["Barometer", "Thermometer", "Speedometer", "Odometer"],
          correctAnswerIndex: 1,
          explanation: "A thermometer is used to measure the temperature or hotness of an object."
        }
      ]
    },
    {
      id: "3.2",
      title: "Measuring Temperature",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "The thermometer that measures our body temperature is called a clinical thermometer."
        },
        {
          type: "definition",
          content: "Clinical Thermometer: Consists of a long, narrow, uniform glass tube with a bulb at one end containing mercury. It reads temperature from 35°C to 42°C."
        },
        {
          type: "important",
          content: "The normal temperature of a human body is 37°C."
        },
        {
          type: "definition",
          content: "Laboratory Thermometer: Used for measuring the temperature of other objects (not the human body). The range is generally from -10°C to 110°C."
        }
      ],
      quiz: [
        {
          id: "3.2-q1",
          question: "What is the normal temperature of a human body?",
          options: ["35°C", "37°C", "40°C", "42°C"],
          correctAnswerIndex: 1,
          explanation: "The normal human body temperature is generally accepted as 37°C."
        }
      ]
    },
    {
      id: "3.3",
      title: "Transfer of Heat",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "You might have observed that a frying pan becomes hot when kept on a flame. Heat flows from a hotter object to a colder object."
        },
        {
          type: "definition",
          content: "Conduction: The process by which heat is transferred from the hotter end to the colder end of an object. Generally, heat is transferred in solid objects by conduction."
        },
        {
          type: "definition",
          content: "Convection: When water is heated, the water near the flame gets hot, rises up, and cold water moves down to take its place. This mode of heat transfer is convection. It occurs in liquids and gases."
        },
        {
          type: "definition",
          content: "Radiation: From the sun, heat comes to us by another process known as radiation. The transfer of heat by radiation does not require any medium."
        }
      ],
      quiz: [
        {
          id: "3.3-q1",
          question: "The transfer of heat from the sun to the earth takes place by:",
          options: ["Conduction", "Convection", "Radiation", "Insulation"],
          correctAnswerIndex: 2,
          explanation: "Radiation does not require any material medium for heat transfer."
        }
      ]
    },
    {
      id: "3.4",
      title: "Kinds of Clothes We Wear in Summer and Winter",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "We prefer light-coloured clothes in summer and dark-coloured clothes in winter."
        },
        {
          type: "important",
          content: "Dark surfaces absorb more heat and, therefore, we feel comfortable with dark-coloured clothes in the winter. Light-coloured clothes reflect most of the heat that falls on them and, therefore, we feel more comfortable wearing them in the summer."
        },
        {
          type: "text",
          content: "In the winter, we use woollen clothes. Wool is a poor conductor of heat. Moreover, there is air trapped in between the wool fibres. This air prevents the flow of heat from our body to the cold surroundings."
        }
      ],
      quiz: [
        {
          id: "3.4-q1",
          question: "Why do we wear light colored clothes in summer?",
          options: ["They absorb heat", "They reflect heat", "They trap air", "They produce cold"],
          correctAnswerIndex: 1,
          explanation: "Light colors reflect heat and keep us cooler."
        }
      ]
    }
  ]
};
