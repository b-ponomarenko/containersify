import { provide } from '../utils/provide';
import { createToken } from '../createToken';
import { TokenType } from '../index';

class Engine {
    start() {}

    stop() {}
};

class Wheels {
    turn(side: 'left' | 'right') {}
};

class Car {
    constructor(engine: Engine, wheels: Wheels) {}

    run() {}
};

const CAR_FACTORY_TOKEN = createToken<Car>('CAR_FACTORY_TOKEN');
const ENGINE_FACTORY_TOKEN = createToken<Engine>('ENGINE_FACTORY_TOKEN');
const WHEELS_FACTORY_TOKEN = createToken<Wheels>('WHEELS_FACTORY_TOKEN');

const factoryProvider = provide({
    provider: CAR_FACTORY_TOKEN,
    useFactory: (car) => {
        car.run();

        return car;
    },
    deps: [CAR_FACTORY_TOKEN]
});

const carProvider = provide({
    provider: CAR_FACTORY_TOKEN,
    useFactory: (engine, wheels) => {

        engine.start();

        return new Car(engine, wheels);
    },
    deps: [ENGINE_FACTORY_TOKEN, WHEELS_FACTORY_TOKEN] as const
});

type X = TokenType<typeof CAR_FACTORY_TOKEN>;

const carProvider2 = provide({
    provider: CAR_FACTORY_TOKEN,
    useClass: class implements X {
        constructor(engine, wheels) {

        }

        run() {}
    },
    deps: [ENGINE_FACTORY_TOKEN, WHEELS_FACTORY_TOKEN] as const
});
