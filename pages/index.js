/**
 * Nome do arquivo: index.js
 * Data de criação: 07/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Página inicial do projeto que redireciona para a página de gerenciamento de clientes.
 */

import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/clientes');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Bem-vindo ao Gerenciamento de Clientes</h1>
        <p className="text-lg mb-8">Clique no botão abaixo para gerenciar clientes</p>
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Gerenciar Clientes
        </button>
      </div>
    </main>
  );
}

