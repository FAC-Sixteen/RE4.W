import formatImageUrl from "./formatImageUrl";

const selectData = data => {
    let arr = [];

    while (arr.length < 6) {
        const randomIndex = Math.floor(Math.random() * Math.floor(data.length));
        const randomItem = data[randomIndex].fields;

        if (Object.keys(randomItem).length === 7 && !arr.includes(randomItem)) {
            randomItem.Image = formatImageUrl(randomItem.Image);
            arr.push(randomItem);
        }
    }

    return arr;
};

export default selectData;
