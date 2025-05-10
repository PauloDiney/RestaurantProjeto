type CardAlacartiProps = {
  imagem: string;
  nome: string;
  descricao: string;
  selecionado: boolean;
  onClick: () => void;
};

export default function CardAlacarti({ imagem, nome,  selecionado, onClick }: CardAlacartiProps) {
  return (
    <article
      className={`card_alacarti ${selecionado ? 'selecionado' : ''}`}
      onClick={onClick}
    >
      <div className="lunch_picture">
        <img src={imagem} alt={nome} />
      </div>
      <div className="lunch_description">
        <span>{nome}</span>
        
      </div>
    </article>
  );
}
