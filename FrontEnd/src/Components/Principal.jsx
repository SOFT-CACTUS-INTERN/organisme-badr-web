import graph7 from '../assets/svgs/graph7.svg';
 import '../assets/styles/principal.css'

const Principal = ({heading,mini_heading}) => {
    return (  
<div className='principal-title'>
        <img className="principal-graph7" src={graph7} alt="icon" />
        <div className='principal-name'>
          <h1>{heading} <span>{mini_heading}</span></h1>
          <hr className='principal-hr' />
        </div>
      </div>

    );
}
 
export default Principal;