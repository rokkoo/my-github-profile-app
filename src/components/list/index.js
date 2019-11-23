import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import moment from "moment";

// Theme
import { Colors, languagesColors } from "../../../theme";

const ListContainer = styled(FlatList)``;

const ItemWrapper = styled.View`
  flex-direction: column;
  height: 85;
  align-content: center;
  justify-content: center;
  border-left-width: 5;
  border-left-color: red;
  margin-top: 10;
  margin-left: 20;
  padding-left: 10;
  background-color: #1f344b;
  border-radius: 5;
`;

const Text = styled.Text`
  color: ${Colors.light};
  font-size: ${props => (props.title ? 20 : 15)};
  font-weight: bold;
`;

const Wrapper = ({ language, children }) => {
  const lang = language ? language.toLowerCase() : undefined;

  const languageColor =
    lang === undefined ? languagesColors.default : languagesColors[0][lang];

  return (
    <ItemWrapper style={{ borderColor: languageColor }}>{children}</ItemWrapper>
  );
};

const RenderItem = ({ item }) => {
  // created_at
  // url
  // language
  console.log(item.creted_at);

  return (
    <Wrapper language={item.language}>
      <Text title>{item.name}</Text>
      <Text>{moment(item.created_at).format("YYYY-MM-DD")}</Text>
    </Wrapper>
  );
};

const List = ({ data }) => {
  return (
    <ListContainer
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default List;
