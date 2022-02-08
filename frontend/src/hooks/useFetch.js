import {useState, useEffect} from 'react';


const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useEffect() ran');
        fetch(endpoint)
        .then(res => {
            if (!res.ok){
                throw Error('Failed to fetch data from ' + endpoint)
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
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