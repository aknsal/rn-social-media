/* @flow weak */

import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  Avatar,
  Title,
  Subheading,
  FAB,
  Portal,
  Provider,
} from "react-native-paper";
import { windowWidth } from "../../../constants/dimensions/Dimensions";
import styled from "styled-components";
import LottieView from "lottie-react-native";
import FABComponent from "../../../components/FAB";

const FollowButton = styled(LottieView)`
  height: 60px;
`;

const ProfileScreen = ({}) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const isFirstRun = React.useRef(true);
  const animation = React.useRef(null);
  React.useEffect(() => {
    if (isFirstRun.current) {
      if (isFollowed) {
        animation.current.play(30, 30);
      } else {
        animation.current.play(0, 0);
      }
      isFirstRun.current = false;
    } else if (isFollowed) {
      animation.current.play(0, 12);
    } else {
      animation.current.play(40, 56);
    }
  }, [isFollowed]);
  return (
    <View style={styles.container}>
      <Image
        style={styles.coverPhoto}
        source={require("../../../../assets/pictures/coverPhoto.jpg")}
      />
      <Avatar.Image
        size={140}
        style={styles.profilePic}
        source={require("../../../../assets/pictures/profilePic.jpg")}
      />
      <View style={styles.profileDetails}>
        <View style={styles.nameAndFollow}>
          <Text style={{ fontSize: 30 }}>Rajesh Arora</Text>
          <Pressable onPress={() => setIsFollowed(!isFollowed)}>
            <FollowButton
              ref={animation}
              autoPlay={false}
              loop={false}
              source={require("../../../../assets/lottie/plusMinus.json")}
            />
          </Pressable>
        </View>
        <Text>Delhi, India</Text>
        <View style={styles.followContainer}>
          <View style={styles.followingsContainer}>
            <Title>1032</Title>
            <Text>Followers</Text>
          </View>
          <View style={styles.followersContainer}>
            <Title>321</Title>
            <Text>Followings</Text>
          </View>
        </View>
      </View>
      <FABComponent />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
  profilePic: {
    position: "absolute",
    top: (windowWidth * 9) / 16 - 70,
  },

  profileDetails: {
    alignItems: "center",
    top: 80,
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  followingsContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  followersContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  nameAndFollow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
