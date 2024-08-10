import service from ".";

type TodoQuery = {
    search:string;
    limit:string;
}

export const getTodos = async (
  query?:TodoQuery
  ) => {
    try {
      const res = await service.get(`/todos`);
      return res.data;
    } catch (error) {
      console.error('Failed to fetch restaurants:', error);
      return [];
    }
  };