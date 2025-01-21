export const color =[
    "white",
    "Black",
    "Red",
    "marun",
    "Being",
    "Pink",
    "Green",
    "Yellow",
];
export const filters=[
    {
        id: "color",
        name:"Color",
        options:[
            { value: "white", label: "White"},
            { value: "beige", label: "Beige"},
            { value: "blue", label: "Blue"},
            { value: "brown", label: "Brown"},
            { value: "green", label: "Green"},
            { value: "purple", label: "Purple"},
            { value: "yellow", label: "Yellow"}
        ],
    },
    {
        id:"size",
        name : "Size",
        options:[
            { value: "S" , label: "S"},
            { value: "M" , label: "M"},
            { value: "L" , label: "L"}
        ],
    },
];

export const singleFilter=[
    {
        id:"price",
        name: "Price",
        options:[
            { Value : "159-399" , label:"₹159 to ₹399"},
            { Value : "390-999" , label:"₹399 to ₹999"},
            { Value : "999-1999" , label:"₹999 to ₹1999"},
            { Value : "1999-2999" , label:"₹1999 to ₹2999"},
            { Value : "2999-4999" , label:"₹2999 to ₹4999"},
        ],
    },
    {
        id:"discount",
        name: "Discount Range",
        options:[
            { Value : "10" , label:"10% And Above"},
            { Value : "20" , label:"20% And Above"},
            { Value : "30" , label:"30% And Above"},
            { Value : "40" , label:"40% And Above"},
            { Value : "50" , label:"50% And Above"},
            { Value : "60" , label:"60% And Above"},
            { Value : "70" , label:"70% And Above"},
            { Value : "80" , label:"80% And Above"},
        ],
    },
    {
        id:"stock",
        name: "Availability",
        options:[
            { Value : "in_stock" , label:"In stock"},
            { Value : "out_of_stock" , label:"Out Of Stock"},
        ],
    },
];