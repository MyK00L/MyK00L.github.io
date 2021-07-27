"use strict";

const ath =
	[
		{
			"country": "USA",
			"name": "Simone Biles",
			"price": 60,
			"score": 85,
			"id": 0,
			"category": 0
		},
		{
			"country": "CINA",
			"name": "Ou Yushan",
			"price": 40,
			"score": -10,
			"id": 1,
			"category": 0
		},
		{
			"country": "USA",
			"name": "Sunisa Lee",
			"price": 37,
			"score": 105,
			"id": 2,
			"category": 0
		},
		{
			"country": "CINA",
			"name": "Tang Xijing",
			"price": 35,
			"score": 0,
			"id": 3,
			"category": 0
		},
		{
			"country": "FRANCIA",
			"name": "Melanie De jesus Dos Santos",
			"price": 35,
			"score": 0,
			"id": 4,
			"category": 0
		},
		{
			"country": "CINA",
			"name": "Lu Yufei",
			"price": 33,
			"score": 0,
			"id": 5,
			"category": 0
		},
		{
			"country": "RUSSIA",
			"name": "Victoria Listunova",
			"price": 33,
			"score": 0,
			"id": 6,
			"category": 0
		},
		{
			"country": "RUSSIA",
			"name": "Angelina Melnikova",
			"price": 33,
			"score": 120,
			"id": 7,
			"category": 0
		},
		{
			"country": "RUSSIA",
			"name": "Vladislava Urazova",
			"price": 32,
			"score": 0,
			"id": 8,
			"category": 0
		},
		{
			"country": "USA",
			"name": "Jordan chiles",
			"price": 32,
			"score": 0,
			"id": 9,
			"category": 0
		},
		{
			"country": "GIAPPONE",
			"name": "Murakami Mai",
			"price": 30,
			"score": 0,
			"id": 10,
			"category": 0
		},
		{
			"country": "CANADA",
			"name": "Ellie Black",
			"price": 28,
			"score": 50+35,
			"id": 11,
			"category": 0
		},
		{
			"country": "USA",
			"name": "Grace Mccallum",
			"price": 28,
			"score": 0,
			"id": 12,
			"category": 0
		},
		{
			"country": "CANADA",
			"name": "Ava Stewert",
			"price": 25,
			"score": -50-85,
			"id": 13,
			"category": 0
		},
		{
			"country": "CINA",
			"name": "Zhang Jin",
			"price": 25,
			"score": 0,
			"id": 14,
			"category": 0
		},
		{
			"country": "INGHILTERRA",
			"name": "Alice Kinsella",
			"price": 25,
			"score": 0,
			"id": 15,
			"category": 0
		},
		{
			"country": "GIAPPONE",
			"name": "Hatakeda Hitomi",
			"price": 23,
			"score": -45,
			"id": 16,
			"category": 0
		},
		{
			"country": "BELGIO",
			"name": "Nina Derwael",
			"price": 23,
			"score": 65,
			"id": 17,
			"category": 0
		},
		{
			"country": "ITALIA",
			"name": "Vanessa Ferrari",
			"price": 22,
			"score": 50+65,
			"id": 18,
			"category": 0
		},
		{
			"country": "GIAPPONE",
			"name": "Sugihara Aiko",
			"price": 22,
			"score": 0,
			"id": 19,
			"category": 0
		},
		{
			"country": "RUSSIA",
			"name": "Akhaimova Lilia",
			"price": 22,
			"score": 40,
			"id": 20,
			"category": 0
		},
		{
			"country": "INGHILTERRA",
			"name": "Jessica Gadirova",
			"price": 20,
			"score": 55,
			"id": 21,
			"category": 0
		},
		{
			"country": "ITALIA",
			"name": "Martina Maggio",
			"price": 20,
			"score": 30,
			"id": 22,
			"category": 0
		},
		{
			"country": "INGHILTERRA",
			"name": "Jennifer Gadirova",
			"price": 20,
			"score": 0,
			"id": 23,
			"category": 0
		},
		{
			"country": "ITALIA",
			"name": "Asia D'Amato",
			"price": 20,
			"score": 0,
			"id": 24,
			"category": 0
		},
		{
			"country": "FRANCIA",
			"name": "Aline Friess",
			"price": 18,
			"score": 0,
			"id": 25,
			"category": 0
		},
		{
			"country": "FRANCIA",
			"name": "Carolann Heduit",
			"price": 18,
			"score": 0,
			"id": 26,
			"category": 0
		},
		{
			"country": "ITALIA",
			"name": "Alice D'Amato",
			"price": 18,
			"score": 30,
			"id": 27,
			"category": 0
		},
		{
			"country": "INGHILTERRA",
			"name": "Amelie Morgan",
			"price": 17,
			"score": 0,
			"id": 28,
			"category": 0
		},
		{
			"country": "BELGIO",
			"name": "Lisa Vaelen",
			"price": 15,
			"score": 5,
			"id": 29,
			"category": 0
		},
		{
			"country": "GIAPPONE",
			"name": "Hiraiwa Yuna",
			"price": 15,
			"score": 0,
			"id": 30,
			"category": 0
		},
		{
			"country": "BELGIO",
			"name": "Maelysse Brassart",
			"price": 15,
			"score": 0,
			"id": 31,
			"category": 0
		},
		{
			"country": "GERMANIA",
			"name": "Kim Bui",
			"price": 15,
			"score": 0,
			"id": 32,
			"category": 0
		},
		{
			"country": "SPAGNA",
			"name": "Roxana Popa",
			"price": 13,
			"score": -5,
			"id": 33,
			"category": 0
		},
		{
			"country": "CANADA",
			"name": "Shallon Olsen",
			"price": 13,
			"score": 0,
			"id": 34,
			"category": 0
		},
		{
			"country": "CANADA",
			"name": "Brooklyn Moors",
			"price": 13,
			"score": 10,
			"id": 35,
			"category": 0
		},
		{
			"country": "GERMANIA",
			"name": "Sarah Voss",
			"price": 13,
			"score": 5,
			"id": 36,
			"category": 0
		},
		{
			"country": "OLANDA",
			"name": "Sanne Wevers",
			"price": 13,
			"score": 50-35,
			"id": 37,
			"category": 0
		},
		{
			"country": "BELGIO",
			"name": "Jutta Verkest",
			"price": 12,
			"score": 0,
			"id": 38,
			"category": 0
		},
		{
			"country": "GERMANIA",
			"name": "Elisabeth Seitz",
			"price": 12,
			"score": 50+115,
			"id": 39,
			"category": 0
		},
		{
			"country": "SPAGNA",
			"name": "Laura Bechdeju",
			"price": 10,
			"score": 0,
			"id": 40,
			"category": 0
		},
		{
			"country": "OLANDA",
			"name": "Vera Van Pol",
			"price": 10,
			"score": 0,
			"id": 41,
			"category": 0
		},
		{
			"country": "SPAGNA",
			"name": "Alba Petisco",
			"price": 10,
			"score": 0,
			"id": 42,
			"category": 0
		},
		{
			"country": "FRANCIA",
			"name": "Marine Boyer",
			"price": 8,
			"score": -35,
			"id": 43,
			"category": 0
		},
		{
			"country": "SPAGNA",
			"name": "Marina Gonzales",
			"price": 8,
			"score": 0,
			"id": 44,
			"category": 0
		},
		{
			"country": "OLANDA",
			"name": "Eythora Thorsdottir",
			"price": 7,
			"score": -55,
			"id": 45,
			"category": 0
		},
		{
			"country": "GERMANIA",
			"name": "Pauline Schaefer",
			"price": 7,
			"score": -20,
			"id": 46,
			"category": 0
		},
		{
			"country": "OLANDA",
			"name": "Lieke Wevers",
			"price": 5,
			"score": 50+10,
			"id": 47,
			"category": 0
		},
		{
			"country": "USA",
			"name": "Skinner Mykayla",
			"price": 35,
			"score": 10,
			"id": 48,
			"category": 1
		},
		{
			"country": "ROMANIA",
			"name": "Iordache Larisa",
			"price": 28,
			"score": -100+50,
			"id": 49,
			"category": 1
		},
		{
			"country": "BRASILE",
			"name": "Andrade Rebeca",
			"price": 27,
			"score": 75,
			"id": 50,
			"category": 1
		},
		{
			"country": "USA",
			"name": "Carey Jade",
			"price": 25,
			"score": 0,
			"id": 51,
			"category": 1
		},
		{
			"country": "CINA",
			"name": "Guan Chenchen",
			"price": 25,
			"score": 0,
			"id": 52,
			"category": 1
		},
		{
			"country": "RUSSIA",
			"name": "Elena Gerasimova",
			"price": 22,
			"score": 0,
			"id": 53,
			"category": 1
		},
		{
			"country": "BRASILE",
			"name": "Saravia Flavia",
			"price": 20,
			"score": -100+20,
			"id": 54,
			"category": 1
		},
		{
			"country": "UNGHERIA",
			"name": "Kovacs Zsofia",
			"price": 18,
			"score": 35,
			"id": 55,
			"category": 1
		},
		{
			"country": "AUSTRIALIA",
			"name": "Godwin Georgia",
			"price": 17,
			"score": 0,
			"id": 56,
			"category": 1
		},
		{
			"country": "KOREA",
			"name": "Seojeong Yeo",
			"price": 17,
			"score": 0,
			"id": 57,
			"category": 1
		},
		{
			"country": "SVIZZERA",
			"name": "Steingruber Giulia",
			"price": 13,
			"score": 50+5,
			"id": 58,
			"category": 1
		},
		{
			"country": "UCRAINA",
			"name": "Varinska Diana",
			"price": 13,
			"score": 0,
			"id": 59,
			"category": 1
		},
		{
			"country": "MESSICO",
			"name": "Moreno Alexa",
			"price": 12,
			"score": 0,
			"id": 60,
			"category": 1
		},
		{
			"country": "KOREA",
			"name": "Lee Yunseo",
			"price": 10,
			"score": 0,
			"id": 61,
			"category": 1
		},
		{
			"country": "CUBA",
			"name": "Vidiaux Marcia",
			"price": 10,
			"score": 0,
			"id": 62,
			"category": 1
		},
		{
			"country": "PORTOGALLO",
			"name": "Martins Filipa",
			"price": 10,
			"score": 0,
			"id": 63,
			"category": 1
		},
		{
			"country": "ARGENTINA",
			"name": "Magistrati Abigail",
			"price": 8,
			"score": 0,
			"id": 64,
			"category": 1
		},
		{
			"country": "ITALIA",
			"name": "Lara Mori",
			"price": 8,
			"score": -45,
			"id": 65,
			"category": 1
		},
		{
			"country": "SVEZIA",
			"name": "Adlerteg Jonna",
			"price": 8,
			"score": 50,
			"id": 66,
			"category": 1
		},
		{
			"country": "CINA",
			"name": "Fan Yilin",
			"price": 8,
			"score": 65,
			"id": 67,
			"category": 1
		},
		{
			"country": "RUSSIA",
			"name": "Ilyankova Anastasia",
			"price": 8,
			"score": 50,
			"id": 68,
			"category": 1
		},
		{
			"country": "GIAPPONE",
			"name": "Ashikawa Urara",
			"price": 8,
			"score": 0,
			"id": 69,
			"category": 1
		},
		{
			"country": "ROMANIA",
			"name": "Holbura Maria",
			"price": 7,
			"score": 0,
			"id": 70,
			"category": 1
		},
		{
			"country": "AUSTRALIA",
			"name": "Whitehead Emily",
			"price": 5,
			"score": 0,
			"id": 71,
			"category": 1
		},
		{
			"country": "ISRAELE",
			"name": "Raz Lihie",
			"price": 5,
			"score": 0,
			"id": 72,
			"category": 1
		},
		{
			"country": "AZERBAIGIAN",
			"name": "Nekrasova Marina",
			"price": 5,
			"score": 0,
			"id": 73,
			"category": 1
		},
		{
			"country": "MALAYSIA",
			"name": "Abdul Hadi Farah Ann",
			"price": 5,
			"score": 50-10,
			"id": 74,
			"category": 1
		},
		{
			"country": "TURCHIA",
			"name": "Savranbasi Nazli",
			"price": 5,
			"score": 0,
			"id": 75,
			"category": 1
		},
		{
			"country": "REPUBBLICA CECA",
			"name": "Holasova Aneta",
			"price": 3,
			"score": -40,
			"id": 76,
			"category": 1
		},
		{
			"country": "SUDAFRICA",
			"name": "Daries Naveen",
			"price": 3,
			"score": 0,
			"id": 77,
			"category": 1
		},
		{
			"country": "SUDAFRICA",
			"name": "Rooskrantz Caitilin",
			"price": 3,
			"score": 0,
			"id": 78,
			"category": 1
		},
		{
			"country": "INDIA",
			"name": "Nayak Pranati",
			"price": 3,
			"score": 0,
			"id": 79,
			"category": 1
		},
		{
			"country": "PERÚ",
			"name": "Orrego Ariana",
			"price": 3,
			"score": 0,
			"id": 80,
			"category": 1
		},
		{
			"country": "JAMAICA",
			"name": "Francis Danusia",
			"price": 3,
			"score": 50-45,
			"id": 81,
			"category": 1
		},
		{
			"country": "POLONIA",
			"name": "Janik Gabriela",
			"price": 3,
			"score": 0,
			"id": 82,
			"category": 1
		},
		{
			"country": "CILE",
			"name": "Castro Simona",
			"price": 3,
			"score": 0,
			"id": 83,
			"category": 1
		},
		{
			"country": "COSTA RICA",
			"name": "Alvarado Luciana",
			"price": 3,
			"score": 0,
			"id": 84,
			"category": 1
		},
		{
			"country": "TAIPEI",
			"name": "Ting Hua-Tien",
			"price": 3,
			"score": 0,
			"id": 85,
			"category": 1
		},
		{
			"country": "EGITTO",
			"name": "Mohamed Mandy",
			"price": 3,
			"score": -65,
			"id": 86,
			"category": 1
		},
		{
			"country": "SRI LANKA",
			"name": "Elpitiya Milka",
			"price": 3,
			"score": 0,
			"id": 87,
			"category": 1
		},
		{
			"country": "AUSTRIA",
			"name": "Haemmerle Elisa",
			"price": 3,
			"score": 0,
			"id": 88,
			"category": 1
		},
		{
			"country": "UZBEKISTAN",
			"name": "Chusovitina Oksana",
			"price": 3,
			"score": 50-40,
			"id": 89,
			"category": 1
		},
		{
			"country": "SINGAPORE",
			"name": "Tan Sze En",
			"price": 3,
			"score": 0,
			"id": 90,
			"category": 1
		},
		{
			"country": "IRLANDA",
			"name": "Ryan Megan",
			"price": 2,
			"score": 0,
			"id": 91,
			"category": 1
		},
		{
			"country": "NORVEGIA",
			"name": "Erichsen Julie",
			"price": 2,
			"score": 0,
			"id": 92,
			"category": 1
		},
		{
			"country": "CROAZIA",
			"name": "Derek Ana",
			"price": 2,
			"score": 0,
			"id": 93,
			"category": 1
		},
		{
			"country": "SLOVACCHIA",
			"name": "Mokosova Barbora",
			"price": 2,
			"score": 0,
			"id": 94,
			"category": 1
		},
		{
			"country": "EGITTO",
			"name": "Ibrahim Zeina",
			"price": 2,
			"score": 0,
			"id": 95,
			"category": 1
		},
		{
			"country": "ISOLE CAYMAN",
			"name": "Rutty Raegan",
			"price": 1,
			"score": -85,
			"id": 96,
			"category": 1
		},
		{
			"country": "BIELORUSSIA",
			"name": "Traukova Hanna",
			"price": 1,
			"score": -80,
			"id": 97,
			"category": 1
		}
	]
