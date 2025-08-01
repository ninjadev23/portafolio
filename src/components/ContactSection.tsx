import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-10 relative py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ponte en <span className="text-sky-400">Contacto</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Si tienes alguna idea, propuesta o quieres hablar sobre proyectos, no
          dudes en escribirme.
        </p>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Formulario */}
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10 flex flex-col"
          >
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-sky-400 outline-none transition text-sm sm:text-base"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                Correo
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-sky-400 outline-none transition text-sm sm:text-base"
                placeholder="tuemail@ejemplo.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                Mensaje
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-sky-400 outline-none transition resize-none text-sm sm:text-base"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-sky-500 hover:bg-sky-600 rounded-lg font-semibold transition text-sm sm:text-base"
            >
              Enviar Mensaje
            </button>
          </form>

          {/* Datos de contacto */}
          <div className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white/10">
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              También puedes encontrarme en:
            </p>
            <div className="flex flex-col gap-4 text-base sm:text-lg w-full max-w-xs">
              <a
                href="mailto:janselroa2424@gmail.com"
                className="flex items-center gap-3 hover:text-sky-400 transition"
              >
                <Mail size={20} />janselroa2424@gmail.com
              </a>
              <a
                href="https://github.com/ninjadev23"
                target="_blank"
                className="flex items-center gap-3 hover:text-sky-400 transition"
              >
                <Github size={20} /> Yansel Roa
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                className="flex items-center gap-3 hover:text-sky-400 transition"
              >
                <Linkedin size={20} /> janselroa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
