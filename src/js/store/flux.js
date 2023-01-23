//flux
const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            character: [],
            characterData: {},
            planet: [],
            planetData: {},
            ship: [],
            shipData: [],
            favorites: []
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            fetchCharacters: () => {
                fetch("https://www.swapi.tech/api/people/")
                    .then(res => res.json())
                    .then(data => setStore({
                        character: data.results
                    }))
                    .catch(err => console.error(err))
            },
            fetchCharactersData: (id) => {
                fetch("https://www.swapi.tech/api/people/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        characterData: data.result.properties
                    }))
                    .catch(err => console.error(err))
            },
            fetchPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planet: data.results
                    }))
                    .catch(err => console.error(err))
            },
            fetchPlanetsData: (id) => {
                fetch("https://www.swapi.tech/api/planets/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        planetData: data.result.properties
                    }))
                    .catch(err => console.error(err))
            },
            fetchShips: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(res => res.json())
                    .then(data => setStore({
                        ship: data.results
                    }))
                    .catch(err => console.error(err))
            },
            fetchShipData: (id) => {
                fetch("https://www.swapi.tech/api/starships/" + id)
                    .then(res => res.json())
                    .then(data => setStore({
                        shipData: data.result.properties
                    }))
                    .catch(err => console.error(err))
            },
            addFavorite: (item) => {
                if (getStore().favorites.some(elem => elem.name === item.name)) {
                    getActions().quitFavorite(item);
                } else {
                    setStore({
                        favorites: (getStore().favorites.concat(item))
                    });
                    console.log(`${item.name} added to your favorites.`);
                }
                console.log(getStore().favorites);
            },
            quitFavorite: (item) => {
                setStore({
                    favorites: getStore().favorites.filter(i => i.name !== item.name)
                });
                console.log(`${item.name} removed from your favorites.`);
            },
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;