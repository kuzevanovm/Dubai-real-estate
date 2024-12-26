import React from "react";
import "../App.css";
import map from '../images/map.png';
import Footer from "../Components/Footer";
import { useState } from "react";

function Contact() {
  // Состояние для хранения данных формы
  const [formData, setFormData] = useState({
    name: "", 
    email: "",
    subject: "",
    message: "",
  });

  // Состояние для хранения ошибок
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Валидация формы
  const validateForm = () => {
    const newErrors = {};

    // Валидация имени
    if (!formData.name) {
      newErrors.name = "Name is required!";
    }

    // Валидация электронной почты
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address!";
    }

    // Валидация сообщения
    if (!formData.message) {
      newErrors.message = "Message is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Возвращаем true, если нет ошибок
  };

  // Обработчик сабмита формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузку страницы)

    // Выполняем валидацию формы
    if (validateForm()) {
      // Имитация отправки данных на сервер через alert
      alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);

      // Очистка формы
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-map-section">
        <div className="contact-info">
          <h2>Dubai, UAE</h2>
          <p>205 Crib 687, 10th Floor, Prime Office Building, Dubai, UAE 3006, UAE</p>
          <p><strong>Phone:</strong> +99 (0) 344 956 4050</p>
          <p><strong>Email:</strong> info@dubairealty.com</p>
          <p><strong>Follow us:</strong> Social media links</p>
          <p><strong>Work Hours:</strong> Monday - Friday: 08:00 - 17:30</p>
        </div>
        <img
          src={map}
          alt="Map of Dubai"
          className="contact-map"
        />
      </div>
      <div className="contact-form-section">
        <h2>Be in touch with us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            
            <input
              type="email"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>
          <div className="form-row">
            <textarea
              placeholder="Message *"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
