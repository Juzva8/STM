import React from 'react';
import './Home.css';
import artist from '../../Assets/main.jpg';


const styles = {
    main: {
      lineHeight: "1.5em",
      fontSize: "22px",
    },
    artist: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px"
    },
  };
  function About() {
    return (
      <div className="about">
        <div className="row">
          <div className="col-12 col-lg-7 pl-lg-0 pr-lg-5">
            <h5 className="about__h5" style={styles.main}>
            STRATTON TERRACE MARKETING
            </h5>
            <h5 className="about__h5" style={styles.main}>
          
            I am excited to welcome you to Athlete Recruiting! 
</h5>
              <h6>  Each and every STM recruiter is an athlete, went through the recruiting process, and we know the academic process as well. We came to learn that there are a ton of colleges you can play for, and there is an equal amount of them giving out scholarships. We want to be that initial guide map in achieving the most important goal of all,  your degree!


</h6>
 
          </div>
          <div className="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
              <img id="artist" src={artist} alt="Artist" className="img-fluid mb-xl-5" style={styles.artist} />
          </div>
        </div>  
      </div>
    );
  }

export default About