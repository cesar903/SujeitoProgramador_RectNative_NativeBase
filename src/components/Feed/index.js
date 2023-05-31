import React from "react";
import { Box, Image, Heading, Text, Icon } from "native-base";

import { Feather } from '@expo/vector-icons'

export default function Feed({data}) {
    return (
        <Box flex={1}
            flexDirection={"column"}
            marginBottom={4}
            background={'#FFF'}
            padding={2}
            borderRadius={4}>

            <Box>
                <Image
                    source={{ uri: data.avatarUrl }}
                    alt="Post Feed"
                    w={'100%'}
                    h={120}
                />
            </Box>
            <Box marginY={3}>
                <Heading size={'sm'}>Aprendendo com Sujeito Programador</Heading>
                <Text numberOfLines={2} paddingBottom={1}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </Text>
            </Box>
            <Box 
            marginY={1} 
            flexDirection={'row'}
            backgroundColor={'rgb( 226,232,240,0.4)'}
            borderBottomRadius={6}
            paddingX={3}
            paddingY={1}
            >
                <Icon 
                as={Feather}
                name={'user'}
                size={5}
                color={'#000'}
                marginRight={2}
                />
                <Text numberOfLines={1}>
                    {data.fullName}
                </Text>
            </Box>
        </Box>
    )
}