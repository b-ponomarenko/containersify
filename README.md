# Containersify

## Installation

```
npm install containersify
```
or
```
yarn add containersify
```

## Usage

```ts
import { createContainer } from 'containersify';

class Engine {}

class Car {
    constructor(engine: Engine) {}
}

const container = createContainer([
    Engine,
    {
        provide: Car,
        useClass: Car,
        deps: [Engine]
    },
    {
        provide: 'carFactory',
        useFactory: (car: Car) => car,
        deps: [Car]
    }
]);

const car = container.get('carFactory'); // Car
```

## API

## TODO

- [ ] Add child container support
- [ ] Add check for circular dependecy
- [ ] Add tests for errors
- [ ] Change provider singleton provider to request and warn user if provider has request providers in deps
