
import '../assets/styles/title.css'

const Title = ({ title, mini_title }) => {
  return ( 
    <div className="top-titre">
      <div className="titre-lg">
        <div className='lg-left'></div>
        <h3>{title}</h3>
         <div className='lg-right'></div>
      </div>
      <h2>{mini_title}</h2>
    </div>
  );
}

export default Title;
