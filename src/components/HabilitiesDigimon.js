import { Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            {skills.map((skills) => (
                <>
                    <Text className="infoDigimonType">HABILIDADE: {skills.skill}</Text>
                    <Text>DESCRIÇÃO: {skills.description} </Text>

                </>
            ))}
        </div>
    );
}

export default HabitiesDigimon;