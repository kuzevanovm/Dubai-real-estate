import React, { useState } from 'react';
import dubai from '../images/dubai.png';

const Contact = () => {
  // Состояние для хранения значений формы
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы

    // Имитация отправки данных на сервер
    alert(`Form submitted with the following details:
      Email: ${email}
      Name: ${name}
      Phone: ${phone}
      Country: ${country}
    `);

    // Очистка формы после отправки
    setEmail('');
    setName('');
    setPhone('');
    setCountry('');
  };

  return (
    <section className="contact-us" style={{ backgroundImage: `url(${dubai})` }}>
      <div className="contact-container">
        <p>Do you have any questions?</p>
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

