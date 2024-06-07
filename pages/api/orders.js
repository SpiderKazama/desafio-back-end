/**
 *
 *Nome do arquivo: orders.js
 *Data de criação: 07/06/2024
 *Autor: Lindon Jhonson Gomes Assunção
 *Matrícula: 01626960
 *Descrição:
 *É responsável por lidar com as requisições de CRUD (Create, Read, Update, Delete)
 *para as ordens de serviço no backend. Ele define os endpoints para listar, adicionar, atualizar e excluir
 *ordens de serviço no Firebase Realtime Database.
*/

// pages/api/orders.js
import { createOrder, getAllOrders, modifyOrder, removeOrder } from '../../controllers/ordersController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const orders = await getAllOrders();
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } else if (req.method === 'PUT') {
    const { id, ...updatedOrder } = req.body;
    await modifyOrder(id, updatedOrder);
    res.status(200).json({ id, ...updatedOrder });
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    await removeOrder(id);
    res.status(200).json({ id });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

