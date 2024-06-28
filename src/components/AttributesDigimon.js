import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AttributesDigimon = () => {
    const { id } = useParams();
    const [attributes, setAttributes] = useState([]);

    const getAttributes = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setAttributes(response.data.attributes);
            console.log(response.data.attributes);
        } catch (error) {
            console.error(error);
        }
    }, [id])
    useEffect(() => {
        getAttributes();
    }, []);
    if (!attributes) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div>
            {attributes.map((attributes) => (
                <Text className="infoDigimonType">ATRIBUTOS: {attributes.attribute}</Text>
            ))}
        </div>
    );
}

export default AttributesDigimon;