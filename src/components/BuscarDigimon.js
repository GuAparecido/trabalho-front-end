import { useState } from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Input,
    useToast,
    Image,
    Badge,
    Text,
    Box,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";

const BuscarDigimon = ({ digimon }) => {
    if (!digimon) return <div></div>;
    return (
        <Card margin={8} maxW="400px">
            <CardHeader>
                <Heading size="lg">{digimon.name}</Heading>
            </CardHeader>
            <CardBody>
                <Image src={digimon.sprites.other.home.front_default} width="250px" />
                <Flex direction="column" gap={4} alignItems="flex-start">
                    <Text fontSize="lg">Habilidades: </Text>
                    {digimon.abilities.map((ability) => (
                        <Badge>{ability.ability.name}</Badge>
                    ))}
                </Flex>
            </CardBody>
            <CardFooter>
                <Text fontSize="lg">Tipos: </Text>
                <Flex
                    direction="row"
                    gap={4}
                    alignItems="flex-start"
                    justifyContent="center"
                >
                    <Box>
                        {digimon.types.map((type) => (
                            <Badge>{type.type.name}</Badge>
                        ))}
                    </Box>
                </Flex>
            </CardFooter>
        </Card>
    );
};

const SearchPokemon = () => {
    const toast = useToast();

    const [input, setInput] = useState();
    const [loading, setLoading] = useState();
    const [digimon, setDigimon] = useState();

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const getDigimon = async () => {
        try {
            setLoading(true);
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${input}`
            );
            setDigimon(response.data);
        } catch (error) {
            toast({
                title: "Erro",
                description: "Pokémon não encontrado",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    const renderSearchInput = () => {
        return (
            <Flex
                gap={8}
                px={16}
                justifyContent="center"
                alignItems="center"
            >
                <InputGroup >
                    <Input
                        placeholder="Busque por nome ou número"
                        colorScheme="orange"
                        value={input}
                        onChange={onChangeInput}
                    />
                    <InputRightElement>
                        <Button bg={''} _hover={''}
                            onClick={() => {
                                setInput("");
                                setDigimon(undefined);
                            }}
                        >
                            <CloseIcon w={'10px'} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button
                    colorScheme="blue"
                    onClick={getDigimon}
                    isLoading={loading}
                >
                    Buscar
                </Button>
            </Flex>
        );
    };

    return (
        <div>
            {renderSearchInput()}
            <Flex >
                <BuscarDigimon digimon={digimon} />
            </Flex>
        </div>
    );
};


export default SearchPokemon;
