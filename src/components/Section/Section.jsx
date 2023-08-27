import { CircularProgress, Box } from '@mui/material'
import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import styles from './Section.module.css'
import Carousel from '../../Carousel/Carousel'
import BasicTabs from '../BasicTabs/BasicTabs'

const Section = ({title,data,type, value,handleChange, filteredData=null, toggle=false, filteredDataValues}) => {
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div className={styles.albumWrapper}>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{type === "album" ? carouselToggle? "Show All":"Collapse All" : ''}</h4>
        </div>
        {type === "song" ? <BasicTabs value={value} handleChange={handleChange}/> : null}
        {
            data.length === 0 ? (
                <Box sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>

                <CircularProgress />
                </Box>
            ) : (<div className={styles.cardWrapper}>
                { !carouselToggle ? 
                    ( 
                        <div className={styles.wrapper}>
                            {
                                 filteredDataValues.map((item) => (
                                    <Card key={item.id} data={item} type={type}/>
                                ))
                            }
                        </div>
                    ) : (
                        <Carousel data={filteredDataValues} renderCardComponent={(item) => <Card data={item} type={type} />}/>
                        )
                }
            </div>)
        }
    </div>
  )
}

export default Section