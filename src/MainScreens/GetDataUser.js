
const GetDataUser = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error
    }
  };
  
  export default GetDataUser;
  