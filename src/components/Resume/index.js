import React from 'react';
function Resume() {
    let url = "https://drive.google.com/file/d/10KBtvGRHttZOywIRkTefwn1xxdLJ7Wh_/view?usp=sharing"
  return (
      <div className="my-2" style={{display:'flex', flexDirection:'column', alignItems:'start'}}>
      <h1 id="about">Download my resume!</h1>
        <a href={url} style={{color:'white'}}>Ibrahim Imran Resume (Click here to download)</a>

            <h1>Front-end Profeciencies</h1>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
            <h1>Back-end Profeciencies</h1>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MondoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
      </div>

  );
}

export default Resume;
