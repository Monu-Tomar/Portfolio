import contactCSS from "./../Contact/Contact.module.css";
import logo from './../../Assets/New-logo.jpg';
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("sending....")
        const formData = new FormData(event.target);

        formData.append("access_key", "a32f89f5-bc27-4022-b494-26885bf5e292");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error (use proper mail id)", res);
            setResult(res.message);
        }
    };



    return (
        <div className={`${contactCSS.contact_wrapper} section`} id="contact">
            <div className="section_title">
                <h2>Contact Me</h2>
            </div>
            <div className={contactCSS.contact_container}>
                <div className={contactCSS.contactDelail}>
                    <h4>Let's Talk</h4>
                    <p> If you’re looking for a motivated junior developer to help build amazing products, I’d love to chat! Feel free to reach out. <br />
                        Thank You
                    </p>
                    <div className={contactCSS.detail}>
                        <h3><i className="ri-phone-line"></i> +91 9870700751</h3>
                        <h3><i className="ri-mail-line"></i> monusinghtomar107@gmail.com</h3>
                        <h3><i className="ri-map-pin-line"></i> Noida,Sector-15 (Uttar Pradesh)</h3>
                    </div>
                </div>
                <div className={contactCSS.contactForm}>
                    <form onSubmit={onSubmit}>
                        <div className={contactCSS.input_wrapper}  >
                            <input type="text" placeholder="Enter Name" name="name" required />
                            <input type="email" placeholder="Enter Email" name="email" required />
                        </div>
                        <input type="text" placeholder="Subject" name="subject" required />
                        <textarea placeholder="Message" name="massage" required></textarea>
                        <button type="submit">Submit</button>
                        <span>{result}</span>
                    </form>
                </div>
            </div>
            <div className={contactCSS.copyright}>
                <img src={logo} alt="Logo image" loading="lazy" />
                <h4>Monu Tomar &copy; {new Date().getFullYear()}</h4>
            </div>
        </div>
    );
}
export default Contact;