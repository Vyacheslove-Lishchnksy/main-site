# lishchynskyi.site

Персональний сайт-портфоліо Вячеслава Ліщинського: обрані проекти, живий полігон
браузерних експериментів і контакти.

## Стек

- Vite + React 19 + TypeScript
- Чистий CSS (design tokens, адаптив, `prefers-reduced-motion`)
- Матричний дощ на `<canvas>` — власна реалізація без залежностей
- Reveal-анімації на `IntersectionObserver`, scroll spy у навігації

## Локальний запуск

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # типчек + продакшн-збірка в dist/
npm run preview    # перегляд продакшн-збірки
npm run lint       # oxlint
```

## Структура

```
src/
  components/      # секції сторінки та дрібні UI-блоки
  data/
    site.ts        # ім'я, посилання, навігація, факти
    content.ts     # проекти, полігон, стек, факти про мене
  App.tsx          # композиція головної сторінки
  index.css        # reset + design tokens
  App.css          # стилі секцій
```

Весь контент сторінки зібраний у `src/data/`, тому тексти й посилання можна
оновлювати без правок розмітки.

## Деплой на GitHub Pages

1. Залий репозиторій на GitHub (гілка `main`).
2. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. Пуш у `main` запускає `.github/workflows/deploy.yml` — сайт збереться і
   опублікується автоматично.

`vite.config.ts` використовує `base: './'`, тому збірка працює і в підкаталозі
`username.github.io/repo-name/`, і на власному домені.

### Альтернатива: Vercel / Netlify

Build command: `npm run build`, output directory: `dist`.

## Нотатки

- Матричний дощ поважає `prefers-reduced-motion`: замість анімації малюється
  статичний кадр.
- Анімації reveal не блокують контент для скрінрідерів: це звичайний DOM,
  прихований лише візуально до появи у в'юпорті.
