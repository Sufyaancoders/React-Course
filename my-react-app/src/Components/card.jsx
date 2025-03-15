import { useState } from 'react';

function Card({id, image, name, info, price, removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const description = () => {
        return readmore ? info : `${info.substring(0, 100)}...`;
    };

    return (
        <div className="card">
            <img src={image} className="image" alt={name} />

            <div className="tour-info">
                <div>
                    <h4 className="tour-name">{name}</h4>
                    <h4 className="tour-price">₹ {price}</h4>
                </div>

                <div className="description">
                    {description()}
                    <span className="read-more" onClick={() => setReadmore(!readmore)}>
                        {readmore ? ` Show Less` : ` Read More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
