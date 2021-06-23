import React from "react";
import { useFormik } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import Styled from "./styled";
import Input from "./Input";
import Button from "../../../styles/components/Button";

const ContactForm = () => {
	const [formstate, handleSubmit] = useForm("xdopblag");

	const formik = useFormik({
		initialValues: {
			email: "",
			subject: "",
			message: "",
		},
		onSubmit: handleSubmit,
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			subject: Yup.string().required("Required"),
			message: Yup.string().required("Required"),
		}),
	});

	return (
		<Styled onSubmit={formik.handleSubmit}>
			<legend>Send a Message</legend>

			<Input type='email' name='email' labelTxt='E-mail' formik={formik} />

			<Input type='text' name='subject' labelTxt='Subject' formik={formik} />

			<Input type='textarea' name='message' labelTxt='Message' formik={formik} />

			<Button title='Submit Message' type='submit' disabled={formstate.submitting}>
				Submit
			</Button>
		</Styled>
	);
};

export default ContactForm;
