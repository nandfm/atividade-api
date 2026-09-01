import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const contas = {
  /*

        objeto-contas: {
        {

numero: '78DBDF', => uuid gerado
nome: 'Wanderson Reis,
saldo: 150.99

}
    */
};

app.post("/contas", (req, res) => {
  const { nome, saldo } = req.body;
  const idConta = uuidv4();
  contas.idConta;
  contas[idConta] = { numero: idConta, nome, saldo };
  console.log(contas);
  res.status(201).json({ msg: "Conta criada com sucesso", conta: contas[idConta] });
  res.status(400).json({ msg: "Saldo inválido" });
});

app.get("/contas", (req, res) => {
  return res.status(200).json(contas);
});

app.get("/contas/:numero", (req, res) => {
  const { numero } = req.params;
  const conta = contas.find((c) => c.numero === numero);

  if (!conta) {
    return res.status(404).json({ mensagem: "Conta não encontrada" });
  }

  return res.status(200).json(conta);
});

app.patch("/contas/:numero", (req, res) => {
  const { numero } = req.params;
  const { saldo } = req.body;

  const conta = contas.find((c) => c.numero === numero);
  if (!conta) return res.end();

  conta.saldo = saldo;
  res.json(conta);
});

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
