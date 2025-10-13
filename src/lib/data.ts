

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  longDescription: string;
  repoUrl?: string;
}

export interface Reference {
  name: string;
  title:string;
  company: string;
  quote: string;
  imageUrl: string;
  imageHint: string;
}

export interface CareerItem {
  type: 'Education' | 'Work';
  title: string;
  institution: string;
  institutionUrl?: string;
  date: string;
  description: string;
  tags?: string[];
}
// https://assetstore.unity.com/packages/tools/physics/kinematic-character-controller-99131
export const projects: Project[] = [
    {
    slug: 'fps-character-controller',
    title: 'Action FPS Character Controller',
    category: 'Unity',
    description: 'Fast paced FPS Character Controller in Unity.',
    imageUrl: "https://www.gazel.net/img/public/FPSCharaControl.png",
    imageHint: "FPS Character Controller Screenshot",
    technologies: ['Unity', 'C#'],
    longDescription: `<p>Fast paced characted controller, based on the excellent <a href="https://assetstore.unity.com/packages/tools/physics/kinematic-character-controller-99131" target="_blank" rel="noopener noreferrer" style="color:#0c6e81;"> Kinematic Character Controller Unity plug-in</a>.<br /> This will be the base of my future 3D projects. All the movements I wanted for a fast parkour/fps game are implemented and this controller is ready to be used in my projects:<br>&nbsp&nbsp- Double jump<br>&nbsp&nbsp- Dash<br>&nbsp&nbsp- Slide<br>&nbsp&nbsp- Grappling hook/Ninja rope<br>&nbsp&nbsp- WallRun<br>&nbsp&nbsp- Momentum conservation for maximum action</p>`,
    repoUrl: 'https://github.com/egazel/BuckCharacterControllerURP'
  },
    {
    slug: 'balloon-duel',
    title: 'Balloon Duel',
    category: 'Unity',
    description: 'Remaking the core gameplay of an old flash game I used to love as a kid.',
    imageUrl: "https://www.gazel.net/img/public/BalloonDuel.png",
    imageHint: "Balloon Duel Screenshot",
    technologies: ['Unity', 'C#'],
    longDescription: `<p>We spent long hours playing this game with my little brother. This felt like a good idea to train using unity by trying and recreate its core gameplay first. More work iterations ongoing to add more of the features found in this <a href="https://www.newgrounds.com/portal/view/177120" target="_blank" rel="noopener noreferrer" style="color:#0c6e81;"> old flash game.</a></p>`,
    repoUrl: 'https://github.com/egazel/BalloonDuelUnity'
  },
  {
    slug: 'procedural-dungeon-generator',
    title: 'Procedural Dungeon Generator',
    category: 'Unity',
    description: 'Procedural generation of dungeon maps in Unity.',
    imageUrl: "https://www.gazel.net/img/public/DungeonGenerator.png",
    imageHint: "Procedurally Generated Dungeon Map",
    technologies: ['Unity', 'C#'],
    longDescription: `<p>Small project trying to tackle procedural map generation in Unity, just for fun, and maybe to use it in later 2D projects.</p>`,
    repoUrl: 'https://github.com/egazel/DungeonCrawler'
  },
  {
    slug: 'refuge-du-languedoc',
    title: 'Refuge du Languedoc',
    category: 'Web',
    description: 'Ready to use Symfony application to manage an animal shelter association.',
    imageUrl: "https://www.gazel.net/img/public/RefugeDuLanguedoc.png",
    imageHint: "Dashboard Refuge du Languedoc",
    technologies: ['Symfony', 'Doctrine', 'MySQL', 'Twig', 'PHP', 'JavaScript', 'jQuery'],
    longDescription: `<p>Fully functional, ready to use application for animal refuges, developed for my bachelor diploma :<br />&nbsp&nbsp- App and DB Design<br />&nbsp&nbsp- Wireframes<br />&nbsp&nbsp- MVC Development<br />&nbsp&nbsp- User roles management<br />&nbsp&nbsp- Security<br />&nbsp&nbsp- Deployment<br/>The memoire detailing the conception, development, features, security, etc, can be found <a href="https://gazel.net/docs/Dossier_CDA_GAZEL_Elie.pdf" target="_blank" rel="noopener noreferrer" style="color:#0c6e81;"> here (French Only)</a>.</p>`,
    repoUrl: 'https://github.com/egazel/refuge_v2'
  },
  {
    slug: 'lol-config-editor',
    title: 'LoL Config Editor',
    category: 'Misc',
    description: 'Little QOL tool helping edit read-only config files ez pz.',
    imageUrl: "https://www.gazel.net/img/public/LoLConfigEditor.png",
    imageHint: "Lol Config Editor Tool",
    technologies: ['C#', 'WPF'],
    longDescription: `<p>This tool was made to allow for easy edition of the Game.cfg and PersistedSettings.json files of the League of Legends game. Having these files read-only makes it annoying to edit. This small project also helped me get a grasp of the basics of WPF when preparing interviews.</p>`,
    repoUrl: 'https://github.com/egazel/LoLConfigEditor'
  },
  {
    slug: 'arduino-windshield-hud',
    title: 'Arduino Windshield Car HUD',
    category: 'Misc',
    description: 'Heads Up Display reading car metrics from BT OBDII and displaying real time on the windshield.',
    imageUrl: "https://www.gazel.net/img/public/Arduino.png",
    imageHint: "Arduino Logo",
    technologies: ['Arduino', 'Electronics'],
    longDescription: `<p>The goal of this little side project is to use an arduino pro micro, equipped with a HC-05 controller, to read the car metrics from a bluetooth OBDII reader. Using 7 segments modules rewired, I can reflect it on my windshield, with a non refractive sticker for better sharpness. </p>`,
    repoUrl: 'https://github.com/egazel/arduino_windshield_hud'
  },
];

