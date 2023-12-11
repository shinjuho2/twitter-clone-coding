import { styled } from "styled-components";
import { MyTweet } from "./timeline";

const Wrapper = styled.div`
    
`;

const Column = styled.div`
    
`;

const Username = styled.span`
    
`;

const Photo = styled.img`
    
`;

const Payload = styled.p`
    
`;

export default function Tweet({ username, photo, tweet }: MyTweet) {
    return (
        <Wrapper>
            <Column>
                <Username>{username}</Username>
                <Payload>{tweet}</Payload>
            </Column>
            {photo ? (
                <Column>
                    <Photo src={photo} />
                </Column>) : null
            }
        </Wrapper>
    )
}