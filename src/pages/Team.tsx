
import Layout from "@/components/Layout";
import TeamSection from "@/components/Team";
import PageBanner from "@/components/PageBanner";

const Team = () => {
  return (
    <Layout>
      <PageBanner 
        title="Ons Team" 
        description="Ontmoet ons ervaren team dat u de beste tandheelkundige zorg biedt in een warme, persoonlijke omgeving."
      />
      <TeamSection />
    </Layout>
  );
};

export default Team;
