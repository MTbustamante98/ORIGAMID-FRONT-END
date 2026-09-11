import { getAula } from "../../api/cursos";

type PageParams = {
  params: Promise<{ curso: string; aula: string }>;
};

export default async function AulaPage({ params }: PageParams) {
  const { curso, aula } = await params;
  const dadosAula = await getAula(curso, aula);
  return (
    <div>
      <h1>{dadosAula.nome}</h1>
      <p>{dadosAula.descricao}</p>
      <p>Tempo: {dadosAula.tempo}</p>
    </div>
  );
}
