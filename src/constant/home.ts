import images from "../assets/index";

const {
  nodejs,
  reactjs,
  mongodb,
  nestjs,
  postgresql,
  myPic,
  program,
  tagCode,
  wedo80,
  chess,
  kat,
  makan,
} = images;

const skills = [
  {
    skill: "Node.js",
    icon: nodejs,
  },
  {
    skill: "Nest.js",
    icon: nestjs,
  },
  {
    skill: "MongoDB",
    icon: mongodb,
  },
  {
    skill: "PostgreSQL",
    icon: postgresql,
  },
  {
    skill: "React.js",
    icon: reactjs,
  },
];

const projects = [
  {
    logo: wedo80,
    title: "WeDo 80",
    description: `Built admin panel and mobile APIs
with Node.js, MongoDB, React.
Implemented WebSocket for real-
time chats.`,
    link: "https://b1s44.app.link/zCawOdCXsUb",
  },
  {
    logo: chess,
    title: "Chess Arena",
    description: `Built admin and game APIs for
tournaments with Node.js, MongoDB.
Integrated PayPal and coin-based
gameplay with Socket.io.`,
    link: "https://chessarena.app/",
  },
  {
    logo: kat,
    title: "KAT",
    description: `Developed core backend using
NestJS and MongoDB
Implemented real-time messaging
and notifications with WebSocket
Designed modular API architecture
with admin analytics.`,
    link: "",
  },
  {
    logo: makan,
    title: "Makan",
    description: `Developed full-stack features with
Node.js, MySQL, React
Integrated PayTabs and admin-
controlled pricing.`,
    link: "https://makan.cloud/",
  },
];

export default {
  skills,
  projects,
  images,
};
