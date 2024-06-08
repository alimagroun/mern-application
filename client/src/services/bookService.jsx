import axios from 'axios';

const API_URL = 'http://localhost:8082/api/books';

export const createBook = async (bookData) => {
  try {
    await axios.post(API_URL, bookData);
  } catch (error) {
    console.error('Error from createBook:', error);
    throw error;
  }
};

export const getAllBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error from getAllBooks:', error);
    throw error;
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error from getBookById:', error);
    throw error;
  }
};

export const updateBook = async (id, bookData) => {
  try {
    await axios.put(`${API_URL}/${id}`, bookData);
  } catch (error) {
    console.error('Error from updateBook:', error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error from deleteBook:', error);
    throw error;
  }
};