import { ActivityIndicator, Image, ImageSourcePropType, LayoutChangeEvent, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";

const DynamicImage = ({ uri, getHeight, isRounded = false, className }:{uri: string, isRounded?: boolean, getHeight?: (height: number) => void, className?: string}) => {
  const [ratio, setRatio] = useState<null|number>(null);

  useEffect(() => {
    Image.getSize(uri, (width, height) => {
      setRatio(width / height)
    });
  }, [uri]);

  if (!ratio) {
    return (
    <View className="bg-gray-300 aspect-[4/3] rounded-lg">
    </View>
    );
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
