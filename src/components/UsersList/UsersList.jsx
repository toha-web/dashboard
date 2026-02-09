import { Table, ConfigProvider, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useEffect } from "react";

import { useSelector } from "react-redux";
import useFetchUsers from "../../hooks/useFetchUsers";

export default function UsersList() {

    const loading = useSelector((state) => state.usersList.loading);
	const users = useSelector((state) => state.usersList.users);

	const customizeRenderEmpty = () => (<div style={{ height: "180px" }}></div>);

    const columns = [
		{
			title: "First name",
			dataIndex: "firstName",
		},
		{
			title: "Last Name",
			dataIndex: "lastName",
		},
		{
			title: "Age",
			dataIndex: "age",
		},
	];

	const getUsers = useFetchUsers();

    useEffect(() => {
		if(users?.length > 0) return;
		getUsers("https://dummyjson.com/users?limit=0&select=firstName,lastName,age");
	}, []);

	return (
		<ConfigProvider renderEmpty={customizeRenderEmpty}>
			<Table
				dataSource={users}
				columns={columns}
				pagination={{ pageSize: 10, hideOnSinglePage: true }}
				rowKey="id"
				// loading={{
				// 	spinning: loading,
				// 	indicator: (<LoadingOutlined style={{ fontSize: 100 }} spin />),
				// }}
			/>
			{loading && <Spin
				indicator={<LoadingOutlined style={{ fontSize: 100 }} spin />}
				fullscreen
			/>}
		</ConfigProvider>
	);
}
