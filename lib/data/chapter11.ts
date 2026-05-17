import { Chapter } from "../curriculumData";

export const chapter11: Chapter = {
  id: "11",
  title: "Light",
  subject: "Physics",
  description: "Understand reflection, mirrors, lenses, and the splitting of white light.",
  topics: [
    {
      id: "11.1",
      title: "Light Travels Along a Straight Line",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "You might have seen a beam of sunlight when it enters a room through a narrow opening or a hole. You may have also seen beams of light from the headlamps of scooters, cars and engines of trains."
        },
        {
          type: "important",
          content: "These experiences suggest that light travels along straight lines."
        }
      ],
      quiz: [
        {
          id: "11.1-q1",
          question: "How does light travel?",
          options: ["In curved lines", "In straight lines", "In zig-zag paths", "In circles"],
          correctAnswerIndex: 1,
          explanation: "Light travels in straight lines."
        }
      ]
    },
    {
      id: "11.2",
      title: "Reflection of Light",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "One way to change the direction of light is to let it fall on a shiny surface. For example, a shining stainless steel plate or a shining steel spoon can change the direction of light."
        },
        {
          type: "definition",
          content: "Reflection of Light: Any polished or a shiny surface can act as a mirror. This change of direction by a mirror is called reflection of light."
        },
        {
          type: "important",
          content: "An image formed by a plane mirror is erect and of the same size as the object. Also, in an image formed by a mirror the left side of the object is seen on the right side in the image, and right side of the object appears to be on the left side in the image."
        }
      ],
      quiz: [
        {
          id: "11.2-q1",
          question: "The change of direction of light by a mirror is called:",
          options: ["Refraction", "Reflection", "Diffraction", "Dispersion"],
          correctAnswerIndex: 1,
          explanation: "A mirror reflects light back, changing its direction."
        }
      ]
    },
    {
      id: "11.3",
      title: "Playing with Spherical Mirrors",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "The curved shining surface of a spoon acts as a mirror. The most common example of a curved mirror is a spherical mirror."
        },
        {
          type: "definition",
          content: "Concave Mirror: If the reflecting surface of a spherical mirror is concave (inner surface), it is called a concave mirror."
        },
        {
          type: "definition",
          content: "Convex Mirror: If the reflecting surface is convex (outer surface), then it is a convex mirror."
        },
        {
          type: "example",
          content: "Concave mirrors are used by dentists to see an enlarged image of the teeth. Convex mirrors are used as side-view mirrors in vehicles because they form erect, smaller images and cover a larger area."
        }
      ],
      quiz: [
        {
          id: "11.3-q1",
          question: "Which mirror is used as a rear-view mirror in vehicles?",
          options: ["Plane mirror", "Concave mirror", "Convex mirror", "None of these"],
          correctAnswerIndex: 2,
          explanation: "Convex mirrors form smaller, erect images, giving a wider field of view."
        }
      ]
    },
    {
      id: "11.4",
      title: "Sunlight - White or Coloured?",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "Have you ever seen a rainbow in the sky? It appears usually after the rain when the sun is low in the sky. The rainbow is seen as a large arc in the sky with many colours."
        },
        {
          type: "important",
          content: "There are seven colours in a rainbow. They are red, orange, yellow, green, blue, indigo and violet (VIBGYOR)."
        },
        {
          type: "definition",
          content: "Spectrum: Sunlight is said to be white light. This means that the white light consists of seven colours. A prism can split sunlight into these seven colours."
        }
      ],
      quiz: [
        {
          id: "11.4-q1",
          question: "How many colours are there in white sunlight?",
          options: ["3", "5", "7", "9"],
          correctAnswerIndex: 2,
          explanation: "White light is composed of seven distinct colours."
        }
      ]
    }
  ]
};
