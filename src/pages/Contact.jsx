import React  from "react"; 
import '../styles/Contact.css';
function Contact(){
    return(
       <>
        <div className="contact">
            <div>
            <p>Contact us at:</p>
            <p>📞01234567899</p>
            <p>lizaesther@gmail.com</p>
            </div>
            <form action="" method="POST">
                <label htmlFor="name">Full names</label>
                <input type="text"  name="name" placeholder="enter your names here.."/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="enter your email here.."/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10" placeholder="enter your message here.."></textarea>
                <label htmlFor="button"></label>
                <input type="submit"  value="submit"/>
            </form>
        </div>
        </>
    )  
 }

export default Contact;  ;