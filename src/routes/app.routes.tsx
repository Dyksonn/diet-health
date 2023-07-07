import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CreateFeed } from '@screens/CreateFeed';
import { EditFeed } from '@screens/EditFeed';
import { FinishCreate } from '@screens/FinishCreate';

import { Home } from '@screens/Home';
import { Statistic } from '@screens/Statistic';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="statistic"
        component={Statistic}
      />

      <Screen 
        name="createFeed"
        component={CreateFeed}
      />

      <Screen 
        name="finishCreate"
        component={FinishCreate}
      />

      <Screen 
        name="editFeed"
        component={EditFeed}
      />
    </Navigator>
  );
}