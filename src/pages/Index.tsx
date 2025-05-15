
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TeamSection from "@/components/Team";
import ContactSection from "@/components/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
