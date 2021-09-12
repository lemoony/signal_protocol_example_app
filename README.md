# signal_protocol_example_app

This is an example project demonstrating how to use `MixinNetwork/libsignal_protocol_dart` both on mobile devices
and on the web without much performance losses.

> Fore more information on the issue with web performance, see https://github.com/MixinNetwork/libsignal_protocol_dart/issues/42

## How it works

This project uses the following fork & branch:

https://github.com/lemoony/libsignal_protocol_dart/tree/feature/web-support-with-overwrites

The main performance boost comes from using a custom Javascript library (`curve25519-js`) instead of the Dart
implementation shipping with `libsignal_protocol_dart`. The JS lib will only be used on the web, whereas the dart implementation on all other devices.

The js library resides at `web/js`. Directory `npm` holds a minimal webpack compilation setup. If you want to add additional
functions that should be callable, perform the following steps:

- Switch to directory `npm` and run `npm install`
- Add the function you want to call to `npm/src/index.ts`
- Run `npm run build`. This will automatically updated `web/js/app.js`.
- Add a facade method to `lib/signal/javascript_bundler.dart`

