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
