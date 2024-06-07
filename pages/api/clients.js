/**
 * Nome do arquivo: clientes.js
 * Data de criação: 07/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * responsável por lidar com as requisições de CRUD (Create, Read, Update, Delete) no backend.
 * 
 */

import { database } from '../../firebaseConfig';

const handler = async (req, res) => {
  const clientesRef = database.ref('clientes');

  switch (req.method) {
    case 'GET':
      clientesRef.once('value', (snapshot) => {
        const data = snapshot.val();
        res.status(200).json(data);
      });
      break;
    case 'POST':
      const newClient = req.body;
      clientesRef.push(newClient);
      res.status(201).json({ message: 'Cliente adicionado com sucesso' });
      break;
    case 'PUT':
      const { id, ...updatedClient } = req.body;
      clientesRef.child(id).update(updatedClient);
      res.status(200).json({ message: 'Cliente atualizado com sucesso' });
      break;
    case 'DELETE':
      const { clientId } = req.body;
      clientesRef.child(clientId).remove();
      res.status(200).json({ message: 'Cliente excluído com sucesso' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Método ${req.method} não permitido`);
  }
};

export default handler;
