'use client'
import { Header, SidebarSection } from "@/components/sidebar";
import { useState } from "react";
import { HiArrowUpRight } from 'react-icons/hi2';
import { HiArrowDown, HiArrowUp } from 'react-icons/hi2';

const BookList = () => {
  const [showAll, setShowAll] = useState(false);
  
  const books = [
    { title: "Think Again", author: "Adam Grant" },
    { title: "East of Eden", author: "John Steinbeck" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevksy" },
    { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche" },
    { title: "Meditations", author: "Marcus Aurelius" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Elon Musk", author: "Walter Isaacson" },
    { title: "The Idea Factory", author: "Jon Gertner" },
    { title: "Atonement", author: "Ian McEwan" },
    { title: "Siddhartha", author: "Hermann Hesse" },
    { title: "The Setting Sun", author: "Osamu Dazai" },
    { title: "No Longer Human", author: "Osamu Dazai" },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
  ];

  const displayedBooks = showAll ? books : books.slice(0, 5);

  return (
    <>
      {displayedBooks.map((book, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center lg:items-baseline">
          <a className="text-lg text-center lg:text-left">{book.title}</a>
          <a className="text-xs text-[#c9ada7] lg:ml-2 text-center lg:text-left">{book.author}</a>
        </div>
      ))}
      
      <div className="flex items-center justify-center lg:justify-start">
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-lg font-medium hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer"
        >
          {showAll ? (
            <>
              Show Less <HiArrowUp className="inline-block" size={10}/>
            </>
          ) : (
            <>
              Show More <HiArrowDown className="inline-block" size={10}/>
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default function Literature() {
  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row w-full px-4 lg:px-8 gap-8 mt-4">
        <SidebarSection />

        {/* Writing section */}
        <section className="w-full lg:w-[37.5%] mt-8 lg:mt-0">
          <div className="">
            <h2 className="text-2xl font-medium mb-4 text-center lg:text-left">Writing...</h2>
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <a href="https://yevch3nko.substack.com/p/steinbeck-on-the-human-soul?r=tig05" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Steinbeck on the Human Soul <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://yevchenko.substack.com/p/new-beginnings?r=tig05" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                New Beginnings <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://yevchenko.substack.com/p/sweat-on-the-water?r=tig05" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Sweat on the Water <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://yevchenko.substack.com/p/making-dreams-a-reality?r=tig05" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Making Dreams a Reality <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://yevchenko.substack.com/p/lessons-from-a-long-journey?r=tig05" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Lessons from a Long Journey <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://medium.com/geekculture/using-quantum-computers-to-price-options-5bd92ab5fe5c" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Using Quantum Computers to Price Options <HiArrowUpRight className="inline-block" size={10} />
              </a>

              <a href="https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949" 
                 className="text-lg hover:text-[#c9ada7] transition-colors duration-300 cursor-pointer" 
                 target="_blank" 
                 rel="noopener noreferrer">
                The Global Food Crisis: Addressing Disease with Computer Vision <HiArrowUpRight className="inline-block" size={10} />
              </a>
            </div>
          </div>
        </section>

        {/* Reading section */}
        <section className="w-full lg:w-[37.5%] mt-8 lg:mt-0">
          <div className="">
            <h2 className="text-2xl font-medium mb-4 text-center lg:text-left">Reading...</h2>
            <div className="flex flex-col space-y-4">
              <BookList />
            </div>
          </div>
          <div className="mt-6 mb-6">
            <h2 className="text-2xl font-medium mb-4 text-center lg:text-left">Watching...</h2>
            <div className="flex flex-col space-y-4 items-center lg:items-start">
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                <a className="text-lg">Good Will Hunting</a>
                <a className="lg:ml-2 text-xs text-[#c9ada7]"></a>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                <a className="text-lg">A Beautiful Mind</a>
                <a className="lg:ml-2 text-xs text-[#c9ada7]"></a>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                <a className="text-lg">The Shawshank Redemption</a>
                <a className="lg:ml-2 text-xs text-[#c9ada7]"></a>
              </div>
              <div className="flex flex-col lg:flex-row items-center lg:items-baseline">
                <a className="text-lg">Taxi Driver</a>
                <a className="lg:ml-2 text-xs text-[#c9ada7]"></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
