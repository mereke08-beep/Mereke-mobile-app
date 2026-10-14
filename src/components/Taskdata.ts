// Жоба-тапсырма менеджері үшін дайын (mock) деректер.
// Нақты backend жоқ, сондықтан бәрі осы жерде қолмен жазылған.

export type TaskStatus = 'todo' | 'in_progress' | 'done';

export type Task = {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  deadline: string;
  assignee: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  emoji: string;
};

export const projects: Project[] = [
  {
    id: 'p1',
    name: ' nmn  льді қосымша',
    description: 'React Native оқу жобасы',
    emoji: '📱',
  },
  {
    id: 'p2',
    name: 'Веб-сайт',
    description: 'Компания үшін корпоративтік сайт',
    emoji: '🌐',
  },
  {
    id: 'p3',
    name: 'Дизайн жұмысы',
    description: 'Логотип пен брендбук жасау',
    emoji: '🎨',
  },
];

export const initialTasks: Task[] = [
  // Мобильді қосымша
  {
    id: 't1',
    projectId: 'p1',
    title: 'Login экранын жасау',
    description: 'Телефон мен құпия сөз арқылы кіру экранын дайындау керек.',
    status: 'done',
    deadline: '12.10.2026',
    assignee: 'Руслан',
  },
  {
    id: 't2',
    projectId: 'p1',
    title: 'Регистрация бетін жасау',
    description: 'Жаңа пайдаланушы тіркелетін форманы дайындау.',
    status: 'in_progress',
    deadline: '18.10.2026',
    assignee: 'Айгерим',
  },
  {
    id: 't3',
    projectId: 'p1',
    title: 'Push-хабарламаларды қосу',
    description: 'Пайдаланушыға жаңалықтар туралы хабарлама жіберу.',
    status: 'todo',
    deadline: '25.10.2026',
    assignee: 'Руслан',
  },

  // Веб-сайт
  {
    id: 't4',
    projectId: 'p2',
    title: 'Басты бетті версткалау',
    description: 'Figma дизайны бойынша басты бетті HTML/CSS-пен жасау.',
    status: 'in_progress',
    deadline: '15.10.2026',
    assignee: 'Данияр',
  },
  {
    id: 't5',
    projectId: 'p2',
    title: 'Байланыс формасын қосу',
    description: 'Пайдаланушы хабарлама жібере алатын форма жасау.',
    status: 'todo',
    deadline: '20.10.2026',
    assignee: 'Данияр',
  },
  {
    id: 't6',
    projectId: 'p2',
    title: 'Серверге жүктеу (деплой)',
    description: 'Дайын сайтты хостингке орналастыру.',
    status: 'todo',
    deadline: '30.10.2026',
    assignee: 'Айгерим',
  },

  // Дизайн жұмысы
  {
    id: 't7',
    projectId: 'p3',
    title: 'Логотип эскиздерін жасау',
    description: '3-4 түрлі логотип нұсқасын ұсыну.',
    status: 'done',
    deadline: '05.10.2026',
    assignee: 'Айгерим',
  },
  {
    id: 't8',
    projectId: 'p3',
    title: 'Түс палитрасын таңдау',
    description: 'Брендке сәйкес негізгі және қосымша түстерді анықтау.',
    status: 'done',
    deadline: '08.10.2026',
    assignee: 'Данияр',
  },
  {
    id: 't9',
    projectId: 'p3',
    title: 'Брендбукты рәсімдеу',
    description: 'Барлық элементтерді бір PDF құжатқа жинау.',
    status: 'in_progress',
    deadline: '22.10.2026',
    assignee: 'Руслан',
  },
];