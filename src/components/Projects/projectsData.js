import InstagramPhoto from "../../Assets/Projects/instagram-login.png";
import TodoAppPhoto from "../../Assets/Projects/dashboard-todo.png";
import EcommercePhoto from "../../Assets/Projects/apollo-pic.png";
import FantasyPhoto from "../../Assets/Projects/fantasy.png";

let projects = [
  {
    title: "Stash101",
    imgPath: InstagramPhoto,
    description: "Stash101 is an immersive banking and investing simulation for students to learn financial literacy by navigating the complex world of personal finance—budgeting, paying bills, earning an income, saving, investing, and more. With Stash101, kindergarten through college students experience a safe space to explore real-world financial situations and practice informed decision-making around money.",
    demoLink: "https://www.stash.com/stash101/",
    id: 1,
  },
  {
    title: "Stash101 Fantasy",
    imgPath: FantasyPhoto,
    description: 'Stash101 Fantasy Investing works like a sports style fantasy game, you can "draft" a "lineup" of stocks and ETFs, then compete against your friends and the public in weekly games. Within the game, you are only tracking the performance of the stocks you’ve "drafted", never investing any money, so the biggest risk you’re taking on is the competition!',
    demoLink: "https://apps.apple.com/us/app/stash101-fantasy-investing/id1587218663",
    id: 2,
  },
  {
    title: "Capable Maker",
    imgPath: TodoAppPhoto,
    description: 'Capable Maker is a project that helps teach and learn projects and procedures step by step, guiding students in their "Goldilocks Zone", which means that the projects for students are not too difficult, not too easy, but just perfect, earning achievements that unlock more advanced projects.',
    demoLink: "https://capablemaker.com/",
    id: 3,
  },
  {
    title: "Incognito",
    imgPath: EcommercePhoto,
    description: 'The Incognito (ICON) project was created by NFT collectors, artists, and professionals with the goal of bringing something unique and special to the NFT community. The collection consists of 10,000 randomly generated and unique characters living on the Ethereum blockchain as ERC-721 tokens.',
    demoLink: "https://incognitonft.com/",
    id: 4,
  },
];

export default projects;
