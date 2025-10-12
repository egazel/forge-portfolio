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
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  content: string;
}

export interface Recommendation {
  name: string;
  title: string;
  company: string;
  quote: string;
  imageUrl: string;
  imageHint: string;
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
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'the-rise-of-usd-in-vfx',
    title: 'The Rise of USD in Modern VFX Pipelines',
    date: '2024-05-15',
    excerpt: 'A deep dive into Pixar\'s Universal Scene Description and why it\'s revolutionizing collaboration in the animation and VFX industry.',
    imageUrl: findImage('blog-thumb-1').imageUrl,
    imageHint: findImage('blog-thumb-1').imageHint,
    content: `<p>Universal Scene Description (USD) is more than just a file format; it's a powerful framework for composing and collaborating on 3D scenes. In this post, we'll explore the core concepts of USD, such as layers, prims, and composition arcs, and discuss how they enable non-destructive, parallel workflows.</p><h3>Why is USD a Game-Changer?</h3><p>Traditionally, passing complex scenes between departments has been a major bottleneck. USD addresses this with its layering system, allowing lighting, animation, and FX artists to work on the same scene simultaneously without overwriting each other's work. We'll look at a practical example of how a character asset can be developed and integrated into a shot using USD.</p>`,
  },
  {
    slug: 'machine-learning-for-tool-devs',
    title: 'How Machine Learning is Shaping the Future of Tool Development',
    date: '2024-04-22',
    excerpt: 'Exploring the intersection of machine learning and pipeline development, from intelligent asset tagging to predictive rendering.',
    imageUrl: findImage('blog-thumb-2').imageUrl,
    imageHint: findImage('blog-thumb-2').imageHint,
    content: `<p>Machine learning is rapidly moving from a theoretical concept to a practical tool in the arsenal of pipeline developers. This article covers several exciting applications of ML in modern production environments.</p><h3>Practical Applications</h3><ul><li><strong>Predictive Analytics:</strong> Using historical render data to predict render times and resource allocation.</li><li><strong>Intelligent Content Creation:</strong> Automating tasks like UV unwrapping, weight painting, and even generating procedural textures based on concept art.</li><li><strong>Smart Asset Management:</strong> As demonstrated by the Curator tool on this site, AI can automatically analyze and tag assets, making them easier to find and manage.</li></ul><p>We are just scratching the surface of what's possible, and the future for AI-assisted content creation is incredibly bright.</p>`,
  },
];

export const recommendations: Recommendation[] = [
  {
    name: 'Jane Doe',
    title: 'Lead Animator',
    company: 'Pixel Perfect Studios',
    quote: "The auto-rigging tool developed by Synapse is a masterpiece. It cut our character setup time by more than 50%, allowing our animation team to focus on what they do best: bringing characters to life. It's robust, intuitive, and has become an indispensable part of our pipeline.",
    imageUrl: findImage('rec-profile-1').imageUrl,
    imageHint: findImage('rec-profile-1').imageHint,
  },
  {
    name: 'John Smith',
    title: 'VFX Supervisor',
    company: 'Epic Effects',
    quote: "Working with the procedural terrain generator was a game-changer for our open-world project. The level of detail and control it provided was astounding. We could iterate on massive landscapes in hours, not weeks. A truly powerful and well-designed tool.",
    imageUrl: findImage('rec-profile-2').imageUrl,
    imageHint: findImage('rec-profile-2').imageHint,
  },
  {
    name: 'Emily White',
    title: 'Production Manager',
    company: 'Creative Assembly',
    quote: "The asset management system is the backbone of our studio. Its seamless integration with our existing software and the clarity it provides on asset status and versioning have been invaluable. It has streamlined communication between departments and eliminated countless hours of manual tracking.",
    imageUrl: findImage('rec-profile-3').imageUrl,
    imageHint: findImage('rec-profile-3').imageHint,
  }
];

export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getBlogPostBySlug = (slug: string) => blogPosts.find(p => p.slug === slug);
