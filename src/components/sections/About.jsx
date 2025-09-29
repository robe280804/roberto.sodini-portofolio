import { RevealOnScreen } from "../RevealOnScreen";

export const About = () => {

    const frontendSkills = ["React", "Tailwindcss", "Typescript", "HTML5"];
    const backendSkills = ["Spring", "NodeJS", "Python", "MySQL", "Django"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScreen>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text 
                            text-transparent text-center"
                >
                    About me
                </h2>

                {/*Tech skills */}
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                    Passionate developer specialized in building scalable, well-structured applications 
                    and solutions, with a strong focus on creating high-value innovations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> Diploma meccanica-meccatronica </strong> - Istituto Da Vinci-Fascetti Pisa (2018-2024)
                            </li>
                            <li>
                                <strong> Full Stack Developer </strong> - Fondazione ITS Prodigi (2024-2026)
                            </li>
                        </ul>
                    </div>

                     <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold"> Aiuto pizzaiolo (2025 - Present)</h4>
                            </div>
                            <div>
                                <h4 className="font-semibold"> Barista (2020 - 2024)</h4>
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScreen>
        </section>
    )
}