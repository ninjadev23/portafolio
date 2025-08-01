import { Maximize2, Circle, Triangle, Square } from "lucide-react";

interface Props {
  type: "pc" | "phone";
  image: string;
  title: string;
  fade: boolean;
  onClick: () => void;
}

export default function DeviceReal({
  type,
  image,
  title,
  fade,
  onClick,
}: Props) {
  const baseWrapper = "relative group overflow-hidden";

  const overlay = `
    absolute inset-0 bg-black/50 transition-all duration-300 flex flex-col justify-between
  `;

  // 🔑 Aquí controlamos la visibilidad según el tamaño de pantalla
  const hoverContent = `
    absolute inset-0 flex flex-col items-center justify-center gap-4 z-10
    transition-all duration-300
    opacity-100 md:opacity-0 md:group-hover:opacity-100
  `;

  const iconButton = `
    w-10 h-10 rounded-full bg-white/90 hover:bg-white text-black
    flex items-center justify-center shadow-md transition
    hover:cursor-pointer
  `;

  if (type === "pc") {
    return (
      <div className="w-64 relative">
        <div
          className={`${baseWrapper} h-52 bg-[url('/pcwallpaper.webp')] bg-blend-overlay bg-black/80 border-5 border-white rounded-md shadow`}
        >
          <img
            loading="lazy"
            className={`w-full h-full transition-opacity duration-300 object-contain ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            src={image}
            alt="Project"
          />
          <div
            className={`${overlay} md:group-hover:opacity-100 md:opacity-0 opacity-100`}
          ></div>

          <div className={hoverContent}>
            <h3 className="text-xl text-white font-semibold">{title}</h3>
            <button onClick={onClick} className={iconButton}>
              <Maximize2 size={20} />
            </button>
          </div>
        </div>

        <div className="w-20 h-2 bg-white mx-auto shadow"></div>
        <div className="w-36 h-1.5 bg-white mx-auto shadow"></div>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div
        className={`${baseWrapper} w-36 h-80 bg-black border-[6px] border-white rounded-2xl`}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={`w-full h-full object-contain rounded-2xl ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Overlay visible en móvil, en PC solo en hover */}
        <div
          className={`${overlay} opacity-100 md:opacity-0 md:group-hover:opacity-100`}
        ></div>

        <div className={hoverContent}>
          <h3 className="text-xl text-white font-semibold">{title}</h3>
          <button onClick={onClick} className={iconButton}>
            <Maximize2 size={20} />
          </button>
        </div>

        {/* Notch */}
        <div className="absolute top-2 w-10 h-1 bg-gray-400 rounded-full mx-auto left-0 right-0"></div>

        {/* Iconos */}
        <div className="absolute bottom-0 bg-black/30 w-full py-2 left-1/2 -translate-x-1/2 flex justify-center gap-2">
          <Triangle className="w-3 h-3 " />
          <Circle className="w-3 h-3 " />
          <Square className="w-3 h-3 " />
        </div>
      </div>
    );
  }

  return null;
}
