const countries= [
      {
        "name": "Afghanistan",
        "es_name": "Afganistán"
      },
      {
        "name": "Albania",
        "es_name": "Albania"
      },
      {
        "name": "Algeria",
        "es_name": "Algeria"
      },
      {
        "name": "American Samoa",
        "es_name": "Samoa Americana"
      },
      {
        "name": "Andorra",
        "es_name": "Andorra"
      },
      {
        "name": "Angola",
        "es_name": "Angola"
      },
      {
        "name": "Anguilla",
        "es_name": "Anguilla"
      },
      {
        "name": "Antarctica",
        "es_name": "Antártida"
      },
      {
        "name": "Antigua and Barbuda",
        "es_name": "Antigua y Barbuda"
      },
      {
        "name": "Argentina",
        "es_name": "Argentina"
      },
      {
        "name": "Armenia",
        "es_name": "Armenia"
      },
      {
        "name": "Aruba",
        "es_name": "Aruba"
      },
      {
        "name": "Australia",
        "es_name": "Australia"
      },
      {
        "name": "Austria",
        "es_name": "Austria"
      },
      {
        "name": "Azerbaijan",
        "es_name": "Azerbaiyán"
      },
      {
        "name": "Bahamas",
        "es_name": "Bahamas"
      },
      {
        "name": "Bahrain",
        "es_name": "Bahrein"
      },
      {
        "name": "Bangladesh",
        "es_name": "Bangladesh"
      },
      {
        "name": "Barbados",
        "es_name": "Barbados"
      },
      {
        "name": "Belarus",
        "es_name": "Bielorrusia"
      },
      {
        "name": "Belgium",
        "es_name": "Bélgica"
      },
      {
        "name": "Belize",
        "es_name": "Belice"
      },
      {
        "name": "Benin",
        "es_name": "Benín"
      },
      {
        "name": "Bermuda",
        "es_name": "Bermuda"
      },
      {
        "name": "Bhutan",
        "es_name": "Bután"
      },
      {
        "name": "Bolivia",
        "es_name": "Bolivia"
      },
      {
        "name": "Bosnia and Herzegovina",
        "es_name": "Bosnia-Herzegovina"
      },
      {
        "name": "Botswana",
        "es_name": "Botswana"
      },
      {
        "name": "Brazil",
        "es_name": "Brasil"
      },
      {
        "name": "Brunei Darussalam",
        "es_name": "Brunei"
      },
      {
        "name": "Bulgaria",
        "es_name": "Bulgaria"
      },
      {
        "name": "Burkina Faso",
        "es_name": "Burkina Faso"
      },
      {
        "name": "Burundi",
        "es_name": "Burundi"
      },
      {
        "name": "Cambodia",
        "es_name": "Camboya"
      },
      {
        "name": "Cameroon",
        "es_name": "Camerún"
      },
      {
        "name": "Canada",
        "es_name": "Canadá"
      },
      {
        "name": "Cape Verde",
        "es_name": "Cabo Verde"
      },
      {
        "name": "Cayman Islands",
        "es_name": "Islas Caimán"
      },
      {
        "name": "Central African Republic",
        "es_name": "República Centroafricana"
      },
      {
        "name": "Chad",
        "es_name": "Chad"
      },
      {
        "name": "Chile",
        "es_name": "Chile"
      },
      {
        "name": "China",
        "es_name": "China"
      },
      {
        "name": "Christmas Island",
        "es_name": "Isla de Navidad"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "es_name": "Islas Cocos"
      },
      {
        "name": "Colombia",
        "es_name": "Colombia"
      },
      {
        "name": "Comoros",
        "es_name": "Comores"
      },
      {
        "name": "Congo",
        "es_name": "República del Congo"
      },
      {
        "name": "Congo, The Democratic Republic of the",
        "es_name": "República Democrática del Congo"
      },
      {
        "name": "Cook Islands",
        "es_name": "Islas Cook"
      },
      {
        "name": "Costa Rica",
        "es_name": "Costa Rica"
      },
      {
        "name": "Cote D'Ivoire",
        "es_name": "Costa de Marfíl"
      },
      {
        "name": "Croatia",
        "es_name": "Croacia"
      },
      {
        "name": "Cuba",
        "es_name": "Cuba"
      },
      {
        "name": "Cyprus",
        "es_name": "Chipre"
      },
      {
        "name": "Czech Republic",
        "es_name": "República Checa"
      },
      {
        "name": "Denmark",
        "es_name": "Dinamarca"
      },
      {
        "name": "Djibouti",
        "es_name": "Djibouti"
      },
      {
        "name": "Dominica",
        "es_name": "Dominica"
      },
      {
        "name": "Dominican Republic",
        "es_name": "República Dominicana"
      },
      {
        "name": "Ecuador",
        "es_name": "Ecuador"
      },
      {
        "name": "Egypt",
        "es_name": "Egipto"
      },
      {
        "name": "El Salvador",
        "es_name": "El Salvador"
      },
      {
        "name": "Equatorial Guinea",
        "es_name": "Guinea Ecuatorial"
      },
      {
        "name": "Eritrea",
        "es_name": "Eritrea"
      },
      {
        "name": "Estonia",
        "es_name": "Estonia"
      },
      {
        "name": "Ethiopia",
        "es_name": "Etiopía"
      },
      {
        "name": "Falkland Islands (Malvinas)",
        "es_name": "Islas Malvinas"
      },
      {
        "name": "Faroe Islands",
        "es_name": "Islas Feroe"
      },
      {
        "name": "Fiji",
        "es_name": "Fiji"
      },
      {
        "name": "Finland",
        "es_name": "Finlandia"
      },
      {
        "name": "France",
        "es_name": "Francia"
      },
      {
        "name": "French Guiana",
        "es_name": "Guyana Francesa"
      },
      {
        "name": "French Polynesia",
        "es_name": "Polinesia Francesa"
      },
      {
        "name": "French Southern Territories",
        "es_name": "Tierras Australes y Antárticas Francesas"
      },
      {
        "name": "Gabon",
        "es_name": "Gabón"
      },
      {
        "name": "Gambia",
        "es_name": "Gambia"
      },
      {
        "name": "Georgia",
        "es_name": "Georgia"
      },
      {
        "name": "Germany",
        "es_name": "Alemania"
      },
      {
        "name": "Ghana",
        "es_name": "Ghana"
      },
      {
        "name": "Gibraltar",
        "es_name": "Gibraltar"
      },
      {
        "name": "Greece",
        "es_name": "Grecia"
      },
      {
        "name": "Greenland",
        "es_name": "Groenlandia"
      },
      {
        "name": "Grenada",
        "es_name": "Granada"
      },
      {
        "name": "Guadeloupe",
        "es_name": "Guadalupe"
      },
      {
        "name": "Guam",
        "es_name": "Guam"
      },
      {
        "name": "Guatemala",
        "es_name": "Guatemala"
      },
      {
        "name": "Guinea",
        "es_name": "Guinea"
      },
      {
        "name": "Guinea-Bissau",
        "es_name": "Guinea-Bissau"
      },
      {
        "name": "Guyana",
        "es_name": "Guyana"
      },
      {
        "name": "Haiti",
        "es_name": "Haití"
      },
      {
        "name": "Holy See (Vatican City State)",
        "es_name": "Vaticano"
      },
      {
        "name": "Honduras",
        "es_name": "Honduras"
      },
      {
        "name": "Hong Kong",
        "es_name": "Hong Kong"
      },
      {
        "name": "Hungary",
        "es_name": "Hungría"
      },
      {
        "name": "Iceland",
        "es_name": "Islandia"
      },
      {
        "name": "India",
        "es_name": "India"
      },
      {
        "name": "Indonesia",
        "es_name": "Indonesia"
      },
      {
        "name": "Iran, Islamic Republic Of",
        "es_name": "Irán"
      },
      {
        "name": "Iraq",
        "es_name": "Iraq"
      },
      {
        "name": "Ireland",
        "es_name": "Irlanda"
      },
      {
        "name": "Israel",
        "es_name": "Israel"
      },
      {
        "name": "Italy",
        "es_name": "Italia"
      },
      {
        "name": "Jamaica",
        "es_name": "Jamaica"
      },
      {
        "name": "Japan",
        "es_name": "Japón"
      },
      {
        "name": "Jordan",
        "es_name": "Jordania"
      },
      {
        "name": "Kazakhstan",
        "es_name": "Kazajstán"
      },
      {
        "name": "Kenya",
        "es_name": "Kenia"
      },
      {
        "name": "Kiribati",
        "es_name": "Kiribati"
      },
      {
        "name": "Korea, Democratic People'S Republic of",
        "es_name": "Corea del Norte"
      },
      {
        "name": "Korea, Republic of",
        "es_name": "Corea del Sur"
      },
      {
        "name": "Kuwait",
        "es_name": "Kuwait"
      },
      {
        "name": "Kyrgyzstan",
        "es_name": "Kirguistán"
      },
      {
        "name": "Lao People's Democratic Republic",
        "es_name": "Laos"
      },
      {
        "name": "Latvia",
        "es_name": "Letonia"
      },
      {
        "name": "Lebanon",
        "es_name": "Líbano"
      },
      {
        "name": "Lesotho",
        "es_name": "Lesotho"
      },
      {
        "name": "Liberia",
        "es_name": "Liberia"
      },
      {
        "name": "Libyan Arab Jamahiriya",
        "es_name": "Libia"
      },
      {
        "name": "Liechtenstein",
        "es_name": "Liechtenstein"
      },
      {
        "name": "Lithuania",
        "es_name": "Lituania"
      },
      {
        "name": "Luxembourg",
        "es_name": "Luxemburgo"
      },
      {
        "name": "Macao",
        "es_name": "Macao"
      },
      {
        "name": "Macedonia, The Former Yugoslav Republic of",
        "es_name": "Macedonia"
      },
      {
        "name": "Madagascar",
        "es_name": "Madagascar"
      },
      {
        "name": "Malawi",
        "es_name": "Malawi"
      },
      {
        "name": "Malaysia",
        "es_name": "Malasia"
      },
      {
        "name": "Maldives",
        "es_name": "Maldivas"
      },
      {
        "name": "Mali",
        "es_name": "Mali"
      },
      {
        "name": "Malta",
        "es_name": "Malta"
      },
      {
        "name": "Marshall Islands",
        "es_name": "Islas Marshall"
      },
      {
        "name": "Martinique",
        "es_name": "Martinica"
      },
      {
        "name": "Mauritania",
        "es_name": "Mauritania"
      },
      {
        "name": "Mauritius",
        "es_name": "Mauricio"
      },
      {
        "name": "Mayotte",
        "es_name": "Mayotte"
      },
      {
        "name": "Mexico",
        "es_name": "México"
      },
      {
        "name": "Micronesia, Federated States of",
        "es_name": "Estados Federados de Micronesia"
      },
      {
        "name": "Moldova, Republic of",
        "es_name": "Moldavia"
      },
      {
        "name": "Monaco",
        "es_name": "Mónaco"
      },
      {
        "name": "Mongolia",
        "es_name": "Mongolia"
      },
      {
        "name": "Montserrat",
        "es_name": "Montserrat"
      },
      {
        "name": "Morocco",
        "es_name": "Marruecos"
      },
      {
        "name": "Mozambique",
        "es_name": "Mozambique"
      },
      {
        "name": "Myanmar",
        "es_name": "Myanmar"
      },
      {
        "name": "Namibia",
        "es_name": "Namibia"
      },
      {
        "name": "Nauru",
        "es_name": "Nauru"
      },
      {
        "name": "Nepal",
        "es_name": "Nepal"
      },
      {
        "name": "Netherlands",
        "es_name": "Holanda"
      },
      {
        "name": "Netherlands Antilles",
        "es_name": "Antillas Holandesas"
      },
      {
        "name": "New Caledonia",
        "es_name": "Nueva Caledonia"
      },
      {
        "name": "New Zealand",
        "es_name": "Nueva Zelanda"
      },
      {
        "name": "Nicaragua",
        "es_name": "Nicaragua"
      },
      {
        "name": "Niger",
        "es_name": "Niger"
      },
      {
        "name": "Nigeria",
        "es_name": "Nigeria"
      },
      {
        "name": "Niue",
        "es_name": "Niue"
      },
      {
        "name": "Norfolk Island",
        "es_name": "Islas Norfolk"
      },
      {
        "name": "Northern Mariana Islands",
        "es_name": "Islas Marianas del Norte"
      },
      {
        "name": "Norway",
        "es_name": "Noruega"
      },
      {
        "name": "Oman",
        "es_name": "Omán"
      },
      {
        "name": "Pakistan",
        "es_name": "Pakistán"
      },
      {
        "name": "Palau",
        "es_name": "Palau"
      },
      {
        "name": "Palestinian Territory, Occupied",
        "es_name": "Palestina"
      },
      {
        "name": "Panama",
        "es_name": "Panamá"
      },
      {
        "name": "Papua New Guinea",
        "es_name": "Papua Nueva Guinea"
      },
      {
        "name": "Paraguay",
        "es_name": "Paraguay"
      },
      {
        "name": "Peru",
        "es_name": "Perú"
      },
      {
        "name": "Philippines",
        "es_name": "Filipinas"
      },
      {
        "name": "Pitcairn",
        "es_name": "Pitcairn"
      },
      {
        "name": "Poland",
        "es_name": "Polonia"
      },
      {
        "name": "Portugal",
        "es_name": "Portugal"
      },
      {
        "name": "Puerto Rico",
        "es_name": "Puerto Rico"
      },
      {
        "name": "Qatar",
        "es_name": "Qatar"
      },
      {
        "name": "Reunion",
        "es_name": "Reunión"
      },
      {
        "name": "Romania",
        "es_name": "Rumanía"
      },
      {
        "name": "Russian Federation",
        "es_name": "Rusia"
      },
      {
        "name": "Rwanda",
        "es_name": "Ruanda"
      },
      {
        "name": "Saint Helena",
        "es_name": "Santa Helena"
      },
      {
        "name": "Saint Kitts and Nevis",
        "es_name": "San Kitts y Nevis"
      },
      {
        "name": "Saint Lucia",
        "es_name": "Santa Lucía"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "es_name": "San Vicente y Granadinas"
      },
      {
        "name": "Samoa",
        "es_name": "Samoa"
      },
      {
        "name": "San Marino",
        "es_name": "San Marino"
      },
      {
        "name": "Sao Tome and Principe",
        "es_name": "Santo Tomé y Príncipe"
      },
      {
        "name": "Saudi Arabia",
        "es_name": "Arabia Saudita"
      },
      {
        "name": "Senegal",
        "es_name": "Senegal"
      },
      {
        "name": "Serbia and Montenegro",
        "es_name": "Serbia"
      },
      {
        "name": "Seychelles",
        "es_name": "Seychelles"
      },
      {
        "name": "Sierra Leone",
        "es_name": "Sierra Leona"
      },
      {
        "name": "Singapore",
        "es_name": "Singapur"
      },
      {
        "name": "Slovakia",
        "es_name": "Eslovaquía"
      },
      {
        "name": "Slovenia",
        "es_name": "Eslovenia"
      },
      {
        "name": "Solomon Islands",
        "es_name": "Islas Salomón"
      },
      {
        "name": "Somalia",
        "es_name": "Somalia"
      },
      {
        "name": "South Africa",
        "es_name": "Sudáfrica"
      },
      {
        "name": "Spain",
        "es_name": "España"
      },
      {
        "name": "Sri Lanka",
        "es_name": "Sri Lanka"
      },
      {
        "name": "Sudan",
        "es_name": "Sudán"
      },
      {
        "name": "Suriname",
        "es_name": "Surinam"
      },
      {
        "name": "Swaziland",
        "es_name": "Swazilandia"
      },
      {
        "name": "Sweden",
        "es_name": "Suecia"
      },
      {
        "name": "Switzerland",
        "es_name": "Suiza"
      },
      {
        "name": "Syrian Arab Republic",
        "es_name": "Siria"
      },
      {
        "name": "Taiwan, Province of China",
        "es_name": "Taiwán"
      },
      {
        "name": "Tajikistan",
        "es_name": "Tadjikistan"
      },
      {
        "name": "Tanzania, United Republic of",
        "es_name": "Tanzania"
      },
      {
        "name": "Thailand",
        "es_name": "Tailandia"
      },
      {
        "name": "Timor-Leste",
        "es_name": "Timor Oriental"
      },
      {
        "name": "Togo",
        "es_name": "Togo"
      },
      {
        "name": "Tokelau",
        "es_name": "Tokelau"
      },
      {
        "name": "Tonga",
        "es_name": "Tonga"
      },
      {
        "name": "Trinidad and Tobago",
        "es_name": "Trinidad y Tobago"
      },
      {
        "name": "Tunisia",
        "es_name": "Túnez"
      },
      {
        "name": "Turkey",
        "es_name": "Turquía"
      },
      {
        "name": "Turkmenistan",
        "es_name": "Turkmenistan"
      },
      {
        "name": "Turks and Caicos Islands",
        "es_name": "Islas Turcas y Caicos"
      },
      {
        "name": "Tuvalu",
        "es_name": "Tuvalu"
      },
      {
        "name": "Uganda",
        "es_name": "Uganda"
      },
      {
        "name": "Ukraine",
        "es_name": "Ucrania"
      },
      {
        "name": "United Arab Emirates",
        "es_name": "Emiratos Árabes Unidos"
      },
      {
        "name": "United Kingdom",
        "es_name": "Reino Unido"
      },
      {
        "name": "United States",
        "es_name": "Estados Unidos"
      },
      {
        "name": "Uruguay",
        "es_name": "Uruguay"
      },
      {
        "name": "Uzbekistan",
        "es_name": "Uzbekistán"
      },
      {
        "name": "Vanuatu",
        "es_name": "Vanuatu"
      },
      {
        "name": "Venezuela",
        "es_name": "Venezuela"
      },
      {
        "name": "Viet Nam",
        "es_name": "Vietnam"
      },
      {
        "name": "Virgin Islands, British",
        "es_name": "Islas Vírgenes Británicas"
      },
      {
        "name": "Virgin Islands, U.S.",
        "es_name": "Islas Vírgenes Americanas"
      },
      {
        "name": "Wallis and Futuna",
        "es_name": "Wallis y Futuna"
      },
      {
        "name": "Western Sahara",
        "es_name": "Sáhara Occidental"
      },
      {
        "name": "Yemen",
        "es_name": "Yemen"
      },
      {
        "name": "Zambia",
        "es_name": "Zambia"
      },
      {
        "name": "Zimbabwe",
        "es_name": "Zimbabwe"
      }
    ]


const escountries = countries.map(country =>country.es_name)

const encountries = countries.map(country =>country.es_name)

export {escountries,encountries}