# 🎬 CineVault — Библиотека фильмов

Персональная библиотека фильмов, созданная на **React 18**, **React Router v6** и **localStorage**. Просматривай коллекцию, изучай детали фильмов и добавляй новые — всё хранится прямо в браузере.

---

## 📸 Страницы приложения

| Маршрут | Описание |
|---------|----------|
| `/` | Главная страница с навигационными карточками |
| `/movies` | Сетка всех фильмов |
| `/movies/:id` | Детальная страница отдельного фильма |
| `/add` | Форма добавления нового фильма |
| `/about` | О приложении |
| `*` | Страница 404 — не найдено |

---

## 🚀 Быстрый старт

### Требования

- [Node.js](https://nodejs.org/) версии 18 и выше
- npm версии 9 и выше

### Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/your-username/movie-library.git

# 2. Перейти в папку проекта
cd movie-library

# 3. Установить зависимости
npm install

# 4. Запустить сервер разработки
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173) в браузере.

### Сборка для продакшна

```bash
npm run build
npm run preview
```

---

## 🗂 Структура проекта

```
movie-library/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              # Точка входа — монтирование BrowserRouter
    ├── App.jsx               # Маршруты + глобальное состояние фильмов
    ├── index.css             # Глобальные стили (тёмная кинематографическая тема)
    │
    ├── components/
    │   └── Navbar.jsx        # Липкий навбар с активными ссылками NavLink
    │
    ├── pages/
    │   ├── Home.jsx          # Главная — герой-секция и навигационные карточки
    │   ├── Movies.jsx        # Сетка фильмов через map()
    │   ├── MovieDetails.jsx  # Динамический маршрут — useParams + useNavigate
    │   ├── AddMovie.jsx      # Управляемая форма → localStorage → редирект
    │   ├── About.jsx         # Описание приложения и список возможностей
    │   └── NotFound.jsx      # Страница 404
    │
    └── utils/
        └── storage.js        # loadMovies / saveMovies / generateId + стартовые данные
```

---

## ⚙️ Стек технологий

| Инструмент | Версия | Назначение |
|------------|--------|-----------|
| React | 18.x | Библиотека для построения интерфейса |
| React Router | 6.x | Клиентская маршрутизация |
| Vite | 5.x | Сборщик и сервер разработки |
| localStorage | Web API | Сохранение данных в браузере |

---

## 🧠 Ключевые концепции с примерами

### React хуки (Hooks)

```jsx
// useState — управляемые поля формы
const [form, setForm] = useState({ title: '', year: '', rating: '' });

// Ленивая инициализация — localStorage читается только один раз при монтировании
const [movies, setMovies] = useState(() => loadMovies());
```

### React Router v6

```jsx
// Определение маршрутов в App.jsx
<Routes>
  <Route path="/"           element={<Home />} />
  <Route path="/movies"     element={<Movies movies={movies} />} />
  <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
  <Route path="/add"        element={<AddMovie onAdd={handleAddMovie} />} />
  <Route path="/about"      element={<About />} />
  <Route path="*"           element={<NotFound />} />
</Routes>

// Динамический сегмент URL — useParams в MovieDetails.jsx
const { id } = useParams();

// Программная навигация — кнопка "Назад"
const navigate = useNavigate();
<button onClick={() => navigate(-1)}>← Назад</button>
```

### Сохранение данных в localStorage

```js
// utils/storage.js

// Загрузить фильмы (при первом запуске — стартовые данные)
export function loadMovies() {
  const raw = localStorage.getItem('movieLibrary_movies');
  return raw ? JSON.parse(raw) : starterMovies;
}

// Сохранить массив фильмов
export function saveMovies(movies) {
  localStorage.setItem('movieLibrary_movies', JSON.stringify(movies));
}
```

---

## ✨ Возможности

- 🎞 **Просмотр** — адаптивная сетка с постером, названием, годом и рейтингом
- 🔍 **Детали фильма** — полное описание и метаданные на отдельной странице
- ➕ **Добавление фильмов** — форма с валидацией, без перезагрузки страницы
- 💾 **Постоянное хранение** — все данные сохраняются в `localStorage`
- 🌱 **Стартовые данные** — 6 фильмов загружаются при первом посещении
- 🧭 **Страница 404** — кастомный маршрут-перехватчик для несуществующих страниц
- 📱 **Адаптивный дизайн** — корректно работает на мобильных, планшетах и десктопах

---

## 📦 Доступные команды

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запустить локальный сервер разработки на `localhost:5173` |
| `npm run build` | Собрать оптимизированную продакшн-версию в папку `dist/` |
| `npm run preview` | Предпросмотр продакшн-сборки локально |

---

## 🗄 Формат данных

Каждый фильм в `localStorage` хранится в следующем виде:

```json
{
  "id": "1716400000000",
  "title": "Blade Runner 2049",
  "year": 2017,
  "rating": 8.0,
  "description": "Молодой охотник за репликантами обнаруживает давно скрытую тайну...",
  "image": "https://example.com/poster.jpg"
}
```


---

> Проект создан как учебный пример использования функциональных компонентов React, хуков и React Router v6.
