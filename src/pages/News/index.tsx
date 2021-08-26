import { Container } from './styles';

import Image from '../../assets/photo.jpg';
import Reward from '../../assets/reward.jpg';

import Header from '../../components/Header';
import DropDown from '../../components/DropDown';
import ContainerComponent from './components/Container'
import ContentComponent from './components/Content'

interface INewsData {
    title: string;
    photo: string;
    content: string;
}

const News = () => {
    const data: INewsData[] = [
        {
            "title": "Uma mensagem para te motivar!",
            "photo": Image,
            "content": "Continue assim, você está indo bem!"
        },
        {
            "title": "Mais uma etapa concluída!",
            "photo": Reward,
            "content": "Parabéns, aguarde instruções com o seu professor, em breve novidades!"
        },
        {
            "title": "Feriado se aproximando, fique atento",
            "photo": Image,
            "content": "No dia 7 de setembro teremos um feriado, fique atento e descanse :)"
        }
    ]

    const titleText = 'Notícias';

    return (
        <>
            <Header title={titleText} isReturnActive={true} path={""} />
            <Container>
                {data.map((value, index) =>
                    <DropDown key={index}
                        containerSize={"80px"}
                        containerChildren={
                            <ContainerComponent title={value.title} photo={value.photo} />
                        }
                        contentChildren={
                            <ContentComponent title={value.content}/>
                        } />
                )}
            </Container>
        </>
    );
};

export default News;