import React, { ReactNode, useState } from "react";

// material ui
import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// icons
import { IoExitOutline } from "react-icons/io5";

// styles
import { Container, Button } from "./styles";

// interface
interface IItemlistProps {
  id: number;
  link: string;
  label: string;
  icon: ReactNode;
}

// item
const itemList: IItemlistProps[] = [
	{
		id: 1,
		link: "/",
		label: "Sair",
		icon: <IoExitOutline size="1.3rem" />,
	},
];

export default function LongMenu() {
	// states
	const [anchorEl, setAnchorEl] = useState<any>(false);
	const open = Boolean(anchorEl);

	// hooks
	const history = useHistory();

	// handle functiions
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Container>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls="long-menu"
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				MenuListProps={{
					"aria-labelledby": "fade-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
				PaperProps={{
					style: {
						width: "7rem",
						background: "#3d3d40",
					},
				}}
			>
				{itemList.map((item) => (
					<MenuItem key={item.id} onClick={handleClose}>
						<Button type="button" onClick={() => history.push(item.link)}>
							{item.label}
							{" "}
							{item.icon}
						</Button>
					</MenuItem>
				))}
			</Menu>
		</Container>
	);
}
