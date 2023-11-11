import * as React from "react";
import { useParams } from "react-router-dom";
import My_Page_Header from '../components/My_Page_Header.js';
import My_Page_Leftnav from '../components/My_Page_Leftnav.js';
import Line from '../components/Line.js';
import My_Page_center from '../components/My_Page_center.js';
import  '../css/My_Page_connecting_center.css';

export default function My_Page_connecting_center_detail() {
    const { name } = useParams();

    return (
        <div>
            <My_Page_Header />
            <My_Page_Leftnav />
            <Line />
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
}