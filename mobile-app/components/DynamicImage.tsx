import { ActivityIndicator, Image, ImageSourcePropType, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

const DynamicImage = ({ uri, className }:{uri: string, className?: string}) => {
  const [ratio, setRatio] = useState<null|number>(null);

  useEffect(() => {
    Image.getSize(uri, (width, height) => setRatio(width / height));
  }, [uri]);

  if (!ratio) {
    return <ActivityIndicator />;
  }

  return (
    <Image
      source={{ uri: uri }}
      style={[styles.image, { aspectRatio: ratio }]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 15,
  },
});

export default DynamicImage;
