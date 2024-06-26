import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../style/InfoDigimon.css'

const InfoDigimon = () => {
    const { id } = useParams();

    const [digimon, setDigimon] = useState([]);
    const [type, setType] = useState([]);

    const navigate = useNavigate();

    const getInfo = async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setDigimon(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const getTypes = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setType(response.data.types);
            console.log(response.data.types);
        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        getTypes();
    }, [getTypes]);

    if (!digimon) {
        return (
            <div>Carregando...</div>
        );
    }

    if (!type) {
        return (
            <div>Carregando...</div>
        );
    }

    return (
        <div className="backgroundInfoDigimon">
            <div className="infoDigimon">
            <h1>{digimon.name}</h1>
                <div>{digimon.releaseDate}</div>
                <div>{digimon.id}</div>


                <Button onClick={() => { navigate("/cards") }}>Voltar</Button>
            </div >
        </div>
    );
}

export default InfoDigimon;