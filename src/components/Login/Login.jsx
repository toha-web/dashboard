import { Button, Checkbox, Form, Input, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useState } from "react";

import useAuth from "../../hooks/useAuth";

export default function Login() {

	const login = useAuth();
	const [form] = Form.useForm();

	const [	loading, setLoading] = useState(false);

    const onFinish = async (userData) => {
		console.log("Form submit Success:");
		setLoading(true);
		try {
			await login(userData);
		} 
		catch (error) {
			if (error?.response?.status === 400) {
				form.setFields([
					{
						name: "username",
						errors: [""],
					},
					{
						name: "password",
						errors: ["Invalid username or password"],
					},
				]);
			}
			else{
				console.error("Catch:", error.message);
			}
		} 
		finally{
			setLoading(false);
		}
	};
	const onFinishFailed = (errorInfo) => {
		console.log("From submit Failed:", errorInfo);
	};
    

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{sm: { span: 8 }}}
			wrapperCol={{sm: { span: 16 }}}
			style={{ maxWidth: 600 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Username"
				name="username"
				initialValue="emilys"
				rules={[
					{
						required: true,
						message: "Please input your username!",
					},
				]}
			>
				<Input />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				initialValue="emilyspass"
				rules={[
					{
						required: true,
						message: "Please input your password!",
					},
				]}
			>
				<Input.Password />
			</Form.Item>

			{/* <Form.Item name="remember" valuePropName="checked" label={null}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item> */}

			<Form.Item label={null}>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form.Item>
			{loading && <Spin
				indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
				fullscreen
			/>}
		</Form>
	);
}
