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
    title: "Vendetta",
    author: "Интерактивная книга",
    coverUrl:
      "https://i.pinimg.com/736x/09/b8/dd/09b8dd289144f54e863e0928f615fc1f.jpg",
    description:
      "Захватывающая интерактивная история о мести, тайнах и выборе, который определяет судьбу.",
    readLink: "https://interactive-book-vendetta--preview.poehali.dev/",
  },
  {
    id: 2,
    title: "Сад и огород 101 совет",
    author: "Катрин Освальд",
    coverUrl:
      "https://i.pinimg.com/736x/0d/b5/47/0db547fd818f4680cfacfb65534d69bb.jpg",
    description:
      "Практическое руководство по садоводству и огородничеству с проверенными советами от опытного садовода.",
  },
  {
    id: 3,
    title: "Архитектура Дасквуда",
    author: "Сэмюэль Р.",
    coverUrl:
      "https://i.pinimg.com/736x/1a/10/49/1a10499bcf41685218b149b19538a5a2.jpg",
    description:
      "Исследование уникальной архитектуры таинственного города Дасквуд и его готических строений.",
  },
  {
    id: 4,
    title: "Чума в Дасквуде",
    author: "Карстен Джерико",
    coverUrl:
      "https://i.pinimg.com/736x/00/a0/21/00a02143c4dca82ebfa829a3cea44c1f.jpg",
    description:
      "Мрачная история о эпидемии, поразившей город Дасквуд, и героях, боровшихся за выживание.",
  },
  {
    id: 5,
    title: "Полночь в Дасквуде",
    author: "С. Куин",
    coverUrl:
      "https://i.pinimg.com/736x/52/79/08/5279085d8852503a31fb3640de695aa8.jpg",
    description:
      "Мистический триллер о событиях, происходящих в Дасквуде после полуночи, когда город преображается.",
  },
  {
    id: 6,
    title: "Флора и Фауна",
    author: "Адам П.",
    coverUrl:
      "https://i.pinimg.com/736x/15/e9/6c/15e96ce334c761bdaf7b995e1936e084.jpg",
    description:
      "Подробный справочник о растительном и животном мире с красочными иллюстрациями и научными описаниями.",
  },
  {
    id: 7,
    title: "Мертвый город",
    author: "Игра",
    coverUrl:
      "https://everbytestudio.com/wp-content/uploads/2018/11/Text-Adventure-Dead-City-Android-iOS.jpg",
    description:
      "Текстовая приключенческая игра о выживании в постапокалиптическом мире зомби.",
  },
  {
    id: 8,
    title: "Moonvale",
    author: "Игра",
    coverUrl:
      "https://everbytestudio.com/wp-content/uploads/2023/05/MOONVALE-Web-Selection-Button.jpg",
    description:
      "Интерактивная история с элементами романтики и мистики в загадочном городе Мунвейл.",
  },
];
