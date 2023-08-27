import React from 'react'
import {Chip, Tooltip} from '@mui/material';
import styles from './Card.module.css'

const Card = ({data,type}) => {
    console.log("card ",data)
    const getCard = (type) => {
        switch(type){
            case "album" : {
                
                const {image, follows,title,songs} = data;
                return(
                    <Tooltip title={`${songs?.length} Songs`} placement='top' arrow>
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={image} alt="album" />
                            <div className={styles.banner}>
                            <Chip label={`${follows} Follows`} className={styles.chip} size="smal" />
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{title}</p>
                        </div>
                    </div>
                    </Tooltip>
                )
            }
            case "song" : {
                const {image, title, likes} = data;
                   return(
                    <div className={styles.wrapper}>
                    <div className={styles.card}>
                        <img src={image} alt="song" loading='lazy'/>
                        <div className={styles.banner}>
                            <div className={styles.pill}>
                                <p>{likes} Likes</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.titleWrapper}>
                        <p>{title}</p>
                    </div>
                </div>
                   )
            }
            default : 
            return <></>;
        }
    }
    return getCard(type);
}

export default Card