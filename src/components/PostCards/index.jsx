import React from 'react';
import {SubTitle, Flex, Text} from 'components/ui';

function PostCards({image, title, text}){
    return (
        <Flex direction = 'column' align = 'flex-start' flex = {1}>
            <img src = {image} alt = {title}></img>
            <SubTitle withBorder margin ='30px 0'>{title}</SubTitle>
            <Text  margin ='0'>{text}</Text>
        </Flex>
    )
}

export default PostCards