export const references: Reference[] = [
  {
    name: 'Loïc Hamot',
    title: 'Senior tools programmer',
    company: 'Wild Sheep Studio',
    quote: "Mr. Elie Gazel [...] held the position of Tools Programmer where he developed the editors of Scene, Entities, and Terrain in the 3DStudioMax application.<br /><br />Within our company, Mr. Elie Gazel has acquired solid skills in programming, user interface and data manipulation but also in tasks managment and producing.<br /><br />He fulfilled his mission with diligence and a great concern for the user experience, despite a complex technical environment.",
    imageUrl: 'https://www.gazel.net/img/References/lhamot.jpg',
    imageHint: '',
  },
  {
    name: 'Teddy Delrue',
    title: 'Senior Technical Artist',
    company: 'Wild Sheep Studio',
    quote: "Elie played a crucial role in the set up of complex pipelines and custom tools creation, allowing for a faster assets and scenes creation in our game.<br /><br />In addition to being reactive and able to handle multiple tasks simultaneously, he possesses a global vision of the project and its needs, allowing him to priorize efficiently. <br /><br />Since we constantly share the same tools, it is obvious that Elie has a technical expertise as strong as a 3D graphist. Elie became an essential part of the studio, and working with him is a genuine pleasure.<br /><br />In addition to his technical skills, he is also very social and integrates perfectly in our working environment.",
    imageUrl: 'https://www.gazel.net/img/References/tdelrue.jpg',
    imageHint: '',
  },
  {
    name: 'Ferdinand Fayollet',
    title: 'Senior tools programmer',
    company: 'Wild Sheep Studio',
    quote: "Elie inherited a very large and very badly maintained code base of max script used for many internal tools for level creation, art creation, general pipeline, etc. He managed to implement well designed and robust new features, fix bugs, optimize and cleanup when necessary. He was also very careful with making sure everything was thoroughly tested.<br /><br />He did an amazing job at managing priorities, jumping from tasks to tasks, sometimes multiple times a day. All that while maintaining a positive and friendly attitude with everybody at the studio.<br /><br />I definitely recommend him for any tools or tech art job in the games industry. He acquired already far enough experience to be very versatile and adaptable in my opinion.",
    imageUrl: 'https://www.gazel.net/img/References/ffayollet.jpg',
    imageHint: '',
  },
  {
    name: 'Fabien Delpiano',
    title: 'CEO',
    company: 'Pastagames',
    quote: "Elie bravely confronted MaxScript for several years, in a heroic struggle against programmatic methods from another age. Hail to him!",
    imageUrl: 'https://www.gazel.net/img/References/fdelpiano.jpg',
    imageHint: '',
  }
];

