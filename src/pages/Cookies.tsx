
import Layout from "@/components/Layout";

const Cookies = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Cookiebeleid</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Deze website maakt gebruik van cookies om uw ervaring te verbeteren terwijl u door de website navigeert. 
            In dit cookiebeleid leggen we uit wat cookies zijn, welke wij gebruiken, en hoe u uw voorkeuren kunt beheren 
            conform de geldende wetgeving.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Wat zijn cookies?</h2>
          <p>
            Cookies zijn kleine tekstbestanden die worden opgeslagen op uw apparaat (computer, tablet of mobiele telefoon) 
            wanneer u een website bezoekt. Ze worden gebruikt om websites efficiënter te laten werken en om informatie 
            te verstrekken aan de eigenaren van de website.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Welke cookies gebruiken wij?</h2>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">1. Noodzakelijke cookies</h3>
          <p className="mb-4">
            Deze cookies zijn essentieel voor het functioneren van de website. Ze kunnen niet worden uitgeschakeld 
            omdat de website dan niet goed zou werken.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Voorbeelden:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>cookieConsent:</strong> Onthouden van uw cookie voorkeuren</li>
              <li><strong>Sessie cookies:</strong> Voor veilige navigatie</li>
              <li><strong>Beveiliging:</strong> Bescherming tegen misbruik</li>
            </ul>
            <p className="mt-2 text-sm"><strong>Bewaartermijn:</strong> Sessie tot 1 jaar</p>
          </div>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">2. Functionele cookies</h3>
          <p className="mb-4">
            Deze cookies zorgen voor verbeterde functionaliteit en personalisatie. Ze kunnen door ons of door 
            derde partijen worden geplaatst.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Voorbeelden:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Thema voorkeur:</strong> Donkere/lichte modus</li>
              <li><strong>Taal instellingen:</strong> Voorkeurstaal</li>
              <li><strong>Gebruikerservaring:</strong> Onthouden van voorkeuren</li>
            </ul>
            <p className="mt-2 text-sm"><strong>Bewaartermijn:</strong> 30 dagen tot 1 jaar</p>
          </div>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">3. Analytische cookies</h3>
          <p className="mb-4">
            Deze cookies verzamelen anonieme informatie over hoe bezoekers onze website gebruiken. 
            We gebruiken deze informatie om de website te verbeteren.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
            <h4 className="font-semibold mb-2">Mogelijke voorbeelden (indien geïmplementeerd):</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Google Analytics:</strong> Bezoekersstatistieken</li>
              <li><strong>Gebruikspatronen:</strong> Populaire pagina's</li>
              <li><strong>Technische gegevens:</strong> Browsertype, schermresolutie</li>
            </ul>
            <p className="mt-2 text-sm"><strong>Bewaartermijn:</strong> 2 jaar (Google Analytics standaard)</p>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Uw cookievoorkeuren beheren</h2>
          <p className="mb-4">
            U kunt uw cookievoorkeuren op elk moment wijzigen. Er zijn verschillende manieren om dit te doen:
          </p>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">Via onze website</h3>
          <p>
            Klik op "Cookie-instellingen" in de cookie banner of in de footer van onze website om uw voorkeuren aan te passen.
          </p>
          
          <h3 className="text-xl font-semibold text-dental-blue mt-6 mb-3">Via uw browser</h3>
          <p>U kunt ook uw browserinstellingen aanpassen om cookies te beheren:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Chrome:</strong> Instellingen {'>'}  Privacy en beveiliging {'>'}  Cookies en andere sitegegevens</li>
            <li><strong>Firefox:</strong> Instellingen {'>'}  Privacy en beveiliging {'>'}  Cookies en sitegegevens</li>
            <li><strong>Safari:</strong> Voorkeuren {'>'}  Privacy {'>'}  Cookies en websitegegevens</li>
            <li><strong>Edge:</strong> Instellingen {'>'}  Cookies en sitemachtigingen</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Gevolgen van cookies uitschakelen</h2>
          <p>
            Het uitschakelen van bepaalde cookies kan invloed hebben op uw ervaring op onze website:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Noodzakelijke cookies:</strong> De website functioneert mogelijk niet correct</li>
            <li><strong>Functionele cookies:</strong> Personalisatie en voorkeuren gaan verloren</li>
            <li><strong>Analytische cookies:</strong> Wij kunnen de website minder goed optimaliseren</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Derde partijen</h2>
          <p>
            Sommige cookies kunnen worden geplaatst door derde partijen wanneer u onze website bezoekt. 
            Deze partijen hebben hun eigen privacybeleid dat wij niet controleren. 
            Wij raden u aan om hun privacybeleid te raadplegen voor meer informatie.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Wijzigingen in dit cookiebeleid</h2>
          <p>
            Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om wijzigingen in onze praktijken of 
            om andere operationele, juridische of regelgevingredenen weer te geven. 
            Controleer deze pagina regelmatig voor updates.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Contact</h2>
          <p>
            Heeft u vragen over ons cookiebeleid, neem dan contact met ons op via:<br />
            E-mail: <a href="mailto:info@tandartsswaelens.be" className="text-dental-blue hover:underline">info@tandartsswaelens.be</a><br />
            Telefoon: <a href="tel:+3292221213" className="text-dental-blue hover:underline">09 222 12 13</a><br />
            Adres: Kortrijksesteenweg 215, 9000 Gent
          </p>

          <p className="mt-8 text-sm text-gray-500">
            Laatst bijgewerkt: 15 december 2024
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies;
