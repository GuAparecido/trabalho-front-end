import { Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PriorEvolutions = () => {
    const { id } = useParams();

    const [priorEvolutions, setPriorEvolutions] = useState([]);
    const getPriorEvolution = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setPriorEvolutions(response.data.priorEvolutions);
            console.log(response.data.priorEvolutions);

        } catch (error) {
            console.error(error);
        }
    }, [id])
    useEffect(() => {
        getPriorEvolution();
    }, []);

    if (!priorEvolutions) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div>
            {priorEvolutions.map((priorEvolutions) => (
                <>
                    <Text className="infoDigimonType">EVOLUÇÕES ANTERIORES: {priorEvolutions.digimon}</Text>
                    <Image src={priorEvolutions.image} alt={priorEvolutions.digimon} />
                </>
            ))}
        </div>
    );
}

export default PriorEvolutions;