//Sempre evitar utilizar use client em pages, somente em componentes.
import dynamic from "next/dynamic";
// import ServerFetch from "../components/server-fetch";
//Solução para pré-renderização. Dessa forma, podemos utilizar APIs web durante a pré-renderização em client components.
export const Width = dynamic(() => import("../components/width"));

export default function Home() {
  return (
    <main>
      
      <h1>Home</h1>
      {/* <Width />
      <ServerFetch /> */}
    </main>
  );
}
