import data from "../data.json";
import { iconMap } from "../utils";
export default function Skills() {
  return (
    <div className="relative overflow-hidden text-white">
      <h2 className="text-center text-2xl mb-6  py-20"><span className="border-b border-white/40 py-2">Habilidades</span></h2>
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-6">
          {[...data.skills, ...data.skills].map((skill, i) => {
            const Icon = iconMap[skill.name];
            return (
              <div
                key={`${skill.name}-${i}`}
                className="min-w-40 h-40 flex flex-col items-center justify-center gap-2 bg-neutral-900/30 px-4 py-3 rounded-lg shadow backdrop-blur-md"
              >
                {Icon && <Icon size={65} color={skill.iconColor} />}
                <span className="font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
