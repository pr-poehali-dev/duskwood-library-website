import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BookCardProps {
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  readLink?: string;
}

const BookCard = ({
  title,
  author,
  coverUrl,
  description,
  readLink,
}: BookCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card">
      <CardContent className="p-4">
        <div className="aspect-[3/4] mb-4 overflow-hidden rounded-md bg-muted">
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h3 className="font-serif font-bold text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        <p className="text-sm text-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {readLink ? (
          <Button asChild className="w-full">
            <a href={readLink} target="_blank" rel="noopener noreferrer">
              <Icon name="BookOpen" size={16} className="mr-2" />
              Читать
            </a>
          </Button>
        ) : (
          <Button variant="outline" className="w-full" disabled>
            <Icon name="Lock" size={16} className="mr-2" />
            Скоро доступно
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookCard;
