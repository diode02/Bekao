import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { Container, Header, Content, List, ListItem, Text } from "native-base";

export default function HomeScreen(props) {
  const goToDetailScreen = () => {
    props.navigation.navigate("Products", {
      itemId: 86,
      otherParam: "anything you want here",
    });
  };

  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem onPress={() => goToDetailScreen()}>
            <Text>Go To Products</Text>
          </ListItem>
          <ListItem>
            <Text>Other</Text>
          </ListItem>
          <ListItem>
            <Text>and other</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
