
import Layout from "@/components/Layout";
import TeamSection from "@/components/Team";

const Team = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Ons team</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Maak kennis met ons toegewijde team van tandheelkundige professionals. Wij staan elke dag klaar om u de beste zorg te bieden in een comfortabele en vriendelijke omgeving.
        </p>
        
        <TeamSection />
      </div>
    </Layout>
  );
};

export default Team;
