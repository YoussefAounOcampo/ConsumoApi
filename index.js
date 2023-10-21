function getCharacters(done) {
    const result = fetch("https://rickandmortyapi.com/api/character");

    result
        .then(response => response.json())
        .then(data => {
            done(data);
        });

}

getCharacters(data => {
    data.results.forEach(personaje => { 
        const article = document.createRange().createContextualFragment(/*html*/ `
            <article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje"/>
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span><br>
                <span>${personaje.species}</span><br>
                <span>${personaje.gender}</span><br>

            </article>
        `);

        const main = document.querySelector("main");
        main.append(article); // Cambié append a appendChild
    });
});
