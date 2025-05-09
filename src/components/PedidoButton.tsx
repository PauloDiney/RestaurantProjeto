import { motion } from 'framer-motion';

type PedidoButtonProps = {
  onClick: () => void;
};

export default function PedidoButton({ onClick }: PedidoButtonProps) {
  return (
    <motion.div
      className="pedido_button_container"
      initial={{ opacity: 0, y: 50 }}       // ao entrar: começa invisível e abaixo
      animate={{ opacity: 1, y: 0 }}        // anima para visível e posição normal
      exit={{ opacity: 0, y: 50 }}          // ao sair: volta para invisível e abaixo
      transition={{ duration: 0.4 }}        // duração da transição
    >
      <button className="pedido_button" onClick={onClick}>
        Fazer Pedido
      </button>
    </motion.div>
  );
}
