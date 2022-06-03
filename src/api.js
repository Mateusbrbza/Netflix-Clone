const API_KEY = "d7a0d187638971ab5aab880fc6ee04f1";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originals",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comedias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        name: "documentaries",
        title: "Documentarios",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
];

export const getMovies = async (path) => {  
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
};

export default categories;
// usar default para o categories virar um alias
// se n for usado, na hora de importar no App.js nao teria um alias para fazer o import