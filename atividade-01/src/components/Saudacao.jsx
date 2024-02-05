import PropTypes from "prop-types";

const Saudacao = ({ nome, curso }) => {
  const saudacao = () => {
    const horario = new Date().getHours();
    if (horario >= 6 && horario < 12) {
      return "Bom dia";
    } else if (horario >= 12 && horario < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };
  return (
    <div>
      <h1>
        {saudacao()}, {nome}!
      </h1>
      <p>Sucesso na sua jornada em {curso}.</p>
    </div>
  );
};

Saudacao.propTypes = {
  nome: PropTypes.string.isRequired,
  curso: PropTypes.string.isRequired,
};

export default Saudacao;
