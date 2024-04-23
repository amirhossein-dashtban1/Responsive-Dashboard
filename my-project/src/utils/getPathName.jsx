import { useLocation } from "react-router-dom";

export default function getPathaName(splittedIndex) {
	const locationArr = useLocation().pathname.split("/");
	// console.log(useLocation().pathname.split("/"));
	return splittedIndex ? locationArr[splittedIndex] : locationArr.slice(-1)[0].slice(4);
}
