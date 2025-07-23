
import Formule from './Formule';
import Donate from './Donate';
import Local from './Local';

import ScrollToTopButton from './ScrollToTopButton';




const Contact = ({ isMobileMenuOpen }) => {
    return (


        <>
<div className="min-h-screen flex flex-col overflow-hidden">


            <Formule />


            <Donate />

            <Local/>
<Local/>
          
 {!isMobileMenuOpen && <ScrollToTopButton />}

           

</div>




        </>
    );
}

export default Contact;