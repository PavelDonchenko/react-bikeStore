import React from 'react';
import {Wrapper, Title, Flex} from 'components/ui';
import PostCards from 'components/PostCards';
import Post1 from 'assets/f1.jpg';
import Post2 from 'assets/f2.jpg';
import Post3 from 'assets/f3.jpg';
import Post4 from 'assets/f4.jpg';

const PostData = [
    {
        id: 1,
        image: Post1,
        title: 'Изогнутая верхняя труба',
        text: 'Меньшие рамы (XS и S) имеют верхнюю трубу, которая опускается вниз по мере приближения к подседельной трубе.амы большего размера (M и выше) имеют прямую верхнюю трубу, для более высоких райдеров.'
    },
    {
        id: 2,
        image: Post2,
        title: 'Активный брейк - шарнир',
        text: 'Позволяет независимо подстраивать реакцию подвески на ускорение и тормозное усилие. Это означает, что вы получаете более уверенный контроль, когда  это  больше всего необходимо.'
    },
    {
        id: 3,
        image: Post3,
        title: 'РЕ: АКТИВ СКВОЗНОго ВАЛА',
        text: 'Дает вам непревзойденное сцепление и контроль с помощью амортизатора, который реагирует на местность быстрее, чем это возможно.'
    },
    {
        id: 4,
        image: Post4,
        title: 'Идеальная конструкция',
        text: 'Конструкция рамы Trek Straight Shot оптимизирует соотношение жесткости к весу для более отзывчивой езды. Вы сможете усерднее работать и оставаться дальше в своем положении, когда ситуация станет более тяжелой.'
    }
]

function Posts (){
    return (
        <section>
            <Wrapper>
                <Title withBorder margin = '70px 0 30px'>ФУНКЦИИ</Title>
                <Flex align = 'baseline' colgap = '30px'>
                    {PostData.map((item) => <PostCards key={item.id} {...item} />)}
                </Flex>
            </Wrapper>
        </section>
    )
}

export default Posts;