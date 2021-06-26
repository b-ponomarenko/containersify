import { createToken } from '../createToken';
import { createContainer } from '../createContainer';
import { provide } from '../utils/provide';
import { Scope } from '../consts/scope';
import { CONTAINER_TOKEN } from '../Container';

class Engine {
    start() {}
}
const ENGINE_TOKEN = createToken<Engine>('ENGINE_TOKEN');
const MULTI_ENGINE_TOKEN = createToken<Engine>('ENGINE_TOKEN', { multi: true });
const engineProvider = provide({
    provide: ENGINE_TOKEN,
    useClass: Engine,
});

class TurboEngine {}
const TURBO_ENGINE_TOKEN = createToken<TurboEngine>('TURBO_ENGINE_TOKEN');
const turboEngineProvider = provide({
    provide: TURBO_ENGINE_TOKEN,
    useClass: TurboEngine
});

class Wheels {
    turn() {}
}
const WHEELS_TOKEN = createToken<Wheels>('WHEELS_TOKEN');
const wheelsProvider = provide({
   provide: WHEELS_TOKEN,
   useClass: Wheels
});

class Car {
    constructor(public engine: Engine, public wheels: Wheels) {}
}
const CAR_TOKEN = createToken<Car>('CAR_TOKEN');
const carProvider = provide({
    provide: CAR_TOKEN,
    useClass: Car,
    deps: [ENGINE_TOKEN, WHEELS_TOKEN] as const
});

class SportCar extends Car {}
const SPORT_CAR_TOKEN = createToken<SportCar>('SPORT_CAR_TOKEN');

class TurboCar {
    constructor(public turboEngine: TurboEngine) {}
}
const TURBO_CAR_TOKEN = createToken<TurboCar>('TURBO_CAR_TOKEN');

const NUMBER_TOKEN = createToken<number>('NUMBER_TOKEN');
const MULTI_NUMBER_TOKEN = createToken<number>('MULTI_NUMBER_TOKEN', { multi: true });
const OPTIONAL_NUMBER_TOKEN = createToken<number>('MULTI_NUMBER_TOKEN', { optional: true });

