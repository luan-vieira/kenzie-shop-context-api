import Header from "../../components/Header";
import Card from "../../components/Card";
import { useContext } from "react";
import { CatalogueContext } from "./../../Providers/catalogue";
import { Container, List } from "./styles";

function Home() {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <>
      <Header />
      <Container>
        <List>
          {catalogue.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </List>
      </Container>
    </>
  );
}
export default Home;
