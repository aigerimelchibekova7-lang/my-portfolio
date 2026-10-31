import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-title">
          <p>ПОЗНАКОМИМСЯ</p>
          <h2>Обо <span>мне</span></h2>
        </div>

        <div className="about-content">

          <div className="about-card">
            <div className="about-icon">✦</div>
            <h3>Кто я?</h3>
            <p>
              Меня зовут Айгерим Элчибекова.
              Я начинающий Frontend-разработчик,
              увлекаюсь созданием современных
              и удобных веб-сайтов.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">⌘</div>
            <h3>Мой путь</h3>
            <p>
              Я изучаю HTML, CSS, JavaScript и React.
              Постоянно практикуюсь, создаю собственные
              проекты и совершенствую свои навыки.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon">🚀</div>
            <h3>Моя цель</h3>
            <p>
              Стать профессиональным Frontend-разработчиком,
              создавать качественные цифровые продукты
              и развиваться в сфере IT.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;