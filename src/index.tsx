import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from 'app/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import 'react-toastify/dist/ReactToastify.css';

const rootEl = document.getElementById('root') as HTMLElement;
const root = createRoot(rootEl);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppProvider>
				<App />
			</AppProvider>
		</BrowserRouter>
	</React.StrictMode>
);
