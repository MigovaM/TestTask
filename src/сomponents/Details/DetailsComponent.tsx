import React, {memo} from 'react';
import {VStack, Avatar, Text} from 'native-base';

const DetailsComponent = ({route}): JSX.Element => {
  const {item} = route.params;

  return (
    <VStack
      mt={10}
      alignItems={{
        base: 'center',
        md: 'flex-start',
      }}>
      <Avatar
        borderWidth="2"
        alignSelf="center"
        size="2xl"
        source={{
          uri: item.actor.avatar_url,
        }}
      />
      <Text pt={10} fontSize={20} bold>
        {item.actor.display_login}
      </Text>
      <Text pt={7} fontSize={16}>
        {item.actor.url}
      </Text>
    </VStack>
  );
};

export default memo(DetailsComponent);
