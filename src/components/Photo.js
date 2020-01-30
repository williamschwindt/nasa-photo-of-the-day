import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: center;
margin: 0 auto;
`;

const Img = styled.img`
    width: 400px;
    border: 1px solid white;
    margin: 30px auto;
`;

const P = styled.p`
    font-size: 1.2rem;
    margin:  0 30px;
`;

function Photo(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <Div>
                <Img src={props.scr} alt="img of the day" />
                <div>
                    <P>{props.description}</P>
                </div>
            </Div>
        </div>
    )
}

export default Photo;