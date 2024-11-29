import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from 'react-icons/hi2';

export default function Home() {
  return (
    <div>
        <header className="flex justify-between items-center w-full px-8 py-6">
            <div>
                <h1 className="text-2xl font-medium mt-3">Alexander Yevchenko</h1>
                <p className="text-sm italic opacity-60 -mt-1 text-center">per aspera ad astra</p>
            </div>
            <nav className="flex gap-8">
                <Link href="/" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer">Projects</Link>
                <Link href="/photos" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer">Photos</Link>
                <Link href="/literature" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer">Literature</Link>
            </nav>
        </header>
        <main className="flex w-full px-8 gap-8 mt-4">
            {/* Left column - Bio information */}
            <section className="w-1/4">
                <div className="space-y-6">
                    <div>
                        <Image
                            src="/profile.jpg"
                            alt="Profile photo"
                            width={175}
                            height={175}
                            className="rounded-lg mb-6"
                        />
                        <p className="text-sm opacity-80">Eighteen. <a href="https://www.moreheadcain.org/" className="hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer">Morehead-Cain Scholar</a> at<br/>The University of North Carolina at Chapel Hill.<br/>Computer Science.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-xl font-medium">Contact</h2>
                        <div className="text-sm opacity-80 space-y-1 mb-2">
                            <p>alexanderyevchenko[at]gmail[dot]com</p>
                            <p>Chapel Hill // Toronto // Earth</p>
                            <div className="flex gap-5 pt-2">
                                <a href="https://www.linkedin.com/in/alexanderyevchenko/" target="_blank" rel="noopener noreferrer">
                                <svg width="15" height="15" viewBox="0 0 24 24" className="fill-white hover:fill-[#c9ada7] transition-colors duration-300">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                </a>
                                <a href="https://github.com/alexyev" target="_blank" rel="noopener noreferrer">
                                    <svg width="15" height="15" viewBox="0 0 24 24" className="fill-white hover:fill-[#c9ada7] transition-colors duration-300">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="https://x.com/ayevch" target="_blank" rel="noopener noreferrer">
                                    <svg width="15" height="15" viewBox="0 0 24 24" className="fill-white hover:fill-[#c9ada7] transition-colors duration-300">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>                                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Middle column */}
            <section className="w-[37.5%]">
                <div className="">
                    <h2 className="text-2xl font-medium mb-4">Writing...</h2>
                    <div className="flex flex-col space-y-4">
                        <a href="https://yevch3nko.substack.com/p/steinbeck-on-the-human-soul?r=tig05" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Steinbeck on the Human Soul <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://yevchenko.substack.com/p/new-beginnings?r=tig05" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">New Beginnings <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://yevchenko.substack.com/p/sweat-on-the-water?r=tig05" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Sweat on the Water <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://yevchenko.substack.com/p/making-dreams-a-reality?r=tig05" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Making Dreams a Reality <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://yevchenko.substack.com/p/lessons-from-a-long-journey?r=tig05" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Lessons from a Long Journey <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://medium.com/geekculture/using-quantum-computers-to-price-options-5bd92ab5fe5c" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">Using Quantum Computers to Price Options <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                        <a href="https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949" className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer">The Global Food Crisis: Addressing Disease with Computer Vision <HiArrowUpRight className=" inline-block group-hover:opacity-100 transition-opacity duration-300" size={10} /></a>
                    </div>
                </div>
            </section>

            {/* Right column */}
            <section className="w-[37.5%]">
                <div className="">
                    <h2 className="text-2xl font-medium mb-4">Reading...</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-baseline">
                            <a className="text-lg">Think Again</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Adam Grant</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">East of Eden</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">John Steinbeck</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Sun Also Rises</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Ernest Hemingway</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Count of Monte Cristo</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Alexandre Dumas</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Crime and Punishment</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Fyodor Dostoevksy</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Thus Spoke Zarathustra</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Friedrich Nietzsche</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Meditations</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Marcus Aurelius</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Lord of the Rings</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">J. R. R. Tolkien</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">1984</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">George Orwell</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Great Gatsby</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">F. Scott Fitzgerald</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Elon Musk</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Walter Isaacson</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Idea Factory</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Jon Gertner</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Atonement</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Ian McEwan</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Siddhartha</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Hermann Hesse</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Setting Sun</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Osamu Dazai</a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">No Longer Human</a>
                            <a className="ml-2 text-xs text-[#c9ada7]">Osamu Dazai</a>
                        </div>
                    </div>
                </div> 
                <div className="mt-6 mb-6">
                    <h2 className="text-2xl font-medium mb-4">Watching...</h2>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-baseline">
                            <a className="text-lg">Good Will Hunting</a>
                            <a className="ml-2 text-xs text-[#c9ada7]"></a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">A Beautiful Mind</a>
                            <a className="ml-2 text-xs text-[#c9ada7]"></a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">The Shawshank Redemption</a>
                            <a className="ml-2 text-xs text-[#c9ada7]"></a>
                        </div>
                        <div className="flex items-baseline">
                            <a className="text-lg">Taxi Driver</a>
                            <a className="ml-2 text-xs text-[#c9ada7]"></a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  );
}
