/* eslint-disable prettier/prettier */

import axios from 'axios';
import {API_URL} from '../../config';

interface PaginationParams {
  offset: number;
  limit: number;
}

export default async function getAllPokemon({offset, limit}: PaginationParams) {
  let url = API_URL + '/?offset=' + offset + '&limit=' + limit;
  console.log(url);

  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getMorePokemonFromUrl(url: string) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getPokemonDetails(url: string) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getEvolutionChain(url: string) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
