import React, { useState } from 'react';
import './App.css';
import {RootStore} from './store';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './actions/photosAction';

function App() {
  const [photoNumber,setPhotoNumber] = useState(1);
  const dispatch = useDispatch();
  const photosState = useSelector((state:RootStore )=> state.photos);

  const handleChange = (event:React.ChangeEvent<HTMLInputElement> ) => {
    setPhotoNumber(event.target.valueAsNumber);
  }
  const handleSubmit = () => {
    dispatch(getPhotos(photoNumber));
  }
  console.log("photos state:",photosState);

  return (
    <div className="App">
        <input type="number" value={photoNumber} onChange={(event)=>handleChange(event)}/>
        <button onClick={handleSubmit}>Search</button>
        <div>
            
              {photosState.photos?.title}
            
        </div>
    </div>
  
  );
 
            
}

export default App;
