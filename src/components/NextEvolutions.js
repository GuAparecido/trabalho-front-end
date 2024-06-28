import { Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NextEvolutions = () => {
    const { id } = useParams();
    const [nextEvolutions, setNextEvolutions] = useState([]);
    const getNextEvolution = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setNextEvolutions(response.data.nextEvolutions);
            console.log(response.data.nextEvolutions);

        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getNextEvolution();
    }, []);

    if (!nextEvolutions) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div>
            {nextEvolutions.map((nextEvolutions) => (
                <>
                    <Text className="infoDigimonType">PRÓXIMAS EVOLUÇÕES: {nextEvolutions.digimon}</Text>
                    <Image src={nextEvolutions.image} alt={nextEvolutions.digimon} />
                </>
            ))}
        </div>
    );
}

export default NextEvolutions;