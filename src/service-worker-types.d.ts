/// <reference lib="webworker" />

interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
  caches: CacheStorage;
}

declare interface ExtendableEvent extends Event {
  waitUntil(promise: Promise<void>): void;
}

declare interface FetchEvent extends ExtendableEvent {
  readonly request: Request;
  respondWith(response: Promise<Response>): void;
}
