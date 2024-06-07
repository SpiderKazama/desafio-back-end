/**
 * Nome do arquivo: clientsRepository.js
 * Data de criação: 06/06/2024
 * Autor: Lindon Jhonson Gomes Assunção
 * Matrícula: 01626960
 *
 * Descrição:
 * Este arquivo contém funções para realizar operações CRUD na coleção de clientes do Firestore.
 */

import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Função para adicionar um novo cliente
export const addClient = async (clientData) => {
  try {
    const docRef = await addDoc(collection(db, 'clients'), clientData);
    return { id: docRef.id, ...clientData };
  } catch (error) {
    console.error('Erro ao adicionar cliente:', error);
  }
};

// Função para obter todos os clientes
export const getClients = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'clients'));
    let clients = [];
    querySnapshot.forEach((doc) => {
      clients.push({ id: doc.id, ...doc.data() });
    });
    return clients;
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
  }
};

// Função para atualizar um cliente
export const updateClient = async (id, updatedData) => {
  try {
    const clientRef = doc(db, 'clients', id);
    await updateDoc(clientRef, updatedData);
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
  }
};

// Função para deletar um cliente
export const deleteClient = async (id) => {
  try {
    const clientRef = doc(db, 'clients', id);
    await deleteDoc(clientRef);
  } catch (error) {
    console.error('Erro ao deletar cliente:', error);
  }
};
