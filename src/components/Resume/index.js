import React from 'react';
function Resume() {
    let url = "https://drive.google.com/file/d/10KBtvGRHttZOywIRkTefwn1xxdLJ7Wh_/view?usp=sharing"
  return (
    <section className="my-5">
      <h1 id="about">Download my resume!</h1>
      <div className="my-2">
        <a href={url}>Ibrahim Imran Resume</a>
      </div>
    </section>
  );
}

export default Resume;
