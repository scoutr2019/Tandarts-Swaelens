
import Layout from "@/components/Layout";

const Privacy = () => {
  return (
    <Layout>
      <div className="dental-container py-12">
        <h1 className="text-4xl font-bold text-dental-blue-dark mb-8">Privacybeleid</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Bij Tandarts Swaelens hechten wij veel waarde aan de bescherming van uw persoonsgegevens. In dit privacybeleid willen we heldere informatie geven over hoe wij omgaan met uw gegevens.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Welke gegevens verzamelen wij?</h2>
          <p>Wij verzamelen en verwerken de volgende persoonsgegevens:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Contactgegevens (naam, adres, telefoonnummer, e-mailadres)</li>
            <li>Identiteitsgegevens (geboortedatum, rijksregisternummer voor zorgverlening)</li>
            <li>Medische gegevens die noodzakelijk zijn voor uw tandheelkundige behandeling</li>
            <li>Gegevens over uw ziekteverzekering</li>
            <li>Afspraakinformatie</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Waarom verzamelen wij deze gegevens?</h2>
          <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Het verlenen van tandheelkundige zorg</li>
            <li>Het bijhouden van een tandheelkundig dossier zoals wettelijk vereist</li>
            <li>Het factureren van verleende diensten</li>
            <li>Communicatie over uw afspraken en behandelingen</li>
            <li>Het indienen van terugbetalingsaanvragen bij uw zorgverzekeraar</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Hoe lang bewaren wij uw gegevens?</h2>
          <p>
            Wij bewaren uw gegevens niet langer dan noodzakelijk voor het doel waarvoor deze zijn verstrekt. Medische dossiers worden conform de wettelijke verplichting 30 jaar bewaard.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Delen van persoonsgegevens met derden</h2>
          <p>
            Wij delen uw gegevens alleen met derden wanneer dit noodzakelijk is voor de uitvoering van onze dienstverlening (zoals zorgverzekeraars, andere zorgverleners) of om te voldoen aan een wettelijke verplichting.
          </p>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Uw rechten omtrent uw gegevens</h2>
          <p>U heeft recht op:</p>
          <ul className="list-disc ml-6 mb-6 space-y-2">
            <li>Inzage in uw persoonsgegevens</li>
            <li>Correctie van onjuiste persoonsgegevens</li>
            <li>Verwijdering van persoonsgegevens (met inachtneming van wettelijke bewaartermijnen)</li>
            <li>Bezwaar maken tegen de verwerking van uw persoonsgegevens</li>
          </ul>

          <h2 className="text-2xl font-semibold text-dental-blue-dark mt-8 mb-4">Contact</h2>
          <p>
            Voor vragen of opmerkingen omtrent ons privacybeleid kunt u contact opnemen via:<br />
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

export default Privacy;
