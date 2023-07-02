import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';
import { Navbar } from './shared/components/Navbar/index.js';
import { HousingLoanApplication } from './pages/Entries/Pre-Sanction-loan-process/Housing-Loan-Application/index.js';


export function App() {
	return (
		<LocationProvider>
			<Navbar></Navbar>
			<Router>
				<Route path="/entries/PreSanctionLoanProcess/HousingLoanApplication" component={HousingLoanApplication} />
				<Route default component={NotFound} />
			</Router>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
