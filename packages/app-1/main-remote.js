import { mount as pursMount } from './output/Main';

export function mount(container) {
  return pursMount(container)();
}

