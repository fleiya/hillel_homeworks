const regex = /\b[^Aa]{6,}\b/;
const words = [
    "Courage", "Delight", "Freedom", "Journey", "Mystery", 
    "Victory", "Sunrise", "Amazing", "Happiness", "Adventure", 
    "Beautiful", "Harmony", "Paradise", "Alphabet", "Fantasy"
];

const matchingWords = words.filter(word => regex.test(word));
console.log("Підходять:", matchingWords);

const nonMatchingWords = words.filter(word => !regex.test(word));
console.log("Не підходять:", nonMatchingWords);
