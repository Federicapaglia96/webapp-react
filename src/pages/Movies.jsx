import axios from "axios";
import { useEffect, useState } from "react";
import MoviesCard from "../components/MoviesCard";



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
            <section className="container py-5">
                <h1 className="text-center mb-4">Lista Film</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {movies.map((curMovie) => {
                        return (
                            <div className="col d-flex">
                                <MoviesCard key={curMovie.id} movie={curMovie} />
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    )
}

export default Movies;