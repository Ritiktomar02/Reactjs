
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Hyper Tool Multi Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS",
  },
  {
    id: 3,
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Flask", "Laravel"],
    answer: "React",
  },
  {
    id: 4,
    question: "Which database is a NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    answer: "MongoDB",
  },
  {
    id: 5,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Internet",
      "Application Process Integration",
      "Automated Programming Interface",
    ],
    answer: "Application Programming Interface",
  },
  {
    id: 6,
    question: "Which HTTP method is used to create data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "POST",
  },
  {
    id: 7,
    question: "Which of the following is used for version control?",
    options: ["Docker", "Git", "NPM", "Jenkins"],
    answer: "Git",
  },
  {
    id: 8,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "float"],
    answer: "var",
  },
  {
    id: 9,
    question: "Which company developed Node.js?",
    options: ["Google", "Microsoft", "Netflix", "Joyent"],
    answer: "Joyent",
  },
  {
    id: 10,
    question: "Which of the following is a backend framework?",
    options: ["Express.js", "Bootstrap", "Tailwind", "Figma"],
    answer: "Express.js",
  },
];

  return (
    <UserContext.Provider value={{ quizData }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
