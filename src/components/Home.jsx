import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        navigate("/" + category + "/" + id);
    }
    


    return (<div className="container mt-5">

       
        <form onSubmit={handleOnSubmit} className="form-horizontal d-flex">
            <label className='m-2'> Search For:</label>
            <div className="dropdown m-2">
            <select  className='btn btn-info dropdown-toggle' onChange={(e)=> setCategory(e.target.value)}>
                
            <option className='dropdown-item'>chose one...</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="films">Films </option>
            <option value="species">Species </option>
            </select>

            </div>

            <label className='m-2'> id:</label>
            <input type="number" className='m-2' onChange={(e) => setId(e.target.value)}  />
            <input type="submit" className='btn btn-info m-2'/>
            
         </form>
     
      

        
    </div> );
}
 
export default Home;