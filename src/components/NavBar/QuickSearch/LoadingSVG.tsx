export default function LoadingSVG () {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="100%"
        height="100%"
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#fff"
            strokeWidth="10"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
            transform="rotate(41.4512 50 50)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            ></animateTransform>
        </circle>
    </svg>
}
