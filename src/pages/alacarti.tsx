import { useState } from "react";
import Header from "../components/header";
import CardAlacarti from "../components/CardAlacarti";
import PedidoButton from "../components/PedidoButton";
import ProductDetails from "../components/ProductDetails";


import foto from "../assets/hamburguer2.png";
import "../components/CSS/alacarti.css";
import { AnimatePresence } from "framer-motion";

type Produto = {
  imagem: string;
  nome: string;
  descricao: string;
};

export default function Alacarti() {
  const produtos: Produto[] = [
    {
      imagem: foto,
      nome: "Cheddar Bacon",
      descricao: "Pão australiano, cheddar e bacon.",
    },
    {
      imagem: foto,
      nome: "Costela BBQ",
      descricao: "Costela desfiada com molho barbecue.",
    },
    {
      imagem: foto,
      nome: "Frango Grelhado",
      descricao: "Peito de frango grelhado com tempero especial.",
    },
    {
      imagem: foto,
      nome: "Veggie Burger",
      descricao: "Hambúrguer vegetariano com legumes frescos.",
    },
    {
      imagem: foto,
      nome: "Bacon Duplo",
      descricao: "Dois hambúrgueres com muito bacon.",
    },
    {
      imagem: foto,
      nome: "Cheeseburger",
      descricao: "Clássico cheeseburger com queijo derretido.",
    },

    {
      imagem: foto,
      nome: "Frango Crocante",
      descricao: "Filé de frango empanado e molho especial.",
    },
    {
      imagem: foto,
      nome: "X-Tudo da Casa",
      descricao: "Tudo que há de bom em um lanche só.",
    },
    {
      imagem: foto,
      nome: "Veggie Burger",
      descricao: "Hambúrguer vegetariano com legumes grelhados.",
    },
  ];

  const [detalheAberto, setDetalheAberto] = useState<number | null>(null);

  const [selecionados, setSelecionados] = useState<number[]>([]);

  const toggleSelecionado = (index: number) => {
    if (selecionados.includes(index)) {
      setSelecionados(selecionados.filter((i) => i !== index));
    } else if (selecionados.length < 4) {
      setSelecionados([...selecionados, index]);
    }
  };

  const fazerPedido = () => {
    alert("Pedido feito com os itens selecionados!");
  };

  return (
    <>
      <Header />
      {/* Adiciona o fundo com blur quando a modal está aberta */}
      {detalheAberto !== null && <div className="blur-background"></div>}

      <div className="container">
        <div className="container_alacarti">
          <div className="nav_alacarti">
            <ul className="nav_alacarti_list">
              <li>
                <a href="#">Promoção</a>
              </li>
              <li>
                <a href="#">Lanches</a>
              </li>
              <li>
                <a href="#">Cupons</a>
              </li>
              <li>
                <a href="#">Sobremesas</a>
              </li>
              <li>
                <a href="#">Bebidas</a>
              </li>
            </ul>
          </div>

          <div className="products_alacarti">
            <div className="content_alacarti">
              {produtos.map((item, index) => (
                <CardAlacarti
                  key={index}
                  imagem={item.imagem}
                  nome={item.nome}
                  selecionado={selecionados.includes(index)}
                  onClick={() => setDetalheAberto(index)} // mostra detalhe ao clicar
                />
              ))}
            </div>
          </div>

          <AnimatePresence>
            {detalheAberto !== null && (
              <ProductDetails
                nome={produtos[detalheAberto].nome}
                descricao={produtos[detalheAberto].descricao}
                imagem={produtos[detalheAberto].imagem} // Passa a imagem para o modal
                jaSelecionado={selecionados.includes(detalheAberto)}
                onClose={() => setDetalheAberto(null)}
                onAdd={() => {
                  toggleSelecionado(detalheAberto);
                  setDetalheAberto(null);
                }}
              />
            )}
          </AnimatePresence>

          {/* Exibe o botão apenas se houver itens selecionados e a modal não estiver aberta */}
          {selecionados.length > 0 && detalheAberto === null && (
            <PedidoButton onClick={fazerPedido} />
          )}
        </div>
      </div>
    </>
  );
}
