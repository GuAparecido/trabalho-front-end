import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TypeDigimon = () => {
    const { id } = useParams();
    const [type, setType] = useState([]);

    const getType = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setType(response.data.types);
            console.log(response.data.types);

        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getType();
    }, []);

    if (!type) {
        return (
            <div>Carregando...</div>
        );
    }

    return (
        <div>
            {type.map((type) => (
                <Text className="infoDigimonType" >TIPO: {type.type} </Text>
            ))}
        </div>
    );
}

export default TypeDigimon;