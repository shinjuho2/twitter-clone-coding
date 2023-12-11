import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";

export interface MyTweet {
    id: string;
    photo?: string;
    tweet: string;
    userId: string;
    username: string;
    createAt: number;
}

const Wrapper = styled.div`
    
`;

export default function TimeLine() {

    const [tweets, setTweets] = useState<MyTweet[]>([]);
    const fetchTweets = async () => {
        const tweetsQuery = query(
            collection(db, "tweets"),
            orderBy("createAt", "desc")
        );
        const snapshot = await getDocs(tweetsQuery);
        const tweets = snapshot.docs.map((doc) => {
            const { photo, tweet, userId, username, createAt } = doc.data();
            return {
                photo,
                tweet,
                userId,
                username, 
                createAt,
                id: doc.id,
            };
        });
        setTweets(tweets)
    }
    useEffect(() => {
        fetchTweets();
    }, [])

    return (
        <Wrapper>
            {JSON.stringify(tweets)}
        </Wrapper>
    )
}