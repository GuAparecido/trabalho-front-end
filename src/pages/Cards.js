import { useCallback, useEffect, useState } from 'react';
import '../style/Cards.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Image,  Text} from '@chakra-ui/react';


const Cards = () => {
    const navigate = useNavigate();
    const [digimons, setDigimon] = useState([]);
    const [pages, setPages] = useState(0);
    const [maxPage, setMaxPage] = useState(1);

    const getDigimons = useCallback(async () => {
        try {
            const response = await axios.get(`https://digi-api.com/api/v1/digimon?pageSize=12&page=${pages}`)
            setDigimon(response.data.content)
            setMaxPage(response.data.pageable.totalPages)
            console.log(maxPage)
        } catch (error) {
            console.log(error)
        }
    }, [pages])

    useEffect(() => {
        getDigimons();
    }, [getDigimons])

    if (!digimons.length) {
        return (
            <div>Carregando...</div>
        )
    }

    const handlePreviousClick = () => {
        if (pages > 0) {
            setPages(pages - 1);
        }
    };

    const handleNextClick = () => {
        if (pages < maxPage) {
            setPages(pages + 1);
        }
    };

    return (
        <div className='backgroundCards'>
            <div className='gridDigimon'>
                {digimons.map((digimon) => (

                    <Box className='boxDigimon' onClick={() => {navigate(`/info/${digimon.id}`)}}>
                        <Image
                            src={digimon.image}
                            alt={digimon.name}
                            className='imgDigimon'
                        />
                        <Text className='nomeDigimon'>
                            Nome: {digimon.name}
                            <br />
                            {/* Professora estou retornando o ID pois solicitou 2 informações da API, mas as únicas que essa API me fornecem que seria usual nesse caso é a de id*/
                            /* Realizei as outras importações na página de informações */}
                            ID: {digimon.id}
                            <br />
                            {/*Deixo com o click na box ou com botão?*/}
                            {/* <Button onClick={() => {navigate(`/info/${digimon.id}`)}} m={1}>Mais informações</Button> */}
                        </Text>
                    </Box>

                ))
                }
            </div>
            <div className='paginacao'>
                {
                   <Button className={pages === 0 ? 'botaoPaginacao desativado' : ''} onClick={handlePreviousClick} disabled={pages === 0}>Anterior</Button>
                }
                <div className='numeroDePaginas'>
                    {pages + 1} - {maxPage + 1}
                </div>
                {
                   <Button className={pages === maxPage ? 'botaoPaginacao desativado' : ''} onClick={handleNextClick} disabled={pages === maxPage}>Próximo</Button>
                }
            </div> 

        </div>
    );
}

export default Cards;