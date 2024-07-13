/* eslint-disable react-native/no-inline-styles */

// @ts-nocheck
import React, { MutableRefObject, ReactElement, memo, useEffect, useState } from 'react';
import { Image, ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props<T> = {
  data: T[];
  innerRef?: MutableRefObject<ScrollView | undefined>;
  ListHeaderComponent?: React.ReactNode | null;
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListFooterComponent?: React.ComponentType<any> | React.ReactElement | null;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  renderItem: ({ item, i }: { item: T; i: number }) => ReactElement;
  loading?: boolean;
  LoadingView?: React.ComponentType<any> | React.ReactElement | null;
  numColumns?: number;
  horizontal?: boolean;
  keyExtractor?: ((item: T | any, index: number) => string) | undefined;
  style?: StyleProp<ViewStyle>;
};

function MasonryList<T>(props: Props<T>) {
  const {
    data,
    innerRef,
    ListHeaderComponent,
    ListEmptyComponent,
    ListFooterComponent,
    ListHeaderComponentStyle,
    containerStyle,
    renderItem,
    loading,
    LoadingView,
    numColumns = 2,
    horizontal,
    keyExtractor,
    style,
  } = props;

  const [cols, setCols] = useState(
    Array(numColumns)
      .fill(numColumns)
      .map((_) => ({ bricks: [], colHeight: 0 }))
  );

  const processImage = async () => {
    const processedImages = [...data];
    for (const i in data) {
      const item = processedImages[i];
      await Image.getSize(item as any, (_, height) => {
        processedImages[i] = { ...item, height: Math.min(500, height) };
      });
    }

    return await layoutBricks(processedImages);
  };

  const layoutBricks = async (data:any) => {
    const newCols = [...cols];

    data.forEach((image: any) => {
      let ht = image.height;

      const heights = newCols.map(({ colHeight }) => colHeight);
      const shortestColumnIndex = heights.findIndex((colH) => colH === Math.min.apply(Math, heights));
      const shortestColumn = newCols[shortestColumnIndex];

      newCols[shortestColumnIndex] = {
        bricks: [...shortestColumn.bricks , image],
        colHeight: shortestColumn.colHeight + ht,
      };
    });

    setCols(newCols);
  };

  useEffect(() => {
    processImage();
  }, []);

  return (
    <View style={containerStyle}>
      <>
        <View style={ListHeaderComponentStyle}>{ListHeaderComponent}</View>
        {data.length === 0 && ListEmptyComponent ? (
          React.isValidElement(ListEmptyComponent) ? (
            ListEmptyComponent
          ) : (
            // @ts-ignore
            <ListEmptyComponent />
          )
        ) : (
          <View
            style={[
              styles.masonryContainer,
              {
                flexDirection: horizontal ? 'column' : 'row',
              },
              style,
            ]}
          >
            {cols.map(({ bricks }, index) => {
              const uniqueBricks = [...new Set(bricks)];
              return (
                <View
                  key={`masonry-column-${index}`}
                  style={{
                    flex: 1 / numColumns,
                    flexDirection: horizontal ? 'row' : 'column',
                  }}
                >
                  {uniqueBricks.map((b, num) => {
                    return renderItem({ item: b, i: num });
                  })}
                </View>
              );
            })}
          </View>
        )}
        {loading && LoadingView}
        {ListFooterComponent}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  masonryContainer: {
    flex: 1,
  },
});

export default memo(MasonryList);
