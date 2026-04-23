/**
 * Unieke content per dienst + plaats combinatie.
 * Key = "dienst/plaats" (bijv. "dakwerk/kortenhoef")
 * Als er geen entry is, valt de pagina terug op de generieke template.
 */

export type ComboContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;            // korte openingszin onder H1
  intro: string;           // uitgebreide intro alinea
  sections: { h2: string; body: string }[];
  situaties: string[];
  faq: { q: string; a: string }[];
  ctaHeading: string;
  ctaBody: string;
  internalLinks: { href: string; label: string }[];
};

const content: Record<string, ComboContent> = {

  // ─────────────────────────────────────────────────────────────────
  // DAKWERK / KORTENHOEF
  // ─────────────────────────────────────────────────────────────────
  "dakwerk/kortenhoef": {
    metaTitle: "Dakdekker Kortenhoef | SMIT Installatie Techniek – Uw lokale specialist",
    metaDescription:
      "Dakdekker in Kortenhoef? Kevin Smit woont en werkt hier zelf. Dakreparatie, nieuwe dakbedekking en onderhoud — snel ter plaatse, eerlijke prijs.",
    h1: "Dakdekker in Kortenhoef",
    lead: "Kevin Smit is niet zomaar een dakdekker in Kortenhoef — hij woont hier zelf. Als uw dak lekt, staat hij snel aan uw deur.",
    intro:
      "In Kortenhoef staan veel woningen uit de jaren '60 tot '80: rijtjeswoningen, vrijstaande huizen en bungalows met pannendaken, en uitbouwen met een plat bitumendak. Kevin kent deze woningen op zijn duimpje. Hij weet welke problemen er bij dit bouwtype komen kijken, wat er doorgaans mis gaat na een strenge winter en wat een eerlijke prijs is voor een degelijke oplossing. Geen grootstedelijke installateur die uw dossier doorgeeft aan een onderaannemer — gewoon de vakman zelf, op de fiets als het moet.",
    sections: [
      {
        h2: "Platte daken op uitbouwen: een veelvoorkomend Kortenhoefs probleem",
        body: "In Kortenhoef heeft bijna elke woning een uitbouw met een plat bitumendak. Die daken hebben een levensduur van 15 tot 25 jaar — daarna worden ze poreus, gaan ze scheuren en beginnen ze te lekken. Kevin repareert of vervangt deze daken regelmatig in het dorp en kent de typische aandachtspunten: de aansluiting op de achtergevel, de dakdoorvoer voor de ventilatie en het afschot richting de afvoer. Hij werkt het in één dag af en laat alles netjes achter.",
      },
      {
        h2: "Pannendaken: onderhoud en reparatie na storm of vorstschade",
        body: "De meeste vrijstaande woningen en twee-onder-een-kappers in Kortenhoef hebben een hellend pannendak. Na een storm met harde wind of na een vorstperiode kunnen nokpannen verschuiven, dakpannen breken of de nokvorst loslaten. Kevin controleert het dak nauwkeurig, herstelt wat nodig is en adviseert u eerlijk of preventief onderhoud zinvol is. Kleine problemen aanpakken kost minder dan een waterschade-restauratie.",
      },
      {
        h2: "Goten en zinkwerk rondom uw Kortenhoefse woning",
        body: "Beschadigde of verstopte dakgoten zorgen voor wateroverlast langs de gevel en vochtproblemen in het fundament. Wij reinigen en repareren goten of vervangen ze volledig — in zink of aluminium. In Kortenhoef werken we snel: geen lange wachttijden, geen planning over drie weken. We zijn er snel bij.",
      },
      {
        h2: "Dakinspectie: weet hoe uw dak erbij staat",
        body: "Weet u niet meer wanneer uw dak voor het laatst is nagekeken? Kevin voert een grondige dakinspectie uit en geeft u een eerlijk beeld van de situatie. Wat is nog goed, wat vraagt aandacht en wat moet op korte termijn worden aangepakt? Geen verkooppraatje — gewoon de feiten, zodat u een weloverwogen beslissing kunt nemen.",
      },
    ],
    situaties: [
      "Bewoners van Kortenhoef met een lekkend plat dak op de uitbouw",
      "Woningeigenaren na storm- of vorstschade aan het pannendak",
      "Mensen die hun dak willen laten inspecteren voor verkoop",
      "Eigenaren van oudere woningen met verouderde dakbedekking",
      "VvE's met gedeelde dakvlakken in Kortenhoef",
    ],
    faq: [
      {
        q: "Kevin woont in Kortenhoef — hoe snel is hij er bij een lekkage?",
        a: "Omdat Kevin zelf in Kortenhoef woont en werkt, is hij er bij spoed doorgaans binnen enkele uren. Bij een acute lekkage staat u niet uren te wachten.",
      },
      {
        q: "Mijn uitbouw heeft een oud bitumendak. Repareren of vervangen?",
        a: "Dat hangt af van de leeftijd en de schade. Kevin beoordeelt het dak ter plaatse en adviseert eerlijk. Een dak jonger dan 15 jaar repareert hij vaak nog goed. Ouder en poreus? Dan loont vervanging meer.",
      },
      {
        q: "Doet u ook kleine reparaties, zoals een verschoven nokpan?",
        a: "Absoluut. Ook kleine klussen worden serieus genomen. Een losse nokpan kan bij regen voor grote waterschade zorgen.",
      },
      {
        q: "Wat kost een dakinspectie in Kortenhoef?",
        a: "De inspectie is bij ons gratis en vrijblijvend. U betaalt alleen als u ook daadwerkelijk werkzaamheden laat uitvoeren.",
      },
      {
        q: "Mijn woning in Kortenhoef staat te koop. Kan ik het dak snel laten nakijken?",
        a: "Ja. We plannen snel een afspraak in. Een goede dakinspectie voorkomt discussies bij de verkoop en geeft kopers vertrouwen.",
      },
    ],
    ctaHeading: "Dakproblemen in Kortenhoef? Bel de lokale specialist.",
    ctaBody:
      "Kevin Smit woont en werkt in Kortenhoef. Bel hem direct of vraag online een offerte aan. U krijgt antwoord van de vakman zelf.",
    internalLinks: [
      { href: "/zinkwerk/kortenhoef", label: "Zinkwerk in Kortenhoef" },
      { href: "/sanitair/kortenhoef", label: "Loodgieter in Kortenhoef" },
      { href: "/cv-installatie/kortenhoef", label: "CV-installatie Kortenhoef" },
      { href: "/werkgebied/kortenhoef", label: "Alle diensten in Kortenhoef" },
      { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
      { href: "/offerte/dakwerk", label: "Offerte dakwerk aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // DAKWERK / HILVERSUM
  // ─────────────────────────────────────────────────────────────────
  "dakwerk/hilversum": {
    metaTitle: "Dakdekker Hilversum | SMIT Installatie Techniek – Vakkundige dakspecialist",
    metaDescription:
      "Dakdekker in Hilversum? SMIT voert dakreparaties, dakbedekking en onderhoud uit in heel Hilversum. Villa's, appartementen en meer. Bel 06-29528454.",
    h1: "Dakdekker in Hilversum",
    lead: "Hilversum heeft een van de rijkste woningbestanden in Nederland — van Art Deco-villa's uit de jaren '20 tot moderne stadsappartementen. Elk daktype vraagt zijn eigen aanpak.",
    intro:
      "In Hilversum staan zowel monumentale villa's in de Componistenwijk en Kerkelanden als rijtjeswoningen in naoorlogse wijken en moderne appartementencomplexen in het centrum. Die verscheidenheid vraagt om een dakdekker die het niet met één standaardoplossing doet. SMIT Installatie Techniek werkt voor alle woningtypes in Hilversum — van historische leien tot moderne EPDM-dakbedekking op platdakflats. Vanuit Kortenhoef zijn we snel in Hilversum en we nemen de klus persoonlijk op.",
    sections: [
      {
        h2: "Villa's en karakterwoningen: dakonderhoud met kennis van historische bouw",
        body: "De oudere villa's in wijken als de Componistenwijk, Gooiland en het Laarder Kwartier hebben daken met pannendekking, leien of zinken details die speciale aandacht vragen. Verkeerde materialen of slordig werk valt bij dit soort woningen direct op — en is soms zelfs in strijd met monumentale regelgeving. Kevin werkt zorgvuldig en respecteert de architectuur. Hij adviseert over de juiste materialen en zorgt voor een afwerking die past bij het karakter van de woning.",
      },
      {
        h2: "Flatgebouwen en VvE's: planmatig dakonderhoud in Hilversum",
        body: "Hilversum heeft ook veel appartementencomplexen en VvE's met gedeeld dak. Wij werken regelmatig voor VvE-besturen die planmatig dakonderhoud willen uitvoeren of een acute reparatie nodig hebben. We stemmen de planning af op de wensen van de VvE, communiceren helder en leveren een duidelijk rapport achteraf. Geen gedoe, gewoon goed werk.",
      },
      {
        h2: "Platdaken in de Hilversumse binnenstad en nieuwere wijken",
        body: "In Hilversum-West en de nieuwere woonwijken zijn veel woningen met platte of licht hellende daken. EPDM-dakbedekking is hier de standaard — maar ook bij dit materiaal zijn leeftijd en uitvoering bepalend. We inspecteren, repareren of vervangen en zorgen voor een waterdichte, duurzame afsluiting die past bij de levensduur van uw woning.",
      },
      {
        h2: "Snel en betrouwbaar in Hilversum — ook bij spoedgevallen",
        body: "Hilversum is voor ons goed bereikbaar vanuit Kortenhoef. Bij een acute daklekkage na een hevige regenbui of storm reageren we snel. We nemen uw melding serieus, schatten de situatie in en zijn er zo snel mogelijk om erger te voorkomen.",
      },
    ],
    situaties: [
      "Eigenaren van villa's en karakterwoningen in Hilversum die zorgvuldig dakwerk verwachten",
      "VvE-besturen op zoek naar een betrouwbare dakdekker voor planmatig onderhoud",
      "Bewoners van flatgebouwen en appartementen met dakproblemen",
      "Particulieren in Hilversum-West en nieuwere wijken met verouderd platdak",
      "Woningeigenaren die na storm of vorstschade snel hulp nodig hebben",
    ],
    faq: [
      {
        q: "Werkt SMIT ook voor VvE's in Hilversum?",
        a: "Ja. We hebben ervaring met VvE-opdrachten en begrijpen hoe dat werkt: goede communicatie, heldere documentatie en betrouwbare uitvoering.",
      },
      {
        q: "Mijn villa in de Componistenwijk heeft een leien dak. Kunt u daarmee werken?",
        a: "Ja. Historische dakbedekkingen zoals leien of Rijndekking vragen specifieke kennis. We beoordelen de situatie en adviseren over reparatie of deelvervanging.",
      },
      {
        q: "Hoe snel bent u in Hilversum bij spoed?",
        a: "Vanuit Kortenhoef zijn we binnen 15-20 minuten in Hilversum. Bij spoed proberen we dezelfde dag te komen.",
      },
      {
        q: "Geeft u een offerte op maat voor dakwerk in Hilversum?",
        a: "Altijd. We komen langs, beoordelen het dak en maken een heldere offerte met vaste prijs. Geen verrassingen achteraf.",
      },
      {
        q: "Kan SMIT ook het zinkwerk rondom mijn Hilversumse woning verzorgen?",
        a: "Ja. Dakwerk en zinkwerk gaan hand in hand. We kunnen beide in één project aanpakken voor een complete en waterdichte oplossing.",
      },
    ],
    ctaHeading: "Dakwerk in Hilversum laten uitvoeren?",
    ctaBody:
      "Vraag een vrijblijvende offerte aan of bel Kevin direct. We kennen Hilversum goed en zijn er snel bij.",
    internalLinks: [
      { href: "/zinkwerk/hilversum", label: "Zinkwerk in Hilversum" },
      { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
      { href: "/cv-installatie/hilversum", label: "CV-installatie Hilversum" },
      { href: "/werkgebied/hilversum", label: "Alle diensten in Hilversum" },
      { href: "/dakwerk/kortenhoef", label: "Dakdekker Kortenhoef" },
      { href: "/dakwerk/huizen", label: "Dakdekker Huizen" },
      { href: "/offerte/dakwerk", label: "Offerte dakwerk aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // DAKWERK / HUIZEN
  // ─────────────────────────────────────────────────────────────────
  "dakwerk/huizen": {
    metaTitle: "Dakdekker Huizen | SMIT Installatie Techniek – Snel en vakkundig",
    metaDescription:
      "Dakdekker in Huizen nodig? SMIT Installatie Techniek repareert en vervangt daken in Huizen en omgeving. Platte daken, pannendaken en goten. Bel 06-29528454.",
    h1: "Dakdekker in Huizen",
    lead: "Huizen heeft veel naoorlogse woningen met daken die de leeftijd beginnen te voelen. Een praktische aanpak, een eerlijke prijs en snel klaar — dat is wat onze klanten in Huizen waarderen.",
    intro:
      "De woningbouw in Huizen bestaat voor een groot deel uit twee-onder-een-kapwoningen, bungalows en rijtjeshuizen gebouwd in de jaren '60 en '70. Kenmerkend voor deze bouwperiode: pannendaken op de hoofdgebouwen en platte bitumendaken op garages, schuren en aanbouwen. Na 40 tot 50 jaar zijn deze daken aan vervanging toe — en dat merkt u eerder aan de binnenzijde dan u zou willen. SMIT Installatie Techniek werkt regelmatig in Huizen en kent de typische dakproblemen die bij dit woningtype horen.",
    sections: [
      {
        h2: "Verouderde platte daken op garages en aanbouwen",
        body: "In Huizen heeft bijna elke vrijstaande woning of twee-onder-een-kapper een aangebouwde garage of berging met een plat dak. Na jaren veroudert bitumendakbedekking: ze wordt bros, verliest elasticiteit en begint bij de naden of dakdoorvoeren te lekken. Wij vervangen verouderd bitumen door modern EPDM of dakbedekking op SBS-basis. Dit gaat twee tot drie keer zo lang mee en vraagt nauwelijks onderhoud. De klus is doorgaans in één dag klaar.",
      },
      {
        h2: "Windschade aan het pannendak: Huizen heeft een open ligging",
        body: "Huizen ligt aan het Gooimeer en heeft een relatief open ligging. Bij harde westelijke wind zijn dakpannen en nokvorst kwetsbaar. Na een stevige storm zien we regelmatig schade aan nokpannen, verschoven vorsten en beschadigde dampkappen. Kevin herstelt dit vakkundig en controleert direct het gehele dakvlak op andere zwakke plekken — zodat u niet voor elke nieuwe storm hoeft te bellen.",
      },
      {
        h2: "Dakgoten: vol met zand, mos en bladeren",
        body: "In Huizen staan veel bomen langs de wegen en rondom de woningen. Dat betekent jaarlijks verstopte dakgoten. Een verstopte goot loopt over bij regen, beschadigt de gevel en kan voor vochtproblemen in spouw of fundering zorgen. Wij reinigen en inspecteren dakgoten en repareren of vervangen de goten als dat nodig is. Snel geregeld, lang profijt.",
      },
      {
        h2: "Dakrenovatie bij verkoop of aankoop in Huizen",
        body: "Koopt of verkoopt u een woning in Huizen? Een gekeurd dak geeft zekerheid aan beide kanten. We voeren dakinspecties uit voor verkopers die vooraf duidelijkheid willen geven, en voor kopers die weten wat ze kopen. Op basis van de inspectie geven we een eerlijk advies — en als er werk nodig is, maken we meteen een offerte.",
      },
    ],
    situaties: [
      "Eigenaren van 60er- en 70er-jaren woningen in Huizen met verouderd plat dak",
      "Bewoners met windschade aan nokpannen of nokvorst",
      "Mensen met jaarlijks terugkerende goten die overlopen",
      "Kopers en verkopers die een dakinspectie willen voor de transactie",
      "Woningeigenaren die toe zijn aan een complete dakrenovatie",
    ],
    faq: [
      {
        q: "Mijn platte garagedak lekt al tijden. Is EPDM echt beter dan bitumen?",
        a: "Ja, modern EPDM heeft een levensduur van 30 tot 50 jaar, is soepeler bij temperatuurwisselingen en vergt nauwelijks onderhoud. De investering verdient zichzelf terug.",
      },
      {
        q: "Na de laatste storm zijn er nokpannen verschoven. Hoe snel kunt u komen?",
        a: "Bel ons direct. Bij acute schade na storm proberen we er zo snel mogelijk bij te zijn. We repareren het en controleren direct of er meer schade is.",
      },
      {
        q: "Reinigen jullie ook dakgoten in Huizen?",
        a: "Ja. Goten reinigen, repareren en vervangen doen we regelmatig in Huizen. Vaak combineren we dit met een dakinspectie.",
      },
      {
        q: "Hoe lang duurt de vervanging van een plat garagedak?",
        a: "Een standaard garagedak is in de meeste gevallen in één werkdag klaar. Grotere daken of extra werkzaamheden kunnen een dag meer kosten.",
      },
      {
        q: "Geeft SMIT een garantie op nieuwe dakbedekking in Huizen?",
        a: "Ja. Op nieuw aangebrachte dakbedekking geven we garantie. De exacte termijn verschilt per materiaal en vermelden we duidelijk in de offerte.",
      },
    ],
    ctaHeading: "Laat uw situatie vrijblijvend beoordelen.",
    ctaBody:
      "Kevin beoordeelt uw dak en geeft u een eerlijk advies — zonder verkooppraat. Plan een afspraak of bel direct.",
    internalLinks: [
      { href: "/zinkwerk/huizen", label: "Zinkwerk in Huizen" },
      { href: "/sanitair/huizen", label: "Loodgieter Huizen" },
      { href: "/werkgebied/huizen", label: "Alle diensten in Huizen" },
      { href: "/dakwerk/naarden", label: "Dakdekker Naarden" },
      { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
      { href: "/offerte/dakwerk", label: "Offerte dakwerk aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // DAKWERK / NAARDEN
  // ─────────────────────────────────────────────────────────────────
  "dakwerk/naarden": {
    metaTitle: "Dakdekker Naarden | SMIT Installatie Techniek – Zorgvuldig vakwerk",
    metaDescription:
      "Dakdekker in Naarden? SMIT voert dakwerk uit in Naarden-Vesting en omgeving. Ervaring met historische panden, karakterwoningen en moderne daken.",
    h1: "Dakdekker in Naarden",
    lead: "Naarden is een van de best bewaarde vestingsteden van Europa. De woningen en panden verdienen vakmannen die dat respecteren.",
    intro:
      "Naarden heeft een bijzonder karakter. De vestingstad trekt bewoners die waarde hechten aan kwaliteit, uitstraling en zorgvuldig vakwerk. Dat geldt zeker voor de daken van de historische panden, maar ook voor de nieuwere woningen in Naarden-Bussum die eenzelfde verzorgde uitstraling verwachten. SMIT Installatie Techniek werkt in Naarden met de zorgvuldigheid die het verdient: de juiste materialen voor het juiste pand, correcte aansluitingen en een nette afwerking die past bij de architectuur.",
    sections: [
      {
        h2: "Dakwerk aan historische panden in de vesting",
        body: "In de Naardense vesting staan gebouwen die deels monumentale status hebben of in een beschermd stadsgezicht liggen. Dakwerk aan deze panden vraagt specifieke kennis van historische dakconstructies en materiaalgebruik. Kevin is bekend met de eisen rondom pannendekking, leien en zinken details bij dit soort panden. We werken altijd conform de geldende regels en stemmen bij twijfel vooraf af met de gemeente of eigenaar.",
      },
      {
        h2: "Karakterwoningen in Naarden-Bussum: kwaliteit boven goedkoop",
        body: "In de woonwijken rondom de vesting staan veel karakteristieke vrijstaande woningen en villa's. De eigenaren daarvan verwachten een vakman die kwalitatief werkt, niet de goedkoopste is maar wél de beste waarde levert. Kevin adviseert eerlijk over materiaal en aanpak en voert het werk zorgvuldig uit. Dat is bij dit type woningen de enige juiste benadering.",
      },
      {
        h2: "VvE's in Naarden: professionele aanpak voor gedeelde daken",
        body: "Naarden heeft ook appartementencomplexen met VvE-besturen die verantwoordelijk zijn voor het gemeenschappelijke dak. Wij werken voor VvE's in de regio: transparante offertes, goed overleg, correcte uitvoering en duidelijke nazorg. We begrijpen dat een VvE meerdere partijen heeft om rekening mee te houden.",
      },
      {
        h2: "Preventief dakonderhoud: goedkoper dan waterschade",
        body: "In Naarden zien we regelmatig dat bewoners te lang wachten met dakonderhoud. Een jaarlijkse inspectie kost weinig maar voorkomt grote schade. Kevin bekijkt het dak grondig, reinigt goten en rapporteert helder. U krijgt een duidelijk beeld van wat de staat van uw dak is — en wat eventueel niet kan wachten.",
      },
    ],
    situaties: [
      "Eigenaren van monumentale of historische panden in de Naardense vesting",
      "Bewoners van karakterwoningen in Naarden-Bussum die kwaliteit verwachten",
      "VvE-besturen met gedeeld dak dat onderhoud of renovatie behoeft",
      "Particulieren die na inspectie zekerheid willen over de staat van hun dak",
      "Woningeigenaren die een aannemer zoeken met verstand van historische architectuur",
    ],
    faq: [
      {
        q: "Werkt SMIT ook aan panden met monumentale status in Naarden?",
        a: "Ja. We kennen de bijzondere eisen rondom monumentale panden en historische dakconstructies. We adviseren u over de juiste materialen en werkwijze.",
      },
      {
        q: "Heeft u ervaring met leien daken?",
        a: "Ja. Leien daken komen we regelmatig tegen in Naarden en de omgeving. Deelvervanging, het repareren van loszittende leien en het herstel van de onderbaan — we doen het allemaal.",
      },
      {
        q: "Onze VvE zoekt een dakdekker voor periodiek onderhoud. Kan dat?",
        a: "Zeker. We maken graag kennis met het bestuur, inspecteren het dak en stellen een meerjarenplan voor. Heldere communicatie en betrouwbare uitvoering staan centraal.",
      },
      {
        q: "Wat kost een dakinspectie voor mijn woning in Naarden?",
        a: "Een dakinspectie is bij ons gratis en vrijblijvend. U krijgt een eerlijk beeld van de situatie zonder dat u ergens aan vast zit.",
      },
      {
        q: "Hoe lang van tevoren moet ik een afspraak inplannen in Naarden?",
        a: "Voor niet-spoed werkzaamheden plannen we doorgaans binnen één tot twee weken. Bij spoed proberen we altijd snel te reageren.",
      },
    ],
    ctaHeading: "Neem vrijblijvend contact op voor uw dakproject in Naarden.",
    ctaBody:
      "Of u nu een kleine reparatie of een complete renovatie nodig heeft — Kevin Smit kijkt graag mee en geeft u een eerlijk advies en heldere offerte.",
    internalLinks: [
      { href: "/zinkwerk/naarden", label: "Zinkwerk in Naarden" },
      { href: "/sanitair/naarden", label: "Loodgieter Naarden" },
      { href: "/werkgebied/naarden", label: "Alle diensten in Naarden" },
      { href: "/dakwerk/bussum", label: "Dakdekker Bussum" },
      { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
      { href: "/offerte/dakwerk", label: "Offerte dakwerk aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SANITAIR / KORTENHOEF
  // ─────────────────────────────────────────────────────────────────
  "sanitair/kortenhoef": {
    metaTitle: "Loodgieter Kortenhoef | SMIT Installatie Techniek – Snel en betrouwbaar",
    metaDescription:
      "Loodgieter in Kortenhoef? Kevin Smit is uw lokale loodgieter. Lekkage, badkamer en sanitair. Snel ter plaatse, eerlijke prijs. Bel 06-29528454.",
    h1: "Loodgieter in Kortenhoef",
    lead: "Van een verstopte afvoer tot een complete badkamerrenovatie — Kevin Smit is de loodgieter in Kortenhoef die u direct te pakken krijgt.",
    intro:
      "In de meeste woningen in Kortenhoef dateert het leidingwerk uit de jaren '60 tot '80. Koper dat veroudert, afdichtingen die uitdrogen, kranen die al jaren druppelen. Geen reden tot paniek, maar wel reden om het goed te laten aanpakken. Kevin Smit lost sanitairproblemen op in Kortenhoef en directe omgeving — van kleine klusjes die al te lang wachten tot complete badkamerrenovaties. Als lokale loodgieter is hij er snel bij en kent hij het type woningen in het dorp als geen ander.",
    sections: [
      {
        h2: "Lekkages in Kortenhoef: snel opsporen en definitief oplossen",
        body: "Een lekkage onder de vloer, achter de wand of boven het plafond — dat vraagt om een loodgieter die nauwkeurig werkt en niet op de gok begint te slopen. We lokaliseren de bron van de lekkage met de juiste middelen, repareren die deugdelijk en zorgen dat het probleem duurzaam is verholpen. En dat snel — zeker in Kortenhoef, want Kevin is er snel bij.",
      },
      {
        h2: "Badkamerrenovatie in uw Kortenhoefse woning",
        body: "Veel woningen in Kortenhoef hebben een badkamer die toe is aan een update. Wij verzorgen het installatietechnische deel: leidingwerk, aansluitingen en plaatsing van douche, bad, toilet en wastafel. We werken nauw samen met tegelzetters in de regio zodat de renovatie soepel verloopt. U heeft één aanspreekpunt voor de technische installatie.",
      },
      {
        h2: "Kranen, afvoeren en kleine klussen — ook daarvoor bent u welkom",
        body: "U hoeft niet te wachten tot iets echt kapot is voordat u belt. Een druppelende mengkraan, een traag afvoerende douche of een toilet dat blijft doorspoelen — wij lossen het snel en netjes op. Kleine klussen worden net zo serieus genomen als grote projecten.",
      },
      {
        h2: "Leidingwerk vervangen in oudere woningen in Kortenhoef",
        body: "In de naoorlogse woningen van Kortenhoef ligt nog regelmatig oud koperwerk of zelfs loodleidingen die allang hadden moeten worden vervangen. Oud leidingwerk zorgt voor kalkaanslag, verminderde doorstroming en in het ergste geval voor waterverontreiniging. We brengen het leidingwerk volledig in kaart, vervangen wat nodig is en zorgen voor een installatie die weer tientallen jaren meegaat. Netjes weggewerkt, zonder overbodige ingrepen in uw muren of vloeren.",
      },
    ],
    situaties: [
      "Bewoners van Kortenhoef met een lekkage of sanitairprobleem",
      "Eigenaren van oudere woningen met verouderd koperwerk",
      "Mensen die hun badkamer willen renoveren in Kortenhoef",
      "Huurders en eigenaren met verstopte of trage afvoeren",
    ],
    faq: [
      {
        q: "Hoe snel bent u als loodgieter in Kortenhoef beschikbaar?",
        a: "Omdat Kevin in Kortenhoef woont, is hij er bij spoed doorgaans snel. Bel hem direct en bespreek de situatie.",
      },
      {
        q: "Mijn badkamer is aan vervanging toe. Waar begin ik?",
        a: "Bel of mail ons. Kevin bekijkt de bestaande situatie, adviseert over de mogelijkheden en geeft een heldere offerte voor het installatietechnische deel.",
      },
      {
        q: "Kunnen jullie ook een extra toilet of wastafel plaatsen?",
        a: "Ja. We beoordelen de aansluitingsmogelijkheden en voeren de uitbreiding vakkundig uit.",
      },
      {
        q: "Mijn afvoer is verstopt. Is dat ook iets voor SMIT?",
        a: "Zeker. We verhelpen verstoppingen in douche, bad, toilet en keuken — en als de oorzaak dieper zit, brengen we dat in kaart.",
      },
    ],
    ctaHeading: "Sanitairprobleem in Kortenhoef? Bel de lokale loodgieter.",
    ctaBody: "Kevin is uw loodgieter in Kortenhoef. Snel ter plaatse, eerlijk advies, vaste prijs.",
    internalLinks: [
      { href: "/dakwerk/kortenhoef", label: "Dakdekker Kortenhoef" },
      { href: "/cv-installatie/kortenhoef", label: "CV-installatie Kortenhoef" },
      { href: "/werkgebied/kortenhoef", label: "Alle diensten in Kortenhoef" },
      { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
      { href: "/offerte/sanitair", label: "Offerte sanitair aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // SANITAIR / HILVERSUM
  // ─────────────────────────────────────────────────────────────────
  "sanitair/hilversum": {
    metaTitle: "Loodgieter Hilversum | SMIT Installatie Techniek – Sanitair specialist",
    metaDescription:
      "Loodgieter in Hilversum? SMIT voor lekkage, badkamerrenovatie en leidingwerk in heel Hilversum. Snel en gecertificeerd. Bel 06-29528454.",
    h1: "Loodgieter in Hilversum",
    lead: "Hilversum heeft uiteenlopende woningtypes — van 100 jaar oude villa's tot moderne stadsappartementen. Onze loodgieters kennen elk type installatie.",
    intro:
      "Als loodgieter in Hilversum werkt SMIT Installatie Techniek voor een breed publiek: eigenaren van grote villa's in de Componistenwijk, bewoners van naoorlogse rijtjeswoningen en VvE's met gedeeld leidingwerk in een appartementencomplex. Elk woningtype heeft zijn eigen sanitairsituatie. Het leidingwerk in een villa uit 1930 ziet er heel anders uit dan dat in een flat uit 1975 of een nieuwbouwwoning uit 2010. Die kennis van materialen, systemen en bouwjaren maakt het verschil tussen een goede reparatie en een tijdelijke pleister.",
    sections: [
      {
        h2: "Oud leidingwerk in Hilversumse villa's en oudere woningen",
        body: "In de oudere villa's en herenhuizen in Hilversum komt nog regelmatig loodwerk, gietijzeren afvoerleidingen of vroeg koperwerk voor. Dit soort installaties vraagt specifieke kennis en zorgvuldig werken — zeker in panden met monumentale of cultuurhistorische waarde. We beoordelen eerlijk wat er nog goed is en wat vervangen moet worden, en we werken netjes zodat uw woning er geen schade van ondervindt.",
      },
      {
        h2: "Badkamerrenovaties in Hilversum: van ontwerp tot oplevering",
        body: "Een nieuwe badkamer is een flinke stap. In Hilversum werken we voor particulieren die hun verouderde badkamer willen moderniseren of uitbreiden. We verzorgen het complete sanitairwerk: leidingwerk, aansluitingen, plaatsing van bad, douche, toilet en wastafel. Voor de tegels werken we samen met partners in de regio. U heeft één aanspreekpunt voor de technische installatie.",
      },
      {
        h2: "Loodgieter voor appartementen en VvE's in Hilversum",
        body: "In appartementencomplexen loopt leidingwerk door meerdere woningen en is een storing voor meer mensen tegelijk een probleem. We werken voor VvE's en individuele appartementsrechthebbenden in Hilversum. We handelen snel, communiceren helder met het bestuur en zorgen voor correcte documentatie achteraf.",
      },
      {
        h2: "Lekkages in Hilversum: snel diagnose en duurzame reparatie",
        body: "Een lekkage wacht niet op een geschikt moment. We reageren snel op spoedmeldingen in Hilversum. We stellen de oorzaak nauwkeurig vast — ook als die niet direct zichtbaar is — en lossen het probleem definitief op. Geen noodoplossingen die een paar maanden later opnieuw problemen geven.",
      },
    ],
    situaties: [
      "Eigenaren van karakterwoningen en villa's in Hilversum met oud leidingwerk",
      "Bewoners van flatgebouwen en appartementen met sanitairproblemen",
      "VvE-besturen met gedeeld leidingwerk of collectieve sanitairinstallaties",
      "Particulieren die hun badkamer willen renoveren of uitbreiden",
      "Bewoners met acute lekkage die snel hulp nodig hebben",
    ],
    faq: [
      {
        q: "Werkt SMIT ook voor VvE's en appartementencomplexen in Hilversum?",
        a: "Ja. We hebben ervaring met VvE-opdrachten en begrijpen de specifieke communicatie die daarvoor nodig is.",
      },
      {
        q: "Mijn woning in Hilversum is van vóór 1940 en heeft oud leidingwerk. Kunnen jullie dat beoordelen?",
        a: "Absoluut. We zijn bekend met loodwerk, gietijzer en vroeg koper. We beoordelen de staat eerlijk en adviseren over vervanging of reparatie.",
      },
      {
        q: "Hoe snel bent u bij een lekkage in Hilversum?",
        a: "Hilversum is voor ons goed bereikbaar vanuit Kortenhoef. Bij spoed proberen we er dezelfde dag te zijn.",
      },
      {
        q: "Kan SMIT ook de aansluiting op het gemeentelijk riool verzorgen?",
        a: "Voor directe aansluiting op het gemeentelijk riool is een vergunning nodig. We adviseren u over de procedure en kunnen het installatietechnische deel voor uw rekening nemen.",
      },
    ],
    ctaHeading: "Plan een afspraak met uw loodgieter in Hilversum.",
    ctaBody:
      "Vrijblijvend advies of direct een offerte aanvragen? Bel Kevin of stuur een bericht. We reageren snel.",
    internalLinks: [
      { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
      { href: "/cv-installatie/hilversum", label: "CV-installatie Hilversum" },
      { href: "/werkgebied/hilversum", label: "Alle diensten in Hilversum" },
      { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
      { href: "/sanitair/naarden", label: "Loodgieter Naarden" },
      { href: "/offerte/sanitair", label: "Offerte sanitair aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CV-INSTALLATIE / KORTENHOEF
  // ─────────────────────────────────────────────────────────────────
  "cv-installatie/kortenhoef": {
    metaTitle: "CV-installatie Kortenhoef | SMIT Installatie Techniek – Uw lokale cv-monteur",
    metaDescription:
      "CV-ketel installeren of repareren in Kortenhoef? Kevin Smit is uw lokale cv-monteur. Snel ter plaatse, eerlijk advies, vaste prijs. Bel 06-29528454.",
    h1: "CV-installatie in Kortenhoef",
    lead: "Als uw verwarming het laat afweten in de winter, wilt u één ding: iemand die snel komt en het goed oplost. Kevin woont in Kortenhoef — hij is er snel.",
    intro:
      "Veel woningen in Kortenhoef hebben een cv-ketel die al 10 tot 15 jaar meedraait. Dat is op zich geen probleem, mits de ketel goed onderhouden is. Maar veel bewoners vergeten het jaarlijkse onderhoud, rijden de garantie voorbij en staan op een koude winterochtend met een storing die ze duur komt te staan. Kevin Smit is uw cv-monteur in Kortenhoef: hij adviseert eerlijk, repareert wat kan en vervangt wat moet.",
    sections: [
      {
        h2: "Storing aan uw cv-ketel in Kortenhoef: direct hulp",
        body: "Storingscodes zijn voor Kevin geen verrassing meer. Als lokale monteur kent hij de ketels die in Kortenhoef veel voorkomen — Vaillant, Intergas, Nefit en Remeha — en kan hij snel diagnosticeren. Vaak is een storing te verhelpen zonder dat meteen de hele ketel vervangen hoeft te worden. Kevin is eerlijk: als reparatie de betere keuze is, zegt hij dat. Als de ketel echt aan vervanging toe is, ook.",
      },
      {
        h2: "Nieuwe cv-ketel laten plaatsen in Kortenhoef",
        body: "Bent u toe aan een nieuwe CV-ketel? Kevin adviseert u over de beste keuze voor uw woning: een HR-ketel, een hybride systeem of een all-electric warmtepomp. Hij installeert het systeem vakkundig, zorgt voor alle gasdichte aansluitingen en legt de bediening duidelijk uit. Na installatie kunt u meteen aan de slag — Kevin verlaat pas als alles werkt en u weet hoe het systeem werkt.",
      },
      {
        h2: "Jaarlijks cv-onderhoud: veilig en efficiënt",
        body: "Een jaarlijkse servicebeurt is geen overbodige luxe — het is een noodzaak. Kevin voert een grondige onderhoudsbeurt uit: brander controleren, warmtewisselaar inspecteren, filterspoeling, CO-meting en gasdichtheidscontrole. Zo blijft uw ketel veilig, efficiënt en binnen de garantievoorwaarden van de fabrikant.",
      },
      {
        h2: "Vloerverwarming bij verbouwing: de slimme combinatie",
        body: "Bent u bezig met een verbouwing of uitbouw in Kortenhoef? Dan is dit het ideale moment om vloerverwarming aan te leggen. In combinatie met een moderne HR-ketel of hybride warmtepomp geeft vloerverwarming een comfortabel en energiezuinig resultaat. Kevin legt het systeem vakkundig aan, afgestemd op de rest van uw installatie, en regelt alles correct in voordat de vloer dicht gaat.",
      },
    ],
    situaties: [
      "Bewoners van Kortenhoef met een defecte of storing-gevende cv-ketel",
      "Eigenaren van woningen met een ketel ouder dan 10 jaar zonder recent onderhoud",
      "Mensen die willen overstappen op een efficiënter verwarmingssysteem",
      "Bewoners die vloerverwarming willen aanleggen bij een verbouwing",
    ],
    faq: [
      {
        q: "Mijn cv-ketel in Kortenhoef geeft een foutcode. Wat nu?",
        a: "Bel Kevin. Hij vraagt welke code het is en geeft al telefonisch een eerste inschatting. Daarna spreken we snel een afspraak af.",
      },
      {
        q: "Hoe lang gaat een cv-ketel gemiddeld mee?",
        a: "Met goed jaarlijks onderhoud gaan cv-ketels 15 tot 20 jaar mee. Zonder onderhoud loopt de levensduur vaak aanzienlijk terug.",
      },
      {
        q: "Voert SMIT ook het jaarlijkse onderhoud uit aan mijn ketel in Kortenhoef?",
        a: "Ja. We plannen de onderhoudsbeurt in op een moment dat u uitkomt en voeren een grondige servicebeurt uit.",
      },
      {
        q: "Is een hybride warmtepomp geschikt voor mijn woning in Kortenhoef?",
        a: "Dat hangt af van de isolatiegraad van uw woning en uw energieverbruik. Kevin adviseert eerlijk of een hybride systeem voor uw situatie rendabel is.",
      },
    ],
    ctaHeading: "CV-probleem in Kortenhoef? Bel Kevin direct.",
    ctaBody: "Uw lokale cv-monteur in Kortenhoef. Snel, eerlijk en vakkundig. Bel of stuur een WhatsApp.",
    internalLinks: [
      { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
      { href: "/gasinstallatie/kortenhoef", label: "Gasinstallatie Kortenhoef" },
      { href: "/werkgebied/kortenhoef", label: "Alle diensten in Kortenhoef" },
      { href: "/cv-installatie/hilversum", label: "CV-installatie Hilversum" },
      { href: "/offerte/cv-installatie", label: "Offerte CV-installatie aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // CV-INSTALLATIE / HILVERSUM
  // ─────────────────────────────────────────────────────────────────
  "cv-installatie/hilversum": {
    metaTitle: "CV-installatie Hilversum | SMIT Installatie Techniek – Gecertificeerde cv-monteur",
    metaDescription:
      "CV-ketel installeren, vervangen of repareren in Hilversum? SMIT Installatie Techniek — gecertificeerde cv-monteur voor heel Hilversum. Bel 06-29528454.",
    h1: "CV-installatie in Hilversum",
    lead: "Hilversum heeft veel uiteenlopende woningen — van villa's met een centrale stookruimte tot appartementen met een compacte combiketel. SMIT Installatie Techniek heeft voor elk type installatie de juiste kennis.",
    intro:
      "De verwarmingssituatie verschilt sterk per woningtype in Hilversum. In de oudere villa's en grotere woningen zijn soms nog staande ketels aanwezig of complexere verwarmingssystemen met meerdere zones. In naoorlogse rijtjeswoningen en appartementen zijn het juist de compacte combiketels die het moeten doen. Kevin kent die verscheidenheid en geeft u altijd een advies dat past bij uw specifieke situatie — niet een standaard verkooppraatje.",
    sections: [
      {
        h2: "CV-ketel vervangen in uw Hilversumse woning: welke keuze past bij u?",
        body: "De markt verandert snel. Een nieuwe HR-ketel, een hybride warmtepomp-ketel of een stap richting volledig elektrisch verwarmen — wat is slim voor uw woning in Hilversum? Kevin adviseert u zonder voorkeur voor een bepaald merk of type. Hij kijkt naar uw woning, uw isolatie en uw energieverbruik en geeft u een advies dat u écht verder helpt.",
      },
      {
        h2: "CV-ketel storing in Hilversum: snel diagnose en oplossing",
        body: "Een cv-ketel die uitvalt in de winter is een urgente situatie. We reageren snel op storingmeldingen in Hilversum. Kevin diagnosticeert het probleem, overlegt met u over de aanpak en repareert of vervangt — afhankelijk van wat verstandig is. Hij is eerlijk over kosten en geeft een offerte vóór hij aan de slag gaat.",
      },
      {
        h2: "Vloerverwarming in Hilversum: comfort en energiezuinigheid",
        body: "Vloerverwarming wordt in Hilversum steeds populairder, zowel in nieuwbouw als bij renovaties. Het systeem werkt het beste in combinatie met een warmtepomp of hybride ketel, die bij lage watertemperaturen het meest efficiënt zijn. We leggen vloerverwarmingssystemen aan en regelen ze correct in voor maximaal comfort en een lage energierekening.",
      },
      {
        h2: "CV-onderhoud: jaarlijkse servicebeurt in Hilversum",
        body: "Jaarlijks onderhoud is de verstandigste investering die u in uw cv-installatie kunt doen. Een onderhoudsbeurt duurt gemiddeld een uur en geeft u zekerheid over veiligheid, efficiëntie en garantie. We plannen de afspraak in wanneer het u uitkomt — ook in Hilversum.",
      },
    ],
    situaties: [
      "Eigenaren van villa's en grotere woningen in Hilversum met complexere verwarmingssystemen",
      "Bewoners van appartementen met een verouderde combiketel",
      "Mensen die willen overstappen naar een hybride warmtepomp of efficiëntere installatie",
      "VvE's met collectieve cv-installaties die onderhoud of renovatie behoeven",
      "Hilversumse woningeigenaren die vloerverwarming willen aanleggen",
    ],
    faq: [
      {
        q: "Werkt SMIT ook voor VvE's met een collectieve cv-installatie in Hilversum?",
        a: "Ja. Collectieve installaties vragen extra afstemming. We werken voor VvE-besturen en zorgen voor helder overleg en correcte uitvoering.",
      },
      {
        q: "Mijn villa in Hilversum heeft nog een staande ketel. Is die te vervangen?",
        a: "Ja. Vervanging van een staande ketel door een moderne HR-ketel of warmtepomp is vrijwel altijd mogelijk. We beoordelen de situatie en geven u een heldere offerte.",
      },
      {
        q: "Is een warmtepomp ook zinvol voor oudere woningen in Hilversum?",
        a: "Dat hangt sterk af van de isolatiegraad. Een hybride systeem (warmtepomp + HR-ketel) is voor veel oudere woningen een goede tussenstap. Kevin adviseert eerlijk.",
      },
      {
        q: "Hoe snel bent u bij een cv-storing in Hilversum?",
        a: "Hilversum is goed bereikbaar vanuit Kortenhoef. Bij spoed proberen we dezelfde dag te komen.",
      },
    ],
    ctaHeading: "Vrijblijvend advies over uw cv-installatie in Hilversum?",
    ctaBody:
      "Bel Kevin of vraag een offerte aan. Hij geeft u eerlijk advies over de beste oplossing voor uw woning.",
    internalLinks: [
      { href: "/dakwerk/hilversum", label: "Dakdekker Hilversum" },
      { href: "/sanitair/hilversum", label: "Loodgieter Hilversum" },
      { href: "/gasinstallatie/hilversum", label: "Gasinstallatie Hilversum" },
      { href: "/werkgebied/hilversum", label: "Alle diensten in Hilversum" },
      { href: "/cv-installatie/kortenhoef", label: "CV-installatie Kortenhoef" },
      { href: "/offerte/cv-installatie", label: "Offerte CV-installatie aanvragen" },
    ],
  },
  // ─────────────────────────────────────────────────────────────────
  // ZINKWERK / KORTENHOEF
  // ─────────────────────────────────────────────────────────────────
  "zinkwerk/kortenhoef": {
    metaTitle: "Zinkwerk Kortenhoef | SMIT Installatie Techniek – Lokale zinkspecialist",
    metaDescription:
      "Zinkwerk in Kortenhoef? SMIT verzorgt dakgoten, kilgoten, zinken dakranden en hemelwaterafvoer. Kevin woont hier — snel ter plaatse. Bel 06-29528454.",
    h1: "Zinkwerk in Kortenhoef",
    lead: "Goed zinkwerk is onzichtbaar als het klopt — en duidelijk zichtbaar als het niet klopt. Kevin Smit is de zinkspecialist in Kortenhoef die het in één keer goed doet.",
    intro:
      "De woningen in Kortenhoef hebben overwegend hellende pannendaken met zinken goten en afvoeren, en platte uitbouwen met zinken dakranden en kilgoten. Na verloop van tijd slijten deze onderdelen, raken ze verstopt of gaan ze lekken bij aansluitingen en uitlopen. Kevin Smit herstelt en vervangt zinkwerk in Kortenhoef — snel, strak en duurzaam. Hij kent de woningen in het dorp goed en weet welke detailoplossingen hier het beste werken.",
    sections: [
      {
        h2: "Dakgoten in Kortenhoef: reinigen, repareren of vervangen",
        body: "Verstopte of beschadigde dakgoten zijn in Kortenhoef een veelvoorkomend probleem. De bomen langs de Kortenhoefse wegen en in de tuinen laten bladeren en zaad in de goten vallen. Jaarlijkse reiniging voorkomt erger. Maar als de goot zelf schade heeft — roest, scheuren of loszittende beugels — dan is reinigen niet genoeg. We inspecteren de toestand van uw goten en adviseren eerlijk over reparatie of vervanging. Aluminium en zink zijn beide mogelijk; we raden aan wat het beste past bij uw woning.",
      },
      {
        h2: "Kilgoten en zinken dakranden op uitbouwen",
        body: "De meeste uitbouwen in Kortenhoef hebben een kilgoot aan de achterzijde waar het platte dak aansluit op de gevel. Dit is een van de meest gevoelige punten voor lekkage: de overgang tussen dak en muur, de afdichting rondom de afvoer en het afschot naar het putje. Kevin werkt dit soort details nauwkeurig af. Hij gebruikt duurzame materialen en geeft garantie op het werk.",
      },
      {
        h2: "Zinken dakdoorvoeren en aansluitingen",
        body: "Dakdoorvoeren voor ventilatie, schoorstenen en rookgasafvoeren zijn kwetsbare punten in het dakdichting. Een slechte aansluiting zorgt voor lekkage die binnenshuis pas zichtbaar wordt als er al schade is. Kevin controleert alle aansluitingen, past loodflappen correct aan en zorgt voor een waterdichte dakdoorvoer die ook bij extreme regen zijn werk doet.",
      },
      {
        h2: "Zinkwerk combineren met dakwerk: één klus, één vakman",
        body: "Zinkwerk en dakwerk zijn onlosmakelijk met elkaar verbonden. Een nieuwe dakbedekking zonder goed zinkwerk is een halve maatregel. En omgekeerd: nieuwe goten op een verouderd dak lost het echte probleem niet op. Kevin bekijkt de totale situatie en geeft u een compleet advies. Zo voorkomt u dat u twee keer betaalt voor één probleem.",
      },
    ],
    situaties: [
      "Bewoners van Kortenhoef met een lekkende kilgoot of dakrand op de uitbouw",
      "Eigenaren met verstopte of beschadigde dakgoten die regelmatig overlopen",
      "Woningeigenaren die hun zinkwerk willen vervangen bij een dakrenovatie",
      "Mensen met lekkage rondom een dakdoorvoer of schoorsteen",
      "Eigenaren die zinkwerk en dakwerk in één klus willen laten aanpakken",
    ],
    faq: [
      {
        q: "Wat is het verschil tussen zinken en aluminium goten?",
        a: "Zink heeft een natuurlijkere uitstraling en patineert met de jaren. Aluminium is lichtgewicht, roestvrij en goedkoper in aanschaf. Kevin adviseert u op basis van uw woning en budget.",
      },
      {
        q: "Mijn kilgoot op de uitbouw lekt al jaren. Is dat te repareren?",
        a: "Dat hangt af van de schade. Kleine problemen bij aansluitingen zijn vaak te repareren. Is de kilgoot zelf te ver heen, dan is vervanging verstandiger. Kevin beoordeelt het ter plaatse.",
      },
      {
        q: "Hoe vaak moeten dakgoten worden gereinigd in Kortenhoef?",
        a: "In een groene omgeving zoals Kortenhoef is één keer per jaar reinigen een minimum. Heeft u veel bomen in de buurt, dan is twee keer per jaar verstandiger.",
      },
      {
        q: "Kunnen jullie ook de hemelwaterafvoer van mijn woning vervangen?",
        a: "Ja. Van de goot via de hemelwaterafvoer tot de uitloop bij de fundering — we vervangen en repareren het hele traject als dat nodig is.",
      },
      {
        q: "Combineert SMIT zinkwerk met een dakrenovatie?",
        a: "Absoluut. Wij plannen dit standaard samen als beide werkzaamheden nodig zijn. Dat scheelt u tijd, planningsgedoe en kosten.",
      },
    ],
    ctaHeading: "Zinkwerk laten herstellen of vervangen in Kortenhoef?",
    ctaBody:
      "Kevin Smit woont en werkt in Kortenhoef. Bel hem direct voor een vrijblijvende beoordeling van uw goten, kilgoten of zinkdetails. Snel, eerlijk en vakkundig afgewerkt.",
    internalLinks: [
      { href: "/dakwerk/kortenhoef", label: "Dakdekker Kortenhoef" },
      { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
      { href: "/gasinstallatie/kortenhoef", label: "Gasinstallatie Kortenhoef" },
      { href: "/werkgebied/kortenhoef", label: "Alle diensten in Kortenhoef" },
      { href: "/zinkwerk/hilversum", label: "Zinkwerk Hilversum" },
      { href: "/offerte/zinkwerk", label: "Offerte zinkwerk aanvragen" },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // GASINSTALLATIE / KORTENHOEF
  // ─────────────────────────────────────────────────────────────────
  "gasinstallatie/kortenhoef": {
    metaTitle: "Gasinstallateur Kortenhoef | SMIT Installatie Techniek – Gecertificeerd en lokaal",
    metaDescription:
      "Gasinstallateur in Kortenhoef? Kevin Smit is gecertificeerd en woont hier. Gasleidingen, gastoestellen aansluiten en veiligheidscontroles. Bel 06-29528454.",
    h1: "Gasinstallatie in Kortenhoef",
    lead: "Gas is geen klusje om zelf te doen of aan de goedkoopste aanbieder over te laten. Kevin Smit is gecertificeerd gasinstallateur — en hij woont gewoon in Kortenhoef.",
    intro:
      "De woningen in Kortenhoef zijn grotendeels gebouwd in de jaren '60 tot '80, in een tijd dat gas de standaard energiebron was. De gasleidingen en -toestellen in deze woningen zijn dus ook van die generatie. Sommige installaties zijn prima onderhouden, andere zijn toe aan vervanging of uitbreiding. Als gecertificeerd gasinstallateur legt Kevin nieuwe gasleidingen aan, sluit gastoestellen vakkundig aan en voert veiligheidscontroles uit die echt iets betekenen — geen stempel zetten, maar daadwerkelijk controleren.",
    sections: [
      {
        h2: "Gasleiding aanleggen voor cv-ketel, gasfornuis of buitengrill",
        body: "Wilt u een nieuwe cv-ketel laten plaatsen, een gasfornuis aansluiten of een buitenaansluiting voor uw barbecue? Dan heeft u een gecertificeerde gasinstallateur nodig die een officiële aansluiting mag aanleggen en in gebruik stellen. Kevin legt de leiding vakkundig aan, zorgt voor de juiste druk, controleert op dichtheid en levert het werk op conform de geldende normen (NEN 1078). Alles op papier, zodat u ook bij verzekering en verkoop kunt aantonen dat het werk correct is uitgevoerd.",
      },
      {
        h2: "Gastoestellen aansluiten in uw Kortenhoefse woning",
        body: "Een nieuw gasfornuis, een gaskachel of een nieuwe cv-ketel aansluiten is wettelijk voorbehouden aan een gecertificeerde installateur. Kevin sluit het toestel aan, controleert de trek en verbranding, test op lekkage en stelt het toestel correct af. U krijgt documentatie van de aansluiting mee — handig voor de garantie van het toestel en de verzekering van uw woning.",
      },
      {
        h2: "Gasveiligheidscontrole: weet hoe uw installatie erbij staat",
        body: "Weet u wanneer uw gasinstallatie voor het laatst is gekeurd? Veel bewoners van oudere woningen in Kortenhoef hebben dat nog nooit laten doen. Een gasveiligheidscontrole geeft u inzicht in de staat van leidingen, aansluitingen en toestellen. Kevin controleert op lekkage, veroudering en conformiteit en geeft u een helder rapport. Kleine gebreken herstelt hij direct — grotere problemen benoemt hij eerlijk.",
      },
      {
        h2: "Gasinstallatie bij verbouwing of uitbreiding in Kortenhoef",
        body: "Verbouwt u uw woning in Kortenhoef en wilt u een nieuwe keuken, badkamer of cv-opstelling? Dan is de kans groot dat de bestaande gasleiding aangepast of verlengd moet worden. Kevin denkt mee in de planning, legt de leiding netjes weg en zorgt dat alles compliant is voor oplevering. Zo voorkomt u dat de verbouwing wordt stilgelegd of dat u bij de verkoop van uw woning een probleem heeft.",
      },
    ],
    situaties: [
      "Bewoners van Kortenhoef die een nieuw gastoestel willen laten aansluiten",
      "Eigenaren van woningen met een verouderde gasinstallatie die keuring wensen",
      "Woningeigenaren die bij een verbouwing een gasleiding willen aanpassen of uitbreiden",
      "Mensen die een buitengas-aansluiting willen voor een terras of buitenkeuken",
      "Verkopers van woningen die documentatie willen over hun gasinstallatie",
    ],
    faq: [
      {
        q: "Mag ik zelf een gasleiding aanleggen of een gastoestel aansluiten?",
        a: "Nee. Gaswerk is wettelijk voorbehouden aan gecertificeerde installateurs. Kevin is gecertificeerd en mag dit werk officieel uitvoeren en documenteren.",
      },
      {
        q: "Wat houdt een gasveiligheidscontrole precies in?",
        a: "Kevin controleert de staat van alle gasleidingen en aansluitingen, test op lekkage met drukmeting, inspecteert de gastoestellen op goede verbranding en geeft u een schriftelijk rapport van zijn bevindingen.",
      },
      {
        q: "Hoe snel kunt u een gastoestel aansluiten in Kortenhoef?",
        a: "Omdat Kevin lokaal is, kunnen we relatief snel een afspraak inplannen. Bel hem om de beschikbaarheid te bespreken — spoedgevallen krijgen voorrang.",
      },
      {
        q: "Ik ruik gas in mijn woning. Wat moet ik doen?",
        a: "Gas ruiken is een noodsituatie. Verlaat direct het gebouw, bel 112 en daarna het gasnoodlijn van Liander: 0800-9009. Bel Kevin pas nadat de acute situatie is opgelost — hij helpt u daarna de oorzaak te achterhalen en te herstellen.",
      },
      {
        q: "Heb ik een certificaat nodig bij verkoop van mijn woning voor de gasinstallatie?",
        a: "Er is geen wettelijke keuringsplicht bij verkoop, maar een keuringsrapport geeft kopers vertrouwen en voorkomt discussies achteraf. We stellen graag een rapport op.",
      },
    ],
    ctaHeading: "Gasinstallatie in Kortenhoef laten controleren of aanleggen?",
    ctaBody:
      "Kevin Smit is gecertificeerd gasinstallateur en woont in Kortenhoef. Bel hem voor een vrijblijvend adviesgesprek of vraag direct een offerte aan. Veiligheid staat voorop.",
    internalLinks: [
      { href: "/cv-installatie/kortenhoef", label: "CV-installatie Kortenhoef" },
      { href: "/sanitair/kortenhoef", label: "Loodgieter Kortenhoef" },
      { href: "/zinkwerk/kortenhoef", label: "Zinkwerk Kortenhoef" },
      { href: "/werkgebied/kortenhoef", label: "Alle diensten in Kortenhoef" },
      { href: "/gasinstallatie/hilversum", label: "Gasinstallatie Hilversum" },
      { href: "/offerte/gasinstallatie", label: "Offerte gasinstallatie aanvragen" },
    ],
  },
};

export function getComboContent(dienst: string, plaats: string): ComboContent | undefined {
  return content[`${dienst}/${plaats}`];
}
