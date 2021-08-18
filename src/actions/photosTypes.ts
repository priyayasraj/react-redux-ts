export const PHOTOS_LOADING = "PHOTOS_LOADING";
export const PHOTOS_FAIL = "PHOTOS_FAIL";
export const PHOTOS_SUCCESS = "PHOTOS_SUCCESS";

export interface PhotosDetails {
    id:number,
    title:string,
    thumbnailUrl:string
}

export interface PhotosLoading{
    type: typeof PHOTOS_LOADING
}

export interface PhotosFail{
    type: typeof PHOTOS_FAIL
}
export interface PhotosSuccess{
    type: typeof PHOTOS_SUCCESS,
    payload: PhotosDetails
}
export type PhotosDispatchType = PhotosSuccess|PhotosLoading|PhotosFail;