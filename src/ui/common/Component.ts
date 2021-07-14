import { EventListener } from 'services/EventListener';

export abstract class Component extends EventListener {
  abstract toHTML(): string;
}
