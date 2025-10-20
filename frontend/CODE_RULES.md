# Правила кодирования для проекта Seedra

## Структура компонентов

### 1. Организация файлов

Каждый компонент должен находиться в отдельной папке со следующей структурой:

```
ComponentName/
├── index.tsx          # Основной компонент (только UI)
├── types.ts           # TypeScript типы и интерфейсы
├── constants.ts       # Константы (если есть)
├── utils.ts           # Утилитарные функции (если есть)
├── useComponentHook.tsx # Специфичный хук (если нужен)
├── page.module.scss   # Стили компонента
└── README.md          # Документация (для сложных компонентов)
```

### 2. Разделение ответственности

#### Компоненты (index.tsx)

- **ТОЛЬКО UI логика** - рендеринг, обработка событий
- **БЕЗ бизнес-логики** - никаких API вызовов, сложных вычислений
- **БЕЗ состояния** - только props и локальные UI состояния (hover, focus)
- **БЕЗ хуков** - кроме стандартных React хуков для UI

#### Типы (types.ts)

- Все интерфейсы и типы компонента
- Экспорт всех типов с префиксом `I` для интерфейсов
- Типы должны быть максимально специфичными

#### Хуки

**Переиспользуемые хуки (src/hooks/):**

- Хуки, которые используются в нескольких компонентах
- Общая бизнес-логика
- API вызовы
- Управление глобальным состоянием

**Специфичные хуки (внутри папки компонента):**

- Хуки, используемые только в одном компоненте
- Локальная логика компонента
- Хуки для сложных UI состояний

#### Утилиты (utils.ts)

- Чистые функции
- Вспомогательные функции для компонента
- Функции форматирования, валидации

### 3. Правила именования

#### Файлы

- `index.tsx` - основной компонент
- `types.ts` - типы
- `constants.ts` - константы
- `utils.ts` - утилиты
- `page.module.scss` - стили

#### Компоненты

- PascalCase: `Button`, `ProductCard`
- Функциональные компоненты с типизацией: `const Button: FC<ButtonProps> = ...`

#### Типы и интерфейсы

- Интерфейсы с префиксом `I`: `IButton`, `IProduct`
- Типы без префикса: `ButtonVariant`, `ProductSize`
- Enum'ы в PascalCase: `ButtonSize`, `ProductStatus`

#### Переменные и функции

- camelCase: `handleClick`, `isLoading`
- Булевы переменные с префиксом `is/has/can`: `isVisible`, `hasError`, `canSubmit`

### 4. Структура компонента

```tsx
// index.tsx
import { FC } from "react";
import { ComponentProps } from "./types";
import styles from "./page.module.scss";

const ComponentName: FC<ComponentProps> = ({ prop1, prop2, ...restProps }) => {
  // Только UI логика
  return <div className={styles.container}>{/* JSX */}</div>;
};

export default ComponentName;
```

### 5. Правила для хуков

#### Размещение

**Переиспользуемые хуки:**

- В папке `src/hooks/`
- Один хук = одна папка с файлами
- Структура: `useHookName/index.ts`, `useHookName/types.ts`, `useHookName/utils.ts`

**Специфичные хуки:**

- Внутри папки компонента
- Один хук = один файл
- Имя файла: `useComponentHook.tsx`

#### Структура хука

**Переиспользуемый хук (src/hooks/):**

```tsx
// src/hooks/useFavorites/index.ts
export { useFavorites } from "./useFavorites";
export type { IUseFavorites } from "./types";

// src/hooks/useFavorites/useFavorites.tsx
import { useState, useEffect } from "react";
export const useFavorites = (param: ParamType) => {
  // Логика хука
  return {
    /* значения */
  };
};
```

**Специфичный хук (в компоненте):**

```tsx
// ComponentName/useComponentHook.tsx
import { useState } from "react";

export const useComponentHook = (param: ParamType) => {
  // Логика хука
  return {
    /* значения */
  };
};
```

### 6. Правила для типов

#### Размещение

- Типы компонента в `types.ts` внутри папки компонента
- Общие типы в `src/types/`
- Типы API в `src/types/api/`

#### Структура

```tsx
// types.ts
export interface IComponentName {
  // Свойства компонента
}

export type ComponentVariant = "primary" | "secondary";

export interface IComponentProps extends IComponentName {
  // Дополнительные props
}
```

### 7. Стили

#### SCSS модули

- Использовать CSS модули: `page.module.scss`
- Имена классов в kebab-case: `.button-container`
- Избегать вложенности глубже 3 уровней

#### Импорт стилей

```tsx
import styles from "./page.module.scss";
```

### 8. Импорты

#### Порядок импортов

1. React и библиотеки
2. Внутренние компоненты
3. Типы
4. Стили

```tsx
import { FC, useState } from "react";
import { NextImage } from "next/image";

import Button from "../Button";
import { IProduct } from "./types";
import styles from "./page.module.scss";
```

### 9. Обработка событий

#### Именование

- `handle` + действие: `handleClick`, `handleSubmit`
- `on` + событие: `onChange`, `onFocus`

#### Структура

```tsx
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // Обработка события
};
```

### 10. Props и деструктуризация

#### Деструктуризация с значениями по умолчанию

```tsx
const Component: FC<ComponentProps> = ({
  prop1 = "default",
  prop2,
  ...restProps
}) => {
  // Компонент
};
```

#### Rest props

- Всегда использовать `...restProps` для передачи дополнительных атрибутов
- Типизировать через расширение HTML атрибутов

### 11. Состояние

#### Локальное состояние

- Только для UI состояний (открыт/закрыт, фокус, hover)
- Использовать `useState` для простых состояний

#### Глобальное состояние

- Выносить в контекст или внешнее состояние
- Использовать кастомные хуки для управления

### 12. Производительность

#### Мемоизация

- `React.memo` для компонентов
- `useMemo` для вычислений
- `useCallback` для функций

#### Ленивая загрузка

- `React.lazy` для больших компонентов
- Динамические импорты для необязательных функций

### 13. Тестирование

#### Структура тестов

- Тесты рядом с компонентами: `ComponentName.test.tsx`
- Тесты хуков: `useHookName.test.tsx`

#### Покрытие

- Минимум 80% покрытие кода
- Тестировать логику, не реализацию

### 14. Документация

#### Комментарии

- JSDoc для сложных функций
- Комментарии для неочевидной логики
- README.md для сложных компонентов

#### Примеры использования

- В README.md компонента
- Storybook stories для UI компонентов

## Примеры правильной структуры

### ✅ Правильно

```tsx
// Button/index.tsx
import { FC } from "react";
import { ButtonProps } from "./types";
import styles from "./page.module.scss";

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...restProps
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
```

```tsx
// Button/types.ts
export interface IButton {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export interface ButtonProps
  extends IButton,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}
```

### ❌ Неправильно

```tsx
// Смешивание логики и UI
const Button = ({ children, variant = "primary" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleApiCall = async () => {
    // API логика в компоненте
  };

  return <button onClick={handleApiCall}>{children}</button>;
};
```

## Чек-лист для проверки

- [ ] Компонент находится в отдельной папке
- [ ] Типы вынесены в `types.ts`
- [ ] Бизнес-логика вынесена в хуки
- [ ] Утилиты вынесены в `utils.ts`
- [ ] Компонент содержит только UI логику
- [ ] Используется правильное именование
- [ ] Импорты упорядочены
- [ ] Props типизированы
- [ ] Используются CSS модули
- [ ] Есть обработка ошибок
- [ ] Компонент покрыт тестами
