import React, { useState } from "react";
import HorizontalScrollMenu from "@nyashanziramasanga/react-native-horizontal-scroll-menu/src";

cosnt [selectedIndex, setSelectedIndex] = useState(1);

const NavigationTabs = [
    {
        ide:0,
        name: 'Tab1'
    },
];

const onPress = (route) => {
    setSelectedIndex(route.id);
    console.log('Tab pressed', route);
};

export default function TelaServicos({ navigation }){
    return(
        <HorizontalScrollMenu>
            items={NavigationTabs}
            onPress={onPress}
            selected={selectedIndex}
            itemWidth={80}
            scrollAreaStyle={{ height: 50 }}
        </HorizontalScrollMenu>
    )
}


    
                
