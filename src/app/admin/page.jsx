"use client"
import Navbar from "@/components/navbar";
import {useState} from "react";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import styles from "../globals.css"

export default function AdminPage() {
    const [connected, setConnected] = useState(false);
    return (<div className="dark text-white bg-img">
        <Navbar/>
        {!connected && (<div className="bg-none w-screen mt-[15px]">
            <Card className="blurredSurface">
                <CardTitle className="text-white blurredSurface">Login</CardTitle>
                <CardContent className="blurredSurface"></CardContent>
            </Card>
        </div>)}
        {connected && (<div></div>)}
    </div>)
}