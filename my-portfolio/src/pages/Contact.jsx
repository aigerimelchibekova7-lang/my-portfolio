import "./Contact.css";
import { Mail, MapPin, Send, GitBranch} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-title">
          <p>ДАВАЙТЕ ОБЩАТЬСЯ</p>
          <h2>Связаться <span>со мной</span></h2>
          <p className="contact-subtitle">
            Есть интересный проект или предложение?
            Буду рада обсудить сотрудничество!
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <h3>Контактная информация</h3>

            <p className="contact-text">
              Вы можете связаться со мной удобным для вас способом.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                ✉️
              </div>
              <div>
                <h4>Email</h4>
                <p>aigerimelchibekova7@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
               ⌘
              </div>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  Мой GitHub
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
               ⌖
              </div>
              <div>
                <h4>Местоположение</h4>
                <p>Кыргызстан</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>

            <h3>Напишите мне</h3>

            <input
              type="text"
              placeholder="Ваше имя"
              required
            />

            <input
              type="email"
              placeholder="Ваш Email"
              required
            />

            <input
              type="text"
              placeholder="Тема сообщения"
              required
            />

            <textarea
              placeholder="Ваше сообщение..."
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Отправить сообщение
              ➤ 
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;