import Button from "../Button";
import { Container } from "./styles";
import { useContext } from "react";
import { CartContext } from "./../../Providers/cart";

function Card({ product }) {
  const { addToCart } = useContext(CartContext);

  const formatValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    <Container>
      <figure>
        <img src={product.img} alt={product.name} />
      </figure>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{formatValue}</p>

      <Button type="button" onClick={() => addToCart(product)}>
        <span>Adicionar ao carrinho</span>
      </Button>
    </Container>
  );
}
export default Card;
