import React from 'react';
import useFaq from '../hooks/useFaq';

// CSS
import "../styles/Faq.css";

// Boxicons
import "boxicons";

function Faq() {
    const { questions, openFaqs, toggleFaq } = useFaq();

    return (
        <div className='Block faqBlock' id='faq'>
            <center><p className="subHead">FAQ</p></center>
            <center><p className="heading blockHeading">Frequently Asked Questions About Our Tech Services</p></center>
            <center>
                <p className="desc blockDesc">
                    Have questions about our services like website & app development, tech consulting, or training programs? Browse our FAQs to get quick answers or reach out to us directly for more info.
                </p>
            </center>

            <div className="faqs">
                {questions.map((faq, index) => (
                    <div key={index} className="faq" onClick={() => toggleFaq(index)}>
                        <div>
                            <p style={{ lineHeight: "1.5em" }}>{faq.question}</p>
                            <box-icon name={openFaqs[index] ? 'x' : 'plus'} color="white"></box-icon>
                        </div>
                        <span style={{ display: openFaqs[index] ? 'flex' : 'none' }}>{faq.answer}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Faq;