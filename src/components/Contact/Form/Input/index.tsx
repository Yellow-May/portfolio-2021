import React from "react";
import Styled from "./styled";

interface InputProps {
	type: "text" | "email" | "textarea";
	name: string;
	labelTxt: string;
	formik: any;
}

const Input: React.FC<InputProps> = props => {
	let errorMsg = props.formik.errors[props.name];
	let touched = props.formik.touched[props.name];

	let error = errorMsg ? errorMsg.length !== 0 && touched : false;

	return (
		<Styled error={error} textarea={props.type === "textarea"}>
			<label htmlFor={props.name}>{props.labelTxt}:</label>

			{props.type !== "textarea" ? (
				<input
					type={props.type}
					name={props.name}
					id={props.name}
					{...props.formik.getFieldProps(props.name)}
				/>
			) : (
				<textarea
					name={props.name}
					id={props.name}
					{...props.formik.getFieldProps(props.name)}
				/>
			)}

			{error && <span>{errorMsg}</span>}
		</Styled>
	);
};

export default Input;
