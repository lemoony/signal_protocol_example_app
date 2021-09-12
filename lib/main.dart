import 'package:flutter/material.dart';
import 'package:signal_protocol_example_app/client.dart';
import 'package:signal_protocol_example_app/signal/signal_helper_stub.dart'
// ignore: uri_does_not_exist
    if (dart.library.html) 'package:signal_protocol_example_app/signal/signal_helper.dart';

void main() {
  SignalHelper.initialize();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Signal protocol demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<String> _messages = [];
  Stopwatch? _stopwatch;

  void _addMessage(String message) {
    final msg = "$message\t\t${_stopwatch?.elapsed.inSeconds}s";
    print(msg);
    setState(() {
      _messages.add(msg);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Signal protocol demo'),
      ),
      body: ListView.builder(
          itemCount: _messages.length,
          itemBuilder: (context, index) {
            return ListTile(title: Text(_messages[index]));
          }),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _start(),
        tooltip: 'Start',
        child: Icon(Icons.play_arrow),
      ),
    );
  }

  void _start() async {
    _stopwatch = Stopwatch()..start();

    _addMessage('started');
    final aliceClient = Client(address: 'Alice', deviceId: 1);
    final bobClient = Client(address: 'Bob', deviceId: 1);
    _addMessage('created clients');

    await aliceClient.initialize();
    await bobClient.initialize();
    _addMessage('initialized clients');

    await aliceClient.initSession(
      bobClient.address,
      bobClient.generatePreKeyBundle(),
    );
    _addMessage('Alice: Initialized session with Bob');

    await bobClient.initSession(
      aliceClient.address,
      aliceClient.generatePreKeyBundle(),
    );
    _addMessage('Bob: Initialized session with Alice');

    for (var i = 0; i < 100; i++) {
      final senderClient = i % 2 == 0 ? aliceClient : bobClient;
      final receiverClient = i % 2 == 0 ? bobClient : aliceClient;
      final msg = i % 2 == 0 ? '$i: Hello there' : '$i: Hello back';
      final encrypted = await senderClient.encrypt(receiverClient.address, msg);
      final decrypted = await receiverClient.decrypt(
        senderClient.address,
        encrypted,
      );
      _addMessage(decrypted);
    }

    _stopwatch?.stop();
    print('Took ${_stopwatch?.elapsed}');
  }
}
