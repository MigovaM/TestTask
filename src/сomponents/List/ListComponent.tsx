import React from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
// import {
//   NativeBaseProvider,
//   Box,
//   HStack,
//   VStack,
//   Text,
//   Pressable,
//   Image,
// } from 'native-base';
import {IEvent} from '../../services/interfaces/index.interfaces';

interface ListComponentProps {
  goToDetails(): void;
  events: IEvent[];
  pullToRefreshHandler(): void;
  refreshing: boolean;
}

const ListComponent = ({
  goToDetails,
  events,
  pullToRefreshHandler,
  refreshing,
}: ListComponentProps): JSX.Element => {
  const renderItem = ({item}: {item: IEvent}) => {
    return (
      <TouchableOpacity onPress={goToDetails}>
        <Text>{item.actor.display_login}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      onRefresh={pullToRefreshHandler}
      refreshing={refreshing}
      data={events}
      initialNumToRender={25}
      renderItem={renderItem}
    />
  );
};

export default ListComponent;
