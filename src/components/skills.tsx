import { Workflow } from "lucide-react";
import { CppIcon, MaxscriptIcon, PythonIcon, ThreeDsMaxIcon, UnrealEngineIcon, UnityIcon } from "./icons";

const skills = [
  { name: 'Unity', icon: <UnityIcon className="h-12 w-12" /> },
  { name: 'Unreal Engine', icon: <UnrealEngineIcon className="h-12 w-12" /> },
  { name: 'Python', icon: <PythonIcon className="h-12 w-12" /> },
  { name: 'C++', icon: <CppIcon className="h-12 w-12" /> },
  { name: '3ds Max', icon: <ThreeDsMaxIcon className="h-12 w-12" /> },
  { name: 'MaxScript', icon: <MaxscriptIcon className="h-12 w-12" /> },
  { name: 'Tools & Pipeline', icon: <Workflow className="h-12 w-12" /> },
];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-card border shadow-md hover:shadow-primary/20 transition-shadow">
              <div className="text-foreground/80 group-hover:text-primary transition-colors">
                {skill.icon}
              </div>
            </div>
            <p className="text-sm font-medium text-muted-foreground">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
