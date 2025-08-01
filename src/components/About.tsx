import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Letrero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  return (
    <section className="mt-15 flex justify-center w-full flex-col items-center">
      <h2 className="my-10 text-center text-2xl py-2">
        <span className="border-b py-2">Sobre Mi</span>
      </h2>
      <div className="flex flex-wrap-reverse justify-center bg-neutral-900/30 backdrop-blur-md p-10 rounded-lg">
        <div className="max-w-64">
          <p>
            Muy buenas que tal, me llamo Jansel Roa soy un joven muy talentoso
            que no para de aprender.
          </p>

          <p className="mt-2">
            Tengo 18 años y estudio licenciatura en informatica en la
            <span className="text-sky-600">
              {" "}
              Universidad Autonoma De Santo Domingo (UASD)
            </span>{" "}
            la primera universidad de america, ademas de ser autodidacta aprendo
            y practico mucho por mi cuenta
          </p>
        </div>
        <div className="flex justify-center items-start relative h-[300px]">
          {/* Punto de anclaje */}
          <div className="absolute top-0 left-1/2 -translate-x-1 w-2 h-2 bg-sky-600 rounded-full z-10" />

          {/* Imagen colgando */}
          <div
            ref={ref}
            className={`relative w-[200px] h-[200px] shadow-xl border-[4px] border-white rounded-md overflow-hidden transition-transform duration-1000
          ${active ? "animate-sign-swing" : "origin-top rotate-0"}`}
            style={{
              transformOrigin: "top center",
              perspective: "800px",
            }}
          >
            <img
              src="/codingwallpaper.jpg"
              alt="letrero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
