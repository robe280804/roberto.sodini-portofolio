export const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-8 mt-20 bg-[rgba(10,10,10,0.6)] backdrop-blur">
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Roberto Sodini. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/robe280804"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <span className="text-gray-600">/</span>
                    <a
                        href="https://www.linkedin.com/in/roberto-sodini-0a2580382/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    )
}


