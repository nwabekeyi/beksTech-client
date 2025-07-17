import React from 'react';
import useFeatures from '../hooks/useFeatures';
import "../styles/Features.css";

function Features() {
    const features = useFeatures();

    return (
        <div className='Block featuresBlock' id='features'>
            <center><p className='subHead'>Features</p></center>
            <center><p className="heading blockHeading">Powerful Features Tailored for Your Tech Needs</p></center>
            <center>
                <p className="desc blockDesc">
                    From web and mobile app development to digital training and expert tech consulting, our solutions come packed with features that help businesses, schools, and individuals succeed in today’s digital world.
                </p>
            </center>
            <div className="features">
                {features.map((feature, index) => (
                    <div className="feature" key={index}>
                        <div>
                            <p className="featureHead">{feature.title}</p>
                            <p className="featureDesc">{feature.description}</p>
                        </div>
                        <div className="featureImg">
                            <img src={feature.image} alt={feature.title} style={{ width: "100%" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;