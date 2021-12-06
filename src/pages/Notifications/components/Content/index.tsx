import { Content } from './styles';

import { INewsContentProps } from '../../../../models/interfaces';

const ContentComponent = ({ title } : INewsContentProps ) => {
    return (
        <Content>{title}</Content>
    );
};

export default ContentComponent;