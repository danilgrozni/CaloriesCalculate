import React from "react";
import "./Header.scss";
import { useTheme } from "../context/ThemeContext.jsx";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <a
            className="header-telegram"
            href="https://t.me/zzxclolipop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть наш Telegram"
          >
            <svg
              className="telegram-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.5 3.5a1.25 1.25 0 0 0-1.35-.18L3.44 11.1a1.22 1.22 0 0 0 .16 2.27l3.92 1.27 1.47 4.78a1.24 1.24 0 0 0 1.05.87h.1a1.24 1.24 0 0 0 1-.55l2.16-3.16 4.05 3.1a1.25 1.25 0 0 0 1.99-.68l2.63-14.23a1.25 1.25 0 0 0-.58-1.37Zm-4.05 3.14-7.3 6.06a.62.62 0 0 0-.2.33l-.57 2.73-.86-2.77 8.73-6.35a.62.62 0 0 0-.72-.99l-11.5 6.22 16-7.26Z" />
            </svg>
            <span className="visually-hidden">Мы в Telegram</span>
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Переключить тему оформления"
          >
            <span className="toggle-icon" aria-hidden="true">
              {theme === "light" ? "🌞" : "🌙"}
            </span>
            <span className="toggle-label">
              {theme === "light" ? "Светлая тема" : "Тёмная тема"}
            </span>
          </button>
        </div>
        <h1 className="header-title">
          <span className="title-icon">💧</span>
          Калькулятор здоровья
        </h1>
        <p className="header-subtitle">
          Рассчитайте вашу ежедневную потребность в калориях и воде
        </p>
      </div>
    </header>
  );
};

export default Header;
