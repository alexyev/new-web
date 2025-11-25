
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const books = [
  { title: "1984", author: "George Orwell", isbn: "9780141036144" },
  { title: "A Tale of Two Cities", author: "Charles Dickens", isbn: "9780141439600" },
  { title: "Atonement", author: "Ian McEwan", isbn: "9780099429791" },
  { title: "Bel-Ami", author: "Guy de Maupassant", isbn: "9780140443158" },
  { title: "The Bell Jar", author: "Sylvia Plath", isbn: "9780571268863" },
  { title: "Confessions", author: "Saint Augustine", isbn: "9780140441147" },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", isbn: "9780140449266" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevksy", isbn: "9780140449136" },
  { title: "Demian", author: "Hermann Hesse", isbn: "9781958403310" },
  { title: "Dubliners", author: "James Joyce", isbn: "9780140186475" },
  { title: "East of Eden", author: "John Steinbeck", isbn: "9780140186390" },
  { title: "Elon Musk", author: "Walter Isaacson", isbn: "9781982181284" },
  { title: "The Epic of Gilgamesh", author: "Unknown", isbn: "9780140449198" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", isbn: "9781451673319" },
  { title: "For Whom the Bell Tolls", author: "Ernest Hemingway", isbn: "9780684803357" },
  { title: "Giovanni's Room", author: "James Baldwin", isbn: "9780141186351" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "9780141182636" },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", isbn: "9780345391803" },
  { title: "The Idea Factory", author: "Jon Gertner", isbn: "9780143122793" },
  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", isbn: "9780156012195" },
  { title: "The Lord of the Rings", author: "J. R. R. Tolkien", isbn: "9780618640157" },
  { title: "Meditations", author: "Marcus Aurelius", isbn: "9780140449334" },
  { title: "No Longer Human", author: "Osamu Dazai", isbn: "9780811204811" },
  { title: "Norwegian Wood", author: "Haruki Murakami", isbn: "9780307744661" },
  { title: "On the Road", author: "Jack Kerouac", isbn: "9780140283297" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", isbn: "9780141439570" },
  { title: "Play It As It Lays", author: "Joan Didion", isbn: "9780374529949" },
  { title: "The Red and the Black", author: "Stendhal", isbn: "9780140447644" },
  { title: "The Setting Sun", author: "Osamu Dazai", isbn: "9780811200325" },
  { title: "Siddhartha", author: "Hermann Hesse", isbn: "9780141181233" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", isbn: "9780440180296" },
  { title: "Steppenwolf", author: "Hermann Hesse", isbn: "9780312278670" },
  { title: "The Sun Also Rises", author: "Ernest Hemingway", isbn: "9780684830513" },
  { title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", isbn: "9780140441185" },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
};

const publicDir = path.join(__dirname, '../public/books');

if (!fs.existsSync(publicDir)){
    fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadAll() {
  console.log('Starting download of book covers...');
  
  for (const book of books) {
    const slug = book.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const filename = `${slug}.jpg`;
    const filepath = path.join(publicDir, filename);
    
    // Clean ISBN
    const isbn = book.isbn.replace(/[^0-9X]/g, '');
    
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${book.title} - already exists`);
      continue;
    }

    const url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
    
    try {
      console.log(`Downloading ${book.title} (${isbn})...`);
      await downloadImage(url, filepath);
      // Check if the file is valid (OpenLibrary returns a generic image or 1x1 sometimes if not found, but usually a jpg)
      // For now we assume it worked.
    } catch (error) {
      console.error(`Failed to download ${book.title}: ${error.message}`);
    }
    
    // Be nice to the API
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('Done!');
}

downloadAll();

