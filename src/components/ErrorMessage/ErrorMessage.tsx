import React from 'react';
import styled from 'styled-components';

interface IErrorMessageProps {
    errors?: IError[];
};

interface IError {
    type: 'pokemon' | 'star-wars';
    errorResponse: string;
    errorCopy: string;
};

const ErrorMessageStyles = styled.div`
    color: var(--red);
    display: none;
    font-weight: bold;
    margin: 1.5rem 0 2rem;
    text-align: center;
    text-transform: uppercase;

    p {
        margin: 0;
    }

    .error-block {
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .gif {
        margin: 1.5rem auto 0;
        width: 22rem;

        @media (min-width: 768px) {
            max-width: 32rem;
        }
    }


    @media (min-width: 1024px) {
        margin-top: 5rem;
    }
`;

const ErrorResponse = styled.div`
    color: var(--brown);
`;

const ErrorMessage = ({ errors }: IErrorMessageProps): JSX.Element => {
    if (!errors) return null;
    console.log('errors');
    console.log(errors);

    return (
        <ErrorMessageStyles>
            {   errors.map(error => (
                    <div key={`error-${error.type}`}>
                        <ErrorResponse><p>${error.errorResponse}</p></ErrorResponse>
                        <div dangerouslySetInnerHTML={{__html: error.errorCopy}} />
                    </div>
                ))
            }
        </ErrorMessageStyles>
    );
};

export default ErrorMessage;
