import styled from 'styled-components';

export const PostCardWrapper = styled.div`
    overflow: hidden;
    box-shadow: 0px 2px 8px 0px #b0bec5;
    background-color: white;
    text-align: center;
    border-radius: 1rem;
    position: relative;
    width: 280px;
    margin-bottom: 1rem;
    margin-left: 1rem;

    .cardTitle{
        font-weight: bold;
        font-size: 1.5rem;
        margin-bottom: 3.4rem;
    }

    button{
    width: 100%;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    padding: 1rem;
    background-color: #e94c5b;
    cursor: pointer;
  }
    
`;

export const PostDetailCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin: auto;
    box-shadow: 0px 2px 8px 0px #b0bec5;

    img{
        width: 50%;
        height: 100%;
        border-radius: calc(.25rem - 1px) 0 0 calc(.25rem - 1px);
    }

    div{
        flex: 1 1 auto;
        min-height: 1px;
        padding: 1.25rem; 

        p{
            margin-bottom: 0;
        }
    }
`;