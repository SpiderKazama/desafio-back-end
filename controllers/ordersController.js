/**
 * Nome do arquivo: ordersController.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Este arquivo JavaScript é responsável por implementar as funções controladoras para lidar com as operações
 * de CRUD (Create, Read, Update, Delete) relacionadas às ordens de serviço no backend. Ele define as funções para
 * adicionar, atualizar, listar e excluir ordens de serviço, que serão chamadas pelos endpoints da API REST.
 */

// controllers/ordersController.js
import { addOrder, getOrders, updateOrder, deleteOrder } from '../repositories/ordersRepository';

// Create a new order
export const createOrder = async (order) => {
  return await addOrder(order);
};

// Get all orders
export const getAllOrders = async () => {
  return await getOrders();
};

// Update an order
export const modifyOrder = async (id, updatedOrder) => {
  await updateOrder(id, updatedOrder);
};

// Delete an order
export const removeOrder = async (id) => {
  await deleteOrder(id);
};

