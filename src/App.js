import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import { useEffect, useState } from "react";
// import Card from './components/Card/Card'
import Section from "./components/Section/Section";
import styles from './App.module.css'
// import {data} from './mockData/data'

function App() {
  const [topAlbumData,setTopAlbumdata] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  // const [songs, setSongs] = useState([]);

  const genearateTopAlbumData = async ()=>{
    try{
      console.log("inside genearate ")
      const data = await fetchTopAlbums();
      console.log("genrate ", data)
      setTopAlbumdata(data)
    }catch(er){
      console.log(er)
    }
  }

  const generateNewAlbumData = async ()=>{
    try{
      const newAlbumData = await fetchNewAlbums();
      setNewAlbumData(newAlbumData)
    }catch(er){
      console.log(er);
    }
  }

  // const generateSongs = async ()=>{
  //   try{
  //     const songs = await fetchSongs();
  //     setSongs(songs)
  //   }catch(er){
  //     console.log(er);
  //   }
  // }

  useEffect(()=>{
    genearateTopAlbumData();
    generateNewAlbumData();
    // generateSongs();
  },[])

  return (
    <>
    <NavBar/>
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section type="album" title="Top Albums" data={topAlbumData}/>
    <Section type="album" title="New Albums" data={newAlbumData}/>
    {/* <Section type="album" title="Songs" data={songs}/> */}
    </div>
    </>
  );
}

export default App;
