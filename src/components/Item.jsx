import React from 'react'
import styles from '../styles/item.module.scss'
import { NavLink } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.pictureUrl}/>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
        <span>${item.price}</span>
        <NavLink to={`/detail/${item.id}`}>
          <button>Detalle</button>
        </NavLink>
    </div>
  )
}

export default Item