import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export default async function POST(request: NextRequest) {
  const body = (await request.json()) as { nome: string; password: string };

  const res = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: body.nome,
      password: body.password,
    }),
  });

  if (!res.ok) return Response.json({ ok: "Dados incorretos", status: 404 });

  const data = await res.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: true,
  });

  return Response.json({ autorizado: true });
}
