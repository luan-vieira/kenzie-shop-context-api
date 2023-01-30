import { Container, Content, BoxButtons } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
function Header() {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <Content>
        <h1>Kenzie Shop</h1>
        <BoxButtons>
          <Button onClick={() => handleNavigation("/cart")}>
            {cart.length > 0 && cart.length} Carrinho
          </Button>
          <Button onClick={() => handleNavigation("/")}>Home</Button>
        </BoxButtons>
      </Content>
    </Container>
  );
}
export default Header;
