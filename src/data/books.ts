export interface Book {
  title: string;
  author: string;
  authorLast: string;
  cover: string;
  review?: string;
  note?: string; // short contextual note (e.g. for currently-reading / next-up)
  startedAt?: string; // free-form, e.g. "March 2026"
}

// Books finished — the shelf on /reading.
export const books: Book[] = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    authorLast: "Adams",
    cover: "/books/the-hitchhiker-s-guide-to-the-galaxy.jpg",
  },
  {
    title: "Confessions",
    author: "Saint Augustine",
    authorLast: "Augustine",
    cover: "/books/confessions.jpg",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    authorLast: "Aurelius",
    cover: "/books/meditations.jpg",
  },
  {
    title: "Giovanni's Room",
    author: "James Baldwin",
    authorLast: "Baldwin",
    cover: "/books/giovanni-s-room.jpg",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    authorLast: "Bradbury",
    cover: "/books/fahrenheit-451.jpg",
  },
  {
    title: "No Longer Human",
    author: "Osamu Dazai",
    authorLast: "Dazai",
    cover: "/books/no-longer-human.jpg",
  },
  {
    title: "The Setting Sun",
    author: "Osamu Dazai",
    authorLast: "Dazai",
    cover: "/books/the-setting-sun.jpg",
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    authorLast: "Dickens",
    cover: "/books/a-tale-of-two-cities.jpg",
  },
  {
    title: "Play It As It Lays",
    author: "Joan Didion",
    authorLast: "Didion",
    cover: "/books/play-it-as-it-lays.jpg",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    authorLast: "Dostoevsky",
    cover: "/books/crime-and-punishment.jpg",
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    authorLast: "Dumas",
    cover: "/books/the-count-of-monte-cristo.jpg",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    authorLast: "Fitzgerald",
    cover: "/books/the-great-gatsby.jpg",
  },
  {
    title: "The Idea Factory",
    author: "Jon Gertner",
    authorLast: "Gertner",
    cover: "/books/the-idea-factory.jpg",
  },
  {
    title: "For Whom the Bell Tolls",
    author: "Ernest Hemingway",
    authorLast: "Hemingway",
    cover: "/books/for-whom-the-bell-tolls.jpg",
  },
  {
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
    authorLast: "Hemingway",
    cover: "/books/the-sun-also-rises.jpg",
  },
  {
    title: "Demian",
    author: "Hermann Hesse",
    authorLast: "Hesse",
    cover: "/books/demian.jpeg",
  },
  {
    title: "Siddhartha",
    author: "Hermann Hesse",
    authorLast: "Hesse",
    cover: "/books/siddhartha.jpg",
  },
  {
    title: "Steppenwolf",
    author: "Hermann Hesse",
    authorLast: "Hesse",
    cover: "/books/steppenwolf.jpg",
  },
  {
    title: "Elon Musk",
    author: "Walter Isaacson",
    authorLast: "Isaacson",
    cover: "/books/elon-musk.jpg",
  },
  {
    title: "Dubliners",
    author: "James Joyce",
    authorLast: "Joyce",
    cover: "/books/dubliners.jpg",
  },
  {
    title: "On the Road",
    author: "Jack Kerouac",
    authorLast: "Kerouac",
    cover: "/books/on-the-road.jpg",
  },
  {
    title: "Of Human Bondage",
    author: "W. Somerset Maugham",
    authorLast: "Maugham",
    cover: "/books/of-human-bondage.jpeg",
  },
  {
    title: "Bel-Ami",
    author: "Guy de Maupassant",
    authorLast: "Maupassant",
    cover: "/books/bel-ami.jpg",
  },
  {
    title: "Atonement",
    author: "Ian McEwan",
    authorLast: "McEwan",
    cover: "/books/atonement.jpg",
  },
  {
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    authorLast: "Murakami",
    cover: "/books/norwegian-wood.jpg",
  },
  {
    title: "Thus Spoke Zarathustra",
    author: "Friedrich Nietzsche",
    authorLast: "Nietzsche",
    cover: "/books/thus-spoke-zarathustra.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    authorLast: "Orwell",
    cover: "/books/1984.jpg",
  },
  {
    title: "The Bell Jar",
    author: "Sylvia Plath",
    authorLast: "Plath",
    cover: "/books/the-bell-jar.jpg",
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    authorLast: "Saint-Exupéry",
    cover: "/books/the-little-prince.jpg",
  },
  {
    title: "East of Eden",
    author: "John Steinbeck",
    authorLast: "Steinbeck",
    cover: "/books/east-of-eden.jpg",
  },
  {
    title: "The Red and the Black",
    author: "Stendhal",
    authorLast: "Stendhal",
    cover: "/books/the-red-and-the-black.jpg",
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    authorLast: "Tolkien",
    cover: "/books/the-lord-of-the-rings.jpg",
  },
  {
    title: "The Epic of Gilgamesh",
    author: "Unknown",
    authorLast: "Unknown",
    cover: "/books/the-epic-of-gilgamesh.jpg",
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    authorLast: "Vonnegut",
    cover: "/books/slaughterhouse-five.jpg",
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    authorLast: "Wilde",
    cover: "/books/the-picture-of-dorian-gray.jpg",
  },
];

// Books actively being read. Replace as your reading changes.
// Populate `note` with a short line of context and `startedAt` with
// a free-form date. Leave empty array if nothing currently active.
export const currentlyReading: Book[] = [
  {
    title: "Madame Bovary",
    author: "Gustave Flaubert",
    authorLast: "Flaubert",
    cover: "/books/madame-bovary.jpg",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    authorLast: "Diamond",
    cover: "/books/guns-germs-and-steel.jpg",
  },
  {
    title: "A Portrait of the Artist as a Young Man",
    author: "James Joyce",
    authorLast: "Joyce",
    cover: "/books/a-portrait-of-the-artist-as-a-young-man.jpg",
  },
];

// Books queued to read next. Order matters — top of the list is next up.
export const nextUp: Book[] = [
  // Example shape — replace with your real queue:
  // {
  //   title: "Infinite Jest",
  //   author: "David Foster Wallace",
  //   authorLast: "Wallace",
  //   cover: "/books/infinite-jest.jpg",
  // },
];
