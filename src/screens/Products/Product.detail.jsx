import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import { Container, Header, Content, List, ListItem, Text } from "native-base";

export default function ProductDetail() {
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem selected>
            <Text>Product Name</Text>
          </ListItem>
          <ListItem>
            <Text>Product Price</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan 3</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
