import React from 'react';
import cs from 'classnames';

interface IListProps {
    children: React.ReactNode;
    className?: string;
};

const List = ({ children, className = null}: IListProps): JSX.Element => (
    <ul className={cs('list-base', className)}>
        {children}
    </ul>
);

export default List;
