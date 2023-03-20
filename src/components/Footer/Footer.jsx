import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Footer = () => {
  const links = [
    {
      url: "https://github.com/Dannfonseca",
      title: "Daniel Nascimento",
    },
    {
      url: "https://github.com/daillamendes",
      title: "Dáilla Mendes",
    },
    {
      url: "https://github.com/Larifabrahao",
      title: "Larissa Abrahão",
    },
    {
      url: "https://github.com/GiovanniMPaula",
      title: "Giovanni Marques",
    },
    {
      url: "https://github.com/thaynalp",
      title: "Thayná Lopes",
    },
    {
      url: "https://github.com/BeatrizSales007",
      title: "Anna Beatriz Sales",
    },
    
  ];
  return (
    <div className="footer">
      <Container>
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.url}>
              {link.title}
            </Link>
          );
        })}
      </Container>
    </div>
  );
};
