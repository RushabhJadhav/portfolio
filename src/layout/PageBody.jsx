import Intro from "../components/Intro";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageBody = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const sections = document.querySelectorAll(".section")

        if(pathname == "/") {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("show", entry.isIntersecting)
                })
            })
    
            sections.forEach(section => observer.observe(section))
    
            return () => {
                sections.forEach(section => observer.unobserve(section));
            };
        }
    }, [])

    return (
        <main>
            <Intro></Intro>
            <TechStack></TechStack>
            <Projects></Projects>
        </main>
    )
}

export default PageBody;