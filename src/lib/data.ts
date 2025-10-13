
import { PlaceHolderImages } from "./placeholder-images";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  longDescription: string;
  modelUrl?: string;
  repoUrl?: string;
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  quote: string;
  imageUrl: string;
  imageHint: string;
}

export interface CareerItem {
  type: 'Education' | 'Work';
  title: string;
  institution: string;
  date: string;
  description: string;
  tags?: string[];
}

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id) || { imageUrl: '', imageHint: '' };

export const projects: Project[] = [
  {
    slug: 'houdini-terrain-generator',
    title: 'Houdini Terrain Generator',
    category: 'Misc',
    description: 'A procedural terrain generator tool built for Houdini, enabling artists to create vast and realistic landscapes with ease.',
    imageUrl: findImage('project-hero-1').imageUrl,
    imageHint: findImage('project-hero-1').imageHint,
    technologies: ['Houdini', 'VEX', 'Python', 'SideFX Labs'],
    longDescription: `<p>The Houdini Terrain Generator is a comprehensive toolset designed to streamline the creation of realistic terrains within SideFX Houdini. Leveraging the power of proceduralism, it allows for non-destructive workflows, giving artists immense creative freedom.</p><p>Key features include multi-layered noise functions, erosion simulation based on hydraulic and thermal principles, and intelligent scattering of foliage and rocks based on slope and altitude. The tool was developed using a combination of VEX for performance-critical operations and Python for user interface and pipeline integration.</p>`,
    modelUrl: '/models/terrain.glb',
    repoUrl: 'https://github.com/example/houdini-terrain-generator'
  },
  {
    slug: 'maya-auto-rigger',
    title: 'Maya Auto-Rigger',
    category: 'Misc',
    description: 'An advanced auto-rigging tool for Maya that generates robust bipedal and quadrupedal rigs in minutes.',
    imageUrl: findImage('project-hero-2').imageUrl,
    imageHint: findImage('project-hero-2').imageHint,
    technologies: ['Maya', 'Python', 'PyMEL', 'Qt'],
    longDescription: `<p>This auto-rigger for Autodesk Maya was created to drastically reduce the time spent on character rigging. By analyzing a character's mesh and a set of user-placed guides, the tool automatically generates a full production-ready rig.</p><p>Features include IK/FK switching, stretchy limbs, spine controls, and a custom picker UI built with PySide2/Qt. The entire system is modular, allowing for easy extension to support different types of creatures or props. It has been used in several short film productions, increasing artist efficiency by over 300%.</p>`,
    repoUrl: 'https://github.com/example/maya-auto-rigger'
  },
  {
    slug: 'asset-management-pipeline',
    title: 'Asset Management Pipeline',
    category: 'Misc',
    description: 'A studio-wide asset management system for tracking, versioning, and reviewing 3D assets.',
    imageUrl: findImage('project-hero-3').imageUrl,
    imageHint: findImage('project-hero-3').imageHint,
    technologies: ['Python', 'ShotGrid (Shotgun) API', 'PostgreSQL', 'Docker'],
    longDescription: `<p>Developed a full-featured asset management pipeline to handle the lifecycle of 3D assets from creation to final render. The system integrates seamlessly with major DCCs like Maya, Houdini, and Substance Painter.</p><p>It provides artists with a simple interface to publish, version, and import assets, while providing production managers with a dashboard to track progress and status. The backend is powered by a PostgreSQL database and utilizes the ShotGrid API for robust production tracking. The entire infrastructure is containerized with Docker for easy deployment and scalability.</p>`,
    repoUrl: 'https://github.com/example/asset-management-pipeline'
  },
  {
    slug: 'unreal-engine-procedural-foliage',
    title: 'Unreal Engine Procedural Foliage',
    category: 'Unreal Engine',
    description: 'A procedural foliage placement tool for Unreal Engine 5, using Blueprints and C++ to create realistic environments.',
    imageUrl: findImage('project-hero-1').imageUrl,
    imageHint: 'unreal engine forest',
    technologies: ['Unreal Engine 5', 'Blueprints', 'C++'],
    longDescription: `<p>This tool for Unreal Engine 5 allows level designers to quickly populate large environments with procedurally placed foliage, rocks, and other assets based on landscape layers and physical rules.</p>`,
    repoUrl: 'https://github.com/example/unreal-procedural-foliage'
  },
  {
    slug: 'unity-inventory-system',
    title: 'Unity Inventory System',
    category: 'Unity',
    description: 'A flexible and data-driven inventory and crafting system for Unity, built with C# and ScriptableObjects.',
    imageUrl: findImage('project-hero-2').imageUrl,
    imageHint: 'video game inventory',
    technologies: ['Unity', 'C#', 'ScriptableObjects'],
    longDescription: `<p>A complete inventory and crafting system for Unity games. It uses ScriptableObjects to define items, recipes, and inventory configurations, making it highly extensible and easy for designers to use.</p>`,
    repoUrl: 'https://github.com/example/unity-inventory-system'
  },
  {
    slug: 'web-based-3d-model-viewer',
    title: 'Web-based 3D Model Viewer',
    category: 'Web',
    description: 'An interactive 3D model viewer for the web using Three.js and React, with support for glTF models and custom animations.',
    imageUrl: findImage('project-hero-3').imageUrl,
    imageHint: '3d web viewer',
    technologies: ['React', 'Three.js', 'Next.js', 'TypeScript'],
    longDescription: `<p>An interactive 3D model viewer built with Three.js and React. It allows users to upload, view, and interact with 3D models directly in their browser. Supports PBR materials, animations, and environment lighting.</p>`,
    repoUrl: 'https://github.com/example/web-3d-model-viewer'
  }
];

