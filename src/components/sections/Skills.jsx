import { RevealOnScreen } from "../RevealOnScreen";

export const Skills = () => {
    const getSkillIcon = (skillName) => {
        const icons = {
            "Java": (
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">J</span>
                </div>
            ),
            "Spring": (
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">S</span>
                </div>
            ),
            "Django": (
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">D</span>
                </div>
            ),
            "Node.js": (
                <div className="w-8 h-8 bg-green-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">N</span>
                </div>
            ),
            "JavaScript": (
                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JS</span>
                </div>
            ),
            "HTML5": (
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">5</span>
                </div>
            ),
            "TailwindCSS": (
                <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                </div>
            ),
            "React": (
                <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                </div>
            ),
            "SQL & NoSQL": (
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">DB</span>
                </div>
            ),
            "Docker": (
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🐳</span>
                </div>
            ),
            "Git": (
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                </div>
            )
        };
        return icons[skillName] || (
            <div className="w-8 h-8 bg-blue-500/20 rounded flex items-center justify-center">
                <span className="text-blue-400 text-sm font-bold">{skillName.charAt(0)}</span>
            </div>
        );
    };

    const categories = [
        {
            title: "Backend",
            items: [
                { name: "Java", level: 85 },
                { name: "Spring", level: 80 },
                { name: "Django", level: 60 },
                { name: "Node.js", level: 70 },
            ]
        },
        {
            title: "Frontend",
            items: [
                { name: "JavaScript", level: 80 },
                { name: "HTML5", level: 90 },
                { name: "TailwindCSS", level: 85 },
                { name: "React", level: 75 },
            ]
        },
        {
            title: "Database",
            items: [
                { name: "SQL & NoSQL", level: 70 },
            ]
        },
        {
            title: "DevOps & Tools",
            items: [
                { name: "Docker", level: 65 },
                { name: "Git", level: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScreen>
                <div className="max-w-5xl mx-auto px-4 w-full">
                    <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((category, idx) => (
                            <div key={idx} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]">
                                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {category.items.map((item, key) => (
                                        <div key={key} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 group">
                                            <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                                                {getSkillIcon(item.name)}
                                            </div>
                                            <span className="text-gray-200 font-medium">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScreen>
        </section>
    )
}


