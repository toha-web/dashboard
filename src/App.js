import { Outlet, Link, useLocation } from "react-router";
import { Layout, Menu, Grid } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeUserData } from "./store/slices/authUserSlice";

const { Header, Footer, Content } = Layout;
const { useBreakpoint } = Grid;

export default function App() {
	const location = useLocation();

	const user = useSelector((state) => state.authUser.userData);
	const dispatch = useDispatch();

	const width = useBreakpoint();

	function handlerMenu({ key }) {
		if (key === "/logout") {
			dispatch(removeUserData());
		}
	}

	return (
		<Layout style={{display: "flex", flexDirection: "column", minHeight: "100vh", height: "100%"}}>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					selectedKeys={[`/${location.pathname.split("/")[1]}`]}
					items={[
						{
							label: (
								<Link to="/login">
									{!user
										? "Login"
										: `Logout ${user.firstName}`}
								</Link>
							),
							key: `${!user ? "/login" : "/logout"}`,
						},
						{
							label: <Link to="/dashboard">Dashboard</Link>,
							key: "/dashboard",
						},
					]}
					style={{ flex: 1, minWidth: 0 }}
					onClick={handlerMenu}
				/>
			</Header>
			<Content style={{ padding: width.md ? "24px 48px" : "0", display: "flex", alignItems: "center", justifyContent: "center" }}>
				<Outlet />
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Test Dashboard ©{new Date().getFullYear()} Created by <a href="biletskyi.dev" target="_blank">
					Anton
					Biletskyi
				</a>
			</Footer>
		</Layout>
	);
}