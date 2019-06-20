import selectData from "./selectData";

const fetchData = setData => {
    return (
        fetch(`.netlify/functions/getData`)
            .then(result => result.json())
            .then(result => setData(result.records))
            // .then(result => selectData(result.records))
            // .then(result => setData(result))
            .catch(err => console.error(err))
    );
};

export default fetchData;
