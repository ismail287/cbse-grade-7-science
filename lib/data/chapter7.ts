import { Chapter } from "../curriculumData";

export const chapter7: Chapter = {
  id: "7",
  title: "Transportation in Animals and Plants",
  subject: "Biology",
  description: "Learn about the circulatory system, excretion, and transport of substances in plants.",
  topics: [
    {
      id: "7.1",
      title: "Circulatory System",
      simulatorType: "circulatory-system",
      contentBlocks: [
        {
          type: "text",
          content: "What happens when you get a cut on your body? Blood flows out. But what is blood? Blood is the fluid which flows in blood vessels."
        },
        {
          type: "definition",
          content: "Blood: It transports substances like digested food from the small intestine to the other parts of the body. It carries oxygen from the lungs to the cells of the body. It also transports waste for removal from the body."
        },
        {
          type: "important",
          content: "Blood is a liquid, which has cells of various kinds suspended in it. The fluid part of the blood is called plasma. One type of cells are the red blood cells (RBC) which contain a red pigment called haemoglobin. The blood also has white blood cells (WBC) which fight against germs that may enter our body."
        },
        {
          type: "definition",
          content: "Blood Vessels: There are different types of blood vessels in the body. Arteries carry oxygen-rich blood from the heart to all parts of the body. Veins are the vessels which carry carbon dioxide-rich blood from all parts of the body back to the heart."
        },
        {
          type: "definition",
          content: "Heart: The heart is an organ which beats continuously to act as a pump for the transport of blood. To avoid mixing up of blood rich in oxygen with the blood rich in carbon dioxide, the heart has four chambers."
        }
      ],
      quiz: [
        {
          id: "7.1-q1",
          question: "Which component of blood carries oxygen?",
          options: ["White blood cells", "Plasma", "Platelets", "Red blood cells"],
          correctAnswerIndex: 3,
          explanation: "Red blood cells contain haemoglobin which binds with oxygen."
        },
        {
          id: "7.1-q2",
          question: "Which blood vessels carry oxygen-rich blood away from the heart?",
          options: ["Arteries", "Veins", "Capillaries", "Ventricles"],
          correctAnswerIndex: 0,
          explanation: "Arteries carry oxygen-rich blood from the heart to all parts of the body."
        }
      ]
    },
    {
      id: "7.2",
      title: "Excretion in Animals",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Recall how carbon dioxide is removed as waste from the body through the lungs during exhalation. Also recall that the undigested food is removed during egestion."
        },
        {
          type: "definition",
          content: "Excretion: The process of removal of wastes produced in the cells of the living organisms is called excretion. The parts involved in excretion form the excretory system."
        },
        {
          type: "text",
          content: "The blood capillaries in the kidneys filter the blood. When the blood reaches the two kidneys, it contains both useful and harmful substances. The useful substances are absorbed back into the blood. The wastes dissolved in water are removed as urine."
        }
      ],
      quiz: [
        {
          id: "7.2-q1",
          question: "Which organ filters blood in the human body?",
          options: ["Liver", "Heart", "Kidney", "Lungs"],
          correctAnswerIndex: 2,
          explanation: "Kidneys filter the blood to remove wastes and produce urine."
        }
      ]
    },
    {
      id: "7.3",
      title: "Transport of Substances in Plants",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Plants take water and mineral nutrients from the soil through the roots and transport it to the leaves."
        },
        {
          type: "definition",
          content: "Vascular Tissue: The tissue for the transport of water and minerals in the plant is called the xylem. The tissue which transports food from the leaves to all parts of the plant is called the phloem."
        },
        {
          type: "definition",
          content: "Transpiration: Plants release a lot of water into the air through the process of transpiration. The evaporation of water from leaves generates a suction pull which can pull water to great heights in the tall trees."
        }
      ],
      quiz: [
        {
          id: "7.3-q1",
          question: "Which tissue is responsible for transporting food in plants?",
          options: ["Xylem", "Stomata", "Phloem", "Root Hair"],
          correctAnswerIndex: 2,
          explanation: "Phloem transports food (sugars) synthesized in the leaves to other parts of the plant."
        }
      ]
    }
  ]
};
