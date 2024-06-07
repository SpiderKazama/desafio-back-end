/**
 * Nome do arquivo: index.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Este arquivo contém a página de gerenciamento de clientes, permitindo visualizar,
 * adicionar, atualizar e excluir clientes usando uma tabela HTML.
 */

import { useState, useEffect } from 'react';
import axios from 'axios';

const ClientsPage = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({
    id: '',
    name: '',
    address: '',
    phone: '',
    email: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erro ao buscar clientes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put('/api/clients', form);
      } else {
        await axios.post('/api/clients', form);
      }
      fetchClients();
      setForm({ id: '', name: '', address: '', phone: '', email: '' });
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar cliente:', error);
    }
  };

  const handleEdit = (client) => {
    setForm(client);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete('/api/clients', { data: { id } });
      fetchClients();
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Clientes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Endereço"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Telefone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <button type="submit">{isEditing ? 'Atualizar' : 'Adicionar'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.address}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>
                <button onClick={() => handleEdit(client)}>Editar</button>
                <button onClick={() => handleDelete(client.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsPage;

