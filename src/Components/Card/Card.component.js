import React, { useState } from 'react'

const Card = ({
    id,
    image,
    name,
    price,
    info,
    deleteTour
}) => {
    const [readMore, setReadMore] = useState();

    return (
        <div class="card" style={{ height: 'auto', margin: '30px', boxShadow: '4px 8px 8px 4px rgba(0,0,0,0.2)', transition: '0.3s' }}>
            <img class="" style={{ width: '100%', height: '40vh' }} src={image} alt="Card image cap" />
            <div class="card-body" style={{ width: '100%', marginTop: '10px', marginBottom: '10px' }}>
                <div style={{ width: '100%' }}>
                    <h5 class="card-title" style={{ display: 'block', float: 'left', width: '80%', fontSize: '1vw', letterSpacing: '2px', textAlign: 'left', color: 'black' }}>{name}</h5>
                    <h5 class="card-title" style={{ display: 'block', float: 'left', width: '20%', fontSize: '1vw', letterSpacing: '2px', textAlign: 'center', padding: '5px', boxShadow: '1px 4px 4px 1px rgba(0,0,0,0.2)', borderRadius: '5px', color: '#0460D9', backgroundColor: '#CEECF2' }}>${price}</h5>
                </div>
                <div style={{ clear: 'both' }}></div>
                <p class="card-text" style={{ fontSize: '0.7vw', letterSpacing: '1px', textAlign: 'justify', margin: '10px', color: 'grey' }}>
                    {readMore ? info : `${info.substring(0, 200)} ... `}
                    <a style={{ color: 'crimson' }} onClick={() => setReadMore(!readMore)}>
                        {readMore ? ' show less' : 'read more'}
                    </a>
                </p>
                <a class="btn border-danger" style={{ width: '40%', margin: '10px', color: 'red' }} onClick={() => deleteTour(id)}>Not interested</a>
            </div>
        </div>
    )
}

export default Card
