import { Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import('../style/Evolution.css')

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
    }, [getNextEvolution]);

    if (!nextEvolutions) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div >
            <div className="tituloEvolutions">PRÓXIMAS EVOLUÇÕES:</div>
            {nextEvolutions.map((nextEvolutions) => (
                <div className="backgroundEvolution">
                    <Text > {nextEvolutions.digimon}</Text>
                    <div className="image">
                        <Image width={400} src={nextEvolutions.image} alt={nextEvolutions.digimon} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NextEvolutions;