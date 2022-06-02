import React, { useState, useContext } from 'react';
import { Text, Flex, Button, Title } from 'components/ui';
import TextField from 'components/TextField';
import Context from 'containers/context/context';
import { BorderContainer } from './styled';
import Checkout from 'assets/order.png';

const Tabs = ['Оформить заказ', 'Проверить статус заказа'];

function Form() {
    const { size, color, count } = useContext(Context);
    const [selectedTab, setSelectedTab] = useState(0)
    const [formData, setFormData] = useState({
        name: {
            value: "",
            error: false,
        },
        email: {
            value: "",
            error: false,
        },
        phone: {
            value: "",
            error: false,
        },
        date: {
            value: new Date().toISOString().replace(/T.+/g, ""),
            error: false,
        },
    });

    const [deliveryNumber, setDeliveryNumber] = useState({
        value: "",
        error: false,
    })

    const onChangeFormData = (key) => (e) => {
        setFormData((prev) => ({ ...prev, [key]: { ...prev[key], value: e.target.value } }))
    }

    const onChangeDelivery = (e) => {
        setDeliveryNumber((prev) => ({...prev, value: e.target.value}))
    }

    return (
        <BorderContainer>
            <Flex>
                {Tabs.map((tab, index) => (
                    <Flex flex={1} key={tab}>
                        <Button
                            width='100%'
                            color={selectedTab === index ? '#282828' : '#fff'}
                            background={selectedTab === index ? '#fff' : '#020106'}
                            onClick={() => setSelectedTab(index)}
                        >{tab}</Button>
                    </Flex>
                ))}
            </Flex>
            {selectedTab === 0 && (
                <Flex padding='60px 80px' direction='column'>
                    <img src={Checkout} alt='' />
                    <Title margin='30px 0 100px'>Fuel EX 9.8 </Title>
                    <form>
                        <TextField
                            placeholder="ФИО"
                            errorLabel="Пожалуйста, введите ваше ФИО"
                            error={formData['name'].error}
                            value={formData['name'].value}
                            onChange={onChangeFormData('name')}
                        />
                        <TextField
                            placeholder="E-mail"
                            errorLabel="Пожалуйста, введите ваш E-mail"
                            error={formData['email'].error}
                            value={formData['email'].value}
                            onChange={onChangeFormData('email')}
                        />
                        <TextField
                            placeholder="Tелефон"
                            errorLabel="Пожалуйста, введите номер телефона"
                            error={formData['phone'].error}
                            value={formData['phone'].value}
                            onChange={onChangeFormData('phone')}
                        />
                        <TextField
                            disabled
                            placeholder="датa доставки"
                            errorLabel="Пожалуйста, укажите дату доставки"
                            error={formData['date'].error}
                            value={formData['date'].value}
                            onChange={onChangeFormData('date')}
                        />
                    </form>
                    <Button type="submit">Оформить заказ</Button>
                </Flex>
            )}
            {selectedTab === 1 && (
                <Flex padding='60px 80px' direction='column'>
                    <Text margin='90px 0 60px' size ="18px" weight="400">Введите номер заказа, что бы узнать о его статусе:</Text>
                    <form>
                        <TextField
                            placeholder="Номер заказа"
                            errorLabel="Пожалуйста, введите код заказа"
                            error={formData['phone'].error}
                            value={formData['phone'].value}
                            onChange={onChangeDelivery}
                        />
                        <Button type="submit">Получить информацию</Button>

                    </form>
                </Flex>

            )}

        </BorderContainer>
    )
}

export default Form;
