import Link from "next/link";
import { getCurso } from "./api/cursos";

export default async function Cursos() {
  const cursos = await getCurso();

  return (
    <div>
      <h1>Cursos</h1>{" "}
      <ul>
        {cursos?.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
