import React, {useEffect, useState} from 'react';
import UserItem from './userItem';
import IntModal from './IntModal';

const requestOpen= user =>{
    setSelectedUser(user)
    setOpen(true)
}

const UserList = () => {

    const [ reg, setReg ] = useState([]);

    const [ abrir, setAbrir ]= useState(false);

    const Funcion = async()=>{
       const response= await fetch('https://jsonplaceholder.typicode.com/users');
      
       const data = await response.json();
       setReg(data);
       console.log(data)
    }

    

    useEffect(()=>{

        Funcion();
         
     },[]);
    

    return(

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}v>
           { reg.map(({id, name, email, company})=> (

            <UserItem onClick={()=> setAbrir(true)} key={(id).toString()} nombre={name} correo={email} celular={company.name} />
   
        ))}
        <IntModal nombre={userSelected.name} closeModal={()=>setAbrir(!abrir)} desplegar={abrir} correo={email} celular={company.name}/>
        </div>
        
        
    )

}

export default UserList;