import 'dart:math';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:libsignal_protocol_dart/libsignal_protocol_dart.dart';
import 'package:signal_protocol_example_app/signal/javascript_bundler.dart'
    as js;

abstract class SignalHelper {
  static final _random = Random.secure();

  static void initialize() {
    if (kIsWeb) {
      Curve.keyPairGenerator = () => SignalHelper._generateKeyPair();
      Curve.agreementCalculator =
          (private, public) => SignalHelper._sharedSecret(private, public);
    }
  }

  static GeneratedKeyPair _generateKeyPair() {
    var seed = List<int>.generate(32, (i) => _random.nextInt(256));
    seed[0] &= 248;
    seed[31] &= 127;
    seed[31] |= 64;
    final keyPair = js.generateKeyPair(Uint8List.fromList(seed));
    return GeneratedKeyPair(keyPair.private, keyPair.public);
  }

  static _sharedSecret(Uint8List privateKey, Uint8List publicKey) {
    return js.sharedKey(privateKey, publicKey);
  }
}
