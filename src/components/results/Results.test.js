import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import Results from "./Results";

const items = [
    {
        ID: 63,
        itemName: "Synsedine",
        Recyclable: "No",
        Tip:
            "Toothpaste tubes can't be recycled at home, but ask if you can in your local supermarket",
        Fact:
            "In the UK, we use enough toothpaste packages to reach from the UK to Australia and back each year!",
        Image:
            "https://www.dropbox.com/s/04j3d7nzptxi1yb/toothpaste-sensodyne.webp?raw=1",
        Category: "Toothpaste Tubes",
        type: "trash",
        dropped: "trashBin",
        correct: true,
        correctBin: "trashBin",
    },
    {
        ID: 175,
        itemName: "Cucumber",
        Recyclable: "Yes",
        Tip:
            "Yes, all food can be recycled, but it needs to go in a special food bin!",
        Fact:
            "30% of all waste in landfills is from food, and could have been composted to help grow more food",
        Image:
            "https://www.dropbox.com/s/uuczus1r2lb4870/veg-cucumber.png?raw=1",
        Category: "Fruit / Veg",
        type: "recyclable",
        dropped: "recyclingBin",
        correct: true,
        correctBin: "recyclingBin",
    },
    {
        ID: 75,
        itemName: "Purple",
        Recyclable: "Yes",
        Tip:
            "But you can't do it at home, you have to take them to the supermarket!",
        Fact:
            "In the UK, we use 13 billion plastic bags every year. Each year we put the same weight as 50,000 houses worth of plastic into the ocean",
        Image:
            "https://www.dropbox.com/s/3l5s6bfomo010g7/plastic-bag-purple.png?raw=1",
        Category: "Plastic bags",
        type: "recyclable",
        dropped: "trashBin",
        correct: false,
        correctBin: "recyclingBin",
    },
    {
        ID: 73,
        itemName: "Red",
        Recyclable: "Yes",
        Tip:
            "But you can't do it at home, you have to take them to the supermarket!",
        Fact:
            "In the UK, we use 13 billion plastic bags every year. Each year we put the same weight as 50,000 houses worth of plastic into the ocean",
        Image:
            "https://www.dropbox.com/s/cw3m1aze4d0538m/plastic-bag-red.png?raw=1",
        Category: "Plastic bags",
        type: "recyclable",
        dropped: "recyclingBin",
        correct: true,
        correctBin: "recyclingBin",
    },
    {
        ID: 142,
        itemName: "Cardboard box",
        Recyclable: "Yes",
        Tip: "Yes, all cardbox boxes should be recycled!",
        Fact: "Did you know, in the UK we recycle over 80% of our cardboard!",
        Image:
            "https://www.dropbox.com/s/i7916cbgn00z0ec/Cardboard-Box-PNG-imagepng.png?raw=1",
        Category: "Cardboard",
        type: "recyclable",
        dropped: "recyclingBin",
        correct: true,
        correctBin: "recyclingBin",
    },
    {
        ID: 2,
        itemName: "Fanta",
        Recyclable: "Yes",
        Tip: "Cans are very easy to recycle and go in your bin at home.",
        Fact:
            "Last year in the UK, we recycled 4.5 billion aluminium cans. That's enough to reach around the world 13 times!",
        Image: "https://www.dropbox.com/s/ufzb1sanh7leklm/fanta_can.png?raw=1",
        Category: "Soft drink",
        type: "recyclable",
        dropped: "recyclingBin",
        correct: true,
        correctBin: "recyclingBin",
    },
];

const winProps = {
    score: 6,
    items,
};

const loseProps = {
    score: 5,
    items,
};

test("Win case", () => {
    const { getByText } = render(
        <MemoryRouter>
            <Results location={winProps} />
        </MemoryRouter>
    );
    getByText("Wow, full marks! Click on the item to see some recycling tips.");
});

test("Lose case", () => {
    const { getByText } = render(
        <MemoryRouter>
            <Results location={loseProps} />
        </MemoryRouter>
    );
    getByText(
        "Oh no, you missed a few! Click on the item to see some recycling tips."
    );
});
