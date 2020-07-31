import { handleActions } from 'redux-actions';
import { createPostSuccess , getPostsSuccess ,liberarPostSuccess } from '../actions'


const now = () => ((new Date()).getTime());

export default handleActions({
        [createPostSuccess] : (state,action) => {
                  return [...state, action.payload];
        },
      
        [getPostsSuccess] : (state,action) => {
          return  action.payload;
      },
      [liberarPostSuccess] : (state,action) => {
              return[...state,action.payload]
      }



      
      }, []);