describe('createContainer', () => {
    it('should cache instances', () => {
        const container = createContainer([engineProvider]);
        const engine1 = container.get(ENGINE_TOKEN);
        const engine2 = container.get(ENGINE_TOKEN);

        expect(engine1).toBe(engine2);
        expect(engine1 instanceof Engine).toBeTruthy();
    });

    it('should resolve dependencies based on type information', () => {
        const container = createContainer([carProvider, engineProvider, wheelsProvider]);
        const car = container.get(CAR_TOKEN);
        const engine = container.get(ENGINE_TOKEN);
        const wheels = container.get(WHEELS_TOKEN);

        expect(car instanceof Car).toBeTruthy();
        expect(car.engine).toBe(engine);
        expect(car.wheels).toBe(wheels);
    });

    it('should provide to a value', () => {
        const container = createContainer([provide({ provide: NUMBER_TOKEN, useValue: 42 })]);

        const number = container.get(NUMBER_TOKEN);
        expect(number).toEqual(42);
    });

    it('should provide to a factory', () => {
        const container = createContainer([
            engineProvider,
            wheelsProvider,
            provide({
                provide: CAR_TOKEN,
                useFactory: (engine, wheels) => new SportCar(engine, wheels),
                deps: [ENGINE_TOKEN, WHEELS_TOKEN] as const
            })
        ]);

        const car = container.get(CAR_TOKEN);
        expect(car instanceof SportCar).toBeTruthy();
        expect(car.engine instanceof Engine).toBeTruthy();
    });

    it('should support multi provider', () => {
        const providers = provide([
            { provide: MULTI_NUMBER_TOKEN, useValue: 1, multi: true },
            { provide: MULTI_NUMBER_TOKEN, useValue: 2, multi: true },
            { provide: MULTI_NUMBER_TOKEN, useValue: 3, multi: true },
        ]);
        const container = createContainer(providers);

        const numbers = container.get(MULTI_NUMBER_TOKEN);

        expect(numbers).toHaveLength(3);
        expect(numbers[0]).toBe(1);
        expect(numbers[1]).toBe(2);
        expect(numbers[2]).toBe(3);
    });

    it('should support overriding', () => {
        const providers = provide([
            { provide: NUMBER_TOKEN, useValue: 1 },
            { provide: NUMBER_TOKEN, useValue: 2 },
        ]);
        const container = createContainer(providers);

        expect(container.get(NUMBER_TOKEN)).toBe(2);
    });

    it('should support optional dependencies', () => {
        const OPTIONAL_STRING_TOKEN = createToken<string>('OPTIONAL_STRING_TOKEN');
        const TOKEN = createToken('TOKEN');
        const container = createContainer([
            provide({
                provide: TOKEN,
                useFactory: (optional) => optional,
                deps: [{ token: OPTIONAL_STRING_TOKEN, optional: true }] as const,
            }),
        ]);

        expect(container.get(TOKEN)).toBe(null);
    });

    it('should provide a container reference', () => {
        const container = createContainer();

        expect(container.get(CONTAINER_TOKEN)).toBe(container);
    });

    // it('should support dynamic providers', () => {
    // });
    //
    // it('should provide a REQUEST reference', () => {
    //     const requestFn = jest.fn((request) => request);
    //     const container = createContainer([
    //         {
    //             provide: 'requestFactory',
    //             useFactory: requestFn,
    //             deps: [REQUEST],
    //         },
    //     ]);
    //
    //     simulateRequest(container);
    //     container.register({
    //         provide: REQUEST,
    //         useFactory: () => ({
    //             host: 'localhost',
    //             date: '2021-02-01T13:33:23.000',
    //         }),
    //         scope: Scope.REQUEST,
    //     });
    //     expect(container.get('requestFactory')).toEqual({
    //         host: 'localhost',
    //         date: '2021-02-01T13:33:23.000',
    //     });
    //     expect(requestFn).toBeCalledTimes(1);
    //
    //     simulateRequest(container);
    //     container.register({
    //         provide: REQUEST,
    //         useFactory: () => ({
    //             host: 'localhost',
    //             date: '2021-02-01T13:35:23.000',
    //         }),
    //         scope: Scope.REQUEST,
    //     });
    //     expect(container.get('requestFactory')).toEqual({
    //         host: 'localhost',
    //         date: '2021-02-01T13:35:23.000',
    //     });
    //     expect(requestFn).toBeCalledTimes(2);
    // });
    //
    // it('should cache Scope.REQUEST providers during request', () => {
    //     const requestFn1 = jest.fn((a, b) => a * b);
    //     const requestFn2 = jest.fn((a, b) => a + b);
    //     const container = createContainer([
    //         {
    //             provide: 'requestFn1',
    //             useFactory: requestFn1,
    //             deps: ['a', 'b'],
    //             scope: Scope.REQUEST,
    //         },
    //         {
    //             provide: 'requestFn2',
    //             useFactory: requestFn2,
    //             deps: ['a', 'b'],
    //             scope: Scope.REQUEST,
    //         },
    //         { provide: 'a', useValue: 3 },
    //         { provide: 'b', useValue: 4 },
    //     ]);
    //
    //     expect(container.get('requestFn1')).toBe(12);
    //     expect(container.get('requestFn2')).toBe(7);
    //     container.get('requestFn1');
    //     expect(requestFn1).toBeCalledTimes(1);
    //     container.get('requestFn1');
    //     expect(requestFn1).toBeCalledTimes(1);
    //
    //     container.get('requestFn2');
    //     expect(requestFn2).toBeCalledTimes(1);
    //     container.get('requestFn2');
    //     expect(requestFn2).toBeCalledTimes(1);
    //
    //     simulateRequest(container);
    //
    //     container.get('requestFn1');
    //     expect(requestFn1).toBeCalledTimes(2);
    //     container.get('requestFn1');
    //     expect(requestFn1).toBeCalledTimes(2);
    //
    //     container.get('requestFn2');
    //     expect(requestFn2).toBeCalledTimes(2);
    //     container.get('requestFn2');
    //     expect(requestFn2).toBeCalledTimes(2);
    // });

    // it('should not cache Scope.TRANSIENT providers', () => {
    //     const transientFn = jest.fn((a, b) => a + b);
    //     const container = createContainer([
    //         {
    //             provide: 'foo',
    //             useFactory: transientFn,
    //             scope: Scope.TRANSIENT,
    //             deps: ['a', 'b'],
    //         },
    //         { provide: 'a', useValue: 2 },
    //         { provide: 'b', useValue: 3 },
    //     ]);
    //
    //     container.get('foo');
    //     expect(transientFn).toBeCalledTimes(1);
    //     container.get('foo');
    //     expect(transientFn).toBeCalledTimes(2);
    //     container.get('foo');
    //     expect(transientFn).toBeCalledTimes(3);
    //     container.get('foo');
    //     expect(transientFn).toBeCalledTimes(4);
    //     container.get('foo');
    //     expect(transientFn).toBeCalledTimes(5);
    // });

    // TODO create tests for errors
    // 1. circular dependency
    // 2. no provider (not optional)
    // 3. Multi parameter in token and provider don't match
    // 4. Unfamiliar provider type
});
