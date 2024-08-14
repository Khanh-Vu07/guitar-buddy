// App.js
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const soundRef = useRef(null);

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  const playPauseAudio = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const loadAudio = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: 'https://example.com/song.mp3' },
      { shouldPlay: false },
      onPlaybackStatusUpdate
    );
    soundRef.current = sound;
    setSound(sound);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
    }
  };

  const skipForward = async () => {
    if (sound) {
      const newPosition = position + 10000; // skip 10 seconds
      await sound.setPositionAsync(newPosition);
    }
  };

  const skipBackward = async () => {
    if (sound) {
      const newPosition = position - 10000; // back 10 seconds
      await sound.setPositionAsync(newPosition);
    }
  };

  const onSliderValueChange = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value);
    }
  };

  useEffect(() => {
    loadAudio();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={skipBackward} style={styles.button}>
        <Text style={styles.buttonText}>⏪ 10s</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={playPauseAudio} style={styles.button}>
        <Text style={styles.buttonText}>{isPlaying ? '⏸️' : '▶️'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={skipForward} style={styles.button}>
        <Text style={styles.buttonText}>⏩ 10s</Text>
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onValueChange={onSliderValueChange}
      />
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>🔊</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
});
