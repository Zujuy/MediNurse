import React from "react";
import ReactDOM from "react-router-dom";
import {Gallery, GalleryImage} from "react-gesture-gallery"

const images = [
    src="carrousel1.jpg",
    src="carrousel2.jpg",
    src=""

    
  ];

function App(){
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === 3){
                setIndex(0);
            } else {
                setindex(prev => prev + 1);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <Gallery
            style={{
                Height: "30vh",
                width: "100vw"

            }}
            index={index}
            OonRequestChange={i => {
                setIndex(i)
            }}
            >
            {images.map(image => (
                <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
            </Gallery>
    )
}

const rootElemet = docuement.getElemetById("root");
ReactDOM.render(<App/>, rootElement)
