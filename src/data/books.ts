export interface Book {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  readLink?: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Вендетта",
    author: "Интерактивная книга",
    coverUrl:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    description:
      "Захватывающая интерактивная история о мести, тайнах и выборе, который определяет судьбу.",
    readLink: "https://interactive-book-vendetta--preview.poehali.dev/",
  },
  {
    id: 2,
    title: "Тени прошлого",
    author: "А. Мистериус",
    coverUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description:
      "Мрачная история о семейных тайнах, скрытых в глубинах старинного поместья.",
  },
  {
    id: 3,
    title: "Зов темного леса",
    author: "Л. Дарквуд",
    coverUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description:
      "Мистическое путешествие через заколдованный лес, где каждый шаг может стать последним.",
  },
  {
    id: 4,
    title: "Хроники забытых миров",
    author: "Э. Фантазия",
    coverUrl:
      "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=300&h=400&fit=crop",
    description:
      "Эпическая сага о древних цивилизациях и магии, утраченной во времени.",
  },
  {
    id: 5,
    title: "Шепот в темноте",
    author: "Н. Готик",
    coverUrl:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    description:
      "Психологический триллер о доме, где стены помнят все секреты своих обитателей.",
  },
  {
    id: 6,
    title: "Последний маг",
    author: "В. Волшебник",
    coverUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop",
    description:
      "История о последнем хранителе древней магии в мире, где волшебство умирает.",
  },
  {
    id: 7,
    title: "Секреты библиотеки",
    author: "Б. Книгочей",
    coverUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description:
      "Загадочная история о библиотекаре, который обнаружил, что книги живут своей жизнью.",
  },
  {
    id: 8,
    title: "Проклятие рода",
    author: "С. Страшилка",
    coverUrl:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
    description:
      "Семейная сага о проклятии, которое преследует род на протяжении веков.",
  },
];
