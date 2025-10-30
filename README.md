# 🌱 SEEDRA — Frontend + Backend

<img src="https://i.ibb.co/0pqzWqR8/Frame-127.jpg" alt="Cover" style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">

> Современный веб‑проект с отдельными фронтенд и бекенд частями: Next.js на фронте и Kirby CMS (PHP) на беке

## 📋 Описание

SEEDRA — многостраничный сайт/витрина с богатым интерфейсом на фронтенде и управлением контентом через Kirby CMS на бэкенде. Репозиторий содержит обе части и позволяет запускать их независимо друг от друга для локальной разработки.

### ✨ Основные возможности

- **Разделение на фронтенд и бекенд** — независимые пайплайны разработки
- **Управление контентом** — Kirby CMS, удобное редактирование через файлы/панель
- **Современный UI** — Next.js 15 + React 19, SCSS, анимации
- **Тестирование** — Jest и @testing-library на фронте
- **Быстрый старт** — готовые скрипты запуска и сборки

## 🚀 Технологии

- **Frontend**: Next.js 15, React 19, TypeScript, SCSS, Framer Motion, Swiper
- **Backend**: PHP 8.1–8.3, Kirby CMS 4, Composer
- **Инструменты**: ESLint, Prettier, Jest, ts-jest

## 🛠️ Установка и запуск

### Предварительные требования

- Node.js 20+ (рекомендуется 22)
- npm 10+ или yarn/pnpm
- PHP 8.1–8.3
- Composer 2+

### Клонирование репозитория

```bash
git clone git@github.com:anyabravich/seedra.git
cd seedra
```

### Запуск фронтенда (Next.js)

```bash
cd frontend
npm install
npm run dev
# Откройте: http://localhost:3000
```

Другие команды фронтенда:

```bash
# Сборка продакшена
npm run build

# Запуск собранного приложения
npm start

# Линтинг
npm run lint

# Тесты
npm test
npm run test:watch
npm run test:coverage
```

### Запуск бекенда (Kirby CMS)

```bash
cd backend
composer install
composer start
# Откройте: http://localhost:8000
```

Примечание: Kirby может работать как через встроенный PHP‑сервер (как в скрипте выше), так и за Nginx/Apache. В продакшене рекомендуется настроить полноценный веб‑сервер.

## 📁 Структура проекта

```
seedra/
├── backend/                # PHP + Kirby CMS
│   ├── index.php           # Точка входа сайта (Kirby)
│   ├── composer.json       # Зависимости и скрипты (composer start)
│   ├── content/            # Контент сайта (Kirby CMS)
│   ├── site/               # Конфиги, шаблоны, плагины
│   ├── kirby/              # Ядро Kirby CMS
│   └── media/              # Медиа, кэш Kirby
└── frontend/               # Next.js приложение
    ├── src/                # Исходный код (app/, components/, hooks/ и т.д.)
    ├── public/             # Публичные ассеты
    ├── package.json        # Скрипты и зависимости
    └── next.config.mjs     # Конфигурация Next.js
```

## 🎯 Функциональность (высокоуровнево)

### Фронтенд

- Роутинг и страницы на Next.js 15 (App Router)
- Компонентный UI, анимации, адаптивная верстка (SCSS)
- Тестирование компонентов и страниц через Jest / Testing Library

### Бекенд

- Хранение и управление контентом через файловую структуру `content/`
- Шаблоны/сниппеты в `site/templates` и `site/snippets`
- Конфигурация сайта и маршрутов в `site/config`

## 🔗 Интеграция фронта и бэка

- Вариант 1 (локально): разворачивайте обе части параллельно на портах 3000 (frontend) и 8000 (backend). Для данных/контента можно:
  - Импортировать статический контент на фронт
  - Настроить API‑роуты Kirby и вызывать их с фронта (CORS/прокси)
- Вариант 2 (прод): собранный фронтенд деплоится на CDN/SSR‑платформу, Kirby — на PHP‑хостинге/сервере. Обмен — через публичные эндпоинты.

## 🧪 Тестирование (frontend)

```bash
cd frontend
npm test             # быстрый прогон
npm run test:ci      # для CI
npm run test:coverage
```

## 🧹 Качество кода (frontend)

```bash
cd frontend
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check
```

## 💡 Полезные заметки по Kirby

- Контент хранится в `backend/content/` в виде папок/файлов .txt/.yml
- Настройки и маршруты — `backend/site/config/*.php`
- Пользовательские плагины/методы — `backend/site/plugins/`
- Быстрый локальный сервер: `composer start` (PHP встроенный сервер на :8000)

## 📄 Лицензия

Проект создан для портфолио и образовательных целей.

---

<div align="center">
  <p>Сделано с ❤️ для SEEDRA</p>
  <p>Frontend: Next.js · Backend: Kirby CMS</p>
</div>
