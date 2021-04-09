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
