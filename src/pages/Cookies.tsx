
import Layout from "@/components/Layout";

const Cookies = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Cookiebeleid</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Deze website maakt gebruik van cookies om uw ervaring te verbeteren terwijl u door de website navigeert. In dit cookiebeleid leggen we uit wat cookies zijn en hoe we ze gebruiken op tandartsswaelens.be.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die worden opgeslagen op uw apparaat (computer, tablet of mobiele telefoon) wanneer u een website bezoekt. Ze worden veel gebruikt om websites efficiënter te laten werken en om informatie te verstrekken aan de eigenaren van de website.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Welke cookies gebruiken wij?</h2>
          <p>Wij gebruiken de volgende soorten cookies:</p>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">Noodzakelijke cookies</h3>
          <p>
            Deze cookies zijn essentieel om de website goed te laten functioneren. Ze kunnen niet worden uitgeschakeld. Deze cookies slaan geen persoonlijke informatie op.
          </p>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">Functionele cookies</h3>
          <p>
            Deze cookies stellen de website in staat om verbeterde functionaliteit en personalisatie te bieden. Ze kunnen worden ingesteld door ons of door derde partijen waarvan we diensten hebben toegevoegd aan onze website.
          </p>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">Analytische cookies</h3>
          <p>
            Deze cookies verzamelen informatie over hoe bezoekers onze website gebruiken, bijvoorbeeld welke pagina's het meest worden bezocht. We gebruiken deze informatie om de website te verbeteren.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Beheren van cookies</h2>
          <p>
            U kunt uw browser instellen om cookies te weigeren of om een waarschuwing te geven wanneer cookies worden verzonden. Het uitschakelen van cookies kan echter invloed hebben op de functionaliteit van onze en andere websites die u bezoekt.
          </p>
          <p>
            De meeste browsers staan u toe om cookies te weigeren of te accepteren. Raadpleeg de help-functie in uw browser voor meer informatie over hoe u dit kunt doen.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Contact</h2>
          <p>
            Als u vragen heeft over ons cookiebeleid, neem dan contact met ons op via:<br />
            E-mail: <a href="mailto:info@tandartsswaelens.be" className="text-dental-blue hover:underline">info@tandartsswaelens.be</a><br />
            Telefoon: <a href="tel:+3292221213" className="text-dental-blue hover:underline">09 222 12 13</a><br />
            Adres: Kortrijksesteenweg 215, 9000 Gent
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Laatst bijgewerkt: 15 mei 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
