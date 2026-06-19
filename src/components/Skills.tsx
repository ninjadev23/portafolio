import { useTranslation } from "react-i18next";
import { iconMap } from "../utils";
import { Skill } from "../types";

export default function Skills() {
  const { t } = useTranslation();
  const skills = t("skills.skills", { returnObjects: true }) as Skill[];
  // Duplicate for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden text-white">
      <h2 className="text-center text-2xl mb-6 py-20">
        <span className="border-b border-white/30 py-2 tracking-wide">
          {t("skills.title")}
        </span>
      </h2>
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex animate-scroll whitespace-nowrap gap-6 w-max">
          {duplicatedSkills.map((skill, i) => {
            const Icon = iconMap[skill.name];
            return (
              <div
                key={`${skill.name}-${i}`}
                className="min-w-40 h-40 flex flex-col items-center justify-center gap-2
                           bg-white/[0.04] backdrop-blur-md px-4 py-3 rounded-xl
                           border border-white/[0.08] shadow-lg
                           hover:bg-white/[0.08] hover:border-white/[0.15] hover:shadow-sky-500/10
                           transition-all duration-300 hover:scale-105"
              >
                {Icon && <Icon size={60} color={skill.iconColor} />}
                <span className="font-medium text-white/80">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
