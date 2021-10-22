import React, {useRef, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import ListComponent from './ListComponent';
import {RootState} from '../../services/store';
import {getEventsRequest} from '../../services/store/actions/actions';
import {TIME} from '../../constants/index';

const ListContainer = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const events = useSelector((state: RootState) => state.evenst.events);
  const isLoading = useSelector((state: RootState) => state.evenst.isLoading);
  const refreshTime = useRef(new Date());

  const intervalCallback = useCallback(() => {
    dispatch(getEventsRequest());
    refreshTime.current = new Date();
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      dispatch(getEventsRequest());
      refreshTime.current = new Date();

      const interval = setInterval(intervalCallback, TIME.MINUTE);

      return () => {
        clearInterval(interval);
      };
    }, [dispatch, intervalCallback]),
  );

  const pullToRefreshHandler = () => {
    const isAllowedToRefresh =
      Math.abs(+new Date() - +refreshTime.current) > TIME.FIFTEEN_SECONDS;
    if (isAllowedToRefresh) {
      dispatch(getEventsRequest());
      refreshTime.current = new Date();
    }
  };

  const goToDetails = () => {
    navigation.navigate('details');
  };

  return (
    <ListComponent
      refreshing={isLoading}
      pullToRefreshHandler={pullToRefreshHandler}
      goToDetails={goToDetails}
      events={events}
    />
  );
};

export default ListContainer;
