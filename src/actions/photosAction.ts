import axios from "axios";
import { PhotosDispatchType,PHOTOS_SUCCESS,PHOTOS_FAIL,PHOTOS_LOADING,PhotosDetails} from "./photosTypes";
import { Dispatch } from "redux";

export const getPhotos = (id:number)=> async(dispatch: Dispatch<PhotosDispatchType>) => {
    try{
        dispatch({
            type:PHOTOS_LOADING
        })
        const response = await axios.get<PhotosDetails>(`https://jsonplaceholder.typicode.com/photos?id=${id}`);
        dispatch({
            type:PHOTOS_SUCCESS,
            payload:response.data
        })
    }catch(e){
        dispatch({
            type: PHOTOS_FAIL,
        })
    }
};
