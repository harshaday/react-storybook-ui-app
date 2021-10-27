interface ImageProps {
    url: string;
    width?: string;
    height?:string;
    altText?:string;
}

const StoryImage = ({url, width, height, altText, ...props} : ImageProps) => {
    return (
        <img data-testid="storyImage" src={url} alt={altText} width={width} height={height} {...props} />
    );
}

export default StoryImage;