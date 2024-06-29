import { Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import('../style/Evolution.css')

const PriorEvolutions = () => {
    const navigate = useNavigate();
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
    }, [getPriorEvolution]);

    if (!priorEvolutions) {
        return (
            <div>Carregando...</div>
        );
    }

    return (
        <div>
            <div className="tituloEvolutions">EVOLUÇÕES ANTERIORES: </div>
            {priorEvolutions.map((priorEvolutions) => (
                <div className="backgroundEvolution">
                    <Text >{priorEvolutions.digimon}</Text>
                    <div className="image">
                        <Image width={400} src={priorEvolutions.image} alt={priorEvolutions.digimon} onClick={() => { navigate(`/info/${priorEvolutions.id}`)}}/>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default PriorEvolutions;