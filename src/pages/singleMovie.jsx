import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function singleMovie() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${movieId} `).then((resp) => {
            setMovie(resp.data.data);
        });
    }, []);
    return (
        <main>
            {
                movie && (
                    <section className="container py-5">
                        <img src={movie.image} alt={movie.title} className="img-fluid w-100" />
                        <h1>{movie.title}</h1>
                    </section>
                )
            }

        </main>
    )
}
export default singleMovie;