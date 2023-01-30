import capuz from "./../images/capuz.png";
import jacket from "./../images/jacket.png";
import mask from "./../images/mask.png";
import mockup from "./../images/mockup.png";
import tshirtBlack from "./../images/tshirt-black.png";
import tshirtWhite from "./../images/tshirt-white.png";

// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState([
    {
      id: 0,
      img: jacket,
      name: `Lightweight Jacket`,
      description: `Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...`,
      price: 100.0,
    },
    {
      id: 1,
      img: capuz,
      name: `Black Hat`,
      description: `AO gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...`,
      price: 100.0,
    },
    {
      id: 2,
      img: mask,
      name: `Mask`,
      description: `Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas... `,
      price: 40.0,
    },
    {
      id: 3,
      img: tshirtBlack,
      name: `T-Shirt`,
      description: `Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...`,
      price: 100.0,
    },
    {
      id: 4,
      img: tshirtWhite,
      name: `Short-Sleeve T-Shirt`,
      description: `Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...`,
      price: 100.0,
    },
    {
      id: 5,
      img: mockup,
      name: `Champion Packable Jacket`,
      description: `Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...`,
      price: 100.0,
    },
  ]);

  // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

  // criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

  return (
    <CatalogueContext.Provider
      value={{ catalogue, addToCatalogue, removeFromCatalogue }}
    >
      {children}
    </CatalogueContext.Provider>
  );
};
