import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {


  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {aboutSelected &&
          
            <About></About>
        }
        {contactSelected &&
          
            <ContactForm></ContactForm>
        }
        {resumeSelected &&
          
          <Resume></Resume>
        }
        {portfolioSelected &&
          
          <Portfolio></Portfolio>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
