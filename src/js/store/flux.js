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
			planet: [],
			ship: [],
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
                        character:data.results
                    }))
                    .catch(err => console.error(err))
            },
			fetchPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({
                        planet:data.results
                    }))
                    .catch(err => console.error(err))
            },
			fetchShips: () => {
                fetch("https://www.swapi.tech/api/starships/")
                    .then(res => res.json())
                    .then(data => setStore({
                        ship:data.results
                    }))
                    .catch(err => console.error(err))
            },
            addFavorite: () => {
                console.log("funciona");
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;