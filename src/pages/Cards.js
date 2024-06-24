import { useCallback, useEffect, useState } from 'react';
import '../style/Cards.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';


const Cards = () => {
    const navigate = useNavigate();
    const [digimons, setDigimon] = useState([]);
    const [atributos, setAtributos] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const getDigimons = useCallback(async () => {
        try {
            const response = await axios.get('https://digi-api.com/api/v1/digimon')
            setDigimon(response.data.content)
            console.log(response)
        } catch (error) {
            console.log(error)   
        }
    }, [])

    const getAtributos = useCallback(async () => {
        try {
            const response = await axios.get('https://digi-api.com/api/v1/attribute')
            setAtributos(response.data.content.fields)
            console.log(response)
        } catch (error) {
            console.log(error)   
        }
    }, [])

    useEffect(() => {
        getDigimons();
    }, [getDigimons])

    useEffect(() => {
        getAtributos();
    }, [getAtributos]);
    
    if (!digimons.length) {
        return ( 
            <div>Carregando...</div>
        )
    }
    
    if (!atributos.length) {
        return ( 
            <div>Carregando...</div>
        )
    }

    return (
        <>
            <div className="divCards">
                {
                    digimons.map((digimon) => {
                        return (
                            <div className='gridDigimon'>
                                <Box className='boxDigimon'>
                                    <Image
                                        src={digimon.image}
                                        alt={digimon.name}
                                        className='imgDigimon'
                                    />
                                    <Text className='nomeDigimon'>
                                        Nome: {digimon.name}
                                        <br/>
                                        ID: {digimon.id}
                                        <br/>
                                        <Button onClick={onOpen} m={1}>Mais informações</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Habilidade</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {
                atributos.map((fields) => {
                    return (
                        <div>
                            <p>Digimon: {fields.id} </p>
                                <div>
                                    <p>{
                                        digimons.map((digimon) => {
                                            if (digimon.id === fields.id) {
                                                return (digimon.name)
                                            }
                                        })
                                        }</p>
                                </div>
                            <p>Habilidade: {fields.name}</p>
                            <br/>
                        </div>
                    )
                })
                    }
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                                        
                                    </Text>
                                </Box>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Cards;