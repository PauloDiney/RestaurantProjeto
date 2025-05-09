import Header from "../components/header";
import "../components/CSS/rodizios.css";
import Qrcode from "../assets/qrcode.jpg";
import hamburguer1 from "../assets/hamburguer1.svg";
import folha from "../assets/folha.png";
import hamburguer2 from "../assets/hamburguer2.png";
import { motion } from "framer-motion";

export default function Rodizio() {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container_rodizio">
          <div className="container_rodizio_content">
            <div className="container_rodizio_text">
              <h1 className="rodizio_text">Rodízio de Hamburguer</h1>
              <p>
                Desfrute de diversos <span>hambúrgueres</span> por um preço
                fixo! Uma experiência única com sabores que vão dos clássicos
                aos mais <span>criativos</span>, feitos com ingredientes frescos
                e de qualidade.
              </p>

              <h1 className="rodizio_price">$68,99</h1>
            </div>
          </div>
          <div className="container_rodizio_qRcode">
            <div className="container_rodizio_qRcode_text">
              <p>
                Escaneie o QR Code e dê o primeiro mordida na experiência!
              </p>
            </div>

            <img src={Qrcode} alt="QR Code" />
          </div>
        </div>
        <img className="rodizios_figures" src={hamburguer1} alt="" />
        <img className="rodizios_folha" src={folha} alt="" />
        <img className="hamburguer2" src={hamburguer2} alt="" />
      </motion.div>
    </>
  );
}
