/**
 * Nome do arquivo: clients.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Página de gerenciamento de clientes. Permite adicionar, visualizar,
 * atualizar e excluir clientes do banco de dados Firebase.
 */

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Clientes.module.css';

export default function Clients() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await axios.get('/api/clientes');
      setClientes(response.data ? Object.keys(response.data).map(id => ({ id, ...response.data[id] })) : []);
    };

    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClient = { nome, endereco, telefone, email };

    if (editId) {
      await axios.put('/api/clientes', { id: editId, ...newClient });
      setEditId(null);
    } else {
      await axios.post('/api/clientes', newClient);
    }

    setNome('');
    setEndereco('');
    setTelefone('');
    setEmail('');

    const response = await axios.get('/api/clientes');
    setClientes(response.data ? Object.keys(response.data).map(id => ({ id, ...response.data[id] })) : []);
  };

  const handleEdit = (cliente) => {
    setEditId(cliente.id);
    setNome(cliente.nome);
    setEndereco(cliente.endereco);
    setTelefone(cliente.telefone);
    setEmail(cliente.email);
  };

  const handleDelete = async (id) => {
    await axios.delete('/api/clients', { data: { clientId: id } });

    const response = await axios.get('/api/clientes');
    setClientes(response.data ? Object.keys(response.data).map(id => ({ id, ...response.data[id] })) : []);
  };

  return (
    <div className={styles.container}>
      <h1>Gerenciamento de Clientes</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {editId ? 'Atualizar' : 'Adicionar'}
        </button>
      </form>
      <table className={styles.table}>
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
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.endereco}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
              <td>
                <button onClick={() => handleEdit(cliente)} className={styles.editButton}>
                  Editar
                </button>
                <button onClick={() => handleDelete(cliente.id)} className={styles.deleteButton}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
