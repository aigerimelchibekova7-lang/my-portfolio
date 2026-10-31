import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>AIGERIM</h2>
          <p>фронтенд-разработчик</p>
        </div>

        <p className="footer-description">
          Создаю современные и удобные веб-сайты
          с помощью React.
        </p>

        <nav className="footer-nav">
          <a href="#home">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <div className="footer-bottom">
          <p>© 2026 Aigerim. Все права защищены.</p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub 
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;