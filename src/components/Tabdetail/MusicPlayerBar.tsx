import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import { useFocusEffect } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import IconSkipBackward from '@/assets/iconSvg/IconSkipBackward';
import IconSkipForward from '@/assets/iconSvg/IconSkipForward';
import { Feather } from '@expo/vector-icons';

const MusicPlayer: React.FC = () => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setupPlayer();
      return () => {
        TrackPlayer.reset(); // Reset player when leaving the screen
      };
    }, [])
  );

  useEffect(() => {
    if (playbackState === State.Playing) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [playbackState]);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'trackId',
      url: 'https://audio.jukehost.co.uk/vTRYaTEbpaYRCxiWGgL2S91mnOuMKfLw',
      title: 'Track Title',
      artist: 'Track Artist',
    });

    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
      ],
    });
  };

  const togglePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  const skipForward = async () => {
    const position = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    let newPosition = position + 10;
    if (newPosition > duration) newPosition = duration;
    await TrackPlayer.seekTo(newPosition);
  };

  const skipBackward = async () => {
    const position = await TrackPlayer.getPosition();
    let newPosition = position - 10;
    if (newPosition < 0) newPosition = 0;
    await TrackPlayer.seekTo(newPosition);
  };

  const onSliderValueChange = async (value: number) => {
    await TrackPlayer.seekTo(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={skipBackward} style={styles.button}>
        <IconSkipBackward />
      </TouchableOpacity>
      <TouchableOpacity onPress={togglePlayPause} style={styles.button} className="bg-[#0C5FFF] rounded-full">
        {isPlaying ? <Feather name="pause" size={20} color="#fff" /> : <Feather name="play" size={20} color="#fff" />}
      </TouchableOpacity>
      <TouchableOpacity onPress={skipForward} style={styles.button}>
        <IconSkipForward />
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={progress.duration}
        value={progress.position}
        onValueChange={onSliderValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default MusicPlayer;
