import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import styles from './Section.module.css'
import Carousel from '../../Carousel/Carousel'

const Section = ({title,data,type}) => {
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div>
        <div className={styles.header}>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleToggle}>{carouselToggle? "Show All":"Collapse All"}</h4>
        </div>
        {
            data.length === 0 ? (
                <CircularProgress />
            ) : (<div className={styles.cardWrapper}>
                { !carouselToggle ? 
                    ( 
                        <div className={styles.wrapper}>
                            {
                                 data.map((item) => (
                                    <Card key={item.id} data={item} type={type}/>
                                ))
                            }
                        </div>
                    ) : (
                        <Carousel data={data} renderCardComponent={(item) => <Card data={item} type={type} />}/>
                        )
                }
            </div>)
        }
    </div>
  )
}

export default Section