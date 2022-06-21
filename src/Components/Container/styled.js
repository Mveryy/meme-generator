import styled from "styled-components";

export const Body = styled.div`
    width: 55rem;
    /* height: 48.5rem; */
    background-color: #ffffff;
    padding: 3.6rem;
    border: none;
    border-radius: 0 0 0.5rem 0.5rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        input {
            width: 23rem;
            height: 3.5rem;
            border: 1px solid #d5d4d8;
            border-radius: 0.5rem;
            text-indent: 1rem;
        }

        button {
            width: 100%;
            margin: 1.5rem 0 3.6rem 0;
            height: 4rem;
            background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
            border-radius: 0.5rem;
            border: none;
            color: white;
            cursor: pointer;
        }
    }

    section {
        display: flex;
        justify-content: center;
        position: relative;

        img {
            border-radius: 0.5rem;
            max-width: 100%;
            height: 100%;
        }

        h2 {
            position: absolute;
            width: 80%;
            text-align: center;
            left: 50%;
            transform: translateX(-50%);
            margin: 15px 0;
            padding: 0 5px;
            font-family: impact, sans-serif;
            font-size: 2.2em;
            text-transform: uppercase;
            color: white;
            letter-spacing: 2px;
            text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000,
                0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000;
        }

        .top {
            top: 0;
        }

        .bottom {
            bottom: 0;
        }
    }
`;
