import { Text, background } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import('../style/HabilitiesDigimon.css')

const HabitiesDigimon = () => {
    const { id } = useParams();

    const [skills, setSkills] = useState([]);
    const getHabilies = useCallback(async () => {
        try {
            const response = await axios.get(`https:digi-api.com/api/v1/digimon/${id}`);
            setSkills(response.data.skills);
            console.log(response.data.skills);
        } catch (error) {
            console.error(error);
        }
    }, [id])
    useEffect(() => {
        getHabilies();
    }, []);

    if (!skills) {
        return (
            <div>Carregando...</div>
        );
    }
    return (
        <div>
            <Text className="infoHabilities">HABILIDADES:</Text>
            {skills.map((skills) => (
                <div className="backgroundDescription">
                    <Text className="infoDescription">NÚMERO: {skills.id}</Text>
                    <Text className="infoDescription">NOME: {skills.skill}</Text>
                    <Text className="infoDescription">DESCRIÇÃO: {skills.description} </Text>
                    <br></br>
                </div>
            ))}
        </div>
    );
}

export default HabitiesDigimon;