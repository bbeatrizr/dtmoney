import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"></img>
        </header>
        <strong>R$1.000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas"></img>
        </header>
        <strong>R$1.000</strong>
      </div>
      <div className="hinghlight-backgound">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"></img>
        </header>
        <strong>R$1.000</strong>
      </div>
    </Container>
  );
}
