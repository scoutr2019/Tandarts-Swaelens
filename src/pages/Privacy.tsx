
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
          <p>
            <strong>Tandarts Swaelens</strong><br />
            Kortrijksesteenweg 215<br />
            9000 Gent, België<br />
            E-mail: info@tandartsswaelens.be<br />
            Telefoon: 09 222 12 13
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Welke gegevens verzamelen wij?</h2>
          <p>Wij verzamelen en verwerken de volgende persoonsgegevens:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Contactgegevens:</strong> naam, adres, telefoonnummer, e-mailadres</li>
            <li><strong>Identiteitsgegevens:</strong> geboortedatum, rijksregisternummer (enkel voor zorgverlening)</li>
            <li><strong>Medische gegevens:</strong> tandheelkundige anamnese, behandelingsgegevens, röntgenfoto's</li>
            <li><strong>Verzekeringsgegevens:</strong> mutualiteit, verzekeringsnummer</li>
            <li><strong>Afspraakinformatie:</strong> datum, tijd, behandeltype</li>
            <li><strong>Technische gegevens:</strong> IP-adres, browsertype (via cookies)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Rechtmatige grondslag voor verwerking</h2>
          <p>Wij verwerken uw persoonsgegevens op basis van:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Uitvoering van een overeenkomst:</strong> tandheelkundige behandeling</li>
            <li><strong>Wettelijke verplichting:</strong> bijhouden van medisch dossier (30 jaar)</li>
            <li><strong>Gerechtvaardigd belang:</strong> kwaliteit van zorg, communicatie</li>
            <li><strong>Toestemming:</strong> voor marketing communicatie (indien van toepassing)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Doeleinden van gegevensverwerking</h2>
          <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Het verlenen van tandheelkundige zorg</li>
            <li>Het bijhouden van een tandheelkundig dossier</li>
            <li>Het factureren van verleende diensten</li>
            <li>Communicatie over afspraken en behandelingen</li>
            <li>Het indienen van terugbetalingsaanvragen bij zorgverzekeraars</li>
            <li>Kwaliteitsverbetering van onze dienstverlening</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Bewaartermijnen</h2>
          <p>Wij bewaren uw gegevens gedurende de volgende termijnen:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Medische dossiers:</strong> 30 jaar na laatste behandeling (wettelijke verplichting)</li>
            <li><strong>Factuurgegevens:</strong> 7 jaar (fiscale wetgeving)</li>
            <li><strong>Afspraakinformatie:</strong> 1 jaar na laatste afspraak</li>
            <li><strong>Technische gegevens (cookies):</strong> zie cookiebeleid</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Delen van gegevens met derden</h2>
          <p>Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Zorgverzekeraars/mutualiteiten:</strong> voor terugbetaling van behandelingen</li>
            <li><strong>Andere zorgverleners:</strong> bij doorverwijzing (met uw toestemming)</li>
            <li><strong>Juridische verplichting:</strong> bij wettelijke verplichting (zeer uitzonderlijk)</li>
            <li><strong>Technische dienstverleners:</strong> voor website en praktijkbeheer (onder verwerkersovereenkomst)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Beveiliging van uw gegevens</h2>
          <p>Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Beveiligde opslag van fysieke en digitale dossiers</li>
            <li>Toegangscontrole tot patiëntengegevens</li>
            <li>Regelmatige back-ups van digitale gegevens</li>
            <li>Training van personeel in gegevensbescherming</li>
            <li>Versleuteling van gevoelige gegevens</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Uw rechten onder de GDPR</h2>
          <p>U heeft de volgende rechten betreffende uw persoonsgegevens:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li><strong>Recht op inzage:</strong> u kunt een kopie van uw gegevens opvragen</li>
            <li><strong>Recht op rectificatie:</strong> correctie van onjuiste gegevens</li>
            <li><strong>Recht op verwijdering:</strong> "recht om vergeten te worden" (met inachtneming van wettelijke bewaartermijnen)</li>
            <li><strong>Recht op beperking:</strong> beperking van de verwerking</li>
            <li><strong>Recht op dataportabiliteit:</strong> overdracht van gegevens aan andere zorgverlener</li>
            <li><strong>Recht van bezwaar:</strong> bezwaar tegen verwerking op basis van gerechtvaardigd belang</li>
            <li><strong>Recht om toestemming in te trekken:</strong> voor verwerkingen gebaseerd op toestemming</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Uitoefening van uw rechten</h2>
          <p>
            Om uw rechten uit te oefenen, kunt u contact opnemen via:<br />
            E-mail: info@tandartsswaelens.be<br />
            Telefoon: 09 222 12 13<br />
            Post: Kortrijksesteenweg 215, 9000 Gent
          </p>
          <p className="mt-4">
            Wij reageren binnen 30 dagen op uw verzoek. In sommige gevallen kunnen wij een identiteitsbewijs vragen 
            om uw identiteit te verifiëren.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Klachten</h2>
          <p>
            Heeft u klachten over de verwerking van uw persoonsgegevens, dan kunt u contact opnemen met ons. 
            U heeft ook het recht om een klacht in te dienen bij de Gegevensbeschermingsautoriteit:
          </p>
          <p className="mt-4">
            <strong>Gegevensbeschermingsautoriteit</strong><br />
            Drukpersstraat 35<br />
            1000 Brussel<br />
            Tel: +32 (0)2 274 48 00<br />
            E-mail: contact@apd-gba.be<br />
            Website: www.gegevensbeschermingsautoriteit.be
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Wijzigingen in dit privacybeleid</h2>
          <p>
            Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. Wijzigingen worden gepubliceerd op onze website. 
            Wij raden u aan om regelmatig te controleren of er wijzigingen zijn aangebracht.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Contact</h2>
          <p>
            Voor vragen over dit privacybeleid kunt u contact opnemen via:<br />
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

export default Privacy;
