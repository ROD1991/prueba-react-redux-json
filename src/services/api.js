import axios from 'axios';

const requestHelper = axios.create({
    baseURL: 'http://localhost:4000',
});


export default  {
    posts: {
            get: () => requestHelper({
                url:'posts',
                method:'get',
    }),
    
    create: data => requestHelper({
        url:'posts',
        method: 'post',
        data,
    }),

    liberar: data => requestHelper({
        url:'posts',
        method: 'post',
        data,
    }),
    
},
   
    
};