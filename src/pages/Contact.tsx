
import Layout from "@/components/Layout";
import ContactSection from "@/components/Contact";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  return (
    <Layout>
      <PageBanner 
        title="Contact"
        description="Heeft u vragen of wenst u meer informatie? Neem gerust contact met ons op. Wij staan klaar om u te helpen."
      />
      
      <div className="dental-container py-12">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
