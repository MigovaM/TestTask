import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Text,
  Avatar,
  Spacer,
} from 'native-base';
import {IEvent} from '../../services/interfaces/index.interfaces';

interface ListComponentProps {
  goToDetails(item: IEvent): void;
  events: IEvent[];
}

const ListComponent = ({
  goToDetails,
  events,
}: ListComponentProps): JSX.Element => {
  const renderItem = ({item}: {item: IEvent}) => {
    return (
      <TouchableOpacity onPress={() => goToDetails(item)}>
        <Box
          borderBottomWidth="1"
          _dark={{
            borderColor: 'gray.600',
          }}
          borderColor="coolGray.200"
          pl="4"
          pr="5"
          py="2">
          <HStack space={3} justifyContent="space-between" alignItems="center">
            <Avatar
              borderWidth="2"
              size="48px"
              source={{
                uri: item.actor.avatar_url,
              }}
            />
            <Text
              _dark={{
                color: 'gray',
              }}
              color="coolGray.800"
              bold
              fontSize="16">
              {item.actor.display_login}
            </Text>
            <Spacer />
          </HStack>
        </Box>
      </TouchableOpacity>
    );
  };

  return <FlatList data={events} renderItem={renderItem} />;
};

export default ListComponent;
