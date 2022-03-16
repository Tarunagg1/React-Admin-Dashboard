import React from 'react'
import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


export default function Widget({ type }) {
    let data = {
        "user": { title: "USERS", isMoney: false, link: "See all users", icon: <PersonOutlinedIcon /> },
        "order": { title: "ORDERS", isMoney: true, link: "See new Orders", icon: <ShoppingCartOutlinedIcon /> },
        "balance": { title: "BALANCE", isMoney: true, link: "See all balance", icon: <AccountBalanceWalletOutlinedIcon /> },
        "erarning": { title: "EARNINGS", isMoney: false, link: "view net earnings", icon: <MonetizationOnOutlinedIcon /> },
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data[type].title}</span>
                <span className="counter">12312</span>
                <span className="link">{data[type].link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                {data[type].icon}
            </div>
        </div>
    )
}
