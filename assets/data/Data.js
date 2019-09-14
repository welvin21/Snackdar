import coke from '../images/coke.png';
import pepsi from '../images/pepsi.png';
import sprite from '../images/sprite.png';
import redbull from '../images/redbull.png';
import dasani from '../images/dasani.png';
import dietcoke from '../images/dietcoke.png';

const OptionCards = [
    {
        key : 1,
        text : 'Beverages'
    },
    {
        key : 2,
        text : 'Chips'
    },
    {
        key : 3,
        text : 'Sweets'
    },
    {
        key : 4,
        text : 'Medicine'
    },
    {
        key : 5,
        text : 'Stationery'
    }
]

const Beverages = [
    {
        key : 1,
        itemName : 'Coke',
        itemCode : 'B1',
        image : coke
    },
    {
        key : 2,
        itemName : 'Diet Coke',
        itemCode : 'B2',
        image : dietcoke
    },
    {
        key : 3,
        itemName : 'Pepsi',
        itemCode : 'B3',
        image : pepsi
    },
    {
        key : 4,
        itemName : 'Sprite',
        itemCode : 'B4',
        image : sprite
    },
    {
        key : 5,
        itemName : 'Red bull',
        itemCode : 'B5',
        image : redbull
    },
    {
        key : 6,
        itemName : 'Dasani',
        itemCode : 'B6',
        image : dasani
    },

]

export { OptionCards,Beverages };
