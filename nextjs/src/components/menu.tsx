//Definimos um componente como client utilizando o use client
//Sempre evitar utilizar use client em pages, somente em componentes.

import Link from "next/link";
import { cookies } from "next/headers";

type PromiseConta = {
  autorizado: boolean;
  usuario: string;
};

export default async function menu() {
  let conta: PromiseConta = {
    autorizado: false,
    usuario: "",
  };

  const token = (await cookies()).get("token")?.value;

  const res = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: `Berear ${token}`,
    },
  });

  if (res.ok) conta = (await res.json()) as PromiseConta;

  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/imc">Imc</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          {conta && conta.autorizado ? (
            conta.usuario
          ) : (
            <Link href="/formLogin">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}
