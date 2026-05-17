import { Chapter } from "../curriculumData";

export const chapter9: Chapter = {
  id: "9",
  title: "Motion and Time",
  subject: "Physics",
  description: "Calculate speed, interpret distance-time graphs, and study motion.",
  topics: [
    {
      id: "9.1",
      title: "Slow or Fast",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "We know that some vehicles move faster than others. Even the same vehicle may move faster or slower at different times. If vehicles are moving on a road in the same direction, we can easily tell which one of them is moving faster than the other."
        },
        {
          type: "text",
          content: "The distance moved by objects in a given interval of time can help us to decide which one is faster. For example, a bus covers a certain distance in 1 hour, and a car covers the same distance in 30 minutes. We say the car is moving faster."
        }
      ],
      quiz: [
        {
          id: "9.1-q1",
          question: "An object that covers a larger distance in a given time is:",
          options: ["Moving slower", "Moving faster", "At rest", "Moving in a circle"],
          correctAnswerIndex: 1,
          explanation: "Covering more distance in the same time indicates a higher speed."
        }
      ]
    },
    {
      id: "9.2",
      title: "Speed",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "definition",
          content: "Speed: The distance covered by an object in a unit time is called the speed of the object. When we say a car is moving at a speed of 50 km per hour, it implies that it will cover a distance of 50 km in one hour."
        },
        {
          type: "formula",
          content: "Speed = Total distance covered / Total time taken"
        },
        {
          type: "text",
          content: "In everyday life, we seldom find objects moving with a constant speed over long distances or for long durations of time. If the speed of an object moving along a straight line keeps changing, its motion is said to be non-uniform. If it moves with constant speed, the motion is uniform."
        }
      ],
      quiz: [
        {
          id: "9.2-q1",
          question: "What is the formula for calculating speed?",
          options: ["Time / Distance", "Distance × Time", "Distance / Time", "Distance + Time"],
          correctAnswerIndex: 2,
          explanation: "Speed is calculated by dividing the total distance covered by the total time taken."
        }
      ]
    },
    {
      id: "9.3",
      title: "Measurement of Time",
      simulatorType: "none",
      contentBlocks: [
        {
          type: "text",
          content: "If you did not have a clock, how would you decide what time of the day it is? Our ancestors noticed that many events in nature repeat themselves after definite intervals of time."
        },
        {
          type: "example",
          content: "For example, they found that the sun rises every day in the morning. The time between one sunrise and the next was called a day."
        },
        {
          type: "definition",
          content: "Simple Pendulum: The most common time measuring devices are clocks and watches. The working of clocks is rather complex. But all of them make use of some periodic motion. One of the most well-known periodic motions is that of a simple pendulum."
        },
        {
          type: "definition",
          content: "Time period: The time taken by the pendulum to complete one oscillation is called its time period."
        }
      ],
      quiz: [
        {
          id: "9.3-q1",
          question: "The motion of a simple pendulum is an example of:",
          options: ["Circular motion", "Periodic motion", "Linear motion", "Random motion"],
          correctAnswerIndex: 1,
          explanation: "The pendulum repeats its motion after regular intervals of time, making it periodic."
        }
      ]
    },
    {
      id: "9.4",
      title: "Distance-Time Graph",
      simulatorType: "motion",
      contentBlocks: [
        {
          type: "text",
          content: "You might have seen that newspapers, magazines, etc., present information in various forms of graphs to make it interesting. The type of graph showing the relation between distance and time is a line graph."
        },
        {
          type: "important",
          content: "The distance-time graph for the motion of an object moving with a constant speed is a straight line. If the line is curved, the speed is changing."
        },
        {
          type: "text",
          content: "To draw a graph, take a graph paper. Draw two perpendicular lines to represent the two axes. Mark the horizontal line as the X-axis and the vertical line as the Y-axis. Time is shown on the X-axis and distance on the Y-axis."
        }
      ],
      quiz: [
        {
          id: "9.4-q1",
          question: "What does the X-axis typically represent in a distance-time graph?",
          options: ["Distance", "Time", "Speed", "Acceleration"],
          correctAnswerIndex: 1,
          explanation: "Time is typically plotted on the horizontal X-axis."
        },
        {
          id: "9.4-q2",
          question: "A straight line on a distance-time graph indicates:",
          options: ["Zero speed", "Decreasing speed", "Constant speed", "Increasing speed"],
          correctAnswerIndex: 2,
          explanation: "A straight, inclined line indicates that the object is covering equal distances in equal time intervals."
        }
      ]
    }
  ]
};
