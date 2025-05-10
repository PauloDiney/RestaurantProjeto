import "./CSS/alacarti_window.css";

type Props = {
  nome: string;
  descricao: string;
  imagem: string; // Adiciona a propriedade para a imagem
  onClose: () => void;
  onAdd: () => void;
  jaSelecionado: boolean;
};

export default function ProductDetails({ nome, descricao, imagem, onClose, onAdd, jaSelecionado }: Props) {
  return (
    <div className="product-details-modal">
      <img src={imagem} alt={nome} /> {/* Exibe a imagem */}
      <span>{nome}</span>
      <p>{descricao}</p>
      <button onClick={onAdd}>
        {jaSelecionado ? "Remover" : "Adicionar"}
      </button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
}
