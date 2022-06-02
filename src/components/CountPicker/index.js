import React, { useContext } from 'react';
import { Text, Flex } from 'components/ui';
import { Button, Input } from './styled';
import Context from 'containers/context/context';

function CountPicked() {
    const { count, setCount } = useContext(Context);
    const handleIncrements = () => setCount((prev) => prev + 1);
    const handleDecrements = () => {
        if(count > 0) setCount((prev) => prev - 1);
    }
    const handleChanges = (e) => {
        if(e.target.value.length){
            setCount(parseInt(e.target.value, 10))
        }else{
            setCount(1)
        }
    }
    return (
        <Flex margin='20px 0 30px' justify="flex-start">
            <Text weight="500" margin='0 30px 0 0 '>Количество</Text>
            <Flex>
                <Button onClick={handleDecrements}>-</Button>
                <Input value = {count} onChange = {handleChanges}/>
                <Button onClick={handleIncrements}>+</Button>
            </Flex>
        </Flex>
    )
}

export default CountPicked;