import { FunctionComponent } from "react";
import styled from "styled-components"

const CardContainer = styled.div`
display: flex;
flex-direction: row;
gap: 2%;
margin: 0 0.5rem;
flex-wrap: wrap;`;

const CardItem = styled('div') <{ background: string }>`
width: 40%;
min-height: 13rem;
background: url(${props => props.background || ''});
background-size: cover;
background-position: center;
border-radius: 20px;
margin: 0.6rem auto auto;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: end;`;

const Description = styled.div`
    color: #ffffff;
    h2 {
        margin: 0;
    }
    p {
        margin: 0;
    }
`;


type HeroCardsType = {
    state: {
        heroList: any[];
    }
}

const HeroCards: FunctionComponent<HeroCardsType> = (props) => {
    const {
        state
    } = props;

    console.log(state.heroList)

    return (
        <CardContainer>
            {
                state.heroList.map((e, index) => (
                    <CardItem background={e.images.md} id={`_heroLIst-${index}`}>
                        <Description>
                            <h2>{e.name}</h2>
                            <p>Height {e.appearance.height[1]}</p>
                            <p>Weight {e.appearance.weight[1]}</p>
                        </Description>
                    </CardItem>
                ))
            }

        </CardContainer>
    )
}

export default HeroCards;