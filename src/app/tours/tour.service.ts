import { Injectable } from '@angular/core';
import { ITour } from '../tour';


const LondonAirport: ITour = {
  id: 1,
  name: "London Airport",
  description: "The place of big Ben",
  videoLink: "https://www.youtube.com/embed/D9RNJsFo4PU",
  moreinfo: "https://en.wikipedia.org/wiki/LondonAirport",
  steps: null
};

const KathmanduAirport: ITour = {
  id: 1,
  name: "Kathmandu Airport",
  description: "Gateway to Himalayas",
  videoLink: "https://www.youtube.com/embed/TJVEl21XEXY",
  moreinfo: "https://en.wikipedia.org/wiki/KathmanduAirport",
  steps: null
};

const DhangadhiAirport: ITour = {
  id: 1,
  name: "Dhangadhi Airport",
  description: "Central hub of the farwest.",
  videoLink: "https://www.youtube.com/embed/HlbmBz8TnOU",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null
};

const KathmanduCity: ITour = {
  id: 1,
  name: "Kathmandu City",
  description: "Capital city of Nepal",
  videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null,
  imageSource: [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lonelyplanet.com%2Fnepal%2Fkathmandu&psig=AOvVaw0DvCYR00BqnN8ZUXxbATA_&ust=1614916982015000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjKotrgle8CFQAAAAAdAAAAABAI"
  ]
};

const DhangadhiCity: ITour = {
  id: 1,
  name: "Dhangadhi City",
  description: "Heart of far-west",
  videoLink: "https://www.youtube.com/embed/GqgDjKvw4z0",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null
};

const Soaltee: ITour = {
  id: 1,
  name: "Hotel Soaltee",
  description: "Crown in the city.",
  videoLink: "https://www.youtube.com/embed/_X1XqcWpuMI",
  moreinfo: "http://soalteehotel.com/",
  steps: null
};

const Sathi: ITour = {
  id: 1,
  name: "Hotel Sathi",
  description: "Friendship realized here.",
  videoLink: "https://www.youtube.com/embed/p5BSFCW_rbc",
  moreinfo: "http://www.hotelsaathinepal.com/#/home",
  steps: null
};

const ChitawanAirport: ITour = {
  id: 1,
  name: "Chitawan",
  description: "plains and crosswalk",
  videoLink: "https://www.youtube.com/embed/sx6bKP1ONKU",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const Kanyam: ITour = {
  id: 1,
  name: "Kanyam",
  description: "No place like this.",
  videoLink: "https://www.youtube.com/embed/1aNlGefUUWA",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const Hetauda: ITour = {
  id: 1,
  name: "Hetauda",
  description: "Hetauda place like this.",
  videoLink: "https://www.youtube.com/embed/1aNlGefUUWA",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const KathmanduSteps: ITour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  Soaltee
];

const DhangadhiSteps: ITour[] = [
  LondonAirport,
  KathmanduAirport,
  DhangadhiAirport,
  DhangadhiCity,
  Sathi
];

const IlamSteps: ITour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  ChitawanAirport,
  Kanyam
];

const HetaudaSteps: ITour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  ChitawanAirport,
  Hetauda
];

const Tours: ITour[] = [
  {
    id: 1,
    name: "Kathmandu",
    description: "A melting pot of Hindu and Buddism",
    videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: KathmanduSteps,
    imageSource: [
      "https://www.welcomenepal.com/uploads/destination/kathmandu-oy-lt2.jpeg"
    ],
    rating:4
  },
  {
    id: 2,
    name: "Dhangadhi",
    description: "Foothills of the Himalaya",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
    steps: DhangadhiSteps,
    imageSource: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/Dhangadhi1.jpg"
    ],
    rating:5
  },
  {
    id: 3,
    name: "Ilam",
    description: "Hills, Tea and Garden",
    videoLink: "https://www.youtube.com/watch?v=DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: IlamSteps,
    imageSource: [
      "http://www.hiketonepal.com/wp-content/uploads/bfi_thumb/Tea-Garden-msp8tklevf2nlow9zzlqe4xgp19gi03dj2oi6knci0.jpg"
    ],
    rating:3
  },
  {
    id: 4,
    name: "Hetauda",
    description: "Hetauda - the gateway to the hills",
    videoLink: "https://www.youtube.com/watch?v=DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: HetaudaSteps,
    imageSource: ["https://nepaltraveller.com/uploads/destination/hetauda.jpg"],
    rating:2

  }
];
/**
 * Tour service
 * Encapsulates data access
 */
 @Injectable({
  providedIn: 'root'
})
export class TourService {

  getTours(): ITour[] {
    return Tours; 

  }



  constructor() { }
}
