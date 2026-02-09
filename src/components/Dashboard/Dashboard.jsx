import { Layout, Menu, theme, Grid } from "antd";

import { Outlet, Link, useLocation } from "react-router";

const { Content, Sider } = Layout;
const { useBreakpoint } = Grid;

export default function Dashboard() {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const location = useLocation();

	const width = useBreakpoint();

	return (
		<Layout
			hasSider={width.md ? true : false}
			style={{
				padding: "24px 0",
				background: colorBgContainer,
				borderRadius: borderRadiusLG,
				alignSelf: "flex-start",
				flexDirection: width.md ? "row" : "column",
				rowGap: width.md ? 0 : 24,
				width: width.md ? "auto" : "100%",
			}}
		>
			<Sider style={{ background: colorBgContainer }} width={width.md ? 200 : "100%"}>
				<Menu
					mode={`${width.md ? "inline" : "horizontal"}`}
					defaultSelectedKeys={["/dashboard/profile"]}
					selectedKeys={[location.pathname]}
					style={{ height: "100%" }}
					items={[
						{
							label: <Link to="/dashboard/profile">Profile</Link>,
							key: "/dashboard/profile",
						},
						{
							label: <Link to="/dashboard/users">Users</Link>,
							key: "/dashboard/users",
						},
					]}
				/>
			</Sider>
			<Content style={{ padding: width.md ? "0 24px" : "0", minHeight: "100%" }}>
				<Outlet />
			</Content>
		</Layout>
	);
}