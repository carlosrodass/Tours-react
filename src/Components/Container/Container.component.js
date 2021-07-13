import React, { useState, useEffect } from 'react'
import Card from '../Card/Card.component'
// import { data } from './data'

const Container = () => {

    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const url = 'https://course-api.com/react-tours-project';

    const getData = async () => {
        try {
            const response = await fetch(url);
            if (response.status >= 200 && response.status <= 299) {
                const data = await response.json();
                setPlaces(data);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setIsError(true);
            }

        } catch (error) {
            return console.error(error);
        }
    }

    const deleteMe = (id) => {
        let newElements = places.filter((place) => place.id !== id)
        setPlaces(newElements);
    }

    useEffect(() => {
        getData();
    }, [])

    if (isLoading) {
        return <h1>The page is loading...</h1>
    }

    if (isError) {
        return <h1>Some error ocurred, refresh the page</h1>
    }

    return (
        <>
            <section className="container" style={{ width: '37vw', height: 'auto' }}>
                {
                    places.map((place) => {
                        return (
                            <Card
                                key={place.id}
                                {...place}
                                deleteTour={deleteMe}
                            />
                        )
                    })
                }

            </section>

        </>
    )
}

export default Container
