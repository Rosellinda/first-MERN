import React from 'react'
import axios from 'axios'

function Home(props) {
  console.log(props);
  React.useEffect(() => {
    getProducts()
  }, []);

  async function getProducts(){
    const url = 'http://localhost:3000/api/products';
    const response = await axios.get(url);
    console.log(response.data);
  }

  return <>home</>;
}

Home.getInitialProps = () => {
  //fetch data on the server
  //return response data as an object
  return {hello: 'world'}
  //note: this object will be merged with existing props
}

export default Home;
