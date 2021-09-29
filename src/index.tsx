import React from 'react';
import {} from 'styled-components/native';
import { Provider as StoreProvider } from 'react-redux';
import { store } from '~/shared/store';

import { Routes } from './routes';

const App: React.FC = () => <Routes />;

export default App;
