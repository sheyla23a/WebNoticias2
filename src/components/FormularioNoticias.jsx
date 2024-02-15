import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [categoria, setCategoria] = useState("business");
  const [pais, setPais] = useState("us");
  const [noticias, setNoticias] = useState([]);

  const url = `https://newsdata.io/api/1/news?apikey=pub_3792983f382da421d03c01863e7b50f5b0c3e&&country=${pais}&category=${categoria}`;

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data);
      setNoticias(data.results);
    };
    consultarAPI();
  }, [categoria, pais]);

  const Categorias = [
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const Paises = [
    { value: "af", label: "Afganistán" },
    { value: "al", label: "Albania" },
    { value: "dz", label: "Argelia" },
    { value: "ad", label: "Andorra" },
    { value: "ao", label: "Angola" },
    { value: "ar", label: "Argentina" },
    { value: "am", label: "Armenia" },
    { value: "au", label: "Australia" },
    { value: "at", label: "Austria" },
    { value: "az", label: "Azerbaiyán" },
    { value: "bs", label: "Bahamas" },
    { value: "bh", label: "Bahréin" },
    { value: "bd", label: "Bangladesh" },
    { value: "bb", label: "Barbados" },
    { value: "by", label: "Bielorrusia" },
    { value: "be", label: "Bélgica" },
    { value: "bz", label: "Belice" },
    { value: "bj", label: "Benín" },
    { value: "bm", label: "Islas Bermudas" },
    { value: "bt", label: "Bután" },
    { value: "bo", label: "Bolivia" },
    { value: "ba", label: "Bosnia y Herzegovina" },
    { value: "bw", label: "Botsuana" },
    { value: "br", label: "Brasil" },
    { value: "bn", label: "Brunéi" },
    { value: "bg", label: "Bulgaria" },
    { value: "bf", label: "Burkina Faso" },
    { value: "bi", label: "Burundi" },
    { value: "kh", label: "Camboya" },
    { value: "cm", label: "Camerún" },
    { value: "ca", label: "Canadá" },
    { value: "cv", label: "Cabo Verde" },
    { value: "ky", label: "Islas Caimán" },
    { value: "cf", label: "República Centroafricana" },
    { value: "td", label: "Chad" },
    { value: "cl", label: "Chile" },
    { value: "cn", label: "China" },
    { value: "co", label: "Colombia" },
    { value: "km", label: "Comoras" },
    { value: "cg", label: "Congo" },
    { value: "cr", label: "Costa Rica" },
    { value: "hr", label: "Croacia" },
    { value: "cu", label: "Cuba" },
    { value: "cy", label: "Chipre" },
    { value: "cz", label: "República Checa" },
    { value: "dk", label: "Dinamarca" },
    { value: "dj", label: "Yibuti" },
    { value: "dm", label: "República Dominicana" },
    { value: "do", label: "República Dominicana" },
    { value: "cd", label: "RD Congo" },
    { value: "ec", label: "Ecuador" },
    { value: "eg", label: "Egipto" },
    { value: "sv", label: "El Salvador" },
    { value: "gq", label: "Guinea Ecuatorial" },
    { value: "er", label: "Eritrea" },
    { value: "ee", label: "Estonia" },
    { value: "sz", label: "Esuatini" },
    { value: "et", label: "Etiopía" },
    { value: "fj", label: "Fiyi" },
    { value: "fi", label: "Finlandia" },
    { value: "fr", label: "Francia" },
    { value: "pf", label: "Polinesia Francesa" },
    { value: "ga", label: "Gabón" },
    { value: "gm", label: "Gambia" },
    { value: "ge", label: "Georgia" },
    { value: "de", label: "Alemania" },
    { value: "gh", label: "Ghana" },
    { value: "gr", label: "Grecia" },
    { value: "gd", label: "Granada" },
    { value: "gt", label: "Guatemala" },
    { value: "gn", label: "Guinea" },
    { value: "gy", label: "Guyana" },
    { value: "ht", label: "Haití" },
    { value: "hn", label: "Honduras" },
    { value: "hk", label: "Hong Kong" },
    { value: "hu", label: "Hungría" },
    { value: "is", label: "Islandia" },
    { value: "in", label: "India" },
    { value: "id", label: "Indonesia" },
    { value: "ir", label: "Irán" },
    { value: "iq", label: "Irak" },
    { value: "ie", label: "Irlanda" },
    { value: "il", label: "Israel" },
    { value: "it", label: "Italia" },
    { value: "ci", label: "Costa de Marfil" },
    { value: "jm", label: "Jamaica" },
    { value: "jp", label: "Japón" },
    { value: "je", label: "Jersey" },
    { value: "jo", label: "Jordania" },
    { value: "kz", label: "Kazajistán" },
    { value: "ke", label: "Kenia" },
    { value: "ki", label: "Kiribati" },
    { value: "xk", label: "Kosovo" },
    { value: "kw", label: "Kuwait" },
    { value: "kg", label: "Kirguistán" },
    { value: "la", label: "Laos" },
    { value: "lv", label: "Letonia" },
    { value: "lb", label: "Líbano" },
    { value: "ls", label: "Lesoto" },
    { value: "lr", label: "Liberia" },
    { value: "ly", label: "Libia" },
    { value: "li", label: "Liechtenstein" },
    { value: "lt", label: "Lituania" },
    { value: "lu", label: "Luxemburgo" },
    { value: "mo", label: "Macao" },
    { value: "mk", label: "Macedonia" },
    { value: "mg", label: "Madagascar" },
    { value: "mw", label: "Malaui" },
    { value: "my", label: "Malasia" },
    { value: "mv", label: "Maldivas" },
    { value: "ml", label: "Malí" },
    { value: "mt", label: "Malta" },
    { value: "mh", label: "Islas Marshall" },
    { value: "mr", label: "Mauritania" },
    { value: "mu", label: "Mauricio" },
    { value: "mx", label: "México" },
    { value: "fm", label: "Micronesia" },
    { value: "md", label: "Moldavia" },
    { value: "mc", label: "Mónaco" },
    { value: "mn", label: "Mongolia" },
    { value: "me", label: "Montenegro" },
    { value: "ma", label: "Marruecos" },
    { value: "mz", label: "Mozambique" },
    { value: "mm", label: "Birmania" },
    { value: "na", label: "Namibia" },
    { value: "nr", label: "Nauru" },
    { value: "np", label: "Nepal" },
    { value: "nl", label: "Holanda" },
    { value: "nz", label: "Nueva Zelanda" },
    { value: "ni", label: "Nicaragua" },
    { value: "ne", label: "Níger" },
    { value: "ng", label: "Nigeria" },
    { value: "kp", label: "Corea del Norte" },
    { value: "no", label: "Noruega" },
    { value: "om", label: "Omán" },
    { value: "pk", label: "Pakistán" },
    { value: "pw", label: "Palaos" },
    { value: "pa", label: "Panamá" },
    { value: "pg", label: "Papúa Nueva Guinea" },
    { value: "py", label: "Paraguay" },
    { value: "pe", label: "Perú" },
    { value: "ph", label: "Filipinas" },
    { value: "pl", label: "Polonia" },
    { value: "pt", label: "Portugal" },
    { value: "pr", label: "Puerto Rico" },
    { value: "qa", label: "Qatar" },
    { value: "ro", label: "Rumania" },
    { value: "ru", label: "Rusia" },
    { value: "rw", label: "Ruanda" },
    { value: "ws", label: "Samoa" },
    { value: "sm", label: "San Marino" },
    { value: "sa", label: "Arabia Saudita" },
    { value: "sn", label: "Senegal" },
    { value: "rs", label: "Serbia" },
    { value: "sc", label: "Seychelles" },
    { value: "sl", label: "Sierra Leona" },
    { value: "sg", label: "Singapur" },
    { value: "sk", label: "Eslovaquia" },
    { value: "si", label: "Eslovenia" },
    { value: "sb", label: "Islas Salomón" },
    { value: "so", label: "Somalia" },
    { value: "za", label: "Sudáfrica" },
    { value: "kr", label: "Corea del Sur" },
    { value: "es", label: "España" },
    { value: "lk", label: "Sri Lanka" },
    { value: "sd", label: "Sudán" },
    { value: "sr", label: "Surinam" },
    { value: "se", label: "Suecia" },
    { value: "ch", label: "Suiza" },
    { value: "sy", label: "Siria" },
    { value: "tw", label: "Taiwán" },
    { value: "tj", label: "Tayikistán" },
    { value: "tz", label: "Tanzania" },
    { value: "th", label: "Tailandia" },
    { value: "tl", label: "Timor Oriental" },
    { value: "tg", label: "Togo" },
    { value: "to", label: "Tonga" },
    { value: "tn", label: "Túnez" },
    { value: "tr", label: "Turquía" },
    { value: "tm", label: "Turkmenistán" },
    { value: "tv", label: "Tuvalu" },
    { value: "ug", label: "Uganda" },
    { value: "ua", label: "Ucrania" },
    { value: "ae", label: "Emiratos Árabes Unidos" },
    { value: "gb", label: "Reino Unido" },
    { value: "us", label: "Estados Unidos de América" },
    { value: "uy", label: "Uruguay" },
    { value: "uz", label: "Uzbekistán" },
    { value: "vu", label: "Vanuatu" },
    { value: "va", label: "Vaticano" },
    { value: "ve", label: "Venezuela" },
    { value: "vi", label: "Vietnam" },
    { value: "wo", label: "Mundo" },
    { value: "ye", label: "Yemen" },
    { value: "zm", label: "Zambia" },
    { value: "zw", label: "Zimbabue" },
  ];

  return (
    <>
      <Container className="border border-1 mt-5">
        <Form.Group className="mb-3 mt-3 d-flex flex-column flex-md-row p-md-4">
          <Form.Label className="w-50 ms-2 mb-2 mb-md-0 ">
            Busca por Categoría:
          </Form.Label>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {Categorias.map((categoria) => (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            ))}
          </Form.Select>
          <Form.Label className="w-50 ms-2 mb-2 mb-md-0">
            Selecciona un País:
          </Form.Label>
          <Form.Select value={pais} onChange={(e) => setPais(e.target.value)}>
            {Paises.map((pais) => (
              <option key={pais.value} value={pais.value}>
                {pais.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </>
  );
};

export default FormularioNoticias;
