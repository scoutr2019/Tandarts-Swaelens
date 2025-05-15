
import Layout from "@/components/Layout";
import ContactSection from "@/components/Contact";

const Contact = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Contact</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Heeft u vragen of wenst u meer informatie? Neem gerust contact met ons op. Wij staan klaar om u te helpen.
        </p>
        
        <ContactSection />
      </div>
    </Layout>
  );
};

export default Contact;
