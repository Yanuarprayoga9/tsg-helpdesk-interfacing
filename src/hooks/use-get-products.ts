import { useQuery, UseQueryOptions } from '@tanstack/react-query';
// import api from '@/lib/api';
import axios from 'axios';


interface QueryParams {
  query?: string;       
  limit?: number;       
  skip?: number;        
  sortBy?: string;        // Kolom untuk pengurutan (misalnya, "title")
  order?: 'asc' | 'desc'; 
  category?: string;     
}

// Fungsi untuk fetch produk dengan parameter dinamis dan Bearer token
const fetchProducts = async (params: QueryParams) => {
  const { query, limit, skip, sortBy, order, category } = params;

  // Bearer token


  let url = 'https://dummyjson.com/products';

  // Filter berdasarkan kategori
  if (category) {
    url += `/category/${category}`;
  } else if (query) {
    url += `/search?q=${query}`;
  }

  // Mengatur parameter query
  const searchParams = new URLSearchParams();
  if (limit !== undefined) searchParams.append('limit', limit.toString());
  if (skip !== undefined) searchParams.append('skip', skip.toString());
  if (sortBy) searchParams.append('sortBy', sortBy);
  if (order) searchParams.append('order', order);

  // Menggabungkan URL dengan parameter query
  const finalUrl = `${url}?${searchParams.toString()}`;
  
  // Mengirimkan request dengan Bearer token
  const res = await axios.get(finalUrl, {
    headers: {
      // 'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (res.status !== 200) {
    throw new Error('Failed to fetch products');
  }

  return res.data;
};

// Custom hook untuk menggunakan React Query dalam mengambil data produk
const useGetProducts = (params: QueryParams, options?: UseQueryOptions) => {
    return useQuery({
        queryKey: ['products', params],
        queryFn: () => fetchProducts(params),
        ...options, // Menggabungkan opsi yang mungkin diteruskan dari luar
      });
};

export { fetchProducts, useGetProducts };
