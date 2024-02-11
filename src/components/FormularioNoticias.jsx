import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [categoria, setCategoria] = useState("general");
  const [pais, setPais] = useState("");
  const [noticias, setNoticias] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=de7790c8316344f1aad516564e45553f`;

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria, pais]);

  const Categorias = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  const Paises = [
    { value: "us", label: "Estados Unidos" },
    { value: "gb", label: "Reino Unido" },
    { value: "AF", label: "Afganistán" },
    { value: "AL", label: "Albania" },
    { value: "DE", label: "Alemania" },
    { value: "AO", label: "Angola" },
    { value: "AN", label: "Antillas Holandesas" },
    { value: "SA", label: "Arabia Saudita" },
    { value: "DZ", label: "Argelia" },
    { value: "AR", label: "Argentina" },
    { value: "AM", label: "Armenia" },
    { value: "AU", label: "Australia" },
    { value: "AT", label: "Austria" },
    { value: "BS", label: "Bahamas" },
    { value: "BB", label: "Barbados" },
    { value: "BE", label: "Bélgica" },
    { value: "BZ", label: "Belice" },
    { value: "BM", label: "Bermudas" },
    { value: "BO", label: "Bolivia" },
    { value: "BA", label: "Bosnia" },
    { value: "BR", label: "Brasil" },
    { value: "BG", label: "Bulgaria" },
    { value: "CV", label: "Cabo Verde" },
    { value: "CM", label: "Camerún" },
    { value: "CA", label: "Canadá" },
    { value: "CL", label: "Chile" },
    { value: "CN", label: "China" },
    { value: "CY", label: "Chipre" },
    { value: "CO", label: "Colombia" },
    { value: "CG", label: "Congo" },
    { value: "CI", label: "Costa de Marfil" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croacia" },
    { value: "CU", label: "Cuba" },
    { value: "CX", label: "Curazao" },
    { value: "DK", label: "Dinamarca" },
    { value: "DM", label: "Dominica" },
    { value: "EC", label: "Ecuador" },
    { value: "EG", label: "Egipto" },
    { value: "SV", label: "El Salvador" },
    { value: "AE", label: "Emiratos Árabes Unidos" },
    { value: "SK", label: "Eslovaquia" },
    { value: "SI", label: "Eslovenia" },
    { value: "ES", label: "España" },
    { value: "EE", label: "Estonia" },
    { value: "PH", label: "Filipinas" },
    { value: "FI", label: "Finlandia" },
    { value: "FR", label: "Francia" },
    { value: "GA", label: "Gabón" },
    { value: "GE", label: "Georgia" },
    { value: "GH", label: "Ghana" },
    { value: "GB", label: "Gran Bretaña" },
    { value: "GD", label: "Granada" },
    { value: "GR", label: "Grecia" },
    { value: "GT", label: "Guatemala" },
    { value: "GG", label: "Guernsey" },
    { value: "GY", label: "Guyana" },
    { value: "HT", label: "Haití" },
    { value: "NL", label: "Holanda" },
    { value: "HN", label: "Honduras" },
    { value: "HK", label: "Hong Kong" },
    { value: "HU", label: "Hungría" },
    { value: "IN", label: "India" },
    { value: "ID", label: "Indonesia" },
    { value: "IG", label: "Inglaterra" },
    { value: "IR", label: "Irán" },
    { value: "IQ", label: "Irak" },
    { value: "IE", label: "Irlanda" },
    { value: "IM", label: "Isla de Man" },
    { value: "IS", label: "Islandia" },
    { value: "KY", label: "Islas Caimán" },
    { value: "MH", label: "Islas Marshall" },
    { value: "VI", label: "Islas Vírgenes (EE. UU.)" },
    { value: "VG", label: "Islas Vírgenes Británicas" },
    { value: "IL", label: "Israel" },
    { value: "IT", label: "Italia" },
    { value: "JM", label: "Jamaica" },
    { value: "JP", label: "Japón" },
    { value: "JE", label: "Jersey" },
    { value: "JO", label: "Jordania" },
    { value: "KZ", label: "Kazajistán" },
    { value: "KE", label: "Kenia" },
    { value: "KW", label: "Kuwait" },
    { value: "LB", label: "Líbano" },
    { value: "LR", label: "Liberia" },
    { value: "LU", label: "Luxemburgo" },
    { value: "MY", label: "Malasia" },
    { value: "MT", label: "Malta" },
    { value: "MA", label: "Marruecos" },
    { value: "MU", label: "Mauricio" },
    { value: "MR", label: "Mauritania" },
    { value: "MX", label: "México" },
    { value: "MC", label: "Mónaco" },
    { value: "MN", label: "Mongolia" },
    { value: "MZ", label: "Mozambique" },
    { value: "NA", label: "Namibia" },
    { value: "NP", label: "Nepal" },
    { value: "NI", label: "Nicaragua" },
    { value: "NG", label: "Nigeria" },
    { value: "NO", label: "Noruega" },
    { value: "NZ", label: "Nueva Zelanda" },
    { value: "OM", label: "Omán" },
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
