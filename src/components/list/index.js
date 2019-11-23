import React from "react";
import { FlatList, Linking } from "react-native";
import moment from "moment";

// Theme
import { languagesColors } from "../../../theme/constants";

// Styles
import { ItemWrapper, Text, Touchable } from "./styles";

const Wrapper = ({ language, children }) => {
  const lang = language ? language.toLowerCase() : undefined;

  const languageColor = languagesColors[0][lang]
    ? languagesColors[0][lang]
    : languagesColors[0].default;

  return (
    <ItemWrapper style={{ borderColor: languageColor }}>{children}</ItemWrapper>
  );
};

const RenderItem = ({ item }) => {
  return (
    <Touchable onPress={() => Linking.openURL(item.html_url)}>
      <Wrapper language={item.language}>
        <Text title>{item.name}</Text>
        <Text>
          {moment(item.created_at)
            .subtract(10, "days")
            .calendar()}
        </Text>
      </Wrapper>
    </Touchable>
  );
};

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default List;
