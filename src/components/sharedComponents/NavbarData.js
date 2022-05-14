import react from 'react';
import * as AIcons from "react-icons/ai"
import * as FIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import { IoDocumentsSharp } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";
import arabic from "../../assets/images/arabic.png"
import english from "../../assets/images/english.png"
import french from "../../assets/images/french.png"
import { IconContext } from 'react-icons';
export const Langauges = [

  {
    title : "English" ,
    image : english

} ,
{
    title : "Arabic" ,
    image : arabic

} ,
{
    title : "French" ,
    image : french

} 
]

export const User = 

  {
    email : 'oussama.elyazami55@gmail.com' ,
    name : 'Oussama',
    icon : <IconContext.Provider value={{color : "white"}} ><FIcons.FaUser /></IconContext.Provider> ,
    lastName : 'Elyazami'
} 


