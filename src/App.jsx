import React from "react";
import SpareSell from "./Spare sell/SpareSell";
import Home from "./home/Home";
import Form from "./Form/Form";
import Floatingicon from "./Float/Floatingicon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import style from "./App.module.css";
import themes from "./constants";
import { useState , useEffect } from "react";


const App = () => {
	const [theme, setTheme] = useState(themes.light);

	const colors = {
		'--primary-color': theme.primary_color,
		'--secondary-color': theme.secondary_color,
		'--accent-color': theme.accent_color,
		'--background-color': theme.background_color,
		'--theme-color': theme.theme,
		'--icon-hover-bg': theme.iconhovercolor,
		'--icon-color': theme.iconcolor,
		'--primary-font-color': theme.primaryfontcolor,
		'--secondary-font-color': theme.secondaryfontcolor,
		'--tertiary-color': theme.tertiary_color,
	}

	useEffect(() => {
		const root = document.documentElement;
		Object.entries(colors).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}, [theme]);

  return (
    <div className={style.app}>
		<Header />
		<BrowserRouter>
			{/* <Home /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/form" element={<Form />} />
				<Route path="/floatingicon" element={<Floatingicon />} /> */}
			</Routes>
			{/* <Form /> */}
			<Floatingicon switcher={setTheme} themes={{ light: themes.light, dark: themes.dark }} />
		</BrowserRouter>
    </div>
  );
};

export default App;
