import {useState, useEffect} from 'react';


const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(endpoint, {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            }
        })
        .then(res => {
            if (!res.ok){
                throw Error('Failed to fetch data from ' + endpoint)
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsLoading(false);
            setError(null)
        })
        .catch(err => {
            setError(err.message);
            setIsLoading(false);
        });

    }, [endpoint]);

    return {data, isLoading, error};
};

export default useFetch;