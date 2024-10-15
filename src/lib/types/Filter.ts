import type { AllowedLanguages } from './AllowedLanguages.ts';

export enum ShowTypeEnum {
    CorporateEvent = 1,
    Wedding = 2,
    Party = 3,
    Birthday = 4,
    ClubEvent = 6,
    Festival = 7,
    ReligiousCeremony = 8,
    Ceremony = 9,
    SeasonalEvent = 13,
    AmbientMusic = 16,
    PartyForKids = 17,
    EventForBarRestaurant = 18,
    EventForHotel = 19,
    RetirementHome = 20,
    Other = 999
};

export enum ArtistTypeEnum {
    Band = 1,
    Musician = 2,
    DJ = 3,
    Ensemble = 4,
    Entertainer = 5,
    Magician = 6,
    Speaker = 7,
    Dancer = 8,
    Photographer = 9,
    EventRental = 10,
    EventServices = 11,
    TeamBuilding = 12,
    Packages = 13
};

export enum ArtistSubTypeEnum {
    BigBand = 1,
    SteelDrumPlayer = 2,
    Karaoke = 3,
    Original = 4,
    Cover = 5,
    Tribute = 6,
    OneManBand = 7,
    Radio = 8,
    Lounge = 9,
    AcousticMusic = 10,
    ACappellaGroup = 11,
    Quartet = 12,
    StringTrio = 13,
    Guggen = 14,
    BrassBand = 15,
    ChamberOrchestra = 16,
    ClassicalDuo = 17,
    Orchestra = 18,
    Choir = 19,
    Percussionist = 20,
    Saxophonist = 21,
    Pianist = 22,
    MaleVocalist = 23,
    Violinist = 24,
    Flutist = 25,
    Guitarist = 26,
    Cellist = 27,
    Vocalist = 28,
    Keyboardist = 29,
    Organist = 30,
    Crooner = 31,
    Harpist = 32,
    Rapper = 33,
    Trumpeter = 34,
    Club = 35,
    Clown = 36,
    Comedian = 37,
    BalloonSculptor = 38,
    FacePainter = 39,
    Juggler = 40,
    Walkacts = 41,
    FireJuggler = 42,
    Caricaturist = 43,
    SantaClaus = 44,
    LivingDoll = 45,
    Magician = 46,
    Mentalist = 47,
    MagicForKids = 48,
    Presenter = 49,
    Moderator = 50,
    ActorActress = 51,
    HulaDancer = 54,
    DanceGroup = 55,
    CountryDancer = 56,
    HipHopDancer = 57,
    TapDancer = 58,
    FlamencoDancer = 59,
    TangoDancer = 60,
    LatinMusicDancer = 61,
    Vintage = 62,
    BellyDancer = 63,
    Other = 64,
    Ventriloquist = 65,
    Acrobats = 66,
    Bagpipes = 67,
    AlpineHorn = 68,
    Harmonica = 69,
    Horn = 70,
    VJ = 71,
    AthleticsSpeaker = 72,
    BusinessSpeaker = 73,
    CelebritySpeaker = 74,
    CorporateSpeaker = 75,
    InspirationalSpeaker = 76,
    MotivationalSpeaker = 77,
    SportsCommentator = 78,
    Cabaret = 79,
    Lookalike = 80,
    Mariachi = 81,
    Percussion = 82,
    Woodwinds = 83,
    Duo = 84,
    Trio = 85,
    PanFlute = 86,
    PianoBar = 87,
    Accordion = 88,
    BodyPainter = 89,
    StringQuartetAndSimilar = 90,
    PartyDJ = 91,
    BackgroundDJ = 92,
    DJWithLiveInstruments = 93,
    DJWithSinger = 94,
    DJWithKaraoke = 95,
    PopRockPartyBand = 96,
    SchlagerOldies = 97,
    GalaBandDanceOrchestra = 98,
    RockabillyPartyBand = 99,
    IrishPartyBand = 100,
    CountryPartyBand = 101,
    LatinAmericanPartyBand = 102,
    JazzBand = 103,
    FolkMusic = 104,
    TicineseMusic = 105,
    GermanMusic = 106,
    ItalianMusic = 107,
    SemiAcousticDuoTrioVoiceAndGuitar = 108,
    SemiAcousticDuoTrioVoiceAndPiano = 109,
    SemiAcousticDuoTrioInstrumental = 110,
    SoloVoiceAndGuitar = 111,
    SoloVoiceAndPiano = 112,
    FemaleVocalist = 114,
    Photographer = 115,
    WeddingPhotographer = 116,
    Videographer = 118,
    WeddingVideographer = 119,
    InflatableCastles = 120,
    InflatablesForParties = 121,
    PhotoBoothRental = 122,
    Bartender = 123,
    Catering = 124,
    FoodTrucks = 125,
    Sommelier = 126,
    EventPlanner = 127,
    WeddingPlanner = 128,
    EventLimousine = 129,
    EventBus = 130,
    SportsAndGames = 131,
    NatureExperiences = 132,
    TeamEvent = 133,
    Experience = 134,
    Packages = 135
};

