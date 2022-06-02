import React, { useContext } from 'react';
import { Text, Flex } from 'components/ui';
import { Button } from './styled';
import Context from 'containers/context/context';

function ColorPicked({ items }) {
    const { color, setColor } = useContext(Context);
    const handleClick = (id) => () => setColor(id);
    return (
        <Flex direction="column" align="flex-start">
            <Text weight="500">Цвет</Text>
            <Flex colgap="12px" margin="20px 0 0">
                {items.map((item) => (
                    <Button
                        key={item.id}
                        color={item.color}
                        active={item.id === color}
                        onClick={handleClick(item.id)}
                    />
                ))}
            </Flex>
        </Flex>
    )
}

export default ColorPicked;
