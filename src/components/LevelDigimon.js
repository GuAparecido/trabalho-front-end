import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const LevelDigimon = () => {
    const { id } = useParams();
    const [level, setLevels] = useState([]);
    const getInfo = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setLevels(response.data.levels);
            console.log(response.data.levels);
            
        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getInfo();
    }, []);

    if (!level) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div>
            {level.map((level) => (
                <Text className="infoDigimonType">LEVEL: {level.level}</Text>
            ))}
        </div>
    );
}

export default LevelDigimon;