import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";

const Catalog = () => {
  return (
    <div className="min-h-screen library-bg">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-serif mb-4 text-primary">
            Каталог книг
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследуйте нашу коллекцию мистических и захватывающих историй.
            Каждая книга — это врата в новый мир.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              coverUrl={book.coverUrl}
              description={book.description}
              readLink={book.readLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
