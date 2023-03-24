import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mutationCache = new MutationCache({
  onError: (error, _variables, _context, mutation) => {
    // If this mutation has an onError defined, skip this
    if (mutation.options.onError) return;

    // any error handling code...
    console.error(error);
  }
});

const queryCache = new QueryCache({
  onError: (error, _query) => {
    console.log(error);
  }
})


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  mutationCache,
  queryCache,
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Router>

  </React.StrictMode >

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
