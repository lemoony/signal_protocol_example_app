import 'dart:convert';
import 'dart:typed_data';

import 'package:libsignal_protocol_dart/libsignal_protocol_dart.dart';

class Client {
  Client({required String address, required int deviceId})
      : address = SignalProtocolAddress(address, deviceId) {}

  final _sessionBuilders = <SignalProtocolAddress, SessionBuilder>{};
  final _sessionCiphers = <SignalProtocolAddress, SessionCipher>{};
  final _sessionNextMessage = <SignalProtocolAddress, int>{};

  final SignalProtocolAddress address;

  late final SignedPreKeyRecord _signedPreKeyRecord;
  late final IdentityKeyStore _identityKeyStore;

  late final IdentityKeyPair _identityKeyPair;
  late final List<PreKeyRecord> _preKeys;

  final _registrationId = generateRegistrationId(false);

  final _sessionStore = InMemorySessionStore();
  final _preKeyStore = InMemoryPreKeyStore();
  final _signedPreKeyStore = InMemorySignedPreKeyStore();

  Future<void> initialize() async {
    _identityKeyPair = generateIdentityKeyPair();
    _identityKeyStore =
        InMemoryIdentityKeyStore(_identityKeyPair, _registrationId);

    _signedPreKeyRecord = generateSignedPreKey(_identityKeyPair, 0);

    _preKeys = generatePreKeys(0, 100);

    await _signedPreKeyStore.storeSignedPreKey(
      _signedPreKeyRecord.id,
      _signedPreKeyRecord,
    );

    for (var p in _preKeys) {
      await _preKeyStore.storePreKey(p.id, p);
    }
  }

  Future<void> initSession(
    SignalProtocolAddress remoteAddress,
    PreKeyBundle remotePreKeyBundle,
  ) async {
    final sessionBuilder = SessionBuilder(
      _sessionStore,
      _preKeyStore,
      _signedPreKeyStore,
      _identityKeyStore,
      remoteAddress,
    );

    _sessionBuilders[remoteAddress] = sessionBuilder;
    _sessionCiphers[remoteAddress] = SessionCipher(_sessionStore, _preKeyStore,
        _signedPreKeyStore, _identityKeyStore, remoteAddress);
    _sessionNextMessage[remoteAddress] = CiphertextMessage.prekeyType;

    await sessionBuilder.processPreKeyBundle(remotePreKeyBundle);
  }

  Future<Uint8List> encrypt(
      SignalProtocolAddress remoteAddress,
      String plainText,
      ) async {
    final plainBytes = Uint8List.fromList(utf8.encode(plainText));
    _sessionNextMessage[remoteAddress] = CiphertextMessage.whisperType;
    final msg = await _sessionCiphers[remoteAddress]!.encrypt(plainBytes);
    return msg.serialize();
  }

  Future<String> decrypt(
    SignalProtocolAddress remoteAddress,
    Uint8List bytes,
  ) async {

    final cipher = _sessionCiphers[remoteAddress];

    final Uint8List? decryptedBytes;
    if (_sessionNextMessage[remoteAddress] == CiphertextMessage.prekeyType) {
      final msg = PreKeySignalMessage(bytes);
      decryptedBytes = await cipher?.decrypt(msg);
      _sessionNextMessage[remoteAddress] = CiphertextMessage.whisperType;
    } else {
      final msg = SignalMessage.fromSerialized(bytes);
      decryptedBytes = await _sessionCiphers[remoteAddress]?.decryptFromSignal(msg);
    }

    return utf8.decode(decryptedBytes!);
  }

  PreKeyBundle generatePreKeyBundle() => PreKeyBundle(
        _registrationId,
        address.getDeviceId(),
        _preKeys.first.id,
        _preKeys.first.getKeyPair().publicKey,
        _signedPreKeyRecord.id,
        _signedPreKeyRecord.getKeyPair().publicKey,
        _signedPreKeyRecord.signature,
        _identityKeyPair.getPublicKey(),
      );

}
