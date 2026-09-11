import React from "react";
//Podemos utilizar async em componentes de servidor.
type Produto = {
  id: number;
  nome: string;
};

export default async function ServerFetch() {
  const res = await fetch("https://api.origamid.online/produtos");
  const data = (await res.json()) as Produto[];

  return (
    <ul>
      {data.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </ul>
  );
}
