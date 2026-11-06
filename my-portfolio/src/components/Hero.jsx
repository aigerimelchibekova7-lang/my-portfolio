import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">
            ДОБРО ПОЖАЛОВАТЬ В МОЁ ПОРТФОЛИО
          </p>
          <h1>
            Привет, я <br />
            <span>Элчибекова Айгерим</span>
          </h1>
          <h2>Начинающий фронтенд-разработчик</h2>
          <p className="hero-description">
            Я создаю современные, адаптивные и интерактивные
            веб-сайты с помощью HTML, CSS, JavaScript и React.
            Мне нравится превращать идеи в красивые цифровые проекты.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">
              Мои проекты 
            </a>

            <a href="#contact" className="hero-btn-outline">
              Связаться со мной
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/aigerimelchibekova7-lang/" target="_blank" rel="noreferrer">
              GitHub 
            </a>
          </div>

        </div>

        <div className="hero-image">

          <div className="hero-circle">
            <span>AA</span>
          </div>


        </div>

      </div>
    </section>
  );
}

export default Hero;