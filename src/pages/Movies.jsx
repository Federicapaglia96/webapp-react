import axios from "axios";
import { useEffect, useState } from "react";



function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`).then((resp) => {
            setMovies(resp.data.data);
            console.log(resp.data.data)
        });
    }, []);
    return (
        <main>
            <h1>MOVIES</h1>
            {movies.map((curMovies) => {
                return <h1 key={curMovies.id}>{curMovies.title}</h1>
            })}
        </main>
    )
}

export default Movies;