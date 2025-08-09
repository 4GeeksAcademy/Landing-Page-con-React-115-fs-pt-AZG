import React from "react";
import Card from "../Card";

export const CardsSection = () => {
    const cardsData = [
        {
            title: "exploracion espacial",
            description: "descubre los misterios dl universo y las ultimas misiones espaciales que expanden tu horizonte.",
            image: "https://s03.s3c.es/imag/_v0/1200x655/f/b/a/Portada-espacio-datos.jpg",
            buttonText: "Explorar"
        },
        {
            title: "exploracion espacial",
            description: "En astronomía, las largas y brillantes colas de estrellas, gas y polvo que giran alrededor de una galaxia espiral.",
            image: "https://www.un.org/sites/un2.un.org/files/field/image/2024/11/gi-space-cover.jpg",
            buttonText: "descrubrir"
        },
        {
            title: "exploracion espacial",
            description: "Si te paras en el Polo Norte, es la estrella que se encuentra directamente sobre tu cabeza. En este momento, la estrella es Polaris.",
            image: "https://elordenmundial.com/wp-content/uploads/2024/08/que-es-tratado-espacio-ultraterrestre.jpg",
            buttonText: "aprende"
        },
        {
            title: "exploracion espacial",
            description: "Un objeto muy denso, formado tras la muerte violenta como supernova de una estrella masiva. Gira a gran velocidad.",
            image: "https://www.un.org/sites/un2.un.org/files/gi-space-liability-convention.jpg",
            buttonText: "investiga"
        }

    ];

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h4 className="display-4">Explora el universo</h4>
                    <p className="">A traves de:</p>
                </div>
            </div>
            <div className="row">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        buttonText={card.buttonText}
                    />
                ))}

            </div>
        </div>
    );

};

export default CardsSection;