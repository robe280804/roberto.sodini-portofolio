import { useEffect, useRef } from "react";

export const RevealOnScreen = ({ children }) => {
    const ref = useRef(null);

    /*
    Crea un IntersectionObserver =  rileva quando un elemento entra o esce dalla viewport:

    - Callback ([entry]) => { ... } viene chiamata ogni volta che l’elemento osservato cambia visibilità
    - entry.isIntersecting: è true se almeno parte dell’elemento è visibile secondo la soglia
    - ref.current.classList.add("visible"): aggiunge la classe CSS reveal.visible visible all’elemento,

    Opzioni dell’observer:
    - threshold: 0.2: l’elemento deve essere almeno 20% visibile per triggerare
    - rootMargin: "0px 0px -50px 0px": aggiusta i margini della viewport per anticipare o ritardare il trigger
    */

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            },
            { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    });

    return (
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};
