import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ui/project-detail';

const projects = [
  {
    id: 1,
    title: "吃什么 What to Eat",
    tech: "React Native & Firebase",
    imageUrl: "/images/csm.png",
    slug: "what-to-eat",
    description: "A mobile application that helps users decide what to eat by providing personalized restaurant recommendations based on their preferences and location.",
    features: [
      "Personalized restaurant recommendations",
      "Location-based search",
      "User preference tracking",
      "Restaurant details and reviews",
      "Bookmark favorite restaurants"
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Expo",
      "JavaScript"
    ],
    demoUrl: "https://chi-se-mo.web.app/",
    githubUrl: "https://github.com/woshijay/chi-she-mo"
  },
  {
    id: 2,
    title: "Land Use Prediction",
    tech: "Python & TensorFlow",
    imageUrl: "/images/landio.png",
    slug: "land-use-prediction",
    description: "An AI-powered system that predicts land use patterns using satellite imagery and machine learning techniques.",
    features: [
      "Satellite image analysis",
      "Machine learning predictions",
      "Data visualization",
      "Historical pattern analysis"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "Pandas"
    ],
    githubUrl: "https://github.com/woshijay/land-use-FYP"
  },
  {
    id: 3,
    title: "Wordle Clone",
    tech: "React & TypeScript",
    imageUrl: "/images/wdlclone.png",
    slug: "wordle-clone",
    description: "A web-based clone of the popular word game Wordle, built with React and TypeScript.",
    features: [
      "Daily word challenges",
      "Keyboard input support",
      "Score tracking",
      "Share results feature",
      "Dark mode support"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Local Storage"
    ],
    demoUrl: "https://example.com/wordle-clone",
    githubUrl: "https://github.com/woshijay/wordle-clone"
  }
];

export default function Page({ params }: { params: { slug: string } }) {
  // Find the project that matches the slug
  const project = projects.find(p => p.slug === params.slug);

  // If project not found, return 404
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}