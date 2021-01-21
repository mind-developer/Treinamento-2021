import React from 'react'
import { CircleImg, DivImg, ProfileMain, ProfileImg, TittleCard,DivInfos,TextCard, TittleProfile } from './styles'
import profileImg from './images/profile.png'

function Profile() {
    const ArrayInfo = [{tittle:'Name:',text:'Joelson'},{tittle:'Email:',text:'joel.carlito@gmail.com'},{tittle:'Password:',text:'jinjulinha'}]
    return (
        <div className='profile'>
            <ProfileMain>
                <TittleProfile>Profile</TittleProfile>
                <DivImg>
                    <CircleImg>
                       <ProfileImg src={profileImg} />
                    </CircleImg>    
                </DivImg>
                {ArrayInfo.map((item,index) =>{
                   return(<DivInfos>
                    <TittleCard>{item.tittle}</TittleCard>
                    <TextCard>{item.text}</TextCard>
                </DivInfos>) 
                })}
            </ProfileMain>
        </div>
        
    )
}

export default Profile
