import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


const data: Record<string, Record<string, string[]>> = {
  "Amazonas": {
    "Chachapoyas": [
      "Chachapoyas",
      "Asunción",
      "Balsas",
      "Cheto",
      "Chiliquin",
      "Chuquibamba",
      "Granada",
      "Huancas",
      "La Jalca",
      "Leimebamba",
      "Levanto",
      "Magdalena",
      "Mariscal Castilla",
      "Molinopampa",
      "Montevideo",
      "Olleros",
      "Quinjalca",
      "San Francisco de Daguas",
      "San Isidro de Maino",
      "Soloco",
      "Sonche"
    ],
    "Bagua": [
      "Bagua",
      "Aramango",
      "Copallin",
      "El Parco",
      "Imaza",
      "La Peca"
    ],
    "Bongará": [
      "Jumbilla",
      "Chisquilla",
      "Churuja",
      "Corosha",
      "Cuispes",
      "Florida",
      "Nieva",
      "San Carlos",
      "Shipasbamba",
      "Valera",
      "Yambrasbamba"
    ],
    "Condorcanqui": [
      "Nauta",
      "Parinari",
      "Tigre",
      "Trompeteros",
      "Urarinas"
    ],
    "Luya": [
      "Lamud",
      "Camporredondo",
      "Cocabamba",
      "Colcamar",
      "Conila",
      "Inguilpata",
      "Longuita",
      "Lonya Chico",
      "Luya",
      "Luya Viejo",
      "María",
      "Ocalli",
      "Ocumal",
      "Pisuquia",
      "Providencia",
      "San Cristóbal",
      "San Francisco del Yeso",
      "San Jerónimo",
      "San Juan de Lopecancha",
      "Santa Catalina",
      "Santo Tomas",
      "Tingo",
      "Trita"
    ],
    "Rodríguez de Mendoza": [
      "Mendoza",
      "San Nicolás",
      "Chirimoto",
      "Cochamal",
      "Huambo",
      "Limabamba",
      "Longar",
      "Mariscal Benavides",
      "Milpuc",
      "Omia",
      "Santa Rosa",
      "Totora",
      "Vista Alegre"
    ],
    "Utcubamba": [
      "Bagua Grande",
      "Cajaruro",
      "Cumba",
      "El Milagro",
      "Jamalca",
      "Lonya Grande",
      "Yamon"
    ]
  },
  "Ancash": {
    "Huaraz": [
      "Huaraz",
      "Cochabamba",
      "Colcabamba",
      "Huanchay",
      "Independencia",
      "Jangas",
      "La Libertad",
      "Olleros",
      "Pampas Grande",
      "Pariacoto",
      "Pira",
      "Tarica"
    ],
    "Aija": [
      "Aija",
      "Coris",
      "Huacllan",
      "La Merced",
      "Succha"
    ],
    "Antonio Raymondi": [
      "Llamellin",
      "Aczo",
      "Chaccho",
      "Chingas",
      "Mirgas",
      "San Juan de Rontoy"
    ],
    "Asunción": [
      "Chacas",
      "Acochaca"
    ],
    "Bolognesi": [
      "Chiquian",
      "Abelardo Pardo Lezameta",
      "Antonio Raymondi",
      "Aquia",
      "Cajacay",
      "Canis",
      "Colquioc",
      "Huallanca",
      "Huasta",
      "Huayllacayan",
      "La Primavera",
      "Mangas",
      "Pacllon",
      "San Miguel de Corpanqui",
      "Ticllos"
    ],
    "Carhuaz": [
      "Carhuaz",
      "Acopampa",
      "Amashca",
      "Anta",
      "Ataquero",
      "Marcara",
      "Pariahuanca",
      "San Miguel de Aco",
      "Shilla",
      "Tinco",
      "Yungar"
    ],
    "Carlos Fermín Fitzcarrald": [
      "San Luis",
      "San Nicolás",
      "Yauya"
    ],
    "Casma": [
      "Casma",
      "Buena Vista Alta",
      "Comandante Noel",
      "Yautan"
    ],
    "Corongo": [
      "Corongo",
      "Aco",
      "Bambas",
      "Cusca",
      "La Pampa",
      "Yanac",
      "Yupan"
    ],
    "Huari": [
      "Huari",
      "Anra",
      "Cajay",
      "Chavin de Huantar",
      "Huacachi",
      "Huacchis",
      "Huachis",
      "Huantar",
      "Masin",
      "Paucas",
      "Ponto",
      "Rahuapampa",
      "Rapayan",
      "San Marcos",
      "San Pedro de Chana"
    ],
    "Huarmey": [
      "Huarmey",
      "Cochapeti",
      "Culebras",
      "Huayan",
      "Malvas"
    ],
    "Huaylas": [
      "Caraz",
      "Huallanca",
      "Huata",
      "Huaylas",
      "Mato",
      "Pamparomas",
      "Pueblo Libre",
      "Santa Cruz",
      "Santo Toribio",
      "Yuracmarca"
    ],
    "Mariscal Luzuriaga": [
      "Piscobamba",
      "Casca",
      "Eleazar Guzmán Barron",
      "Fidel Olivas Escudero",
      "Llama",
      "Llumpa",
      "Lucma",
      "Musga",
      "Ocros",
      "San Cristóbal de Rajan",
      "San Pedro",
      "Santiago de Chilcas"
    ],
    "Ocros": [
      "Ocros",
      "Acas",
      "Cajamarquilla",
      "Carhuapampa",
      "Cochas",
      "Congas",
      "Llipa",
      "San Cristóbal",
      "San Pedro",
      "Santiago de Chilcas"
    ],
    "Pallasca": [
      "Cabana",
      "Bolognesi",
      "Conchucos",
      "Huacaschuque",
      "Huandoval",
      "Lacabamba",
      "Llapo",
      "Pallasca",
      "Pampas",
      "Santa Rosa",
      "Tauca",
      "Yuracmarca"
    ],
    "Pomabamba": [
      "Pomabamba",
      "Huayllan",
      "Parobamba",
      "Quinuabamba"
    ],
    "Recuay": [
      "Recuay",
      "Catac",
      "Cotaparaco",
      "Huayllapampa",
      "Llacllin",
      "Marca",
      "Pampas Chico",
      "Pararin",
      "Tapacocha",
      "Ticapampa"
    ],
    "Santa": [
      "Chimbote",
      "Cáceres del Perú",
      "Coishco",
      "Macate",
      "Moro",
      "Nepeña",
      "Samanco",
      "Santa",
      "Nuevo Chimbote"
    ],
    "Sihuas": [
      "Sihuas",
      "Acobamba",
      "Alfonso Ugarte",
      "Cashapampa",
      "Chingalpo",
      "Huayllabamba",
      "Quiches",
      "Ragash",
      "San Juan",
      "Sicsibamba"
    ],
    "Yungay": [
      "Yungay",
      "Cascapara",
      "Mancos",
      "Matacoto",
      "Quillo",
      "Ranrahirca",
      "Shupluy",
      "Yanama"
    ]
  },
  "Apurimac": {
    "Abancay": [
      "Abancay",
      "Chacoche",
      "Circa",
      "Curahuasi",
      "Huanipaca",
      "Lambrama",
      "Pichirhua",
      "San Pedro de Cachora",
      "Tamburco"
    ],
    "Andahuaylas": [
      "Andahuaylas",
      "Andarapa",
      "Chiara",
      "Huancarama",
      "Huancaray",
      "Huayana",
      "Kishuara",
      "Pacobamba",
      "Pacucha",
      "Pampachiri",
      "Pomacocha",
      "San Antonio de Cachi",
      "San Jerónimo",
      "San Miguel de Chaccrampa",
      "Santa María de Chicmo",
      "Talavera",
      "Tumay Huaraca"
    ],
    "Antabamba": [
      "Antabamba",
      "El Oro",
      "Huaquirca",
      "Juan Espinoza Medrano",
      "Oropesa",
      "Pachaconas",
      "Sabaino"
    ],
    "Aymaraes": [
      "Chalhuanca",
      "Capaya",
      "Caraybamba",
      "Chapimarca",
      "Colcabamba",
      "Cotaruse",
      "Huayllo",
      "Justo Apu Sahuaraura",
      "Lucre",
      "Pocohuanca",
      "San Juan de Chacña",
      "Sañayca",
      "Soraya",
      "Tapairihua",
      "Tintay"
    ],
    "Cotabambas": [
      "Tambobamba",
      "Cotabambas",
      "Coyllurqui",
      "Haquira",
      "Mara"
    ],
    "Grau": [
      "Chuquibambilla",
      "Curpahuasi",
      "Grau",
      "Huayllati",
      "Mamara",
      "Mariscal Gamarra",
      "Micaela Bastidas",
      "Pataypampa",
      "Progreso",
      "San Antonio",
      "Santa Rosa",
      "Turpay",
      "Vilcabamba",
      "Virundo"
    ]
  },
  "Arequipa": {
    "Arequipa": [
      "Arequipa",
      "Alto Selva Alegre",
      "Cayma",
      "Cerro Colorado",
      "Characato",
      "Chiguata",
      "Jacobo Hunter",
      "La Joya",
      "Mariano Melgar",
      "Miraflores",
      "Mollebaya",
      "Paucarpata",
      "Pocsi",
      "Polobaya",
      "Quequeña",
      "Sabandia",
      "Sachaca",
      "San Juan de Siguas",
      "San Juan de Tarucani",
      "Santa Isabel de Siguas",
      "Santa Rita de Siguas",
      "Socabaya",
      "Tiabaya",
      "Uchumayo",
      "Vitor",
      "Yanahuara",
      "Yarabamba",
      "Yura",
      "José Luis Bustamante y Rivero"
    ],
    "Camaná": [
      "Camaná",
      "José María Quimper",
      "Mariano Nicolás Valcárcel",
      "Mariscal Cáceres",
      "Nicolás de Piérola",
      "Ocoña",
      "Quilca",
      "Samuel Pastor"
    ],
    "Caravelí": [
      "Caravelí",
      "Acari",
      "Atico",
      "Atiquipa",
      "Bella Unión",
      "Cahuacho",
      "Chala",
      "Chaparra",
      "Huanuhuanu",
      "Jaqui",
      "Lomas",
      "Quicacha",
      "Yauca"
    ],
    "Castilla": [
      "Aplao",
      "Andagua",
      "Ayo",
      "Chachas",
      "Chilcaymarca",
      "Choco",
      "Huancarqui",
      "Machaguay",
      "Orcopampa",
      "Pampacolca",
      "Tipan",
      "Uñon",
      "Uraca",
      "Viraco"
    ],
    "Caylloma": [
      "Chivay",
      "Achoma",
      "Cabanaconde",
      "Callalli",
      "Caylloma",
      "Coporaque",
      "Huambo",
      "Huanca",
      "Ichupampa",
      "Lari",
      "Lluta",
      "Maca",
      "Madrigal",
      "San Antonio de Chuca",
      "Sibayo",
      "Tapay",
      "Tisco",
      "Tuti",
      "Yanque"
    ],
    "Condesuyos": [
      "Chuquibamba",
      "Andaray",
      "Cayarani",
      "Chichas",
      "Iray",
      "Río Grande",
      "Salamanca",
      "Yanaquihua"
    ],
    "Islay": [
      "Mollendo",
      "Cocachacra",
      "Dean Valdivia",
      "Islay",
      "Mejía",
      "Punta de Bombón"
    ],
    "La Unión": [
      "Cotahuasi",
      "Alca",
      "Charcana",
      "Huaynacotas",
      "Pampamarca",
      "Puyca",
      "Quechualla",
      "Sayla",
      "Tauria",
      "Tomepampa",
      "Toro"
    ]
  },
  "Ayacucho": {
    "Huamanga": [
      "Ayacucho",
      "Acocro",
      "Acos Vinchos",
      "Carmen Alto",
      "Chiara",
      "Ocros",
      "Pacaycasa",
      "Quinua",
      "San José de Ticllas",
      "San Juan Bautista",
      "Santiago de Pischa",
      "Socos",
      "Tambillo",
      "Vinchos",
      "Jesús Nazareno"
    ],
    "Cangallo": [
      "Cangallo",
      "Chuschi",
      "Los Morochucos",
      "María Parado de Bellido",
      "Paras",
      "Totos"
    ],
    "Huanca Sancos": [
      "Sancos",
      "Carapo",
      "Sacsamarca",
      "Santiago de Lucanamarca"
    ],
    "Huanta": [
      "Huanta",
      "Ayahuanco",
      "Huamanguilla",
      "Iguain",
      "Llochegua",
      "Luricocha",
      "Santillana",
      "Sivia",
      "San Miguel",
      "Uchuraccay",
      "Pucacolpa",
      "Chaca",
      "La Mar"
    ],
    "La Mar": [
      "San Miguel",
      "Anco",
      "Ayna",
      "Chilcas",
      "Chungui",
      "Luis Carranza",
      "Santa Rosa",
      "Tambo",
      "Samugari",
      "Uchuraccay",
      "Anchihuay"
    ],
    "Lucanas": [
      "Puquio",
      "Aucara",
      "Cabana",
      "Carmen Salcedo",
      "Chaviña",
      "Chipao",
      "Huac-Huas",
      "Laramate",
      "Leoncio Prado",
      "Llauta",
      "Lucanas",
      "Ocaña",
      "Otoca",
      "Saisa",
      "San Cristóbal",
      "San Juan",
      "San Pedro",
      "San Pedro de Palco",
      "Sancos",
      "Santa Ana de Huaycahuacho",
      "Santa Lucia"
    ],
    "Parinacochas": [
      "Coracora",
      "Chumpi",
      "Coronel Castañeda",
      "Pacapausa",
      "Pullo",
      "Puyusca",
      "San Francisco de Ravacayco",
      "Upahuacho"
    ],
    "Paucar del Sara Sara": [
      "Pausa",
      "Colta",
      "Corculla",
      "Lampa",
      "Marcabamba",
      "Oyolo",
      "Pararca",
      "San Javier de Alpabamba",
      "San José de Ushua",
      "Sara Sara"
    ],
    "Sucre": [
      "Querobamba",
      "Belén",
      "Chalcos",
      "Chilcayoc",
      "Huacaña",
      "Morcolla",
      "Paico",
      "San Pedro de Larcay"
    ],
    "Víctor Fajardo": [
      "Huancapi",
      "Alcamenca",
      "Apongo",
      "Asquipata",
      "Canaria",
      "Cayara",
      "Colca",
      "Huamanquiquia",
      "Huancaraylla",
      "Hualla",
      "Sarhua",
      "Vilcanchos"
    ],
    "Vilcas Huamán": [
      "Vilcas Huamán",
      "Accomarca",
      "Carhuanca",
      "Concepción",
      "Huambalpa",
      "Independencia",
      "Saurama",
      "Vischongo"
    ]
  },
  "Cajamarca": {
    "Cajamarca": [
      "Cajamarca",
      "Asunción",
      "Chetilla",
      "Cospan",
      "Encañada",
      "Jesús",
      "Llacanora",
      "Los Baños del Inca",
      "Magdalena",
      "Matara",
      "Namora",
      "San Juan",
      "San Pedro",
      "Santiago de Cao",
      "Sitacocha"
    ],
    "Cajabamba": [
      "Cajabamba",
      "Cachachi",
      "Condebamba",
      "Sitacocha",
      "Sorochuco"
    ],
    "Celendín": [
      "Celendín",
      "Chumuch",
      "Cortegana",
      "Huasmin",
      "Jorge Chávez",
      "José Gálvez",
      "Miguel Iglesias",
      "Oxamarca",
      "Sorochuco",
      "Sucre"
    ],
    "Chota": [
      "Chota",
      "Anguia",
      "Chadin",
      "Chalamarca",
      "Chiguirip",
      "Chimban",
      "Choropampa",
      "Cochabamba",
      "Conchan",
      "Huambos",
      "Lajas",
      "Llama",
      "Miracosta",
      "Paccha",
      "Pion",
      "Querocoto",
      "San Juan de Licupis",
      "Tacabamba",
      "Tocmoche",
      "Chalamarca"
    ],
    "Contumazá": [
      "Contumazá",
      "Chilete",
      "Cupisnique",
      "Guzmango",
      "San Benito",
      "Santa Cruz de Toledo",
      "Tantarica",
      "Yonan"
    ],
    "Cutervo": [
      "Cutervo",
      "Callayuc",
      "Choros",
      "Cujillo",
      "La Ramada",
      "Pimpingos",
      "Querocotillo",
      "San Andrés de Cutervo",
      "San Juan de Cutervo",
      "San Luis de Lucma",
      "Santa Cruz",
      "Santo Domingo de la Capilla",
      "Santo Tomás",
      "Socota",
      "Toribio Casanova"
    ],
    "Hualgayoc": [
      "Bambamarca",
      "Chugur",
      "Hualgayoc"
    ],
    "Jaén": [
      "Jaén",
      "Bellavista",
      "Chontali",
      "Colasay",
      "Huabal",
      "Las Pirias",
      "Pomahuaca",
      "Pucara",
      "Sallique",
      "San Felipe",
      "San José del Alto",
      "Santa Rosa",
      "Santo Tomás",
      "Yambrasbamba"
    ],
    "San Ignacio": [
      "San Ignacio",
      "Chirinos",
      "Huarango",
      "La Coipa",
      "Namballe",
      "San José de Lourdes",
      "Tabaconas"
    ],
    "San Marcos": [
      "Pedro Gálvez",
      "Chancay",
      "Eduardo Villanueva",
      "Gregorio Pita",
      "Ichocan",
      "José Manuel Quiroz",
      "José Sabogal",
      "San Miguel de Pallaques",
      "San Silvestre de Cochan",
      "Santiago de Challas"
    ],
    "San Miguel": [
      "San Miguel",
      "Bolívar",
      "Calquis",
      "Catilluc",
      "El Prado",
      "La Florida",
      "Llapa",
      "Nanchoc",
      "Niepos",
      "San Gregorio",
      "Tongod"
    ],
    "San Pablo": [
      "San Pablo",
      "San Bernardino",
      "San Luis",
      "Tumbaden"
    ],
    "Santa Cruz": [
      "Santa Cruz",
      "Andabamba",
      "Catache",
      "Chancaybaños",
      "La Esperanza",
      "Ninabamba",
      "Pulan",
      "Saucepampa",
      "Sexi",
      "Uticyacu",
      "Yauyucan"
    ]
  },
  "Callao": {
    "Callao": [
      "Bellavista",
      "Callao",
      "Carmen de la Legua Reynoso",
      "La Perla",
      "La Punta",
      "Mi Perú",
      "Ventanilla"
    ]
  },
  "Cusco": {
    "Cusco": [
      "Cusco",
      "Ccorca",
      "Poroy",
      "San Jerónimo",
      "San Sebastián",
      "Santiago",
      "Saylla",
      "Wanchaq"
    ],
    "Acomayo": [
      "Acomayo",
      "Acopia",
      "Acos",
      "Mosoc Llacta",
      "Pomacanchi",
      "Rondocan",
      "Sangarará"
    ],
    "Anta": [
      "Anta",
      "Ancahuasi",
      "Cachimayo",
      "Chinchaypujio",
      "Huarocondo",
      "Limatambo",
      "Mollepata",
      "Pucyura",
      "Zurite"
    ],
    "Calca": [
      "Calca",
      "Coya",
      "Lamay",
      "Lares",
      "Pisac",
      "San Salvador",
      "Taray",
      "Yanatile"
    ],
    "Canas": [
      "Yanaoca",
      "Checca",
      "Kunturkanki",
      "Langui",
      "Layo",
      "Pampamarca",
      "Quehue",
      "Tupac Amaru"
    ],
    "Canchis": [
      "Sicuani",
      "Checacupe",
      "Combapata",
      "Marangani",
      "Pitumarca",
      "San Pablo",
      "San Pedro",
      "Tinta"
    ],
    "Chumbivilcas": [
      "Santo Tomás",
      "Capacmarca",
      "Chamaca",
      "Colquemarca",
      "Livitaca",
      "Llusco",
      "Quiñota",
      "Velille"
    ],
    "Espinar": [
      "Yauri",
      "Condoroma",
      "Coporaque",
      "Ocoruro",
      "Pallpata",
      "Pichigua",
      "Suyckutambo"
    ],
    "La Convención": [
      "Quillabamba",
      "Echarate",
      "Huayopata",
      "Maranura",
      "Ocobamba",
      "Santa Ana",
      "Santa Teresa",
      "Vilcabamba",
      "Pichari"
    ],
    "Paruro": [
      "Paruro",
      "Accha",
      "Ccapi",
      "Colcha",
      "Huanoquite",
      "Omacha",
      "Paccaritambo",
      "Pillpinto",
      "Yaurisque"
    ],
    "Paucartambo": [
      "Paucartambo",
      "Caicay",
      "Challabamba",
      "Colquepata",
      "Huancarani",
      "Kosñipata"
    ],
    "Quispicanchi": [
      "Urcos",
      "Andahuaylillas",
      "Camanti",
      "Ccarhuayo",
      "Ccatca",
      "Cusipata",
      "Huaro",
      "Lucre",
      "Marcapata",
      "Ocongate",
      "Oropesa",
      "Quiquijana"
    ],
    "Urubamba": [
      "Urubamba",
      "Chinchero",
      "Huayllabamba",
      "Machupicchu",
      "Maras",
      "Ollantaytambo",
      "Yucay"
    ]
  },
  "Huancavelica": {
    "Huancavelica": [
      "Huancavelica",
      "Acobambilla",
      "Acoria",
      "Conayca",
      "Cuenca",
      "Huachocolpa",
      "Huayllahuara",
      "Izcuchaca",
      "Laria",
      "Manta",
      "Mariscal Cáceres",
      "Moya",
      "Nuevo Occoro",
      "Palca",
      "Pilchaca",
      "Vilca",
      "Yauli"
    ],
    "Acobamba": [
      "Acobamba",
      "Andabamba",
      "Anta",
      "Caja",
      "Marcas",
      "Paucara",
      "Pomacocha",
      "Rosario",
      "Santillana",
      "Ticlacayan"
    ],
    "Angaraes": [
      "Lircay",
      "Anchonga",
      "Callanmarca",
      "Ccochaccasa",
      "Chincho",
      "Congalla",
      "Huanca-Huanca",
      "Huayllay Grande",
      "Julcamarca",
      "San Antonio de Antaparco",
      "Santo Tomas de Pata",
      "Secclla"
    ],
    "Castrovirreyna": [
      "Castrovirreyna",
      "Arma",
      "Aurahuá",
      "Capillas",
      "Chupamarca",
      "Cocas",
      "Huachos",
      "Huamatambo",
      "Mollepampa",
      "San Juan",
      "Santa Ana",
      "Tantara",
      "Ticrapo"
    ],
    "Churcampa": [
      "Churcampa",
      "Anco",
      "Chinchihuasi",
      "El Carmen",
      "La Merced",
      "Locroja",
      "Pachamarca",
      "Paucarbamba",
      "San Miguel de Mayocc",
      "San Pedro de Coris",
      "Pachamarca",
      "San Miguel de Mayocc",
      "San Pedro de Coris",
      "Suitucancha"
    ],
    "Huaytará": [
      "Huaytara",
      "Ayavi",
      "Córdova",
      "Huayacundo Arma",
      "Laramarca",
      "Ocoyo",
      "Pilpichaca",
      "Querco",
      "Quito-Arma",
      "San Antonio de Cusicancha",
      "San Francisco de Sangayaico",
      "San Isidro",
      "Santiago de Chocorvos",
      "Santo Domingo de Capillas",
      "Tambo"
    ],
    "Tayacaja": [
      "Pampas",
      "Acostambo",
      "Acraquia",
      "Ahuaycha",
      "Colcabamba",
      "Daniel Hernández",
      "Huachocolpa",
      "Huaribamba",
      "Ñahuimpuquio",
      "Pazos",
      "Quishuar",
      "Salcabamba",
      "Salcahuasi",
      "San Marcos de Rocchac",
      "Surcubamba",
      "Tintay Puncu",
      "Quichuas"
    ]
  },
  "Huánuco": {
    "Huánuco": [
      "Huánuco",
      "Amarilis",
      "Chinchao",
      "Churubamba",
      "Margos",
      "Quisqui (Kichki)",
      "San Francisco de Cayrán",
      "San Pedro de Chaulán",
      "Santa María del Valle",
      "Yarumayo",
      "Yacus"
    ],
    "Ambo": [
      "Ambo",
      "Cayna",
      "Colpas",
      "Conchamarca",
      "Huacar",
      "San Francisco",
      "San Rafael",
      "Tomay Kichwa"
    ],
    "Dos de Mayo": [
      "La Unión",
      "Chuquis",
      "Marías",
      "Pachas",
      "Quivilla",
      "Ripán",
      "Shunqui",
      "Sillapata",
      "Yanas"
    ],
    "Huacaybamba": [
      "Huacaybamba",
      "Canchabamba",
      "Cochabamba",
      "Pinra"
    ],
    "Huamalíes": [
      "Llata",
      "Arancay",
      "Chavín de Pariarca",
      "Jacas Grande",
      "Jircan",
      "Miraflores",
      "Monzón",
      "Punchao",
      "Puños",
      "Singa",
      "Tantamayo"
    ],
    "Leoncio Prado": [
      "Rupa-Rupa",
      "Daniel Alomía Robles",
      "Hermílio Valdizán",
      "José Crespo y Castillo",
      "Luyando",
      "Mariano Damaso Beraun",
      "Pucayacu",
      "Castillo Grande"
    ],
    "Marañón": [
      "Huacrachuco",
      "Cholon",
      "San Buenaventura",
      "La Morada",
      "Santa Rosa de Alto Yanajanca"
    ],
    "Pachitea": [
      "Panao",
      "Chaglla",
      "Molino",
      "Umari"
    ],
    "Puerto Inca": [
      "Puerto Inca",
      "Codo del Pozuzo",
      "Honoria",
      "Tournavista",
      "Yuyapichis"
    ],
    "Lauricocha": [
      "Jesús",
      "Baños",
      "Jivia",
      "Queropalca",
      "Rondos",
      "San Francisco de Asís",
      "San Miguel de Cauri",
      "Huanuco",
      "Huaricachi",
      "San Pablo de Pillao"
    ],
    "Yarowilca": [
      "Chavinillo",
      "Cahuac",
      "Chacabamba",
      "Chavin de Huantar",
      "Jacas Chico",
      "Obas",
      "Pampas",
      "Urqun"
    ]
  },
  "Ica": {
    "Ica": [
      "Ica",
      "La Tinguiña",
      "Los Aquijes",
      "Ocucaje",
      "Pachacutec",
      "Parcona",
      "Pueblo Nuevo",
      "Salas",
      "San José de Los Molinos",
      "San Juan Bautista",
      "Santiago",
      "Subtanjalla",
      "Tate"
    ],
    "Chincha": [
      "Chincha Alta",
      "Alto Larán",
      "Chavin",
      "Chincha Baja",
      "El Carmen",
      "Grocio Prado",
      "Pueblo Nuevo",
      "San Juan de Yanac",
      "San Pedro de Huacarpana",
      "Sunampe",
      "Tambo de Mora"
    ],
    "Nasca": [
      "Nasca",
      "Changuillo",
      "El Ingenio",
      "Marcona",
      "Vista Alegre"
    ],
    "Palpa": [
      "Palpa",
      "Llipata",
      "Río Grande",
      "Santa Cruz",
      "Tibillo"
    ],
    "Pisco": [
      "Pisco",
      "Huancano",
      "Humay",
      "Independencia",
      "Paracas",
      "San Andrés",
      "San Clemente",
      "Tupac Amaru Inca"
    ]
  },
  "Junín": {
    "Huancayo": [
      "Huancayo",
      "Carhuacallanga",
      "Chacapampa",
      "Chicche",
      "Chilca",
      "Chongos Alto",
      "Chupuro",
      "Colca",
      "Cullhuas",
      "El Tambo",
      "Huacrapuquio",
      "Hualhuas",
      "Huancan",
      "Huasicancha",
      "Huayucachi",
      "Ingenio",
      "Manzanayoc",
      "Pariahuanca",
      "Pilcomayo",
      "Pucara",
      "Quichuay",
      "Quilcas",
      "San Agustín",
      "San Jerónimo de Tunán",
      "Saño",
      "Sapallanga",
      "Sicaya",
      "Viques"
    ],
    "Concepción": [
      "Concepción",
      "Aco",
      "Andamarca",
      "Chambara",
      "Cochas",
      "Comas",
      "Hongos",
      "Huachac",
      "Hualhuas",
      "Huayucachi",
      "Matahuasi",
      "Mito",
      "Nueve de Julio",
      "Orcotuna",
      "San José de Quero",
      "Santa Rosa de Ocopa",
      "Saquisili",
      "Santo Domingo de Acobamba",
      "Vilca",
      "Vischongo"
    ],
    "Chanchamayo": [
      "La Merced",
      "Pampa Hermosa",
      "Chanchamayo",
      "Perene",
      "Pichanaqui",
      "San Luis de Shuaro",
      "San Ramón",
      "Vitoc"
    ],
    "Chupaca": [
      "Chupaca",
      "Ahuac",
      "Chongos Bajo",
      "Huachac",
      "Huamancaca Chico",
      "San Juan de Iscos",
      "San Juan de Jarpa",
      "Tres de Diciembre",
      "Yanacancha"
    ],
    "Satipo": [
      "Satipo",
      "Coviriali",
      "Llaylla",
      "Mazamari",
      "Pampa Hermosa",
      "Pangoa",
      "Río Negro",
      "Río Tambo",
      "Vizcatan del Ene"
    ],
    "Tarma": [
      "Tarma",
      "Acobamba",
      "Huaricolca",
      "Huasahuasi",
      "La Unión",
      "Palca",
      "Palcamayo",
      "San Pedro de Cajas",
      "Tapo"
    ],
    "Yauli": [
      "La Oroya",
      "Chacapalpa",
      "Huay-Huay",
      "Marcapomacocha",
      "Morococha",
      "Paccha",
      "Santa Bárbara de Carhuacayan",
      "Santa Rosa de Sacco",
      "Suitucancha",
      "Yauli"
    ]
  },
  "La Libertad": {
    "Trujillo": [
      "Trujillo",
      "El Porvenir",
      "Florencia de Mora",
      "Huanchaco",
      "La Esperanza",
      "Laredo",
      "Moche",
      "Poroto",
      "Salaverry",
      "Simbal",
      "Victor Larco Herrera"
    ],
    "Ascope": [
      "Ascope",
      "Chicama",
      "Chocope",
      "Magdalena de Cao",
      "Paiján",
      "Rázuri",
      "Santiago de Cao"
    ],
    "Bolívar": [
      "Bolívar",
      "Bambamarca",
      "Condormarca",
      "Longotea",
      "Uchumarca",
      "Ucuncha"
    ],
    "Chepén": [
      "Chepén",
      "Pacanga",
      "Pueblo Nuevo"
    ],
    "Julcán": [
      "Julcán",
      "Calamarca",
      "Carabamba",
      "Huaso"
    ],
    "Otuzco": [
      "Otuzco",
      "Agallpampa",
      "Charat",
      "Huaranchal",
      "La Cuesta",
      "Mache",
      "Paranday",
      "Salpo",
      "Sinsicap",
      "Usquil"
    ],
    "Pacasmayo": [
      "San Pedro de Lloc",
      "Guadalupe",
      "Jequetepeque",
      "Pacasmayo",
      "San José"
    ],
    "Pataz": [
      "Tayabamba",
      "Buldibuyo",
      "Chillia",
      "Huancaspata",
      "Huaylillas",
      "Huayo",
      "Ongón",
      "Parcoy",
      "Pataz",
      "Pías",
      "Santiago de Challas",
      "Taurija",
      "Urpay"
    ],
    "Sánchez Carrión": [
      "Huamachuco",
      "Chugay",
      "Cochorco",
      "Curgos",
      "Marcabal",
      "Sanagorán",
      "Sarin",
      "Sartimbamba"
    ],
    "Santiago de Chuco": [
      "Santiago de Chuco",
      "Angasmarca",
      "Cachicadán",
      "Mollebamba",
      "Mollepata",
      "Quiruvilca",
      "Santa Cruz de Chuca",
      "Sitabamba"
    ],
    "Gran Chimú": [
      "Cascas",
      "Lucma",
      "Marmot",
      "Sayapullo"
    ],
    "Virú": [
      "Virú",
      "Chao",
      "Guadalupito"
    ]
  },
  "Lima": {
    "Barranca": [],
    "Cajatambo": [],
    "Canta": [],
    "Cañete": [],
    "Huaral": [],
    "Huarochirí": [],
    "Huaura": [],
    "Lima": [
      "Ancón",
      "Ate",
      "Barranco",
      "Breña",
      "Carabayllo",
      "Cha‌​clacayo",
      "Chorrillos",
      "Cieneguilla",
      "Comas",
      "El Agustino",
      "Independencia",
      "Jesús María",
      "La Molina",
      "La Victoria",
      "Lince",
      "Los Olivos",
      "Lurigancho",
      "Lurín",
      "Magdalena del Mar",
      "Miraflores",
      "Pachacamac",
      "Pucusana",
      "Pueblo Libre",
      "Puente Piedra",
      "Punta Hermosa",
      "Punta Negra",
      "Rímac",
      "San Bartolo",
      "San Borja",
      "San Isidro",
      "San Juan de Lurigancho",
      "San Juan de Miraflores",
      "San Luis",
      "San Martín de Porres",
      "San Miguel",
      "Santa Anita",
      "Santa María del Mar",
      "Santa Rosa",
      "Santiago de Surco",
      "Surquillo",
      "Villa El Salvador",
      "Villa María del Triunfo"
    ],
    "Oyon": [],
    "Yauyos": []
  },
  "Loreto": {
    "Alto Amazonas": [
      "Barranca",
      "Cahuapanas",
      "Jeberos",
      "Lagunas",
      "Santa Cruz",
      "Teniente César López Rojas",
      "Yurimaguas"
    ],
    "Datem del Marañón": [
      "Datém del Marañón",
      "Manseriche",
      "Pastaza"
    ],
    "Loreto": [
      "Indiana",
      "Nauta",
      "Pebas",
      "Ramos",
      "Requena",
      "Saquena",
      "Soplin Vargas"
    ],
    "Mariscal Ramón Castilla": [
      "Pebas",
      "Ramón Castilla",
      "San Pablo",
      "Yavari"
    ],
    "Maynas": [
      "Iquitos",
      "Las Amazonas",
      "Mazán",
      "Napo",
      "Punchana",
      "Torres Causana",
      "Belén"
    ],
    "Putumayo": [
      "Putumayo",
      "Rosa Panduro",
      "Teniente Manuel Clavero",
      "Yaguas"
    ],
    "Requena": [
      "Alto Tapiche",
      "Capelo",
      "Emilio San Martín",
      "Maquia",
      "Puinahua",
      "Requena",
      "Saquena",
      "Soplin Vargas",
      "Tapiche",
      "Jenaro Herrera"
    ],
    "Ucayali": [
      "Contamana",
      "Inahuaya",
      "Padre Márquez",
      "Pampa Hermosa",
      "Sarayacu",
      "Vargas Guerra"
    ]
  },
  "Madre de Dios": {
    "Manu": [
      "Fitzcarrald",
      "Huepetuhe",
      "Manu",
      "Manu National Park",
      "Mazuco",
      "Pillcopata",
      "Salvación"
    ],
    "Tahuamanu": [
      "Inambari",
      "Laberinto",
      "Las Piedras",
      "Tahuamanu"
    ],
    "Tambopata": [
      "Tambopata"
    ]
  },
  "Moquegua": {
    "General Sánchez Cerro": [
      "Carumas",
      "Cuchumbaya",
      "General Sánchez Cerro",
      "Huaytire",
      "Omate",
      "Puquina"
    ],
    "Ilo": [
      "El Algarrobal",
      "Ilo",
      "Pacocha"
    ],
    "Mariscal Nieto": [
      "Chojata",
      "Moquegua",
      "Samegua",
      "San Cristóbal",
      "Torata"
    ]
  },
  "Pasco": {
    "Pasco": [
      "Chaupimarca",
      "Huachón",
      "Huariaca",
      "Huayllay",
      "Ninacaca",
      "Pallanchacra",
      "Paucartambo",
      "San Francisco de Asís de Yarusyacán",
      "Simón Bolívar",
      "Ticlacayán",
      "Tinyahuarco",
      "Vicco",
      "Yanacancha"
    ],
    "Oxapampa": [
      "Chontabamba",
      "Huancabamba",
      "Oxapampa",
      "Palcazu",
      "Pozuzo",
      "Puerto Bermúdez",
      "Villa Rica"
    ]
  },
  "Piura": {
    "Piura": [
      "Piura",
      "Castilla",
      "Catacaos",
      "Cura Mori",
      "El Tallán",
      "La Arena",
      "La Unión",
      "Las Lomas",
      "Tambo Grande",
      "Veintiséis de Octubre"
    ],
    "Ayabaca": [
      "Ayabaca",
      "Frias",
      "Jilili",
      "Lagunas",
      "Montero",
      "Pacaipampa",
      "Paimas",
      "Sapillica",
      "Sícchez"
    ],
    "Huancabamba": [
      "Huancabamba",
      "Canchaque",
      "El Carmen de la Frontera",
      "Huarmaca",
      "Lalaquiz",
      "San Miguel de El Faique",
      "Sondor",
      "Sondorillo"
    ],
    "Morropón": [
      "Chulucanas",
      "Buenos Aires",
      "Chalaco",
      "La Matanza",
      "Morropón",
      "Salitral",
      "San Juan de Bigote",
      "Santa Catalina de Mossa",
      "Santo Domingo",
      "Yamango"
    ],
    "Paita": [
      "Paita",
      "Amotape",
      "Arenal",
      "Colán",
      "La Huaca",
      "Tamarindo",
      "Vichayal"
    ],
    "Sechura": [
      "Sechura",
      "Bellavista de la Unión",
      "Bernal",
      "Cristo Nos Valga",
      "Rinconada Llicuar",
      "Vice"
    ],
    "Sullana": [
      "Sullana",
      "Bellavista",
      "Ignacio Escudero",
      "Lancones",
      "Marcavelica",
      "Miguel Checa",
      "Querecotillo",
      "Salitral"
    ],
    "Talara": [
      "Talara",
      "El Alto",
      "La Brea",
      "La Cruz",
      "Las Viñas",
      "Pariñas"
    ]
  },
  "Puno": {
    "Puno": [
      "Puno",
      "Acora",
      "Amantaní",
      "Atuncolla",
      "Capachica",
      "Chucuito",
      "Coata",
      "Huata",
      "Mañazo",
      "Paucarcolla",
      "Pichacani",
      "Plateria",
      "San Antonio",
      "Tiquillaca",
      "Vilque"
    ],
    "Azángaro": [
      "Azángaro",
      "Achaya",
      "Arapa",
      "Asillo",
      "Caminaca",
      "Chupa",
      "José Domingo Choquehuanca",
      "Muñani",
      "Potoni",
      "Saman",
      "San Anton",
      "San José",
      "San Juan de Salinas",
      "Santiago de Pupuja",
      "Tirapata"
    ],
    "Carabaya": [
      "Macusani",
      "Ajoyani",
      "Ayapata",
      "Coasa",
      "Corani",
      "Crucero",
      "Ituata",
      "Ollachea",
      "San Gabán",
      "Usicayos"
    ],
    "Chucuito": [
      "Juli",
      "Desaguadero",
      "Huacullani",
      "Kelluyo",
      "Pisacoma",
      "Pomata",
      "Zepita"
    ],
    "El Collao": [
      "Ilave",
      "Capazo",
      "Pilcuyo",
      "Santa Rosa"
    ],
    "Huancané": [
      "Huancané",
      "Cojata",
      "Huatasani",
      "Inchupalla",
      "Pusi",
      "Rosaspata",
      "Taraco",
      "Vilque Chico"
    ],
    "Lampa": [
      "Lampa",
      "Cabanilla",
      "Calapuja",
      "Nicasio",
      "Ocuviri",
      "Palca",
      "Paratía",
      "Pucará",
      "Santa Lucía",
      "Vilavila"
    ],
    "Melgar": [
      "Ayaviri",
      "Antauta",
      "Cupi",
      "Llalli",
      "Macari",
      "Nuñoa",
      "Orurillo",
      "Santa Rosa",
      "Umachiri"
    ],
    "Moho": [
      "Moho",
      "Conima",
      "Huayrapata",
      "Tilali"
    ],
    "San Antonio de Putina": [
      "Putina",
      "Ananea",
      "Pedro Vilca Apaza",
      "Quilcapuncu",
      "Sina"
    ],
    "San Román": [
      "Juliaca",
      "Cabana",
      "Cabanillas",
      "Caracoto"
    ],
    "Sandia": [
      "Sandia",
      "Cuyocuyo",
      "Limbani",
      "Patambuco",
      "Phara",
      "Quiaca",
      "San Juan del Oro",
      "Yanahuaya"
    ],
    "Yunguyo": [
      "Yunguyo",
      "Anapia",
      "Copani",
      "Cuturapi",
      "Ollaraya",
      "Tinicachi",
      "Unicachi"
    ]
  },
  "San Martín": {
    "Moyobamba": [
      "Moyobamba",
      "Calzada",
      "Habana",
      "Jepelacio",
      "Soritor",
      "Yantalo"
    ],
    "Bellavista": [
      "Bellavista",
      "Alto Biavo",
      "Bajo Biavo",
      "Huallaga",
      "San Pablo",
      "San Rafael"
    ],
    "El Dorado": [
      "San José de Sisa",
      "Agua Blanca",
      "San Martín",
      "Santa Rosa",
      "Shatoja"
    ],
    "Huallaga": [
      "Saposoa",
      "Alto Saposoa",
      "El Eslabón",
      "Piscoyacu",
      "Sacanche"
    ],
    "Lamas": [
      "Lamas",
      "Alonso de Alvarado",
      "Barranquita",
      "Caynarachi",
      "Cuñumbuqui",
      "Pinto Recodo",
      "Rumisapa",
      "San Roque de Cumbaza",
      "Shanao",
      "Tabalosos",
      "Zapatero"
    ],
    "Mariscal Cáceres": [
      "Juanjuí",
      "Campanilla",
      "Huicungo",
      "Pachiza",
      "Pajarillo"
    ],
    "Picota": [
      "Picota",
      "Buenos Aires",
      "Caspisapa",
      "Pilluana",
      "Pucacaca",
      "San Cristóbal",
      "San Hilarión",
      "Shamboyacu",
      "Tingo de Ponasa",
      "Tres Unidos"
    ],
    "Rioja": [
      "Rioja",
      "Awajún",
      "Elías Soplin Vargas",
      "Nueva Cajamarca",
      "Pardo Miguel",
      "Posic",
      "San Fernando",
      "Yorongos",
      "Yuracyacu"
    ],
    "San Martín": [
      "Tarapoto",
      "Alberto Leveau",
      "Cacatachi",
      "Chazuta",
      "Chipurana",
      "El Porvenir",
      "Huimbayoc",
      "Juan Guerra",
      "La Banda de Shilcayo",
      "Morales",
      "Papaplaya",
      "San Antonio",
      "Sauce",
      "Shapaja"
    ],
    "Tocache": [
      "Tocache",
      "Nuevo Progreso",
      "Polvora",
      "Shunte"
    ]
  },
  "Tacna": {
    "Tacna": [
      "Tacna",
      "Alto de la Alianza",
      "Calana",
      "Ciudad Nueva",
      "Inclán",
      "Pachía",
      "Palca",
      "Pocollay",
      "Sama",
      "La Yarada-Los Palos"
    ]
  },
  "Tumbes": {
    "Tumbes": [
      "Tumbes",
      "Corrales",
      "La Cruz",
      "Pampas de Hospital",
      "San Jacinto",
      "San Juan de la Virgen"
    ]
  },
  "Ucayali": {
    "Coronel Portillo": [
      "Calleria",
      "Campoverde",
      "Iparia",
      "Masisea",
      "Yarinacocha",
      "Nueva Requena",
      "Manantay",
      "Raymondi",
      "Sepahua",
      "Nueva Cajamarca",
      "Padre Abad",
      "Alexander Von Humboldt"
    ],
    "Atalaya": [
      "Raymondi",
      "Sepahua",
      "Tahuania",
      "Yurua",
      "Inahuaya",
      "Puerto Prado",
      "Vargas Guerra"
    ],
    "Padre Abad": [
      "Padre Abad",
      "Irazola",
      "Curimana",
      "Neshuya"
    ]
  }

  // Más departamentos...
};

