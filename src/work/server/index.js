import {get_data, get_data_get} from '@components/public/common';

export let list = (fun, r = '0.7153214477881407') => get_data('/', {r}, (data) => {
    fun(data);
});

