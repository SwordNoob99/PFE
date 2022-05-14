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
    icon : <AIcons.AiFillHome /> ,
    cName : 'nav-text'


} ,
{
    title : 'Plans' ,
    path : '/reports',
    icon : <IoDocumentsSharp /> ,
    cName : 'nav-text'


} ,
{
    title : 'Planning' ,
    path : '/projects',
    icon : <AIcons.AiOutlineSchedule /> ,
    cName : 'nav-text'


} ,
{
    title : 'Meetings' ,
    path : '/',
    icon : <MdMeetingRoom /> ,
    cName : 'nav-text'


},
{
    title : 'Issues' ,
    path : '/',
    icon : <AiOutlineIssuesClose /> ,
    cName : 'nav-text'


},
{
    title : 'Remarks' ,
    path : '/',
    icon : <IoBulbOutline /> ,
    cName : 'nav-text'


},
{
    title : 'Reports' ,
    path : '/',
    icon : <HiDocumentReport /> ,
    cName : 'nav-text'


}



]