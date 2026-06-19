import { Mail, Github } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mt-10 relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <Trans i18nKey="contact.title">
            Ponte en <span className="text-sky-400">Contacto</span>
          </Trans>
        </h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <form
            action="https://formspree.io/f/movlnqkw"
            method="POST"
            className="bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg
                       border border-white/[0.08] flex flex-col glow-border"
          >
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                {t("contact.form.name")}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white outline-none
                           transition-all duration-300 text-sm sm:text-base
                           focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 focus:bg-white/[0.08]"
                placeholder={t("contact.form.name_placeholder")}
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                {t("contact.form.email")}
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white outline-none
                           transition-all duration-300 text-sm sm:text-base
                           focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 focus:bg-white/[0.08]"
                placeholder={t("contact.form.email_placeholder")}
              />
            </div>
            <div className="mb-4">
              <label className="block text-left text-gray-300 mb-2 text-sm sm:text-base">
                {t("contact.form.message")}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg bg-white/[0.06] border border-white/[0.1] text-white outline-none
                           transition-all duration-300 resize-none text-sm sm:text-base
                           focus:border-sky-400/50 focus:ring-1 focus:ring-sky-400/30 focus:bg-white/[0.08]"
                placeholder={t("contact.form.message_placeholder")}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-sky-600 to-sky-500
                         hover:from-sky-500 hover:to-sky-400 rounded-lg font-semibold
                         transition-all duration-300 text-sm sm:text-base
                         shadow-lg shadow-sky-600/20 hover:shadow-sky-500/30"
            >
              {t("contact.form.submit")}
            </button>
          </form>
          <div className="flex flex-col justify-center items-center bg-white/[0.04] backdrop-blur-md
                          p-6 sm:p-8 rounded-2xl shadow-lg border border-white/[0.08] glow-border">
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              {t("contact.alsoFindMe")}
            </p>
            <div className="flex flex-col gap-4 text-base sm:text-lg w-full max-w-xs">
              <a
                href="mailto:janselroa2424@gmail.com"
                className="flex items-center gap-3 justify-center hover:text-sky-400 transition-colors duration-200"
              >
                <Mail size={20} />
                janselroa2424@gmail.com
              </a>
              <a
                href="https://github.com/ninjadev23"
                target="_blank"
                className="flex items-center gap-3 justify-center hover:text-sky-400 transition-colors duration-200"
              >
                <Github size={20} /> Yansel Roa
              </a>
              <p className="flex items-center justify-center gap-3 hover:text-sky-400 transition-colors duration-200">
                <img className="w-10" src="/discord.webp" alt="Discord" />
                jansel75
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
