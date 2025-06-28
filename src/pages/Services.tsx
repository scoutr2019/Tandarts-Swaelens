
import Layout from "@/components/Layout";
import Services from "@/components/Services";
import PageBanner from "@/components/PageBanner";

const ServicesPage = () => {
  return (
    <Layout>
      <PageBanner 
        title="Onze diensten"
        description="Bij Tandarts Swaelens bieden we een breed scala aan tandheelkundige diensten aan, van preventieve zorg tot geavanceerde behandelingen."
      />
      
      <div className="dental-container py-12">
        <Services />
      </div>
    </Layout>
  );
};

export default ServicesPage;
