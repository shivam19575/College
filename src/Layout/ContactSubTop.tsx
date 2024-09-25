import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactSubTop = () => {
  // Initialize the form reference
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Make sure form reference exists
    if (!form.current) {
      console.error("Form reference is null");
      return;
    }

    emailjs
      .sendForm("service_zqumam4", "template_gslxy6i", form.current, {
        publicKey: "bpkAhkZvtIl7Q4A4q",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          // Show success toast
          toast.success("Message Sent Successfully!", {
            bodyClassName: 'custom-toast-body',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Reseting the form fields after successful submission
          (e.target as HTMLFormElement).reset();  // Fix here
          console.log("Contact Form Submitted Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);

          // Show error toast
          toast.error("Failed to send message. Please try again!");
        }
      );
  };

  return (
    <div className="contactSubCont">
      {/* Left Side Content */}
      <div className="uptopcont">
        <div className="leftSideCont">
          {/* ...rest of the left-side content */}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="rightSideCont">
        <form ref={form} onSubmit={sendEmail} className="formBox">
          <input
            type="text"
            name="user_name"
            className="name"
            required
            placeholder="Full Name"
            maxLength={90}
            autoFocus
          />
          <br />
          <input
            type="email"
            className="name"
            name="user_email"
            required
            placeholder="Email Address"
          />
          <br />
          <input
            type="number"
            className="name"
            name="user_phone"
            required
            placeholder="Phone Number"
          />
          <textarea
            name="message"
            className="textArea"
            rows={5}
            required
            placeholder="Write Message"
          ></textarea>
          <br />
          <button type="submit" className="btn" value="Send">
            submit now
            <IoIosArrowDropleftCircle className="insideIconBtn" />
          </button>
        </form>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default ContactSubTop;
