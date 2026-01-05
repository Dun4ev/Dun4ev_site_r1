<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1vuATN9flhhq7C751H2MSKuQp__v7S17K
Live Site: https://dun4ev.github.io/

## 📚 Документация

Для удобства все руководства перенесены в папку `docs/`:

- [**Как обновить сайт**](docs/КАК_ОБНОВИТЬ_САЙТ.md) — основная инструкция по обновлению контента.
- [**Инструкция по переводу**](docs/TRANSLATION_GUIDE.md) — как работать с RU/EN версиями.
- [**Гайд по контенту**](docs/CONTENT_GUIDE.md) — детализация структуры данных.
- [**Шпаргалка**](docs/ШПАРГАЛКА.md) — быстрые команды и советы.
- [**Деплой**](docs/DEPLOY.md) — инструкции по сборке и публикации.
- [**GitHub Pages**](docs/GITHUB_PAGES.md) — специфичные настройки хостинга.

> [!NOTE]
> Если вы работаете с ИИ-помощником, важные инструкции для него находятся в [AGENTS.md](AGENTS.md).

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
