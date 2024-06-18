import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

// componentes
import UserForm from "../../components/UserForm";
import ReviewForm from "../../components/ReviewForm";
import Thanks from "../../components/Thanks";

// hooks
import { useForm } from "../../hooks/useForm";
const FormPage = () => {
  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep } = useForm(formComponents);
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com sua compra. Utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <p>passos</p>
        <form onSubmit={(e) => changeStep(currentStep + 1,e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="action">
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
