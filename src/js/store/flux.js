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
            auth: false,
            character: [],
            characterData: {},
            planet: [],
            planetData: {},
            ship: [],
            shipData: [],
            favorites: []
        },
        actions: {
            signup: (username, email, password) => {
                fetch('https://3000-gabroma-starwarsrestapi-9vf067oss2r.ws-us84.gitpod.io/user', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "username": username,
                            "email": email,
                            "password": password
                        })
                    })
                    .then((response) => {
                        console.log(response.status);
                        response.status === 200 ?
                            alert("Account created successfully") :
                            alert("Something went wrong, try again")
                        return response.json()
                    })
                    .catch((err) => console.log(err))
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            login: (username, password) => {
                fetch('https://3000-gabroma-starwarsrestapi-9vf067oss2r.ws-us84.gitpod.io/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "username": username,
                            "password": password
                        })
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Wrong username or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
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