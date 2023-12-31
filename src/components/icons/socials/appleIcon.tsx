import SVGProps from "../types";
const AppleIcon = ({height, width, className, ...props}: SVGProps) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 18 21"
			xmlns="http://www.w3.org/2000/svg"
			fill="rgba(255, 255, 255, 1)"
			{...props}
			className={className}>
			<path d="M9.267 4.846c.999 0 2.25-.64 2.995-1.495.675-.774 1.168-1.856 1.168-2.937 0-.147-.014-.294-.043-.414-1.11.04-2.446.708-3.248 1.602-.633.68-1.21 1.749-1.21 2.844 0 .16.029.32.043.373a1.7 1.7 0 00.295.027zM5.752 21c1.364 0 1.968-.868 3.67-.868 1.73 0 2.11.841 3.628.841 1.49 0 2.49-1.308 3.431-2.59 1.055-1.468 1.49-2.91 1.519-2.977-.098-.027-2.953-1.135-2.953-4.245 0-2.697 2.25-3.912 2.376-4.005-1.49-2.03-3.754-2.083-4.373-2.083-1.673 0-3.038.961-3.895.961-.928 0-2.152-.907-3.6-.907C2.798 5.127 0 7.289 0 11.374c0 2.537 1.04 5.22 2.32 6.956C3.417 19.799 4.373 21 5.752 21z"></path>
		</svg>
	);
};
export default AppleIcon;
