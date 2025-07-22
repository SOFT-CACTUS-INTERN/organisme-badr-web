import React, { useState } from 'react';
import '../assets/styles/formule.css';
import graph32 from '../assets/svgs/graph32.svg';
import form_graph28 from '../assets/svgs/graph28.svg';
import graph33 from '../assets/svgs/graph33.svg';
import graph34 from '../assets/svgs/graph34.svg';
import axios from 'axios';

const Formule = () => {
  const [reponse, setReponse] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/contacts', form)
      .then(response => {
        setForm({ name: '', email: '', phone: '', message: '' });
        setReponse(true);

        setTimeout(() => {
          setReponse(false);
        }, 4000);
      })
      .catch(err => {
        if (err.response?.data?.errors) {
          alert('Erreur: ' + Object.values(err.response.data.errors).join(', '));
        } else {
          alert('Erreur réseau');
        }
      });
  };

  return (
    <section className="formule-section">
      
      <img className="graph34" src={graph34} alt="" />

      <div className="form-pect">
        <div className="pecture">
          <img src="/organisme-badr-web/flags/study.png" alt="Study" />
        </div>

        <div className="formule">
          <h2>يسعدنا سماعكم.</h2>
          <img className="graph33" src={graph33} alt="" />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="الاسم الأول والأخير"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              type="email"
              name="email"
              placeholder="البريد إلكتروني"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />

            <textarea
              name="message"
              placeholder="رسالتك"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <button type="submit" className="send">
              إرسال
            </button>

            <div className="btn-form">
              <button type="button" className="first">
                <img src={form_graph28} alt="" /> اقرأ المزيد عنا
              </button>

              <button type="button" className="second">
                تبرع الآن <img src={graph32} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Message de succès */}
      {reponse && (
        <div className="success-message">
          <div className="content">
            <svg viewBox="0 0 24 24" className="check-icon">
              <path
                fill="green"
                d="M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.4z"
              />
            </svg>
            <p>تم إرسال رسالتك بنجاح !</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Formule;
