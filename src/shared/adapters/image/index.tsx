import NextImage from 'next/image';
import { type Ref, forwardRef } from 'react';

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export const Image = forwardRef(function Image(props: ImageProps, ref: Ref<HTMLImageElement>) {
  const { src, alt, width, height, priority } = props;
  return (
    <NextImage src={src} alt={alt ?? ''} width={width ?? 100} height={height ?? 100} priority={priority} ref={ref} />
  );
});
