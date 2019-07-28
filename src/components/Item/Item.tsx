import React from 'react';
import cs from 'classnames';
import styled from 'styled-components';

interface IItemProps {
    children: React.ReactNode;
    className?: string;
    itemType?: 'pokemon' | 'star-wars';
};

const ItemStyles = styled.li`
    background: var(--itemBgDefault);
    border-radius: var(--borderRadius);
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, .25);
    padding: 1.5rem;

    &.star-wars {
        background: var(--starwarsItemBg);
    }
`;

const Item = ({ children, className = null, itemType = null }): JSX.Element => (
    <ItemStyles className={cs(className, 'type', itemType)}>
        {children}
    </ItemStyles>
);

export default Item;
