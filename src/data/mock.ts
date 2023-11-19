import {
  PlaceType,
  RecommendPlaceType,
  VideoType,
  PhotographerType,
  BlazonryType,
  LanguagesType,
} from '../../types';

type PlacesType = Record<LanguagesType, PlaceType[]>;

export const places: PlacesType = {
  ru: [
    {
      title: 'Куршская коса',
      url: { origin: '#', text: 'park-kosa.ru' },
      description: [
        'Здесь, посреди лесов и песчаных дюн, вы сможете увидеть два водных горизонта — спокойного Куршского залива с одной стороны и подёрнутого рябью волн Балтийского моря с другой. Уникальная природная зона на краю российского анклава.',
        'На этом Калининградская область не заканчивается. Для путешественника и исследователя там же по соседству — самая западная точка России, Балтийская коса, — и немецкое наследие россыпи небольших приморских городов. Атмосфера здешних мест исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.',
      ],
      imageUrl: '/images/place-1.jpg',
    },
    {
      title: 'Кольский',
      url: {
        origin: '#',
        text: 'National Geographic',
      },
      description: [
        'Почти весь полуостров находится за Полярным кругом. Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, прикидывающийся Баренцевым морем.',
        'Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.',
      ],
      imageUrl: '/images/place-2.jpg',
    },
    {
      title: 'Алтай',
      url: {
        origin: '#',
        text: 'Facebook',
      },
      description: [
        'Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом здешних мест — горным воздухом.',
        'Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского края.',
      ],
      imageUrl: '/images/place-3.jpg',
    },
    {
      title: 'Зимний Байкал',
      url: {
        origin: '#',
        text: 'https://vk.com/baikalmile',
      },
      description: [
        'Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, что это самый большой источник пресной воды и одно из красивейших мест в России.',
        'Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.',
      ],
      imageUrl: '/images/place-4.jpg',
    },
    {
      title: 'Карелия',
      url: {
        origin: '#',
        text: 'http://vodlozero.ru/',
      },
      description: [
        'Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских национальных парков из-за непроходимых болот никогда не знали топора. Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.',
      ],
      imageUrl: '/images/place-5.jpg',
    },
  ],

  en: [
    {
      title: 'Curonian Spit',
      url: { origin: '#', text: 'park-kosa.ru' },
      description: [
        'Here, in the middle of forests and sand dunes, you can see two water horizons — the calm Curonian Lagoon on one side and the rippling waves of the Baltic Sea on the other. A unique natural area on the edge of the Russian enclave.',
        'The Kaliningrad Region does not end there. For the traveler and explorer, there is the westernmost point of Russia, the Baltic Spit, in the same neighborhood, and the German heritage of placers of small seaside towns. The atmosphere of these places eliminates the hustle and bustle, plunging into the tranquility of nature and the smell of the steel, cool sea.',
      ],
      imageUrl: '/images/place-1.jpg',
    },
    {
      title: 'Kola',
      url: {
        origin: '#',
        text: 'National Geographic',
      },
      description: [
        'Almost the entire peninsula is located beyond the Arctic Circle. The Sami tundra, from which to the south is the taiga, and to the north is the Arctic Ocean, pretending to be the Barents Sea.',
        `You may have watched Zvyagintsev and even heard the story of the Arctic festival in Teriberka. Perhaps the word "Khibiny" did not remain under the snow of school memories of geography lessons. Perhaps you were not interested in the ultra-deep well penetrating the earth's crust, and apathy has been covering you for a long time. But your dream of seeing the Northern lights begins to come true with a ticket to Murmansk.`,
      ],
      imageUrl: '/images/place-2.jpg',
    },
    {
      title: 'Altai',
      url: {
        origin: '#',
        text: 'Facebook',
      },
      description: [
        'Altai is one of the most beautiful places in Russia. First of all, because of the mountains: if you drive along the ridge, you will see slopes strewn with pine trees, mountain rivers and lakes. And if you open the windows in the car, you can get acquainted with the invisible miracle of these places — mountain air.',
        `The climate in Altai is temperate, so it's best to go here in summer. So you will see all the diversity of the local flora and fauna. Moose roam the forests of Altai, eagles fly over the ridges, and roe deer graze on the plains. And the famous manuls are also inhabitants of the Altai Territory.`,
      ],
      imageUrl: '/images/place-3.jpg',
    },
    {
      title: 'Winter Baikal',
      url: {
        origin: '#',
        text: 'https://vk.com/baikalmile',
      },
      description: [
        'Everyone knows Baikal as the largest lake in the world. Many also know that this is the largest source of fresh water and one of the most beautiful places in Russia.',
        'Of course, this is all true. But Baikal is still an ideal place for skioring competitions. This is a kind of sport when a skier ties himself to a motorcycle, and the tandem tries to develop as much speed as possible on the ice. In March 2019, a world record of 197.011 km/h was set at the Baikal Mile Festival.',
      ],
      imageUrl: '/images/place-4.jpg',
    },
    {
      title: 'Karelia',
      url: {
        origin: '#',
        text: 'http://vodlozero.ru/',
      },
      description: [
        'Siberia does not end in the Urals, but in Karelia: Siberian larch, which forms the taiga, does not grow west of the Water Lake. But here it reaches 30 meters — the forests of Karelian national parks have never known an axe because of impassable swamps. Some pines are more than half a millennium old. Touch a living being who saw the sun before Ivan the Terrible saw it. In the virgin forest, you will not find a trail for a hundred kilometers. And on rare paths, trees a couple of meters from the ground are marked with bear claws. So that everyone knows who is the boss here.',
      ],
      imageUrl: '/images/place-5.jpg',
    },
  ],
};

