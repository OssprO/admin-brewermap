

export enum TipoCerveceria {
  'Macro Cervecería',
  'Micro Cervecería',
  'Nano Cervecería',
  'Brew Pub',
  'Cervecería Casera',
  'Otro'
}

export enum TipoEvento {
  'Presentación',
  'Cata',
  'Festival',
  'Competencia',
  'Tap Take Over',
  'Circulo de Estudio',
  'Otro'
}

export enum TipoOrganizacion {
  'Asociación',
  'Grupo',
  'Club',
  'Difusión',
  'Otro'
}

export enum TipoProveedor {
  'Tienda de Insumos',
  'Venta de Equipo',
  'Capacitación y Asesoría',
  'Distribución',
  'Otro'
}

export enum TipoPuntoVenta {
  'Boutique',
  'Taberna',
  'Centro de Consumo',
  'Bar',
  'Restaurant',
  'Otro'
}

export enum DiaSemana {
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
}


//Estilos BJCP



export class SelectElement {
  id:string = '';
  text:string = '';
  button?:string = '';
}

export const SocialNetworks:SelectElement[] = [
  {
    id: 'WW',
    text: 'Web',
    button: 'btn-html5'
  },
  {
    id: 'FB',
    text: 'Facebook',
    button: 'btn-facebook',
  },
  {
    id: 'FE',
    text: 'FacebookEvent',
    button: ''
  },
  {
    id: 'TW',
    text: 'Twitter',
    button: 'btn-twitter'
  },
  {
    id: 'IN',
    text: 'LinkedIn',
    button: 'btn-linkedin'
  },
  {
    id: 'YT',
    text: 'YouTube',
    button: 'btn-youtube'
  },
  {
    id: 'UT',
    text: 'Untappd',
    button: 'btn-untappd'
  },
  {
    id: 'TB',
    text: 'Tumblr',
    button: 'btn-tumblr'
  },
  {
    id: 'GP',
    text: 'Google+',
    button: 'btn-google-plus'
  },
  {
    id: 'IG',
    text: 'Instagram',
    button: 'btn-instagram'
  },
  {
    id: 'SP',
    text: 'Spotify',
    button: 'btn-spotify'
  },
  {
    id: 'FS',
    text: 'Forsquare',
    button: 'btn-foursquare'
  },
  {
    id: 'VI',
    text: 'Vimeo',
    button: 'btn-vimeo'
  }
]; 

export const PhoneTypes:SelectElement[] = [ 
  {
    id: 'CO',
    text: 'Contacto'
  },
  {
    id: 'VE',
    text: 'Ventas'
  },
  {
    id: 'MO',
    text: 'Móvil'
  },
  {
    id: 'MK',
    text: 'Marketing'
  }
];

