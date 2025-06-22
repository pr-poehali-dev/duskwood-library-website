import { useState, useMemo } from "react";
import Navigation from "@/components/Navigation";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { books } from "@/data/books";
import Icon from "@/components/ui/icon";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = useMemo(() => {
    if (!searchQuery.trim()) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen library-bg">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-serif mb-4 text-primary">
            Поиск книг
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Найдите свою следующую любимую книгу среди сокровищ нашей библиотеки
          </p>

          <div className="max-w-md mx-auto relative">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Поиск по названию, автору или описанию..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-base"
            />
          </div>
        </div>

        {searchQuery && (
          <div className="mb-6">
            <p className="text-muted-foreground">
              Найдено книг: {filteredBooks.length}
              {searchQuery && ` по запросу "${searchQuery}"`}
            </p>
          </div>
        )}

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
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
        ) : (
          <div className="text-center py-16">
            <Icon
              name="BookX"
              size={64}
              className="mx-auto mb-4 text-muted-foreground"
            />
            <h3 className="text-xl font-serif font-bold mb-2">
              Книги не найдены
            </h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или исследуйте весь каталог
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