type VideosType = Record<LanguagesType, VideoType[]>;

export const videos: VideosType = {
  ru: [
    {
      imageUrl: '/images/video-preview-1.jpg',
      title: 'Colors of Kamchatka',
      subtitle: 'Director: Pavel Karykhalin',
      videoSource: '/videos/video-1.mp4',
    },

    {
      imageUrl: '/images/video-preview-2.jpg',
      title: 'Обсерватория | Observatory',
      subtitle: 'Director: Alexander Khudokon',
      videoSource: '/videos/video-2.mp4',
    },
  ],

  en: [
    {
      imageUrl: '/images/video-preview-1.jpg',
      title: 'Colors of Kamchatka',
      subtitle: 'Director: Pavel Karykhalin',
      videoSource: '/videos/video-1.mp4',
    },

    {
      imageUrl: '/images/video-preview-2.jpg',
      title: 'Observatory',
      subtitle: 'Director: Alexander Khudokon',
      videoSource: '/videos/video-2.mp4',
    },
  ],
};

type RecommendPlacesType = Record<LanguagesType, RecommendPlaceType[]>;

export const recommendPlaces: RecommendPlacesType = {
  ru: [
    {
      imageUrl: '/images/recommend-place-1.jpg',
      title: 'Новороссийская бухта',
      description:
        'Главный торговый порт не курорт, но море здесь лазурное, и толпы кораблей на рейде. Залюбуешься.',
    },
    {
      imageUrl: '/images/recommend-place-2.jpg',
      title: 'Аракульский шихан',
      description:
        'Даже для Южного Урала, где красиво везде, это пейзаж выдающийся. И там отсутствует несносная мошкá.',
    },
    {
      imageUrl: '/images/recommend-place-3.jpg',
      title: 'Череповец',
      description:
        'Громадный металлургический комбинат на водном пути с Волги в Балтийское море. В нём есть своя красота.',
    },
    {
      imageUrl: '/images/recommend-place-4.jpg',
      title: 'Никола-Ленивец',
      description:
        'Оцените ответ современных художников идолам капища, которое было тут при древнем поселении на реке Угра.',
    },
  ],
  en: [
    {
      imageUrl: '/images/recommend-place-1.jpg',
      title: 'Novorossiysk Bay',
      description: `The main commercial port is not a resort, but the sea here is azure, and there are crowds of ships in the roadstead. You'll admire it.`,
    },
    {
      imageUrl: '/images/recommend-place-2.jpg',
      title: 'Arakul shihan',
      description:
        'Even for the Southern Urals, where it is beautiful everywhere, this landscape is outstanding. And there is no obnoxious midge.',
    },
    {
      imageUrl: '/images/recommend-place-3.jpg',
      title: 'Cherepovets',
      description:
        'A huge metallurgical plant on the waterway from the Volga to the Baltic Sea. It has its own beauty.',
    },
    {
      imageUrl: '/images/recommend-place-4.jpg',
      title: 'Nikola-Lenivets',
      description:
        'Evaluate the response of modern artists to the idols of the temple, which was here at the ancient settlement on the Ugra River.',
    },
  ],
};

