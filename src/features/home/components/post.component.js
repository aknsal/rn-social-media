/* @flow weak */

import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TouchableRipple,
} from "react-native-paper";
import styled from "styled-components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LottieView from "lottie-react-native";

const PostContainer = styled(Card)`
  margin: 10px;
`;

const PostDesc = styled(Paragraph)`
  font-size: 18px;
  font-weight: normal;
  padding: 10px 0;
`;

const LikePost = styled(LottieView)`
  height: 50px;
  width: 50px;
`;
export const PostD = ({}) => (
  <PostContainer>
    <UserInfoContainer>
      <ProfilePicture
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Name>Rajesh Arora</Name>
    </UserInfoContainer>
  </PostContainer>
);

const LeftContent = (props) => (
  <Avatar.Image
    size={40}
    source={{
      uri: "https://reactnative.dev/img/tiny_logo.png",
    }}
  />
);

const RightContent = (props) => (
  <TouchableRipple
    style={{
      height: 36,
      width: 36,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={() => console.log("Pressed")}
  >
    <MaterialCommunityIcons name="dots-vertical" size={26} />
  </TouchableRipple>
);

export const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const isFirstRun = React.useRef(true);
  const animation = React.useRef(null);
  React.useEffect(() => {
    if (isFirstRun.current) {
      if (isLiked) {
        animation.current.play(66, 66);
      } else {
        animation.current.play(19, 19);
      }
      isFirstRun.current = false;
    } else if (isLiked) {
      animation.current.play(24, 50);
    } else {
      animation.current.play(0, 19);
    }
  }, [isLiked]);
  return (
    <PostContainer>
      <Card.Title
        title="Rajesh Arora"
        subtitle="few minutes ago..."
        left={LeftContent}
        right={RightContent}
        rightStyle={{ marginRight: 15 }}
      />
      <Card.Content>
        <PostDesc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          dapibus hendrerit arcu, id suscipit lorem fringilla at. Curabitur
          venenatis augue erat, sed tincidunt tellus vestibulum a. In molestie,
          lectus in finibus porttitor, purus lorem dapibus purus, sit amet
          consectetur sapien lacus volutpat lectus.
        </PostDesc>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Pressable onPress={() => setIsLiked(!isLiked)}>
          <LikePost
            ref={animation}
            autoPlay={false}
            loop={false}
            source={require("../../../../assets/lottie/like.json")}
          />
        </Pressable>
        <Button>Ok</Button>
      </Card.Actions>
    </PostContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
