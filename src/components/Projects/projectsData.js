import InstagramPhoto from "../../Assets/Projects/instagram-login.png";
import TodoAppPhoto from "../../Assets/Projects/dashboard-todo.png";
import EcommercePhoto from "../../Assets/Projects/apollo-pic.png";
import FantasyPhoto from "../../Assets/Projects/fantasy.png";
import DrinkkoPhoto from "../../Assets/Projects/drinkko.png";
import MeritPhoto from "../../Assets/Projects/merit.png";

let projects = [
  {
    title: "Stash101",
    technologies: "Vue.js | Pinia | Node.js | Express | MongoDB",
    imgPath: InstagramPhoto,
    description: "Stash101 is an immersive banking and investing simulation for students to learn financial literacy by navigating the complex world of personal finance—budgeting, paying bills, earning an income, saving, investing, and more. With Stash101, kindergarten through college students experience a safe space to explore real-world financial situations and practice informed decision-making around money.",
    demoLink: "https://www.stash.com/stash101/",
    id: 1,
  },
  {
    title: "Stash101 Fantasy",
    technologies: "Vue.js | Quasar | Xcode | Node.js | Express | MongoDB",
    imgPath: FantasyPhoto,
    description: 'Stash101 Fantasy Investing works like a sports style fantasy game, you can "draft" a "lineup" of stocks and ETFs, then compete against your friends and the public in weekly games. Within the game, you are only tracking the performance of the stocks you’ve "drafted", never investing any money, so the biggest risk you’re taking on is the competition!',
    demoLink: "https://apps.apple.com/us/app/stash101-fantasy-investing/id1587218663",
    id: 2,
  },
  {
    title: "Capable Maker",
    technologies: "React.js | Redux | Node.js | Express | MongoDB",
    imgPath: TodoAppPhoto,
    description: 'Capable Maker is a project that helps teach and learn projects and procedures step by step, guiding students in their "Goldilocks Zone", which means that the projects for students are not too difficult, not too easy, but just perfect, earning achievements that unlock more advanced projects.',
    demoLink: "https://capablemaker.com/",
    id: 3,
  },
  {
    title: "Drinkko",
    technologies: "Angular.js | Node.js | Firebase",
    imgPath: DrinkkoPhoto,
    description: 'Drinkko is a meeting point between people who want to drink good beer at great prices and bars that need to attract clients. Through Drinkko, bars can attract customers by offering discounted prices in beers at specific times of the day, while users receive notifications of discounted beer prices in bars around them.',
    demoLink: "https://drinkko.com/en/",
    id: 4,
  },
  {
    title: "Merit",
    technologies: "React.js | Redux |  Node.js | Express | MongoDB",
    imgPath: MeritPhoto,
    description: 'Web3 application with Zero Knowledge Proofs used to prove to financial entities (such as banks or credit unions) that a person meets a salary requirement, without revealing the annual salary, this is achieved through a Zero Knowledge Proofs circuit designed with circa language.',
    demoLink: "https://merit-ry9r.onrender.com/",
    id: 5,
  },
  {
    title: "Incognito",
    technologies: "Vue.js | Pinia |  Node.js | Express | MongoDB",
    imgPath: EcommercePhoto,
    description: 'The Incognito (ICON) project was created by NFT collectors, artists, and professionals with the goal of bringing something unique and special to the NFT community. The collection consists of 10,000 randomly generated and unique characters living on the Ethereum blockchain as ERC-721 tokens.',
    demoLink: "https://incognitonft.com/",
    id: 6,
  },
];

export default projects;
