"use client";

import { ChangeEvent, useState } from "react";
import styles from "./page.module.scss";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Checkbox from "@/components/Checkbox";
import Icons from "@/components/Icons";
import { IconName } from "@/components/Icons/types";
import Label from "@/components/Label";
import Rating from "@/components/Rating";
import Quantity from "@/components/Quantity";
import RangeSlider from "@/components/RangeSlider";
import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import BlogCard from "@/components/BlogCard";
import FeedbackCard from "@/components/FeedbackCard";
import Category from "@/components/Category";
import Search from "@/components/Search";

const UIKitPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [rating, setRating] = useState(3);
  const [quantity, setQuantity] = useState(1);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);

  const iconNames: IconName[] = [
    "instagram",
    "facebook",
    "search",
    "basket",
    "calling",
    "msg",
    "all",
    "menu",
    "arrow",
    "range-line",
    "filter",
    "available",
    "vegetables",
    "bundles",
    "fruits",
    "supplies",
    "flowers",
    "herbs",
    "minus",
    "plus",
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>UI Kit - Seedra</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Иконки</h2>
        <div className={styles.iconsGrid}>
          {iconNames.map(iconName => (
            <div key={iconName} className={styles.iconItem}>
              <Icons iconName={iconName} />
              <span className={styles.iconName}>{iconName}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Кнопки</h2>
        <div className={styles.buttonsGrid}>
          <div className={styles.buttonGroup}>
            <h3>Primary</h3>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
          </div>
          <div className={styles.buttonGroup}>
            <h3>Secondary</h3>
            <Button variant="secondary" size="small">
              Small
            </Button>
            <Button variant="secondary" size="medium">
              Medium
            </Button>
            <Button variant="secondary" size="large">
              Large
            </Button>
          </div>
          <div className={styles.buttonGroup}>
            <h3>Border</h3>
            <Button variant="border" size="small">
              Small
            </Button>
            <Button variant="border" size="medium">
              Medium
            </Button>
            <Button variant="border" size="large">
              Large
            </Button>
          </div>
          <div className={styles.buttonGroup}>
            <h3>Icon</h3>
            <Button variant="icon" size="small">
              <Icons iconName="search" />
            </Button>
            <Button variant="icon" size="medium">
              <Icons iconName="search" />
            </Button>
            <Button variant="icon" size="large">
              <Icons iconName="search" />
            </Button>
          </div>
          <div className={styles.buttonGroup}>
            <h3>Состояния</h3>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
            <Button fullWidth>Full Width</Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Поля ввода</h2>
        <div className={styles.inputsGrid}>
          <div className={styles.inputGroup}>
            <h3>Input</h3>
            <Input
              label="Обычное поле"
              type="text"
              name="text"
              placeholder="Введите текст"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Введите email"
            />
            <Input
              label="Пароль"
              type="password"
              name="password"
              placeholder="Введите пароль"
            />
            <Input
              label="Обязательное поле"
              type="text"
              name="required"
              placeholder="Обязательное поле"
              required
            />
            <Input
              label="Поле с ошибкой"
              type="text"
              name="error"
              placeholder="Поле с ошибкой"
              error="Это поле обязательно для заполнения"
            />
            <Input
              label="Отключенное поле"
              type="text"
              name="disabled"
              placeholder="Отключенное поле"
              disabled
            />
          </div>
          <div className={styles.inputGroup}>
            <h3>Textarea</h3>
            <Textarea
              label="Обычное поле"
              name="textarea"
              placeholder="Введите текст"
              value={textareaValue}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setTextareaValue(e.target.value)
              }
            />
            <Textarea
              label="Обязательное поле"
              name="textarea-required"
              placeholder="Обязательное поле"
              required
            />
            <Textarea
              label="Поле с ошибкой"
              name="textarea-error"
              placeholder="Поле с ошибкой"
              error="Это поле обязательно для заполнения"
            />
            <Textarea
              label="Отключенное поле"
              name="textarea-disabled"
              placeholder="Отключенное поле"
              disabled
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Чекбоксы</h2>
        <div className={styles.checkboxesGrid}>
          <Checkbox
            label="Обычный чекбокс"
            name="checkbox1"
            checked={checkboxChecked}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCheckboxChecked(e.target.checked)
            }
          />
          <Checkbox label="Отключенный чекбокс" name="checkbox2" disabled />
          <Checkbox label="Чекбокс с ценой" name="checkbox3" price="29.99" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Рейтинг</h2>
        <div className={styles.ratingGroup}>
          <Rating rating={rating} ratingCount={0} />
          <span>Текущий рейтинг: {rating}</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Количество</h2>
        <div className={styles.quantityGroup}>
          <Quantity 
            value={quantity}
            onChange={setQuantity}
            min={1}
            max={10}
          />
          <span>Текущее количество: {quantity}</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Слайдер</h2>
        <div className={styles.sliderGroup}>
          <RangeSlider
            value={rangeValue}
            onChange={setRangeValue}
            min={0}
            max={100}
          />
          <span>
            Текущие значения: {rangeValue[0]} - {rangeValue[1]}
          </span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Аккордеон</h2>
        <div className={styles.accordionGroup}>
          <Accordion title="Заголовок 1">
            <p>Содержимое первого аккордеона</p>
          </Accordion>
          <Accordion title="Заголовок 2">
            <p>Содержимое второго аккордеона</p>
          </Accordion>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Карточки</h2>
        <div className={styles.cardsGrid}>
          <Card
            id={1}
            title="Простая карточка"
            price={29.99}
            url="/products/1"
          />
          <BlogCard
            title="Заголовок блога"
            description="Описание статьи блога"
            image="/blog-1.png"
            time="2024-01-15"
          />
          <FeedbackCard />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Лейблы</h2>
        <div className={styles.labelsGrid}>
          <Label text="available" />
          <Label text="new" />
          <Label text="sale" />
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Поиск</h2>
        <div className={styles.searchGroup}>
          <Search />
        </div>
      </section>
    </div>
  );
};

export default UIKitPage;
