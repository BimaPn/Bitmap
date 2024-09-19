import {  Image,  LayoutChangeEvent, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import ImageSkeleton from "./skeletons/ImageSkeleton";

type DynamicImageProps = {
  uri: string
  isRounded?: boolean
  getHeight?: (height: number) => void
  className?: string
}
const DynamicImage = ({ uri, getHeight, isRounded = false, className }: DynamicImageProps) => {

  const [ratio, setRatio] = useState<null|number>(null);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setRatio(width / height)
    });
  }, [uri]);

  if (!ratio) {
    return <ImageSkeleton />
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    if(getHeight) {
      getHeight(height)
    }
  };

  return ratio && (
    <Image
      source={{ uri: uri }}
      style={[styles.image, { aspectRatio: ratio }]}
      onLayout={onLayout}
      className={`${isRounded && "rounded-lg"} ${className}`}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
});

export default DynamicImage;
