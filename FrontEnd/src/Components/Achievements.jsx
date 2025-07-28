 import ScrollToTopButton from "./ScrollToTopButton";
 import Foundation from "./Foundation";
 import Album from "./Album";
 import History from "./History";
import IntroAchev from "./IntroAchev";



const Achievements = ({isMobileMenuOpen}) => {
    return ( 
        

          <div className="flex flex-col gap-0 overflow bg-[#FCFAF8]  dark:bg-white dark:text-black ">
  <IntroAchev/>         
 <Foundation/>
 <History/>
 <Album/>
             {!isMobileMenuOpen && <ScrollToTopButton />}
        </div>
     );
}
 
export default Achievements;