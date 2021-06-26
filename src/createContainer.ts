import { Container } from './Container';
import { Provider } from './types/provider';

export const createContainer = (providers?: Provider<any, any>[]) => {
    return new Container(providers);
}
