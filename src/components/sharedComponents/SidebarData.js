import react from 'react';
import * as AIcons from "react-icons/ai"
import * as FIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io"
import { IoDocumentsSharp } from "react-icons/io5";
import { MdMeetingRoom } from "react-icons/md";
import { AiOutlineIssuesClose } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
import { HiDocumentReport } from "react-icons/hi";


export const SidebarData = [

{
    title : 'Infos' ,
    path : '/project',
    icon : <AIcons.AiFillHome size={20} /> ,
    cName : 'nav-text'


} ,
{
    title : 'Plans' ,
    path : '/plans',
    icon : <IoDocumentsSharp size={20}/> ,
    cName : 'nav-text'


} ,
{
    title : 'Planning' ,
    path : '/planning',
    icon : <AIcons.AiOutlineSchedule size={20} /> ,
    cName : 'nav-text'


} ,
{
    title : 'Visites' ,
    path : '/meetings',
    icon : <MdMeetingRoom size={20} /> ,
    cName : 'nav-text'


},
{
    title : 'Observations' ,
    path : '/observations',
    icon : <AiOutlineIssuesClose size={20} /> ,
    cName : 'nav-text'


},
{
    title : 'Remarques' ,
    path : '/remarques',
    icon : <IoBulbOutline size={20} /> ,
    cName : 'nav-text'


},
{
    title : 'Reports' ,
    path : '/rapport',
    icon : <HiDocumentReport size={20} /> ,
    cName : 'nav-text'


}



]