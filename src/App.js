import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
// import { fetchTopAlbums } from "./api/api";
// import { useEffect, useState } from "react";
import Card from './components/Card/Card'
import {data} from './mockData/data'

function App() {
  // const [topAlbumData,setTopAlbumdata] = useState([]);

  // const genearateTopAlbumData = async ()=>{
  //   try{
  //     console.log("inside genearate ")
  //     const data = await fetchTopAlbums();
  //     console.log("genrate ", data)
  //     setTopAlbumdata(data)
  //   }catch(er){
  //     console.log(er)
  //   }
  // }

  // useEffect(()=>{
  //   genearateTopAlbumData();
  // },[])

  return (
    <>
    <NavBar/>
    <Hero />
    <Card data={data[0]} type="album" />
    </>
  );
}

export default App;
