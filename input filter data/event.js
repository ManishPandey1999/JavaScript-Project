let animalList = [
    // Mammals
    'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Dolphin', 'Penguin', 'Bear', 'Wolf', 'Fox', 'Deer', 'Crocodile', 'Rabbit', 'Human',

    // Birds
    'Sparrow', 'Eagle', 'Owl', 'Parrot', 'Flamingo', 'Hummingbird', 'Pigeon', 'Crow', 'Ostrich', 'Emu', 'Seagull',

    // Reptiles
    'Snake', 'Lizard', 'Crocodile', 'Turtle', 'Gecko', 'Chameleon', 'Iguana',

    // Amphibians
    'Frog', 'Salamander', 'Newt', 'Toad',

    // Fish
    'Salmon', 'Trout', 'Goldfish', 'Shark', 'Tuna', 'Angelfish', 'Clownfish', 'Sea bass',

    // Insects
    'Ant', 'Butterfly', 'Bee', 'Dragonfly', 'Mosquito', 'Ladybug', 'Grasshopper', 'Moth', 'Cockroach', 'Termite',

    // Arachnids
    'Spider', 'Scorpion', 'Tick', 'Mite', 'Tarantula',

    // Mollusks
    'Octopus', 'Squid', 'Snail', 'Clam', 'Oyster', 'Mussel', 'Cuttlefish',

    // Crustaceans
    'Lobster', 'Crab', 'Shrimp', 'Barnacle', 'Krill',

    // Echinoderms
    'Starfish', 'Sea urchin', 'Sea cucumber', 'Sand dollar',

    // Other Invertebrates
    'Worm', 'Jellyfish', 'Coral'
];

let inputValue = document.querySelector('#filterInputValue');
let dataShowBtn = document.querySelector('#dataShowSubmitBtn');
let dataShowContainer = document.querySelector('#filterDataList');

inputValue.addEventListener('input', function(){
    let newanimalList = animalList.filter(firstFilterList => {
        return firstFilterList.toLowerCase().includes(inputValue.value.toLowerCase());
    })
    console.log(newanimalList);
    dataShowContainer.innerHTML = "";

    if(inputValue.value.trim() !== ''){
        newanimalList.forEach(secondFilterData => {
            let li = document.createElement('li');
            li.textContent = secondFilterData;
            dataShowContainer.classList.add('filter-data-list')
            dataShowContainer.appendChild(li);
            li.addEventListener('click', function(){
                inputValue.value = this.textContent;
                dataShowContainer.innerHTML = '';
                dataShowContainer.classList.remove('filter-data-list')
            })
        })
    }
});