export enum ArtistGenreEnum {
    Pop = 1,
    Rock = 2,
    Electro = 3,
    RnB = 4,
    Metal = 5,
    HouseTechno = 6,
    HipHop = 7,
    Punk = 8,
    DiscoDance = 9,
    Rap = 10,
    Alternative = 11,
    Jazz = 12,
    Latin = 13,
    Folk = 14,
    Classical = 15,
    Reggae = 16,
    Funk = 17,
    ChristianGospel = 18,
    Country = 19,
    Ska = 20,
    WorldMusic = 21,
    Blues = 22,
    Other = 23,
    Lounge = 24,
    Soul = 25,
    Swing = 26,
    Rockabilly = 27,
    DanceMusic = 28,
    FolkMusic = 29,
    Schlager = 30,
    OldieBands = 31,
    Celtic = 32,
    Irish = 33,
    Twenties = 34,
    Thirties = 35,
    Forties = 36,
    Fifties = 37,
    Sixties = 38,
    Seventies = 39,
    Eighties = 40,
    Nineties = 41,
    African = 42,
    Ambient = 43,
    Flamenco = 44,
    Fusion = 45,
    Greek = 46,
    Groove = 47,
    Grunge = 48,
    Gypsy = 49,
    Hawaiian = 50,
    HonkyTonk = 51,
    Indie = 52,
    Industrial = 53,
    Italian = 54,
    Jam = 55,
    MiddleEastern = 56,
    NewAge = 58,
    Polka = 59,
    Ragtime = 60,
    SalsaMerengue = 61,
    SouthernRock = 62,
    SurfBeach = 63,
    Bluegrass = 64,
    Brazilian = 65,
    Caribbean = 66,
    Cuban = 67,
    Tango = 68,
    Christmas = 69,
    Meditational = 70,
    Opera = 71,
    ChamberMusic = 72,
    KidsMusic = 73,
    Ticinese = 74,
    Jodel = 75,
    HardRock = 76,
    Mundart = 77
};

export enum FilterType {
    LANGUAGE = 'LANGUAGE',
    SHOW_TYPE = 'SHOW_TYPE',
    ARTIST_TYPE = 'ARTIST_TYPE',
    ARTIST_SUB_TYPE = 'ARTIST_SUB_TYPE',
    ARTIST_GENRE = 'ARTIST_GENRE',
    LOCATION = 'LOCATION',
    WHEN = 'WHEN',
    BUDGET = 'BUDGET'
};

export type BaseFilter<T, K = string> = {
    f: T;
    k: K;
    v: string;
    i: boolean;
};

export type LanguageFilter = BaseFilter<FilterType.LANGUAGE, AllowedLanguages> & {
    v: AllowedLanguages;
};

export type ShowTypeFilter = BaseFilter<FilterType.SHOW_TYPE, number | string>;

export type ArtistTypeFilter = BaseFilter<FilterType.ARTIST_TYPE, number | string>;

export type ArtistSubTypeFilter = BaseFilter<FilterType.ARTIST_SUB_TYPE, number | string>;

export type ArtistGenreFilter = BaseFilter<FilterType.ARTIST_GENRE, number | string>;

export type LocationFilter = BaseFilter<FilterType.LOCATION> & {
    p: string[];
};

export type WhenFilter = BaseFilter<FilterType.WHEN> & {
    p: string[];
};

export type BudgetFilter = BaseFilter<FilterType.WHEN> & {
    p: number;
};

export type Filter = LanguageFilter | ShowTypeFilter | ArtistTypeFilter | ArtistSubTypeFilter | ArtistGenreFilter | LocationFilter | WhenFilter | BudgetFilter;

export type SuggestionPool = Omit<Record<FilterType, (number | string)[]>, FilterType.LANGUAGE>;

export type Suggestions = Partial<Record<keyof SuggestionPool, (number | string)[]>>;

export interface FilterSuggestion {
    query: string;
    applied: Filter[];
    notApplied: (keyof SuggestionPool)[];
    suggestions: Suggestions;
};

