import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		color: {
			main: string;
			primary: string;
			secondary: string;
			accentI: string;
			accentII: string;
		};
	}
}
