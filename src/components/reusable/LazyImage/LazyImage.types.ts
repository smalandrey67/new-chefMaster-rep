type StyleType = {
   [property: string]: string | number;
}

export type LazyImageProps = {
   image: string;
   alt: string;
   width: string;
   height: string;
   style?: StyleType;
}