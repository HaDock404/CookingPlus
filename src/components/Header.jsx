import styled from "styled-components"
import { Link } from 'react-router-dom'

const CardHeader = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CardLogo = styled(Link)`
    font-size: 60px;
    font-weight: 1000;
    color: #8EFF7B;
    margin-left: 20px;
    text-decoration: none;
`

const CardMenu = styled.div`
    margin-right: 20px;
`

function Header() {
    return (
        <CardHeader>
            <CardLogo to="/">
                Keto&nbsp;
                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1276 45.7763V0.0120748H29.8645V45.7763H17.1276ZM0.598145 29.2784V16.5415H46.3624V29.2784H0.598145Z" fill="url(#paint0_linear_1_34)"/>
                    <defs>
                    <linearGradient id="paint0_linear_1_34" x1="23.5" y1="-17" x2="-31" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFE500"/>
                    <stop offset="0.473958" stopColor="#FF7A00" stopOpacity="0.624745"/>
                    <stop offset="0.9999" stopColor="#FFE500" stopOpacity="0.208333"/>
                    <stop offset="1" stopColor="#FFE500" stopOpacity="0"/>
                    </linearGradient>
                    </defs>
                </svg>
            </CardLogo>
            <CardMenu>
                <svg width="69" height="48" viewBox="0 0 69 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="69" height="12" rx="6" fill="#8EFF7B"/>
                    <rect y="18" width="69" height="12" rx="6" fill="#8EFF7B"/>
                    <rect y="36" width="69" height="12" rx="6" fill="#8EFF7B"/>
                </svg>
            </CardMenu>
        </CardHeader>
    )
}

export default Header