import {get_data, get_data_get} from '@common';

export let bizhi = (fun, page=1) => get_data('/riddle', {
    page:0
}, (data) => {
    if(data.code === 200){
        fun(data.data);
    }
});

