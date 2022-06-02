import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Aluguel</td>
            <td className="deposit">R$2.500</td>
            <td>Apartamento</td>
            <td>21/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>McDonalds</td>
            <td className="withdraw">-R$500</td>
            <td>Comida</td>
            <td>28/02/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Zara</td>
            <td className="withdraw">-R$10.000</td>
            <td>Roupas</td>
            <td>29/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
