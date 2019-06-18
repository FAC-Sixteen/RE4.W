import ItemTypes from "./ItemTypes";

const formatData = data => {
    return data.map(item => ({
        ...item,
        type:
            item.Recyclable === "Yes" ? ItemTypes.RECYCLABLE : ItemTypes.TRASH,
        dropped: false,
        correct: null,
        correctBin: item.Recyclable === "Yes" ? "recyclingBin" : "trashBin",
    }));
};

export default formatData;
