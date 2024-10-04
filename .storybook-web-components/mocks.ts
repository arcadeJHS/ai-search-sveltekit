import { type Readable, readable } from 'svelte/store';
import { MessageRole } from '../src/lib/types/Message.ts';
import { type UserQuery} from '../src/lib/types/UserQuery.ts';

export const apiStartMock = {
    "session": "MOCK__799579c2-76a3-47de-b496-892bc8a63a15",
    "l": "en",
    "message": "Hi there! How can I help you to organize your event?",
    "filters": [
        {
            "f": "LANGUAGE",
            "k": "en",
            "v": "en",
            "i": true
        }
    ],
    "selection": []
};

export const apiSearchMessageMock = {
    "session": "799579c2-76a3-47de-b496-892bc8a63a15",
    "l": "en",
    "message": "Selection updated",
    "filters": [
        {
            "f": "LANGUAGE",
            "k": "en",
            "v": "en",
            "i": true
        }
    ],
    "selection": [
        {
            "id": 78204,
            "name": "Musica live per eventi",
            "type": 2,
            "description": "Diplomato in Pianoforte e Violoncello  con il massimo dei voti, al Conservatorio di stato “Tito Schipa” di Lecce. Suona anche la fisarmonica ma la vera grande dote è il canto. Pianista al THE VIEW HOTEL di LUGANO.\nDirettore artistico del LABORATORIO MUSICALE  sito in Oria (Br) nella quale insegna canto moderno, pianoforte, violoncello e fisarmonica e si esibisce nei suoi concerti con tutti i suoi strumenti elencati prima. Oltre ad essere un interprete, scrive canzoni e, come cantautore, ha vinto il prestigioso Premio \"Rino Gaetano\". Si è esibito in varie trasmissioni televisive e ha fatto parte di alcuni casting musicali.\n•\tAutore nel 2001 della colonna sonora di un noto documentario andato in onda su reti nazionali (Mediaset); Autore e arrangiatore di numerosi Jingle per le radio nazionali Numerose apparizioni in vari programmi televisivi nazionale;\n\"Uno mattina\" come violoncellista-interprete, RAIUNO (2002)\n\"Sette per Uno\" come interprete, RAIUNO (2001)\n\"Domenica in\" come interprete, RAIUNO (2000)\n\"Beato tra le donne\" come interprete RAIUNO(1999)\nVincitore del premio \"Rino Gaetano\" come cantautore, RAIUNO (1996)\n“I Raccomandati” come violoncellista-pianista-interprete, RAIUNO (2008)\n“Cultura Moderna” come interprete, CANALE 5 (2009)\n\"Italia's Got Talent\" come violoncellista-pianista-interprete, CANALE 5 (2012)\n\"Avanti un Altro\" come personaggio del mini mondo, CANALE 5 (2015-2016-2017)\n“Pianista a TORRE MAIZZA – ROCCOFORTE HOTELs” 2019\n•\tProssimamente su RAITRE nota trasmissione che si occupa del pianeta terra e clima, avrà come sigla di chiusura un brano composto da Piero IUNCO.\n•\tCompositore delle musiche ed interprete delle otto canzoni pubblicate nel cd allegato al volume omonimo \"Poesie da cantare\" di Teodoro Brescia; \nSi esibisce regolarmente da anni in molti locali d'Italia portando avanti un personale progetto musicale: \"Canto e Violoncello\"\n(consiste nell'esibirsi, sia in trasmissioni, che in locali e piazze, accompagnandosi col violoncello più che con i \"classici\" strumenti musicali da musica leggera)",
            "distance": 0.19754
        },
        {
            "id": 78201,
            "name": "The Slick Notes",
            "type": 1,
            "description": "Suchen Sie stimmungsvolle Jazzmusik für Ihren Anlass? \nFirmenanlässe, Hochzeiten, Geburtstage, Partys, Apéros usw. Sei es im Trio oder Quartett mit Saxofon, als Konzert, Backgroundmusik oder musikalische Intermezzi. Wir finden die geeignete Lösung für jeden Event.\nThe Slick Notes ist eine Jazzband für die Untermahlung von Events aller Art. Die Band besteht aus Vollblutmusikern mit grosser Erfahrung. Wir sind sowohl als Trio mit Gitarre, Bass und Schlagzeug oder als Quartett mit Saxophon unterwegs. \nWir bieten Ihnen hohe Professionalität, jahrelange Erfahrung, Zuverlässigkeit und einen unkomplizierten Umgang. Gerne beraten wir Sie bei der Wahl der passenden Musik.\n\nDas Repertoire besteht aus Klassikern aus Jazz, Pop und Latin, wie z.B.\n- Fly Me To The Moon\n- Over The Rainbow\n- Don't Stop Me Now (Queen)\n- Smells Like Teen Spirit (Nirvana)\n- St. Thomas\n- Three Little Birds\n- Beat It\n- Isn't She Lovely\n- usw.\nGrundsätzlich ist alles möglich und wir können praktisch alle musikalischen Wünsche erfüllen!\n\nErfahren Sie hier mehr über uns und überzeugen Sie sich selbst. Melden Sie sich mit einer unverbindlichen Anfrage. Wir freuen uns auf Ihre Kontaktaufnahme!",
            "distance": 0.30393
        },
        {
            "id": 78199,
            "name": "Andrea DJ",
            "type": 3,
            "description": "Sono un ragazzo serio e con grande dedizione al lavoro.\n\nLa voglia di fare musica e di portare divertimento ad ogni tipologia di evento, tutto ciò frutto di anni di esperienza nel settore musicale.\n\nL'intrattenimento musicale e' la base per far si che ogni evento sia speciale ed indimenticabile.",
            "distance": 0.45455
        }
    ]
};

const userQueries: UserQuery[] = [
    {
        key: '1',
        content: 'A rock band in Lugano',
        role: MessageRole.User,
        resultsCount: 13
    },
    {
        key: '2',
        content: 'for a wedding ceremony',
        role: MessageRole.User,
        resultsCount: 7
    },
    {
        key: '3',
        content: 'with kids',
        role: MessageRole.User,
        resultsCount: 0
    }
];

export const createUserQueriesStoreMock = (initialValue = userQueries): Readable<UserQuery[]> => {
    return readable(initialValue, () => {
        return () => {};
    });
};