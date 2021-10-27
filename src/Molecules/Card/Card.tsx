import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';

import { PostCardWrapper,PostDetailCardWrapper } from './Card.styled';

interface CardProps {
    imageUrl : string;
    title ?: string;
    cardBody ?: string;
    buttonText ?: string;
    cardType ?: string
}

const Card = ({imageUrl, title, buttonText, cardBody, cardType} : CardProps) => {
    return (
       <div data-testid="storyCard">
           {cardType==='postsCard' && 
            <PostCardWrapper>
                <Image url={imageUrl} width="300" height="200" altText={title}  />
                <div>
                    <h2 className="cardTitle">{title}</h2>
                    <div>
                        {buttonText && <Button label={buttonText} backgroundColor="#e94c5b" color="#fff" />}
                    </div>
                </div>
            </PostCardWrapper>
            }
           { cardType==='postDetail' && 
            <PostDetailCardWrapper>
                <Image url={imageUrl} width="700" height="400" altText={title}  />
                <div>
                    <h2 className="cardTitle">{title}</h2>
                   <p>{cardBody}</p>
                </div>
            </PostDetailCardWrapper>
            }
       </div>
    );
}

export default Card;