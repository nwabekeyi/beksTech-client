// useFaqToggle.js
import { useState } from "react";

function useFaqToggle() {
    const questions = [
               {
            question: "What services do you offer?",
            answer: "We provide a wide range of tech solutions including website development, mobile app development, tech consulting, and digital training programs for individuals, schools, and businesses."
        },
        {
            question: "Do you provide training for students?",
            answer: "Yes! We offer tech training programs for secondary school students as well as corporate digital upskilling programs for organizations and individuals."
        },
        {
            question: "Can you build a website or mobile app for my business?",
            answer: "Absolutely! We specialize in building responsive websites and mobile apps tailored to meet your business goals and audience needs."
        },
        {
            question: "Do you offer tech consulting services?",
            answer: "Yes. Our experienced consultants can help guide you through digital transformation, IT project management, technology adoption, and other tech-related business decisions."
        },
        {
            question: "How can I get started with your services?",
            answer: "Simply contact us through our website or via email. Tell us your needs and we’ll schedule a free consultation to discuss the right solutions for you."
        }
    ];

    const [openFaqs, setOpenFaqs] = useState({});

    const toggleFaq = (index) => {
        setOpenFaqs((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return { questions, openFaqs, toggleFaq };
}

export default useFaqToggle;