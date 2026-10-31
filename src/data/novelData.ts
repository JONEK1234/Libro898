import { BookPageData, ChapterInfo } from '../types/book';
import coverImageFile from '../assets/images/book_cover_keeper_lost_days_1793460483407.jpg';

export const BOOK_METADATA = {
  title: "Il Custode dei Giorni Perduti",
  subtitle: "Cronache dell'orologio invisibile",
  author: "Elia Morosini",
  edition: "Edizione Integrale d'Autore",
  year: "1582 / 2026",
  coverImage: coverImageFile || '/images/book_cover.jpg',
  totalRealPages: 50,
  language: "Italiano",
  genre: "Romanzo Letterario / Mistero Filosofico",
  blurb: "Nel 1582 dieci giorni sparirono per sempre dal calendario umano per volere papale. Nessuno nacque, nessuno morì. Ma dove finisce il tempo che il mondo decide di dimenticare? Tra i canali di Venezia, un antico astrolabio d'ottone comincia di nuovo a scandire le ore impossibili.",
  dedication: "A chi sa ascoltare il silenzio tra un rintocco e il successivo, e a tutte le ore che abbiamo creduto di aver perduto.",
  epigraph: {
    quote: "Il tempo è un fiume che mi trascina, ma io sono il fiume; è una tigre che mi sbrana, ma io sono la tigre; è un fuoco che mi consuma, ma io sono il fuoco.",
    author: "Jorge Luis Borges"
  }
};

export const CHAPTERS_INFO: ChapterInfo[] = [
  {
    index: 0,
    title: "Capitolo I",
    subtitle: "L'Ingranaggio Senza Nome",
    startPage: 1,
    endPage: 5,
    synopsis: "Nella penombra della bottega di Murano, tra pendoli e lenti, Elia ritrova il cassone di noce appartenuto al nonno orologiaio."
  },
  {
    index: 1,
    title: "Capitolo II",
    subtitle: "L'Ottobre Rubato",
    startPage: 6,
    endPage: 10,
    synopsis: "All'Archivio di Stato ai Frari, Nora rintraccia la bolla segreta del 1582 e la cronaca di chi vide fermarsi il sole."
  },
  {
    index: 2,
    title: "Capitolo III",
    subtitle: "L'Isola dei Silenzi",
    startPage: 11,
    endPage: 15,
    synopsis: "Una remata notturna nella nebbia verso San Giorgio in Alga conduce alla cripta sommersa dall'acqua salmastra."
  },
  {
    index: 3,
    title: "Capitolo IV",
    subtitle: "La Voce del Rame",
    startPage: 16,
    endPage: 20,
    synopsis: "Lo smontaggio degli ingranaggi rivela una risonanza viva: ogni perno d'ottone canta una memoria dimenticata della città."
  },
  {
    index: 4,
    title: "Capitolo V",
    subtitle: "I Cartografi del Buio",
    startPage: 21,
    endPage: 25,
    synopsis: "Una lente di quarzo affumicato rivela la presenza simultanea delle epoche sovrapposte lungo i canali veneziani."
  },
  {
    index: 5,
    title: "Capitolo VI",
    subtitle: "Il Peso delle Ore",
    startPage: 26,
    endPage: 30,
    synopsis: "In un caffè battuto dallo scirocco, Elia e Nora affrontano la vertigine dei rimpianti personali e il senso del limite."
  },
  {
    index: 6,
    title: "Capitolo VII",
    subtitle: "La Porta Sommersa",
    startPage: 31,
    endPage: 35,
    synopsis: "La marea astronomica raggiunge il picco, aprendo la fenditura che conduce all'officina segreta di Giovanni Dondi."
  },
  {
    index: 7,
    title: "Capitolo VIII",
    subtitle: "Il Giorno Che Non Ci Fu",
    startPage: 36,
    endPage: 40,
    synopsis: "L'innesto dei rubini arresta il flusso del mondo esterno: le gocce d'acqua rimangono perle sospese nell'aria immobile."
  },
  {
    index: 8,
    title: "Capitolo IX",
    subtitle: "La Scelta di Elia",
    startPage: 41,
    endPage: 45,
    synopsis: "La tentazione dell'eterno presente si scontra con la consapevolezza che la bellezza risiede solo nelle cose che finiscono."
  },
  {
    index: 9,
    title: "Capitolo X",
    subtitle: "La Riva del Mattino",
    startPage: 46,
    endPage: 50,
    synopsis: "Il risveglio del moto celeste: il ritorno del suono delle onde e la luce calda dell'alba sul bacino di San Marco."
  }
];

