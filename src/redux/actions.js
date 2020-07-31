import { createAction } from 'redux-actions';
import api from '../services/api';


export const getPostsSuccess = createAction('getPostsSuccess');
export const handleApiError = createAction('handleApiError');


export const getPosts = () => async (dispatch) =>{
 try {
    const response = await api.posts.get();
    
    dispatch(getPostsSuccess(response.data));
 } catch (error) {
    dispatch(handleApiError(error));
 }
   
};


export const createPostSuccess = createAction('createPostSuccess');

export const createPost = (data) => async (dispatch) =>{
    try {
       const response = await api.posts.create(data);
       
       dispatch(createPostSuccess(response.data));
    } catch (error) {
       dispatch(handleApiError(error));
    }
      
   };

   export const liberarPostSuccess = createAction('liberarPostSuccess');

export const liberarPost = (data) => async (dispatch) =>{
    try {
       const response = await api.posts.liberar(data);
       
       dispatch(liberarPostSuccess(response.data));
    } catch (error) {
       dispatch(handleApiError(error));
    }
      
   };