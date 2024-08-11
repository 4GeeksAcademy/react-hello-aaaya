import React from 'react';

// Single Card Component
const Card = ({ imageSrc, title, text, buttonLabel, buttonLink }) => {
    return (
        <div className="card" style={{ width: '18rem', marginBottom: '20px' }}>
            <img 
                src={imageSrc} 
                className="card-img-top" 
                alt={title} 
                style={{ 
                    height: '200px', // Fixed height
                    width: '100%',   // Full width of the card
                    objectFit: 'cover' // Ensure image covers the area without distortion
                }} 
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={buttonLink} className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    );
};

// Main Component Rendering Multiple Cards
const CardList = () => {
    // Array of card data
    const cardsData = [
        {
            imageSrc: "https://imgs.search.brave.com/FwEYyJbRdlujscXeWZav030zKErz32BeFetpMtn-9O4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZXNrdG9wLXdh/bGxwYXBlcl8xMjE2/NDkwLTEzNzAuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
            title: "Card Title 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            buttonLabel: "Find Out More!",
            buttonLink: "#"
        },
        {
            imageSrc: "https://imgs.search.brave.com/AunOVC-4Sz0QWwjkzk6ftNPbjfjCZZ1iRhcQawEnOPk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2FsbHNhdWNlLmNv/bS9pbWFnZXMvc2hv/d2Nhc2UvMzU5LzMw/MC9hbmRyZXdzLWN1/c3RvbS13YWxscGFw/ZXIuanBn",
            title: "Card Title 2",
            text: "Sapiente esse necessitatibus neque.",
            buttonLabel: "Find Out More!",
            buttonLink: "#"
        },
        {
            imageSrc: "https://imgs.search.brave.com/EpeLRr16ryZslEVnruO7sa3IAVQmwTopuHi4EvYSIRk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzgzLzI3LzM3/LzM2MF9GXzY4MzI3/Mzc5MV95SHpKVVB5/RUFaRTlnaFg4Q2hN/WWRUU3FqZ0NQeDM5/Ry5qcGc",
            title: "Card Title 3",
            text: "Explicabo magni sapiente.",
            buttonLabel: "Find Out More!",
            buttonLink: "#"
        },
        {
            imageSrc: "https://imgs.search.brave.com/KtKDow3LCxHUZNH8AvQZpeD7pZFUBg9vAxipX8UIJ4I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXIuZm9yZnVu/LmNvbS9mZXRjaC85/OS85OTQxNmEzZmYw/ZWJlNDM0MTM0MmM0/ZWM2OWM5NjIyMS5q/cGVn",
            title: "Card Title 4",
            text: "Tempore debitis beatae culpa natus architecto.",
            buttonLabel: "Find Out More!",
            buttonLink: "#"
        }
    ];

    return (
        <div className="d-flex justify-content-around flex-wrap">
            {cardsData.map((card, index) => (
                <Card 
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    text={card.text}
                    buttonLabel={card.buttonLabel}
                    buttonLink={card.buttonLink}
                />
            ))}
        </div>
    );
};

export default CardList;
