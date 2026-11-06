import "./Contact.css";
import {
  MessageCircle,
  Send
} from "lucide-react";

import {
  FaGithub,
  FaInstagram
} from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      name: "WhatsApp",
      username: "+996 998 750 323",
      icon: <MessageCircle size={28} />,
      link: "https://wa.me/+996 998 750 323/",
      color: "whatsapp"
    },
    {
      name: "Telegram",
      username: "Aigerim",
      icon: <Send size={28} />,
      link: "https://t.me/@Aika_kook/",
      color: "telegram"
    },
    {
      name: "GitHub",
      username: "Aigerim",
      icon: <FaGithub size={28} />,
      link: "https://github.com/aigerimelchibekova7-lang/",
      color: "github"
    },
    {
      name: "Instagram",
      username: "@elchibekova_06",
      icon: <FaInstagram size={28} />,
      link: "https://www.instagram.com/elchibekova_06/",
      color: "instagram"
    }
  ];

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <div className="contact-title">
          <p>ДАВАЙТЕ ОБЩАТЬСЯ</p>

          <h2>
            Свяжитесь <span>со мной</span>
          </h2>

          <p className="contact-subtitle">
            Вы можете найти меня в социальных сетях.
            Буду рада новым знакомствам и интересным проектам!
          </p>
        </div>

        <div className="contact-grid">

          {contacts.map((item) => (

            <a
              href={item.link}
              key={item.name}
              target="_blank"
              rel="noreferrer"
              className={`contact-card ${item.color}`}
            >

              <div className="contact-card-icon">
                {item.icon}
              </div>

              <div className="contact-card-info">
                <h3>{item.name}</h3>
                <p>{item.username}</p>
              </div>
              <span className="contact-arrow">
                ↗
              </span>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Contact;