export const careerPath: CareerItem[] = [
  {
    type: 'Work',
    title: '3D Tools & Pipeline Developer',
    institution: 'TAT Studio',
    institutionUrl: 'https://tatprod.com/',
    date: 'Oct. 2024 - Current',
    description: 'Principal developer on Lovebirds (2026), with occasional work on various projects with different pipelines:<br />- Pil\'s Adventures series (2026)<br />- Falcon Express (2025)',
    tags: ['Python', 'Maya', 'GitLab']
  },
  {
    type: 'Work',
    title: 'Tools & Pipeline Developer - Tech Artist',
    institution: 'Wild Sheep Studio',
    institutionUrl: 'https://wildsheepstudio.com/',
    date: 'Jan. 2021 - Nov. 2023 ',
    description: 'On "WiLD", then on an unannounced project, worked on creating and maintaining the custom tools and pipelines for terrain, level and assets creation:<br />&nbsp&nbsp- Game edition pipelines and tools<br />&nbsp&nbsp- Tools code base migration<br />&nbsp&nbsp- Photometry scanner (arduino, python, IoT)<br />&nbsp&nbsp- C++/Vulkan stamper development<br />&nbsp&nbsp- Jenkins builds for tools CI/CD',
    tags: ['3DSMax', 'MAXScript', 'Python', 'C++', 'C#', 'Perforce', 'GitHub', 'Jenkins']
  },
  {
    type: 'Work',
    title: 'Associate Technical Producer',
    institution: 'Wild Sheep Studio',
    institutionUrl: 'https://wildsheepstudio.com/',
    date: 'Sep. 2020 - Jan. 2021',
    description: 'On "WiLD", managed and monitored the production planning, followed the tech teams progress, managed meetings and communication, proposed different management tools',
    tags: ['Management', 'Organization', 'Multi-tasking', 'Communication', 'Atlassian suite']
  },
  {
    type: 'Work',
    title: 'Tools & Pipeline Developer - Tech Artist',
    institution: 'Wild Sheep Studio',
    institutionUrl: 'https://wildsheepstudio.com/',
    date: 'Aug. 2019 - Sep. 2020',
    description: 'On "WiLD", then on an unannounced project, worked on creating and maintaining the custom tools and pipelines for terrain, level and assets creation:<br />&nbsp&nbsp- Game edition pipelines and tools<br />&nbsp&nbsp- Tools code base migration<br />&nbsp&nbsp- Photometry scanner (arduino, python, IoT)<br />&nbsp&nbsp- C++/Vulkan stamper development<br />&nbsp&nbsp- Jenkins builds for tools CI/CD',
    tags: ['3DSMax', 'MAXScript', 'Python', 'C++', 'C#', 'Perforce', 'GitHub', 'Jenkins']
  },
  {
    type: 'Education',
    title: 'Bachelor\'s degree',
    institution: 'EPSI Montpellier',
    institutionUrl: 'https://www.epsi.fr/',
    date: '2019 - 2020',
    description: 'Graduated from 3rd year at the ingeneering school EPSI Montpellier. I also got a bachelor\'s degree in "Conception and Developement of Applications". ',
    tags: ['C#', 'Python', 'Angular', 'Symfony', 'Powershell', 'Ethical Hacking', 'IOT', 'Database management', 'DevOps', 'Java', 'C++', 'Data Structures']
  },
  {
    type: 'Education',
    title: 'BTEC Higher National Diploma',
    institution: 'ESICAD Montpellier',
    institutionUrl: 'https://www.esicad.com/',
    date: '2017 - 2019',
    description: 'Fresh start at studies after a few years working. Obtained a 2 years diploma, graduated top of class both years.',
    tags: ['Algorithmic', 'HTML5', 'CSS3', 'PHP7', 'jQuery']
  },
  {
    type: 'Work',
    title: 'Waiter',
    institution: 'Various restaurants',
    date: '2015 - 2017',
    description: 'Worked as a waiter in different restaurants, mostly in the 4* hotel restaurant "La Chapelle Saint-Martin" (Limoges, France)',
    tags: ['Work under stress', 'Multi-tasking', 'Punctuality', 'Customer relationship']
  },
  {
    type: 'Education',
    title: 'Highschool diploma',
    institution: '',
    date: '2013',
    description: 'Obtained a scientific high school diploma, with biology speciality.',
    tags: []
  },
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
