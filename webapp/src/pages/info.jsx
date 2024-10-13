import React, {useState, useEffect} from "react";
import "../styles.css";
import Header from "../components/Header";
import MainContent from "../components/maincomponent";
import LoadingScreen from "../components/loadingScreen";


function Info() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const images = document.querySelectorAll('img');
        let loadedImagesCount = 0;

        const imageLoaded = () => {
            loadedImagesCount += 1;
            if (loadedImagesCount === images.length) {
                setTimeout(() => {setIsLoading(false);}, 1000)
                
            }
        };

        images.forEach(image => {
            if(image.complete){
                imageLoaded();
            }else{
                image.addEventListener('load', imageLoaded);
                image.addEventListener('error', imageLoaded);
            }
        });
        return () => {
            images.forEach(image => {
                image.removeEventListener('load', imageLoaded);
                image.removeEventListener('error', imageLoaded);
            });
        };
    }, []);

    return(
        <div id="info">
            {isLoading ? (<LoadingScreen />
            ) : (
                <>
                <Header/>
                <MainContent/>
                </>
            )}
            
        </div>
    );
}

export default Info;