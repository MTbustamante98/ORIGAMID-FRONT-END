"use client";

import React from "react";

export default function FormLogin() {
  const [form, setForm] = React.useState({ nome: "", password: "" });
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.nome && !form.password) return;

    try {
      setLoading(true);
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: form.nome, password: form.password }),
      });

      if (res.ok) window.location.href = "/";
    } catch (e) {
      if (e instanceof Error) throw new Error(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.nome}
          onChange={({ target }) => setForm({ ...form, nome: target.value })}
        />
      </div>
      <div>
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={({ target }) =>
            setForm({ ...form, password: target.value })
          }
        />
      </div>
      <button>Enviar</button>
    </form>
  );
}
