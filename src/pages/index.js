import Head from "next/head";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Product from "../components/Product";

export default function Home({products}) {
  return ( 
    <div className="bg-gray-100 ">
      <head>
        <title>Flipkart</title>
      </head>
    <Navbar/>
    <main className="max-w-screen-2xl mx-auto">

    <Banner/>
    {/* <Product products={products}/> */}
   

    </main>
    </div>
      
    
  );
}

export async function getServerSideProps(context){
  const products = await fetch('https://fakestoreapi.com/products').then(res=>res.json())
  return  {
    props:{
      products,
    }
  }
}

// api endpoint = https://fakestoreapi.com/products