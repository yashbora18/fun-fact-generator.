const funFacts = [
    "I once met a celebrity at a coffee shop.",
    "I can speak three languages fluently.",
    "I have traveled to over 15 countries.",
    "I have a pet snake named 'Slinky'.",
    "I can play the guitar and the piano.",
    "I once ran a marathon just for fun.",
    "I have a collection of over 100 comic books.",
    "I can solve a Rubik's cube in under a minute."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    document.getElementById('fun-fact').innerText = funFacts[randomIndex];
});
