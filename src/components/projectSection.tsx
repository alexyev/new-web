import React from 'react';
import Link from 'next/link';

const projects = [
    {
        title: "Cultura",
        description: "Co-founded an app delivering crop phenology and financial tools to small-scale farmers. Started as a hackathon project, placed in Buildspace's S5 Top 32, and received backing from Emergent Ventures and The Iris Project.",
        imageUrl: "/projects/cultura.jpg",
        
    },
    {
        title: "Venture Capital @ The Catherine Wheel",
        description: "Interned at a Toronto-based advisory fund. Worked with pre-seed and seed-stage founders to refine their models and pitched potential investments to partners, sourced funding from LPs.",
        imageUrl: "/projects/tcw.gif",
        link: "https://www.thecatherinewheel.co/" 
    },
    {
        title: "Student Consulting @ IKEA & CAE",
        description: "Consulted for IKEA on Gen Z market adaptation and CAE on product expansion. Developed strategies and presented recommendations directly to executive leadership.",
        imageUrl: "/projects/consult.jpg",
        link: ""
    },
    {
        title: "Philanthropy Strategy @ Middendorf Foundation",
        description: "Led a research initiative on Education Capital Projects in Baltimore. Conducted 47 interviews and utilized sentiment analysis to produce a report for major foundations with $3B+ AUM, outlining strategies to better support nonprofit development.",
        imageUrl: "/projects/middendorf.jpeg",
        link: "https://www.middendorffoundation.org/"
    },
    {
        title: "Clara",
        description: "HackPrinceton '24 project addressing high visa rejection rates. Built an interactive, multilingual AI coach to help applicants prepare for interviews and navigate the immigration process.",
        imageUrl: "/projects/clara.jpg",
        link: "https://www.claraprep.co/" 
    },
    {
        title: "AceGlass",
        description: "HoyaHacks '25 (Georgetown) AceGlass are the ultimate pair of interactive poker glasses, with live winning percentages and betting strategies, keeping you on point with every hand.",
        imageUrl: "/projects/clara.jpg",
        link: "https://www.claraprep.co/" 
    },
    {
        title: "UNC Applied Engineering Lab",
        description: "Collaborating with researchers to develop a hand-movement tracking glove, designed to optimize swimmer hand positioning and improve performance mechanics.",
        imageUrl: "/projects/AEL.jpg",
        link: "https://www.unc.edu/posts/2024/08/06/tar-heel-experts-unlock-science-behind-swimming/" 
    },
    {
        title: "GPT from Scratch",
        description: "Rebuilt a Shakespearean LLM to understand the architecture of GPT models, following Andrej Karpathy’s curriculum.",
        imageUrl: "/projects/gpt.jpg",
        link: "https://github.com/alexyev/gpt-from-scratch"
    },
    {
        title: "Issues in Global Hunger",
        description: "Researched food supply pressures from a first-principles perspective. Developed a computer vision algorithm for drones to identify and treat corn disease in real-time.",
        imageUrl: "/projects/cd.webp",
        link: "https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949"
    },
    {
        title: "brAInstorm",
        description: "HackTheNorth '22 Winner. Built a BCI that interprets brainwaves to generate artwork reflecting the user's emotional state.",
        imageUrl: "/projects/HTN.png",
        link: "https://youtu.be/r3z1rB29ZLU?si=d9o9UkN0tJxpzoO4"
    },
    {
        title: "Collimator",
        description: "Hosting a podcast exploring the future of technology and impact. We've featured over 30 guests—from founders to professors—discussing how young people can shape the world.",
        imageUrl: "/projects/collimator.png",
        link: "https://open.spotify.com/show/0CkPu2vTedCtzkTT8vDegj?si=bf253a16ac844ede" 
    },
    {
        title: "Speaking Engagements",
        description: "Shared my work at venues like WebSummit, SXSW, and Microsoft HQ. A great opportunity to connect with leaders in tech and discuss the future of innovation.",
        imageUrl: "/projects/speaking.jpg",
        link: "https://youtu.be/vShQhBSgw0k?si=HCcXeFD5EhIWSK8V"
    },
    {
        title: "YouTube",
        description: "Documenting my learning process and projects. Videos cover quantum computing, global development challenges, and personal reflections on navigating early adulthood.",
        imageUrl: "/projects/yt.png",
        link: "https://www.youtube.com/@alexanderyevchenko" 
    },
];

export default function ProjectsSection() {
    return (
        <section className="mt-8 w-[75%]">
            <div className="flex flex-col space-y-4 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col border rounded-lg overflow-hidden shadow-md w-full">
                        {project.link ? (
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-48 object-cover"
                                    style={
                                        project.title.includes("Middendorf") 
                                            ? { objectPosition: "50% 35%" }
                                        : project.title.includes("Student Consulting")
                                            ? { objectPosition: "45% 45%" }
                                        : undefined
                                    }
                                />
                            </Link>
                        ) : (
                            <img 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="w-full h-48 object-cover"
                                style={
                                    project.title.includes("Middendorf") 
                                        ? { objectPosition: "50% 35%" }
                                    : project.title.includes("Student Consulting")
                                        ? { objectPosition: "45% 45%" }
                                    : undefined
                                }
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-lg font-600 tracking-wide">{project.title}</h3>
                            <p className="text-sm opacity-80">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}