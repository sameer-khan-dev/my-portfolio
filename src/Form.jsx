import { useState } from "react"
import Links from "./Links"

export default function Form(){
    let [ formData, setFormData]=useState({
        senderName: "",
        email: "",
        message: ""
    });
    function sendMail(){
        let params={
            name: formData.senderName,
            email: formData.email,
            message: formData.message
        }
        emailjs.send("service_jxemymd","template_e3kp3ja",params).then(()=>alert("Email sent!"));
    }
     
    let updateFormData=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]: event.target.value}
        })
    }
    return(
        <div className="border-[#8b5cfa]/25 border-2 bg-violet-500/10 rounded-2xl p-6">

        <form className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div className="flex flex-col gap-2">
        <label htmlFor="yourName" className="text-xs text-[#9ca3af]">Your name</label>
        <input name="senderName" type="text"  id="yourName" placeholder="Enter Your Name" value={formData.senderName} onChange={updateFormData} className="text-sm pl-3 h-8 rounded-md text-[#e2e2f0]  border-[#8b5cfa]/25 border-2 w-[44vw] max-sm:w-[100%]"/>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="yourEmail" className="text-xs text-[#9ca3af]">Email address</label>
        <input name="email" type="text" id="yourEmail" placeholder="Enter Your Email" value={formData.email} onChange={updateFormData} className="text-sm pl-3 h-8 rounded-md text-[#e2e2f0] border-[#8b5cfa]/25 border-2 w-[43vw] max-sm:w-[100%]"/>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="yourMessage" className="text-xs text-[#9ca3af]">Message</label>
        <textarea name="message" type="text" id="yourMessage" placeholder="Tell me about the opportunity..." value={formData.message} onChange={updateFormData} className="text-sm p-2 h-24 rounded-md text-[#e2e2f0] border-[#8b5cfa]/25 border-2 w-[88.5vw] max-sm:w-[100%]"/>
        </div>
        </form>
        <button onClick={sendMail}  className="cursor-pointer mt-4 text-white text-center w-[100%] bg-[#7C3AED] h-8 rounded-xl max-sm:w-[100%]">Send Message</button>
        <Links/>
        </div>
    )
}