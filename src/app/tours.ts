import { Tour } from "./tour";

const LondonAirport: Tour = {
  id: 1,
  name: "London Airport",
  description: "The place of big Ben",
  videoLink: "https://www.youtube.com/embed/D9RNJsFo4PU",
  moreinfo: "https://en.wikipedia.org/wiki/LondonAirport",
  steps: null
};

const KathmanduAirport: Tour = {
  id: 1,
  name: "Kathmandu Airport",
  description: "Gateway to Himalayas",
  videoLink: "https://www.youtube.com/embed/TJVEl21XEXY",
  moreinfo: "https://en.wikipedia.org/wiki/KathmanduAirport",
  steps: null
};

const DhangadhiAirport: Tour = {
  id: 1,
  name: "Dhangadhi Airport",
  description: "Central hub of the farwest.",
  videoLink: "https://www.youtube.com/embed/HlbmBz8TnOU",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null
};

const KathmanduCity: Tour = {
  id: 1,
  name: "Kathmandu City",
  description: "Capital city of Nepal",
  videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null
};

const DhangadhiCity: Tour = {
  id: 1,
  name: "Dhangadhi City",
  description: "Heaet of far-west",
  videoLink: "https://www.youtube.com/embed/GqgDjKvw4z0",
  moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
  steps: null
};

const Soaltee: Tour = {
  id: 1,
  name: "Hotel Soaltee",
  description: "Crown in the city.",
  videoLink: "https://www.youtube.com/embed/_X1XqcWpuMI",
  moreinfo: "http://soalteehotel.com/",
  steps: null
};

const Sathi: Tour = {
  id: 1,
  name: "Hotel Sathi",
  description: "Friendship realized here.",
  videoLink: "https://www.youtube.com/embed/p5BSFCW_rbc",
  moreinfo: "http://www.hotelsaathinepal.com/#/home",
  steps: null
};

const ChitawanAirport: Tour = {
  id: 1,
  name: "Chitawan",
  description: "plains and crosswalk",
  videoLink: "https://www.youtube.com/embed/sx6bKP1ONKU",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const Kanyam: Tour = {
  id: 1,
  name: "Kanyam",
  description: "No place like this.",
  videoLink: "https://www.youtube.com/embed/1aNlGefUUWA",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const Hetauda: Tour = {
  id: 1,
  name: "Hetauda",
  description: "Hetauda place like this.",
  videoLink: "https://www.youtube.com/embed/1aNlGefUUWA",
  moreinfo: "https://en.wikipedia.org/wiki/Chitwan_District",
  steps: null
};

const KathmanduSteps: Tour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  Soaltee
];

const DhangadhiSteps: Tour[] = [
  LondonAirport,
  KathmanduAirport,
  DhangadhiAirport,
  DhangadhiCity,
  Sathi
];

const IlamSteps: Tour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  ChitawanAirport,
  Kanyam
];

const HetaudaSteps: Tour[] = [
  LondonAirport,
  KathmanduAirport,
  KathmanduCity,
  ChitawanAirport,
  Hetauda
];

export const Tours: Tour[] = [
  {
    id: 1,
    name: "Kathmandu",
    description: "A large phone with one of the best screens",
    videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: KathmanduSteps
  },
  {
    id: 2,
    name: "Dhangadhi",
    description: "A great phone with one of the best cameras",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    videoLink: "https://www.youtube.com/embed/DJlmVOSEvGA",
    steps: DhangadhiSteps
  },
  {
    id: 3,
    name: "Ilam",
    description: "Ilam",
    videoLink: "https://www.youtube.com/watch?v=DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: IlamSteps
  },
   {
    id: 4,
    name: "Hetauda",
    description: "Hetauda",
    videoLink: "https://www.youtube.com/watch?v=DJlmVOSEvGA",
    moreinfo: "https://en.wikipedia.org/wiki/Dhangadhi",
    steps: HetaudaSteps
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
