import React from 'react';
import noteTaker from '../../assets/cover/note-taker.jpg';
import runBuddy from '../../assets/cover/run-buddy.png';
import photoPort from '../../assets/cover/photo-port.png';
import techBlog from '../../assets/cover/tech-blog.png';
import workDay from '../../assets/cover/work-day-scheduler.png';
import agileHub from '../../assets/cover/agile-hub.png';

function Portfolio() {
    return (
        <section className="my-5">
            <h1 id="about">Portfolio</h1>
            <div className="my-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://rocky-ravine-07288.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={noteTaker} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Note Taker</h4>
                    <a href="https://github.com/bebo96/note-taker" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://rocky-ravine-07288.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://bebo96.github.io/run-buddy/" target="_blank" rel="noreferrer">
                        <img src={runBuddy} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Run Buddy</h4>
                    <a href="https://github.com/bebo96/run-buddy" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://bebo96.github.io/run-buddy/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://bebo96.github.io/photo-port/" target="_blank" rel="noreferrer">
                        <img src={photoPort} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Photo Port</h4>
                    <a href="https://github.com/bebo96/photo-port" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://bebo96.github.io/photo-port/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://cryptic-mountain-81850.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={techBlog} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Tech Blog</h4>
                    <a href="https://github.com/bebo96/Tech-Blog" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://cryptic-mountain-81850.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://bebo96.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
                        <img src={workDay} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Work Day Scheduler</h4>
                    <a href="https://github.com/bebo96/work-day-scheduler" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://bebo96.github.io/work-day-scheduler/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <a href="https://shielded-brook-97560.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={agileHub} className="my-2" style={{ width: 250, height: 250, objectFit: 'cover' }} alt="cover" />
                    </a>
                    <h4>Agile Hub</h4>
                    <a href="https://github.com/bebo96/agile-hub" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Github Repo</a>
                    <a href="https://shielded-brook-97560.herokuapp.com/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Deployed Application</a>
                </div>

            </div>
        </section>
    );
}

export default Portfolio;