export const NOVEL_PAGES: BookPageData[] = [
  // --- CAPITOLO I: L'INGRANAGGIO SENZA NOME (Pagine 1 - 5) ---
  {
    id: 1,
    chapterIndex: 0,
    chapterTitle: "Capitolo I",
    chapterSubtitle: "L'Ingranaggio Senza Nome",
    pageInChapter: 1,
    epigraph: {
      text: "Chi tocca un orologio antico non tocca il metallo, ma l'impronta di tutti gli sguardi che lo hanno interrogato.",
      author: "Manoscritto anonimo, Murano 1604"
    },
    paragraphs: [
      "A Venezia le ore non passano mai in linea retta. Chi cresce sull'acqua impara presto che il tempo è un'onda lenta: batte contro le pietre d'Istria, si ritira per una frazione di secondo e poi ritorna carica di salsedine, di alghe e di cose credute perdute.",
      "La bottega di mio nonno, affacciata sul canale dei Vetrai a Murano, odorava di cera d'api, petrolio bianco e ottone scaldato. Dalle finestre alte la luce d'autunno tagliava la polvere dorata tra gli scaffali di noce, pieni zeppi di pendole sventrate e vecchi quadranti smaltati.",
      "Martino se n'era andato da tre mesi, lasciandomi una foresta di chiavi numerate e un cassone di ferro battuto che non avevo ancora avuto il coraggio di toccare. Quella sera la pioggia bussava ai vetri con un ritmo fitto, quasi a chiamarmi. Presi la chiave a croce e feci scattare la prima toppa."
    ]
  },
  {
    id: 2,
    chapterIndex: 0,
    chapterTitle: "Capitolo I",
    chapterSubtitle: "L'Ingranaggio Senza Nome",
    pageInChapter: 2,
    paragraphs: [
      "Il pesante coperchio si sollevò con un cigolio cupo. Sotto strati di lana grezza impermeabilizzata al grasso di foca, riposava un disco di bronzo scuro, avvolto in un drappo di seta turchina costellato di ricami d'argento.",
      "Quando lo liberai dalla stoffa, la fiamma della lampada a olio vi rimbalzò dentro come una stella caduta in una pozza d'acqua scura. Era un astrolabio piano, pesante e maestoso, cesellato lungo il bordo con una ghirlanda finissima di gigli e nodi marinari.",
      "Ma fu la corona dei mesi a togliermi il fiato. Sulla ghiera d'argento, tra il 4 e il 15 ottobre dell'anno 1582, lo spazio non era vuoto: era scandito da cinquanta denti minuscoli, ciascuno inciso con un glifo sconosciuto, levigato con la grazia di un cesello fiammingo."
    ]
  },
  {
    id: 3,
    chapterIndex: 0,
    chapterTitle: "Capitolo I",
    chapterSubtitle: "L'Ingranaggio Senza Nome",
    pageInChapter: 3,
    paragraphs: [
      "Sfiorai l'alidada con la punta del pollice. Nessun attrito, nessun gioco: l'asse centrale, tornito a mano più di quattro secoli prima, ruotava con una docilità miracolosa, come se all'interno fosse ancora custodita una goccia d'olio incorruttibile.",
      "Raggiunto il venticinquesimo glifo, avvertii un debole scatto metallico nel dorso dello strumento. La piastra posteriore si sollevò di un soffio, aprendo un'intercapedine segreta da cui feci scivolare un foglio di pergamena sottile come l'ala di un insetto.",
      "«A colui che possiederà l'ora muta», recitava la grafia in latino volgare. «Papa Gregorio credette di cancellare dieci giorni per riallineare la Pasqua alle stelle. Ma il tempo non muore sotto un decreto umano: ciò che il mondo rifiutò di contare si raccolse come rugiada in questo vaso di rame. Qui dormono i cinquanta intervalli del silenzio»."
    ]
  },
  {
    id: 4,
    chapterIndex: 0,
    chapterTitle: "Capitolo I",
    chapterSubtitle: "L'Ingranaggio Senza Nome",
    pageInChapter: 4,
    paragraphs: [
      "Tre colpi secchi alla porta della bottega ruppero la quiete. Richiusi d'istinto la seta sull'astrolabio, con il cuore che rimbalzava contro le costole come il bilanciere di una sveglia impazzita.",
      "Sulla soglia, bagnata dalla pioggia e illuminata dal riverbero giallastro del lampione ad acetilene, c'era Nora. Stringeva al petto una cartella di cuoio scuro, gonfia di fogli d'archivio e lenti d'ingrandimento.",
      "Lavorava come paleografa all'Archivio di Stato ai Frari. Avevamo studiato insieme a Venezia prima che io mi rifugiassi nella penombra degli orologi e lei tra i labirinti dei manoscritti. «So cosa hai aperto, Elia», disse entrando senza fiato. «E so cosa c'è inciso su quel bronzo»."
    ]
  },
  {
    id: 5,
    chapterIndex: 0,
    chapterTitle: "Capitolo I",
    chapterSubtitle: "L'Ingranaggio Senza Nome",
    pageInChapter: 5,
    paragraphs: [
      "Nora si chinò sul tavolo da lavoro e avvicinò la lente d'ottone alla ghiera dei cinquanta denti. Nei suoi occhi castani si accese quel lampo d'inquietudine che conoscevo bene.",
      "«È la grafia di fra' Cristoforo da San Zaccaria», mormorò con un filo di voce. «L'astronomo che sparì nel nulla nel novembre del 1582. Tutti credevano fosse annegato in laguna. Invece si era nascosto qui, dove l'acqua isola ogni pensiero dal resto del mondo».",
      "Allungò un dito e sfiorò il primo dente della corona. In quel preciso istante, un sussurro argentino attraversò la stanza, come una corda d'arpa pizzicata nel buio. Fuori, le gocce di pioggia contro i vetri parvero rallentare, sospese per un battito di ciglia prima di toccare il davanzale."
    ]
  },

  // --- CAPITOLO II: L'OTTOBRE RUBATO (Pagine 6 - 10) ---
  {
    id: 6,
    chapterIndex: 1,
    chapterTitle: "Capitolo II",
    chapterSubtitle: "L'Ottobre Rubato",
    pageInChapter: 1,
    epigraph: {
      text: "Chi toglie dieci giorni a un popolo toglie dieci giorni di pane, di sogni e di baci.",
      author: "Diario di bordo di Girolamo Priuli, 1582"
    },
    paragraphs: [
      "La mattina dopo, una nebbia color latte saliva dai canali, avvolgendo i ponti e smorzando ogni rumore. Ci rifugiammo all'Archivio di Stato, dove i corridoi infiniti profumano di colla animale, polvere secolare e carta di stracci pressata.",
      "Nora aprì sul grande leggio di noce un faldone legato con fettucce di canapa scolorita: *Atti del Consiglio dei Dieci, Autunno 1582*. Le pagine scricchiolavano sotto le dita con la fragilità delle foglie secche.",
      "«Guarda la data ufficiale», indicò Nora a mezza voce. «Giovedì 4 ottobre. Poi, la riga successiva salta a venerdì 15 ottobre. Dieci giorni spazzati via con un tratto di penna. Ma guarda la nota in inchiostro di noce vergata sul margine inferiore dal cancelliere segreto»."
    ]
  },
  {
    id: 7,
    chapterIndex: 1,
    chapterTitle: "Capitolo II",
    chapterSubtitle: "L'Ottobre Rubato",
    pageInChapter: 2,
    paragraphs: [
      "La nota recitava: *Hic deficit ordo saeculi. Post hanc noctem non lux sed vacuum regnabit* — Qui si spezza l'ordine dei secoli. Dopo questa notte non regnerà la luce, ma il vuoto.",
      "Più avanti trovammo la deposizione giurata di un mercante di lana fiammingo che alloggiava al Fondaco dei Tedeschi. L'uomo scriveva che quella notte del 4 ottobre non era durata poche ore: era durata quanto cinquanta albe interiori.",
      "«Descrive un varco che la Chiesa tentò in ogni modo di cancellare», spiegò Nora voltando la pergamena. «Chi si trovava in particolari punti della laguna, dove l'acqua dolce dei fiumi incontra la marea del mare aperto, rimase impigliato nella piega del tempo. Non arrivò mai al 15 ottobre»."
    ]
  },
  {
    id: 8,
    chapterIndex: 1,
    chapterTitle: "Capitolo II",
    chapterSubtitle: "L'Ottobre Rubato",
    pageInChapter: 3,
    paragraphs: [
      "Dalla sua cartella Nora estrasse la copia di una lettera riservata di papa Gregorio XIII, indirizzata al cardinale Sirleto e custodita per secoli sotto stretto sigillo.",
      "Il Pontefice vi confidava un terrore che non comparve mai nei documenti pubblici: «Abbiamo corretto l'equinozio, ma i nostri computisti tacciono sulla materia di cui erano fatte quelle dieci notti. Temo che quel tempo esiliato si sia raccolto oltre il nostro sguardo, pronto a reclamare chiunque osi risvegliarlo».",
      "Guardai fuori dalla finestra verso il campanile dei Frari, sommerso dal grigio dell'autunno. Il Papa sapeva che cancellare i giorni sulla carta non significava affatto averli distrutti nella realtà delle anime."
    ]
  },
  {
    id: 9,
    chapterIndex: 1,
    chapterTitle: "Capitolo II",
    chapterSubtitle: "L'Ottobre Rubato",
    pageInChapter: 4,
    paragraphs: [
      "In fondo alla filza dei documenti era cucita una pianta acquerellata su pergamena di capretto. Mostrava la laguna di Venezia vista dall'alto, ma orientata con il mare verso il basso e circondata da cinquanta punti dorati disposti a cerchio.",
      "Ogni punto corrispondeva a un'isola minore o a un dosso di barena dimenticato: San Secondo, San Giacomo in Paludo, La Grazia, San Giorgio in Alga.",
      "«Mio nonno non cercava un semplice orologio da collezione», mormorai a fior di labbra. «Cercava un orientamento celeste riflesso sull'acqua. L'astrolabio serve a tracciare la rotta quando la corrente del tempo smette di scorrere verso il domani»."
    ]
  },
  {
    id: 10,
    chapterIndex: 1,
    chapterTitle: "Capitolo II",
    chapterSubtitle: "L'Ottobre Rubato",
    pageInChapter: 5,
    paragraphs: [
      "Mentre piegavamo con cura la mappa, un rumore sordo ruppe il silenzio della navata dei manoscritti. Nel fondo del corridoio, dietro la grata di ferro che delimitava il deposito antico, un'ombra alta si mosse rapida.",
      "Non era uno studioso né un custode. L'uomo portava un lungo cappotto scuro di panno pesante e stringeva al fianco una custodia sagomata identica a quella del nostro astrolabio.",
      "«Andiamo, adesso», sussurrò Nora afferrandomi per la manica. Uscimmo dalla porta laterale sul chiostro, scomparendo nella nebbia di Calle della Passion prima che quell'ombra potesse raggiungerci. Non eravamo i soli a sapere che il tempo rubato stava per risvegliarsi."
    ]
  },

  // --- CAPITOLO III: L'ISOLA DEI SILENZI (Pagine 11 - 15) ---
  {
    id: 11,
    chapterIndex: 2,
    chapterTitle: "Capitolo III",
    chapterSubtitle: "L'Isola dei Silenzi",
    pageInChapter: 1,
    epigraph: {
      text: "Le isole della laguna sono navi di pietra ancorate nel fango; basta sciogliere un nodo per salpare verso ieri.",
      author: "Diego Valier, Memorie d'Acqua, 1712"
    },
    paragraphs: [
      "Aspettammo che la notte scendesse completa, quando i motori dei vaporetti si spengono e la laguna torna a essere una distesa d'inchiostro nero guidata solo dalle luci rosse e verdi delle briccole.",
      "Alla Sacca della Misericordia noleggiammo un vecchio sandolo di legno con un unico remo a forcola. Nessun ronzio di fuoribordo: vogavo in piedi a poppa alla veneziana, sentendo la resistenza elastica dell'acqua viva contro la pala di faggio.",
      "Nora sedeva a prua con l'astrolabio sulle ginocchia, protetto da una cerata cerchiata di cuoio. Davanti a noi non c'era che il buio dell'orizzonte e, a mezz'ora di voga costante, il profilo diruto di San Giorgio in Alga."
    ]
  },
  {
    id: 12,
    chapterIndex: 2,
    chapterTitle: "Capitolo III",
    chapterSubtitle: "L'Isola dei Silenzi",
    pageInChapter: 2,
    paragraphs: [
      "La prua del sandolo scivolò sulla melma della riva con un respiro d'alghe. Ormeggiai la fune a un palo di rovere consumato dai marosi e poggiammo i piedi sulla terraferma dell'isola abbandonata.",
      "San Giorgio in Alga era stata convento carmelitano, polveriera militare e infine un nido di ruderi coperti da rovi di sambuco e fichi selvatici. L'aria profumava di mirto e di pietra lavata dalla pioggia.",
      "Tra le erbacce dell'antico chiostro trovammo la vera da pozzo in pietra d'Istria ottagonale. Sulle sue facce logorate dalle gomene dei frati spiccava la stessa incisione della ghiera: una stella a cinque punte intrecciata a un cerchio graduato."
    ]
  },
  {
    id: 13,
    chapterIndex: 2,
    chapterTitle: "Capitolo III",
    chapterSubtitle: "L'Isola dei Silenzi",
    pageInChapter: 3,
    paragraphs: [
      "Dietro l'abside diroccata della chiesa, una scalinata di pietra scendeva nel ventre dell'isola. I primi tre gradini erano coperti da un palmo d'acqua salmastra, trasparente e fredda come ghiaccio d'inverno.",
      "Ci togliemmo gli stivali e scendemmo a piedi nudi. Il gelo ci morse le caviglie, ma la vista della cripta cancellò ogni esitazione: quattro colonne di marmo greco reggevano una volta intatta, con un pavimento a mosaico che disegnava le fasi della luna attorno a una figura alata.",
      "Sulla parete di fondo tre orologi solari sovrapposti dominavano una cavità quadrata, scavata nel calcare con le dimensioni esatte della piastra di supporto del nostro strumento d'ottone."
    ]
  },
  {
    id: 14,
    chapterIndex: 2,
    chapterTitle: "Capitolo III",
    chapterSubtitle: "L'Isola dei Silenzi",
    pageInChapter: 4,
    paragraphs: [
      "«È l'alloggiamento del bilanciere», sussurrò Nora, puntando la torcia. Accostai l'astrolabio alla nicchia: una forza magnetica potente attirò il metallo contro la pietra con un colpo sordo e netto.",
      "Dall'interno della muratura salì il suono di contrappesi in movimento, addormentati da quattrocento anni. Un blocco d'altare scivolò dolcemente all'indietro, rivelando una scatola di piombo sigillata con ceralacca cremisi.",
      "Dentro riposava una chiave a pendolo d'argento cesellata a forma di ancora rovesciata, insieme a un taccuino di pergamena intitolato: *Tabulae motus temporis secreti* — Le tavole del moto del tempo segreto."
    ]
  },
  {
    id: 15,
    chapterIndex: 2,
    chapterTitle: "Capitolo III",
    chapterSubtitle: "L'Isola dei Silenzi",
    pageInChapter: 5,
    paragraphs: [
      "Sull'arco superiore della cripta la luce della lampada svelò un'iscrizione incisa nel piombo: *Tempus non labitur sed expectat eundem qui audiat* — Il tempo non scorre, ma attende chi sappia ascoltarlo.",
      "Nora lesse quelle parole con voce rotta dalla commozione. C'era in quella frase tutta l'anima di Venezia: una città strappata al fango che rifiuta di arrendersi alla corrente che porta via ogni cosa.",
      "«Torniamo a Murano prima che faccia giorno», disse stringendosi al mio braccio. «Ora abbiamo le formule per decifrare tutte le cinquanta tacche. Ma promettimi che se scopriremo come fermare il tempo, lo faremo solo per comprenderlo, mai per trattenerlo»."
    ]
  },

  // --- CAPITOLO IV: LA VOCE DEL RAME (Pagine 16 - 20) ---
  {
    id: 16,
    chapterIndex: 3,
    chapterTitle: "Capitolo IV",
    chapterSubtitle: "La Voce del Rame",
    pageInChapter: 1,
    epigraph: {
      text: "Un orologio non è una gabbia per i secondi, ma un liuto le cui corde sono ruote d'acciaio.",
      author: "Bernardo Facini, Orologiaro di Rialto, 1725"
    },
    paragraphs: [
      "Rientrati alla bottega prima che i forni del vetro accendessero i loro bagliori azzurri, sprangammo la porta e tirammo le tende di velluto bordeaux per non tradire alcuna luce verso l'esterno.",
      "Stesi sul bancone il panno verde di feltro, le pinzette a becco piatto e i minuscoli cacciaviti d'osso. Smontare un meccanismo antico è come celebrare una messa solenne: ogni vite porta l'impronta di un uomo diventato polvere.",
      "Sollevato il timpano centrale con i reticoli delle stelle, apparve il treno degli ingranaggi segreti. Non ruote rotonde ordinarie, ma spirali d'ottone e rame modellate come le conchiglie fossili dei nostri fondali."
    ]
  },
  {
    id: 17,
    chapterIndex: 3,
    chapterTitle: "Capitolo IV",
    chapterSubtitle: "La Voce del Rame",
    pageInChapter: 2,
    paragraphs: [
      "Nora sedeva accanto a me con le tavole di San Giorgio aperte, confrontando i calcoli geometrici cinquecenteschi con le formule matematiche moderne.",
      "«È incredibile», alzò lo sguardo sbalordita. «Fra' Cristoforo non misurava il moto del sole. Calcolava lo scarto invisibile tra la rotazione della terra e la percezione del cuore umano».",
      "«Cioè?», chiesi mentre controllavo con la lente un piccolo pignone a sei ali d'acciaio. «Cioè ogni giorno non dura ventiquattr'ore esatte. Ci sono millesimi di secondo che gli orologi perdono per strada. Quei cinquanta giorni cancellati nel 1582 sono la riserva d'oro di tutto il tempo non consumato»."
    ]
  },
  {
    id: 18,
    chapterIndex: 3,
    chapterTitle: "Capitolo IV",
    chapterSubtitle: "La Voce del Rame",
    pageInChapter: 3,
    paragraphs: [
      "Mentre immergevo la terza ruota dentata nella ciotolina d'alcool per pulirla, il metallo emise una vibrazione purissima, simile al tocco di un calice di cristallo.",
      "In quell'istante la bottega parve allargarsi a dismisura. Fui invaso da ricordi mai vissuti: vidi la facciata di San Marco dorata come nel Quattrocento, sentii le grida dei pescatori sul molo prima che bruciasse Rialto, respirai il fumo di pece dei calafati dell'Arsenale.",
      "Anche Nora era immobile, con gli occhi spalancati sul vuoto e il labbro che le tremava: «Hai visto anche tu? Ho visto mia nonna bambina correre su una riva che oggi non esiste più... Come può un pezzo d'ottone trattenere ciò che è già passato?»"
    ]
  },
  {
    id: 19,
    chapterIndex: 3,
    chapterTitle: "Capitolo IV",
    chapterSubtitle: "La Voce del Rame",
    pageInChapter: 4,
    paragraphs: [
      "Rimasi sospeso con le pinzette tra le dita. Il mio mestiere era sempre stato restituire il battito a ciò che era fermo, riparare le molle e oliare i perni stanchi.",
      "Ma quello strumento non era una macchina da misurazione: era una breccia aperta verso l'infinito. Rimontarlo significava dare voce a un fiume trattenuto da quattro secoli di silenzio.",
      "Nora andò alla finestra e scostò un lembo di velluto. Fuori passavano i primi vaporetti carichi di persone assonnate, operai con le borse di tela e sguardi fissi sugli schermi dei telefoni. «Tutti corrono, Elia», mormorò piano. «Corrono verso un domani che non conoscono, dimenticando l'unico attimo che hanno tra le mani»."
    ]
  },
  {
    id: 20,
    chapterIndex: 3,
    chapterTitle: "Capitolo IV",
    chapterSubtitle: "La Voce del Rame",
    pageInChapter: 5,
    paragraphs: [
      "Decisi di andare fino in fondo. Con dita ferme riposizionai il bilanciere, serrai le viti di ferro brunito e innestai la chiave a forma di ancora nel perno centrale.",
      "Un giro lento. Poi un secondo, fino a sentire la molla maestra tendersi con un gemito soffuso. Poi la suoneria segreta scattò.",
      "Nessun suono udibile, ma un'onda profonda che risuonò nel petto e dietro gli occhi. I bicchieri d'acqua sul tavolo tremarono disegnando cerchi perfetti sulla superficie. Sulla pendola della bottega la lancetta dei secondi si arrestò sul dodici. E non ripartì più."
    ]
  },

  // --- CAPITOLO V: I CARTOGRAFI DEL BUIO (Pagine 21 - 25) ---
  {
    id: 21,
    chapterIndex: 4,
    chapterTitle: "Capitolo V",
    chapterSubtitle: "I Cartografi del Buio",
    pageInChapter: 1,
    epigraph: {
      text: "La Serenissima non tollera che alcuno possieda carte del fondo del mare né dell'intimo del tempo.",
      author: "Editto del Consiglio dei Savi, 1618"
    },
    paragraphs: [
      "La pendola rimase ferma per due ore intere. Eppure il mondo non si era spento: la luce fuori dalla finestra si era trasformata in un'ambra densa e calda, quella che a Venezia si vede solo prima della prima neve sulle cime alpine.",
      "L'astrolabio non aveva congelato il cosmo, ma aveva aperto una bolla di quiete attorno a noi, dilatando il presente fino a renderlo un lago tranquillo e navigabile a vista.",
      "«Chi erano i Cartografi del Buio nominati nel taccuino?», domandò Nora. «Mio nonno Martino mi raccontava che erano mastri vetrai capaci di fondere una sabbia speciale del Mar Nero, creando lenti che non riflettevano la luce, ma trattenevano il buio per leggere le rotte senza farsi scorgere dai corsari»."
    ]
  },
  {
    id: 22,
    chapterIndex: 4,
    chapterTitle: "Capitolo V",
    chapterSubtitle: "I Cartografi del Buio",
    pageInChapter: 2,
    paragraphs: [
      "Sul fondo della scatola di piombo trovammo un secondo oggetto: un disco di quarzo spesso due dita, incastonato in un cerchio di corno nero con un manico d'argento sbalzato.",
      "Portai la lente all'occhio e guardai fuori verso la fondamenta di Murano. Ciò che vidi mi mozzò il fiato: non c'erano più i bidoni di plastica dei rifiuti né i cartelli d'alluminio del traffico acqueo.",
      "Attraverso il quarzo la fondamenta appariva com'era nel 1582: gondole nere senza ornamenti dorati legate a pali grezzi, donne con scialli di lino bianco che trasportavano ceste di rape, e una grande chiatta carica di botti di vino dolce di Cipro. Il passato non era morto: era solo coperto da un velo trasparente."
    ]
  },
  {
    id: 23,
    chapterIndex: 4,
    chapterTitle: "Capitolo V",
    chapterSubtitle: "I Cartografi del Buio",
    pageInChapter: 3,
    paragraphs: [
      "Nora prese la lente e guardò a sua volta. Rimase immobile per minuti interi, con il respiro sospeso tra le labbra socchiuse.",
      "«Sul ponte di San Donato c'è una ragazza», disse con la voce che tremava come seta al vento. «Ha un abito di broccato verde scuro con maniche a sbuffo fermate da perle di fiume. Sta guardando dritto verso la nostra finestra, Elia!»",
      "Mi affiancai a lei. A occhio nudo il ponte di pietra era deserto sotto la pioggia sottile; attraverso il quarzo la ragazza era viva e reale, e stringeva al petto una piccola rosa di panno vermiglio come se aspettasse qualcuno che non sarebbe mai tornato."
    ]
  },
  {
    id: 24,
    chapterIndex: 4,
    chapterTitle: "Capitolo V",
    chapterSubtitle: "I Cartografi del Buio",
    pageInChapter: 4,
    paragraphs: [
      "Nora abbassò la lente con gli occhi lucidi. Si sfilò dal collo il medaglione d'oro che portava sempre e lo aprì sul tavolo.",
      "All'interno c'era una miniatura dipinta su avorio: lo stesso volto della ragazza del ponte, con lo stesso vestito verde e le stesse perle tra i capelli corvini.",
      "«È Elena Dolfin, la mia antenata», confessò piano. «Morì di febbri nel novembre del 1582, pochi giorni dopo la riforma del Papa. Fra' Cristoforo cercava di salvarla: voleva creare un giorno eterno in cui la morte non potesse raggiungerla. La nostra famiglia e la tua custodiscono questo segreto da undici generazioni»."
    ]
  },
  {
    id: 25,
    chapterIndex: 4,
    chapterTitle: "Capitolo V",
    chapterSubtitle: "I Cartografi del Buio",
    pageInChapter: 5,
    paragraphs: [
      "Voltando la pagina venticinque del manoscritto trovammo una tavola astronomica tracciata a inchiostro cinabro e polvere d'argento.",
      "Mostrava l'allineamento tra la luna piena, Giove e la stella polare, con una data profetica: la notte d'autunno in cui la marea eccezionale avrebbe lambito il secondo gradino della Basilica di San Marco.",
      "«È stanotte», disse Nora guardando l'orologio. «Il Centro Maree prevede centoventi centimetri d'acqua alta per le ventitré e trenta. Quando l'acqua raggiungerà il livello critico, la porta dell'antica officina dei Dondi a Cannaregio si aprirà. Se non saremo là per regolarla, i cinquanta giorni si riverseranno sulla città travolgendo il presente»."
    ]
  },

  // --- CAPITOLO VI: IL PESO DELLE ORE (Pagine 26 - 30) ---
  {
    id: 26,
    chapterIndex: 5,
    chapterTitle: "Capitolo VI",
    chapterSubtitle: "Il Peso delle Ore",
    pageInChapter: 1,
    epigraph: {
      text: "La nostalgia non è il rimpianto di un luogo, ma di un minuto che non abbiamo saputo baciare prima che fuggisse.",
      author: "Lettere d'amore di un barcarolo, 1845"
    },
    paragraphs: [
      "Uscimmo dalla bottega per respirare l'aria viva prima della notte. Il vento di scirocco spingeva il mare verso l'interno della laguna con forza sorda, facendo cigolare i pontili e gorgogliare i tombini di pietra d'Istria.",
      "Camminammo verso le Fondamente Nove, dove lo sguardo si perde verso l'isola dei cipressi neri di San Michele sotto un cielo denso come fumo di candela.",
      "La città viveva nella sua fretta quotidiana: i gabbiani si contendevano gli scarti sui banchi del pesce, i postini tiravano i carrelli su per i gradini dei ponti, i vecchi discutevano del vino nuovo. Mi parve tutto infinitamente fragile, sospeso su un filo di seta."
    ]
  },
  {
    id: 27,
    chapterIndex: 5,
    chapterTitle: "Capitolo VI",
    chapterSubtitle: "Il Peso delle Ore",
    pageInChapter: 2,
    paragraphs: [
      "Ci sedemmo a un tavolino di ferro sotto la tettoia di un caffè a Campo Santa Margherita, con due tazze di cioccolata calda profumata di cannella.",
      "Nora teneva la cartella stretta tra i piedi, come un tesoro che non si può lasciare incustodito neppure per un istante.",
      "«Cosa faresti, Elia, se avessi davvero un giorno in più?», mi chiese guardando la pioggia che disegnava cerchi sulla pietra del campo. «Un giorno che nessun calendario segnerà mai, che non lascia debiti e non chiede nulla in cambio?»"
    ]
  },
  {
    id: 28,
    chapterIndex: 5,
    chapterTitle: "Capitolo VI",
    chapterSubtitle: "Il Peso delle Ore",
    pageInChapter: 3,
    paragraphs: [
      "Ci pensai a lungo, mentre il campanone dei Carmini batteva le quattro del pomeriggio con rintocchi lenti e sonori.",
      "«Credo che resterei seduto a guardare la luce cambiare sull'intonaco di una casa», risposi sinceramente. «Senza guardare il telefono, senza la paura che ciò che amo stia per finire».",
      "Nora mi posò la mano sopra la mia. «Siamo tutti malati di fretta, Elia. Mio padre passò gli ultimi anni tra carte e scartoffie dicendomi: 'La prossima estate andremo in barca insieme, Nora'. Quella prossima estate non è mai arrivata. Il tempo non fa sconti a nessuno»."
    ]
  },
  {
    id: 29,
    chapterIndex: 5,
    chapterTitle: "Capitolo VI",
    chapterSubtitle: "Il Peso delle Ore",
    pageInChapter: 4,
    paragraphs: [
      "«Sai perché non ho mai lasciato Murano?», le chiesi guardandola negli occhi.",
      "«Quando persi mio padre a dodici anni, mio nonno mi mise in mano un paio di pinzette d'acciaio e un orologio rotto. Mi disse: 'Finché riesci a far camminare un bilanciere inceppato, nessun giorno della tua vita sarà andato sprecato'».",
      "Una lacrima le scivolò sulla guancia, e lei la asciugò con un sorriso dolce. «Tuo nonno sapeva che saresti stato tu a chiudere il cerchio che lui non aveva potuto finire»."
    ]
  },
  {
    id: 30,
    chapterIndex: 5,
    chapterTitle: "Capitolo VI",
    chapterSubtitle: "Il Peso delle Ore",
    pageInChapter: 5,
    paragraphs: [
      "Mentre ci alzavamo per pagare, un battito secco e ritmico risuonò dall'interno della cartella di cuoio.",
      "*Tac. Tac. Tac.* Un galoppo veloce, concitato, diverso dalla calma della notte precedente.",
      "I colombi sul campo si alzarono in volo tutti insieme con un frullo sordo. «La marea sale più veloce del previsto», disse Nora guardando la ghiera dell'astrolabio che scottava attraverso la fodera. «Abbiamo meno di due ore per raggiungere la porta di Cannaregio»."
    ]
  },

  // --- CAPITOLO VII: LA PORTA SOMMERSA (Pagine 31 - 35) ---
  {
    id: 31,
    chapterIndex: 6,
    chapterTitle: "Capitolo VII",
    chapterSubtitle: "La Porta Sommersa",
    pageInChapter: 1,
    epigraph: {
      text: "Quando la marea entra nei campielli, i morti si siedono a tavola con i vivi e l'acqua ristabilisce l'uguaglianza tra tutti gli uomini.",
      author: "Cronaca di Zuanne Tiepolo, 1630"
    },
    paragraphs: [
      "Alle nove di sera le sirene dell'acqua alta intonarono il loro canto a quattro toni, rimbalzando tra le calli buie come un allarme d'altri tempi.",
      "Infilammo gli stivaloni di gomma e avanzammo controcorrente verso il Ghetto Vecchio di Cannaregio. L'acqua aveva già coperto i marciapiedi di venti centimetri; le passerelle galleggiavano oscillando al passaggio dei pochi residenti.",
      "Noi camminavamo nell'acqua fredda diretti a Corte dei Birri, una calle cieca dove l'acqua alta raggiungeva da sempre il livello più fondo."
    ]
  },
  {
    id: 32,
    chapterIndex: 6,
    chapterTitle: "Capitolo VII",
    chapterSubtitle: "La Porta Sommersa",
    pageInChapter: 2,
    paragraphs: [
      "Corte dei Birri era una vasca scura circondata da mura di mattoni scalcinati. L'unico lampione a mensola proiettava un riflesso d'ambra sull'acqua immobile.",
      "Al centro sorgeva la fontana rinascimentale sormontata dalla statua del leone con il libro chiuso.",
      "«Guarda il riflesso», sussurrai a Nora. «Il riverbero non disegna un cerchio comune: disegna l'ellisse della madre del nostro astrolabio. *Quando il leone berrà il mare, la chiave entrerà nell'occhio della gorgone*»."
    ]
  },
  {
    id: 33,
    chapterIndex: 6,
    chapterTitle: "Capitolo VII",
    chapterSubtitle: "La Porta Sommersa",
    pageInChapter: 3,
    paragraphs: [
      "Sul basamento della fontana, a pelo dell'acqua salmastra che saliva di minuto in minuto, scorsi il mascherone marmoreo di Medusa con le fauci spalancate.",
      "Mi immersi nell'acqua fredda fino al petto e infilai le dita nella bocca di pietra: sul palato c'era una toppa quadrata di bronzo cesellato.",
      "Inserii la chiave a forma di ancora trovata a San Giorgio. Due scatti a destra, uno a sinistra: un boato sordo scosse il fondale e una porzione di muro di mattoni scivolò di lato su guide di pietra, aprendo un varco gocciolante verso il buio."
    ]
  },
  {
    id: 34,
    chapterIndex: 6,
    chapterTitle: "Capitolo VII",
    chapterSubtitle: "La Porta Sommersa",
    pageInChapter: 4,
    paragraphs: [
      "Scendemmo la rampa bagnata piegati in due. Con nostra meraviglia l'acqua lagunare non entrava: una paratia stagna di piombo e cuoio tratteneva la piena all'esterno.",
      "Accesa la torcia, il fascio di luce svelò un'officina grande come una cripta, sorretta da pilastri di pietra rossa di Verona.",
      "Lungo le pareti, su mensole di quercia centenaria, battevano decine di orologi a pendolo, planetari tolemaici e clessidre a mercurio liquido. Tutti battevano allo stesso istante, creando un respiro profondo come il battito della terra sotto la laguna."
    ]
  },
  {
    id: 35,
    chapterIndex: 6,
    chapterTitle: "Capitolo VII",
    chapterSubtitle: "La Porta Sommersa",
    pageInChapter: 5,
    paragraphs: [
      "Al centro della sala torreggiava un automa di quattro metri in bronzo, rame e cristallo di rocca, con una sfera armillare che ruotava attorno a un cuore d'argento martellato.",
      "Alla base dell'automa si apriva un incavo circolare vuoto, circondato da cinquanta rubini sintetici disposti a raggiera.",
      "«È la dimora dell'astrolabio», mormorò Nora con voce rotta. «I nostri nonni non lo avevano fabbricato: lo avevano messo in salvo durante la guerra per sottrarlo ai saccheggi. Adesso spetta a noi rimetterlo al suo posto»."
    ]
  },

  // --- CAPITOLO VIII: IL GIORNO CHE NON CI FU (Pagine 36 - 40) ---
  {
    id: 36,
    chapterIndex: 7,
    chapterTitle: "Capitolo VIII",
    chapterSubtitle: "Il Giorno Che Non Ci Fu",
    pageInChapter: 1,
    epigraph: {
      text: "Vi è un secondo tra il respiro e l'espirazione in cui il cosmo intero trattiene il fiato; quello è il giorno che nessun re potrà mai comprare.",
      author: "Trattato del Silenzio, Padova 1599"
    },
    paragraphs: [
      "Presi l'astrolabio di mio nonno e lo inserii nell'alloggiamento centrale della grande macchina. I denti combaciarono con un suono solenne, simile al primo accordo di un organo da cattedrale.",
      "I cinquanta rubini si accesero uno dopo l'altro di una luce calda e fosforescente. Nel cuore dell'automa la spirale d'argento cominciò a oscillare con un battito lento e maestoso.",
      "Dalla feritoia che dava sul canale esterno, il frastuono delle onde e delle sirene cessò di colpo. Non fu un'interruzione graduale: fu come se una mano invisibile avesse abbassato il silenzio sul mondo intero."
    ]
  },
  {
    id: 37,
    chapterIndex: 7,
    chapterTitle: "Capitolo VIII",
    chapterSubtitle: "Il Giorno Che Non Ci Fu",
    pageInChapter: 2,
    paragraphs: [
      "Risalimmo i gradini e ci affacciammo alla corte allagata. Ciò che vidi rimarrà impresso nei miei occhi finché avrò respiro sulla terra.",
      "La pioggia non cadeva più: milioni di gocce d'acqua erano sospese a mezz'aria, immobili come perle di cristallo infilate su fili invisibili. Allungai la mano e ne toccai una con il dito: mantenne la sua forma perfetta senza rompersi, riflettendo la luce del lampione come uno specchio minuscolo.",
      "L'acqua del canale era una lastra di giada immobile. Un remo caduto da una barca era rimasto fermo a metà tra l'aria e il pelo dell'acqua, senza affondare e senza galleggiare."
    ]
  },
  {
    id: 38,
    chapterIndex: 7,
    chapterTitle: "Capitolo VIII",
    chapterSubtitle: "Il Giorno Che Non Ci Fu",
    pageInChapter: 3,
    paragraphs: [
      "Uscimmo dalla corte e ci incamminammo lungo la Strada Nova tenendoci per mano.",
      "La città era un museo di sculture viventi: un gatto nero era colto a mezz'aria nel balzo tra due cornicioni; sul ponte delle Guglie un gondoliere aveva le labbra schiuse nell'atto di gridare il suo saluto, ma nessun suono ne usciva.",
      "Camminavamo senza fare rumore, unici esseri coscienti in un universo che si era addormentato tra due battiti di ciglia."
    ]
  },
  {
    id: 39,
    chapterIndex: 7,
    chapterTitle: "Capitolo VIII",
    chapterSubtitle: "Il Giorno Che Non Ci Fu",
    pageInChapter: 4,
    paragraphs: [
      "Arrivammo in Piazza San Marco. La piazza più famosa del mondo, di solito brulicante di voci e passi affannati, era immersa in una pace sacra.",
      "Uno stormo di cento gabbiani era sospeso a mezz'aria con le ali aperte contro il cielo d'ardesia, come angeli bianchi retti da una cupola di cristallo.",
      "La Basilica splendeva dei suoi mosaici dorati con una purezza che non avevo mai visto prima. «Nora», dissi piano. «Non c'è un domani che ci insegue, non c'è un ieri che ci rimprovera. È questa la pace di cui parlavano i poeti?»"
    ]
  },
  {
    id: 40,
    chapterIndex: 7,
    chapterTitle: "Capitolo VIII",
    chapterSubtitle: "Il Giorno Che Non Ci Fu",
    pageInChapter: 5,
    paragraphs: [
      "Rimanemmo seduti sui gradini delle Procuratie per quelle che parvero ore senza fine, contemplando la bellezza intatta della nostra città.",
      "Ma piano piano, mentre lo stupore cedeva il posto alla consapevolezza, un brivido sottile mi salì lungo la schiena.",
      "Quel mondo immobile era meraviglioso, ma era anche un mondo privo di vita: senza risate di bambini, senza pane caldo nei forni, senza promesse da mantenere. La bellezza del tempo non risiede nella sua eternità, ma nella sua fine: se una rosa non appassisse mai, sarebbe solo un fiore finto."
    ]
  },

  // --- CAPITOLO IX: LA SCELTA DI ELIA (Pagine 41 - 45) ---
  {
    id: 41,
    chapterIndex: 8,
    chapterTitle: "Capitolo IX",
    chapterSubtitle: "La Scelta di Elia",
    pageInChapter: 1,
    epigraph: {
      text: "Non trattenere il fiume per timore del mare: l'acqua ferma imputridisce, solo quella che corre arriva al cielo.",
      author: "Massime di San Girolamo, 1480"
    },
    paragraphs: [
      "Tornammo all'officina di Cannaregio a passo svelto, facendoci largo tra le gocce sospese che si scansavano al passaggio del corpo per poi richiudersi dietro di noi come una tenda liquida.",
      "Nella cripta l'aria era diventata densa e calda come l'interno di un forno da vetro. L'automa emetteva un sibilo acuto di metallo sotto sforzo.",
      "Sull'astrolabio la ghiera centrale cominciava ad arrossarsi: la pressione del tempo compresso che spingeva contro gli scappamenti stava raggiungendo il limite di rottura."
    ]
  },
  {
    id: 42,
    chapterIndex: 8,
    chapterTitle: "Capitolo IX",
    chapterSubtitle: "La Scelta di Elia",
    pageInChapter: 2,
    paragraphs: [
      "C'era una seconda leva sull'automa: una maniglia di ferro dolce con l'iscrizione *In aeternum requiescat*.",
      "Se l'avessi abbassata, il meccanismo si sarebbe saldato alla roccia per sempre. Nora ed io avremmo potuto abitare quella Venezia senza morte né dolore, padroni di tutti i palazzi e di tutte le notti.",
      "Pensai alle guerre, alle malattie, alle solitudini del mondo moderno, alla mia bottega vuota senza mio nonno. Per un attimo, la mano mi tremò sul ferro della leva eterna. Perché tornare a morire un minuto alla volta quando potevamo restare per sempre nell'attimo perfetto?"
    ]
  },
  {
    id: 43,
    chapterIndex: 8,
    chapterTitle: "Capitolo IX",
    chapterSubtitle: "La Scelta di Elia",
    pageInChapter: 3,
    paragraphs: [
      "Furono le dita calde di Nora a fermarmi, stringendosi alle mie con dolcezza fermissima.",
      "«Non farlo, Elia», mi guardò con quegli occhi che avevano la chiarezza delle acque buone. «Noi siamo orologiai, non dei. Il compito di chi ama il tempo non è imprigionarlo nella teca di un museo, ma aiutarlo a camminare quando si inceppa nella ruggine».",
      "«E se poi perdessimo tutto questo?», chiesi con la voce spezzata. «Non perderemo nulla», sorrise. «Perché ogni singolo minuto che vivremo d'ora in poi sarà un dono rubato al nulla»."
    ]
  },
  {
    id: 44,
    chapterIndex: 8,
    chapterTitle: "Capitolo IX",
    chapterSubtitle: "La Scelta di Elia",
    pageInChapter: 4,
    paragraphs: [
      "Mi ricordai delle parole di mio nonno: *'Un orologio perfetto non è quello che non sbaglia mai un secondo, ma quello che continua a camminare anche dopo aver preso un colpo'*. La perfezione umana è nella fragilità, non nell'immobilità della pietra.",
      "Presi la chiave d'argento a forma di ancora e la innestai nel perno di scarico del cinquantesimo rubino.",
      "Bisognava rilasciare lentamente la carica accumulata, restituendo i cinquant'anni di scarto ai canali della laguna. «Pronta, Nora?», le chiesi. «Pronta», disse stringendosi al mio fianco."
    ]
  },
  {
    id: 45,
    chapterIndex: 8,
    chapterTitle: "Capitolo IX",
    chapterSubtitle: "La Scelta di Elia",
    pageInChapter: 5,
    paragraphs: [
      "Ruotai la chiave con tutta la forza delle braccia.",
      "Un lampo azzurrino illuminò le volte di pietra rossa, e i cinquanta rubini si spensero a uno a uno rilasciando un profumo d'ozono e incenso.",
      "Sentimmo l'acqua della laguna riprendere la sua corsa: prima un mormorio lontano, poi il tonfo potente delle onde contro i pontili della corte. Fuori, il gondoliere sul ponte delle Guglie completò il suo grido, i gabbiani ripresero il volo verso il mare, e il mondo tornò a respirare con noi."
    ]
  },

  // --- CAPITOLO X: LA RIVA DEL MATTINO (Pagine 46 - 50) ---
  {
    id: 46,
    chapterIndex: 9,
    chapterTitle: "Capitolo X",
    chapterSubtitle: "La Riva del Mattino",
    pageInChapter: 1,
    epigraph: {
      text: "L'alba non chiede il permesso alla notte per sorgere: basta che una finestra si apra verso oriente.",
      author: "Canto dei pescatori di Burano"
    },
    paragraphs: [
      "Quando risalimmo la corte, la marea aveva cominciato la sua ritirata naturale verso le bocche di porto del Lido, lasciando sulle pietre d'Istria una patina lucida di sale pulito.",
      "Il vento di scirocco era caduto, sostituito da una brezza fresca di tramontana che spazzava via le nubi verso le montagne innevate.",
      "Un garzone del panificio passava in bicicletta con una cesta di pane caldo appena sfornato, il cui profumo ci ricordò all'improvviso che eravamo vivi e affamati. Nessuno per strada sapeva che la città era rimasta sospesa sull'orlo dell'infinito."
    ]
  },
  {
    id: 47,
    chapterIndex: 9,
    chapterTitle: "Capitolo X",
    chapterSubtitle: "La Riva del Mattino",
    pageInChapter: 2,
    paragraphs: [
      "Salimmo sul primo vaporetto della linea 1 a San Marcuola, sedendoci a prua a respirare l'aria tagliente del Canal Grande.",
      "Superata la curva di Ca' Foscari, il primo raggio di sole spuntò dietro la cupola di San Giorgio Maggiore. Fu un'esplosione silenziosa di rosa, pesca e oro fuso: l'acqua della laguna si accese come uno specchio ardente.",
      "Non avevo mai visto un'alba così bella in tutta la mia vita. Perché adesso sapevo quanto ogni alba sia fragile, conquistata un secondo alla volta contro il buio del non-essere."
    ]
  },
  {
    id: 48,
    chapterIndex: 9,
    chapterTitle: "Capitolo X",
    chapterSubtitle: "La Riva del Mattino",
    pageInChapter: 3,
    paragraphs: [
      "Tornammo alla bottega di Murano mentre le campane di San Donato suonavano l'Angelus del mattino.",
      "Posai l'astrolabio sul banco di lavoro. Non emanava più calore né vibrazioni insolite: era tornato a essere uno splendido strumento astronomico del Rinascimento.",
      "Ma osservandolo con la lente notai un dettaglio: nel perno centrale d'acciaio era rimasto incastonato un granello microscopico d'ambra fossile con una bolla d'aria che si muoveva piano, segno indelebile che una goccia del tempo sospeso era rimasta custodita nel cuore della materia."
    ]
  },
  {
    id: 49,
    chapterIndex: 9,
    chapterTitle: "Capitolo X",
    chapterSubtitle: "La Riva del Mattino",
    pageInChapter: 4,
    paragraphs: [
      "Non richiusi l'astrolabio nel buio del cassone. Lo collocai su un supporto d'olivo intagliato al centro dello scaffale principale della bottega, accanto ai cronometri di mio nonno.",
      "Nora preparò una moka di caffè sul fornello del retrobottega. Bevemmo seduti sui gradini del pontile privato, con le gambe a ciondoloni sull'acqua verde del canale.",
      "«Cosa faremo adesso, Elia?», mi chiese posando la testa sulla mia spalla. «Continueremo ad aggiustare orologi», risposi stringendole la mano. «E a ricordare a chiunque entri che un orologio non serve a contare i minuti che mancano, ma ad amare ogni secondo prima che se ne vada»."
    ]
  },
  {
    id: 50,
    chapterIndex: 9,
    chapterTitle: "Capitolo X",
    chapterSubtitle: "La Riva del Mattino",
    pageInChapter: 5,
    epigraph: {
      text: "Non voltarti indietro a cercare il tempo perduto: impara a respirare ogni istante come fosse l'ottobre rubato.",
      author: "Elia Morosini, Murano"
    },
    paragraphs: [
      "A te che hai sfogliato queste cinquanta pagine attraverso la luce dello schermo del tuo telefono, sappi che non vi è nulla di fittizio in questa storia se non i nomi degli uomini che l'hanno vissuta.",
      "I dieci giorni dell'ottobre 1582 mancano davvero in ogni archivio del mondo civile. Quei giorni sono andati perduti per i registri, ma non per l'animo di chi sa cercarli.",
      "Ogni volta che sollevi gli occhi da un libro per guardare la pioggia sui vetri, ogni volta che indugi un secondo in più nell'abbracciare chi ami prima di uscire di casa... in quell'istante esatto tu stai riaprendo l'astrolabio di fra' Cristoforo. Vivi i tuoi giorni come il tesoro più prezioso della laguna: perché il tempo non è una prigione che ci consuma, ma il mare infinito in cui abbiamo la grazia di navigare."
    ],
    footnote: "Fine del romanzo. Murano, Venezia."
  }
];
