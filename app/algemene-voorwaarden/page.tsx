import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | SMIT Installatie Techniek",
  description:
    "Algemene Voorwaarden van SMIT Installatie Techniek. Voorwaarden voor offertes, uitvoering, betaling, garantie en aansprakelijkheid.",
  alternates: { canonical: "https://www.smit-installatie-techniek.nl/algemene-voorwaarden" },
  robots: { index: true, follow: true },
};

const sectionHeading = "text-2xl font-bold text-[#0f1f3d] mt-10 mb-4";
const paragraph = "text-gray-700 leading-relaxed mb-4";
const list = "list-disc pl-6 space-y-2 text-gray-700 mb-4";
const strong = "font-semibold text-[#0f1f3d]";

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#0f1f3d] text-white py-14 lg:py-20">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Algemene Voorwaarden" }]} />
            <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-5">Algemene Voorwaarden</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              De voorwaarden waaronder SMIT Installatie Techniek werkzaamheden uitvoert en overeenkomsten sluit.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500 mb-8">Laatst bijgewerkt: 12 april 2026</p>

            <h2 className={sectionHeading}>Artikel 1 — Definities</h2>
            <p className={paragraph}>In deze algemene voorwaarden wordt verstaan onder:</p>
            <ul className={list}>
              <li>
                <span className={strong}>Opdrachtnemer:</span> SMIT Installatie Techniek, gevestigd te Kortenhoef,
                hierna te noemen &quot;SMIT&quot;.
              </li>
              <li>
                <span className={strong}>Opdrachtgever:</span> de natuurlijke of rechtspersoon die met SMIT een
                overeenkomst aangaat of aan wie SMIT een offerte heeft uitgebracht.
              </li>
              <li>
                <span className={strong}>Werkzaamheden:</span> alle werkzaamheden op het gebied van dakwerk, zinkwerk,
                sanitair, waterinstallaties, cv-installaties, gasinstallaties en aanverwante installatietechniek die
                SMIT in opdracht uitvoert.
              </li>
              <li>
                <span className={strong}>Overeenkomst:</span> elke afspraak tussen SMIT en de opdrachtgever met
                betrekking tot het uitvoeren van werkzaamheden of leveren van zaken.
              </li>
              <li>
                <span className={strong}>Consument:</span> een opdrachtgever die niet handelt in de uitoefening van
                een beroep of bedrijf.
              </li>
            </ul>

            <h2 className={sectionHeading}>Artikel 2 — Toepasselijkheid</h2>
            <p className={paragraph}>
              Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en
              werkzaamheden van SMIT, tenzij schriftelijk uitdrukkelijk anders is overeengekomen.
            </p>
            <p className={paragraph}>
              Eventuele inkoop- of andere voorwaarden van de opdrachtgever zijn niet van toepassing, tenzij SMIT deze
              uitdrukkelijk en schriftelijk heeft aanvaard.
            </p>
            <p className={paragraph}>
              Indien een of meerdere bepalingen in deze voorwaarden nietig of vernietigbaar blijken, blijven de
              overige bepalingen volledig van kracht.
            </p>

            <h2 className={sectionHeading}>Artikel 3 — Offertes en overeenkomsten</h2>
            <p className={paragraph}>
              Alle offertes van SMIT zijn vrijblijvend en geldig gedurende 30 dagen na dagtekening, tenzij anders
              aangegeven.
            </p>
            <p className={paragraph}>
              Een overeenkomst komt tot stand op het moment dat de opdrachtgever de offerte schriftelijk, per e-mail
              of mondeling heeft aanvaard, of op het moment dat SMIT met de uitvoering van de werkzaamheden is
              begonnen op verzoek van de opdrachtgever.
            </p>
            <p className={paragraph}>
              Offertes zijn gebaseerd op de informatie die door de opdrachtgever is verstrekt en op de situatie die
              SMIT bij inspectie heeft kunnen waarnemen. Wanneer tijdens de uitvoering blijkt dat de werkelijke
              situatie afwijkt of dat aanvullend werk noodzakelijk is, wordt dit in overleg met de opdrachtgever
              afgestemd en separaat berekend.
            </p>
            <p className={paragraph}>Kennelijke vergissingen of fouten in een offerte binden SMIT niet.</p>

            <h2 className={sectionHeading}>Artikel 4 — Prijzen en betaling</h2>
            <p className={paragraph}>
              Alle prijzen zijn in euro&apos;s en, tenzij anders vermeld, exclusief btw. Voor consumenten worden
              prijzen op de offerte inclusief btw vermeld.
            </p>
            <p className={paragraph}>
              Materiaalkosten worden in rekening gebracht tegen de op het moment van inkoop geldende prijzen. Bij
              langlopende projecten kunnen tussentijdse prijsstijgingen van materialen aan de opdrachtgever worden
              doorberekend, mits deze tijdig worden aangekondigd.
            </p>
            <p className={paragraph}>
              Facturen dienen binnen <span className={strong}>14 dagen</span> na factuurdatum te worden voldaan op de
              door SMIT aangegeven bankrekening, zonder verrekening of opschorting.
            </p>
            <p className={paragraph}>
              Bij niet-tijdige betaling is de opdrachtgever van rechtswege in verzuim. Vanaf de vervaldatum is de
              opdrachtgever de wettelijke (handels)rente verschuldigd. Alle gerechtelijke en buitengerechtelijke
              kosten verbonden aan de invordering komen voor rekening van de opdrachtgever, met inachtneming van de
              Wet Incassokosten (WIK) voor consumenten.
            </p>
            <p className={paragraph}>
              SMIT is gerechtigd om bij grotere opdrachten een aanbetaling of tussentijdse facturatie te verlangen.
            </p>

            <h2 className={sectionHeading}>Artikel 5 — Uitvoering van werkzaamheden</h2>
            <p className={paragraph}>
              SMIT voert de werkzaamheden uit naar beste inzicht en vermogen en in overeenstemming met de eisen van
              goed vakmanschap en de geldende normen en regelgeving.
            </p>
            <p className={paragraph}>
              Opgegeven uitvoerings- en opleveringsdata zijn indicatief en gelden niet als fatale termijnen.
              Overschrijding geeft de opdrachtgever geen recht op schadevergoeding of ontbinding van de overeenkomst,
              tenzij er sprake is van opzet of grove schuld aan de zijde van SMIT.
            </p>
            <p className={paragraph}>
              SMIT behoudt zich het recht voor om werkzaamheden uit te stellen of te onderbreken bij
              weersomstandigheden die een veilige of vakkundige uitvoering onmogelijk maken. Dit geldt in het
              bijzonder voor dakwerk, zinkwerk en andere buitenwerkzaamheden bij regen, vorst, sneeuw, harde wind of
              onweer. Een dergelijke vertraging geeft de opdrachtgever geen recht op schadevergoeding.
            </p>
            <p className={paragraph}>
              SMIT is gerechtigd om voor de uitvoering van werkzaamheden derden of onderaannemers in te schakelen.
            </p>

            <h2 className={sectionHeading}>Artikel 6 — Verplichtingen van de opdrachtgever</h2>
            <p className={paragraph}>
              De opdrachtgever zorgt ervoor dat SMIT tijdig en kosteloos kan beschikken over:
            </p>
            <ul className={list}>
              <li>Een veilig bereikbare en vrij toegankelijke werkplek</li>
              <li>Aansluitingen voor elektriciteit en water op de werkplek</li>
              <li>Voldoende parkeer- en losruimte voor het bedrijfsvoertuig en materialen</li>
              <li>Alle relevante informatie, tekeningen en vergunningen die voor de uitvoering noodzakelijk zijn</li>
            </ul>
            <p className={paragraph}>
              De opdrachtgever staat in voor de juistheid en volledigheid van de door of namens hem aan SMIT
              verstrekte gegevens.
            </p>
            <p className={paragraph}>
              Schade of vertraging die voortkomt uit het niet, niet tijdig of niet correct nakomen van deze
              verplichtingen, komt voor rekening van de opdrachtgever.
            </p>
            <p className={paragraph}>
              De opdrachtgever is verantwoordelijk voor de bouwkundige staat en de stabiliteit van constructies
              waarop of waaraan SMIT werkt. SMIT is niet aansprakelijk voor schade die voortvloeit uit verborgen
              gebreken of een ondeugdelijke ondergrond, mits SMIT zorgvuldig heeft gehandeld.
            </p>

            <h2 className={sectionHeading}>Artikel 7 — Oplevering</h2>
            <p className={paragraph}>
              Het werk wordt als opgeleverd beschouwd wanneer SMIT aan de opdrachtgever heeft meegedeeld dat het werk
              gereed is, en de opdrachtgever het werk heeft aanvaard, dan wel het werk feitelijk in gebruik heeft
              genomen.
            </p>
            <p className={paragraph}>
              Kleine gebreken die het beoogde gebruik niet in de weg staan, vormen geen reden om oplevering te
              weigeren. Deze worden door SMIT binnen een redelijke termijn hersteld.
            </p>
            <p className={paragraph}>
              De opdrachtgever dient eventuele zichtbare gebreken bij oplevering direct te melden. Verborgen gebreken
              dienen binnen 14 dagen na ontdekking schriftelijk aan SMIT te worden gemeld.
            </p>

            <h2 className={sectionHeading}>Artikel 8 — Aansprakelijkheid</h2>
            <p className={paragraph}>
              SMIT is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een
              toerekenbare tekortkoming in de uitvoering van de opdracht.
            </p>
            <p className={paragraph}>
              De aansprakelijkheid van SMIT is in alle gevallen beperkt tot het bedrag dat in het betreffende geval
              door de bedrijfsaansprakelijkheidsverzekering van SMIT wordt uitgekeerd. Indien om welke reden dan ook
              geen uitkering plaatsvindt, is de aansprakelijkheid beperkt tot het factuurbedrag van de betreffende
              opdracht, met een maximum van € 5.000,-.
            </p>
            <p className={paragraph}>SMIT is niet aansprakelijk voor:</p>
            <ul className={list}>
              <li>Indirecte schade, gevolgschade, gederfde omzet, gemiste besparingen of bedrijfsstagnatie</li>
              <li>Schade veroorzaakt door onjuiste of onvolledige informatie van de opdrachtgever</li>
              <li>Schade als gevolg van gebreken in materialen of zaken die door de opdrachtgever zijn aangeleverd</li>
              <li>Schade als gevolg van weersinvloeden, overmacht of omstandigheden buiten de invloedssfeer van SMIT</li>
              <li>
                Schade aan reeds bestaande, verborgen of ondeugdelijke constructies, mits SMIT zorgvuldig heeft
                gewerkt
              </li>
            </ul>
            <p className={paragraph}>
              De in dit artikel opgenomen beperkingen gelden niet indien de schade het gevolg is van opzet of bewuste
              roekeloosheid van SMIT.
            </p>

            <h2 className={sectionHeading}>Artikel 9 — Garantie</h2>
            <p className={paragraph}>
              SMIT staat in voor de deugdelijkheid van het uitgevoerde werk en de gebruikte materialen, met
              inachtneming van de hieronder genoemde voorwaarden.
            </p>
            <p className={paragraph}>
              Op uitgevoerd werk verleent SMIT een garantietermijn van <span className={strong}>één jaar</span> na
              oplevering, tenzij in de offerte of overeenkomst een afwijkende termijn is opgenomen.
            </p>
            <p className={paragraph}>
              Op materialen en gebruikte producten geldt de garantie zoals deze door de fabrikant of leverancier
              wordt verstrekt.
            </p>
            <p className={paragraph}>De garantie vervalt indien:</p>
            <ul className={list}>
              <li>
                Wijzigingen of reparaties aan het werk zijn uitgevoerd door derden zonder schriftelijke toestemming
                van SMIT
              </li>
              <li>
                De gebreken het gevolg zijn van onjuist of onzorgvuldig gebruik, gebrekkig onderhoud of normale
                slijtage
              </li>
              <li>Schade is ontstaan door externe oorzaken zoals weer, vandalisme, of werkzaamheden van derden</li>
              <li>De opdrachtgever de openstaande facturen niet (volledig) heeft voldaan</li>
            </ul>

            <h2 className={sectionHeading}>Artikel 10 — Overmacht</h2>
            <p className={paragraph}>
              Onder overmacht wordt verstaan elke omstandigheid waardoor nakoming van de overeenkomst redelijkerwijs
              niet van SMIT kan worden gevergd. Hieronder vallen in elk geval: extreme weersomstandigheden,
              stakingen, ziekte, brand, ongevallen, vervoersproblemen, leveringsproblemen van leveranciers,
              overheidsmaatregelen en pandemieën.
            </p>
            <p className={paragraph}>
              Indien de overmacht langer dan 30 dagen duurt, hebben beide partijen het recht de overeenkomst
              schriftelijk te ontbinden voor het nog niet uitgevoerde deel, zonder dat daarbij een verplichting tot
              schadevergoeding ontstaat.
            </p>
            <p className={paragraph}>
              Reeds verrichte werkzaamheden of geleverde materialen worden in dat geval naar verhouding gefactureerd.
            </p>

            <h2 className={sectionHeading}>Artikel 11 — Klachtenregeling</h2>
            <p className={paragraph}>
              SMIT hecht waarde aan tevreden klanten. Heeft u een klacht over de uitgevoerde werkzaamheden of de
              dienstverlening, dan verzoeken wij u deze zo spoedig mogelijk en in elk geval binnen 14 dagen na
              constatering schriftelijk of per e-mail aan ons door te geven.
            </p>
            <p className={paragraph}>
              SMIT zal binnen 14 dagen na ontvangst van de klacht reageren met een inhoudelijke reactie of een
              voorstel tot oplossing.
            </p>
            <p className={paragraph}>Het indienen van een klacht ontslaat de opdrachtgever niet van zijn betalingsverplichting.</p>

            <h2 className={sectionHeading}>Artikel 12 — Annulering en beëindiging</h2>
            <p className={paragraph}>
              De opdrachtgever kan een overeenkomst tot het uitvoeren van werkzaamheden annuleren. SMIT is in dat
              geval gerechtigd de reeds gemaakte kosten en gewerkte uren in rekening te brengen, evenals een
              redelijke vergoeding voor reservering van capaciteit en eventueel reeds bestelde of op maat gemaakte
              materialen.
            </p>
            <p className={paragraph}>
              Indien de opdrachtgever in gebreke blijft, kan SMIT de werkzaamheden opschorten of de overeenkomst
              geheel of gedeeltelijk ontbinden, onverminderd het recht op vergoeding van schade en kosten.
            </p>
            <p className={paragraph}>
              Voor consumenten geldt het wettelijke herroepingsrecht uitsluitend voor op afstand gesloten
              overeenkomsten en niet voor op locatie gemaakte afspraken of werk dat in opdracht en op maat is
              verricht.
            </p>

            <h2 className={sectionHeading}>Artikel 13 — Toepasselijk recht en geschillen</h2>
            <p className={paragraph}>
              Op alle overeenkomsten tussen SMIT en de opdrachtgever is uitsluitend Nederlands recht van toepassing.
            </p>
            <p className={paragraph}>
              Geschillen die voortvloeien uit of samenhangen met een overeenkomst worden in eerste instantie in
              onderling overleg opgelost. Indien dit niet tot een oplossing leidt, worden geschillen voorgelegd aan
              de bevoegde rechter van het arrondissement waar SMIT is gevestigd, tenzij de wet dwingend anders
              voorschrijft.
            </p>
            <p className={paragraph}>
              Voor consumenten geldt dat zij binnen één maand nadat SMIT zich op deze bepaling heeft beroepen,
              kunnen kiezen voor beslechting van het geschil door de volgens de wet bevoegde rechter.
            </p>

            <h2 className={sectionHeading}>Contactgegevens</h2>
            <ul className={list}>
              <li><span className={strong}>SMIT Installatie Techniek</span></li>
              <li>Kortenhoef, Nederland</li>
              <li>E-mail: k.smitinstallatietechniek@outlook.com</li>
              <li>Telefoon: +31 6 29528454</li>
              <li>Website: https://www.smit-installatie-techniek.nl</li>
            </ul>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
