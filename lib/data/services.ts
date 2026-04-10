export type WorkStep = { stap: string; body: string };
export type Section = { h2: string; body: string };

export type Service = {
  slug: string;
  name: string;
  namePlural: string;
  vakman: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  introExtended: string;
  whenNeeded: { title: string; items: string[] };
  sections: Section[];
  werkwijze: WorkStep[];
  werkzaamheden: string[];
  situaties: string[];
  trustReasons: string[];
  faq: { q: string; a: string }[];
  icon: string;
};

export const services: Service[] = [
  {
    slug: "dakwerk",
    name: "Dakwerk",
    namePlural: "Dakwerkzaamheden",
    vakman: "dakdekker",
    tagline: "Vakkundige dakdekker in Het Gooi en omgeving",
    metaTitle: "Dakdekker Kortenhoef & omgeving | SMIT Installatie Techniek",
    metaDescription:
      "Professioneel dakwerk in Kortenhoef, Hilversum en Het Gooi. Dakreparatie, nieuwe dakbedekking, lichtkoepels en onderhoud door gecertificeerde dakdekker. Bel 06-29528454.",
    h1: "Dakdekker in Kortenhoef en omgeving",
    intro:
      "Een lekkage pakt je nooit op een gunstig moment. Kevin Smit weet dat. Als dakdekker actief in Kortenhoef en de regio reageert hij snel, werkt hij vakkundig en laat hij uw dak achter zoals het hoort: dicht, duurzaam en netjes afgewerkt.",
    introExtended:
      "Uw dak is de eerste verdedigingslinie van uw woning of bedrijfspand. Een beschadigd of verouderd dak zorgt niet alleen voor lekkages, maar ook voor schimmelvorming, isolatieproblemen en uiteindelijk costbare structurele schade. SMIT Installatie Techniek voert alle vormen van dakwerk uit — van kleine reparaties tot volledige herbestratingprojecten. We werken voor particuliere woningeigenaren, VvE's en bedrijfspanden in Kortenhoef, Hilversum, Huizen, Naarden en de bredere regio. Altijd met oog voor kwaliteit, veiligheid en een nette afwerking.",
    whenNeeded: {
      title: "Wanneer schakelt u een dakdekker in?",
      items: [
        "U ziet watervlekken op uw plafond of muren na regen",
        "Er zijn beschadigde, verschoven of ontbrekende dakpannen zichtbaar",
        "Uw dakgoten lopen over of zijn geblokkeerd",
        "Het dakbedekking is ouder dan 20 jaar en nooit vervangen",
        "U wilt een lichtkoepel of dakraam laten plaatsen",
        "Er zijn scheuren of loszittende delen in het zinkwerk zichtbaar",
        "U heeft een dakinspectie nodig voor verkoop of verzekering",
        "U merkt tocht of warmteverlies via het dak",
      ],
    },
    sections: [
      {
        h2: "Dakreparatie: snel en duurzaam",
        body: "Een kleine lekkage wordt al snel een groot probleem als er niet snel op gehandeld wordt. Wij reageren voortvarend op spoedmeldingen, lokaliseren de oorzaak van de lekkage nauwkeurig en lossen die op — niet met een tijdelijke lap, maar met een deugdelijke reparatie die jarenlang meegaat. We werken met bitumen, EPDM, zinken details en dakpannen, afhankelijk van uw dakconstructie.",
      },
      {
        h2: "Nieuwe dakbedekking: wanneer repareren niet meer volstaat",
        body: "Soms is een dak simpelweg aan vervanging toe. Na gemiddeld 20 tot 30 jaar verliest dakbedekking haar elasticiteit en waterdichtheid. Wij beoordelen eerlijk of reparatie zinvol is of dat een nieuwe dakbedekking de betere investering is. We plaatsen moderne bitumineuze dakbedekking, EPDM-dakbedekking of andere systemen die aansluiten bij uw woning, budget en wensen.",
      },
      {
        h2: "Lichtkoepels en dakramen: meer licht, betere ventilatie",
        body: "Een lichtkoepel of dakraam is een relatief kleine ingreep met een groot effect op het wooncomfort. We plaatsen ze vakkundig, zorgen voor een waterdichte aansluiting met het bestaande dakwerk en adviseren u over de beste positie en uitvoering voor uw situatie.",
      },
      {
        h2: "Dakinspectie en preventief onderhoud",
        body: "Een jaarlijkse dakinspectie kost weinig maar kan dure reparaties voorkomen. We controleren het volledige dak, reinigen de goten, controleren de aansluitingen en rapporteren helder over de staat van het dak. U ontvangt een duidelijk advies zonder technische vaagheid — gewoon: wat staat er, wat moet er nu aan, en wat kan wachten.",
      },
    ],
    werkwijze: [
      {
        stap: "1. Melding en eerste contact",
        body: "U belt, WhatsAppt of mailt — Kevin neemt dezelfde dag contact op. We bespreken kort de situatie zodat we weten wat we kunnen verwachten.",
      },
      {
        stap: "2. Inspectie op locatie",
        body: "We komen langs om het dak te beoordelen. Dit doen we grondig en zonder kosten. Op basis van de inspectie stellen we een heldere offerte op.",
      },
      {
        stap: "3. Offerte op maat",
        body: "U ontvangt een duidelijke offerte met vaste prijs. Geen vage 'richtprijzen' — u weet van tevoren precies wat het kost.",
      },
      {
        stap: "4. Uitvoering en afwerking",
        body: "Na uw akkoord plannen we de werkzaamheden in. We werken netjes, letten op uw eigendom en ruimen alles op na afloop.",
      },
      {
        stap: "5. Oplevering en nazorg",
        body: "Na het werk loopt u samen met ons het dak na. Vragen achteraf? Kevin is bereikbaar.",
      },
    ],
    werkzaamheden: [
      "Dakreparatie en lekkageopsporing",
      "Nieuwe dakbedekking (bitumen, EPDM)",
      "Dakpannen leggen en vervangen",
      "Nokvorst en nokafwerking",
      "Dakgoten reinigen en vervangen",
      "Lichtkoepels en dakramen plaatsen",
      "Dakinspectie en onderhoudsrapport",
      "Zinkwerk rondom dak en schoorsteen",
      "Dakkapel en uitbouw afwerken",
    ],
    situaties: [
      "Woningeigenaren met een lekkend of verouderd dak",
      "Kopers die een dakinspectie willen vóór aankoop",
      "VvE's met gezamenlijk dak dat onderhoud behoeft",
      "Bedrijfspanden met platdak die periodiek onderhoud nodig hebben",
      "Particulieren die een lichtkoepel of dakraam willen laten plaatsen",
    ],
    trustReasons: [
      "Gecertificeerde dakdekker met jarenlange regionale ervaring",
      "Eerlijk advies: wij raden u geen onnodige werkzaamheden aan",
      "Vaste offerte — u betaalt wat er is afgesproken",
      "Altijd netjes achtergelaten",
      "Snel ter plaatse bij spoed",
    ],
    faq: [
      {
        q: "Hoe snel kunt u bij een daklekkage ter plaatse zijn?",
        a: "Bij spoed proberen we er dezelfde dag of in ieder geval binnen 24 uur te zijn. We reageren altijd snel op uw melding.",
      },
      {
        q: "Wat kost een dakinspectie?",
        a: "Een vrijblijvende inspectie is bij ons gratis. We komen langs, beoordelen het dak en geven u eerlijk advies. Daarna ontvangt u een offerte als er werkzaamheden nodig zijn.",
      },
      {
        q: "Welke dakbedekkingsmaterialen gebruiken jullie?",
        a: "We werken met SBS-gemodificeerd bitumen, EPDM en dakpannen van kwaliteitsmerken. Afhankelijk van uw dak en situatie adviseren we de meest geschikte oplossing.",
      },
      {
        q: "Geven jullie garantie op dakwerk?",
        a: "Ja. Op onze reparaties en nieuwe dakbedekkingen geven we garantie. De exacte termijn verschilt per type werk en materiaal — we vermelden dit duidelijk in de offerte.",
      },
      {
        q: "Kan SMIT ook kleine dakreparaties uitvoeren?",
        a: "Absoluut. Van een losgewaaide nokpan tot een kleine scheur in de dakbedekking — we pakken ook kleinere klussen serieus op. Elk probleem is groot als het onbehandeld blijft.",
      },
      {
        q: "Werken jullie ook voor bedrijfspanden met een plat dak?",
        a: "Ja. Platdaken voor bedrijfspanden, schuren en bijgebouwen behoren tot ons standaard werkgebied. We inspecteren periodiek en voeren onderhoud en reparaties uit.",
      },
    ],
    icon: "🏠",
  },

  {
    slug: "zinkwerk",
    name: "Zinkwerk",
    namePlural: "Zinkwerkzaamheden",
    vakman: "zinkwerker",
    tagline: "Strak en duurzaam zinkwerk op maat",
    metaTitle: "Zinkwerk Kortenhoef & omgeving | SMIT Installatie Techniek",
    metaDescription:
      "Vakkundig zinkwerk in Kortenhoef en Het Gooi. Dakgoten, zinken dakranden, hemelwaterafvoer en maatwerk zinkwerk. Duurzaam, strak en op maat. Bel 06-29528454.",
    h1: "Zinkwerk in Kortenhoef en omgeving",
    intro:
      "Zinkwerk is specialismenwerk. Het vraagt precisie, vakkennis en de juiste materialen. Bij SMIT Installatie Techniek voeren we alle zinkwerkzaamheden uit — van dakgoten en hemelwaterafvoer tot zinken dakranden en decoratieve details.",
    introExtended:
      "Goed zinkwerk is onzichtbaar als het klopt, en heel zichtbaar als het niet klopt. Een slecht aangesloten dakgoot, een loslatende zinken omslag of een onjuist gedimensioneerde hemelwaterafvoer zorgen vroeg of laat voor lekkages, gevelschade en vochtproblemen. SMIT Installatie Techniek levert zinkwerk dat jarenlang meegaat — op maat gemaakt, vakkundig aangebracht en strak afgewerkt.",
    whenNeeded: {
      title: "Wanneer heeft u zinkwerk nodig?",
      items: [
        "Uw dakgoten lopen over bij hevige regen",
        "Er zijn scheuren, gaten of roestplekken in uw zinkwerk zichtbaar",
        "De zinken omslagen rondom schoorstenen of dakkapellen laten los",
        "U wilt oude kunststof dakgoten vervangen door zink of aluminium",
        "Bij nieuwbouw of verbouwing van uw woning",
        "Uw zinkwerk is ouder dan 20 jaar en nooit goed onderhouden",
        "U wilt een maatwerkoplossing voor een bijzondere dakvorm",
      ],
    },
    sections: [
      {
        h2: "Dakgoten en hemelwaterafvoer: de basis van een droge woning",
        body: "Dakgoten lijken onbeduidend totdat ze niet meer functioneren. Een verstopte of kapotte goot laat regenwater langs de gevel lopen, wat op termijn leidt tot vochtschade, gevelaantasting en zelfs funderingsproblemen. Wij reinigen, repareren en vervangen dakgoten in zink, titaanzink en aluminium. Hemelwaterafvoerpijpen worden correct gedimensioneerd zodat ook bij een flinke regenbui alles goed afloopt.",
      },
      {
        h2: "Zinken dakranden, kilgoten en omslagen",
        body: "De aansluitingen van het dak op verticale gevels, schoorstenen en dakkapellen zijn kwetsbare punten. Zinken kilgoten, omslagen en dakranden zorgen voor een waterdichte en duurzame afsluiting. We vervaardigen dit maatwerk ter plaatse — elk dak is anders, en standaardoplossingen passen zelden perfect.",
      },
      {
        h2: "Renovatie van bestaand zinkwerk",
        body: "Niet alles wat oud is, hoeft vervangen. We inspecteren uw bestaande zinkwerk eerlijk en adviseren wat te bewaren en wat aan vervanging toe is. Bij gedeeltelijke renovatie passen we naadloos op het bestaande werk aan.",
      },
      {
        h2: "Zinkwerk bij dakkapellen en verbouwingen",
        body: "Een nieuwe dakkapel of uitbouw heeft zinkwerk nodig dat perfect aansluit op het bestaande dak. We werken samen met aannemers en dakdekkers in de regio voor een volledige en strakke afwerking.",
      },
    ],
    werkwijze: [
      { stap: "1. Opname en advies", body: "We bekijken uw situatie ter plaatse en adviseren de beste oplossing voor uw dak en budget." },
      { stap: "2. Maatwerk offerte", body: "U ontvangt een heldere offerte. Zinkwerk is maatwerk — we rekenen eerlijk en transparant." },
      { stap: "3. Productie en plaatsing", body: "Zinkwerk wordt op maat gesneden, gevouwen en aangebracht. We werken nauwkeurig en met kwalitatieve materialen." },
      { stap: "4. Controle en oplevering", body: "Na plaatsing controleren we alle aansluitingen en lekpunten. Pas als alles klopt, verlaten we het werk." },
    ],
    werkzaamheden: [
      "Dakgoten plaatsen en vervangen (zink, titaanzink, aluminium)",
      "Hemelwaterafvoer aanleggen en dimensioneren",
      "Zinken dakranden en omslagen",
      "Kilgoten en aansluitingen bij schoorstenen",
      "Zinkwerk rondom dakkapellen",
      "Renovatie van verouderd zinkwerk",
      "Gootinspectie en reiniging",
      "Maatwerk voor bijzondere dakvormen",
    ],
    situaties: [
      "Woningeigenaren met overlopen of kapotte dakgoten",
      "Eigenaren van karakteristieke woningen die kwalitatief zinkwerk willen",
      "Aannemers die zinkspecialist nodig hebben bij verbouwproject",
      "Mensen die kunststof goten willen upgraden naar zink",
      "VvE's met gedeeld dak dat zinkonderhoud nodig heeft",
    ],
    trustReasons: [
      "Zinkwerk is maatwerk — wij maken het ter plaatse op maat",
      "Jarenlange ervaring met alle dakvormen in de regio",
      "Titaanzink van topkwaliteit — gaat 40 tot 50 jaar mee",
      "Transparante offerte, vaste prijs",
      "Gecombineerd met dakwerk voor een complete oplossing",
    ],
    faq: [
      {
        q: "Hoe lang gaat kwalitatief zinkwerk mee?",
        a: "Titaanzink van goede kwaliteit, vakkundig aangebracht, gaat 30 tot 50 jaar mee. Dat maakt zink goedkoper dan kunststof op de lange termijn.",
      },
      {
        q: "Kan SMIT kunststof dakgoten vervangen door zink?",
        a: "Ja, dat doen we regelmatig. Zink ziet er mooier uit, is duurzamer en verhoogt de uitstraling en waarde van uw woning.",
      },
      {
        q: "Maken jullie ook maatwerkoplossingen voor bijzondere dakvormen?",
        a: "Absoluut. We knippen, vouwen en solderen ter plaatse voor een perfecte pasvorm — ook op afwijkende hoeken en vormen.",
      },
      {
        q: "Is zinkwerk duurder dan kunststof?",
        a: "De aanschafprijs van zink is hoger dan kunststof, maar de levensduur is een veelvoud. Op de lange termijn is zink economischer en vergt het minder onderhoud.",
      },
    ],
    icon: "🔧",
  },

  {
    slug: "sanitair",
    name: "Sanitair",
    namePlural: "Sanitairwerkzaamheden",
    vakman: "loodgieter",
    tagline: "Loodgieterswerk en sanitairinstallatie in de regio",
    metaTitle: "Loodgieter Kortenhoef & omgeving | SMIT Installatie Techniek",
    metaDescription:
      "Loodgieter in Kortenhoef, Hilversum en Het Gooi. Lekkage, badkamer, toilet, leidingwerk en sanitairinstallatie. Gecertificeerde loodgieter. Bel 06-29528454.",
    h1: "Loodgieter in Kortenhoef en omgeving",
    intro:
      "Een lekkende kraan, een verstopte afvoer of een volledige badkamerrenovatie — bij SMIT Installatie Techniek bent u aan het juiste adres. Als loodgieter in Kortenhoef en de regio reageert Kevin Smit snel, werkt hij precies en laat hij het werk altijd netjes en volledig achter.",
    introExtended:
      "Sanitairproblemen hebben altijd het slechtste moment. Een lekkage in de nacht, een verstopte afvoer vlak voor de gasten komen — SMIT Installatie Techniek reageert snel op spoedmeldingen in Kortenhoef en omgeving. Maar we doen meer dan spoedreparaties. Van complete badkamerrenovaties tot het aanleggen van nieuw leidingwerk: onze gecertificeerde loodgieter doet het vakkundig, netjes en zonder gedoe. Na de klus is alles opgeruimd en werkt alles naar behoren. Zo hoort dat.",
    whenNeeded: {
      title: "Wanneer belt u een loodgieter?",
      items: [
        "Er is lekkage onder de wastafel, het bad of de douche",
        "Een kraan druppelt of staat niet meer goed af",
        "De afvoer van uw douche, bad of toilet is verstopt",
        "U wilt uw badkamer, toilet of keuken renoveren",
        "Er moet nieuw leidingwerk aangelegd of vervangen worden",
        "U wilt een extra toilet, wastafel of doucheruimte laten plaatsen",
        "Uw boiler of warmwatertoestel geeft problemen",
        "Er is waterdrukproblemen in uw woning",
      ],
    },
    sections: [
      {
        h2: "Lekkageopsporing en spoedservice",
        body: "Een lekkage in uw woning kan binnen korte tijd ernstige schade veroorzaken. Wij reageren snel op spoedmeldingen in Kortenhoef en de regio. We lokaliseren de oorzaak nauwkeurig — ook als de lekkage niet direct zichtbaar is — en verhelpen het probleem met een degelijke reparatie. Geen tijdelijke oplossing, maar een structurele fix.",
      },
      {
        h2: "Badkamerrenovatie: van installatie tot perfect resultaat",
        body: "Een nieuwe badkamer is een flinke stap. SMIT Installatie Techniek verzorgt het volledige installatietechnische deel: leidingwerk, aansluitingen voor douche, bad, toilet en wastafel, en de aansluiting op het bestaande systeem. We werken samen met tegelzetters in de regio of kunnen u doorverwijzen naar betrouwbare partners. U heeft één aanspreekpunt voor de hele installatie.",
      },
      {
        h2: "Leidingwerk: aanleg, renovatie en vervanging",
        body: "Oud koperwerk dat gaat lekken, een uitbreiding van het leidingwerk of een complete renovatie — wij leggen leidingen aan die voldoen aan de geldende normen. We werken verstopt waar het kan en zorgen voor correcte waterdruk en doorstroom in uw hele woning.",
      },
      {
        h2: "Toilet, kranen en sanitair vervangen",
        body: "Wilt u uw sanitair moderniseren? We leveren en installeren kwalitatieve sanitairmerken en adviseren u eerlijk over wat bij uw situatie en budget past. Van een eenvoudige kraanvervanging tot een compleet nieuw toilet of douche — we regelen het netjes.",
      },
    ],
    werkwijze: [
      { stap: "1. Melding en snelle respons", body: "U belt of WhatsAppt. Bij spoed reageren we dezelfde dag. Voor geplande werkzaamheden plannen we een afspraak in die u past." },
      { stap: "2. Diagnose op locatie", body: "We bekijken de situatie, stellen de oorzaak vast en geven u direct een eerlijk advies over de aanpak." },
      { stap: "3. Heldere offerte", body: "Voor grotere werkzaamheden ontvangt u een overzichtelijke offerte. Geen verborgen kosten." },
      { stap: "4. Vakkundige uitvoering", body: "We voeren het werk netjes uit. Uw woning behandelen we met respect — we ruimen alles op en testen alles grondig voor we vertrekken." },
    ],
    werkzaamheden: [
      "Lekkageopsporing en -reparatie",
      "Badkamerrenovatie en -installatie",
      "Toilet, douche en bad plaatsen",
      "Kranen en mengkranen vervangen",
      "Waterleidingen aanleggen en renoveren",
      "Afvoerleidingen aanleggen en ontstoppen",
      "Boilers en warmwatertoestellen installeren",
      "Vloerverwarming aansluiten",
      "Waterdruk controleren en aanpassen",
    ],
    situaties: [
      "Woningeigenaren met een lekkage of sanitairprobleem",
      "Bewoners die hun badkamer willen renoveren",
      "Mensen die een extra toilet of doucheruimte willen plaatsen",
      "VvE's met gedeeld leidingwerk dat onderhoud behoeft",
      "Huizenverkopers die sanitaire gebreken willen verhelpen voor de verkoop",
    ],
    trustReasons: [
      "Gecertificeerde loodgieter met ruime regionale ervaring",
      "Snel ter plaatse bij spoed — ook 's avonds bereikbaar",
      "Netjes werken en alles goed opruimen na de klus",
      "Eerlijk advies: we raden u niets aan wat niet nodig is",
      "Één contactpersoon van melding tot oplevering",
    ],
    faq: [
      {
        q: "Hoe snel kunt u bij een sanitairlekkage komen?",
        a: "Bij acute lekkage proberen we dezelfde dag te komen. Bel ons direct op 06-29528454. Voor planbare werkzaamheden plannen we een afspraak in die u uitkomt.",
      },
      {
        q: "Doet SMIT ook complete badkamerrenovaties?",
        a: "Ja. We verzorgen het volledige installatietechnische deel: leidingwerk, aansluitingen en plaatsing van alle sanitair. Voor tegels werken we samen met betrouwbare tegelzetters in de regio.",
      },
      {
        q: "Mijn afvoer is verstopt. Kunnen jullie dat ook oplossen?",
        a: "Ja. We verhelpen verstoppingen in douche, bad, toilet en keukenafvoer. Als de verstopping dieper in het systeem zit, brengen we dat in kaart en lossen het structureel op.",
      },
      {
        q: "Werken jullie ook voor VvE's en bedrijven?",
        a: "Zeker. We werken voor particulieren, VvE's, kleine bedrijfspanden en woningcorporaties in de regio.",
      },
      {
        q: "Ik wil een extra toilet laten plaatsen. Is dat haalbaar?",
        a: "Dat is zeker haalbaar. We beoordelen de bestaande situatie, bekijken de aansluitmogelijkheden en geven u een eerlijk advies en offerte.",
      },
    ],
    icon: "🚿",
  },

  {
    slug: "cv-installatie",
    name: "CV-installatie",
    namePlural: "CV-werkzaamheden",
    vakman: "cv-monteur",
    tagline: "CV-ketel installatie, reparatie en onderhoud in de regio",
    metaTitle: "CV-monteur Kortenhoef & omgeving | SMIT Installatie Techniek",
    metaDescription:
      "CV-ketel installeren, vervangen of repareren in Kortenhoef en Het Gooi. Ook vloerverwarming en periodiek onderhoud. Gecertificeerde cv-monteur. Bel 06-29528454.",
    h1: "CV-installatie in Kortenhoef en omgeving",
    intro:
      "Als uw cv-ketel ermee stopt op een koude winterochtend, wilt u één ding: een vakman die snel ter plaatse is en het probleem écht oplost. SMIT Installatie Techniek is uw cv-monteur in Kortenhoef en omgeving.",
    introExtended:
      "Een goed werkende verwarming is geen luxe — het is een basisbehoefte. SMIT Installatie Techniek installeert, repareert en onderhoudt CV-ketels en verwarmingssystemen voor particuliere woningen en bedrijfspanden in de regio. We zijn gecertificeerd voor gastoestellen, werken met alle gangbare merken en geven u eerlijk advies over de beste keuze voor uw situatie — of dat nu een nieuwe HR-ketel is, een hybride systeem of het vervangen van vloerverwarming.",
    whenNeeded: {
      title: "Wanneer neemt u contact op over uw cv-installatie?",
      items: [
        "Uw cv-ketel geeft een storing- of foutcode aan",
        "De verwarming slaat aan maar geeft geen warm water",
        "U hoort vreemde geluiden uit de ketel (kloppen, piepen, ruisen)",
        "Uw ketel is ouder dan 15 jaar en heeft nog nooit onderhoud gehad",
        "De energie- of gasrekening is de afgelopen jaren onverklaarbaar gestegen",
        "U wilt overstappen naar een efficiënter systeem",
        "U legt vloerverwarming aan bij een verbouwing",
        "Radiatoren worden warm, maar de woning niet goed verwarmd",
      ],
    },
    sections: [
      {
        h2: "CV-ketel plaatsen of vervangen: welke ketel past bij u?",
        body: "De markt voor verwarmingssystemen verandert snel. Een nieuwe HR-ketel, een hybride warmtepomp of een all-electric systeem — welk systeem past bij uw woning en wensen? Kevin Smit adviseert u eerlijk, zonder voorkeur voor een bepaald merk of systeem. We installeren alle gangbare merken: Vaillant, Intergas, Remeha, Nefit, Bosch en meer. Na installatie lichten we de bediening duidelijk toe zodat u direct aan de slag kunt.",
      },
      {
        h2: "CV-ketel reparatie: storing snel opgelost",
        body: "Een cv-ketel die uitvalt in de winter is meer dan ongemak — het is een urgente situatie. Wij diagnosticeren storingen snel en nauwkeurig. Storingscodes van alle gangbare merken zijn ons bekend, wat onnodige vervangingen of dure diagnosetrajecten voorkomt. Als reparatie zinvoller is dan vervanging, zeggen we dat eerlijk.",
      },
      {
        h2: "Jaarlijks onderhoud: efficiëntie en veiligheid",
        body: "Een jaarlijkse servicebeurt van uw cv-ketel verlengt de levensduur, houdt de garantie in stand en zorgt dat de ketel zo efficiënt mogelijk werkt. Wij voeren een grondige onderhoudsbeurt uit: filterspoeling, controle van brander en warmtewisselaar, CO-meting, gasdichtheidscontrole en algehele inspectie. Veiligheid en rendement hand in hand.",
      },
      {
        h2: "Vloerverwarming: comfortabel en energiezuinig",
        body: "Vloerverwarming geeft een aangenaam, gelijkmatig warmtegevoel en werkt efficiënter bij lagere watertemperaturen — ideaal in combinatie met een warmtepomp of HR-ketel. We leggen vloerverwarmingssystemen aan in nieuwbouw en bestaande woningen, zetten verdelers correct in en regelen het systeem in voor optimaal comfort.",
      },
    ],
    werkwijze: [
      { stap: "1. Contact en eerste diagnose", body: "Bij een storing proberen we telefonisch al een eerste inschatting te maken. Zo kunnen we snel handelen en eventueel onderdelen meenemen." },
      { stap: "2. Keuring op locatie", body: "We bekijken de ketel en installatie grondig. We geven u een eerlijk advies: repareren of vervangen?" },
      { stap: "3. Heldere offerte", body: "Voor vervanging of grotere reparaties ontvangt u een offerte met vaste prijs. U beslist." },
      { stap: "4. Installatie en inregeling", body: "We installeren vakkundig, voeren de ingebruikname uit en controleren de volledige installatie op veiligheid en werking." },
      { stap: "5. Uitleg en nazorg", body: "We leggen de bediening uit, beantwoorden uw vragen en zijn bereikbaar voor vragen achteraf." },
    ],
    werkzaamheden: [
      "CV-ketel plaatsen en aansluiten",
      "CV-ketel vervangen (HR, hybride of combiketel)",
      "Storingsdiagnose en reparatie",
      "Jaarlijkse servicebeurt en onderhoud",
      "CO-meting en gasdichtheidscontrole",
      "Vloerverwarming aanleggen en inregelen",
      "Radiatoren en convectoren plaatsen",
      "Verwarmingssysteem inregelen en optimaliseren",
    ],
    situaties: [
      "Woningeigenaren met een defecte of verouderde cv-ketel",
      "Bewoners die willen overstappen naar een efficiënter systeem",
      "Mensen die vloerverwarming willen aanleggen bij verbouwing",
      "Woningkopers die voor de winter zekerheid willen over de ketel",
      "Bedrijfspanden met een installatie die jaarlijks onderhoud nodig heeft",
    ],
    trustReasons: [
      "Gecertificeerde cv-monteur, bevoegd voor gastoestellen",
      "Merkonafhankelijk advies — we adviseren wat écht het beste past",
      "Eerlijk over repareren vs. vervangen — geen onnodige verkoop",
      "Jaarlijks onderhoudscontract beschikbaar",
      "Snel ter plaatse bij storing, ook in de winter",
    ],
    faq: [
      {
        q: "Hoe vaak moet een cv-ketel worden onderhouden?",
        a: "Jaarlijks onderhoud is de standaard aanbeveling van fabrikanten en is in de meeste gevallen ook vereist voor garantie. Een onderhoudsbeurt duurt gemiddeld een uur en geeft u zekerheid over veiligheid en efficiëntie.",
      },
      {
        q: "Mijn cv-ketel is oud. Repareren of vervangen?",
        a: "Dat hangt af van de leeftijd, het merk en de aard van het probleem. We beoordelen eerlijk wat zinvol is. Een ketel van 15+ jaar met meerdere storingen is doorgaans rijp voor vervanging.",
      },
      {
        q: "Welke CV-ketels installeren jullie?",
        a: "We installeren alle gangbare merken: Vaillant, Intergas, Remeha, Nefit, Bosch, Worcester en meer. We adviseren op basis van uw situatie, niet op basis van marges.",
      },
      {
        q: "Kunnen jullie ook een hybride warmtepomp installeren?",
        a: "Ja. Een hybride systeem combineert een HR-ketel met een warmtepomp en kan flink besparen op uw energierekening. We adviseren of dit voor uw woning rendabel is.",
      },
      {
        q: "Wat kost een nieuwe cv-ketel inclusief installatie?",
        a: "Dat varieert sterk per type ketel, merk en de situatie in uw woning. We maken altijd een heldere offerte op maat voordat we aan de slag gaan.",
      },
    ],
    icon: "🔥",
  },

  {
    slug: "gasinstallatie",
    name: "Gasinstallatie",
    namePlural: "Gasinstallatiewerkzaamheden",
    vakman: "gasinstallateur",
    tagline: "Veilige gasinstallatie door gecertificeerde vakman",
    metaTitle: "Gasinstallatie Kortenhoef & omgeving | SMIT Installatie Techniek",
    metaDescription:
      "Gecertificeerde gasinstallateur in Kortenhoef en Het Gooi. Gasleidingen, gasaansluitingen en veiligheidscontroles. Veiligheid staat voorop. Bel 06-29528454.",
    h1: "Gasinstallatie in Kortenhoef en omgeving",
    intro:
      "Gas is niet iets om mee te experimenteren. Veiligheid staat bij SMIT Installatie Techniek altijd voorop. Onze gecertificeerde gasinstallateur voert alle werkzaamheden aan gasinstallaties uit conform de geldende normen en regelgeving.",
    introExtended:
      "Gasinstallaties vragen om gecertificeerde vakmannen die de regelgeving kennen, de risico's begrijpen en het werk nauwkeurig uitvoeren. SMIT Installatie Techniek beschikt over de juiste certificeringen en ervaring voor gasinstallatiewerk in woningen en bedrijfspanden. Van het aanleggen van nieuwe gasleidingen tot veiligheidscontroles en goedkeuringen — wij zorgen dat uw installatie veilig is en aan alle eisen voldoet.",
    whenNeeded: {
      title: "Wanneer heeft u een gasinstallateur nodig?",
      items: [
        "U wilt een gasleiding aanleggen of verleggen voor een nieuw apparaat",
        "U ruikt gaslucht in huis (bel ook 112 en verlaat het pand)",
        "U wilt een gasfornuis, gashaard of barbecue laten aansluiten",
        "Uw gasinstallatie is nog nooit gekeurd of is ouder dan 10 jaar",
        "U verbouwt en de gasleiding moet worden omgelegd",
        "U wilt een buitengasaansluiting voor terrasverwarming of barbecue",
        "Uw netbeheerder heeft geconstateerd dat uw installatie niet voldoet",
      ],
    },
    sections: [
      {
        h2: "Gasleidingen aanleggen en verleggen",
        body: "Nieuw gasapparaat of verbouwing waarbij de gasleiding verlegd moet worden? We leggen gaskoperleidingen aan conform de NEN-normen. Alle aansluitingen worden getest op lekkage met de juiste apparatuur voordat de installatie in gebruik gaat. Alleen als alles veilig is, verklaren we de installatie gereed.",
      },
      {
        h2: "Gastoestellen veilig aansluiten",
        body: "Gasfornuis, gashaard, terrasverwarmer of buitenbarbecue — we sluiten het vakkundig en veilig aan. We controleren de bestaande aansluiting, de leiding en de ventilatie en zorgen dat alles gecertificeerd en correct is. U kunt uw toestel met vertrouwen in gebruik nemen.",
      },
      {
        h2: "Gasdichtheidscontrole en veiligheidsinspectie",
        body: "Wanneer heeft u uw gasinstallatie voor het laatst laten keuren? Een gasdichtheidscontrole geeft zekerheid over de veiligheid van uw installatie. We controleren de gehele installatie, meten op lekkage en geven u een duidelijk rapport. Bij afwijkingen adviseren we meteen over de aanpak.",
      },
      {
        h2: "Gasinstallatie bij verbouwing of nieuwbouw",
        body: "Bij een verbouwing of nieuwbouwproject regelen we de volledige gasinstallatie — van de hoofdaansluiting tot de individuele apparaten. We stemmen de planning af met uw aannemer en bewaken de kwaliteit van aanleg tot oplevering.",
      },
    ],
    werkwijze: [
      { stap: "1. Veiligheid eerst", body: "Bij gasklachten of twijfel reageren we altijd met urgentie. Bel ons direct." },
      { stap: "2. Inspectie en advies", body: "We beoordelen de bestaande installatie en adviseren de meest veilige en efficiënte aanpak." },
      { stap: "3. Uitvoering conform normen", body: "Gaswerk wordt uitgevoerd conform NEN-normen. Alle aansluitingen worden getest op lekkage." },
      { stap: "4. Certificering en documentatie", body: "U ontvangt de benodigde documentatie van de werkzaamheden. De installatie voldoet aan alle eisen." },
    ],
    werkzaamheden: [
      "Gasleidingen aanleggen en verleggen",
      "Gastoestellen aansluiten (fornuis, haard, barbecue)",
      "Gasdichtheidscontrole en keuring",
      "CO-detectie en veiligheidsinspectie",
      "Gasafsluiter plaatsen of vervangen",
      "Buitengasaansluiting aanleggen",
      "Gasinstallatie bij nieuwbouw en verbouwing",
      "Spoedreparatie bij gaslek",
    ],
    situaties: [
      "Woningeigenaren die een gasfornuis of gashaard willen aansluiten",
      "Mensen die hun gasinstallatie willen laten keuren",
      "Aannemers die een gecertificeerde gasinstallateur nodig hebben",
      "Eigenaren die twijfelen aan de veiligheid van hun gasinstallatie",
      "Verbouwers waarbij de gasleiding verlegd moet worden",
    ],
    trustReasons: [
      "Gecertificeerd voor gasinstallatiewerk conform NEN-normen",
      "Veiligheid is niet onderhandelbaar — we hanteren geen compromissen",
      "Duidelijke documentatie na elke klus",
      "Transparant over wat wel en niet is toegestaan",
      "Bekend met de eisen van alle Nederlandse netbeheerders",
    ],
    faq: [
      {
        q: "Is SMIT gecertificeerd voor gaswerk?",
        a: "Ja. Onze monteurs zijn gecertificeerd en voeren gaswerk uit conform de geldende NEN-normen en eisen van netbeheerders.",
      },
      {
        q: "Wat moet ik doen als ik gaslucht ruik?",
        a: "Sluit het hoofdkraan af, open ramen en deuren, gebruik geen elektra en verlaat het pand. Bel 112 en daarna ons voor spoedassistentie.",
      },
      {
        q: "Mag ik zelf een gasleiding aansluiten?",
        a: "Nee. Gaswerk mag wettelijk alleen worden uitgevoerd door gecertificeerde installateurs. Dit is zowel een verplichting als een veiligheidseis.",
      },
      {
        q: "Hoe vaak moet een gasinstallatie gekeurd worden?",
        a: "Er is geen wettelijke verplichting voor periodieke keuringen van bestaande installaties, maar een inspectie elke 5 tot 10 jaar is sterk aan te raden voor uw veiligheid.",
      },
    ],
    icon: "⚡",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const servicesSlugs = services.map((s) => s.slug);
