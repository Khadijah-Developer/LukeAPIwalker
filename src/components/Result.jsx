import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';





const Search = () => {

    const { category, id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/" + category + "/" + id)
            .then((response) => response.json())
            .then((resData) => {
                console.log(resData);
                setData(resData);
            }).catch(error =>{ console.log(error); });
        
    }, []);
    return (
            <div className='container'>
                <div className='row m-3 p-2'>
                
                    {Object.keys(data).map((item, idx) => {
                    return (
                  
                    
                            <div className="alert alert-primary  " key={idx}>
                                     <h1 className='alert-heading'>{item } </h1>
                                    < p className="mb-0 alert-link text-dark" >  {data[item]}</p>
                            
                           </div>
                         
                               
                               
                           
                   
                    );
                    })}
                </div>
    </div>
         );
}
 
export default Search;