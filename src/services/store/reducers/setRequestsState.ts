function setRequestState(type: string) {
  switch (type) {
    case 'request': {
      return {
        isLoading: true,
        loaded: false,
        error: false,
      };
    }
    case 'success': {
      return {
        isLoading: false,
        loaded: true,
        error: false,
      };
    }
    case 'error': {
      return {
        isLoading: false,
        loaded: false,
        error: true,
      };
    }
    default:
      return {
        isLoading: false,
        loaded: false,
        error: false,
      };
  }
}

export default setRequestState;
