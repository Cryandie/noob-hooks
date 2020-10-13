import React, {useState} from 'react';
import setImage from '../Assets/setImage.jpg';


const NewMovieForm = ({addMovie}) => {
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [rate, setRate]=useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addMovie(title ,description ,rate ,setImage );
    
    
    } 
 
    return (
       
        <form className="addContainer" onSubmit={handleSubmit}>
            <label>
            Movie name :
            </label>
        <input type ="text" value={title} required onChange={(e) =>setTitle(e.target.value)}/>
        <label>
           Description :
            </label>
        <input type ="text" value={description} required onChange={(e) =>setDescription(e.target.value)}/>
        <label>
           Rate :
            </label>
        <input type ="number" value={rate} required onChange={(e) =>setRate(e.target.value)}/>
        <input className="firstSub" type ="submit" value="add your  favorite movie"/>
       
        </form>
       
    )

}
export default NewMovieForm;