import React from 'react'
import * as Icons from '@iconscout/react-unicons';

function DynamicIcon({ name,className,size }) {
   
    const IconComponent = Icons[name];    
    if (!IconComponent) { // Return a default one
        return <Icons.UilBorderClear className={className} size={size} />;
    }else{
        return <IconComponent className={className} size={size} />;  
    }
    
}

export default DynamicIcon;
