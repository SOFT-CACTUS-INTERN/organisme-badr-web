import React from 'react';
import activiteGraph14 from '../assets/svgs/graph14.svg';
import { useNavigate } from 'react-router-dom';
import { moreNavigate, contactNavigate } from './utils';

const ActiviteCard = ({ imageSrc, title, location, description, categorie, onClickCard }) => {
  const navigate = useNavigate();
//  const  activite=document.querySelector('.activite');
//  activite.addEventListener('mousedown', e => {
//  alert("hello");
  
// });
  return (
    <div className="activite" onClick={onClickCard}>
      <div className="image-div">
        <button className="btn-activite">
          {categorie}
          <div className="out"></div>
        </button>
        <div
          className="activite-pecture"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>

      <div className="activite-content">
        <h2>{title}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <div className="btn-groupe">
          <button
            className="left-btn"
            onClick={(e) => {
              e.stopPropagation();
              contactNavigate(navigate);
            }}
          >
            <img className="activite-graph24" src={activiteGraph14} alt="Icon" />
            تواصل معنا
          </button>

          <button
            className="right-btn"
            onClick={(e) => {
              e.stopPropagation();
              moreNavigate(navigate);
            }}
          >
            للتعرف على المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActiviteCard;
