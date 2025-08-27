# Button Component

Универсальный компонент кнопки с поддержкой различных вариантов стилизации, размеров и состояний.

## Возможности

- ✅ Различные варианты стилизации (primary, secondary, border, icon)
- ✅ Различные размеры (small, medium, large)
- ✅ Состояние загрузки
- ✅ Состояние отключения
- ✅ Полная ширина
- ✅ Поддержка всех HTML атрибутов кнопки
- ✅ Доступность (focus-visible, aria-labels)
- ✅ Анимации и переходы

## Использование

### Базовое использование

```tsx
import Button from '@/components/Button';

// Простая кнопка
<Button>Click me</Button>

// Кнопка с вариантом
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="border">Border Button</Button>
<Button variant="icon">Icon Button</Button>
```

### Размеры

```tsx
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>
```

### Состояния

```tsx
// Кнопка в состоянии загрузки
<Button loading>Loading...</Button>

// Отключенная кнопка
<Button disabled>Disabled Button</Button>

// Кнопка с полной шириной
<Button fullWidth>Full Width Button</Button>
```

### Комбинирование свойств

```tsx
<Button
  variant="primary"
  size="large"
  loading
  fullWidth
  onClick={() => console.log("clicked")}
>
  Submit Form
</Button>
```

### С дополнительными атрибутами

```tsx
<Button
  type="submit"
  form="myForm"
  aria-label="Submit form"
  data-testid="submit-button"
>
  Submit
</Button>
```

## API

### Props

| Prop        | Type                              | Default     | Description               |
| ----------- | --------------------------------- | ----------- | ------------------------- |
| `children`  | `React.ReactNode`                 | -           | Содержимое кнопки         |
| `variant`   | `ButtonVariant`                   | `"primary"` | Вариант стилизации        |
| `size`      | `ButtonSize`                      | `"medium"`  | Размер кнопки             |
| `className` | `string`                          | `""`        | Дополнительные CSS классы |
| `loading`   | `boolean`                         | `false`     | Состояние загрузки        |
| `fullWidth` | `boolean`                         | `false`     | Полная ширина кнопки      |
| `disabled`  | `boolean`                         | `false`     | Отключенное состояние     |
| `type`      | `"button" \| "submit" \| "reset"` | `"button"`  | Тип кнопки                |

### Варианты (variant)

- `primary` - Основная кнопка (зеленая)
- `secondary` - Вторичная кнопка (белая с зеленым текстом)
- `border` - Кнопка с рамкой
- `icon` - Кнопка для иконок

### Размеры (size)

- `small` - Маленькая кнопка
- `medium` - Средняя кнопка (по умолчанию)
- `large` - Большая кнопка

## Стилизация

Компонент использует CSS модули. Основные классы:

- `.button` - Базовые стили
- `._primary`, `._secondary`, `._border`, `._icon` - Варианты
- `._small`, `._medium`, `._large` - Размеры
- `._fullWidth` - Полная ширина
- `._loading` - Состояние загрузки
- `._disabled` - Отключенное состояние

## Доступность

- Поддержка `aria-label` и других ARIA атрибутов
- Фокус с помощью `focus-visible`
- Правильная семантика для screen readers
- Поддержка клавиатурной навигации
