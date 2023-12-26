import React from 'react';
import { RootNavegation } from './src/navegacion/view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './src/login/context';


import { Provider } from 'react-redux';
import { store  } from './src/features/store-v2';


function App(): JSX.Element {
  return (
    // <AuthProvider>
    <Provider store= {store}>
      {/* <SafeAreaProvider> */}
        {/* <GestureHandlerRootView> */}
          <RootNavegation />
        {/* </GestureHandlerRootView> */}
      {/* </SafeAreaProvider> */}
    {/* // </AuthProvider > */}
    </Provider>
  );
}

export default App;
