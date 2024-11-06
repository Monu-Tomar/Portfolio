import contactCSS from "./../Contact/Contact.module.css";
import logo from './../../Assets/New-logo.jpg';

const Contact=()=>{


    const onSubmit = async (event) => {
        event.preventDefault();
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
        }
      };



    return(
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
                                <input type="text" placeholder="Enter Name" name="name" />
                                <input type="email" placeholder="Enter Email" name="email" />
                            </div>
                            <input type="text" placeholder="Subject" name="subject" />
                            <textarea placeholder="Message" name="massage"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                </div>
            </div>
            <div className={contactCSS.copyright}>
                <img src={logo} alt="Logo image" loading="lazy" />
                <h4>Monu Tomar © 2024</h4>
            </div>
        </div>
    );
}
export default Contact;