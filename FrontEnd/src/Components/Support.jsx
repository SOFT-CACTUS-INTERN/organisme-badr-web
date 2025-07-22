import Donate from './Donate'
import Care from './Care'
import ScrollToTopButton from './ScrollToTopButton';

const Support = ({ isMobileMenuOpen }) => {
    return ( 
        <div  className='flex flex-col gap-0 overflow-x-hidden'>
    
            <Care/>
            <Donate/>
             {!isMobileMenuOpen && <ScrollToTopButton />}
    </div>
    );
}

export default Support;
