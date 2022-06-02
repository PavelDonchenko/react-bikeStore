import React from 'react';
import { Flex, Wrapper, Button } from 'components/ui';
import { HeaderSC, Absolute, HeaderText } from './styled';
import { ReactComponent as Logo } from "assets/Logo.svg";


function Header() {
    return (
        <HeaderSC>
            <Wrapper relative height="100%">
                <Flex padding="24px 0 0">
                    <Logo />
                </Flex>
                <Absolute>
                    <HeaderText red weight="700">НОВЫЙ </HeaderText>
                    <HeaderText>идеальный </HeaderText>
                    <HeaderText weight="900" size="71px" space="30px"> Fuel EX 9.8 GX </HeaderText>
                    <Button>Оформить заказ</Button>
                </Absolute>
            </Wrapper>
        </HeaderSC>
    )
}

export default Header;