export const Countries:SelectElement[] = [
  {
    id: 'AD',
    text: 'Andorra',
  },
  {
    id: 'AE',
    text: 'Emiratos Árabes Unidos',
  },
  {
    id: 'AF',
    text: 'Afganistán',
  },
  {
    id: 'AG',
    text: 'Antigua y Barbuda',
  },
  {
    id: 'AI',
    text: 'Anguila',
  },
  {
    id: 'AL',
    text: 'Albania',
  },
  {
    id: 'AM',
    text: 'Armenia',
  },
  {
    id: 'AO',
    text: 'Angola',
  },
  {
    id: 'AQ',
    text: 'Antártida',
  },
  {
    id: 'AR',
    text: 'Argentina',
  },
  {
    id: 'AS',
    text: 'Samoa Americana',
  },
  {
    id: 'AT',
    text: 'Austria',
  },
  {
    id: 'AU',
    text: 'Australia',
  },
  {
    id: 'AW',
    text: 'Aruba',
  },
  {
    id: 'AX',
    text: 'Islas de Åland',
  },
  {
    id: 'AZ',
    text: 'Azerbaiyán',
  },
  {
    id: 'BA',
    text: 'Bosnia-Herzegovina',
  },
  {
    id: 'BB',
    text: 'Barbados',
  },
  {
    id: 'BD',
    text: 'Bangladesh',
  },
  {
    id: 'BE',
    text: 'Bélgica',
  },
  {
    id: 'BF',
    text: 'Burkina Faso',
  },
  {
    id: 'BG',
    text: 'Bulgaria',
  },
  {
    id: 'BH',
    text: 'Bahréin',
  },
  {
    id: 'BI',
    text: 'Burundi',
  },
  {
    id: 'BJ',
    text: 'Benín',
  },
  {
    id: 'BL',
    text: 'San Bartolomé',
  },
  {
    id: 'BM',
    text: 'Bermudas',
  },
  {
    id: 'BN',
    text: 'Brunéi',
  },
  {
    id: 'BO',
    text: 'Bolivia',
  },
  {
    id: 'BQ',
    text: 'Bonaire',
  },
  {
    id: 'BR',
    text: 'Brasil',
  },
  {
    id: 'BS',
    text: 'Bahamas',
  },
  {
    id: 'BT',
    text: 'Bután',
  },
  {
    id: 'BV',
    text: 'Isla Bouvet',
  },
  {
    id: 'BW',
    text: 'Botsuana',
  },
  {
    id: 'BY',
    text: 'Bielorrusia',
  },
  {
    id: 'BZ',
    text: 'Belice',
  },
  {
    id: 'CA',
    text: 'Canadá',
  },
  {
    id: 'CC',
    text: 'Islas Cocos',
  },
  {
    id: 'CD',
    text: 'República Democrática del Congo',
  },
  {
    id: 'CF',
    text: 'República Centroafricana',
  },
  {
    id: 'CG',
    text: 'Congo [República]',
  },
  {
    id: 'CH',
    text: 'Suiza',
  },
  {
    id: 'CI',
    text: 'Costa de Marfil',
  },
  {
    id: 'CK',
    text: 'Islas Cook',
  },
  {
    id: 'CL',
    text: 'Chile',
  },
  {
    id: 'CM',
    text: 'Camerún',
  },
  {
    id: 'CN',
    text: 'China',
  },
  {
    id: 'CO',
    text: 'Colombia',
  },
  {
    id: 'CR',
    text: 'Costa Rica',
  },
  {
    id: 'CU',
    text: 'Cuba',
  },
  {
    id: 'CV',
    text: 'Cabo Verde',
  },
  {
    id: 'CW',
    text: 'Curazao',
  },
  {
    id: 'CX',
    text: 'Isla Christmas',
  },
  {
    id: 'CY',
    text: 'Chipre',
  },
  {
    id: 'CZ',
    text: 'República Checa',
  },
  {
    id: 'DE',
    text: 'Alemania',
  },
  {
    id: 'DJ',
    text: 'Yibuti',
  },
  {
    id: 'DK',
    text: 'Dinamarca',
  },
  {
    id: 'DM',
    text: 'Dominica',
  },
  {
    id: 'DO',
    text: 'República Dominicana',
  },
  {
    id: 'DZ',
    text: 'Argelia',
  },
  {
    id: 'EC',
    text: 'Ecuador',
  },
  {
    id: 'EE',
    text: 'Estonia',
  },
  {
    id: 'EG',
    text: 'Egipto',
  },
  {
    id: 'EH',
    text: 'Sáhara Occidental',
  },
  {
    id: 'ER',
    text: 'Eritrea',
  },
  {
    id: 'ES',
    text: 'España',
  },
  {
    id: 'ET',
    text: 'Etiopía',
  },
  {
    id: 'FI',
    text: 'Finlandia',
  },
  {
    id: 'FJ',
    text: 'Fiyi',
  },
  {
    id: 'FK',
    text: 'Islas Malvinas',
  },
  {
    id: 'FM',
    text: 'Micronesia',
  },
  {
    id: 'FO',
    text: 'Islas Feroe',
  },
  {
    id: 'FR',
    text: 'Francia',
  },
  {
    id: 'GA',
    text: 'Gabón',
  },
  {
    id: 'GB',
    text: 'Reino Unido',
  },
  {
    id: 'GD',
    text: 'Granada',
  },
  {
    id: 'GE',
    text: 'Georgia',
  },
  {
    id: 'GF',
    text: 'Guayana Francesa',
  },
  {
    id: 'GG',
    text: 'Guernsey',
  },
  {
    id: 'GH',
    text: 'Ghana',
  },
  {
    id: 'GI',
    text: 'Gibraltar',
  },
  {
    id: 'GL',
    text: 'Groenlandia',
  },
  {
    id: 'GM',
    text: 'Gambia',
  },
  {
    id: 'GN',
    text: 'Guinea',
  },
  {
    id: 'GP',
    text: 'Guadalupe',
  },
  {
    id: 'GQ',
    text: 'Guinea Ecuatorial',
  },
  {
    id: 'GR',
    text: 'Grecia',
  },
  {
    id: 'GS',
    text: 'Islas Georgia del Sur y Sandwich del Sur',
  },
  {
    id: 'GT',
    text: 'Guatemala',
  },
  {
    id: 'GU',
    text: 'Guam',
  },
  {
    id: 'GW',
    text: 'Guinea-Bissáu',
  },
  {
    id: 'GY',
    text: 'Guyana',
  },
  {
    id: 'HK',
    text: 'Hong Kong',
  },
  {
    id: 'HM',
    text: 'Islas Heard y McDonald',
  },
  {
    id: 'HN',
    text: 'Honduras',
  },
  {
    id: 'HR',
    text: 'Croacia',
  },
  {
    id: 'HT',
    text: 'Haití',
  },
  {
    id: 'HU',
    text: 'Hungría',
  },
  {
    id: 'ID',
    text: 'Indonesia',
  },
  {
    id: 'IE',
    text: 'Irlanda',
  },
  {
    id: 'IL',
    text: 'Israel',
  },
  {
    id: 'IM',
    text: 'Isla de Man',
  },
  {
    id: 'IN',
    text: 'India',
  },
  {
    id: 'IO',
    text: 'Territorio Británico del Océano Índico',
  },
  {
    id: 'IQ',
    text: 'Irak',
  },
  {
    id: 'IR',
    text: 'Irán',
  },
  {
    id: 'IS',
    text: 'Islandia',
  },
  {
    id: 'IT',
    text: 'Italia',
  },
  {
    id: 'JE',
    text: 'Jersey',
  },
  {
    id: 'JM',
    text: 'Jamaica',
  },
  {
    id: 'JO',
    text: 'Jordania',
  },
  {
    id: 'JP',
    text: 'Japón',
  },
  {
    id: 'KE',
    text: 'Kenia',
  },
  {
    id: 'KG',
    text: 'Kirguistán',
  },
  {
    id: 'KH',
    text: 'Camboya',
  },
  {
    id: 'KI',
    text: 'Kiribati',
  },
  {
    id: 'KM',
    text: 'Comoras',
  },
  {
    id: 'KN',
    text: 'San Cristóbal y Nieves',
  },
  {
    id: 'KP',
    text: 'Corea del Norte',
  },
  {
    id: 'KR',
    text: 'Corea del Sur',
  },
  {
    id: 'KW',
    text: 'Kuwait',
  },
  {
    id: 'KY',
    text: 'Islas Caimán',
  },
  {
    id: 'KZ',
    text: 'Kazajstán',
  },
  {
    id: 'LA',
    text: 'Laos',
  },
  {
    id: 'LB',
    text: 'Líbano',
  },
  {
    id: 'LC',
    text: 'Santa Lucía',
  },
  {
    id: 'LI',
    text: 'Liechtenstein',
  },
  {
    id: 'LK',
    text: 'Sri Lanka',
  },
  {
    id: 'LR',
    text: 'Liberia',
  },
  {
    id: 'LS',
    text: 'Lesotho',
  },
  {
    id: 'LT',
    text: 'Lituania',
  },
  {
    id: 'LU',
    text: 'Luxemburgo',
  },
  {
    id: 'LV',
    text: 'Letonia',
  },
  {
    id: 'LY',
    text: 'Libia',
  },
  {
    id: 'MA',
    text: 'Marruecos',
  },
  {
    id: 'MC',
    text: 'Mónaco',
  },
  {
    id: 'MD',
    text: 'Moldavia',
  },
  {
    id: 'ME',
    text: 'Montenegro',
  },
  {
    id: 'MF',
    text: 'San Martín',
  },
  {
    id: 'MG',
    text: 'Madagascar',
  },
  {
    id: 'MH',
    text: 'Islas Marshall',
  },
  {
    id: 'MK',
    text: 'Macedonia',
  },
  {
    id: 'ML',
    text: 'Mali',
  },
  {
    id: 'MM',
    text: 'Myanmar [Birmania]',
  },
  {
    id: 'MN',
    text: 'Mongolia',
  },
  {
    id: 'MO',
    text: 'Macao',
  },
  {
    id: 'MP',
    text: 'Islas Marianas del Norte',
  },
  {
    id: 'MQ',
    text: 'Martinica',
  },
  {
    id: 'MR',
    text: 'Mauritania',
  },
  {
    id: 'MS',
    text: 'Montserrat',
  },
  {
    id: 'MT',
    text: 'Malta',
  },
  {
    id: 'MU',
    text: 'Mauricio',
  },
  {
    id: 'MV',
    text: 'Maldivas',
  },
  {
    id: 'MW',
    text: 'Malaui',
  },
  {
    id: 'MX',
    text: 'México',
  },
  {
    id: 'MY',
    text: 'Malasia',
  },
  {
    id: 'MZ',
    text: 'Mozambique',
  },
  {
    id: 'NA',
    text: 'Namibia',
  },
  {
    id: 'NC',
    text: 'Nueva Caledonia',
  },
  {
    id: 'NE',
    text: 'Níger',
  },
  {
    id: 'NF',
    text: 'Isla Norfolk',
  },
  {
    id: 'NG',
    text: 'Nigeria',
  },
  {
    id: 'NI',
    text: 'Nicaragua',
  },
  {
    id: 'NL',
    text: 'Holanda',
  },
  {
    id: 'NO',
    text: 'Noruega',
  },
  {
    id: 'NP',
    text: 'Nepal',
  },
  {
    id: 'NR',
    text: 'Nauru',
  },
  {
    id: 'NU',
    text: 'Isla Niue',
  },
  {
    id: 'NZ',
    text: 'Nueva Zelanda',
  },
  {
    id: 'OM',
    text: 'Omán',
  },
  {
    id: 'PA',
    text: 'Panamá',
  },
  {
    id: 'PE',
    text: 'Perú',
  },
  {
    id: 'PF',
    text: 'Polinesia Francesa',
  },
  {
    id: 'PG',
    text: 'Papúa-Nueva Guinea',
  },
  {
    id: 'PH',
    text: 'Filipinas',
  },
  {
    id: 'PK',
    text: 'Pakistán',
  },
  {
    id: 'PL',
    text: 'Polonia',
  },
  {
    id: 'PM',
    text: 'San Pedro y Miquelón',
  },
  {
    id: 'PN',
    text: 'Islas Pitcairn',
  },
  {
    id: 'PR',
    text: 'Puerto Rico',
  },
  {
    id: 'PS',
    text: 'Territorios Palestinos',
  },
  {
    id: 'PT',
    text: 'Portugal',
  },
  {
    id: 'PW',
    text: 'Palaos',
  },
  {
    id: 'PY',
    text: 'Paraguay',
  },
  {
    id: 'QA',
    text: 'Qatar',
  },
  {
    id: 'RE',
    text: 'Reunión',
  },
  {
    id: 'RO',
    text: 'Rumanía',
  },
  {
    id: 'RS',
    text: 'Serbia',
  },
  {
    id: 'RU',
    text: 'Rusia',
  },
  {
    id: 'RW',
    text: 'Ruanda',
  },
  {
    id: 'SA',
    text: 'Arabia Saudí',
  },
  {
    id: 'SB',
    text: 'Islas Salomón',
  },
  {
    id: 'SC',
    text: 'Seychelles',
  },
  {
    id: 'SD',
    text: 'Sudán',
  },
  {
    id: 'SE',
    text: 'Suecia',
  },
  {
    id: 'SG',
    text: 'Singapur',
  },
  {
    id: 'SH',
    text: 'Santa Elena',
  },
  {
    id: 'SI',
    text: 'Eslovenia',
  },
  {
    id: 'SJ',
    text: 'Svalbard y Jan Mayen',
  },
  {
    id: 'SK',
    text: 'Eslovaquia',
  },
  {
    id: 'SL',
    text: 'Sierra Leona',
  },
  {
    id: 'SM',
    text: 'San Marino',
  },
  {
    id: 'SN',
    text: 'Senegal',
  },
  {
    id: 'SO',
    text: 'Somalia',
  },
  {
    id: 'SR',
    text: 'Surinam',
  },
  {
    id: 'SS',
    text: 'Sudán del Sur',
  },
  {
    id: 'ST',
    text: 'Santo Tomé y Príncipe',
  },
  {
    id: 'SV',
    text: 'El Salvador',
  },
  {
    id: 'SX',
    text: 'San Martín',
  },
  {
    id: 'SY',
    text: 'Siria',
  },
  {
    id: 'SZ',
    text: 'Suazilandia',
  },
  {
    id: 'TC',
    text: 'Islas Turcas y Caicos',
  },
  {
    id: 'TD',
    text: 'Chad',
  },
  {
    id: 'TF',
    text: 'Territorios Australes Franceses',
  },
  {
    id: 'TG',
    text: 'Togo',
  },
  {
    id: 'TH',
    text: 'Tailandia',
  },
  {
    id: 'TJ',
    text: 'Tayikistán',
  },
  {
    id: 'TK',
    text: 'Tokelau',
  },
  {
    id: 'TL',
    text: 'Timor Oriental',
  },
  {
    id: 'TM',
    text: 'Turkmenistán',
  },
  {
    id: 'TN',
    text: 'Túnez',
  },
  {
    id: 'TO',
    text: 'Tonga',
  },
  {
    id: 'TR',
    text: 'Turquía',
  },
  {
    id: 'TT',
    text: 'Trinidad y Tobago',
  },
  {
    id: 'TV',
    text: 'Tuvalu',
  },
  {
    id: 'TW',
    text: 'Taiwán',
  },
  {
    id: 'TZ',
    text: 'Tanzania',
  },
  {
    id: 'UA',
    text: 'Ucrania',
  },
  {
    id: 'UG',
    text: 'Uganda',
  },
  {
    id: 'UM',
    text: 'Islas menores alejadas de los Estados Unidos',
  },
  {
    id: 'US',
    text: 'Estados Unidos',
  },
  {
    id: 'UY',
    text: 'Uruguay',
  },
  {
    id: 'UZ',
    text: 'Uzbekistán',
  },
  {
    id: 'VA',
    text: 'Ciudad del Vaticano',
  },
  {
    id: 'VC',
    text: 'San Vicente y las Granadinas',
  },
  {
    id: 'VE',
    text: 'Venezuela',
  },
  {
    id: 'VG',
    text: 'Islas Vírgenes',
  },
  {
    id: 'VI',
    text: 'Islas Vírgenes de los Estados Unidos',
  },
  {
    id: 'VN',
    text: 'Vietnam',
  },
  {
    id: 'VU',
    text: 'Vanuatu',
  },
  {
    id: 'WF',
    text: 'Wallis y Futuna',
  },
  {
    id: 'WS',
    text: 'Samoa',
  },
  {
    id: 'XK',
    text: 'Kosovo',
  },
  {
    id: 'YE',
    text: 'Yemen',
  },
  {
    id: 'YT',
    text: 'Mayotte',
  },
  {
    id: 'ZA',
    text: 'Sudáfrica',
  },
  {
    id: 'ZM',
    text: 'Zambia',
  },
  {
    id: 'ZW',
    text: 'Zimbawe',
  }
];
