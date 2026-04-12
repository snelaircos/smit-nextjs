import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacyverklaring | SMIT Installatie Techniek",
  description:
    "Privacyverklaring van SMIT Installatie Techniek. Lees hoe wij omgaan met uw persoonsgegevens conform de AVG (GDPR).",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/privacy" },
  robots: { index: true, follow: true },
};

const sectionHeading = "text-2xl font-bold text-[#0f1f3d] mt-10 mb-4";
const paragraph = "text-gray-700 leading-relaxed mb-4";
const list = "list-disc pl-6 space-y-2 text-gray-700 mb-4";
const strong = "font-semibold text-[#0f1f3d]";
const link = "text-[#1d6fe8] hover:underline";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Privacyverklaring" }]} />
            <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">Privacyverklaring</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hoe SMIT Installatie Techniek omgaat met uw persoonsgegevens, conform de AVG (GDPR).
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-8">Laatst bijgewerkt: 12 april 2026</p>

            <h2 className={sectionHeading}>1. Inleiding</h2>
            <p className={paragraph}>
              SMIT Installatie Techniek hecht veel waarde aan de bescherming van uw persoonsgegevens. In deze
              privacyverklaring leggen we op een heldere manier uit welke gegevens we verzamelen, waarom we dat doen,
              hoe lang we ze bewaren en welke rechten u heeft. Wij houden ons aan de Algemene Verordening
              Gegevensbescherming (AVG/GDPR).
            </p>

            <h2 className={sectionHeading}>2. Bedrijfsgegevens</h2>
            <p className={paragraph}>Verantwoordelijk voor de verwerking van uw persoonsgegevens is:</p>
            <ul className={list}>
              <li><span className={strong}>Bedrijfsnaam:</span> SMIT Installatie Techniek</li>
              <li><span className={strong}>Vestigingsplaats:</span> Kortenhoef, Nederland</li>
              <li><span className={strong}>E-mail:</span> k.smitinstallatietechniek@outlook.com</li>
              <li><span className={strong}>Telefoon:</span> +31 6 29528454</li>
              <li><span className={strong}>Website:</span> https://www.smit-installatie-techniek.nl</li>
            </ul>

            <h2 className={sectionHeading}>3. Welke persoonsgegevens wij verzamelen</h2>
            <p className={paragraph}>
              Afhankelijk van uw contact met ons en de dienst die u afneemt, kunnen wij de volgende gegevens van u
              verwerken:
            </p>
            <ul className={list}>
              <li>Voor- en achternaam</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Adresgegevens (wanneer wij werkzaamheden bij u uitvoeren of een offerte op locatie maken)</li>
              <li>Inhoud van uw bericht of aanvraag</li>
              <li>IP-adres en technische gegevens van uw bezoek aan onze website</li>
            </ul>
            <p className={paragraph}>
              Wij verzamelen geen gevoelige persoonsgegevens zoals gezondheidsgegevens, politieke voorkeuren of
              religieuze overtuigingen.
            </p>

            <h2 className={sectionHeading}>4. Waarvoor wij uw gegevens gebruiken</h2>
            <p className={paragraph}>Wij verwerken uw persoonsgegevens uitsluitend voor de volgende doeleinden:</p>
            <ul className={list}>
              <li>Het beantwoorden van uw contactaanvraag of vraag per e-mail, telefoon of WhatsApp</li>
              <li>Het opstellen en verzenden van een vrijblijvende offerte</li>
              <li>Het inplannen en uitvoeren van werkzaamheden op locatie</li>
              <li>Het versturen van facturen en het afhandelen van betalingen</li>
              <li>Het voldoen aan onze wettelijke verplichtingen, zoals fiscale bewaarplicht</li>
              <li>Het verbeteren en beveiligen van onze website</li>
            </ul>

            <h2 className={sectionHeading}>5. Wettelijke grondslag</h2>
            <p className={paragraph}>
              Wij verwerken uw persoonsgegevens op basis van een of meer van de volgende grondslagen uit de AVG:
            </p>
            <ul className={list}>
              <li>
                <span className={strong}>Uitvoering van een overeenkomst:</span> wanneer u een opdracht aan ons
                verstrekt of een offerte aanvraagt.
              </li>
              <li>
                <span className={strong}>Wettelijke verplichting:</span> bijvoorbeeld de bewaarplicht voor facturen
                vanuit de Belastingdienst.
              </li>
              <li>
                <span className={strong}>Gerechtvaardigd belang:</span> voor de bedrijfsvoering, klantcommunicatie en
                de beveiliging van onze website.
              </li>
              <li>
                <span className={strong}>Toestemming:</span> wanneer u zelf contact met ons opneemt via het
                contactformulier, e-mail, WhatsApp of telefoon.
              </li>
            </ul>

            <h2 className={sectionHeading}>6. Hoe lang wij uw gegevens bewaren</h2>
            <p className={paragraph}>
              Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld:
            </p>
            <ul className={list}>
              <li>Contactaanvragen die niet leiden tot een opdracht: maximaal 12 maanden na het laatste contact.</li>
              <li>Klant- en opdrachtgegevens: tot 7 jaar na afronding, conform de fiscale bewaarplicht.</li>
              <li>Facturen en boekhoudkundige gegevens: 7 jaar (wettelijke verplichting).</li>
            </ul>

            <h2 className={sectionHeading}>7. Delen van gegevens met derden</h2>
            <p className={paragraph}>
              Wij verkopen uw gegevens nooit aan derden. Wij delen uw gegevens uitsluitend wanneer dit noodzakelijk is
              voor onze dienstverlening of om te voldoen aan een wettelijke verplichting. Dit kan voorkomen bij:
            </p>
            <ul className={list}>
              <li>Onze boekhouder of accountant, voor de financiële administratie</li>
              <li>Leveranciers van materialen, wanneer een levering op uw adres nodig is</li>
              <li>Onderaannemers die incidenteel namens ons werkzaamheden uitvoeren</li>
              <li>Overheidsinstanties, indien wij hier wettelijk toe verplicht zijn</li>
            </ul>
            <p className={paragraph}>
              Met partijen die in onze opdracht uw gegevens verwerken, sluiten wij waar nodig een
              verwerkersovereenkomst om de bescherming van uw gegevens te waarborgen.
            </p>

            <h2 className={sectionHeading}>8. Cookies en website-statistieken</h2>
            <p className={paragraph}>
              Onze website maakt gebruik van strikt noodzakelijke cookies die ervoor zorgen dat de site goed
              functioneert. Daarnaast kunnen wij gebruikmaken van anonieme bezoekersstatistieken om de werking van
              onze website te verbeteren. Wij gebruiken geen tracking- of advertentiecookies en wij volgen u niet
              over andere websites.
            </p>
            <p className={paragraph}>
              U kunt cookies altijd zelf beheren of verwijderen via de instellingen van uw browser.
            </p>

            <h2 className={sectionHeading}>9. Hoe wij uw gegevens beveiligen</h2>
            <p className={paragraph}>
              Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen
              verlies, misbruik of ongeoorloofde toegang. Onder meer:
            </p>
            <ul className={list}>
              <li>Beveiligde verbindingen (HTTPS/SSL) op onze website</li>
              <li>Toegang tot uw gegevens beperkt tot personen die deze nodig hebben voor hun werk</li>
              <li>Veilige opslag van klantgegevens en facturen</li>
              <li>Regelmatige updates van onze systemen en software</li>
            </ul>

            <h2 className={sectionHeading}>10. Uw rechten</h2>
            <p className={paragraph}>
              U heeft op grond van de AVG de volgende rechten met betrekking tot uw persoonsgegevens:
            </p>
            <ul className={list}>
              <li><span className={strong}>Recht op inzage:</span> u mag opvragen welke gegevens wij van u verwerken.</li>
              <li><span className={strong}>Recht op correctie:</span> u mag onjuiste gegevens laten corrigeren.</li>
              <li>
                <span className={strong}>Recht op verwijdering:</span> u mag vragen om uw gegevens te wissen, voor
                zover er geen wettelijke bewaarplicht geldt.
              </li>
              <li>
                <span className={strong}>Recht op beperking:</span> u mag vragen om de verwerking van uw gegevens
                tijdelijk te stoppen.
              </li>
              <li>
                <span className={strong}>Recht op bezwaar:</span> u mag bezwaar maken tegen de verwerking van uw
                gegevens.
              </li>
              <li>
                <span className={strong}>Recht op gegevensoverdraagbaarheid:</span> u mag uw gegevens in een leesbaar
                formaat opvragen.
              </li>
            </ul>
            <p className={paragraph}>
              Om gebruik te maken van een van deze rechten kunt u contact met ons opnemen via de gegevens onderaan
              deze pagina. Wij reageren binnen vier weken op uw verzoek. U heeft daarnaast altijd het recht om een
              klacht in te dienen bij de Autoriteit Persoonsgegevens via{" "}
              <a
                href="https://www.autoriteitpersoonsgegevens.nl"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                autoriteitpersoonsgegevens.nl
              </a>
              .
            </p>

            <h2 className={sectionHeading}>11. Contact bij vragen over privacy</h2>
            <p className={paragraph}>
              Heeft u vragen over deze privacyverklaring of over de manier waarop wij met uw persoonsgegevens omgaan?
              Neem dan gerust contact met ons op:
            </p>
            <ul className={list}>
              <li><span className={strong}>SMIT Installatie Techniek</span></li>
              <li>
                E-mail:{" "}
                <a href="mailto:k.smitinstallatietechniek@outlook.com" className={link}>
                  k.smitinstallatietechniek@outlook.com
                </a>
              </li>
              <li>
                Telefoon:{" "}
                <a href="tel:+31629528454" className={link}>
                  +31 6 29528454
                </a>
              </li>
            </ul>

            <h2 className={sectionHeading}>12. Wijzigingen in deze privacyverklaring</h2>
            <p className={paragraph}>
              Wij kunnen deze privacyverklaring van tijd tot tijd aanpassen, bijvoorbeeld bij wijzigingen in onze
              dienstverlening of de wetgeving. De meest actuele versie vindt u altijd op deze pagina. Bij belangrijke
              wijzigingen zullen wij u hier duidelijk op wijzen.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
