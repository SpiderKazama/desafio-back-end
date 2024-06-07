/**
 * Nome do arquivo: clientsController.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funções controladoras para lidar com as operações
 * de CRUD (Create, Read, Update, Delete) relacionadas aos clientes no backend. Ele define as funções para
 * adicionar, atualizar, listar e excluir clientes, que serão chamadas pelos endpoints da API REST.
 */

// controllers/clientsController.js
import { addClient, getClients, updateClient, deleteClient } from '../repositories/clientsRepository';

// Create a new client
export const createClient = async (client) => {
  return await addClient(client);
};

// Get all clients
export const getAllClients = async () => {
  return await getClients();
};

// Update a client
export const modifyClient = async (id, updatedClient) => {
  await updateClient(id, updatedClient);
};

// Delete a client
export const removeClient = async (id) => {
  await deleteClient(id);
};
