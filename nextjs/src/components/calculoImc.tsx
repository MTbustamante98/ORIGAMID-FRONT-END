"use client";
import React from "react";

const calculoImc = () => {
  const [peso, setPeso] = React.useState<number | null>(null);
  const [altura, setAltura] = React.useState<number | null>(null);
  const [total, setTotal] = React.useState<number | null>(null);

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (!peso || !altura) return;

    const alturaMetro = altura / 100;

    const totalImc = Number(peso / alturaMetro ** 2).toFixed(2);

    setTotal(parseFloat(totalImc));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-240 flex bg-amber-200 p-8 relative"
    >
      <div>
        <label htmlFor="altura">Altura: </label>
        <input
          className="w-full"
          type="text"
          id="altura"
          name="peso"
          placeholder="Digite sua altura..."
          onChange={({ target }) => setAltura(parseFloat(target.value))}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso: </label>
        <input
          className="w-full"
          type="text"
          id="peso"
          name="altura"
          placeholder="Digite seu peso..."
          onChange={({ target }) => setPeso(parseFloat(target.value))}
        />
      </div>
      <div className="absolute -bottom-3">
        <button type="submit">Calcular</button>
      </div>
      <span className="self-center">IMC =</span>
      {total && (
        <div className="self-end">
          <span>Altura: {altura}m</span>
          <span>Peso: {peso}Kg</span>
          <p>
            Total IMC: <span className="text-2xl font-black">{total}</span>{" "}
          </p>
        </div>
      )}
    </form>
  );
};

export default calculoImc;
