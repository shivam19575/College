import ContactSubTop from '../../Layout/ContactSubTop';
import HeroTop from '../../Layout/HeroTop';

const Contact = () => {
  return (
    <>
      <HeroTop text1={"Contact"} />
      <ContactSubTop />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14410.766859401856!2d81.8552188!3d25.4485683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719980544951!5m2!1sen!2sin"
        title="google map"
        style={{ width: "100%", height: "450px", marginTop: "80px", border: 0 }}
        allowFullScreen={true}  // Fix here
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
