import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <a href="#home" className="logo">
          AIGERIM
        </a>

        <nav className="nav">
          <a href="#home">Главная</a>
          <a href="#about">Обо мне</a>
          <a href="#skills">Навыки</a>
          <a href="#projects">Проекты</a>
          <a href="#contact">Контакты</a>
        </nav>

        <a href="#contact" className="header-btn">
          Связаться со мной
        </a>

      </div>
    </header>
  );
}

export default Header;