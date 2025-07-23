// useFeatures.js
import { useState } from 'react';

const useFeatures = () => {
    const [features] = useState([
        {
            title: "Custom Website & App Development",
            description: "BeksTech design and build responsive websites and mobile applications tailored to your business goals, user needs, and industry trends.",
            image: "/features/5661184.jpg"
        },
        {
            title: "Coding Training Programs",
            description: "From coding bootcamps for students to corporate digital upskilling workshops, BeksTech offer hands-on training for all levels of learners.",
            image: "/features/coding.jpg"
        },
        {
            title: "IT & Tech Consulting",
            description: "Our expert consultants help businesses navigate digital transformation,improve IT processes, and choose the right technology solutions.",
            image: "/features/consult.jpg"
        },
        {
            title: "Project Management & Support",
            description: "BeksTech provide end-to-end project management and ongoing technical support to ensure your projects are delivered on time and perform efficiently.",
            image: "/features/projectm.jpg"
        }
    ]);

    return features;
};

export default useFeatures;