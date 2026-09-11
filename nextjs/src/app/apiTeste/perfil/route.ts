import { cookies } from "next/headers";

export default async function GET() {
  const cookiesStore = await cookies();
  const token = cookiesStore.get("token")?.value;
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Autorizathion: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  return Response.json(data);
}
