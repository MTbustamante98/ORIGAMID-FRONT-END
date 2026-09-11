type PageParams = {
  params: {
    id: string;
  };
};

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
};

export default async function ProdutoPage({ params }: PageParams) {
  console.log(params)
  const res = await fetch(`https://api.origamid.online/produtos/${params.id}`);
  const data = (await res.json()) as Produto;

  return (
    <main>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <p>{data.preco}</p>
    </main>
  );
}
