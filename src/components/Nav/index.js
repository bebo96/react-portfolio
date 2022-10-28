import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
        portfolioSelected,
        setPortfolioSelected,
        aboutSelected,
        setAboutSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/react-portfolio">
                    <span role="img" aria-label="camera"> 📸</span> Ibrahim Imran!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                        <span onClick={() =>{
                            setAboutSelected(true);
                            setContactSelected(false);
                            setResumeSelected(false);
                            setPortfolioSelected(false);
                        }}>
                            About me
                        </span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() =>{
                            setAboutSelected(false);
                            setContactSelected(true);
                            setResumeSelected(false);
                            setPortfolioSelected(false);
                        }}>
                            Contact
                        </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(false);
                            setPortfolioSelected(true);
                        }}>
                            Portfolio
                        </span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setAboutSelected(false);
                            setContactSelected(false);
                            setResumeSelected(true);
                            setPortfolioSelected(false);
                        }}>
                            Resume
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
