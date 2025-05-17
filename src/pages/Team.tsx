
import Layout from "@/components/Layout";
import TeamSection from "@/components/Team";
import PageBanner from "@/components/PageBanner";

const Team = () => {
  return (
    <Layout>
      <PageBanner 
        title="Ons team"
        description="Maak kennis met ons toegewijde team van tandheelkundige professionals. Wij staan elke dag klaar om u de beste zorg te bieden."
      />
      
      <div className="dental-container py-12">
        <TeamSection />
      </div>
    </Layout>
  );
};

export default Team;