type PhotographersType = Record<LanguagesType, PhotographerType[]>;

export const photograhers: PhotographersType = {
  ru: [
    {
      imageUrl: '/images/photographer-1.jpg',
      quote:
        '«Если вам кажется, что в России ничего не происходит, то просто выгляньте “наружу”…»',
      name: 'Виктор Лягушкин',
    },
    {
      imageUrl: '/images/photographer-2.jpg',
      quote:
        '«Если в город едут туристы — неважно за чем они туда едут: за шамбалой или фрески Рублева искать, или на родину Тарковского — туристы обеспечивают любой город молодёжью, рабочими местами и в конечном счёте наполняют его жизнью.»',
      name: 'Иван Хафизов',
    },
    {
      imageUrl: '/images/photographer-3.jpg',
      quote:
        '«Ты приезжаешь, и люди рассказывают тебе, как им плохо. А когда ты покажешь, как им плохо, то ты сволочь и всё очернил.»',
      name: 'Сергей Максимишин',
    },
  ],

  en: [
    {
      imageUrl: '/images/photographer-1.jpg',
      quote:
        '"If it seems to you that nothing is happening in Russia, then just look out..."',
      name: 'Victor Lyagushkin',
    },
    {
      imageUrl: '/images/photographer-2.jpg',
      quote: `"If tourists come to the city — it doesn't matter what they go there for: to look for shambhala or Rublev's frescoes, or to Tarkovsky's homeland — tourists provide any city with youth, jobs and ultimately fill it with life."`,
      name: 'Ivan Hafizov',
    },
    {
      imageUrl: '/images/photographer-3.jpg',
      quote: `"You come, and people tell you how bad they feel. And when you show them how bad it is, then you're a bastard and blackened everything."`,
      name: 'Sergey Maksimishin',
    },
  ],
};

type BlazonriesType = Record<LanguagesType, BlazonryType[]>;

export const blazonries: BlazonriesType = {
  ru: [
    {
      imageUrl: '/images/blazonry-1.png',
      title: 'Великий Новгород',
    },

    {
      imageUrl: '/images/blazonry-2.png',
      title: 'Ростов Великий',
    },

    {
      imageUrl: '/images/blazonry-3.png',
      title: 'Тамбов',
    },

    {
      imageUrl: '/images/blazonry-4.png',
      title: 'Елабуга',
    },

    {
      imageUrl: '/images/blazonry-5.png',
      title: 'Пермь',
    },
  ],

  en: [
    {
      imageUrl: '/images/blazonry-1.png',
      title: 'Veliky Novgorod',
    },

    {
      imageUrl: '/images/blazonry-2.png',
      title: 'Rostov the Great',
    },

    {
      imageUrl: '/images/blazonry-3.png',
      title: 'Tambov',
    },

    {
      imageUrl: '/images/blazonry-4.png',
      title: 'Yelabuga',
    },

    {
      imageUrl: '/images/blazonry-5.png',
      title: 'Perm',
    },
  ],
};
