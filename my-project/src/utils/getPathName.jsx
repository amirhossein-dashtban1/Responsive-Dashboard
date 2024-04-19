import {useLocation} from 'react-router-dom'

export default function getPathaName(splittedIndex) {
	return useLocation().pathname.split("/")[splittedIndex];
}
