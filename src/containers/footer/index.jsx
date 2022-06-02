import React from 'react';
import { Wrapper, Flex } from 'components/ui';
import { ReactComponent as Logo } from "assets/Logo.svg";
import { ReactComponent as Facebook } from "assets/facebook.svg";
import { ReactComponent as Twitter } from "assets/twitter.svg";
import { ReactComponent as Telegram } from "assets/telegram.svg";
import { FooterSC, LinkContainer } from "./styled";

function Footer() {
        return (
            <FooterSC>
                <Wrapper height = '100%'>
                    <Flex height = "100%" justify="space-between">
                        <Logo />
                        <LinkContainer>
                          <a href = 'http://facebook.com' rel ='noreferrer' target = '_blank'><Facebook /></a>
                          <a href = 'http://twitter.com' rel ='noreferrer' target = '_blank'><Twitter /></a>
                          <a href = 'http://telegram.com' rel ='noreferrer' target = '_blank'><Telegram /></a>
                        </LinkContainer>
                    </Flex>
                </Wrapper>
            </FooterSC>
        )
    }

export default Footer;