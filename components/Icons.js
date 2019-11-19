import PropTypes from 'prop-types'

//- width: icon width;
//- height: icon height;
//- fill: icon color 
//- secondaryfill: icon secondary color
//- strokewidth: icon stroke width 



const LocationIcon = ({}) => (
    <svg height="auto" width="50px" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>compass 05</title>
	<g fill="#9292b3" stroke="#9292b3" strokeLinecap="round" strokeWidth="4">
		<polygon fill="none" points=" 34,14 28,28 14,34 20,20 "/>
		<circle cx="24" cy="24" fill="none" r="22" stroke="#9292b3"/>
		<circle cx="24" cy="24" r="1" stroke="none" strokeLinecap="square"/>
	</g>
</svg>
)

const CalendarIcon = ({}) => (
    <svg height="auto" width="50px" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>calendar 60</title>
	<g fill="#9292b3" stroke="#9292b3" strokeLinecap="round" strokeWidth="4">
		<polyline fill="none" points="38,6 46,6 46,46 2,46 2,6 10,6 " stroke="#9292b3"/>
		<line fill="none" stroke="#9292b3" x1="16" x2="32" y1="6" y2="6"/>
		<rect height="10" width="6" fill="none" x="10" y="2"/>
		<rect height="10" width="6" fill="none" x="32" y="2"/>
		<line fill="none" stroke="#9292b3" x1="2" x2="46" y1="18" y2="18"/>
	</g>
</svg>
)
const SpeakersIcon = ({}) => (
    <svg height="auto" width="50px" version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" xmlSpace="preserve">
	<title>multiple 11</title>
	<g fill="#9292b3" stroke="#9292b3" strokeLinecap="round" strokeWidth="4">
		<path d="M9,13L9,13 c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0C13,11.209,11.209,13,9,13z" fill="none"/>
		<path d="M12,43H6L5,32l-3-1v-9 c0-2.209,1.791-4,4-4h6c1.454,0,2.727,0.777,3.427,1.937" fill="none"/>
		<path d="M39,13 L39,13c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0c-2.209,0-4,1.791-4,4v0C35,11.209,36.791,13,39,13z" fill="none"/>
		<path d="M36,43h6l1-11l3-1v-9 c0-2.209-1.791-4-4-4h-6c-1.454,0-2.727,0.777-3.427,1.937" fill="none"/>
		<path d="M24,14L24,14 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h0c3.314,0,6,2.686,6,6v0C30,11.314,27.314,14,24,14z" fill="none" stroke="#9292b3"/>
		<path d="M29,46H19l-1-12l-4-1V23 c0-2.209,1.791-4,4-4h12c2.209,0,4,1.791,4,4v10l-4,1L29,46z" fill="none" stroke="#9292b3"/>
	</g>
</svg>
)

const QuoteIcon = ({}) => (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	width="25px"
	height="auto"
	version="1"
	fill="#2EB5A0"
	viewBox="0 0 200 200"
	>
	<path
	  d="M386 1700c-114-36-201-115-254-228-24-51-27-68-27-172s3-121 27-173c55-117 173-210 301-237l59-12-7-36c-24-130-138-325-293-501l-54-61h39c58 0 192 51 270 103 85 56 222 197 286 294 140 211 220 486 197 680-9 72-47 160-95 219-99 121-292 174-449 124zM1358 1701c-118-38-202-113-253-224-113-246 30-528 298-587 31-7 57-18 57-25 0-31-37-130-81-215-45-89-127-204-227-320l-44-50h34c79 0 221 60 318 135 270 208 449 571 438 889-4 123-25 186-89 266-101 125-294 181-451 131z"
	  transform="matrix(.1 0 0 -.1 0 200)"
	></path>
	</svg>
)

export {LocationIcon, CalendarIcon, SpeakersIcon, QuoteIcon}
/*CalendarIcon.propTypes = {
  width: PropTypes.string.isRequired
}

LocationIcon.propTypes = {
    width: PropTypes.string.isRequired
}

SpeakersIcon.propTypes = {
    width: PropTypes.string.isRequired
}*/
  