@JS()
library javascript_bundler;

import 'dart:typed_data';

import 'package:js/js.dart';

@JS('appjs')
class AppJs {
  @JS('generateKeyPair')
  external static KeyPair generateKeyPair(Uint8List seed);

  @JS('sharedKey')
  external static Uint8List sharedKey(
    Uint8List privateKey,
    Uint8List publicKey,
  );

}

@JS()
@anonymous
class KeyPair {
  external KeyPair(Uint8List public, Uint8List private);
  external Uint8List get public;
  external Uint8List get private;
}

KeyPair generateKeyPair(Uint8List seed) => AppJs.generateKeyPair(seed);

Uint8List sharedKey(Uint8List privateKey, Uint8List publicKey) =>
    AppJs.sharedKey(privateKey, publicKey);
