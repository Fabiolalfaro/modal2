import React, { useState } from 'react';



const UserItem = ({nombre,correo, celular}) => {

    return(
        <div style={{height:'100px', width:'275px', border:'solid 1px gray', boxShadow:'5px 5px 7px', padding:'0.5em', margin:'1em'}}>
            <div>
            <label>NOMBRE:{nombre}</label>
            </div>
            <div>
            <label>CORREO:{correo}</label>
            </div>
            <div>
            <label>COMPAÑIA:{celular}</label>
            </div>
        </div>
    )

}

export default UserItem;