import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScannerComponent from '../Component/scanner.component';
import SearchComponent from '../Component/search.component';
import HomeComponent from '../Component/home.component';
import ProductList from '../Component/ProductList';
import AsyncView from '../Component/AsyncView'
import NteworkInfo from '../Component/NetworkInfo'
const Route = createStackNavigator(
    {

        SearchComponent: SearchComponent,
        ScannerComponent: ScannerComponent,   
        HomeComponent:HomeComponent,
        ProductList:ProductList,
        AsyncView:AsyncView,
        NteworkInfo:NteworkInfo

    },
    {
        initialRouteName: "HomeComponent"
    },

);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;