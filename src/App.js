import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
// import Card from './components/Card/Card'
import Section from "./components/Section/Section";
import styles from './App.module.css'
// import {data} from './mockData/data'

function App() {
  const [topAlbumData,setTopAlbumdata] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredDataValues,setFilteredDataValues] = useState([])
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false)

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

  const generateSongs = async ()=>{
    try{
      const songsData = await fetchSongs();
      setSongs(songsData)
      filteredData(songsData);
    }catch(er){
      console.log(er);
    }
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleChange = (e,newValue) => {
    setValue(newValue)
  }

  const generateSongsData = (value) => {
    let key;
    if(value === 0){
      filteredData(songs);
      return
    }else if(value === 1){
      key = "rock"
    }else if(value === 2){
      key = "pop"
    }else if(value === 3){
      key = "jazz"
    }else if(value === 4){
      key = "blues"
    }
    const res = songs.filter(item => item.genre.key === key)
    filteredData(res)
  }

  useEffect(()=>{
    generateSongsData(value);
    // eslint-disable-next-line
  },[value])

  const filteredData = (val) => {
    setFilteredDataValues(val)
  }

  useEffect(()=>{
    genearateTopAlbumData();
    generateNewAlbumData();
    generateSongs();
    // eslint-disable-next-line
  },[])

  return (
    <>
    <NavBar/>
    <Hero />
    <div className={styles.sectionWrapper}>
    <Section type="album" title="Top Albums" data={topAlbumData} filteredDataValues={topAlbumData}/>
    <Section type="album" title="New Albums" data={newAlbumData} filteredDataValues={newAlbumData}/>
    <Section type="song" title="Songs" 
    data={songs} 
    filteredData={filteredData} filteredDataValues={filteredDataValues} 
    value={value} handleToggle={handleToggle} handleChange={handleChange}/>
    </div>
    </>
  );
}

export default App;
