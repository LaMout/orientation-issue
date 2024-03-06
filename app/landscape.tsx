import { Button, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import Video from "react-native-video";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandscapeScreen() {
  const router = useRouter();
  const videoRef = useRef(null);

  const handlePress = () => {
    router.back();
  };

  return (
    <View
      style={{
        ...styles.container,
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <Video
        ref={videoRef}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
        source={{
          uri: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        }}
        playInBackground={true}
        playWhenInactive={true}
        ignoreSilentSwitch="ignore"
        resizeMode="cover"
      />
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            zIndex: 2,
            position: "relative",
            backgroundColor: "transparent",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "transparent",
            }}
          >
            <View style={{ paddingLeft: 30 }}>
              <Text style={styles.title}>Play</Text>
            </View>
            <View style={{ paddingRight: 30 }}>
              <Text style={styles.title}>Pause</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.container,
            backgroundColor: "transparent",
            zIndex: 3,
          }}
        >
          <Text style={styles.title}>Landscape</Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          <Button title="Go Back" onPress={handlePress} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
