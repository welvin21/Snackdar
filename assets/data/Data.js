import coke from '../images/coke.png';
import pepsi from '../images/pepsi.png';
import sprite from '../images/sprite.png';
import redbull from '../images/redbull.png';
import dasani from '../images/dasani.png';
import dietcoke from '../images/dietcoke.png';
import doritos from '../images/doritos.png';
import doritos2 from '../images/doritos2.png';
import pringles from '../images/pringles.png';
import tyrrels from '../images/tyrrels.png';
import kitkat from '../images/kitkat.png';
import crunchie from '../images/crunchie.png';
import cadbury from '../images/cadbury.png';
import mm from '../images/m&m.png';
import maltesers from '../images/maltesers.png';

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
    // {
    //     key : 4,
    //     text : 'Medicine'
    // }, 
    // {
    //     key : 5,
    //     text : 'Stationery'
    // }
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

const Chips = [
    {
        key : 1,
        itemName : 'Doritos Spicy Nacho',
        itemCode : 'C1',
        image : doritos
    },
    {
        key : 2,
        itemName : 'Pringles Original',
        itemCode : 'C2',
        image : pringles
    },
    {
        key : 3,
        itemName : 'Doritos Nacho Cheese',
        itemCode : 'C3',
        image : doritos2
    },
    {
        key : 4,
        itemName : 'Tyrrels smoked paprika',
        itemCode : 'C4',
        image : tyrrels
    }
]

const Sweets = [
    {
        key : 1,
        itemName : 'KitKat Regular',
        itemCode : 'S1',
        image : kitkat
    },
    {
        key : 2,
        itemName : 'Cadbury Oreo',
        itemCode : 'S2',
        image : cadbury
    },
    {
        key : 3,
        itemName : 'M&M peanut',
        itemCode : 'S3',
        image : mm
    },
    {
        key : 4,
        itemName : 'Maltesers Original',
        itemCode : 'S4',
        image : maltesers
    },
    {
        key : 5,
        itemName : 'Crunchie',
        itemCode : 'S5',
        image : crunchie
    }
]

const Icons = {
    'beverages' : {
        'b1' : coke,
        'b2' : dietcoke,
        'b3' : pepsi,
        'b4' : sprite,
        'b5' : redbull,
        'b6' : dasani
    },
    'chips' : {
        'c1' : doritos,
        'c2' : pringles,
        'c3' : doritos2,
        'c4' : tyrrels
    },
    'sweets' : {
        's1' : kitkat,
        's2' : cadbury,
        's3' : mm,
        's4' : maltesers,
        's5' : crunchie
    }
}

export { OptionCards,Beverages,Chips,Sweets,Icons };
