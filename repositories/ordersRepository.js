/**
 * Nome do arquivo: ordersRepository.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Este arquivo contém funções para realizar operações CRUD na coleção de ordens de serviço do Firestore.
 */

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Função para adicionar uma nova ordem de serviço
export const addOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, 'orders'), orderData);
    return { id: docRef.id, ...orderData };
  } catch (error) {
    console.error('Erro ao adicionar ordem de serviço:', error);
  }
};

// Função para obter todas as ordens de serviço
export const getOrders = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'orders'));
    let orders = [];
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    return orders;
  } catch (error) {
    console.error('Erro ao obter ordens de serviço:', error);
  }
};

// Função para atualizar uma ordem de serviço
export const updateOrder = async (id, updatedData) => {
  try {
    const orderRef = doc(db, 'orders', id);
    await updateDoc(orderRef, updatedData);
  } catch (error) {
    console.error('Erro ao atualizar ordem de serviço:', error);
  }
};

// Função para deletar uma ordem de serviço
export const deleteOrder = async (id) => {
  try {
    const orderRef = doc(db, 'orders', id);
    await deleteDoc(orderRef);
  } catch (error) {
    console.error('Erro ao deletar ordem de serviço:', error);
  }
};
