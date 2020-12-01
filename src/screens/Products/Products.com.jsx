import React, { useEffect, useState } from "react";

import { Container, Header, Content, List, ListItem, Text } from "native-base";

export default function Products(props) {
  console.log(props.navigation.state.params);
  return (
    <Container>
      <Header />
      <Content>
        <List>
          <ListItem selected>
            <Text>Product 1 </Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel 2</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan 3</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
