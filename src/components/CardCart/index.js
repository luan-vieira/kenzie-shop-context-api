import Button from "../Button";

import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";
function CardCart({ product }) {
  const { removeFromCart } = useContext(CartContext);

  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <section>
        <h2>{product.name}</h2>
      </section>
      <span>{formatValue}</span>
      <div>
        <Button type="button" onClick={() => removeFromCart(product)}>
          <span>Remover do carrinho</span>
        </Button>
      </div>
    </Container>
  );
}
export default CardCart;
