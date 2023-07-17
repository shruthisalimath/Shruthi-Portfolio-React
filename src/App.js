import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

// import AboutMe from './components/pages/AboutMe';
// import Contact from './components/pages/Contact';
// import Portfolio from './components/pages/Portfolio';
// import Resume from './components/pages/Resume';

function App() {

  return (
    <div>
      <Header />
      <Footer />
      </div>
  );
}





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
