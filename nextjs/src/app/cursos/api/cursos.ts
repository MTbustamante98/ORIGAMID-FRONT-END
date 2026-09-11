import { Curso, Aula } from "@/src/app/cursos/interface";

export async function getCurso() {
  const res = await fetch("https://api.origamid.online/cursos/");

  return (await res.json()) as Curso[];
}

export async function getCursosAula(curso: string) {
  const res = await fetch(`https://api.origamid.online/cursos/${curso}`);

  return (await res.json()) as Curso & { aulas: Aula[] };
}

export async function getAula(curso: string, aula: string) {
    const res = await fetch(
      `https://api.origamid.online/cursos/${curso}/${aula}`,
    );

    return (await res.json()) as Aula;
}
