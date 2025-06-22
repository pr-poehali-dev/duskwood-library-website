import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen library-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Icon
                name="Flame"
                size={64}
                className="text-orange-400 candle-glow drop-shadow-2xl"
                style={{ color: "#ff7f00" }}
              />
              <Icon
                name="Feather"
                size={32}
                className="absolute -top-2 -right-2 text-purple-400"
                style={{ color: "#9f7aea" }}
              />
            </div>
          </div>

          <h1 className="text-5xl font-bold font-serif mb-6 text-primary">
            DUSKWOOD LIBRARY SEARCH
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Добро пожаловать в таинственную библиотеку, где каждая книга хранит
            свои секреты, а каждая страница открывает новые миры.
          </p>

          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/catalog">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Исследовать каталог
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link to="/search">
                <Icon name="Search" size={20} className="mr-2" />
                Найти книгу
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-center mb-12 text-primary">
            Откройте для себя
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Library"
                  size={48}
                  className="mx-auto mb-4 text-accent"
                />
                <h3 className="text-xl font-serif font-bold mb-4">
                  Богатый каталог
                </h3>
                <p className="text-muted-foreground">
                  Коллекция редких и мистических книг, собранных со всех уголков
                  мира
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Search"
                  size={48}
                  className="mx-auto mb-4 text-accent"
                />
                <h3 className="text-xl font-serif font-bold mb-4">
                  Умный поиск
                </h3>
                <p className="text-muted-foreground">
                  Найдите именно то, что ищете, с помощью нашей системы поиска
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="mx-auto mb-4 text-accent"
                />
                <h3 className="text-xl font-serif font-bold mb-4">
                  Магия чтения
                </h3>
                <p className="text-muted-foreground">
                  Погрузитесь в интерактивные истории и откройте новые измерения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
