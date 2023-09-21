import './Contact.css'

function Contact() {
    return (
        <div className="contact">

            <div className='blur3'></div>
            <div className="blur4"></div>
            <div className="contact-card">
                <h4>Interested in hiring me?!</h4>
                <a href="mailto:jamila.mahamed95@icloud.com">
                    <button>Let me know!</button>
                </a>
            </div>
        </div>
    );
}

export default Contact;