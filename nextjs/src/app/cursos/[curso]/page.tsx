import Link from "next/link";
import { getCursosAula } from "../api/cursos";

type PageParams = {
  params: Promise<{ curso: string }>;
};

export default async function CursosPage({ params }: PageParams) {
  const { curso } = await params;
  const dados = await getCursosAula(curso);
  return (
    <div>
      <h1>{dados && dados.nome}</h1>
      <p>{dados && dados.descricao}</p>
      <p>Total Horas: {dados && dados.total_horas}</p>
      <p>Total Aulas: {dados && dados.total_aulas}</p>
      <ul>
        {dados &&
          dados.aulas.map((aula) => (
            <li key={aula.id}>
              <Link href={`/cursos/${curso}/${aula.slug}`}>{aula.nome}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
