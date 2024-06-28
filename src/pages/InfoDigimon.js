import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../style/InfoDigimon.css'
import HabitiesDigimon from "../components/HabilitiesDigimon";
import ImagemDigimon from "../components/ImagemDigimon";
import TypeDigimon from "../components/TypeDigimon";
import LevelDigimon from "../components/LevelDigimon";
import AttributesDigimon from "../components/AttributesDigimon";
import FieldsDigimon from "../components/FieldsDigimon";
import PriorEvolutions from "../components/PriorEvolutions";
import NextEvolutions from "../components/NextEvolutions";

const InfoDigimon = () => {
    const { id } = useParams();

    const [digimon, setDigimon] = useState();

    const navigate = useNavigate();

    const getInfo = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setDigimon(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [id])

    useEffect(() => {
        getInfo();
    }, []);

    if (!digimon) {
        return (
            <div>Carregando...</div>
        );
    }

    return (
        <div className="backgroundInfoDigimon">
            <div className="infoDigimon">
                <div className="imagemDigimon">
                    <div className="infoDadosDigimon">
                        
                    </div>
                    <ImagemDigimon />
                    <Text>NÚMERO: {digimon.id}</Text>
                        <Text>NOME: {digimon.name}</Text>
                        <Text>DATA DE LANÇAMENTO: {digimon.releaseDate}</Text>
                    <FieldsDigimon />
                </div>
                <LevelDigimon />
                <AttributesDigimon />
                <TypeDigimon />
                <HabitiesDigimon />
                <PriorEvolutions />
                <NextEvolutions />

                <Button onClick={() => { navigate("/cards") }}>Voltar</Button>
            </div >
        </div>
    );
}

export default InfoDigimon;