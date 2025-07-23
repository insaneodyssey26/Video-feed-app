import VideoCard from '@/components/VideoCard';
import { videoData } from '@/data/videoData';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const renderItem = ({ item }: { item: any }) => {
    return <VideoCard video={item} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={videoData}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
