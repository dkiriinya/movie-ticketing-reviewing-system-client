import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NowShowing from "./NowShowing";

export default function TheatreDetails() {
    const { theatreId } = useParams();
    const [theatre, setTheatre] = useState(null);

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
        try {
            const url = '/movies';
            const response = await fetch(url, {
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json",
                },
            });
            const data = await response.json();
            setMovies(data);
            console.log(data)
        } catch (error) {
            console.log('Error fetching movies:', error);
        }
    };
    fetchMovies();
}, []);

    useEffect(() => {
        const fetchTheatre = async () => {
            try {
                const response = await fetch(`/theaters/${theatreId}`);
                const data = await response.json();
                console.log(data)
                setTheatre(data);
            } catch (error) {
                console.error("Error fetching theatre details: ", error);
            }
        };

        if (theatreId !== null){
            fetchTheatre();

        }
        
    }, [theatreId]);

    if (theatreId === null) {
        return null;
    }

    if (!theatre) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{theatre.name}</h1>
            <p>Location: {theatre.location}</p>
            <p>Capacity: {theatre.capacity}</p>
            <NowShowing movies={movies}/>
        </div>

    );
}