import React from 'react';
import Link from 'next/link';

const projects = [
    {
        title: "Cultura",
        description: "Co-founded an app delivering crop phenology, financial, and weather tools to small-scale Ontario farmers. Originally started as a hackathon idea, which went on to place in Buildspace's S5 Top 32 projects. Received recognition and funding from Emergent Ventures, Ingenious+, and The Iris Project.",
        imageUrl: "/projects/cultura.jpg",
        link: "https://www.culturafarms.ca/landing.html"
    },
    {
        title: "Collimator",
        description: "I host a podcast with Unmol Sharma. We've featured over 30 professors, investors, and founders from across a variety of industries, focusing on exposing young people to the future of technology and how to make an impact in the world.",
        imageUrl: "/projects/collimator.png",
        link: "https://open.spotify.com/show/0CkPu2vTedCtzkTT8vDegj?si=bf253a16ac844ede" 
    },
    {
        title: "YouTube",
        description: "I post a variety of educational videos, ranging from talks I've given to projects that I've built. Topics include quantum computing, tackling specific issues in world hunger, and what I've learned from life as a young adult.",
        imageUrl: "/projects/yt.png",
        link: "https://www.youtube.com/@alexanderyevchenko" 
    },
    {
        title: "Clara",
        description: "HackPrinecton '24. Addressing over 16 million failed US visa applications, Clara is an interactive coach that helps ace your interviews, answer questions about the immigration process, and find resources. Conversant in more than 40 languages.",
        imageUrl: "/projects/clara.jpg",
        link: "https://www.claraprep.co/" 
    },
    {
        title: "UNC Applied Engineering Lab",
        description: "Working with Jim Mahaney, Sofia Morais, and the Exercise Science Department to create a hand-movement tracking glove to optimize swimmer hand positioning.",
        imageUrl: "/projects/AEL.jpg",
        link: "https://www.unc.edu/posts/2024/08/06/tar-heel-experts-unlock-science-behind-swimming/" 
    },
    {
        title: "The Catherine Wheel",
        description: "Interned at a Toronto-based Advisory Fund. Engaged directly with pre-seed and seed stage founders, gained insight on company building from the ground up, and pitched GPs potential investment opportunities.",
        imageUrl: "/projects/tcw.gif",
        link: "https://www.thecatherinewheel.co/" 
    },
    {
        title: "Issues in Global Hunger: Tackling Corn Disease",
        description: "Worked on Global Hunger from a first-principles basis, and identified corn disease in advanced and developing nations as an important factor to alleviating food supply pressures. Created a CV algorithm for flyover drones to identify and treat disease as soon as it happens.",
        imageUrl: "/projects/cd.webp",
        link: "https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949"
    },
    {
        title: "brAInstorm",
        description: "HackTheNorth '22 Winner. Created a BCI that analyzed brainwaves for feeling, and fed the outputs into an generative model that created artwork based on emotion.",
        imageUrl: "/projects/HTN.png",
        link: "https://youtu.be/r3z1rB29ZLU?si=d9o9UkN0tJxpzoO4"
    },
    {
        title: "GPT from Scratch",
        description: "Re-Built a Shakesperean LLM from scratch thanks to Andrej Karpathy. Learned a great deal about how GPTs work under the hood.",
        imageUrl: "/projects/gpt.jpg",
        link: "https://github.com/alexyev/gpt-from-scratch"
    },
    {
        title: "Student Consulting",
        description: "Consulted with IKEA group on revitalizing big-box stores and adapting to the changing needs of Gen Z, and with CAE on applying their existing products to new markets. Constructed standalone slide decks and pitched directly to VP-suite executives.",
        imageUrl: "/projects/consult.jpg",
        link: ""
    },
    {
        title: "Speaking Engagements",
        description: "Spoke at various conferences and venues around the world about my projects, including WebSummit, SXSW, The Change Leadership Conference, and the Toronto Microsoft HQ. Met some incredibly cool people along the way, like Brad Smith, Cathie Wood, Kelly Rutherford...",
        imageUrl: "/projects/speaking.jpg",
        link: "https://youtu.be/vShQhBSgw0k?si=HCcXeFD5EhIWSK8V"
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
                                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                            </Link>
                        ) : (
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
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