import { useState } from "react";

export function App() {
  const [list, setList] = useState([
    { id: 1, label: "Tomate", complete: false },
    { id: 2, label: "Laranja", complete: false },
    { id: 3, label: "Arroz", complete: false },
    { id: 4, label: "Manga", complete: false },
  ]);
  const [valor, setValor] = useState("");

  return (
    <div>
      <input value={valor} onChange={(v) => setValor(v.target.value)} />

      <button
        onClick={() => {
          setList([...list, { id: list.length + 1, label: valor, complete: false }]);
          setValor('');
        }}
      >
        Adicionar
      </button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}

            {listItem.complete ? 'Concluído' : ''}

            <button
              onClick={() => {
                setList([
                  ...list.map(item => ({
                    ...item,
                    complete: item.id === listItem.id ? true : item.complete
                  }))
                ]);
              }}
            >
              Concluir
            </button>

            <button
              onClick={() => {
                setList(() => [
                  ...list.filter((item) => item.id !== listItem.id),
                ]);
              }}
            >
              Remover
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
