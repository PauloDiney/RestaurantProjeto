import { useState } from "react";
import Header from "../components/header";
import CardAlacarti from "../components/CardAlacarti";
import PedidoButton from "../components/PedidoButton";
import foto from "../assets/hamburguer2.png";
import '../components/CSS/alacarti.css';
import { AnimatePresence } from 'framer-motion';



type Produto = {
  imagem: string;
  nome: string;
  descricao: string;
};

export default function Alacarti() {
  const produtos: Produto[] = [
    { imagem: foto, nome: "Cheddar Bacon", descricao: "Pão australiano, cheddar e bacon." },
    { imagem: foto, nome: "Costela BBQ", descricao: "Costela desfiada com molho barbecue." },
    { imagem: foto, nome: "Veggie Especial", descricao: "Hambúrguer vegetal e maionese verde." },
    { imagem: foto, nome: "Triplo Smash", descricao: "3 hambúrgueres e queijo derretido." },
    { imagem: foto, nome: "Frango Crocante", descricao: "Filé de frango empanado e molho especial." },
    { imagem: foto, nome: "X-Tudo da Casa", descricao: "Tudo que há de bom em um lanche só." },
  ];

  const [selecionados, setSelecionados] = useState<number[]>([]);

  const toggleSelecionado = (index: number) => {
    if (selecionados.includes(index)) {
      setSelecionados(selecionados.filter(i => i !== index));
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
      <div className="container">
        <div className="container_alacarti">
          <div className="nav_alacarti">
            <ul className="nav_alacarti_list">
              <li><a href="#">Promoção</a></li>
              <li><a href="#">Lanches</a></li>
              <li><a href="#">Cupons</a></li>
              <li><a href="#">Sobremesas</a></li>
              <li><a href="#">Bebidas</a></li>
            </ul>
          </div>

          <div className="products_alacarti">
            <div className="content_alacarti">
              {produtos.map((item, index) => (
                <CardAlacarti
                  key={index}
                  imagem={item.imagem}
                  nome={item.nome}
                  descricao={item.descricao}
                  selecionado={selecionados.includes(index)}
                  onClick={() => toggleSelecionado(index)}
                />
              ))}
            </div>
          </div>

          <AnimatePresence>
            {selecionados.length > 0 && (
              <PedidoButton onClick={fazerPedido} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
