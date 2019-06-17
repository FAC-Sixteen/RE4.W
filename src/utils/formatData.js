import ItemTypes from "../components/ItemTypes";

const formatData = data => {
    return data.map(item => ({
        ...item,
        type:
            item.Recyclable === "Yes" ? ItemTypes.RECYCLABLE : ItemTypes.TRASH,
    }));
};

export default formatData;
