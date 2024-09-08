import { ActivityIndicator, Image, ImageSourcePropType, LayoutChangeEvent, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const DynamicImage = ({ uri, getHeight, className }:{uri: string, getHeight?: (height: number) => void, className?: string}) => {
  const [ratio, setRatio] = useState<null|number>(null);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setRatio(width / height)
    });
  }, [uri]);

  if (!ratio) {
    return <ActivityIndicator />;
  }

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;

    if(getHeight) {
      getHeight(height)
    }
  };

  return (
    <Image
      source={{ uri: uri }}
      style={[styles.image, { aspectRatio: ratio }]}
      onLayout={onLayout}
      className={`${className}`}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
});

export default DynamicImage;
