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
            <div className="backgroundColor">
                <div className="infoDigimon">
                    <div className="imagemDigimon">
                        <div className="infoDadosPrincipaisDigimon">
                            <Text>NÚMERO DO DIGIMON: {digimon.id}</Text>
                            <Text>NOME DO DIGIMON: {digimon.name}</Text>
                            <Text>DATA DE LANÇAMENTO: {digimon.releaseDate}</Text>
                        </div>
                        <ImagemDigimon />
                        <div className="infoDadosDigimon">
                            <FieldsDigimon />
                            <LevelDigimon />
                            <AttributesDigimon />
                            <TypeDigimon />
                        </div>
                    </div>
                    <div className="infoDadosDigimon">
                        <HabitiesDigimon />
                    </div>
                </div >
                <div className="infoDigimon">
                    <div className="infoDadosDigimon"><PriorEvolutions /></div>
                    <div className="infoDadosDigimon"><NextEvolutions /></div>

                </div>

                <Button onClick={() => { navigate("/cards")}} className="button">Voltar</Button>
            </div>
        </div >
    );
}

export default InfoDigimon;