const allAnimals = [
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


let inputField = document.querySelector('#inputField');
let arrayText = document.querySelector('#arrayText');
inputField.addEventListener('input', function(){
	let newFilterArray = allAnimals.filter(animalsList => {
		return animalsList.toLowerCase().includes(inputField.value.toLowerCase());
	})
    
    let existUl = document.querySelector('#filteredList');
    if(existUl){
        existUl.remove();
    }
    
	if(inputField.value.trim() !== ""){
        let ul = document.createElement('ul');
        ul.id = 'filteredList'
		newFilterArray.forEach(filterList => {
			let li = document.createElement('li');
			li.textContent = filterList;
			ul.appendChild(li);
            li.addEventListener('click', function(){
                inputField.value = this.innerText;
                ul.remove();
            })
		})        
        arrayText.appendChild(ul);
	}
})