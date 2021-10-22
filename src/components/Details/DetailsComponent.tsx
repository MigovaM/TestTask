import React from 'react';
import {useRoute, RouteProp} from '@react-navigation/native';
import {VStack, Avatar, Text} from 'native-base';
import {IEvent} from '../../services/interfaces/index.interfaces';

type DetailsComponentRoute = {
  details: {
    item: IEvent;
  };
};

const DetailsComponent = (): JSX.Element => {
  const route = useRoute<RouteProp<DetailsComponentRoute, 'details'>>();
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
      <Text pt={7} fontSize={16} textAlign="center">
        {item.actor.url}
      </Text>
    </VStack>
  );
};

export default DetailsComponent;
