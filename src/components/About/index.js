import React from 'react';
import coverImage from '../../assets/cover/my-image.jpg';
function About() {
  return (
    <section className="my-5" style={{display:'flex', flexDirection:'column', alignItems: 'center', textAlign:'center'}}>
      <h1>Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: 500, height: 600 }} alt="cover" />
      <div className="my-2">
        <p>
            Aspiring Fullstack Developer completing a 6-month Bootcamp at Carleton Universities Fullstack Developer Bootcamp. 

            I decided to take this Bootcamp to push myself to the fullest, and that was definetly achieved through this amazing program and instructors. 
        </p>
      </div>
    </section>
  );
}

export default About;
