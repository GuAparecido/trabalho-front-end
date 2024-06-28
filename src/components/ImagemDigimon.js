import { Image} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ImagemDigimon = () => {
    const { id } = useParams();

    const [image, setImage] = useState([]);

    const getImage = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setImage(response.data.images);
        } catch (error) {
            console.error(error);
        }
    }, [id])
    useEffect(() => {
        getImage();
    }, []);

    if (!image) {
        return (
            <div>Carregando...</div>
        );
    }
    
    return (
        <div>
        {image.map((image) => (
            <>
                <Image src={image.href} alt="Digimon" w={'30vw'}/>
            </>
        ))}
    </div>
    );
}

export default ImagemDigimon;