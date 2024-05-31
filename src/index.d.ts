declare module "react-rating-stars-component" {
  import { ComponentType } from "react";

  interface ReactStarsProps {
    count?: number;
    value?: number;
    onChange?: (newRating: number) => void;
    size?: number;
    activeColor?: string;
    color?: string;
    isHalf?: boolean;
    edit?: boolean;
  }

  const ReactStars: ComponentType<ReactStarsProps>;

  export default ReactStars;
}
