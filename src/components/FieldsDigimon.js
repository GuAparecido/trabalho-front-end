import { Text, Image } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/Fields.css";

const FieldsDigimon = () => {
    const { id } = useParams();
    const [fields, setFields] = useState([]);

    const getFields = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setFields(response.data.fields);
            console.log(response.data.fields);
        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getFields();
    }, [getFields]);

    if (!fields) {
        return (
            <div>Carregando...</div>
        );
    }


    return (
        <div>
            {fields.map((fields) => (
                <div className="fields"> 
                    <Image src={fields.image} alt={fields.name}/>
                    <Text className="infoDigimonType" marginLeft={2} alignContent={'center'}>CAMPOS: {fields.field}</Text>
                </div>
            ))}
        </div>
    );
}

export default FieldsDigimon;