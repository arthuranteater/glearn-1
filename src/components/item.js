
import React from 'react';


const Item = ({ item, OnDelete }) => (
    <li onClick={OnDelete} >
        {item}
    </li>
)

export default Item