"use client"
import Navbar from "@/components/navbar";
import {useEffect, useState} from "react";
import {Card, CardContent, CardTitle} from "@/components/ui/card";
import styles from "../globals.css"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Toast} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";
import {useToast} from "@/hooks/use-toast";

export default function AdminPage() {
    const [connected, setConnected] = useState(false);
    const [currentView, setCurrentView] = useState(null);
    const [client, setClient] = useState(false);
    const { toast } = useToast();

    let callConnect = () => {
        connect(toast, setConnected);
    }

    useEffect(() => {
        setClient(true);
    },[])

    return (<div className="dark text-white bg-img">
        <Navbar/>
        {!connected && (<div className="bg-none w-screen mt-[15px]">
            <Card className="blurredSurface p-[10px] border-none mx-[5px]">
                <CardTitle className="text-white text-center my-[25px]">Login</CardTitle>
                <CardContent className="">
                    <form>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" className="mb-[10px] blurredSurface border-none" key="username" id="username"/>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" className="mb-[25px] blurredSurface border-none" key="password" id="password"/>
                        <Button className="w-full">Se connecter</Button>
                    </form>
                </CardContent>
            </Card>
        </div>)}
        {connected && (<div>

        </div>)}
    </div>)
}

let connect = async (toast,setConnect) => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let result = await fetch("/api/v1/admin/login", {
        method: "POST",
        body: JSON.stringify({username, password}),
    })

    if(result.ok){
        let c = result.json()
        setConnect(c.valid);
        if(!c) {
            toast({
                title: "Something went wrong",
                description: "Invalid credentials.",
                variant: "destructive",
            })
        }
    }
}

let disconnect = () => {}