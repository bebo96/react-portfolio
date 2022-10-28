import React from 'react';
import coverImage from '../../assets/cover/my-image.jpg';

function Portfolio() {
    return (
        <section className="my-5">
            <h1 id="about">Portfolio</h1>
            <div className="my-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={coverImage} className="my-2" style={{ width: 250, height: 250 }} alt="cover" />
                    </a>
                    <h4>Employee Tracker!</h4>
                    <a href="https://googlezzz.com" target="_blank" rel="noreferrer" style={{color:'white'}}>Github Repo</a>
                    <a href="https://googlezzz.com" target="_blank" rel="noreferrer" style={{color:'white'}}>Deployed Application</a>
                </div>


            </div>
        </section>
    );
}

export default Portfolio;
