 //Nguyễn Ngô Thế Cường : 21521905
const GetData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Re-throw the error to handle it where fetchData is called
    }
  };
  
  export default GetData;
  