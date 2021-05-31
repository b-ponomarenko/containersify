import {provide} from '../utils/provide';
import {createToken} from '../createToken';
import {TokenType} from '../index';
import {Scope} from "../consts/scope";

class Engine {
  start() {
  }

  stop() {
  }
};

class Wheels {
  turn(side: 'left' | 'right') {
  }
};

class Car {
  constructor(engine: Engine, wheels: Wheels) {
  }

  run() {
  }
};

const CAR_FACTORY_TOKEN = createToken<Car>('CAR_FACTORY_TOKEN');
const CAR_MULTI_TOKEN = createToken<Car>('CAR_FACTORY_TOKEN', {multi: true, optional: true});
const ENGINE_FACTORY_TOKEN = createToken<Engine>('ENGINE_FACTORY_TOKEN');
const WHEELS_FACTORY_TOKEN = createToken<Wheels>('WHEELS_FACTORY_TOKEN');
const VALUE_TOKEN = createToken<{ a: string }>('WHEELS_FACTORY_TOKEN232');

const factoryProvider = provide({
  provide: CAR_FACTORY_TOKEN,
  useFactory: (car, wheels, engine, carMulti) => {

    car.run();

    return car;
  },
  deps: [CAR_FACTORY_TOKEN, WHEELS_FACTORY_TOKEN, ENGINE_FACTORY_TOKEN, CAR_MULTI_TOKEN] as const,
});

const providers = provide(
  [
    {
      provide: ENGINE_FACTORY_TOKEN,
      useFactory: (...args) => {
        // const [wheels] = args;

        // wheels.turn('left');

        return new Engine();
      },
    },
    {
      provide: CAR_FACTORY_TOKEN,
      useFactory: (...args) => {
        const [engine, wheels] = args;

        engine.start();

        return new Car(engine, wheels);
      },
      deps: [ENGINE_FACTORY_TOKEN, WHEELS_FACTORY_TOKEN] as const,
    },
    {
      provide: ENGINE_FACTORY_TOKEN,
      scope: Scope.REQUEST,
      useFactory: () => {
        return new Engine();
      },
    },
    {
      provide: ENGINE_FACTORY_TOKEN,
      useFactory: (wheels, x, car) => {
        return new Engine();
      },
      deps: [WHEELS_FACTORY_TOKEN, ENGINE_FACTORY_TOKEN, CAR_FACTORY_TOKEN] as const
    },
    {
      provide: ENGINE_FACTORY_TOKEN,
      useFactory: (wheels, wheel) => {
        return new Engine();
      },
      deps: [{ token: WHEELS_FACTORY_TOKEN, multi: true, optional: true }, WHEELS_FACTORY_TOKEN] as const
    },
    {
      provide: VALUE_TOKEN,
      useValue: { a: 'asdad' }
    }
  ]);

const valProvider = provide({
  provide: VALUE_TOKEN,
  useValue: { a: '' }
});

const carProvider1 = provide({
  provide: CAR_FACTORY_TOKEN,
  useFactory: () => {
    return new Car(new Engine(), new Wheels());
  },
  deps: [] as const,
});

const carProvider2 = provide({
  provide: CAR_FACTORY_TOKEN,
  useFactory: () => {
    return new Car(new Engine(), new Wheels());
  },
});
