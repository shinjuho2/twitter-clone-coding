import { styled } from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Textarea = styled.textarea`
    border: 2px solid white;
    padding: 30px;
    border-radius: 20px;
    font-size: 16px;
    color: white;
    background-color: black;
    width: 100%;
    resize: none;
`;

const AttachFileButton = styled.label``;

const AttachFileInput = styled.input`
    display: none;
`;

const SubmitBtn = styled.input``;

export default function PostTweetForm() {
    return (
        <Form>
            <Textarea placeholder="What is happening?" />
            <AttachFileButton htmlFor="file">Add photo</AttachFileButton>
            <AttachFileInput type="file" id="file" accept="image/*" />
            <SubmitBtn type="submit" value="Post Tweet" />
        </Form>
    )
}