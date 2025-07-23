
import { Ionicons } from '@expo/vector-icons';
import { Video as ExpoVideo, ResizeMode } from 'expo-av';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function VideoCard({ video }: { video: any }) {
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(false);


  const onLike = () => {
    setLiked(!liked);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <View style={styles.container}>
  <ExpoVideo
    source={{ uri: video.sources[0] }}
    style={styles.video}
    shouldPlay={true}
    isLooping={true}
    isMuted={muted}
    resizeMode={ResizeMode.COVER}
  />

  <View style={styles.rightPanel}>
    <TouchableOpacity onPress={onLike} style={styles.btn}>
      <Ionicons
        name={liked ? "heart" : "heart-outline"}
        size={32}
        color={liked ? "red" : "white"}
      />
      {liked && <Text style={styles.likedText}>Liked</Text>}
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleMute} style={styles.btn}>
      <Ionicons
        name={muted ? "volume-mute" : "volume-high"}
        size={32}
        color="white"
      />
    </TouchableOpacity>
  </View>

  <View style={styles.info}>
    <Text style={styles.title}>{video.title}</Text>
    <Text style={styles.desc}>{video.description}</Text>
  </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  rightPanel: {
    position: 'absolute',
    right: 10,
    bottom: 100,
  },
  btn: {
    alignItems: 'center',
    marginBottom: 20,
  },
  info: {
    position: 'absolute',
    bottom: 100,
    left: 15,
    maxWidth: '70%',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  desc: {
    color: 'white',
    fontSize: 14,
  },
  likedText: {
    color:'red',
    fontSize: 10,
    marginTop: 2,
  },
});
