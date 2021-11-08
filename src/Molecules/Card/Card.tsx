import Button from "../../atoms/Button/Button";
import StoryImage from "../../atoms/Image/Image";

import {
  PostCardWrapper,
  PostDetailCardWrapper,
  StoryCardWrapper,
} from "./Card.styled";

interface CardProps {
  imageUrl: string;
  title?: string;
  cardBody?: Array<string>;
  buttonText?: string;
  cardType?: string;
  width?: string;
  height?: string;
  onClickHandler?: (...args: any[]) => void;
  buttonClickHandler?: (...args: any[]) => void;
}

const StoryCard = ({
  imageUrl,
  title,
  buttonText,
  cardBody,
  cardType,
  width,
  height,
  onClickHandler,
  buttonClickHandler,
}: CardProps) => {
  return (
    <StoryCardWrapper data-testid="storyCard" onClick={onClickHandler}>
      {cardType === "SimpleCard" && (
        <PostCardWrapper style={{ width, height }}>
          <StoryImage url={imageUrl} width="300" height="200" altText={title} />
          <div className="cardBody">
            <h2 className="cardTitle">{title}</h2>
            <div className="cardFooter">
              {buttonText && (
                <Button
                  label={buttonText}
                  backgroundColor="#e94c5b"
                  color="#fff"
                  onClickHandler={buttonClickHandler}
                />
              )}
            </div>
          </div>
        </PostCardWrapper>
      )}

      {cardType === "cardInDetail" && (
        <PostDetailCardWrapper>
          <StoryImage url={imageUrl} width="473" height="315" altText={title} />
          <div className="cardBody">
            <h2 className="cardTitle">{title}</h2>
            <ul>
              {cardBody &&
                cardBody.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
            </ul>
            {buttonText && (
              <Button
                label={buttonText}
                primary={true}
                onClickHandler={buttonClickHandler}
              />
            )}
          </div>
        </PostDetailCardWrapper>
      )}
    </StoryCardWrapper>
  );
};

export default StoryCard;
