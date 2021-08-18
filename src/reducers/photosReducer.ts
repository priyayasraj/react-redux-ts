import { PhotosDetails,PHOTOS_SUCCESS,PHOTOS_FAIL,PHOTOS_LOADING,PhotosDispatchType} from "../actions/photosTypes";

interface PhotosState {
    loading:boolean,
    photos?:PhotosDetails
}
const initialState : PhotosState = {
    loading:false,
}

const photosReducer = (state: PhotosState = initialState,action:PhotosDispatchType):PhotosState =>{
    switch(action.type){
        case PHOTOS_FAIL:
            return{
                loading:false,
            }
        case PHOTOS_LOADING:
            return{
                loading:true,
            }
        case PHOTOS_SUCCESS:
            return{
                loading:false,
                photos:action.payload
            }
        default :
        return state;
    }
}
export default photosReducer;