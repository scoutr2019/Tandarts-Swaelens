
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Privacybeleid</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Bij Tandarts Swaelens hechten wij veel waarde aan de bescherming van uw persoonsgegevens. 
            In dit privacybeleid willen we heldere informatie geven over hoe wij omgaan met uw gegevens 
            conform de Algemene Verordening Gegevensbescherming (AVG/GDPR).
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Verantwoordelijke voor gegevensverwerking</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p>
              <strong>Tandarts Swaelens</strong><br />
              Kortrijksesteenweg 215<br />
              9000 Gent, België<br />
              E-mail: <a href="mailto:info@tandartsswaelens.be" className="text-dental-blue hover:underline">info@tandartsswaelens.be</a><br />
              Telefoon: <a href="tel:+3292221213" className="text-dental-blue hover:underline">09 222 12 13</a>
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Welke gegevens verzamelen wij?</h2>
          <p className="mb-4">Wij verzamelen en verwerken de volgende persoonsgegevens:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Contactgegevens:</strong> naam, adres, telefoonnummer, e-mailadres</li>
            <li><strong>Identiteitsgegevens:</strong> geboortedatum, rijksregisternummer (enkel voor zorgverlening)</li>
            <li><strong>Medische gegevens:</strong> tandheelkundige anamnese, behandelingsgegevens, röntgenfoto's</li>
            <li><strong>Verzekeringsgegevens:</strong> mutualiteit, verzekeringsnummer</li>
            <li><strong>Afspraakinformatie:</strong> datum, tijd, behandeltype</li>
            <li><strong>Technische gegevens:</strong> IP-adres, browsertype (via cookies)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Rechtmatige grondslag voor verwerking</h2>
          <p className="mb-4">Wij verwerken uw persoonsgegevens op basis van:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Uitvoering van een overeenkomst</h4>
              <p className="text-sm">Tandheelkundige behandeling en patiëntenzorg</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Wettelijke verplichting</h4>
              <p className="text-sm">Bijhouden van medisch dossier (30 jaar)</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Gerechtvaardigd belang</h4>
              <p className="text-sm">Kwaliteit van zorg en communicatie</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Toestemming</h4>
              <p className="text-sm">Marketing communicatie (indien van toepassing)</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Doeleinden van gegevensverwerking</h2>
          <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Het verlenen van tandheelkundige zorg</li>
            <li>Het bijhouden van een tandheelkundig dossier</li>
            <li>Het factureren van verleende diensten</li>
            <li>Communicatie over afspraken en behandelingen</li>
            <li>Het indienen van terugbetalingsaanvragen bij zorgverzekeraars</li>
            <li>Kwaliteitsverbetering van onze dienstverlening</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Bewaartermijnen</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-4">Wij bewaren uw gegevens gedurende de volgende termijnen:</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Medische dossiers:</span>
                <span className="text-red-600 dark:text-red-400 font-semibold">30 jaar (wettelijke verplichting)</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Factuurgegevens:</span>
                <span className="text-orange-600 dark:text-orange-400 font-semibold">7 jaar (fiscale wetgeving)</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Afspraakinformatie:</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">1 jaar na laatste afspraak</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Technische gegevens:</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Zie cookiebeleid</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Delen van gegevens met derden</h2>
          <p className="mb-4">Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Zorgverzekeraars/mutualiteiten:</strong> voor terugbetaling van behandelingen</li>
            <li><strong>Andere zorgverleners:</strong> bij doorverwijzing (met uw toestemming)</li>
            <li><strong>Juridische verplichting:</strong> bij wettelijke verplichting (zeer uitzonderlijk)</li>
            <li><strong>Technische dienstverleners:</strong> voor website en praktijkbeheer (onder verwerkersovereenkomst)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Beveiliging van uw gegevens</h2>
          <p className="mb-4">Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Technische maatregelen</h4>
              <ul className="text-sm space-y-1">
                <li>• Versleuteling van gevoelige gegevens</li>
                <li>• Regelmatige back-ups</li>
                <li>• Beveiligde servers</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Organisatorische maatregelen</h4>
              <ul className="text-sm space-y-1">
                <li>• Toegangscontrole</li>
                <li>• Training van personeel</li>
                <li>• Beveiligde opslag</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Uw rechten onder de GDPR</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-4">U heeft de volgende rechten betreffende uw persoonsgegevens:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht op inzage</h5>
                <p className="text-sm">Kopie van uw gegevens opvragen</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht op rectificatie</h5>
                <p className="text-sm">Correctie van onjuiste gegevens</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht op verwijdering</h5>
                <p className="text-sm">"Recht om vergeten te worden"</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht op beperking</h5>
                <p className="text-sm">Beperking van verwerking</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht op dataportabiliteit</h5>
                <p className="text-sm">Overdracht naar andere zorgverlener</p>
              </div>
              <div>
                <h5 className="font-medium text-blue-800 dark:text-blue-200">Recht van bezwaar</h5>
                <p className="text-sm">Bezwaar tegen verwerking</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Klachten</h2>
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">Gegevensbeschermingsautoriteit</h4>
            <p className="mb-4">
              Heeft u klachten over de verwerking van uw persoonsgegevens, dan kunt u een klacht indienen bij:
            </p>
            <div className="text-sm">
              <p><strong>Gegevensbeschermingsautoriteit</strong></p>
              <p>Drukpersstraat 35, 1000 Brussel</p>
              <p>Tel: <a href="tel:+3222744800" className="text-red-600 hover:underline">+32 (0)2 274 48 00</a></p>
              <p>E-mail: <a href="mailto:contact@apd-gba.be" className="text-red-600 hover:underline">contact@apd-gba.be</a></p>
              <p>Website: <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">www.gegevensbeschermingsautoriteit.be</a></p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Contact</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p className="mb-4">Voor vragen over dit privacybeleid of uitoefening van uw rechten:</p>
            <div className="space-y-2">
              <p>📧 E-mail: <a href="mailto:info@tandartsswaelens.be" className="text-dental-blue hover:underline font-medium">info@tandartsswaelens.be</a></p>
              <p>📞 Telefoon: <a href="tel:+3292221213" className="text-dental-blue hover:underline font-medium">09 222 12 13</a></p>
              <p>📍 Adres: Kortrijksesteenweg 215, 9000 Gent</p>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <em>Wij reageren binnen 30 dagen op uw verzoek. In sommige gevallen kunnen wij een identiteitsbewijs vragen om uw identiteit te verifiëren.</em>
            </p>
          </div>

          <p className="mt-8 text-sm text-gray-500 text-center">
            Laatst bijgewerkt: 3 juli 2025
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;