@Component({
  selector: 'app-libro-de-reclamaciones',
  templateUrl: './libro-de-reclamaciones.component.html',
  styleUrls: [
    './libro-de-reclamaciones.component.css',
    '../../../../static/css/blocks_styl.css',
    '../../../../static/css/styles.css',
    '../../../../static/js/validationform/validationEngine.jquery.css'
  ]
})
export class LibroDeReclamacionesComponent  implements OnInit{
  @ViewChild('dateInput') dateInput!: ElementRef;
  formularioReclamos!: FormGroup;

  departamentos: string[] = Object.keys(data);
  provincias: string[] = [];
  distritos: string[] = [];

  miVariableBooleana = true;
  fileToUpload: File | null = null;
  isFileLoaded = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {


  }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.obtenerFechaActual();
    this.setupFormInputs();
    // this.capturarPais();
    // this.capturaValor();

      // Agrega los observadores a los campos del formulario
  this.formularioReclamos.get('departamento')?.valueChanges.subscribe((value) => {
    console.log('Departamento seleccionado:', value);
    this.updateProvincias(value);
  });

  this.formularioReclamos.get('provincia')?.valueChanges.subscribe((value) => {
    console.log('Provincia seleccionada:', value);
    this.updateDistritos(value);
  });

  let control = this.formularioReclamos.get('autorizoNotificacionResultado');
  if (control) {
    control.valueChanges.subscribe(value => {
      console.log('El usuario seleccionó: ', value);
    });
  }

}
updateProvincias(event:any): void {
  if(data[event]){
    this.provincias = Object.keys(data[event]);
  }else{
    console.error(data[event],'data[event] is undefined or null');
  }
}

