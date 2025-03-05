import axios from "axios";
import { Record } from "../types";

const API_BASE_URL = "http://localhost:8080/api"; // Adjust to your backend URL

export const fetchRecords = async (): Promise<Record[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/records`);
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

export const searchRecords = async (query: string): Promise<Record[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/records/search`, {
      params: { query },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching records:", error);
    throw error;
  }
};
