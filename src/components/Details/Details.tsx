import React from 'react';
import cs from 'classnames';
import styled from 'styled-components';

import { capitalizeFirstLetter } from '../../helpers/formatText';

interface IDetailsProps {
    detailListLabel: string;
    image?: string;
    level?: string;
    title: string;
    type: 'pokemon' | 'star-wars';
    typeLabel: string;
    renderMiniList?: () => React.ReactNode;
};

const DetailsType = styled.span`
    color: var(--red);
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.25;
    letter-spacing: 0.1rem;
    padding-bottom: 1.5rem;
    text-transform: uppercase;

    &.star-wars {
        color: var(--grey);
    }

    @media (min-width: 768px) {
        font-size: 1.4rem;
    }
`;

const DetailsStyles = styled.div`
    position: relative;

    &.top {
        display: flex;
        flex-flow: column;
    }

    &.bottom {
        margin-top: 2rem;
    }

    .item-list {
        margin-top: 1.5rem;
        padding-left: 2rem;

        li {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }

    @media (min-width: 768px) {
        .item-list {

            li {
                font-size: 1.6rem;
            }
        }
    }

    &.image-padded {
        padding-left: 6rem;
        position: relative;
    }
`;

const Image = styled.div`
    left: 0;
    max-width: 5rem;
    position: absolute;
`;

const TitleStyles = styled.h3`
    color: var(--brown);
    font-size: 2.1rem;
    line-height: 2.6rem;
    margin: 0;
    text-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, .25);
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 2.6rem;
    }
`;

const Level = styled.div`
    background: var(--itemBgAccent);
    border-radius: var(--borderRadius);
    color: var(--red);
    margin: 1rem 0 0;
    padding: 1rem;
    text-transform: uppercase;

    strong {
        font-weight: 100;
    }

    em {
        color: var(--brown);
        font-weight: 600;
    }

    @media (min-width: 768px) {
        font-size: 1.6rem;
    }
`;

const Label = styled.strong`
    border-bottom: 1px solid var(--itemBgAccent);
    color: var(--red);
    display: block;
    font-size: 1.6rem;
    font-weight: 100;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;

const Details = ({
    detailListLabel,
    image = null,
    level = null,
    type,
    title,
    typeLabel,
    renderMiniList = null
}: IDetailsProps): JSX.Element => {

    return (
        <React.Fragment>
            <DetailsType className={type}>{typeLabel}</DetailsType>
            <DetailsStyles className={cs('top', image ? `image-padded` : null)}>
                {image && (
                    <Image>
                        <img src={image} alt={title + ' image'} />
                    </Image>
                )}
                <TitleStyles>{capitalizeFirstLetter(title)}</TitleStyles>
                {level && (
                    <Level>
                        <strong>Base Experience:</strong> <em>{level}</em>
                    </Level>
                )}
            </DetailsStyles>
            <DetailsStyles className='bottom'>
                <Label>{detailListLabel}:</Label>
                {renderMiniList && renderMiniList()}
            </DetailsStyles>
        </React.Fragment>
    );
};

export default Details;
