import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import projectList from './components/pages/projectData';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact';
import Portfolio from './components/Project';
//import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('AboutMe');

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio data={projectList} />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };
  return (
    <div className="MyPortfolio">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
// function App() {

//   return (
//     <div>
//       <Header />
//       <Footer />
//       </div>
//   );
// }





// const [ currentSection, handleSectionChange] = useState();

// const renderPage = () => {
//   switch (currentSection) {
//     case 'Portfolio':
//       return <Portfolio />;
//     case 'Contact':
//         return <Contact />;
//         case 'Resume':
//           return <Resume />;
//           default: 
//             return <AboutMe />;
//   }
// };
// return (
//   <div className="myPortfolio">
//  {/* <Header 
//   currentSection={currentSection}
//   handleSectionChange={handleSectionChange}
//  />
//   <div>
//   { renderPage(currentSection) }
//  </div>
//  //<Footer />  */}
//     </div>
//   );
// }

export default App;
