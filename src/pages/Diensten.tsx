
import Layout from "@/components/Layout";
import Services from "@/components/Services";

const Diensten = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Onze diensten</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Bij Tandarts Swaelens bieden we een breed scala aan tandheelkundige diensten aan, van preventieve zorg tot geavanceerde behandelingen. 
          Onze praktijk streeft ernaar om hoogwaardige, persoonlijke zorg te leveren met de nieuwste technieken en materialen.
        </p>
        
        <Services />
      </div>
    </Layout>
  );
};

export default Diensten;
