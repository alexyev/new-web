'use client'
import { Header, SidebarSection } from "@/components/sidebar";
import ArticleEmbed from "@/components/articleEmbed";
import BookCarousel from "@/components/bookCarousel";

// Updated book list with new additions, Penguin ISBNs where available, and sorted alphabetically
const books = [
  { title: "1984", author: "George Orwell", isbn: "9780141036144" }, // Penguin Modern Classics
  { title: "A Tale of Two Cities", author: "Charles Dickens", isbn: "9780141439600" }, // Penguin Classics
  { title: "Atonement", author: "Ian McEwan", isbn: "9780099429791" }, // Vintage (Penguin Random House)
  { title: "Bel-Ami", author: "Guy de Maupassant", isbn: "9780140443158" }, // Penguin Classics
  { title: "The Bell Jar", author: "Sylvia Plath", isbn: "9780571268863" }, // Faber (Penguin Random House distribution often)
  { title: "Confessions", author: "Saint Augustine", isbn: "9780140441147" }, // Penguin Classics
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266" }, // Penguin Classics
  { title: "Crime and Punishment", author: "Fyodor Dostoevksy", isbn: "9780140449136" }, // Penguin Classics
  { title: "Demian", author: "Hermann Hesse", isbn: "9781958403310" }, // Penguin Classics
  { title: "Dubliners", author: "James Joyce", isbn: "9780140186475" }, // Penguin Classics
  { title: "East of Eden", author: "John Steinbeck", isbn: "9780140186390" }, // Penguin Classics
  { title: "Elon Musk", author: "Walter Isaacson", isbn: "9781982181284" }, // Simon & Schuster (No Penguin)
  { title: "The Epic of Gilgamesh", author: "Unknown", isbn: "9780140449198" }, // Penguin Classics
  { title: "Fahrenheit 451", author: "Ray Bradbury", isbn: "9781451673319" }, // Simon & Schuster
  { title: "For Whom the Bell Tolls", author: "Ernest Hemingway", isbn: "9780684803357" }, // Scribner
  { title: "Giovanni's Room", author: "James Baldwin", isbn: "9780141186351" }, // Penguin Modern Classics
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780141182636" }, // Penguin Modern Classics
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" }, // Del Rey (Penguin Random House)
  { title: "The Idea Factory", author: "Jon Gertner", isbn: "978-0143122791" }, // Penguin Books
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156012195" }, // Harcourt (not typically Penguin in US)
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", isbn: "9780618640157" }, // Mariner Books
  { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" }, // Penguin Classics
  { title: "No Longer Human", author: "Osamu Dazai", isbn: "9780811204811" }, // New Directions
  { title: "Norwegian Wood", author: "Haruki Murakami", isbn: "9780307744661" }, // Vintage (Penguin Random House)
  { title: "On the Road", author: "Jack Kerouac", isbn: "9780140283297" }, // Penguin Classics
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "9780141439570" }, // Penguin Classics
  { title: "Play It As It Lays", author: "Joan Didion", isbn: "9780374529949" }, // Fourth Estate / Farrar, Straus and Giroux
  { title: "The Red and the Black", author: "Stendhal", isbn: "9780140447644" }, // Penguin Classics
  { title: "The Setting Sun", author: "Osamu Dazai", isbn: "9780811200325" }, // New Directions
  { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780141181233" }, // Penguin Classics
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", isbn: "9780440180296" }, // Dell (Penguin Random House)
  { title: "Steppenwolf", author: "Hermann Hesse", isbn: "9780312278670" }, // Picador
  { title: "The Sun Also Rises", author: "Ernest Hemingway", isbn: "9780684830513" }, // Scribner
  { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", isbn: "9780140441185" }, // Penguin Classics
];

export default function Literature() {
  return (
    <div>
      <Header />

      <main className="flex flex-col lg:flex-row w-full px-4 lg:px-8 gap-8 mt-4 pb-20">
        <SidebarSection />

        {/* Writing section */}
        <section className="w-full lg:w-[37.5%] mt-8 lg:mt-0">
          <div className="">
            <h2 className="text-2xl font-medium mb-8 text-center lg:text-left border-b border-[#c9ada7]/20 pb-2">
              Writing
            </h2>
            <div className="flex flex-col space-y-4">
            <ArticleEmbed
                title="The Social Panopticon"
                url="https://yevch3nko.substack.com/p/the-social-panopticon?r=tig05"
                type="substack"
              />
            <ArticleEmbed
                title="On Advice"
                url="https://yevch3nko.substack.com/p/on-advice?r=tig05"
                type="substack"
              />
            <ArticleEmbed
                title="The Magic of Consciousness"
                url="https://yevch3nko.substack.com/p/the-magic-of-consciousness?r=tig05"
                type="substack"
              />
            <ArticleEmbed
                title="The High Agency Life"
                url="https://yevch3nko.substack.com/p/the-high-agency-life?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="On Expectations"
                url="https://yevch3nko.substack.com/p/on-expectations?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="On the Utility of Philosophy"
                url="https://yevch3nko.substack.com/p/on-the-utility-of-philosophy"
                type="substack"
              />
              <ArticleEmbed
                title="Steinbeck on the Human Soul"
                url="https://yevch3nko.substack.com/p/steinbeck-on-the-human-soul?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="New Beginnings"
                url="https://yevchenko.substack.com/p/new-beginnings?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="Sweat on the Water"
                url="https://yevchenko.substack.com/p/sweat-on-the-water?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="Making Dreams a Reality"
                url="https://yevchenko.substack.com/p/making-dreams-a-reality?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="Lessons from a Long Journey"
                url="https://yevchenko.substack.com/p/lessons-from-a-long-journey?r=tig05"
                type="substack"
              />
              <ArticleEmbed
                title="Using Quantum Computers to Price Options"
                url="https://medium.com/geekculture/using-quantum-computers-to-price-options-5bd92ab5fe5c"
                type="medium"
              />
              <ArticleEmbed
                title="The Global Food Crisis: Addressing Disease with Computer Vision"
                url="https://medium.com/@alexanderyevchenko/the-global-food-crisis-addressing-corn-disease-with-computer-vision-74edc76e949"
                type="medium"
              />
            </div>
          </div>
        </section>

        {/* Reading section */}
        <section className="w-full lg:w-[37.5%] mt-8 lg:mt-0">
          <div className="">
            <h2 className="text-2xl font-medium mb-6 text-center lg:text-left border-b border-[#c9ada7]/20 pb-2">
              Reading
            </h2>
            <div className="mb-6 overflow-y-visible">
              <BookCarousel books={books} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