export const references: Reference[] = [
  {
    name: 'Loïc Hamot',
    title: 'Senior tools programmer',
    company: 'Wild Sheep Studio',
    quote: "Mr. Elie Gazel [...] held the position of Tools Programmer where he developed the editors of Scene, Entities, and Terrain in the 3DStudioMax application. Within our company, Mr. Elie Gazel has acquired solid skills in programming, user interface and data manipulation but also in tasks managment and producing. He fulfilled his mission with diligence and a great concern for the user experience, despite a complex technical environment.",
    imageUrl: findImage('rec-profile-1').imageUrl,
    imageHint: findImage('rec-profile-1').imageHint,
  },
  {
    name: 'Teddy Delrue',
    title: 'Senior Technical Artist',
    company: 'Wild Sheep Studio',
    quote: "Elie played a crucial role in the set up of complex pipelines and custom tools creation, allowing for a faster assets and scenes creation in our game. In addition to being reactive and able to handle multiple tasks simultaneously, he possesses a global vision of the project and its needs, allowing him to priorize efficiently. Since we constantly share the same tools, it is obvious that Elie has a technical expertise as strong as a 3D graphist. Elie became an essential part of the studio, and working with him is a genuine pleasure. In addition to his technical skills, he is also very social and integrates perfectly in our working environment.",
    imageUrl: findImage('rec-profile-2').imageUrl,
    imageHint: findImage('rec-profile-2').imageHint,
  },
  {
    name: 'Ferdinand Fayollet',
    title: 'Senior tools programmer',
    company: 'Wild Sheep Studio',
    quote: "Elie inherited a very large and very badly maintained code base of max script used for many internal tools for level creation, art creation, general pipeline, etc. He managed to implement well designed and robust new features, fix bugs, optimize and cleanup when necessary. He was also very careful with making sure everything was thoroughly tested. He did an amazing job at managing priorities, jumping from tasks to tasks, sometimes multiple times a day. All that while maintaining a positive and friendly attitude with everybody at the studio. I definitely recommend him for any tools or tech art job in the games industry. He acquired already far enough experience to be very versatile and adaptable in my opinion.",
    imageUrl: findImage('rec-profile-3').imageUrl,
    imageHint: findImage('rec-profile-3').imageHint,
  },
  {
    name: 'Fabien Delpiano',
    title: 'CEO',
    company: 'Pastagames',
    quote: "Elie bravely confronted MaxScript for several years, in a heroic struggle against programmatic methods from another age. Hail to him!",
    imageUrl: findImage('rec-profile-3').imageUrl,
    imageHint: findImage('rec-profile-3').imageHint,
  }
];

export const careerPath: CareerItem[] = [
  {
    type: 'Work',
    title: 'Senior Pipeline TD',
    institution: 'DreamWorks Animation',
    date: '2020 - Present',
    description: 'Developed and maintained core pipeline tools for feature animation. Specialized in asset management, render farm optimization, and developing artist-facing tools for Maya and Houdini.',
    tags: ['Python', 'Maya', 'Houdini', 'ShotGrid API', 'USD']
  },
  {
    type: 'Work',
    title: 'Tools & Pipeline Developer',
    institution: 'Ubisoft',
    date: '2016 - 2020',
    description: 'Worked on the "Assassin\'s Creed" franchise. Created procedural world-building tools, automated character and environment art pipelines, and provided direct support to the art team.',
    tags: ['Python', 'C#', 'Anvil Engine', '3ds Max']
  },
  {
    type: 'Education',
    title: 'M.S. in Computer Graphics',
    institution: 'Stanford University',
    date: '2014 - 2016',
    description: 'Focused on real-time rendering, physics simulation, and geometry processing. Thesis project involved developing a novel technique for procedural character animation.',
    tags: ['C++', 'OpenGL', 'Physics Simulation']
  },
  {
    type: 'Work',
    title: 'Junior Technical Artist',
    institution: 'BioWare',
    date: '2012 - 2014',
    description: 'Assisted in rigging, scripting, and shader development for "Mass Effect 3". Wrote Mel and Python scripts to automate repetitive tasks for animators and character artists.',
    tags: ['MEL', 'Python', 'Unreal Engine 3', 'HLSL']
  },
  {
    type: 'Education',
    title: 'B.S. in Computer Science',
    institution: 'University of Waterloo',
    date: '2008 - 2012',
    description: 'Graduated with honors. Specialized in software engineering and human-computer interaction. Completed co-op terms at several game development studios.',
    tags: ['Java', 'C++', 'Data Structures']
  },
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