updateDistritos(event:any): void {
  const departamento = this.formularioReclamos.get('departamento')?.value;
  console.log('EVENT seleccionado en updateDistritos: línea 2098', event);
  if(data[event]){
    this.distritos = data[departamento] [event];
  }else{
    console.error(data[event],'data[event] is undefined or null');
  }
}



  ngAfterViewInit(): void {

    // this.inicializarFormulario();
  }

  obtenerFechaActual(): string {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();

  return `${day}/${month}/${year}`;

  }

  inicializarFormulario(): void {
    this.formularioReclamos = this.formBuilder.group({
      fecha:[this.obtenerFechaActual()],
      codigo: ['000 000001-201X'],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      departamento: ['', Validators.required],
      provincia: ['', Validators.required],
      distrito: ['', Validators.required],
      direccion: ['', Validators.required],
      nombreTutor: [''],
      apellidoTutor: [''],
      tipoDocumentoTutor: [''],
      numeroDocumentoTutor: [''],
      // identificacionBienContratado: [''],
      descripcionBienContratado: ['', Validators.required],
      tipoReclamacion: [''],
      detalleReclamacion: ['', Validators.required],
      pedidoReclamacion: ['', Validators.required],
      file:[null],
      autorizoNotificacionResultado: ['', Validators.required],
      privacidad: ['', Validators.requiredTrue]
    });
  }


  setupFormInputs(): void {
    // console.log('setupFormInputs iniciado');
    const inputs = document.querySelectorAll('.form-input');
    inputs.forEach((input: Element) => {
      // console.log('Agregando event listeners al input:', input);

      input.addEventListener('blur', (event) => {
        // console.log('Evento blur disparado:', event);
        const currentTarget = event.currentTarget as HTMLInputElement;
        if (currentTarget) {
          // console.log('currentTarget en blur:', currentTarget);
          currentTarget.closest('.g5-item-input')?.classList.remove('inFocus');
        }
      });

      input.addEventListener('focus', (event) => {
        // console.log('Evento focus disparado:', event);
        const currentTarget = event.currentTarget as HTMLInputElement;
        if (currentTarget) {
          // console.log('currentTarget en focus:', currentTarget);
          currentTarget.closest('.g5-item-input')?.classList.add('inFocus');
          this.toggleFijarClass(currentTarget.nextElementSibling as HTMLElement, currentTarget.value.length >= 1);
        }
      });

      input.addEventListener('input', (event) => {
        // console.log('Evento input disparado:', event);
        const currentTarget = event.currentTarget as HTMLInputElement;
        this.toggleFijarClass(currentTarget.nextElementSibling as HTMLElement, currentTarget.value !== '');
      });
    });
  }

  private toggleFijarClass(target: HTMLElement, condition: boolean): void {
    // console.log('toggleFijarClass iniciado con target:', target, 'y condition:', condition);
    if (condition) {
      // console.log('Agregando clase fijar al target');
      target?.classList.add('fijar');
    } else {
      // console.log('Removiendo clase fijar del target');
      target?.classList.remove('fijar');
    }
  }

  enviarReclamo(): void {
    // Primero, actualizamos la validez de todos los campos del formulario.
    for (const field in this.formularioReclamos.controls) {
        if (Object.prototype.hasOwnProperty.call(this.formularioReclamos.controls, field)) {
            // this.formularioReclamos.controls[field].markAsTouched();
            this.formularioReclamos.controls[field].updateValueAndValidity();
            console.log('Errores del campo', field, this.formularioReclamos.controls[field].errors);
            console.log('Valor del campo', field, this.formularioReclamos.controls[field].value);
        }
    }

    // Luego, verificamos si el formulario es válido.
    if (this.formularioReclamos.valid) {
        console.log('formulario OK');
        console.log(this.formularioReclamos.value);
        Swal.fire({
          title: '<p style="color:#1B376F; font-size: 20px; font-weight: 500;><span style="color:#1B376F; font-size: 13px; padding: 20px;">Tu trámite se envió correctamente a nuestro</span><br> Libro de Reclamaciones</p>',
          icon: "success",
          confirmButtonText: 'Entendido',
          confirmButtonColor:'#0f72a1'
      }).then((result:any)=>{
        if(result.isConfirmed){
          this.router.navigate(['/home'])
        }
      });
    } else {
        console.log('Error: Campos inválidos');
        Swal.fire({
          title:'<span style="color: #1B376F; font-size: 17px; padding 20px;">Por favor, llena todos los campos requeridos.</span>',
          icon: 'error',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#0f72a1'
        });
    }
}

// capturarPais():void{
//   fetch('https://documentation-resources.opendatasoft.com/api/explore/v2.1/catalog/datasets?limit=10&offset=0&timezone=UTC&include_links=false&include_app_metas=false').then(res=>{
//     if(res.ok){
//       res.json().then(listaDePaises=>{
//         console.log(listaDePaises, "LISTA DE PAISES");
//     })
//   }
//   })
// }



onFileChange(event: any) {
  if (event.target.files.length > 0) {
    this.fileToUpload = event.target.files[0];
    this.isFileLoaded = true;
} else {
  this.isFileLoaded = false;
}
}




// capturaValor(){
//   Object.keys(this.formularioReclamos.controls).forEach(field => { // recorre todos los campos del formulario
//     const control = this.formularioReclamos.get(field); // obtiene el control del campo
//     control?.valueChanges.subscribe(value => { // se suscribe a los cambios
//       console.log(`El campo ${field} cambió su valor a ${value}`);
//     });
//   });

// }



}

