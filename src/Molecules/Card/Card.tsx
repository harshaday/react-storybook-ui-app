import Button from '../../atoms/Button/Button';
import StoryImage from '../../atoms/Image/Image';

import { PostCardWrapper,PostDetailCardWrapper } from './Card.styled';

interface CardProps {
    imageUrl : string;
    title ?: string;
    cardBody ?: string;
    buttonText ?: string;
    cardType ?: string;
    onClickHandler?: () => void;
}

const StoryCard = ({imageUrl, title, buttonText, cardBody, cardType, onClickHandler} : CardProps) => {
    return (
       <div data-testid="storyCard" onClick={onClickHandler}>
           {cardType==='postsCard' && 
            <PostCardWrapper>
                <StoryImage url={imageUrl} width="300" height="200" altText={title}  />
                <div className="cardBody">
                    <h2 className="cardTitle">{title}</h2>
                    <div className="cardFooter">
                        {buttonText && <Button label={buttonText} backgroundColor="#e94c5b" color="#fff" />}
                    </div>
                </div>
            </PostCardWrapper>
            }
           { cardType==='postDetail' && 
            <PostDetailCardWrapper>
                <StoryImage url={imageUrl} width="1000" height="700" altText={title}  />
                <div className="cardBody">
                    <h2 className="cardTitle">{title}</h2>
                   <p>{cardBody}</p>
                </div>
            </PostDetailCardWrapper>
            }
       </div>
    );
}

export default StoryCard;