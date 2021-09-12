import * as Curve25519 from "curve25519-js";


export function generateKeyPair(seed: any): {
    public: Uint8Array;
    private: Uint8Array;
} {
    return Curve25519.generateKeyPair(seed);
}

export function sharedKey(privateKey: any, publicKey: any): Uint8Array {
    return Curve25519.sharedKey(privateKey, publicKey)
}
