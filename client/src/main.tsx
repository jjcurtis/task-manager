import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './tailwind.css';
import Layout from './components/ui/Layout.tsx';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
