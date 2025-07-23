
import '../assets/styles/title.css'

const Title = ({ title, mini_title }) => {
  return ( 
    <div className="top-titre">
      <div className="titre-lg">
        <hr />
        <h3>{title}</h3>
        <hr />
      </div>
      <h2>{mini_title}</h2>
    </div>
  );
}

export default Title;
