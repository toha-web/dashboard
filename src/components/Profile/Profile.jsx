import { Avatar, Button, Card, Descriptions, Grid } from "antd";
const { Meta } = Card;
const { useBreakpoint } = Grid;

import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

import { removeUserData } from "../../store/slices/authUserSlice";

export default function Profile() {

	const userData = useSelector((state) => state.authUser.userData);
	const { firstName, lastName, age, gender, email, phone, image, birthDate, address, company, role } = userData;
	
    const dispatch = useDispatch();

	const [activeTab, setActiveTab] = useState("main");

	const width = useBreakpoint();

	function handleTab(key) {
		setActiveTab(key);
	}

	const cardStyles = {
		title: {
			whiteSpace: "wrap",
		},
		body: {},
	};

	const cardMetaStyles = {
		title: {
			whiteSpace: "wrap",
		},
	};

	const sharedCardMetaProps = {
		avatar: <Avatar src={image} />,
		description: <dl><dt>Email:</dt><dd style={{marginLeft: width.xs ? "0" : ""}}>{email}</dd><dt>Phone:</dt><dd style={{marginLeft: width.xs ? "0" : ""}}>{phone}</dd></dl>,
		title: <span>{company.title} <br />in {company.name}</span>
	};

	const addInfo = [
		{
			key: "1",
			label: "Age",
			children: `${age}`,
		},
		{
			key: "2",
			label: "Gender",
			children: `${gender}`,
		},
		{
			key: "3",
			label: "Birthday",
			children: `${birthDate}`,
		},
		{
			key: "4",
			label: "Country",
			children: `${address.country}`,
		},
	];

	const tabList = [
		{
			key: "main",
			tab: "Main",
		},
		{
			key: "additional",
			tab: "Additional",
		},
	];
	const contentList = {
		main: <Meta {...sharedCardMetaProps} styles={cardMetaStyles} />,
		additional: <Descriptions bordered items={addInfo} colon column={width.xs ? 1 : 2} size="small"/>,
	};

	return (
		<Card
			title={`${firstName} ${lastName} (${role})`}
			styles={cardStyles}
			extra={
				<Button type="link" onClick={() => dispatch(removeUserData())}>
					Logout
				</Button>
			}
			variant="borderless"
			tabList={tabList}
			activeTabKey={activeTab}
			onTabChange={handleTab}
		>
			{contentList[activeTab]}
		</Card>
	);
}