import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ProtoBoxedBool. */
export interface IProtoBoxedBool {

    /** ProtoBoxedBool value */
    value?: (boolean|null);

    /** ProtoBoxedBool isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedBool. */
export class ProtoBoxedBool implements IProtoBoxedBool {

    /**
     * Constructs a new ProtoBoxedBool.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedBool);

    /** ProtoBoxedBool value. */
    public value: boolean;

    /** ProtoBoxedBool isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedBool instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedBool instance
     */
    public static create(properties?: IProtoBoxedBool): ProtoBoxedBool;

    /**
     * Encodes the specified ProtoBoxedBool message. Does not implicitly {@link ProtoBoxedBool.verify|verify} messages.
     * @param message ProtoBoxedBool message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedBool, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedBool message, length delimited. Does not implicitly {@link ProtoBoxedBool.verify|verify} messages.
     * @param message ProtoBoxedBool message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedBool, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedBool message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedBool
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedBool;

    /**
     * Decodes a ProtoBoxedBool message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedBool
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedBool;

    /**
     * Verifies a ProtoBoxedBool message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedBool message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedBool
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedBool;

    /**
     * Creates a plain object from a ProtoBoxedBool message. Also converts values to other types if specified.
     * @param message ProtoBoxedBool
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedBool, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedBool to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedBool
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedDouble. */
export interface IProtoBoxedDouble {

    /** ProtoBoxedDouble value */
    value?: (number|null);

    /** ProtoBoxedDouble isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedDouble. */
export class ProtoBoxedDouble implements IProtoBoxedDouble {

    /**
     * Constructs a new ProtoBoxedDouble.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedDouble);

    /** ProtoBoxedDouble value. */
    public value: number;

    /** ProtoBoxedDouble isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedDouble instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedDouble instance
     */
    public static create(properties?: IProtoBoxedDouble): ProtoBoxedDouble;

    /**
     * Encodes the specified ProtoBoxedDouble message. Does not implicitly {@link ProtoBoxedDouble.verify|verify} messages.
     * @param message ProtoBoxedDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedDouble message, length delimited. Does not implicitly {@link ProtoBoxedDouble.verify|verify} messages.
     * @param message ProtoBoxedDouble message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedDouble, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedDouble message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedDouble;

    /**
     * Decodes a ProtoBoxedDouble message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedDouble
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedDouble;

    /**
     * Verifies a ProtoBoxedDouble message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedDouble message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedDouble
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedDouble;

    /**
     * Creates a plain object from a ProtoBoxedDouble message. Also converts values to other types if specified.
     * @param message ProtoBoxedDouble
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedDouble, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedDouble to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedDouble
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedInt32. */
export interface IProtoBoxedInt32 {

    /** ProtoBoxedInt32 value */
    value?: (number|null);

    /** ProtoBoxedInt32 isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedInt32. */
export class ProtoBoxedInt32 implements IProtoBoxedInt32 {

    /**
     * Constructs a new ProtoBoxedInt32.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedInt32);

    /** ProtoBoxedInt32 value. */
    public value: number;

    /** ProtoBoxedInt32 isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedInt32 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedInt32 instance
     */
    public static create(properties?: IProtoBoxedInt32): ProtoBoxedInt32;

    /**
     * Encodes the specified ProtoBoxedInt32 message. Does not implicitly {@link ProtoBoxedInt32.verify|verify} messages.
     * @param message ProtoBoxedInt32 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedInt32, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedInt32 message, length delimited. Does not implicitly {@link ProtoBoxedInt32.verify|verify} messages.
     * @param message ProtoBoxedInt32 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedInt32, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedInt32 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedInt32
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedInt32;

    /**
     * Decodes a ProtoBoxedInt32 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedInt32
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedInt32;

    /**
     * Verifies a ProtoBoxedInt32 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedInt32 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedInt32
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedInt32;

    /**
     * Creates a plain object from a ProtoBoxedInt32 message. Also converts values to other types if specified.
     * @param message ProtoBoxedInt32
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedInt32, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedInt32 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedInt32
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedUint32. */
export interface IProtoBoxedUint32 {

    /** ProtoBoxedUint32 value */
    value?: (number|null);

    /** ProtoBoxedUint32 isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedUint32. */
export class ProtoBoxedUint32 implements IProtoBoxedUint32 {

    /**
     * Constructs a new ProtoBoxedUint32.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedUint32);

    /** ProtoBoxedUint32 value. */
    public value: number;

    /** ProtoBoxedUint32 isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedUint32 instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedUint32 instance
     */
    public static create(properties?: IProtoBoxedUint32): ProtoBoxedUint32;

    /**
     * Encodes the specified ProtoBoxedUint32 message. Does not implicitly {@link ProtoBoxedUint32.verify|verify} messages.
     * @param message ProtoBoxedUint32 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedUint32, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedUint32 message, length delimited. Does not implicitly {@link ProtoBoxedUint32.verify|verify} messages.
     * @param message ProtoBoxedUint32 message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedUint32, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedUint32 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedUint32
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedUint32;

    /**
     * Decodes a ProtoBoxedUint32 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedUint32
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedUint32;

    /**
     * Verifies a ProtoBoxedUint32 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedUint32 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedUint32
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedUint32;

    /**
     * Creates a plain object from a ProtoBoxedUint32 message. Also converts values to other types if specified.
     * @param message ProtoBoxedUint32
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedUint32, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedUint32 to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedUint32
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedString. */
export interface IProtoBoxedString {

    /** ProtoBoxedString value */
    value?: (string|null);

    /** ProtoBoxedString isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedString. */
export class ProtoBoxedString implements IProtoBoxedString {

    /**
     * Constructs a new ProtoBoxedString.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedString);

    /** ProtoBoxedString value. */
    public value: string;

    /** ProtoBoxedString isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedString instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedString instance
     */
    public static create(properties?: IProtoBoxedString): ProtoBoxedString;

    /**
     * Encodes the specified ProtoBoxedString message. Does not implicitly {@link ProtoBoxedString.verify|verify} messages.
     * @param message ProtoBoxedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedString message, length delimited. Does not implicitly {@link ProtoBoxedString.verify|verify} messages.
     * @param message ProtoBoxedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedString message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedString;

    /**
     * Decodes a ProtoBoxedString message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedString;

    /**
     * Verifies a ProtoBoxedString message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedString message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedString
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedString;

    /**
     * Creates a plain object from a ProtoBoxedString message. Also converts values to other types if specified.
     * @param message ProtoBoxedString
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedString, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedString to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedString
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoSPBMode enum. */
export enum ProtoSPBMode {
    NONE = 0,
    SUPERSCRIPT = 1,
    SUBSCRIPT = 2
}

/** Properties of a ProtoBoxedSPBMode. */
export interface IProtoBoxedSPBMode {

    /** ProtoBoxedSPBMode value */
    value?: (ProtoSPBMode|null);

    /** ProtoBoxedSPBMode isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedSPBMode. */
export class ProtoBoxedSPBMode implements IProtoBoxedSPBMode {

    /**
     * Constructs a new ProtoBoxedSPBMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedSPBMode);

    /** ProtoBoxedSPBMode value. */
    public value: ProtoSPBMode;

    /** ProtoBoxedSPBMode isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedSPBMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedSPBMode instance
     */
    public static create(properties?: IProtoBoxedSPBMode): ProtoBoxedSPBMode;

    /**
     * Encodes the specified ProtoBoxedSPBMode message. Does not implicitly {@link ProtoBoxedSPBMode.verify|verify} messages.
     * @param message ProtoBoxedSPBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedSPBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedSPBMode message, length delimited. Does not implicitly {@link ProtoBoxedSPBMode.verify|verify} messages.
     * @param message ProtoBoxedSPBMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedSPBMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedSPBMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedSPBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedSPBMode;

    /**
     * Decodes a ProtoBoxedSPBMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedSPBMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedSPBMode;

    /**
     * Verifies a ProtoBoxedSPBMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedSPBMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedSPBMode
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedSPBMode;

    /**
     * Creates a plain object from a ProtoBoxedSPBMode message. Also converts values to other types if specified.
     * @param message ProtoBoxedSPBMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedSPBMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedSPBMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedSPBMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoRuleStyle enum. */
export enum ProtoRuleStyle {
    DUMMY_RULE_STYLE = 0,
    SOLID = 1,
    SPARSE_SHADING = 2,
    MEDIUM_SHADING = 3,
    DENSE_SHADING = 4,
    LIGHT_DOTTED = 5,
    MEDIUM_DOTTED = 6,
    HEAVY_DOTTED = 7,
    LIGHT_DASHED = 8,
    MEDIUM_DASHED = 9,
    HEAVY_DASHED = 10,
    DASH_PATTERN = 11,
    DOUBLE = 254
}

/** Properties of a ProtoStrikethroughSpec. */
export interface IProtoStrikethroughSpec {

    /** ProtoStrikethroughSpec weight */
    weight?: (IProtoMeasure|null);

    /** ProtoStrikethroughSpec mode */
    mode?: (ProtoUnderlineMode|null);

    /** ProtoStrikethroughSpec color */
    color?: (IProtoColor|null);

    /** ProtoStrikethroughSpec offsetEm */
    offsetEm?: (number|null);

    /** ProtoStrikethroughSpec style */
    style?: (ProtoRuleStyle|null);
}

/** Represents a ProtoStrikethroughSpec. */
export class ProtoStrikethroughSpec implements IProtoStrikethroughSpec {

    /**
     * Constructs a new ProtoStrikethroughSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoStrikethroughSpec);

    /** ProtoStrikethroughSpec weight. */
    public weight?: (IProtoMeasure|null);

    /** ProtoStrikethroughSpec mode. */
    public mode: ProtoUnderlineMode;

    /** ProtoStrikethroughSpec color. */
    public color?: (IProtoColor|null);

    /** ProtoStrikethroughSpec offsetEm. */
    public offsetEm: number;

    /** ProtoStrikethroughSpec style. */
    public style: ProtoRuleStyle;

    /**
     * Creates a new ProtoStrikethroughSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoStrikethroughSpec instance
     */
    public static create(properties?: IProtoStrikethroughSpec): ProtoStrikethroughSpec;

    /**
     * Encodes the specified ProtoStrikethroughSpec message. Does not implicitly {@link ProtoStrikethroughSpec.verify|verify} messages.
     * @param message ProtoStrikethroughSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoStrikethroughSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoStrikethroughSpec message, length delimited. Does not implicitly {@link ProtoStrikethroughSpec.verify|verify} messages.
     * @param message ProtoStrikethroughSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoStrikethroughSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoStrikethroughSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoStrikethroughSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoStrikethroughSpec;

    /**
     * Decodes a ProtoStrikethroughSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoStrikethroughSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoStrikethroughSpec;

    /**
     * Verifies a ProtoStrikethroughSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoStrikethroughSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoStrikethroughSpec
     */
    public static fromObject(object: { [k: string]: any }): ProtoStrikethroughSpec;

    /**
     * Creates a plain object from a ProtoStrikethroughSpec message. Also converts values to other types if specified.
     * @param message ProtoStrikethroughSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoStrikethroughSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoStrikethroughSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoStrikethroughSpec
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedStrikethroughSpec. */
export interface IProtoBoxedStrikethroughSpec {

    /** ProtoBoxedStrikethroughSpec value */
    value?: (IProtoStrikethroughSpec|null);

    /** ProtoBoxedStrikethroughSpec isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedStrikethroughSpec. */
export class ProtoBoxedStrikethroughSpec implements IProtoBoxedStrikethroughSpec {

    /**
     * Constructs a new ProtoBoxedStrikethroughSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedStrikethroughSpec);

    /** ProtoBoxedStrikethroughSpec value. */
    public value?: (IProtoStrikethroughSpec|null);

    /** ProtoBoxedStrikethroughSpec isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedStrikethroughSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedStrikethroughSpec instance
     */
    public static create(properties?: IProtoBoxedStrikethroughSpec): ProtoBoxedStrikethroughSpec;

    /**
     * Encodes the specified ProtoBoxedStrikethroughSpec message. Does not implicitly {@link ProtoBoxedStrikethroughSpec.verify|verify} messages.
     * @param message ProtoBoxedStrikethroughSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedStrikethroughSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedStrikethroughSpec message, length delimited. Does not implicitly {@link ProtoBoxedStrikethroughSpec.verify|verify} messages.
     * @param message ProtoBoxedStrikethroughSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedStrikethroughSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedStrikethroughSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedStrikethroughSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedStrikethroughSpec;

    /**
     * Decodes a ProtoBoxedStrikethroughSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedStrikethroughSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedStrikethroughSpec;

    /**
     * Verifies a ProtoBoxedStrikethroughSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedStrikethroughSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedStrikethroughSpec
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedStrikethroughSpec;

    /**
     * Creates a plain object from a ProtoBoxedStrikethroughSpec message. Also converts values to other types if specified.
     * @param message ProtoBoxedStrikethroughSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedStrikethroughSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedStrikethroughSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedStrikethroughSpec
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoMeasureType enum. */
export enum ProtoMeasureType {
    PT = 0,
    CM = 1,
    MM = 2,
    IN = 3,
    PERCENT = 4,
    PX = 5
}

/** Properties of a ProtoMeasure. */
export interface IProtoMeasure {

    /** ProtoMeasure value */
    value?: (number|null);

    /** ProtoMeasure mtype */
    mtype?: (ProtoMeasureType|null);
}

/** Represents a ProtoMeasure. */
export class ProtoMeasure implements IProtoMeasure {

    /**
     * Constructs a new ProtoMeasure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoMeasure);

    /** ProtoMeasure value. */
    public value: number;

    /** ProtoMeasure mtype. */
    public mtype: ProtoMeasureType;

    /**
     * Creates a new ProtoMeasure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoMeasure instance
     */
    public static create(properties?: IProtoMeasure): ProtoMeasure;

    /**
     * Encodes the specified ProtoMeasure message. Does not implicitly {@link ProtoMeasure.verify|verify} messages.
     * @param message ProtoMeasure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoMeasure message, length delimited. Does not implicitly {@link ProtoMeasure.verify|verify} messages.
     * @param message ProtoMeasure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoMeasure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoMeasure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoMeasure;

    /**
     * Decodes a ProtoMeasure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoMeasure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoMeasure;

    /**
     * Verifies a ProtoMeasure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoMeasure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoMeasure
     */
    public static fromObject(object: { [k: string]: any }): ProtoMeasure;

    /**
     * Creates a plain object from a ProtoMeasure message. Also converts values to other types if specified.
     * @param message ProtoMeasure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoMeasure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoMeasure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoMeasure
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedMeasure. */
export interface IProtoBoxedMeasure {

    /** ProtoBoxedMeasure value */
    value?: (IProtoMeasure|null);

    /** ProtoBoxedMeasure isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedMeasure. */
export class ProtoBoxedMeasure implements IProtoBoxedMeasure {

    /**
     * Constructs a new ProtoBoxedMeasure.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedMeasure);

    /** ProtoBoxedMeasure value. */
    public value?: (IProtoMeasure|null);

    /** ProtoBoxedMeasure isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedMeasure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedMeasure instance
     */
    public static create(properties?: IProtoBoxedMeasure): ProtoBoxedMeasure;

    /**
     * Encodes the specified ProtoBoxedMeasure message. Does not implicitly {@link ProtoBoxedMeasure.verify|verify} messages.
     * @param message ProtoBoxedMeasure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedMeasure message, length delimited. Does not implicitly {@link ProtoBoxedMeasure.verify|verify} messages.
     * @param message ProtoBoxedMeasure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedMeasure, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedMeasure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedMeasure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedMeasure;

    /**
     * Decodes a ProtoBoxedMeasure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedMeasure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedMeasure;

    /**
     * Verifies a ProtoBoxedMeasure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedMeasure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedMeasure
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedMeasure;

    /**
     * Creates a plain object from a ProtoBoxedMeasure message. Also converts values to other types if specified.
     * @param message ProtoBoxedMeasure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedMeasure, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedMeasure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedMeasure
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSideMeasures. */
export interface IProtoSideMeasures {

    /** ProtoSideMeasures top */
    top?: (IProtoMeasure|null);

    /** ProtoSideMeasures right */
    right?: (IProtoMeasure|null);

    /** ProtoSideMeasures bottom */
    bottom?: (IProtoMeasure|null);

    /** ProtoSideMeasures left */
    left?: (IProtoMeasure|null);
}

/** Represents a ProtoSideMeasures. */
export class ProtoSideMeasures implements IProtoSideMeasures {

    /**
     * Constructs a new ProtoSideMeasures.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSideMeasures);

    /** ProtoSideMeasures top. */
    public top?: (IProtoMeasure|null);

    /** ProtoSideMeasures right. */
    public right?: (IProtoMeasure|null);

    /** ProtoSideMeasures bottom. */
    public bottom?: (IProtoMeasure|null);

    /** ProtoSideMeasures left. */
    public left?: (IProtoMeasure|null);

    /**
     * Creates a new ProtoSideMeasures instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSideMeasures instance
     */
    public static create(properties?: IProtoSideMeasures): ProtoSideMeasures;

    /**
     * Encodes the specified ProtoSideMeasures message. Does not implicitly {@link ProtoSideMeasures.verify|verify} messages.
     * @param message ProtoSideMeasures message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSideMeasures, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSideMeasures message, length delimited. Does not implicitly {@link ProtoSideMeasures.verify|verify} messages.
     * @param message ProtoSideMeasures message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSideMeasures, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSideMeasures message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSideMeasures
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSideMeasures;

    /**
     * Decodes a ProtoSideMeasures message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSideMeasures
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSideMeasures;

    /**
     * Verifies a ProtoSideMeasures message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSideMeasures message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSideMeasures
     */
    public static fromObject(object: { [k: string]: any }): ProtoSideMeasures;

    /**
     * Creates a plain object from a ProtoSideMeasures message. Also converts values to other types if specified.
     * @param message ProtoSideMeasures
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSideMeasures, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSideMeasures to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSideMeasures
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoAdvancedIllustrationAreaTextFlowType enum. */
export enum ProtoAdvancedIllustrationAreaTextFlowType {
    DO_NOT_USE_AT_ALL = 0,
    AROUND = 1,
    NO_FLOW = 2,
    FOREGROUND = 3,
    BACKGROUND = 4
}

/** Properties of a ProtoBoxedAdvancedIllustrationAreaTextFlowType. */
export interface IProtoBoxedAdvancedIllustrationAreaTextFlowType {

    /** ProtoBoxedAdvancedIllustrationAreaTextFlowType value */
    value?: (ProtoAdvancedIllustrationAreaTextFlowType|null);

    /** ProtoBoxedAdvancedIllustrationAreaTextFlowType isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedAdvancedIllustrationAreaTextFlowType. */
export class ProtoBoxedAdvancedIllustrationAreaTextFlowType implements IProtoBoxedAdvancedIllustrationAreaTextFlowType {

    /**
     * Constructs a new ProtoBoxedAdvancedIllustrationAreaTextFlowType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedAdvancedIllustrationAreaTextFlowType);

    /** ProtoBoxedAdvancedIllustrationAreaTextFlowType value. */
    public value: ProtoAdvancedIllustrationAreaTextFlowType;

    /** ProtoBoxedAdvancedIllustrationAreaTextFlowType isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedAdvancedIllustrationAreaTextFlowType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedAdvancedIllustrationAreaTextFlowType instance
     */
    public static create(properties?: IProtoBoxedAdvancedIllustrationAreaTextFlowType): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

    /**
     * Encodes the specified ProtoBoxedAdvancedIllustrationAreaTextFlowType message. Does not implicitly {@link ProtoBoxedAdvancedIllustrationAreaTextFlowType.verify|verify} messages.
     * @param message ProtoBoxedAdvancedIllustrationAreaTextFlowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedAdvancedIllustrationAreaTextFlowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedAdvancedIllustrationAreaTextFlowType message, length delimited. Does not implicitly {@link ProtoBoxedAdvancedIllustrationAreaTextFlowType.verify|verify} messages.
     * @param message ProtoBoxedAdvancedIllustrationAreaTextFlowType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedAdvancedIllustrationAreaTextFlowType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedAdvancedIllustrationAreaTextFlowType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedAdvancedIllustrationAreaTextFlowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

    /**
     * Decodes a ProtoBoxedAdvancedIllustrationAreaTextFlowType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedAdvancedIllustrationAreaTextFlowType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

    /**
     * Verifies a ProtoBoxedAdvancedIllustrationAreaTextFlowType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedAdvancedIllustrationAreaTextFlowType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedAdvancedIllustrationAreaTextFlowType
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedAdvancedIllustrationAreaTextFlowType;

    /**
     * Creates a plain object from a ProtoBoxedAdvancedIllustrationAreaTextFlowType message. Also converts values to other types if specified.
     * @param message ProtoBoxedAdvancedIllustrationAreaTextFlowType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedAdvancedIllustrationAreaTextFlowType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedAdvancedIllustrationAreaTextFlowType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedAdvancedIllustrationAreaTextFlowType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoAdvancedIllustrationAreaImageSettings. */
export interface IProtoAdvancedIllustrationAreaImageSettings {

    /** ProtoAdvancedIllustrationAreaImageSettings textFlow */
    textFlow?: (IProtoBoxedAdvancedIllustrationAreaTextFlowType|null);

    /** ProtoAdvancedIllustrationAreaImageSettings margin */
    margin?: (IProtoSideMeasures|null);
}

/** Represents a ProtoAdvancedIllustrationAreaImageSettings. */
export class ProtoAdvancedIllustrationAreaImageSettings implements IProtoAdvancedIllustrationAreaImageSettings {

    /**
     * Constructs a new ProtoAdvancedIllustrationAreaImageSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoAdvancedIllustrationAreaImageSettings);

    /** ProtoAdvancedIllustrationAreaImageSettings textFlow. */
    public textFlow?: (IProtoBoxedAdvancedIllustrationAreaTextFlowType|null);

    /** ProtoAdvancedIllustrationAreaImageSettings margin. */
    public margin?: (IProtoSideMeasures|null);

    /**
     * Creates a new ProtoAdvancedIllustrationAreaImageSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoAdvancedIllustrationAreaImageSettings instance
     */
    public static create(properties?: IProtoAdvancedIllustrationAreaImageSettings): ProtoAdvancedIllustrationAreaImageSettings;

    /**
     * Encodes the specified ProtoAdvancedIllustrationAreaImageSettings message. Does not implicitly {@link ProtoAdvancedIllustrationAreaImageSettings.verify|verify} messages.
     * @param message ProtoAdvancedIllustrationAreaImageSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoAdvancedIllustrationAreaImageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoAdvancedIllustrationAreaImageSettings message, length delimited. Does not implicitly {@link ProtoAdvancedIllustrationAreaImageSettings.verify|verify} messages.
     * @param message ProtoAdvancedIllustrationAreaImageSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoAdvancedIllustrationAreaImageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoAdvancedIllustrationAreaImageSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoAdvancedIllustrationAreaImageSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoAdvancedIllustrationAreaImageSettings;

    /**
     * Decodes a ProtoAdvancedIllustrationAreaImageSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoAdvancedIllustrationAreaImageSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoAdvancedIllustrationAreaImageSettings;

    /**
     * Verifies a ProtoAdvancedIllustrationAreaImageSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoAdvancedIllustrationAreaImageSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoAdvancedIllustrationAreaImageSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoAdvancedIllustrationAreaImageSettings;

    /**
     * Creates a plain object from a ProtoAdvancedIllustrationAreaImageSettings message. Also converts values to other types if specified.
     * @param message ProtoAdvancedIllustrationAreaImageSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoAdvancedIllustrationAreaImageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoAdvancedIllustrationAreaImageSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoAdvancedIllustrationAreaImageSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoFont. */
export interface IProtoFont {

    /** ProtoFont id */
    id?: (number|null);

    /** ProtoFont name */
    name?: (string|null);
}

/** Represents a ProtoFont. */
export class ProtoFont implements IProtoFont {

    /**
     * Constructs a new ProtoFont.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFont);

    /** ProtoFont id. */
    public id: number;

    /** ProtoFont name. */
    public name: string;

    /**
     * Creates a new ProtoFont instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFont instance
     */
    public static create(properties?: IProtoFont): ProtoFont;

    /**
     * Encodes the specified ProtoFont message. Does not implicitly {@link ProtoFont.verify|verify} messages.
     * @param message ProtoFont message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFont, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFont message, length delimited. Does not implicitly {@link ProtoFont.verify|verify} messages.
     * @param message ProtoFont message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFont, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFont message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFont
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFont;

    /**
     * Decodes a ProtoFont message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFont
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFont;

    /**
     * Verifies a ProtoFont message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFont message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFont
     */
    public static fromObject(object: { [k: string]: any }): ProtoFont;

    /**
     * Creates a plain object from a ProtoFont message. Also converts values to other types if specified.
     * @param message ProtoFont
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFont, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFont to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFont
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedFont. */
export interface IProtoBoxedFont {

    /** ProtoBoxedFont value */
    value?: (IProtoFont|null);

    /** ProtoBoxedFont isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedFont. */
export class ProtoBoxedFont implements IProtoBoxedFont {

    /**
     * Constructs a new ProtoBoxedFont.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedFont);

    /** ProtoBoxedFont value. */
    public value?: (IProtoFont|null);

    /** ProtoBoxedFont isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedFont instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedFont instance
     */
    public static create(properties?: IProtoBoxedFont): ProtoBoxedFont;

    /**
     * Encodes the specified ProtoBoxedFont message. Does not implicitly {@link ProtoBoxedFont.verify|verify} messages.
     * @param message ProtoBoxedFont message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedFont, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedFont message, length delimited. Does not implicitly {@link ProtoBoxedFont.verify|verify} messages.
     * @param message ProtoBoxedFont message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedFont, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedFont message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedFont
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedFont;

    /**
     * Decodes a ProtoBoxedFont message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedFont
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedFont;

    /**
     * Verifies a ProtoBoxedFont message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedFont message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedFont
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedFont;

    /**
     * Creates a plain object from a ProtoBoxedFont message. Also converts values to other types if specified.
     * @param message ProtoBoxedFont
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedFont, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedFont to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedFont
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoColorType enum. */
export enum ProtoColorType {
    DUMMY_COLOR_TYPE = 0,
    RGB = 3,
    CMYK = 4
}

/** Properties of a ProtoColor. */
export interface IProtoColor {

    /** ProtoColor name */
    name?: (IProtoBoxedString|null);

    /** ProtoColor type */
    type?: (ProtoColorType|null);

    /** ProtoColor r */
    r?: (number|null);

    /** ProtoColor g */
    g?: (number|null);

    /** ProtoColor b */
    b?: (number|null);

    /** ProtoColor c */
    c?: (number|null);

    /** ProtoColor m */
    m?: (number|null);

    /** ProtoColor y */
    y?: (number|null);

    /** ProtoColor k */
    k?: (number|null);
}

/** Represents a ProtoColor. */
export class ProtoColor implements IProtoColor {

    /**
     * Constructs a new ProtoColor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoColor);

    /** ProtoColor name. */
    public name?: (IProtoBoxedString|null);

    /** ProtoColor type. */
    public type: ProtoColorType;

    /** ProtoColor r. */
    public r: number;

    /** ProtoColor g. */
    public g: number;

    /** ProtoColor b. */
    public b: number;

    /** ProtoColor c. */
    public c: number;

    /** ProtoColor m. */
    public m: number;

    /** ProtoColor y. */
    public y: number;

    /** ProtoColor k. */
    public k: number;

    /**
     * Creates a new ProtoColor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoColor instance
     */
    public static create(properties?: IProtoColor): ProtoColor;

    /**
     * Encodes the specified ProtoColor message. Does not implicitly {@link ProtoColor.verify|verify} messages.
     * @param message ProtoColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoColor message, length delimited. Does not implicitly {@link ProtoColor.verify|verify} messages.
     * @param message ProtoColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoColor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoColor;

    /**
     * Decodes a ProtoColor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoColor;

    /**
     * Verifies a ProtoColor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoColor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoColor
     */
    public static fromObject(object: { [k: string]: any }): ProtoColor;

    /**
     * Creates a plain object from a ProtoColor message. Also converts values to other types if specified.
     * @param message ProtoColor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoColor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoColor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedColor. */
export interface IProtoBoxedColor {

    /** ProtoBoxedColor value */
    value?: (IProtoColor|null);

    /** ProtoBoxedColor isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedColor. */
export class ProtoBoxedColor implements IProtoBoxedColor {

    /**
     * Constructs a new ProtoBoxedColor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedColor);

    /** ProtoBoxedColor value. */
    public value?: (IProtoColor|null);

    /** ProtoBoxedColor isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedColor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedColor instance
     */
    public static create(properties?: IProtoBoxedColor): ProtoBoxedColor;

    /**
     * Encodes the specified ProtoBoxedColor message. Does not implicitly {@link ProtoBoxedColor.verify|verify} messages.
     * @param message ProtoBoxedColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedColor message, length delimited. Does not implicitly {@link ProtoBoxedColor.verify|verify} messages.
     * @param message ProtoBoxedColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedColor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedColor;

    /**
     * Decodes a ProtoBoxedColor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedColor;

    /**
     * Verifies a ProtoBoxedColor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedColor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedColor
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedColor;

    /**
     * Creates a plain object from a ProtoBoxedColor message. Also converts values to other types if specified.
     * @param message ProtoBoxedColor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedColor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedColor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoRGBColor. */
export interface IProtoRGBColor {

    /** ProtoRGBColor name */
    name?: (IProtoBoxedString|null);

    /** ProtoRGBColor type */
    type?: (ProtoColorType|null);

    /** ProtoRGBColor r */
    r?: (number|null);

    /** ProtoRGBColor g */
    g?: (number|null);

    /** ProtoRGBColor b */
    b?: (number|null);
}

/** Represents a ProtoRGBColor. */
export class ProtoRGBColor implements IProtoRGBColor {

    /**
     * Constructs a new ProtoRGBColor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoRGBColor);

    /** ProtoRGBColor name. */
    public name?: (IProtoBoxedString|null);

    /** ProtoRGBColor type. */
    public type: ProtoColorType;

    /** ProtoRGBColor r. */
    public r: number;

    /** ProtoRGBColor g. */
    public g: number;

    /** ProtoRGBColor b. */
    public b: number;

    /**
     * Creates a new ProtoRGBColor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoRGBColor instance
     */
    public static create(properties?: IProtoRGBColor): ProtoRGBColor;

    /**
     * Encodes the specified ProtoRGBColor message. Does not implicitly {@link ProtoRGBColor.verify|verify} messages.
     * @param message ProtoRGBColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoRGBColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoRGBColor message, length delimited. Does not implicitly {@link ProtoRGBColor.verify|verify} messages.
     * @param message ProtoRGBColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoRGBColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoRGBColor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoRGBColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoRGBColor;

    /**
     * Decodes a ProtoRGBColor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoRGBColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoRGBColor;

    /**
     * Verifies a ProtoRGBColor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoRGBColor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoRGBColor
     */
    public static fromObject(object: { [k: string]: any }): ProtoRGBColor;

    /**
     * Creates a plain object from a ProtoRGBColor message. Also converts values to other types if specified.
     * @param message ProtoRGBColor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoRGBColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoRGBColor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoRGBColor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoCMYKColor. */
export interface IProtoCMYKColor {

    /** ProtoCMYKColor name */
    name?: (IProtoBoxedString|null);

    /** ProtoCMYKColor type */
    type?: (ProtoColorType|null);

    /** ProtoCMYKColor c */
    c?: (number|null);

    /** ProtoCMYKColor m */
    m?: (number|null);

    /** ProtoCMYKColor y */
    y?: (number|null);

    /** ProtoCMYKColor k */
    k?: (number|null);
}

/** Represents a ProtoCMYKColor. */
export class ProtoCMYKColor implements IProtoCMYKColor {

    /**
     * Constructs a new ProtoCMYKColor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoCMYKColor);

    /** ProtoCMYKColor name. */
    public name?: (IProtoBoxedString|null);

    /** ProtoCMYKColor type. */
    public type: ProtoColorType;

    /** ProtoCMYKColor c. */
    public c: number;

    /** ProtoCMYKColor m. */
    public m: number;

    /** ProtoCMYKColor y. */
    public y: number;

    /** ProtoCMYKColor k. */
    public k: number;

    /**
     * Creates a new ProtoCMYKColor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoCMYKColor instance
     */
    public static create(properties?: IProtoCMYKColor): ProtoCMYKColor;

    /**
     * Encodes the specified ProtoCMYKColor message. Does not implicitly {@link ProtoCMYKColor.verify|verify} messages.
     * @param message ProtoCMYKColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoCMYKColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoCMYKColor message, length delimited. Does not implicitly {@link ProtoCMYKColor.verify|verify} messages.
     * @param message ProtoCMYKColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoCMYKColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoCMYKColor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoCMYKColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoCMYKColor;

    /**
     * Decodes a ProtoCMYKColor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoCMYKColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoCMYKColor;

    /**
     * Verifies a ProtoCMYKColor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoCMYKColor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoCMYKColor
     */
    public static fromObject(object: { [k: string]: any }): ProtoCMYKColor;

    /**
     * Creates a plain object from a ProtoCMYKColor message. Also converts values to other types if specified.
     * @param message ProtoCMYKColor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoCMYKColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoCMYKColor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoCMYKColor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoHorizontalAlignment enum. */
export enum ProtoHorizontalAlignment {
    ALIGN_LEFT = 0,
    ALIGN_CENTER = 1,
    ALIGN_RIGHT = 2,
    ALIGN_JUSTIFY = 3,
    ALIGN_FULL_JUSTIFY = 4,
    ALIGN_CENTER_ON_PAGE = 5
}

/** ProtoVerticalAlignment enum. */
export enum ProtoVerticalAlignment {
    TOP = 0,
    MIDDLE = 1,
    BOTTOM = 2
}

/** Properties of a ProtoBoxedHorizontalAlignment. */
export interface IProtoBoxedHorizontalAlignment {

    /** ProtoBoxedHorizontalAlignment value */
    value?: (ProtoHorizontalAlignment|null);

    /** ProtoBoxedHorizontalAlignment isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedHorizontalAlignment. */
export class ProtoBoxedHorizontalAlignment implements IProtoBoxedHorizontalAlignment {

    /**
     * Constructs a new ProtoBoxedHorizontalAlignment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedHorizontalAlignment);

    /** ProtoBoxedHorizontalAlignment value. */
    public value: ProtoHorizontalAlignment;

    /** ProtoBoxedHorizontalAlignment isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedHorizontalAlignment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedHorizontalAlignment instance
     */
    public static create(properties?: IProtoBoxedHorizontalAlignment): ProtoBoxedHorizontalAlignment;

    /**
     * Encodes the specified ProtoBoxedHorizontalAlignment message. Does not implicitly {@link ProtoBoxedHorizontalAlignment.verify|verify} messages.
     * @param message ProtoBoxedHorizontalAlignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedHorizontalAlignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedHorizontalAlignment message, length delimited. Does not implicitly {@link ProtoBoxedHorizontalAlignment.verify|verify} messages.
     * @param message ProtoBoxedHorizontalAlignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedHorizontalAlignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedHorizontalAlignment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedHorizontalAlignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedHorizontalAlignment;

    /**
     * Decodes a ProtoBoxedHorizontalAlignment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedHorizontalAlignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedHorizontalAlignment;

    /**
     * Verifies a ProtoBoxedHorizontalAlignment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedHorizontalAlignment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedHorizontalAlignment
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedHorizontalAlignment;

    /**
     * Creates a plain object from a ProtoBoxedHorizontalAlignment message. Also converts values to other types if specified.
     * @param message ProtoBoxedHorizontalAlignment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedHorizontalAlignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedHorizontalAlignment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedHorizontalAlignment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedVerticalAlignment. */
export interface IProtoBoxedVerticalAlignment {

    /** ProtoBoxedVerticalAlignment value */
    value?: (ProtoVerticalAlignment|null);

    /** ProtoBoxedVerticalAlignment isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedVerticalAlignment. */
export class ProtoBoxedVerticalAlignment implements IProtoBoxedVerticalAlignment {

    /**
     * Constructs a new ProtoBoxedVerticalAlignment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedVerticalAlignment);

    /** ProtoBoxedVerticalAlignment value. */
    public value: ProtoVerticalAlignment;

    /** ProtoBoxedVerticalAlignment isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedVerticalAlignment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedVerticalAlignment instance
     */
    public static create(properties?: IProtoBoxedVerticalAlignment): ProtoBoxedVerticalAlignment;

    /**
     * Encodes the specified ProtoBoxedVerticalAlignment message. Does not implicitly {@link ProtoBoxedVerticalAlignment.verify|verify} messages.
     * @param message ProtoBoxedVerticalAlignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedVerticalAlignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedVerticalAlignment message, length delimited. Does not implicitly {@link ProtoBoxedVerticalAlignment.verify|verify} messages.
     * @param message ProtoBoxedVerticalAlignment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedVerticalAlignment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedVerticalAlignment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedVerticalAlignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedVerticalAlignment;

    /**
     * Decodes a ProtoBoxedVerticalAlignment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedVerticalAlignment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedVerticalAlignment;

    /**
     * Verifies a ProtoBoxedVerticalAlignment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedVerticalAlignment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedVerticalAlignment
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedVerticalAlignment;

    /**
     * Creates a plain object from a ProtoBoxedVerticalAlignment message. Also converts values to other types if specified.
     * @param message ProtoBoxedVerticalAlignment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedVerticalAlignment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedVerticalAlignment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedVerticalAlignment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoBarcodeType enum. */
export enum ProtoBarcodeType {
    PDF417 = 0,
    DATAMATRIX = 1,
    BC128 = 2,
    QR = 3,
    ITF = 4,
    EAN8 = 5,
    EAN13 = 6,
    CODE39 = 7,
    SWISSQR = 8,
    AZTEC = 9
}

/** Properties of a ProtoLinebreak. */
export interface IProtoLinebreak {

    /** ProtoLinebreak parent */
    parent?: (IProtoDocumentElement|null);
}

/** Represents a ProtoLinebreak. */
export class ProtoLinebreak implements IProtoLinebreak {

    /**
     * Constructs a new ProtoLinebreak.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoLinebreak);

    /** ProtoLinebreak parent. */
    public parent?: (IProtoDocumentElement|null);

    /**
     * Creates a new ProtoLinebreak instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoLinebreak instance
     */
    public static create(properties?: IProtoLinebreak): ProtoLinebreak;

    /**
     * Encodes the specified ProtoLinebreak message. Does not implicitly {@link ProtoLinebreak.verify|verify} messages.
     * @param message ProtoLinebreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoLinebreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoLinebreak message, length delimited. Does not implicitly {@link ProtoLinebreak.verify|verify} messages.
     * @param message ProtoLinebreak message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoLinebreak, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoLinebreak message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoLinebreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoLinebreak;

    /**
     * Decodes a ProtoLinebreak message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoLinebreak
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoLinebreak;

    /**
     * Verifies a ProtoLinebreak message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoLinebreak message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoLinebreak
     */
    public static fromObject(object: { [k: string]: any }): ProtoLinebreak;

    /**
     * Creates a plain object from a ProtoLinebreak message. Also converts values to other types if specified.
     * @param message ProtoLinebreak
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoLinebreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoLinebreak to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoLinebreak
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBorder. */
export interface IProtoBorder {

    /** ProtoBorder weight */
    weight?: (IProtoMeasure|null);

    /** ProtoBorder color */
    color?: (IProtoColor|null);
}

/** Represents a ProtoBorder. */
export class ProtoBorder implements IProtoBorder {

    /**
     * Constructs a new ProtoBorder.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBorder);

    /** ProtoBorder weight. */
    public weight?: (IProtoMeasure|null);

    /** ProtoBorder color. */
    public color?: (IProtoColor|null);

    /**
     * Creates a new ProtoBorder instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBorder instance
     */
    public static create(properties?: IProtoBorder): ProtoBorder;

    /**
     * Encodes the specified ProtoBorder message. Does not implicitly {@link ProtoBorder.verify|verify} messages.
     * @param message ProtoBorder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBorder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBorder message, length delimited. Does not implicitly {@link ProtoBorder.verify|verify} messages.
     * @param message ProtoBorder message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBorder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBorder message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBorder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBorder;

    /**
     * Decodes a ProtoBorder message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBorder
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBorder;

    /**
     * Verifies a ProtoBorder message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBorder message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBorder
     */
    public static fromObject(object: { [k: string]: any }): ProtoBorder;

    /**
     * Creates a plain object from a ProtoBorder message. Also converts values to other types if specified.
     * @param message ProtoBorder
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBorder, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBorder to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBorder
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSideBorders. */
export interface IProtoSideBorders {

    /** ProtoSideBorders top */
    top?: (IProtoBorder|null);

    /** ProtoSideBorders right */
    right?: (IProtoBorder|null);

    /** ProtoSideBorders bottom */
    bottom?: (IProtoBorder|null);

    /** ProtoSideBorders left */
    left?: (IProtoBorder|null);
}

/** Represents a ProtoSideBorders. */
export class ProtoSideBorders implements IProtoSideBorders {

    /**
     * Constructs a new ProtoSideBorders.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSideBorders);

    /** ProtoSideBorders top. */
    public top?: (IProtoBorder|null);

    /** ProtoSideBorders right. */
    public right?: (IProtoBorder|null);

    /** ProtoSideBorders bottom. */
    public bottom?: (IProtoBorder|null);

    /** ProtoSideBorders left. */
    public left?: (IProtoBorder|null);

    /**
     * Creates a new ProtoSideBorders instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSideBorders instance
     */
    public static create(properties?: IProtoSideBorders): ProtoSideBorders;

    /**
     * Encodes the specified ProtoSideBorders message. Does not implicitly {@link ProtoSideBorders.verify|verify} messages.
     * @param message ProtoSideBorders message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSideBorders, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSideBorders message, length delimited. Does not implicitly {@link ProtoSideBorders.verify|verify} messages.
     * @param message ProtoSideBorders message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSideBorders, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSideBorders message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSideBorders
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSideBorders;

    /**
     * Decodes a ProtoSideBorders message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSideBorders
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSideBorders;

    /**
     * Verifies a ProtoSideBorders message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSideBorders message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSideBorders
     */
    public static fromObject(object: { [k: string]: any }): ProtoSideBorders;

    /**
     * Creates a plain object from a ProtoSideBorders message. Also converts values to other types if specified.
     * @param message ProtoSideBorders
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSideBorders, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSideBorders to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSideBorders
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoPositionMode enum. */
export enum ProtoPositionMode {
    CENTER = 0,
    LEFT = 1,
    FOLIO = 2,
    RIGHT = 3,
    REVERSE_FOLIO = 4
}

/** Properties of a ProtoBoxedPositionMode. */
export interface IProtoBoxedPositionMode {

    /** ProtoBoxedPositionMode value */
    value?: (ProtoPositionMode|null);

    /** ProtoBoxedPositionMode isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedPositionMode. */
export class ProtoBoxedPositionMode implements IProtoBoxedPositionMode {

    /**
     * Constructs a new ProtoBoxedPositionMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedPositionMode);

    /** ProtoBoxedPositionMode value. */
    public value: ProtoPositionMode;

    /** ProtoBoxedPositionMode isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedPositionMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedPositionMode instance
     */
    public static create(properties?: IProtoBoxedPositionMode): ProtoBoxedPositionMode;

    /**
     * Encodes the specified ProtoBoxedPositionMode message. Does not implicitly {@link ProtoBoxedPositionMode.verify|verify} messages.
     * @param message ProtoBoxedPositionMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedPositionMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedPositionMode message, length delimited. Does not implicitly {@link ProtoBoxedPositionMode.verify|verify} messages.
     * @param message ProtoBoxedPositionMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedPositionMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedPositionMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedPositionMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedPositionMode;

    /**
     * Decodes a ProtoBoxedPositionMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedPositionMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedPositionMode;

    /**
     * Verifies a ProtoBoxedPositionMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedPositionMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedPositionMode
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedPositionMode;

    /**
     * Creates a plain object from a ProtoBoxedPositionMode message. Also converts values to other types if specified.
     * @param message ProtoBoxedPositionMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedPositionMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedPositionMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedPositionMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoColumnSettings. */
export interface IProtoColumnSettings {

    /** ProtoColumnSettings width */
    width?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings interColumnSpace */
    interColumnSpace?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings positionOffset */
    positionOffset?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings positionMode */
    positionMode?: (ProtoPositionMode|null);

    /** ProtoColumnSettings outsideMargin */
    outsideMargin?: (IProtoBoxedMeasure|null);
}

/** Represents a ProtoColumnSettings. */
export class ProtoColumnSettings implements IProtoColumnSettings {

    /**
     * Constructs a new ProtoColumnSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoColumnSettings);

    /** ProtoColumnSettings width. */
    public width?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings interColumnSpace. */
    public interColumnSpace?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings positionOffset. */
    public positionOffset?: (IProtoBoxedMeasure|null);

    /** ProtoColumnSettings positionMode. */
    public positionMode: ProtoPositionMode;

    /** ProtoColumnSettings outsideMargin. */
    public outsideMargin?: (IProtoBoxedMeasure|null);

    /**
     * Creates a new ProtoColumnSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoColumnSettings instance
     */
    public static create(properties?: IProtoColumnSettings): ProtoColumnSettings;

    /**
     * Encodes the specified ProtoColumnSettings message. Does not implicitly {@link ProtoColumnSettings.verify|verify} messages.
     * @param message ProtoColumnSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoColumnSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoColumnSettings message, length delimited. Does not implicitly {@link ProtoColumnSettings.verify|verify} messages.
     * @param message ProtoColumnSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoColumnSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoColumnSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoColumnSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoColumnSettings;

    /**
     * Decodes a ProtoColumnSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoColumnSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoColumnSettings;

    /**
     * Verifies a ProtoColumnSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoColumnSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoColumnSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoColumnSettings;

    /**
     * Creates a plain object from a ProtoColumnSettings message. Also converts values to other types if specified.
     * @param message ProtoColumnSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoColumnSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoColumnSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoColumnSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoGraphicState. */
export interface IProtoGraphicState {

    /** ProtoGraphicState bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoGraphicState italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoGraphicState colorStack */
    colorStack?: (IProtoColor[]|null);

    /** ProtoGraphicState subscript */
    subscript?: (IProtoBoxedBool|null);

    /** ProtoGraphicState superscript */
    superscript?: (IProtoBoxedBool|null);

    /** ProtoGraphicState underline */
    underline?: (IProtoBoxedBool|null);

    /** ProtoGraphicState strikethrough */
    strikethrough?: (IProtoBoxedBool|null);
}

/** Represents a ProtoGraphicState. */
export class ProtoGraphicState implements IProtoGraphicState {

    /**
     * Constructs a new ProtoGraphicState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoGraphicState);

    /** ProtoGraphicState bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoGraphicState italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoGraphicState colorStack. */
    public colorStack: IProtoColor[];

    /** ProtoGraphicState subscript. */
    public subscript?: (IProtoBoxedBool|null);

    /** ProtoGraphicState superscript. */
    public superscript?: (IProtoBoxedBool|null);

    /** ProtoGraphicState underline. */
    public underline?: (IProtoBoxedBool|null);

    /** ProtoGraphicState strikethrough. */
    public strikethrough?: (IProtoBoxedBool|null);

    /**
     * Creates a new ProtoGraphicState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoGraphicState instance
     */
    public static create(properties?: IProtoGraphicState): ProtoGraphicState;

    /**
     * Encodes the specified ProtoGraphicState message. Does not implicitly {@link ProtoGraphicState.verify|verify} messages.
     * @param message ProtoGraphicState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoGraphicState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoGraphicState message, length delimited. Does not implicitly {@link ProtoGraphicState.verify|verify} messages.
     * @param message ProtoGraphicState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoGraphicState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoGraphicState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoGraphicState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoGraphicState;

    /**
     * Decodes a ProtoGraphicState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoGraphicState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoGraphicState;

    /**
     * Verifies a ProtoGraphicState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoGraphicState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoGraphicState
     */
    public static fromObject(object: { [k: string]: any }): ProtoGraphicState;

    /**
     * Creates a plain object from a ProtoGraphicState message. Also converts values to other types if specified.
     * @param message ProtoGraphicState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoGraphicState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoGraphicState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoGraphicState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoHtmlParser. */
export interface IProtoHtmlParser {
}

/** Represents a ProtoHtmlParser. */
export class ProtoHtmlParser implements IProtoHtmlParser {

    /**
     * Constructs a new ProtoHtmlParser.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoHtmlParser);

    /**
     * Creates a new ProtoHtmlParser instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoHtmlParser instance
     */
    public static create(properties?: IProtoHtmlParser): ProtoHtmlParser;

    /**
     * Encodes the specified ProtoHtmlParser message. Does not implicitly {@link ProtoHtmlParser.verify|verify} messages.
     * @param message ProtoHtmlParser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoHtmlParser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoHtmlParser message, length delimited. Does not implicitly {@link ProtoHtmlParser.verify|verify} messages.
     * @param message ProtoHtmlParser message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoHtmlParser, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoHtmlParser message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoHtmlParser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoHtmlParser;

    /**
     * Decodes a ProtoHtmlParser message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoHtmlParser
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoHtmlParser;

    /**
     * Verifies a ProtoHtmlParser message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoHtmlParser message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoHtmlParser
     */
    public static fromObject(object: { [k: string]: any }): ProtoHtmlParser;

    /**
     * Creates a plain object from a ProtoHtmlParser message. Also converts values to other types if specified.
     * @param message ProtoHtmlParser
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoHtmlParser, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoHtmlParser to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoHtmlParser
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoUnderlineMode enum. */
export enum ProtoUnderlineMode {
    DUMMY_UNDERLINE_MODE = 0,
    WORDS_NO_BLANKS = 1,
    WORDS_AND_BLANKS = 2,
    CHARACTERS_NO_BLANKS = 3,
    CHARACTERS_AND_BLANKS = 4
}

/** Properties of a ProtoUnderlineSpec. */
export interface IProtoUnderlineSpec {

    /** ProtoUnderlineSpec weight */
    weight?: (IProtoMeasure|null);

    /** ProtoUnderlineSpec mode */
    mode?: (ProtoUnderlineMode|null);

    /** ProtoUnderlineSpec color */
    color?: (IProtoColor|null);

    /** ProtoUnderlineSpec offsetEm */
    offsetEm?: (number|null);

    /** ProtoUnderlineSpec style */
    style?: (ProtoRuleStyle|null);
}

/** Represents a ProtoUnderlineSpec. */
export class ProtoUnderlineSpec implements IProtoUnderlineSpec {

    /**
     * Constructs a new ProtoUnderlineSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoUnderlineSpec);

    /** ProtoUnderlineSpec weight. */
    public weight?: (IProtoMeasure|null);

    /** ProtoUnderlineSpec mode. */
    public mode: ProtoUnderlineMode;

    /** ProtoUnderlineSpec color. */
    public color?: (IProtoColor|null);

    /** ProtoUnderlineSpec offsetEm. */
    public offsetEm: number;

    /** ProtoUnderlineSpec style. */
    public style: ProtoRuleStyle;

    /**
     * Creates a new ProtoUnderlineSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoUnderlineSpec instance
     */
    public static create(properties?: IProtoUnderlineSpec): ProtoUnderlineSpec;

    /**
     * Encodes the specified ProtoUnderlineSpec message. Does not implicitly {@link ProtoUnderlineSpec.verify|verify} messages.
     * @param message ProtoUnderlineSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoUnderlineSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoUnderlineSpec message, length delimited. Does not implicitly {@link ProtoUnderlineSpec.verify|verify} messages.
     * @param message ProtoUnderlineSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoUnderlineSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoUnderlineSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoUnderlineSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoUnderlineSpec;

    /**
     * Decodes a ProtoUnderlineSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoUnderlineSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoUnderlineSpec;

    /**
     * Verifies a ProtoUnderlineSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoUnderlineSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoUnderlineSpec
     */
    public static fromObject(object: { [k: string]: any }): ProtoUnderlineSpec;

    /**
     * Creates a plain object from a ProtoUnderlineSpec message. Also converts values to other types if specified.
     * @param message ProtoUnderlineSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoUnderlineSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoUnderlineSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoUnderlineSpec
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedUnderlineSpec. */
export interface IProtoBoxedUnderlineSpec {

    /** ProtoBoxedUnderlineSpec value */
    value?: (IProtoUnderlineSpec|null);

    /** ProtoBoxedUnderlineSpec isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedUnderlineSpec. */
export class ProtoBoxedUnderlineSpec implements IProtoBoxedUnderlineSpec {

    /**
     * Constructs a new ProtoBoxedUnderlineSpec.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedUnderlineSpec);

    /** ProtoBoxedUnderlineSpec value. */
    public value?: (IProtoUnderlineSpec|null);

    /** ProtoBoxedUnderlineSpec isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedUnderlineSpec instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedUnderlineSpec instance
     */
    public static create(properties?: IProtoBoxedUnderlineSpec): ProtoBoxedUnderlineSpec;

    /**
     * Encodes the specified ProtoBoxedUnderlineSpec message. Does not implicitly {@link ProtoBoxedUnderlineSpec.verify|verify} messages.
     * @param message ProtoBoxedUnderlineSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedUnderlineSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedUnderlineSpec message, length delimited. Does not implicitly {@link ProtoBoxedUnderlineSpec.verify|verify} messages.
     * @param message ProtoBoxedUnderlineSpec message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedUnderlineSpec, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedUnderlineSpec message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedUnderlineSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedUnderlineSpec;

    /**
     * Decodes a ProtoBoxedUnderlineSpec message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedUnderlineSpec
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedUnderlineSpec;

    /**
     * Verifies a ProtoBoxedUnderlineSpec message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedUnderlineSpec message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedUnderlineSpec
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedUnderlineSpec;

    /**
     * Creates a plain object from a ProtoBoxedUnderlineSpec message. Also converts values to other types if specified.
     * @param message ProtoBoxedUnderlineSpec
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedUnderlineSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedUnderlineSpec to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedUnderlineSpec
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoCropSettings. */
export interface IProtoCropSettings {

    /** ProtoCropSettings x */
    x?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings y */
    y?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings width */
    width?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings height */
    height?: (IProtoBoxedMeasure|null);
}

/** Represents a ProtoCropSettings. */
export class ProtoCropSettings implements IProtoCropSettings {

    /**
     * Constructs a new ProtoCropSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoCropSettings);

    /** ProtoCropSettings x. */
    public x?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings y. */
    public y?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings width. */
    public width?: (IProtoBoxedMeasure|null);

    /** ProtoCropSettings height. */
    public height?: (IProtoBoxedMeasure|null);

    /**
     * Creates a new ProtoCropSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoCropSettings instance
     */
    public static create(properties?: IProtoCropSettings): ProtoCropSettings;

    /**
     * Encodes the specified ProtoCropSettings message. Does not implicitly {@link ProtoCropSettings.verify|verify} messages.
     * @param message ProtoCropSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoCropSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoCropSettings message, length delimited. Does not implicitly {@link ProtoCropSettings.verify|verify} messages.
     * @param message ProtoCropSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoCropSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoCropSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoCropSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoCropSettings;

    /**
     * Decodes a ProtoCropSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoCropSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoCropSettings;

    /**
     * Verifies a ProtoCropSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoCropSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoCropSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoCropSettings;

    /**
     * Creates a plain object from a ProtoCropSettings message. Also converts values to other types if specified.
     * @param message ProtoCropSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoCropSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoCropSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoCropSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoFlipSettings. */
export interface IProtoFlipSettings {

    /** ProtoFlipSettings x */
    x?: (boolean|null);

    /** ProtoFlipSettings y */
    y?: (boolean|null);
}

/** Represents a ProtoFlipSettings. */
export class ProtoFlipSettings implements IProtoFlipSettings {

    /**
     * Constructs a new ProtoFlipSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFlipSettings);

    /** ProtoFlipSettings x. */
    public x: boolean;

    /** ProtoFlipSettings y. */
    public y: boolean;

    /**
     * Creates a new ProtoFlipSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFlipSettings instance
     */
    public static create(properties?: IProtoFlipSettings): ProtoFlipSettings;

    /**
     * Encodes the specified ProtoFlipSettings message. Does not implicitly {@link ProtoFlipSettings.verify|verify} messages.
     * @param message ProtoFlipSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFlipSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFlipSettings message, length delimited. Does not implicitly {@link ProtoFlipSettings.verify|verify} messages.
     * @param message ProtoFlipSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFlipSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFlipSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFlipSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFlipSettings;

    /**
     * Decodes a ProtoFlipSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFlipSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFlipSettings;

    /**
     * Verifies a ProtoFlipSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFlipSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFlipSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoFlipSettings;

    /**
     * Creates a plain object from a ProtoFlipSettings message. Also converts values to other types if specified.
     * @param message ProtoFlipSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFlipSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFlipSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFlipSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoImageReferencePoint enum. */
export enum ProtoImageReferencePoint {
    REF_POINT_DO_NOT_USE_AT_ALL = 0,
    REF_POINT_BOTTOM_LEFT = 1,
    REF_POINT_TOP_LEFT = 2,
    REF_POINT_CENTER = 3,
    REF_POINT_BOTTOM_RIGHT = 4,
    REF_POINT_TOP_RIGHT = 5
}

/** Properties of a ProtoDocumentElement. */
export interface IProtoDocumentElement {

    /** ProtoDocumentElement parent */
    parent?: (IProtoDocumentElement|null);
}

/** Represents a ProtoDocumentElement. */
export class ProtoDocumentElement implements IProtoDocumentElement {

    /**
     * Constructs a new ProtoDocumentElement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoDocumentElement);

    /** ProtoDocumentElement parent. */
    public parent?: (IProtoDocumentElement|null);

    /**
     * Creates a new ProtoDocumentElement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoDocumentElement instance
     */
    public static create(properties?: IProtoDocumentElement): ProtoDocumentElement;

    /**
     * Encodes the specified ProtoDocumentElement message. Does not implicitly {@link ProtoDocumentElement.verify|verify} messages.
     * @param message ProtoDocumentElement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoDocumentElement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoDocumentElement message, length delimited. Does not implicitly {@link ProtoDocumentElement.verify|verify} messages.
     * @param message ProtoDocumentElement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoDocumentElement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoDocumentElement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoDocumentElement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoDocumentElement;

    /**
     * Decodes a ProtoDocumentElement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoDocumentElement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoDocumentElement;

    /**
     * Verifies a ProtoDocumentElement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoDocumentElement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoDocumentElement
     */
    public static fromObject(object: { [k: string]: any }): ProtoDocumentElement;

    /**
     * Creates a plain object from a ProtoDocumentElement message. Also converts values to other types if specified.
     * @param message ProtoDocumentElement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoDocumentElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoDocumentElement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoDocumentElement
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBranchDocumentElement. */
export interface IProtoBranchDocumentElement {

    /** ProtoBranchDocumentElement _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoBranchDocumentElement parent */
    parent?: (IProtoDocumentElement|null);
}

/** Represents a ProtoBranchDocumentElement. */
export class ProtoBranchDocumentElement implements IProtoBranchDocumentElement {

    /**
     * Constructs a new ProtoBranchDocumentElement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBranchDocumentElement);

    /** ProtoBranchDocumentElement _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoBranchDocumentElement parent. */
    public parent?: (IProtoDocumentElement|null);

    /**
     * Creates a new ProtoBranchDocumentElement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBranchDocumentElement instance
     */
    public static create(properties?: IProtoBranchDocumentElement): ProtoBranchDocumentElement;

    /**
     * Encodes the specified ProtoBranchDocumentElement message. Does not implicitly {@link ProtoBranchDocumentElement.verify|verify} messages.
     * @param message ProtoBranchDocumentElement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBranchDocumentElement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBranchDocumentElement message, length delimited. Does not implicitly {@link ProtoBranchDocumentElement.verify|verify} messages.
     * @param message ProtoBranchDocumentElement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBranchDocumentElement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBranchDocumentElement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBranchDocumentElement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBranchDocumentElement;

    /**
     * Decodes a ProtoBranchDocumentElement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBranchDocumentElement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBranchDocumentElement;

    /**
     * Verifies a ProtoBranchDocumentElement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBranchDocumentElement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBranchDocumentElement
     */
    public static fromObject(object: { [k: string]: any }): ProtoBranchDocumentElement;

    /**
     * Creates a plain object from a ProtoBranchDocumentElement message. Also converts values to other types if specified.
     * @param message ProtoBranchDocumentElement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBranchDocumentElement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBranchDocumentElement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBranchDocumentElement
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoLink. */
export interface IProtoLink {

    /** ProtoLink _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoLink url */
    url?: (string|null);
}

/** Represents a ProtoLink. */
export class ProtoLink implements IProtoLink {

    /**
     * Constructs a new ProtoLink.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoLink);

    /** ProtoLink _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoLink url. */
    public url: string;

    /**
     * Creates a new ProtoLink instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoLink instance
     */
    public static create(properties?: IProtoLink): ProtoLink;

    /**
     * Encodes the specified ProtoLink message. Does not implicitly {@link ProtoLink.verify|verify} messages.
     * @param message ProtoLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoLink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoLink message, length delimited. Does not implicitly {@link ProtoLink.verify|verify} messages.
     * @param message ProtoLink message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoLink, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoLink message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoLink;

    /**
     * Decodes a ProtoLink message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoLink
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoLink;

    /**
     * Verifies a ProtoLink message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoLink message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoLink
     */
    public static fromObject(object: { [k: string]: any }): ProtoLink;

    /**
     * Creates a plain object from a ProtoLink message. Also converts values to other types if specified.
     * @param message ProtoLink
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoLink, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoLink to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoLink
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoNumberType enum. */
export enum ProtoNumberType {
    ARABIC = 0,
    ROM_UPPERCASE = 1,
    ROM_LOWERCASE = 2,
    LETTER_UPPERCASE = 3,
    LETTER_LOWERCASE = 4
}

/** ProtoListLevelSettingType enum. */
export enum ProtoListLevelSettingType {
    UNNUMBERED = 0,
    NUMERIC = 1,
    IMAGE = 2
}

/** Properties of a ProtoListLevelSetting. */
export interface IProtoListLevelSetting {

    /** ProtoListLevelSetting listSettingName */
    listSettingName?: (string|null);

    /** ProtoListLevelSetting fontSize */
    fontSize?: (IProtoBoxedUint32|null);

    /** ProtoListLevelSetting type */
    type?: (ProtoListLevelSettingType|null);

    /** ProtoListLevelSetting level */
    level?: (number|null);

    /** ProtoListLevelSetting prefix */
    prefix?: (string|null);

    /** ProtoListLevelSetting suffix */
    suffix?: (string|null);

    /** ProtoListLevelSetting fixFontFamily */
    fixFontFamily?: (IProtoFont|null);

    /** ProtoListLevelSetting fixBold */
    fixBold?: (boolean|null);

    /** ProtoListLevelSetting fixItalic */
    fixItalic?: (boolean|null);

    /** ProtoListLevelSetting indentionWidth */
    indentionWidth?: (number|null);

    /** ProtoListLevelSetting color */
    color?: (IProtoColor|null);

    /** ProtoListLevelSetting imageName */
    imageName?: (string|null);

    /** ProtoListLevelSetting fontFamily */
    fontFamily?: (IProtoFont|null);

    /** ProtoListLevelSetting bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoListLevelSetting italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoListLevelSetting numberType */
    numberType?: (ProtoNumberType|null);

    /** ProtoListLevelSetting character */
    character?: (string|null);
}

/** Represents a ProtoListLevelSetting. */
export class ProtoListLevelSetting implements IProtoListLevelSetting {

    /**
     * Constructs a new ProtoListLevelSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoListLevelSetting);

    /** ProtoListLevelSetting listSettingName. */
    public listSettingName: string;

    /** ProtoListLevelSetting fontSize. */
    public fontSize?: (IProtoBoxedUint32|null);

    /** ProtoListLevelSetting type. */
    public type: ProtoListLevelSettingType;

    /** ProtoListLevelSetting level. */
    public level: number;

    /** ProtoListLevelSetting prefix. */
    public prefix: string;

    /** ProtoListLevelSetting suffix. */
    public suffix: string;

    /** ProtoListLevelSetting fixFontFamily. */
    public fixFontFamily?: (IProtoFont|null);

    /** ProtoListLevelSetting fixBold. */
    public fixBold: boolean;

    /** ProtoListLevelSetting fixItalic. */
    public fixItalic: boolean;

    /** ProtoListLevelSetting indentionWidth. */
    public indentionWidth: number;

    /** ProtoListLevelSetting color. */
    public color?: (IProtoColor|null);

    /** ProtoListLevelSetting imageName. */
    public imageName: string;

    /** ProtoListLevelSetting fontFamily. */
    public fontFamily?: (IProtoFont|null);

    /** ProtoListLevelSetting bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoListLevelSetting italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoListLevelSetting numberType. */
    public numberType: ProtoNumberType;

    /** ProtoListLevelSetting character. */
    public character: string;

    /**
     * Creates a new ProtoListLevelSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoListLevelSetting instance
     */
    public static create(properties?: IProtoListLevelSetting): ProtoListLevelSetting;

    /**
     * Encodes the specified ProtoListLevelSetting message. Does not implicitly {@link ProtoListLevelSetting.verify|verify} messages.
     * @param message ProtoListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoListLevelSetting message, length delimited. Does not implicitly {@link ProtoListLevelSetting.verify|verify} messages.
     * @param message ProtoListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoListLevelSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoListLevelSetting;

    /**
     * Decodes a ProtoListLevelSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoListLevelSetting;

    /**
     * Verifies a ProtoListLevelSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoListLevelSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoListLevelSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoListLevelSetting;

    /**
     * Creates a plain object from a ProtoListLevelSetting message. Also converts values to other types if specified.
     * @param message ProtoListLevelSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoListLevelSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoListLevelSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoListLevelSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoImageListLevelSetting. */
export interface IProtoImageListLevelSetting {

    /** ProtoImageListLevelSetting listSettingName */
    listSettingName?: (string|null);

    /** ProtoImageListLevelSetting fontSize */
    fontSize?: (IProtoBoxedUint32|null);

    /** ProtoImageListLevelSetting type */
    type?: (ProtoListLevelSettingType|null);

    /** ProtoImageListLevelSetting level */
    level?: (number|null);

    /** ProtoImageListLevelSetting prefix */
    prefix?: (string|null);

    /** ProtoImageListLevelSetting suffix */
    suffix?: (string|null);

    /** ProtoImageListLevelSetting fixFontFamily */
    fixFontFamily?: (IProtoFont|null);

    /** ProtoImageListLevelSetting fixBold */
    fixBold?: (boolean|null);

    /** ProtoImageListLevelSetting fixItalic */
    fixItalic?: (boolean|null);

    /** ProtoImageListLevelSetting indentionWidth */
    indentionWidth?: (number|null);

    /** ProtoImageListLevelSetting color */
    color?: (IProtoColor|null);

    /** ProtoImageListLevelSetting imageName */
    imageName?: (string|null);
}

/** Represents a ProtoImageListLevelSetting. */
export class ProtoImageListLevelSetting implements IProtoImageListLevelSetting {

    /**
     * Constructs a new ProtoImageListLevelSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoImageListLevelSetting);

    /** ProtoImageListLevelSetting listSettingName. */
    public listSettingName: string;

    /** ProtoImageListLevelSetting fontSize. */
    public fontSize?: (IProtoBoxedUint32|null);

    /** ProtoImageListLevelSetting type. */
    public type: ProtoListLevelSettingType;

    /** ProtoImageListLevelSetting level. */
    public level: number;

    /** ProtoImageListLevelSetting prefix. */
    public prefix: string;

    /** ProtoImageListLevelSetting suffix. */
    public suffix: string;

    /** ProtoImageListLevelSetting fixFontFamily. */
    public fixFontFamily?: (IProtoFont|null);

    /** ProtoImageListLevelSetting fixBold. */
    public fixBold: boolean;

    /** ProtoImageListLevelSetting fixItalic. */
    public fixItalic: boolean;

    /** ProtoImageListLevelSetting indentionWidth. */
    public indentionWidth: number;

    /** ProtoImageListLevelSetting color. */
    public color?: (IProtoColor|null);

    /** ProtoImageListLevelSetting imageName. */
    public imageName: string;

    /**
     * Creates a new ProtoImageListLevelSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoImageListLevelSetting instance
     */
    public static create(properties?: IProtoImageListLevelSetting): ProtoImageListLevelSetting;

    /**
     * Encodes the specified ProtoImageListLevelSetting message. Does not implicitly {@link ProtoImageListLevelSetting.verify|verify} messages.
     * @param message ProtoImageListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoImageListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoImageListLevelSetting message, length delimited. Does not implicitly {@link ProtoImageListLevelSetting.verify|verify} messages.
     * @param message ProtoImageListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoImageListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoImageListLevelSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoImageListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoImageListLevelSetting;

    /**
     * Decodes a ProtoImageListLevelSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoImageListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoImageListLevelSetting;

    /**
     * Verifies a ProtoImageListLevelSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoImageListLevelSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoImageListLevelSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoImageListLevelSetting;

    /**
     * Creates a plain object from a ProtoImageListLevelSetting message. Also converts values to other types if specified.
     * @param message ProtoImageListLevelSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoImageListLevelSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoImageListLevelSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoImageListLevelSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTextListLevelSetting. */
export interface IProtoTextListLevelSetting {

    /** ProtoTextListLevelSetting listSettingName */
    listSettingName?: (string|null);

    /** ProtoTextListLevelSetting fontSize */
    fontSize?: (IProtoBoxedUint32|null);

    /** ProtoTextListLevelSetting type */
    type?: (ProtoListLevelSettingType|null);

    /** ProtoTextListLevelSetting level */
    level?: (number|null);

    /** ProtoTextListLevelSetting prefix */
    prefix?: (string|null);

    /** ProtoTextListLevelSetting suffix */
    suffix?: (string|null);

    /** ProtoTextListLevelSetting fixFontFamily */
    fixFontFamily?: (IProtoFont|null);

    /** ProtoTextListLevelSetting fixBold */
    fixBold?: (boolean|null);

    /** ProtoTextListLevelSetting fixItalic */
    fixItalic?: (boolean|null);

    /** ProtoTextListLevelSetting indentionWidth */
    indentionWidth?: (number|null);

    /** ProtoTextListLevelSetting color */
    color?: (IProtoColor|null);

    /** ProtoTextListLevelSetting fontFamily */
    fontFamily?: (IProtoFont|null);

    /** ProtoTextListLevelSetting bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoTextListLevelSetting italic */
    italic?: (IProtoBoxedBool|null);
}

/** Represents a ProtoTextListLevelSetting. */
export class ProtoTextListLevelSetting implements IProtoTextListLevelSetting {

    /**
     * Constructs a new ProtoTextListLevelSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTextListLevelSetting);

    /** ProtoTextListLevelSetting listSettingName. */
    public listSettingName: string;

    /** ProtoTextListLevelSetting fontSize. */
    public fontSize?: (IProtoBoxedUint32|null);

    /** ProtoTextListLevelSetting type. */
    public type: ProtoListLevelSettingType;

    /** ProtoTextListLevelSetting level. */
    public level: number;

    /** ProtoTextListLevelSetting prefix. */
    public prefix: string;

    /** ProtoTextListLevelSetting suffix. */
    public suffix: string;

    /** ProtoTextListLevelSetting fixFontFamily. */
    public fixFontFamily?: (IProtoFont|null);

    /** ProtoTextListLevelSetting fixBold. */
    public fixBold: boolean;

    /** ProtoTextListLevelSetting fixItalic. */
    public fixItalic: boolean;

    /** ProtoTextListLevelSetting indentionWidth. */
    public indentionWidth: number;

    /** ProtoTextListLevelSetting color. */
    public color?: (IProtoColor|null);

    /** ProtoTextListLevelSetting fontFamily. */
    public fontFamily?: (IProtoFont|null);

    /** ProtoTextListLevelSetting bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoTextListLevelSetting italic. */
    public italic?: (IProtoBoxedBool|null);

    /**
     * Creates a new ProtoTextListLevelSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTextListLevelSetting instance
     */
    public static create(properties?: IProtoTextListLevelSetting): ProtoTextListLevelSetting;

    /**
     * Encodes the specified ProtoTextListLevelSetting message. Does not implicitly {@link ProtoTextListLevelSetting.verify|verify} messages.
     * @param message ProtoTextListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTextListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTextListLevelSetting message, length delimited. Does not implicitly {@link ProtoTextListLevelSetting.verify|verify} messages.
     * @param message ProtoTextListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTextListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTextListLevelSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTextListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTextListLevelSetting;

    /**
     * Decodes a ProtoTextListLevelSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTextListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTextListLevelSetting;

    /**
     * Verifies a ProtoTextListLevelSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTextListLevelSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTextListLevelSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoTextListLevelSetting;

    /**
     * Creates a plain object from a ProtoTextListLevelSetting message. Also converts values to other types if specified.
     * @param message ProtoTextListLevelSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTextListLevelSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTextListLevelSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTextListLevelSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoNumberListLevelSetting. */
export interface IProtoNumberListLevelSetting {

    /** ProtoNumberListLevelSetting listSettingName */
    listSettingName?: (string|null);

    /** ProtoNumberListLevelSetting fontSize */
    fontSize?: (IProtoBoxedUint32|null);

    /** ProtoNumberListLevelSetting type */
    type?: (ProtoListLevelSettingType|null);

    /** ProtoNumberListLevelSetting level */
    level?: (number|null);

    /** ProtoNumberListLevelSetting prefix */
    prefix?: (string|null);

    /** ProtoNumberListLevelSetting suffix */
    suffix?: (string|null);

    /** ProtoNumberListLevelSetting fixFontFamily */
    fixFontFamily?: (IProtoFont|null);

    /** ProtoNumberListLevelSetting fixBold */
    fixBold?: (boolean|null);

    /** ProtoNumberListLevelSetting fixItalic */
    fixItalic?: (boolean|null);

    /** ProtoNumberListLevelSetting indentionWidth */
    indentionWidth?: (number|null);

    /** ProtoNumberListLevelSetting color */
    color?: (IProtoColor|null);

    /** ProtoNumberListLevelSetting fontFamily */
    fontFamily?: (IProtoFont|null);

    /** ProtoNumberListLevelSetting bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoNumberListLevelSetting italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoNumberListLevelSetting numberType */
    numberType?: (ProtoNumberType|null);
}

/** Represents a ProtoNumberListLevelSetting. */
export class ProtoNumberListLevelSetting implements IProtoNumberListLevelSetting {

    /**
     * Constructs a new ProtoNumberListLevelSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoNumberListLevelSetting);

    /** ProtoNumberListLevelSetting listSettingName. */
    public listSettingName: string;

    /** ProtoNumberListLevelSetting fontSize. */
    public fontSize?: (IProtoBoxedUint32|null);

    /** ProtoNumberListLevelSetting type. */
    public type: ProtoListLevelSettingType;

    /** ProtoNumberListLevelSetting level. */
    public level: number;

    /** ProtoNumberListLevelSetting prefix. */
    public prefix: string;

    /** ProtoNumberListLevelSetting suffix. */
    public suffix: string;

    /** ProtoNumberListLevelSetting fixFontFamily. */
    public fixFontFamily?: (IProtoFont|null);

    /** ProtoNumberListLevelSetting fixBold. */
    public fixBold: boolean;

    /** ProtoNumberListLevelSetting fixItalic. */
    public fixItalic: boolean;

    /** ProtoNumberListLevelSetting indentionWidth. */
    public indentionWidth: number;

    /** ProtoNumberListLevelSetting color. */
    public color?: (IProtoColor|null);

    /** ProtoNumberListLevelSetting fontFamily. */
    public fontFamily?: (IProtoFont|null);

    /** ProtoNumberListLevelSetting bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoNumberListLevelSetting italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoNumberListLevelSetting numberType. */
    public numberType: ProtoNumberType;

    /**
     * Creates a new ProtoNumberListLevelSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoNumberListLevelSetting instance
     */
    public static create(properties?: IProtoNumberListLevelSetting): ProtoNumberListLevelSetting;

    /**
     * Encodes the specified ProtoNumberListLevelSetting message. Does not implicitly {@link ProtoNumberListLevelSetting.verify|verify} messages.
     * @param message ProtoNumberListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoNumberListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoNumberListLevelSetting message, length delimited. Does not implicitly {@link ProtoNumberListLevelSetting.verify|verify} messages.
     * @param message ProtoNumberListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoNumberListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoNumberListLevelSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoNumberListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoNumberListLevelSetting;

    /**
     * Decodes a ProtoNumberListLevelSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoNumberListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoNumberListLevelSetting;

    /**
     * Verifies a ProtoNumberListLevelSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoNumberListLevelSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoNumberListLevelSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoNumberListLevelSetting;

    /**
     * Creates a plain object from a ProtoNumberListLevelSetting message. Also converts values to other types if specified.
     * @param message ProtoNumberListLevelSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoNumberListLevelSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoNumberListLevelSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoNumberListLevelSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoUnnumberedListLevelSetting. */
export interface IProtoUnnumberedListLevelSetting {

    /** ProtoUnnumberedListLevelSetting listSettingName */
    listSettingName?: (string|null);

    /** ProtoUnnumberedListLevelSetting fontSize */
    fontSize?: (IProtoBoxedUint32|null);

    /** ProtoUnnumberedListLevelSetting type */
    type?: (ProtoListLevelSettingType|null);

    /** ProtoUnnumberedListLevelSetting level */
    level?: (number|null);

    /** ProtoUnnumberedListLevelSetting prefix */
    prefix?: (string|null);

    /** ProtoUnnumberedListLevelSetting suffix */
    suffix?: (string|null);

    /** ProtoUnnumberedListLevelSetting fixFontFamily */
    fixFontFamily?: (IProtoFont|null);

    /** ProtoUnnumberedListLevelSetting fixBold */
    fixBold?: (boolean|null);

    /** ProtoUnnumberedListLevelSetting fixItalic */
    fixItalic?: (boolean|null);

    /** ProtoUnnumberedListLevelSetting indentionWidth */
    indentionWidth?: (number|null);

    /** ProtoUnnumberedListLevelSetting color */
    color?: (IProtoColor|null);

    /** ProtoUnnumberedListLevelSetting fontFamily */
    fontFamily?: (IProtoFont|null);

    /** ProtoUnnumberedListLevelSetting bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoUnnumberedListLevelSetting italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoUnnumberedListLevelSetting character */
    character?: (string|null);
}

/** Represents a ProtoUnnumberedListLevelSetting. */
export class ProtoUnnumberedListLevelSetting implements IProtoUnnumberedListLevelSetting {

    /**
     * Constructs a new ProtoUnnumberedListLevelSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoUnnumberedListLevelSetting);

    /** ProtoUnnumberedListLevelSetting listSettingName. */
    public listSettingName: string;

    /** ProtoUnnumberedListLevelSetting fontSize. */
    public fontSize?: (IProtoBoxedUint32|null);

    /** ProtoUnnumberedListLevelSetting type. */
    public type: ProtoListLevelSettingType;

    /** ProtoUnnumberedListLevelSetting level. */
    public level: number;

    /** ProtoUnnumberedListLevelSetting prefix. */
    public prefix: string;

    /** ProtoUnnumberedListLevelSetting suffix. */
    public suffix: string;

    /** ProtoUnnumberedListLevelSetting fixFontFamily. */
    public fixFontFamily?: (IProtoFont|null);

    /** ProtoUnnumberedListLevelSetting fixBold. */
    public fixBold: boolean;

    /** ProtoUnnumberedListLevelSetting fixItalic. */
    public fixItalic: boolean;

    /** ProtoUnnumberedListLevelSetting indentionWidth. */
    public indentionWidth: number;

    /** ProtoUnnumberedListLevelSetting color. */
    public color?: (IProtoColor|null);

    /** ProtoUnnumberedListLevelSetting fontFamily. */
    public fontFamily?: (IProtoFont|null);

    /** ProtoUnnumberedListLevelSetting bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoUnnumberedListLevelSetting italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoUnnumberedListLevelSetting character. */
    public character: string;

    /**
     * Creates a new ProtoUnnumberedListLevelSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoUnnumberedListLevelSetting instance
     */
    public static create(properties?: IProtoUnnumberedListLevelSetting): ProtoUnnumberedListLevelSetting;

    /**
     * Encodes the specified ProtoUnnumberedListLevelSetting message. Does not implicitly {@link ProtoUnnumberedListLevelSetting.verify|verify} messages.
     * @param message ProtoUnnumberedListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoUnnumberedListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoUnnumberedListLevelSetting message, length delimited. Does not implicitly {@link ProtoUnnumberedListLevelSetting.verify|verify} messages.
     * @param message ProtoUnnumberedListLevelSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoUnnumberedListLevelSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoUnnumberedListLevelSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoUnnumberedListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoUnnumberedListLevelSetting;

    /**
     * Decodes a ProtoUnnumberedListLevelSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoUnnumberedListLevelSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoUnnumberedListLevelSetting;

    /**
     * Verifies a ProtoUnnumberedListLevelSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoUnnumberedListLevelSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoUnnumberedListLevelSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoUnnumberedListLevelSetting;

    /**
     * Creates a plain object from a ProtoUnnumberedListLevelSetting message. Also converts values to other types if specified.
     * @param message ProtoUnnumberedListLevelSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoUnnumberedListLevelSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoUnnumberedListLevelSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoUnnumberedListLevelSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoListSetting. */
export interface IProtoListSetting {

    /** ProtoListSetting parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoListSetting name */
    name?: (string|null);

    /** ProtoListSetting listLevelSettings */
    listLevelSettings?: (IProtoListLevelSetting[]|null);

    /** ProtoListSetting defaultListLevelSetting */
    defaultListLevelSetting?: (IProtoListLevelSetting|null);
}

/** Represents a ProtoListSetting. */
export class ProtoListSetting implements IProtoListSetting {

    /**
     * Constructs a new ProtoListSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoListSetting);

    /** ProtoListSetting parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoListSetting name. */
    public name: string;

    /** ProtoListSetting listLevelSettings. */
    public listLevelSettings: IProtoListLevelSetting[];

    /** ProtoListSetting defaultListLevelSetting. */
    public defaultListLevelSetting?: (IProtoListLevelSetting|null);

    /**
     * Creates a new ProtoListSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoListSetting instance
     */
    public static create(properties?: IProtoListSetting): ProtoListSetting;

    /**
     * Encodes the specified ProtoListSetting message. Does not implicitly {@link ProtoListSetting.verify|verify} messages.
     * @param message ProtoListSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoListSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoListSetting message, length delimited. Does not implicitly {@link ProtoListSetting.verify|verify} messages.
     * @param message ProtoListSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoListSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoListSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoListSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoListSetting;

    /**
     * Decodes a ProtoListSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoListSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoListSetting;

    /**
     * Verifies a ProtoListSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoListSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoListSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoListSetting;

    /**
     * Creates a plain object from a ProtoListSetting message. Also converts values to other types if specified.
     * @param message ProtoListSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoListSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoListSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoListSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBoxedListSetting. */
export interface IProtoBoxedListSetting {

    /** ProtoBoxedListSetting value */
    value?: (IProtoListSetting|null);

    /** ProtoBoxedListSetting isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedListSetting. */
export class ProtoBoxedListSetting implements IProtoBoxedListSetting {

    /**
     * Constructs a new ProtoBoxedListSetting.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedListSetting);

    /** ProtoBoxedListSetting value. */
    public value?: (IProtoListSetting|null);

    /** ProtoBoxedListSetting isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedListSetting instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedListSetting instance
     */
    public static create(properties?: IProtoBoxedListSetting): ProtoBoxedListSetting;

    /**
     * Encodes the specified ProtoBoxedListSetting message. Does not implicitly {@link ProtoBoxedListSetting.verify|verify} messages.
     * @param message ProtoBoxedListSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedListSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedListSetting message, length delimited. Does not implicitly {@link ProtoBoxedListSetting.verify|verify} messages.
     * @param message ProtoBoxedListSetting message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedListSetting, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedListSetting message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedListSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedListSetting;

    /**
     * Decodes a ProtoBoxedListSetting message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedListSetting
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedListSetting;

    /**
     * Verifies a ProtoBoxedListSetting message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedListSetting message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedListSetting
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedListSetting;

    /**
     * Creates a plain object from a ProtoBoxedListSetting message. Also converts values to other types if specified.
     * @param message ProtoBoxedListSetting
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedListSetting, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedListSetting to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedListSetting
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoNamedString. */
export interface IProtoNamedString {

    /** ProtoNamedString _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoNamedString parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoNamedString name */
    name?: (string|null);
}

/** Represents a ProtoNamedString. */
export class ProtoNamedString implements IProtoNamedString {

    /**
     * Constructs a new ProtoNamedString.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoNamedString);

    /** ProtoNamedString _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoNamedString parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoNamedString name. */
    public name: string;

    /**
     * Creates a new ProtoNamedString instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoNamedString instance
     */
    public static create(properties?: IProtoNamedString): ProtoNamedString;

    /**
     * Encodes the specified ProtoNamedString message. Does not implicitly {@link ProtoNamedString.verify|verify} messages.
     * @param message ProtoNamedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoNamedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoNamedString message, length delimited. Does not implicitly {@link ProtoNamedString.verify|verify} messages.
     * @param message ProtoNamedString message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoNamedString, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoNamedString message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoNamedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoNamedString;

    /**
     * Decodes a ProtoNamedString message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoNamedString
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoNamedString;

    /**
     * Verifies a ProtoNamedString message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoNamedString message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoNamedString
     */
    public static fromObject(object: { [k: string]: any }): ProtoNamedString;

    /**
     * Creates a plain object from a ProtoNamedString message. Also converts values to other types if specified.
     * @param message ProtoNamedString
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoNamedString, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoNamedString to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoNamedString
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoParagraph. */
export interface IProtoParagraph {

    /** ProtoParagraph _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoParagraph parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoParagraph format */
    format?: (IProtoParagraphFormat|null);

    /** ProtoParagraph overwrite */
    overwrite?: (IProtoParagraphFormat|null);
}

/** Represents a ProtoParagraph. */
export class ProtoParagraph implements IProtoParagraph {

    /**
     * Constructs a new ProtoParagraph.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoParagraph);

    /** ProtoParagraph _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoParagraph parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoParagraph format. */
    public format?: (IProtoParagraphFormat|null);

    /** ProtoParagraph overwrite. */
    public overwrite?: (IProtoParagraphFormat|null);

    /**
     * Creates a new ProtoParagraph instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoParagraph instance
     */
    public static create(properties?: IProtoParagraph): ProtoParagraph;

    /**
     * Encodes the specified ProtoParagraph message. Does not implicitly {@link ProtoParagraph.verify|verify} messages.
     * @param message ProtoParagraph message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoParagraph message, length delimited. Does not implicitly {@link ProtoParagraph.verify|verify} messages.
     * @param message ProtoParagraph message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoParagraph, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoParagraph message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoParagraph
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoParagraph;

    /**
     * Decodes a ProtoParagraph message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoParagraph
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoParagraph;

    /**
     * Verifies a ProtoParagraph message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoParagraph message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoParagraph
     */
    public static fromObject(object: { [k: string]: any }): ProtoParagraph;

    /**
     * Creates a plain object from a ProtoParagraph message. Also converts values to other types if specified.
     * @param message ProtoParagraph
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoParagraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoParagraph to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoParagraph
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoParagraphFormat. */
export interface IProtoParagraphFormat {

    /** ProtoParagraphFormat baseFormat */
    baseFormat?: (IProtoParagraphFormat|null);

    /** ProtoParagraphFormat name */
    name?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat default */
    "default"?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat font */
    font?: (IProtoBoxedFont|null);

    /** ProtoParagraphFormat bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat fontColor */
    fontColor?: (IProtoBoxedColor|null);

    /** ProtoParagraphFormat underline */
    underline?: (IProtoBoxedUnderlineSpec|null);

    /** ProtoParagraphFormat fontSize */
    fontSize?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat characterWidth */
    characterWidth?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat characterSpacing */
    characterSpacing?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat lineFeed */
    lineFeed?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat alignment */
    alignment?: (IProtoBoxedHorizontalAlignment|null);

    /** ProtoParagraphFormat indentionWidth */
    indentionWidth?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat indentionLevel */
    indentionLevel?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat spaceAbove */
    spaceAbove?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat spaceBelow */
    spaceBelow?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat widowSetting */
    widowSetting?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat orphanSetting */
    orphanSetting?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat widowPriority */
    widowPriority?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat strikethrough */
    strikethrough?: (IProtoBoxedStrikethroughSpec|null);

    /** ProtoParagraphFormat superscriptSubscript */
    superscriptSubscript?: (IProtoBoxedSPBMode|null);

    /** ProtoParagraphFormat backgroundColor */
    backgroundColor?: (IProtoBoxedColor|null);

    /** ProtoParagraphFormat listSetting */
    listSetting?: (IProtoBoxedListSetting|null);

    /** ProtoParagraphFormat hyphenation */
    hyphenation?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat preNamedString */
    preNamedString?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat postNamedString */
    postNamedString?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat semanticType */
    semanticType?: (IProtoBoxedString|null);
}

/** Represents a ProtoParagraphFormat. */
export class ProtoParagraphFormat implements IProtoParagraphFormat {

    /**
     * Constructs a new ProtoParagraphFormat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoParagraphFormat);

    /** ProtoParagraphFormat baseFormat. */
    public baseFormat?: (IProtoParagraphFormat|null);

    /** ProtoParagraphFormat name. */
    public name?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat default. */
    public default?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat font. */
    public font?: (IProtoBoxedFont|null);

    /** ProtoParagraphFormat bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat fontColor. */
    public fontColor?: (IProtoBoxedColor|null);

    /** ProtoParagraphFormat underline. */
    public underline?: (IProtoBoxedUnderlineSpec|null);

    /** ProtoParagraphFormat fontSize. */
    public fontSize?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat characterWidth. */
    public characterWidth?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat characterSpacing. */
    public characterSpacing?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat lineFeed. */
    public lineFeed?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat alignment. */
    public alignment?: (IProtoBoxedHorizontalAlignment|null);

    /** ProtoParagraphFormat indentionWidth. */
    public indentionWidth?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat indentionLevel. */
    public indentionLevel?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat spaceAbove. */
    public spaceAbove?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat spaceBelow. */
    public spaceBelow?: (IProtoBoxedMeasure|null);

    /** ProtoParagraphFormat widowSetting. */
    public widowSetting?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat orphanSetting. */
    public orphanSetting?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat widowPriority. */
    public widowPriority?: (IProtoBoxedInt32|null);

    /** ProtoParagraphFormat strikethrough. */
    public strikethrough?: (IProtoBoxedStrikethroughSpec|null);

    /** ProtoParagraphFormat superscriptSubscript. */
    public superscriptSubscript?: (IProtoBoxedSPBMode|null);

    /** ProtoParagraphFormat backgroundColor. */
    public backgroundColor?: (IProtoBoxedColor|null);

    /** ProtoParagraphFormat listSetting. */
    public listSetting?: (IProtoBoxedListSetting|null);

    /** ProtoParagraphFormat hyphenation. */
    public hyphenation?: (IProtoBoxedBool|null);

    /** ProtoParagraphFormat preNamedString. */
    public preNamedString?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat postNamedString. */
    public postNamedString?: (IProtoBoxedString|null);

    /** ProtoParagraphFormat semanticType. */
    public semanticType?: (IProtoBoxedString|null);

    /**
     * Creates a new ProtoParagraphFormat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoParagraphFormat instance
     */
    public static create(properties?: IProtoParagraphFormat): ProtoParagraphFormat;

    /**
     * Encodes the specified ProtoParagraphFormat message. Does not implicitly {@link ProtoParagraphFormat.verify|verify} messages.
     * @param message ProtoParagraphFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoParagraphFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoParagraphFormat message, length delimited. Does not implicitly {@link ProtoParagraphFormat.verify|verify} messages.
     * @param message ProtoParagraphFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoParagraphFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoParagraphFormat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoParagraphFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoParagraphFormat;

    /**
     * Decodes a ProtoParagraphFormat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoParagraphFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoParagraphFormat;

    /**
     * Verifies a ProtoParagraphFormat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoParagraphFormat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoParagraphFormat
     */
    public static fromObject(object: { [k: string]: any }): ProtoParagraphFormat;

    /**
     * Creates a plain object from a ProtoParagraphFormat message. Also converts values to other types if specified.
     * @param message ProtoParagraphFormat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoParagraphFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoParagraphFormat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoParagraphFormat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSection. */
export interface IProtoSection {

    /** ProtoSection _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoSection parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoSection pageWidth */
    pageWidth?: (IProtoMeasure|null);

    /** ProtoSection pageDepth */
    pageDepth?: (IProtoMeasure|null);

    /** ProtoSection columnSettings */
    columnSettings?: (IProtoColumnSettings|null);
}

/** Represents a ProtoSection. */
export class ProtoSection implements IProtoSection {

    /**
     * Constructs a new ProtoSection.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSection);

    /** ProtoSection _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoSection parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoSection pageWidth. */
    public pageWidth?: (IProtoMeasure|null);

    /** ProtoSection pageDepth. */
    public pageDepth?: (IProtoMeasure|null);

    /** ProtoSection columnSettings. */
    public columnSettings?: (IProtoColumnSettings|null);

    /**
     * Creates a new ProtoSection instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSection instance
     */
    public static create(properties?: IProtoSection): ProtoSection;

    /**
     * Encodes the specified ProtoSection message. Does not implicitly {@link ProtoSection.verify|verify} messages.
     * @param message ProtoSection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSection message, length delimited. Does not implicitly {@link ProtoSection.verify|verify} messages.
     * @param message ProtoSection message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSection, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSection message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSection;

    /**
     * Decodes a ProtoSection message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSection
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSection;

    /**
     * Verifies a ProtoSection message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSection message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSection
     */
    public static fromObject(object: { [k: string]: any }): ProtoSection;

    /**
     * Creates a plain object from a ProtoSection message. Also converts values to other types if specified.
     * @param message ProtoSection
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSection to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSection
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSpaceVertically. */
export interface IProtoSpaceVertically {

    /** ProtoSpaceVertically parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoSpaceVertically space */
    space?: (IProtoMeasure|null);

    /** ProtoSpaceVertically comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoSpaceVertically. */
export class ProtoSpaceVertically implements IProtoSpaceVertically {

    /**
     * Constructs a new ProtoSpaceVertically.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSpaceVertically);

    /** ProtoSpaceVertically parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoSpaceVertically space. */
    public space?: (IProtoMeasure|null);

    /** ProtoSpaceVertically comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoSpaceVertically instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSpaceVertically instance
     */
    public static create(properties?: IProtoSpaceVertically): ProtoSpaceVertically;

    /**
     * Encodes the specified ProtoSpaceVertically message. Does not implicitly {@link ProtoSpaceVertically.verify|verify} messages.
     * @param message ProtoSpaceVertically message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSpaceVertically, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSpaceVertically message, length delimited. Does not implicitly {@link ProtoSpaceVertically.verify|verify} messages.
     * @param message ProtoSpaceVertically message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSpaceVertically, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSpaceVertically message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSpaceVertically
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSpaceVertically;

    /**
     * Decodes a ProtoSpaceVertically message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSpaceVertically
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSpaceVertically;

    /**
     * Verifies a ProtoSpaceVertically message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSpaceVertically message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSpaceVertically
     */
    public static fromObject(object: { [k: string]: any }): ProtoSpaceVertically;

    /**
     * Creates a plain object from a ProtoSpaceVertically message. Also converts values to other types if specified.
     * @param message ProtoSpaceVertically
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSpaceVertically, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSpaceVertically to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSpaceVertically
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoSpan. */
export interface IProtoSpan {

    /** ProtoSpan _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoSpan parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoSpan bold */
    bold?: (IProtoBoxedBool|null);

    /** ProtoSpan italic */
    italic?: (IProtoBoxedBool|null);

    /** ProtoSpan color */
    color?: (IProtoColor|null);

    /** ProtoSpan subscript */
    subscript?: (IProtoBoxedBool|null);

    /** ProtoSpan superscript */
    superscript?: (IProtoBoxedBool|null);

    /** ProtoSpan underline */
    underline?: (IProtoBoxedBool|null);

    /** ProtoSpan strikethrough */
    strikethrough?: (IProtoBoxedBool|null);
}

/** Represents a ProtoSpan. */
export class ProtoSpan implements IProtoSpan {

    /**
     * Constructs a new ProtoSpan.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSpan);

    /** ProtoSpan _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoSpan parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoSpan bold. */
    public bold?: (IProtoBoxedBool|null);

    /** ProtoSpan italic. */
    public italic?: (IProtoBoxedBool|null);

    /** ProtoSpan color. */
    public color?: (IProtoColor|null);

    /** ProtoSpan subscript. */
    public subscript?: (IProtoBoxedBool|null);

    /** ProtoSpan superscript. */
    public superscript?: (IProtoBoxedBool|null);

    /** ProtoSpan underline. */
    public underline?: (IProtoBoxedBool|null);

    /** ProtoSpan strikethrough. */
    public strikethrough?: (IProtoBoxedBool|null);

    /**
     * Creates a new ProtoSpan instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSpan instance
     */
    public static create(properties?: IProtoSpan): ProtoSpan;

    /**
     * Encodes the specified ProtoSpan message. Does not implicitly {@link ProtoSpan.verify|verify} messages.
     * @param message ProtoSpan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSpan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSpan message, length delimited. Does not implicitly {@link ProtoSpan.verify|verify} messages.
     * @param message ProtoSpan message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSpan, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSpan message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSpan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSpan;

    /**
     * Decodes a ProtoSpan message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSpan
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSpan;

    /**
     * Verifies a ProtoSpan message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSpan message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSpan
     */
    public static fromObject(object: { [k: string]: any }): ProtoSpan;

    /**
     * Creates a plain object from a ProtoSpan message. Also converts values to other types if specified.
     * @param message ProtoSpan
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSpan, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSpan to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSpan
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTable. */
export interface IProtoTable {

    /** ProtoTable _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTable parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTable settings */
    settings?: (IProtoTableSettings|null);

    /** ProtoTable configName */
    configName?: (string|null);

    /** ProtoTable carryOver */
    carryOver?: (INode|null);

    /** ProtoTable subTotal */
    subTotal?: (INode|null);

    /** ProtoTable comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoTable. */
export class ProtoTable implements IProtoTable {

    /**
     * Constructs a new ProtoTable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTable);

    /** ProtoTable _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTable parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTable settings. */
    public settings?: (IProtoTableSettings|null);

    /** ProtoTable configName. */
    public configName: string;

    /** ProtoTable carryOver. */
    public carryOver?: (INode|null);

    /** ProtoTable subTotal. */
    public subTotal?: (INode|null);

    /** ProtoTable comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoTable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTable instance
     */
    public static create(properties?: IProtoTable): ProtoTable;

    /**
     * Encodes the specified ProtoTable message. Does not implicitly {@link ProtoTable.verify|verify} messages.
     * @param message ProtoTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTable message, length delimited. Does not implicitly {@link ProtoTable.verify|verify} messages.
     * @param message ProtoTable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTable;

    /**
     * Decodes a ProtoTable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTable;

    /**
     * Verifies a ProtoTable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTable
     */
    public static fromObject(object: { [k: string]: any }): ProtoTable;

    /**
     * Creates a plain object from a ProtoTable message. Also converts values to other types if specified.
     * @param message ProtoTable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableConfig. */
export interface IProtoTableConfig {

    /** ProtoTableConfig parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableConfig settings */
    settings?: (IProtoTableSettings|null);

    /** ProtoTableConfig configName */
    configName?: (string|null);
}

/** Represents a ProtoTableConfig. */
export class ProtoTableConfig implements IProtoTableConfig {

    /**
     * Constructs a new ProtoTableConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableConfig);

    /** ProtoTableConfig parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableConfig settings. */
    public settings?: (IProtoTableSettings|null);

    /** ProtoTableConfig configName. */
    public configName: string;

    /**
     * Creates a new ProtoTableConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableConfig instance
     */
    public static create(properties?: IProtoTableConfig): ProtoTableConfig;

    /**
     * Encodes the specified ProtoTableConfig message. Does not implicitly {@link ProtoTableConfig.verify|verify} messages.
     * @param message ProtoTableConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableConfig message, length delimited. Does not implicitly {@link ProtoTableConfig.verify|verify} messages.
     * @param message ProtoTableConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableConfig;

    /**
     * Decodes a ProtoTableConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableConfig;

    /**
     * Verifies a ProtoTableConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableConfig;

    /**
     * Creates a plain object from a ProtoTableConfig message. Also converts values to other types if specified.
     * @param message ProtoTableConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableSettings. */
export interface IProtoTableSettings {

    /** ProtoTableSettings xOffset */
    xOffset?: (IProtoMeasure|null);

    /** ProtoTableSettings leftMeasure */
    leftMeasure?: (IProtoBoxedBool|null);

    /** ProtoTableSettings width */
    width?: (IProtoMeasure|null);

    /** ProtoTableSettings repeatHeader */
    repeatHeader?: (IProtoBoxedUint32|null);

    /** ProtoTableSettings ws */
    ws?: (IProtoTableWS|null);
}

/** Represents a ProtoTableSettings. */
export class ProtoTableSettings implements IProtoTableSettings {

    /**
     * Constructs a new ProtoTableSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableSettings);

    /** ProtoTableSettings xOffset. */
    public xOffset?: (IProtoMeasure|null);

    /** ProtoTableSettings leftMeasure. */
    public leftMeasure?: (IProtoBoxedBool|null);

    /** ProtoTableSettings width. */
    public width?: (IProtoMeasure|null);

    /** ProtoTableSettings repeatHeader. */
    public repeatHeader?: (IProtoBoxedUint32|null);

    /** ProtoTableSettings ws. */
    public ws?: (IProtoTableWS|null);

    /**
     * Creates a new ProtoTableSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableSettings instance
     */
    public static create(properties?: IProtoTableSettings): ProtoTableSettings;

    /**
     * Encodes the specified ProtoTableSettings message. Does not implicitly {@link ProtoTableSettings.verify|verify} messages.
     * @param message ProtoTableSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableSettings message, length delimited. Does not implicitly {@link ProtoTableSettings.verify|verify} messages.
     * @param message ProtoTableSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableSettings;

    /**
     * Decodes a ProtoTableSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableSettings;

    /**
     * Verifies a ProtoTableSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableSettings;

    /**
     * Creates a plain object from a ProtoTableSettings message. Also converts values to other types if specified.
     * @param message ProtoTableSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoTableContentGroupType enum. */
export enum ProtoTableContentGroupType {
    BODY = 0,
    HEADER = 1,
    FOOTER = 2,
    SUB_HEADER = 3
}

/** Properties of a ProtoBoxedTableContentGroupType. */
export interface IProtoBoxedTableContentGroupType {

    /** ProtoBoxedTableContentGroupType value */
    value?: (ProtoTableContentGroupType|null);

    /** ProtoBoxedTableContentGroupType isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedTableContentGroupType. */
export class ProtoBoxedTableContentGroupType implements IProtoBoxedTableContentGroupType {

    /**
     * Constructs a new ProtoBoxedTableContentGroupType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedTableContentGroupType);

    /** ProtoBoxedTableContentGroupType value. */
    public value: ProtoTableContentGroupType;

    /** ProtoBoxedTableContentGroupType isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedTableContentGroupType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedTableContentGroupType instance
     */
    public static create(properties?: IProtoBoxedTableContentGroupType): ProtoBoxedTableContentGroupType;

    /**
     * Encodes the specified ProtoBoxedTableContentGroupType message. Does not implicitly {@link ProtoBoxedTableContentGroupType.verify|verify} messages.
     * @param message ProtoBoxedTableContentGroupType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedTableContentGroupType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedTableContentGroupType message, length delimited. Does not implicitly {@link ProtoBoxedTableContentGroupType.verify|verify} messages.
     * @param message ProtoBoxedTableContentGroupType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedTableContentGroupType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedTableContentGroupType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedTableContentGroupType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedTableContentGroupType;

    /**
     * Decodes a ProtoBoxedTableContentGroupType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedTableContentGroupType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedTableContentGroupType;

    /**
     * Verifies a ProtoBoxedTableContentGroupType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedTableContentGroupType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedTableContentGroupType
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedTableContentGroupType;

    /**
     * Creates a plain object from a ProtoBoxedTableContentGroupType message. Also converts values to other types if specified.
     * @param message ProtoBoxedTableContentGroupType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedTableContentGroupType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedTableContentGroupType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedTableContentGroupType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableContentGroup. */
export interface IProtoTableContentGroup {

    /** ProtoTableContentGroup _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTableContentGroup parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableContentGroup settings */
    settings?: (IProtoTableContentGroupSettings|null);
}

/** Represents a ProtoTableContentGroup. */
export class ProtoTableContentGroup implements IProtoTableContentGroup {

    /**
     * Constructs a new ProtoTableContentGroup.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableContentGroup);

    /** ProtoTableContentGroup _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTableContentGroup parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableContentGroup settings. */
    public settings?: (IProtoTableContentGroupSettings|null);

    /**
     * Creates a new ProtoTableContentGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableContentGroup instance
     */
    public static create(properties?: IProtoTableContentGroup): ProtoTableContentGroup;

    /**
     * Encodes the specified ProtoTableContentGroup message. Does not implicitly {@link ProtoTableContentGroup.verify|verify} messages.
     * @param message ProtoTableContentGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableContentGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableContentGroup message, length delimited. Does not implicitly {@link ProtoTableContentGroup.verify|verify} messages.
     * @param message ProtoTableContentGroup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableContentGroup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableContentGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableContentGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableContentGroup;

    /**
     * Decodes a ProtoTableContentGroup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableContentGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableContentGroup;

    /**
     * Verifies a ProtoTableContentGroup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableContentGroup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableContentGroup
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableContentGroup;

    /**
     * Creates a plain object from a ProtoTableContentGroup message. Also converts values to other types if specified.
     * @param message ProtoTableContentGroup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableContentGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableContentGroup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableContentGroup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableContentGroupConfig. */
export interface IProtoTableContentGroupConfig {

    /** ProtoTableContentGroupConfig parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableContentGroupConfig settings */
    settings?: (IProtoTableContentGroupSettings|null);

    /** ProtoTableContentGroupConfig configName */
    configName?: (string|null);
}

/** Represents a ProtoTableContentGroupConfig. */
export class ProtoTableContentGroupConfig implements IProtoTableContentGroupConfig {

    /**
     * Constructs a new ProtoTableContentGroupConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableContentGroupConfig);

    /** ProtoTableContentGroupConfig parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableContentGroupConfig settings. */
    public settings?: (IProtoTableContentGroupSettings|null);

    /** ProtoTableContentGroupConfig configName. */
    public configName: string;

    /**
     * Creates a new ProtoTableContentGroupConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableContentGroupConfig instance
     */
    public static create(properties?: IProtoTableContentGroupConfig): ProtoTableContentGroupConfig;

    /**
     * Encodes the specified ProtoTableContentGroupConfig message. Does not implicitly {@link ProtoTableContentGroupConfig.verify|verify} messages.
     * @param message ProtoTableContentGroupConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableContentGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableContentGroupConfig message, length delimited. Does not implicitly {@link ProtoTableContentGroupConfig.verify|verify} messages.
     * @param message ProtoTableContentGroupConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableContentGroupConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableContentGroupConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableContentGroupConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableContentGroupConfig;

    /**
     * Decodes a ProtoTableContentGroupConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableContentGroupConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableContentGroupConfig;

    /**
     * Verifies a ProtoTableContentGroupConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableContentGroupConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableContentGroupConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableContentGroupConfig;

    /**
     * Creates a plain object from a ProtoTableContentGroupConfig message. Also converts values to other types if specified.
     * @param message ProtoTableContentGroupConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableContentGroupConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableContentGroupConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableContentGroupConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableContentGroupSettings. */
export interface IProtoTableContentGroupSettings {

    /** ProtoTableContentGroupSettings contentGroupType */
    contentGroupType?: (IProtoBoxedTableContentGroupType|null);

    /** ProtoTableContentGroupSettings backgroundColors */
    backgroundColors?: (IProtoColor[]|null);

    /** ProtoTableContentGroupSettings ws */
    ws?: (IProtoTableWS|null);
}

/** Represents a ProtoTableContentGroupSettings. */
export class ProtoTableContentGroupSettings implements IProtoTableContentGroupSettings {

    /**
     * Constructs a new ProtoTableContentGroupSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableContentGroupSettings);

    /** ProtoTableContentGroupSettings contentGroupType. */
    public contentGroupType?: (IProtoBoxedTableContentGroupType|null);

    /** ProtoTableContentGroupSettings backgroundColors. */
    public backgroundColors: IProtoColor[];

    /** ProtoTableContentGroupSettings ws. */
    public ws?: (IProtoTableWS|null);

    /**
     * Creates a new ProtoTableContentGroupSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableContentGroupSettings instance
     */
    public static create(properties?: IProtoTableContentGroupSettings): ProtoTableContentGroupSettings;

    /**
     * Encodes the specified ProtoTableContentGroupSettings message. Does not implicitly {@link ProtoTableContentGroupSettings.verify|verify} messages.
     * @param message ProtoTableContentGroupSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableContentGroupSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableContentGroupSettings message, length delimited. Does not implicitly {@link ProtoTableContentGroupSettings.verify|verify} messages.
     * @param message ProtoTableContentGroupSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableContentGroupSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableContentGroupSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableContentGroupSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableContentGroupSettings;

    /**
     * Decodes a ProtoTableContentGroupSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableContentGroupSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableContentGroupSettings;

    /**
     * Verifies a ProtoTableContentGroupSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableContentGroupSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableContentGroupSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableContentGroupSettings;

    /**
     * Creates a plain object from a ProtoTableContentGroupSettings message. Also converts values to other types if specified.
     * @param message ProtoTableContentGroupSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableContentGroupSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableContentGroupSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableContentGroupSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableRow. */
export interface IProtoTableRow {

    /** ProtoTableRow _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTableRow parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableRow settings */
    settings?: (IProtoTableRowSettings|null);

    /** ProtoTableRow rowConfigNumber */
    rowConfigNumber?: (IProtoBoxedUint32|null);
}

/** Represents a ProtoTableRow. */
export class ProtoTableRow implements IProtoTableRow {

    /**
     * Constructs a new ProtoTableRow.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableRow);

    /** ProtoTableRow _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTableRow parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableRow settings. */
    public settings?: (IProtoTableRowSettings|null);

    /** ProtoTableRow rowConfigNumber. */
    public rowConfigNumber?: (IProtoBoxedUint32|null);

    /**
     * Creates a new ProtoTableRow instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableRow instance
     */
    public static create(properties?: IProtoTableRow): ProtoTableRow;

    /**
     * Encodes the specified ProtoTableRow message. Does not implicitly {@link ProtoTableRow.verify|verify} messages.
     * @param message ProtoTableRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableRow message, length delimited. Does not implicitly {@link ProtoTableRow.verify|verify} messages.
     * @param message ProtoTableRow message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableRow, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableRow message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableRow;

    /**
     * Decodes a ProtoTableRow message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableRow
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableRow;

    /**
     * Verifies a ProtoTableRow message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableRow message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableRow
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableRow;

    /**
     * Creates a plain object from a ProtoTableRow message. Also converts values to other types if specified.
     * @param message ProtoTableRow
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableRow to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableRow
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableRowConfig. */
export interface IProtoTableRowConfig {

    /** ProtoTableRowConfig parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableRowConfig settings */
    settings?: (IProtoTableRowSettings|null);

    /** ProtoTableRowConfig configName */
    configName?: (string|null);

    /** ProtoTableRowConfig rowHeader */
    rowHeader?: (string|null);

    /** ProtoTableRowConfig rowFooter */
    rowFooter?: (string|null);
}

/** Represents a ProtoTableRowConfig. */
export class ProtoTableRowConfig implements IProtoTableRowConfig {

    /**
     * Constructs a new ProtoTableRowConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableRowConfig);

    /** ProtoTableRowConfig parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableRowConfig settings. */
    public settings?: (IProtoTableRowSettings|null);

    /** ProtoTableRowConfig configName. */
    public configName: string;

    /** ProtoTableRowConfig rowHeader. */
    public rowHeader: string;

    /** ProtoTableRowConfig rowFooter. */
    public rowFooter: string;

    /**
     * Creates a new ProtoTableRowConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableRowConfig instance
     */
    public static create(properties?: IProtoTableRowConfig): ProtoTableRowConfig;

    /**
     * Encodes the specified ProtoTableRowConfig message. Does not implicitly {@link ProtoTableRowConfig.verify|verify} messages.
     * @param message ProtoTableRowConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableRowConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableRowConfig message, length delimited. Does not implicitly {@link ProtoTableRowConfig.verify|verify} messages.
     * @param message ProtoTableRowConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableRowConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableRowConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableRowConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableRowConfig;

    /**
     * Decodes a ProtoTableRowConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableRowConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableRowConfig;

    /**
     * Verifies a ProtoTableRowConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableRowConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableRowConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableRowConfig;

    /**
     * Creates a plain object from a ProtoTableRowConfig message. Also converts values to other types if specified.
     * @param message ProtoTableRowConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableRowConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableRowConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableRowConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableRowSettings. */
export interface IProtoTableRowSettings {

    /** ProtoTableRowSettings minHeight */
    minHeight?: (IProtoMeasure|null);

    /** ProtoTableRowSettings ws */
    ws?: (IProtoTableWS|null);
}

/** Represents a ProtoTableRowSettings. */
export class ProtoTableRowSettings implements IProtoTableRowSettings {

    /**
     * Constructs a new ProtoTableRowSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableRowSettings);

    /** ProtoTableRowSettings minHeight. */
    public minHeight?: (IProtoMeasure|null);

    /** ProtoTableRowSettings ws. */
    public ws?: (IProtoTableWS|null);

    /**
     * Creates a new ProtoTableRowSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableRowSettings instance
     */
    public static create(properties?: IProtoTableRowSettings): ProtoTableRowSettings;

    /**
     * Encodes the specified ProtoTableRowSettings message. Does not implicitly {@link ProtoTableRowSettings.verify|verify} messages.
     * @param message ProtoTableRowSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableRowSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableRowSettings message, length delimited. Does not implicitly {@link ProtoTableRowSettings.verify|verify} messages.
     * @param message ProtoTableRowSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableRowSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableRowSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableRowSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableRowSettings;

    /**
     * Decodes a ProtoTableRowSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableRowSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableRowSettings;

    /**
     * Verifies a ProtoTableRowSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableRowSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableRowSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableRowSettings;

    /**
     * Creates a plain object from a ProtoTableRowSettings message. Also converts values to other types if specified.
     * @param message ProtoTableRowSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableRowSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableRowSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableRowSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoTableCellType enum. */
export enum ProtoTableCellType {
    TABLE_CELL_BODY = 0,
    TABLE_CELL_ROW_HEADER = 1,
    TABLE_CELL_ROW_FOOTER = 2
}

/** Properties of a ProtoBoxedTableCellType. */
export interface IProtoBoxedTableCellType {

    /** ProtoBoxedTableCellType value */
    value?: (ProtoTableCellType|null);

    /** ProtoBoxedTableCellType isNull */
    isNull?: (boolean|null);
}

/** Represents a ProtoBoxedTableCellType. */
export class ProtoBoxedTableCellType implements IProtoBoxedTableCellType {

    /**
     * Constructs a new ProtoBoxedTableCellType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBoxedTableCellType);

    /** ProtoBoxedTableCellType value. */
    public value: ProtoTableCellType;

    /** ProtoBoxedTableCellType isNull. */
    public isNull: boolean;

    /**
     * Creates a new ProtoBoxedTableCellType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBoxedTableCellType instance
     */
    public static create(properties?: IProtoBoxedTableCellType): ProtoBoxedTableCellType;

    /**
     * Encodes the specified ProtoBoxedTableCellType message. Does not implicitly {@link ProtoBoxedTableCellType.verify|verify} messages.
     * @param message ProtoBoxedTableCellType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBoxedTableCellType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBoxedTableCellType message, length delimited. Does not implicitly {@link ProtoBoxedTableCellType.verify|verify} messages.
     * @param message ProtoBoxedTableCellType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBoxedTableCellType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBoxedTableCellType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBoxedTableCellType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBoxedTableCellType;

    /**
     * Decodes a ProtoBoxedTableCellType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBoxedTableCellType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBoxedTableCellType;

    /**
     * Verifies a ProtoBoxedTableCellType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBoxedTableCellType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBoxedTableCellType
     */
    public static fromObject(object: { [k: string]: any }): ProtoBoxedTableCellType;

    /**
     * Creates a plain object from a ProtoBoxedTableCellType message. Also converts values to other types if specified.
     * @param message ProtoBoxedTableCellType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBoxedTableCellType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBoxedTableCellType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBoxedTableCellType
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableCell. */
export interface IProtoTableCell {

    /** ProtoTableCell _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTableCell parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableCell settings */
    settings?: (IProtoTableCellSettings|null);

    /** ProtoTableCell cellConfigNumber */
    cellConfigNumber?: (IProtoBoxedUint32|null);

    /** ProtoTableCell mergedLeft */
    mergedLeft?: (boolean|null);

    /** ProtoTableCell mergedUp */
    mergedUp?: (boolean|null);
}

/** Represents a ProtoTableCell. */
export class ProtoTableCell implements IProtoTableCell {

    /**
     * Constructs a new ProtoTableCell.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableCell);

    /** ProtoTableCell _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTableCell parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableCell settings. */
    public settings?: (IProtoTableCellSettings|null);

    /** ProtoTableCell cellConfigNumber. */
    public cellConfigNumber?: (IProtoBoxedUint32|null);

    /** ProtoTableCell mergedLeft. */
    public mergedLeft: boolean;

    /** ProtoTableCell mergedUp. */
    public mergedUp: boolean;

    /**
     * Creates a new ProtoTableCell instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableCell instance
     */
    public static create(properties?: IProtoTableCell): ProtoTableCell;

    /**
     * Encodes the specified ProtoTableCell message. Does not implicitly {@link ProtoTableCell.verify|verify} messages.
     * @param message ProtoTableCell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableCell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableCell message, length delimited. Does not implicitly {@link ProtoTableCell.verify|verify} messages.
     * @param message ProtoTableCell message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableCell, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableCell message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableCell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableCell;

    /**
     * Decodes a ProtoTableCell message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableCell
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableCell;

    /**
     * Verifies a ProtoTableCell message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableCell message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableCell
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableCell;

    /**
     * Creates a plain object from a ProtoTableCell message. Also converts values to other types if specified.
     * @param message ProtoTableCell
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableCell, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableCell to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableCell
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableCellConfig. */
export interface IProtoTableCellConfig {

    /** ProtoTableCellConfig parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTableCellConfig settings */
    settings?: (IProtoTableCellSettings|null);

    /** ProtoTableCellConfig configName */
    configName?: (string|null);

    /** ProtoTableCellConfig cellType */
    cellType?: (IProtoBoxedTableCellType|null);
}

/** Represents a ProtoTableCellConfig. */
export class ProtoTableCellConfig implements IProtoTableCellConfig {

    /**
     * Constructs a new ProtoTableCellConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableCellConfig);

    /** ProtoTableCellConfig parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTableCellConfig settings. */
    public settings?: (IProtoTableCellSettings|null);

    /** ProtoTableCellConfig configName. */
    public configName: string;

    /** ProtoTableCellConfig cellType. */
    public cellType?: (IProtoBoxedTableCellType|null);

    /**
     * Creates a new ProtoTableCellConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableCellConfig instance
     */
    public static create(properties?: IProtoTableCellConfig): ProtoTableCellConfig;

    /**
     * Encodes the specified ProtoTableCellConfig message. Does not implicitly {@link ProtoTableCellConfig.verify|verify} messages.
     * @param message ProtoTableCellConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableCellConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableCellConfig message, length delimited. Does not implicitly {@link ProtoTableCellConfig.verify|verify} messages.
     * @param message ProtoTableCellConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableCellConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableCellConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableCellConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableCellConfig;

    /**
     * Decodes a ProtoTableCellConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableCellConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableCellConfig;

    /**
     * Verifies a ProtoTableCellConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableCellConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableCellConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableCellConfig;

    /**
     * Creates a plain object from a ProtoTableCellConfig message. Also converts values to other types if specified.
     * @param message ProtoTableCellConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableCellConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableCellConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableCellConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableCellSettings. */
export interface IProtoTableCellSettings {

    /** ProtoTableCellSettings width */
    width?: (IProtoMeasure|null);

    /** ProtoTableCellSettings align */
    align?: (IProtoBoxedHorizontalAlignment|null);

    /** ProtoTableCellSettings valign */
    valign?: (IProtoBoxedVerticalAlignment|null);

    /** ProtoTableCellSettings backgroundColor */
    backgroundColor?: (IProtoColor|null);

    /** ProtoTableCellSettings padding */
    padding?: (IProtoSideMeasures|null);

    /** ProtoTableCellSettings border */
    border?: (IProtoSideBorders|null);

    /** ProtoTableCellSettings margin */
    margin?: (IProtoSideMeasures|null);

    /** ProtoTableCellSettings rotation */
    rotation?: (IProtoBoxedDouble|null);

    /** ProtoTableCellSettings defaultParagraphFormat */
    defaultParagraphFormat?: (IProtoBoxedString|null);
}

/** Represents a ProtoTableCellSettings. */
export class ProtoTableCellSettings implements IProtoTableCellSettings {

    /**
     * Constructs a new ProtoTableCellSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableCellSettings);

    /** ProtoTableCellSettings width. */
    public width?: (IProtoMeasure|null);

    /** ProtoTableCellSettings align. */
    public align?: (IProtoBoxedHorizontalAlignment|null);

    /** ProtoTableCellSettings valign. */
    public valign?: (IProtoBoxedVerticalAlignment|null);

    /** ProtoTableCellSettings backgroundColor. */
    public backgroundColor?: (IProtoColor|null);

    /** ProtoTableCellSettings padding. */
    public padding?: (IProtoSideMeasures|null);

    /** ProtoTableCellSettings border. */
    public border?: (IProtoSideBorders|null);

    /** ProtoTableCellSettings margin. */
    public margin?: (IProtoSideMeasures|null);

    /** ProtoTableCellSettings rotation. */
    public rotation?: (IProtoBoxedDouble|null);

    /** ProtoTableCellSettings defaultParagraphFormat. */
    public defaultParagraphFormat?: (IProtoBoxedString|null);

    /**
     * Creates a new ProtoTableCellSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableCellSettings instance
     */
    public static create(properties?: IProtoTableCellSettings): ProtoTableCellSettings;

    /**
     * Encodes the specified ProtoTableCellSettings message. Does not implicitly {@link ProtoTableCellSettings.verify|verify} messages.
     * @param message ProtoTableCellSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableCellSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableCellSettings message, length delimited. Does not implicitly {@link ProtoTableCellSettings.verify|verify} messages.
     * @param message ProtoTableCellSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableCellSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableCellSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableCellSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableCellSettings;

    /**
     * Decodes a ProtoTableCellSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableCellSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableCellSettings;

    /**
     * Verifies a ProtoTableCellSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableCellSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableCellSettings
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableCellSettings;

    /**
     * Creates a plain object from a ProtoTableCellSettings message. Also converts values to other types if specified.
     * @param message ProtoTableCellSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableCellSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableCellSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableCellSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTableWS. */
export interface IProtoTableWS {

    /** ProtoTableWS minLinesBefore */
    minLinesBefore?: (number|null);

    /** ProtoTableWS minLinesAfter */
    minLinesAfter?: (number|null);

    /** ProtoTableWS priority */
    priority?: (number|null);
}

/** Represents a ProtoTableWS. */
export class ProtoTableWS implements IProtoTableWS {

    /**
     * Constructs a new ProtoTableWS.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTableWS);

    /** ProtoTableWS minLinesBefore. */
    public minLinesBefore: number;

    /** ProtoTableWS minLinesAfter. */
    public minLinesAfter: number;

    /** ProtoTableWS priority. */
    public priority: number;

    /**
     * Creates a new ProtoTableWS instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTableWS instance
     */
    public static create(properties?: IProtoTableWS): ProtoTableWS;

    /**
     * Encodes the specified ProtoTableWS message. Does not implicitly {@link ProtoTableWS.verify|verify} messages.
     * @param message ProtoTableWS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTableWS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTableWS message, length delimited. Does not implicitly {@link ProtoTableWS.verify|verify} messages.
     * @param message ProtoTableWS message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTableWS, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTableWS message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTableWS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTableWS;

    /**
     * Decodes a ProtoTableWS message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTableWS
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTableWS;

    /**
     * Verifies a ProtoTableWS message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTableWS message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTableWS
     */
    public static fromObject(object: { [k: string]: any }): ProtoTableWS;

    /**
     * Creates a plain object from a ProtoTableWS message. Also converts values to other types if specified.
     * @param message ProtoTableWS
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTableWS, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTableWS to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTableWS
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoText. */
export interface IProtoText {

    /** ProtoText parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoText content */
    content?: (string|null);
}

/** Represents a ProtoText. */
export class ProtoText implements IProtoText {

    /**
     * Constructs a new ProtoText.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoText);

    /** ProtoText parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoText content. */
    public content: string;

    /**
     * Creates a new ProtoText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoText instance
     */
    public static create(properties?: IProtoText): ProtoText;

    /**
     * Encodes the specified ProtoText message. Does not implicitly {@link ProtoText.verify|verify} messages.
     * @param message ProtoText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoText message, length delimited. Does not implicitly {@link ProtoText.verify|verify} messages.
     * @param message ProtoText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoText;

    /**
     * Decodes a ProtoText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoText;

    /**
     * Verifies a ProtoText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoText
     */
    public static fromObject(object: { [k: string]: any }): ProtoText;

    /**
     * Creates a plain object from a ProtoText message. Also converts values to other types if specified.
     * @param message ProtoText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoText
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBarcode. */
export interface IProtoBarcode {

    /** ProtoBarcode type */
    type?: (ProtoBarcodeType|null);

    /** ProtoBarcode x */
    x?: (IProtoMeasure|null);

    /** ProtoBarcode y */
    y?: (IProtoMeasure|null);

    /** ProtoBarcode referencePoint */
    referencePoint?: (ProtoImageReferencePoint|null);

    /** ProtoBarcode rotation */
    rotation?: (number|null);

    /** ProtoBarcode width */
    width?: (IProtoMeasure|null);

    /** ProtoBarcode height */
    height?: (IProtoMeasure|null);

    /** ProtoBarcode padding */
    padding?: (IProtoMeasure|null);

    /** ProtoBarcode data */
    data?: (string|null);

    /** ProtoBarcode positionAbsolute */
    positionAbsolute?: (boolean|null);
}

/** Represents a ProtoBarcode. */
export class ProtoBarcode implements IProtoBarcode {

    /**
     * Constructs a new ProtoBarcode.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBarcode);

    /** ProtoBarcode type. */
    public type: ProtoBarcodeType;

    /** ProtoBarcode x. */
    public x?: (IProtoMeasure|null);

    /** ProtoBarcode y. */
    public y?: (IProtoMeasure|null);

    /** ProtoBarcode referencePoint. */
    public referencePoint: ProtoImageReferencePoint;

    /** ProtoBarcode rotation. */
    public rotation: number;

    /** ProtoBarcode width. */
    public width?: (IProtoMeasure|null);

    /** ProtoBarcode height. */
    public height?: (IProtoMeasure|null);

    /** ProtoBarcode padding. */
    public padding?: (IProtoMeasure|null);

    /** ProtoBarcode data. */
    public data: string;

    /** ProtoBarcode positionAbsolute. */
    public positionAbsolute: boolean;

    /**
     * Creates a new ProtoBarcode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBarcode instance
     */
    public static create(properties?: IProtoBarcode): ProtoBarcode;

    /**
     * Encodes the specified ProtoBarcode message. Does not implicitly {@link ProtoBarcode.verify|verify} messages.
     * @param message ProtoBarcode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBarcode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBarcode message, length delimited. Does not implicitly {@link ProtoBarcode.verify|verify} messages.
     * @param message ProtoBarcode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBarcode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBarcode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBarcode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBarcode;

    /**
     * Decodes a ProtoBarcode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBarcode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBarcode;

    /**
     * Verifies a ProtoBarcode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBarcode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBarcode
     */
    public static fromObject(object: { [k: string]: any }): ProtoBarcode;

    /**
     * Creates a plain object from a ProtoBarcode message. Also converts values to other types if specified.
     * @param message ProtoBarcode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBarcode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBarcode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBarcode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBrickReference. */
export interface IProtoBrickReference {

    /** ProtoBrickReference internName */
    internName?: (string|null);

    /** ProtoBrickReference version */
    version?: (number|null);
}

/** Represents a ProtoBrickReference. */
export class ProtoBrickReference implements IProtoBrickReference {

    /**
     * Constructs a new ProtoBrickReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBrickReference);

    /** ProtoBrickReference internName. */
    public internName: string;

    /** ProtoBrickReference version. */
    public version: number;

    /**
     * Creates a new ProtoBrickReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBrickReference instance
     */
    public static create(properties?: IProtoBrickReference): ProtoBrickReference;

    /**
     * Encodes the specified ProtoBrickReference message. Does not implicitly {@link ProtoBrickReference.verify|verify} messages.
     * @param message ProtoBrickReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBrickReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBrickReference message, length delimited. Does not implicitly {@link ProtoBrickReference.verify|verify} messages.
     * @param message ProtoBrickReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBrickReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBrickReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBrickReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBrickReference;

    /**
     * Decodes a ProtoBrickReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBrickReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBrickReference;

    /**
     * Verifies a ProtoBrickReference message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBrickReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBrickReference
     */
    public static fromObject(object: { [k: string]: any }): ProtoBrickReference;

    /**
     * Creates a plain object from a ProtoBrickReference message. Also converts values to other types if specified.
     * @param message ProtoBrickReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBrickReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBrickReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBrickReference
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoBrick. */
export interface IProtoBrick {

    /** ProtoBrick _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoBrick parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoBrick id */
    id?: (number|Long|null);

    /** ProtoBrick internName */
    internName?: (string|null);

    /** ProtoBrick uuid */
    uuid?: (string|null);

    /** ProtoBrick editable */
    editable?: (boolean|null);

    /** ProtoBrick comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoBrick. */
export class ProtoBrick implements IProtoBrick {

    /**
     * Constructs a new ProtoBrick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoBrick);

    /** ProtoBrick _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoBrick parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoBrick id. */
    public id: (number|Long);

    /** ProtoBrick internName. */
    public internName: string;

    /** ProtoBrick uuid. */
    public uuid: string;

    /** ProtoBrick editable. */
    public editable: boolean;

    /** ProtoBrick comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoBrick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoBrick instance
     */
    public static create(properties?: IProtoBrick): ProtoBrick;

    /**
     * Encodes the specified ProtoBrick message. Does not implicitly {@link ProtoBrick.verify|verify} messages.
     * @param message ProtoBrick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoBrick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoBrick message, length delimited. Does not implicitly {@link ProtoBrick.verify|verify} messages.
     * @param message ProtoBrick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoBrick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoBrick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoBrick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoBrick;

    /**
     * Decodes a ProtoBrick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoBrick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoBrick;

    /**
     * Verifies a ProtoBrick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoBrick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoBrick
     */
    public static fromObject(object: { [k: string]: any }): ProtoBrick;

    /**
     * Creates a plain object from a ProtoBrick message. Also converts values to other types if specified.
     * @param message ProtoBrick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoBrick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoBrick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoBrick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTemplate. */
export interface IProtoTemplate {

    /** ProtoTemplate _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTemplate parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTemplate containerMapping */
    containerMapping?: ({ [k: string]: string }|null);

    /** ProtoTemplate comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);

    /** ProtoTemplate uuid */
    uuid?: (string|null);

    /** ProtoTemplate columnBalancing */
    columnBalancing?: (ColumnBalancing|null);

    /** ProtoTemplate semanticType */
    semanticType?: (IProtoBoxedString|null);
}

/** Represents a ProtoTemplate. */
export class ProtoTemplate implements IProtoTemplate {

    /**
     * Constructs a new ProtoTemplate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTemplate);

    /** ProtoTemplate _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTemplate parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTemplate containerMapping. */
    public containerMapping: { [k: string]: string };

    /** ProtoTemplate comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /** ProtoTemplate uuid. */
    public uuid: string;

    /** ProtoTemplate columnBalancing. */
    public columnBalancing: ColumnBalancing;

    /** ProtoTemplate semanticType. */
    public semanticType?: (IProtoBoxedString|null);

    /**
     * Creates a new ProtoTemplate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTemplate instance
     */
    public static create(properties?: IProtoTemplate): ProtoTemplate;

    /**
     * Encodes the specified ProtoTemplate message. Does not implicitly {@link ProtoTemplate.verify|verify} messages.
     * @param message ProtoTemplate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTemplate message, length delimited. Does not implicitly {@link ProtoTemplate.verify|verify} messages.
     * @param message ProtoTemplate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTemplate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTemplate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTemplate;

    /**
     * Decodes a ProtoTemplate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTemplate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTemplate;

    /**
     * Verifies a ProtoTemplate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTemplate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTemplate
     */
    public static fromObject(object: { [k: string]: any }): ProtoTemplate;

    /**
     * Creates a plain object from a ProtoTemplate message. Also converts values to other types if specified.
     * @param message ProtoTemplate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTemplate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTemplate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ColumnBalancing enum. */
export enum ColumnBalancing {
    NO_BALANCING = 0,
    BALANCING = 1,
    BALANCING_INHERITED = 2
}

/** Properties of a ProtoHeader. */
export interface IProtoHeader {

    /** ProtoHeader _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoHeader parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoHeader uuid */
    uuid?: (string|null);

    /** ProtoHeader comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoHeader. */
export class ProtoHeader implements IProtoHeader {

    /**
     * Constructs a new ProtoHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoHeader);

    /** ProtoHeader _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoHeader parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoHeader uuid. */
    public uuid: string;

    /** ProtoHeader comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoHeader instance
     */
    public static create(properties?: IProtoHeader): ProtoHeader;

    /**
     * Encodes the specified ProtoHeader message. Does not implicitly {@link ProtoHeader.verify|verify} messages.
     * @param message ProtoHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoHeader message, length delimited. Does not implicitly {@link ProtoHeader.verify|verify} messages.
     * @param message ProtoHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoHeader;

    /**
     * Decodes a ProtoHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoHeader;

    /**
     * Verifies a ProtoHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoHeader
     */
    public static fromObject(object: { [k: string]: any }): ProtoHeader;

    /**
     * Creates a plain object from a ProtoHeader message. Also converts values to other types if specified.
     * @param message ProtoHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoHeader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoFooter. */
export interface IProtoFooter {

    /** ProtoFooter _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoFooter parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoFooter uuid */
    uuid?: (string|null);

    /** ProtoFooter comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoFooter. */
export class ProtoFooter implements IProtoFooter {

    /**
     * Constructs a new ProtoFooter.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFooter);

    /** ProtoFooter _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoFooter parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoFooter uuid. */
    public uuid: string;

    /** ProtoFooter comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoFooter instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFooter instance
     */
    public static create(properties?: IProtoFooter): ProtoFooter;

    /**
     * Encodes the specified ProtoFooter message. Does not implicitly {@link ProtoFooter.verify|verify} messages.
     * @param message ProtoFooter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFooter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFooter message, length delimited. Does not implicitly {@link ProtoFooter.verify|verify} messages.
     * @param message ProtoFooter message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFooter, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFooter message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFooter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFooter;

    /**
     * Decodes a ProtoFooter message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFooter
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFooter;

    /**
     * Verifies a ProtoFooter message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFooter message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFooter
     */
    public static fromObject(object: { [k: string]: any }): ProtoFooter;

    /**
     * Creates a plain object from a ProtoFooter message. Also converts values to other types if specified.
     * @param message ProtoFooter
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFooter, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFooter to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFooter
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Node. */
export interface INode {

    /** Node children */
    children?: (INode[]|null);

    /** Node listSetting */
    listSetting?: (IProtoListSetting|null);

    /** Node colorDef */
    colorDef?: (IProtoColorDef|null);

    /** Node brick */
    brick?: (IProtoBrick|null);

    /** Node template */
    template?: (IProtoTemplate|null);

    /** Node formatted */
    formatted?: (IProtoFormatted|null);

    /** Node image */
    image?: (IProtoImage|null);

    /** Node paragraphFormat */
    paragraphFormat?: (IProtoParagraphFormat|null);

    /** Node textBrick */
    textBrick?: (IProtoTextBrick|null);

    /** Node text */
    text?: (IProtoText|null);

    /** Node linebreak */
    linebreak?: (IProtoLinebreak|null);

    /** Node spaceVertically */
    spaceVertically?: (IProtoSpaceVertically|null);

    /** Node footer */
    footer?: (IProtoFooter|null);

    /** Node header */
    header?: (IProtoHeader|null);

    /** Node table */
    table?: (IProtoTable|null);

    /** Node tableRow */
    tableRow?: (IProtoTableRow|null);

    /** Node tableCell */
    tableCell?: (IProtoTableCell|null);

    /** Node cDef */
    cDef?: (IProtoCDef|null);

    /** Node pDef */
    pDef?: (IProtoPDef|null);

    /** Node applyCDef */
    applyCDef?: (IProtoApplyProtoCDef|null);

    /** Node applyPDef */
    applyPDef?: (IProtoApplyProtoPDef|null);

    /** Node applyPtConfig */
    applyPtConfig?: (IProtoApplyPtConfig|null);

    /** Node applyUlConfig */
    applyUlConfig?: (IProtoApplyUlConfig|null);

    /** Node ptConfig */
    ptConfig?: (IProtoPtConfig|null);

    /** Node ulConfig */
    ulConfig?: (IProtoUlConfig|null);

    /** Node newPage */
    newPage?: (IProtoNewPage|null);

    /** Node variable */
    variable?: (IProtoVariable|null);

    /** Node namedString */
    namedString?: (IProtoNamedString|null);

    /** Node paragraph */
    paragraph?: (IProtoParagraph|null);

    /** Node section */
    section?: (IProtoSection|null);

    /** Node span */
    span?: (IProtoSpan|null);

    /** Node link */
    link?: (IProtoLink|null);

    /** Node directory */
    directory?: (IProtoDirectory|null);

    /** Node tableContentGroup */
    tableContentGroup?: (IProtoTableContentGroup|null);

    /** Node tableConfig */
    tableConfig?: (IProtoTableConfig|null);

    /** Node tableCellConfig */
    tableCellConfig?: (IProtoTableCellConfig|null);

    /** Node tableRowConfig */
    tableRowConfig?: (IProtoTableRowConfig|null);

    /** Node tableContentGroupConfig */
    tableContentGroupConfig?: (IProtoTableContentGroupConfig|null);

    /** Node brickReference */
    brickReference?: (IProtoBrickReference|null);

    /** Node indentation */
    indentation?: (IProtoIndentation|null);

    /** Node barcode */
    barcode?: (IProtoBarcode|null);

    /** Node wsArea */
    wsArea?: (IProtoWsArea|null);

    /** Node carryOver */
    carryOver?: (IProtoCarryOver|null);

    /** Node subTotal */
    subTotal?: (IProtoSubTotal|null);

    /** Node loop */
    loop?: (IProtoLoop|null);

    /** Node loopEntry */
    loopEntry?: (IProtoLoopEntry|null);

    /** Node rule */
    rule?: (IProtoRule|null);

    /** Node layout */
    layout?: (IProtoLayout|null);

    /** Node advancedIllustrationArea */
    advancedIllustrationArea?: (IProtoAdvancedIllustrationArea|null);

    /** Node adjustHorizontally */
    adjustHorizontally?: (IProtoAdjustHorizontally|null);

    /** Node doctypeScript */
    doctypeScript?: (IProtoDoctypeScript|null);

    /** Node dmScript */
    dmScript?: (IProtoDmScript|null);
}

/** Represents a Node. */
export class Node implements INode {

    /**
     * Constructs a new Node.
     * @param [properties] Properties to set
     */
    constructor(properties?: INode);

    /** Node children. */
    public children: INode[];

    /** Node listSetting. */
    public listSetting?: (IProtoListSetting|null);

    /** Node colorDef. */
    public colorDef?: (IProtoColorDef|null);

    /** Node brick. */
    public brick?: (IProtoBrick|null);

    /** Node template. */
    public template?: (IProtoTemplate|null);

    /** Node formatted. */
    public formatted?: (IProtoFormatted|null);

    /** Node image. */
    public image?: (IProtoImage|null);

    /** Node paragraphFormat. */
    public paragraphFormat?: (IProtoParagraphFormat|null);

    /** Node textBrick. */
    public textBrick?: (IProtoTextBrick|null);

    /** Node text. */
    public text?: (IProtoText|null);

    /** Node linebreak. */
    public linebreak?: (IProtoLinebreak|null);

    /** Node spaceVertically. */
    public spaceVertically?: (IProtoSpaceVertically|null);

    /** Node footer. */
    public footer?: (IProtoFooter|null);

    /** Node header. */
    public header?: (IProtoHeader|null);

    /** Node table. */
    public table?: (IProtoTable|null);

    /** Node tableRow. */
    public tableRow?: (IProtoTableRow|null);

    /** Node tableCell. */
    public tableCell?: (IProtoTableCell|null);

    /** Node cDef. */
    public cDef?: (IProtoCDef|null);

    /** Node pDef. */
    public pDef?: (IProtoPDef|null);

    /** Node applyCDef. */
    public applyCDef?: (IProtoApplyProtoCDef|null);

    /** Node applyPDef. */
    public applyPDef?: (IProtoApplyProtoPDef|null);

    /** Node applyPtConfig. */
    public applyPtConfig?: (IProtoApplyPtConfig|null);

    /** Node applyUlConfig. */
    public applyUlConfig?: (IProtoApplyUlConfig|null);

    /** Node ptConfig. */
    public ptConfig?: (IProtoPtConfig|null);

    /** Node ulConfig. */
    public ulConfig?: (IProtoUlConfig|null);

    /** Node newPage. */
    public newPage?: (IProtoNewPage|null);

    /** Node variable. */
    public variable?: (IProtoVariable|null);

    /** Node namedString. */
    public namedString?: (IProtoNamedString|null);

    /** Node paragraph. */
    public paragraph?: (IProtoParagraph|null);

    /** Node section. */
    public section?: (IProtoSection|null);

    /** Node span. */
    public span?: (IProtoSpan|null);

    /** Node link. */
    public link?: (IProtoLink|null);

    /** Node directory. */
    public directory?: (IProtoDirectory|null);

    /** Node tableContentGroup. */
    public tableContentGroup?: (IProtoTableContentGroup|null);

    /** Node tableConfig. */
    public tableConfig?: (IProtoTableConfig|null);

    /** Node tableCellConfig. */
    public tableCellConfig?: (IProtoTableCellConfig|null);

    /** Node tableRowConfig. */
    public tableRowConfig?: (IProtoTableRowConfig|null);

    /** Node tableContentGroupConfig. */
    public tableContentGroupConfig?: (IProtoTableContentGroupConfig|null);

    /** Node brickReference. */
    public brickReference?: (IProtoBrickReference|null);

    /** Node indentation. */
    public indentation?: (IProtoIndentation|null);

    /** Node barcode. */
    public barcode?: (IProtoBarcode|null);

    /** Node wsArea. */
    public wsArea?: (IProtoWsArea|null);

    /** Node carryOver. */
    public carryOver?: (IProtoCarryOver|null);

    /** Node subTotal. */
    public subTotal?: (IProtoSubTotal|null);

    /** Node loop. */
    public loop?: (IProtoLoop|null);

    /** Node loopEntry. */
    public loopEntry?: (IProtoLoopEntry|null);

    /** Node rule. */
    public rule?: (IProtoRule|null);

    /** Node layout. */
    public layout?: (IProtoLayout|null);

    /** Node advancedIllustrationArea. */
    public advancedIllustrationArea?: (IProtoAdvancedIllustrationArea|null);

    /** Node adjustHorizontally. */
    public adjustHorizontally?: (IProtoAdjustHorizontally|null);

    /** Node doctypeScript. */
    public doctypeScript?: (IProtoDoctypeScript|null);

    /** Node dmScript. */
    public dmScript?: (IProtoDmScript|null);

    /** Node object. */
    public object?: ("listSetting"|"colorDef"|"brick"|"template"|"formatted"|"image"|"paragraphFormat"|"textBrick"|"text"|"linebreak"|"spaceVertically"|"footer"|"header"|"table"|"tableRow"|"tableCell"|"cDef"|"pDef"|"applyCDef"|"applyPDef"|"applyPtConfig"|"applyUlConfig"|"ptConfig"|"ulConfig"|"newPage"|"variable"|"namedString"|"paragraph"|"section"|"span"|"link"|"directory"|"tableContentGroup"|"tableConfig"|"tableCellConfig"|"tableRowConfig"|"tableContentGroupConfig"|"brickReference"|"indentation"|"barcode"|"wsArea"|"carryOver"|"subTotal"|"loop"|"loopEntry"|"rule"|"layout"|"advancedIllustrationArea"|"adjustHorizontally"|"doctypeScript"|"dmScript");

    /**
     * Creates a new Node instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Node instance
     */
    public static create(properties?: INode): Node;

    /**
     * Encodes the specified Node message. Does not implicitly {@link Node.verify|verify} messages.
     * @param message Node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Node message, length delimited. Does not implicitly {@link Node.verify|verify} messages.
     * @param message Node message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Node message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Node;

    /**
     * Decodes a Node message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Node
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Node;

    /**
     * Verifies a Node message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Node message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Node
     */
    public static fromObject(object: { [k: string]: any }): Node;

    /**
     * Creates a plain object from a Node message. Also converts values to other types if specified.
     * @param message Node
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Node to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Node
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** NodeType enum. */
export enum NodeType {
    DOCUMENT_ELEMENT_BRANCH_DOCUMENT_ELEMENT = 0,
    DOCUMENT_ELEMENT_BRICK_REFERENCE = 1,
    DOCUMENT_ELEMENT_BRICK = 2,
    DOCUMENT_ELEMENT_DOCUMENT_ELEMENT = 3,
    DOCUMENT_ELEMENT_LINEBREAK = 4,
    DOCUMENT_ELEMENT_LIST_SETTING = 6,
    DOCUMENT_ELEMENT_PARAGRAPH_FORMAT = 7,
    DOCUMENT_ELEMENT_PARAGRAPH = 8,
    DOCUMENT_ELEMENT_SECTION = 9,
    DOCUMENT_ELEMENT_SPAN = 10,
    DOCUMENT_ELEMENT_TABLE = 11,
    DOCUMENT_ELEMENT_TABLE_CELL = 12,
    DOCUMENT_ELEMENT_TABLE_ROW = 13,
    DOCUMENT_ELEMENT_TEMPLATE = 15,
    DOCUMENT_ELEMENT_TEXT = 16,
    DOCUMENT_ELEMENT_COLOR_DEF = 19,
    DOCUMENT_ELEMENT_IMAGE = 30,
    DOCUMENT_ELEMENT_NAMED_STRING = 34,
    DOCUMENT_ELEMENT_TABLE_CONTENT_GROUP = 35,
    DOCUMENT_ELEMENT_TABLE_CONFIG = 36,
    DOCUMENT_ELEMENT_TABLE_CELL_CONFIG = 37,
    DOCUMENT_ELEMENT_TABLE_ROW_CONFIG = 38,
    DOCUMENT_ELEMENT_TABLE_CONTENT_GROUP_CONFIG = 39,
    DOCUMENT_ELEMENT_LINK = 40,
    DOCUMENT_ELEMENT_DIRECTORY = 41,
    DOCUMENT_ELEMENT_TEXT_BRICK = 42,
    DOCUMENT_ELEMENT_VARIABLE = 44,
    DOCUMENT_ELEMENT_SPACE_VERTICALLY = 45,
    DOCUMENT_ELEMENT_FORMATTED = 46,
    DOCUMENT_ELEMENT_APPLY_C_DEF = 47,
    DOCUMENT_ELEMENT_APPLY_P_DEF = 48,
    DOCUMENT_ELEMENT_APPLY_PT_CONFIG = 49,
    DOCUMENT_ELEMENT_APPLY_UL_CONFIG = 50,
    DOCUMENT_ELEMENT_C_DEF = 51,
    DOCUMENT_ELEMENT_P_DEF = 52,
    DOCUMENT_ELEMENT_PT_CONFIG = 53,
    DOCUMENT_ELEMENT_UL_CONFIG = 54,
    DOCUMENT_ELEMENT_NEW_PAGE = 55,
    DOCUMENT_ELEMENT_HEADER = 56,
    DOCUMENT_ELEMENT_FOOTER = 57,
    DOCUMENT_ELEMENT_INDENTATION = 60,
    DOCUMENT_ELEMENT_BARCODE = 61,
    DOCUMENT_ELEMENT_WS_AREA = 62,
    DOCUMENT_ELEMENT_CARRY_OVER = 63,
    DOCUMENT_ELEMENT_SUB_TOTAL = 64,
    DOCUMENT_ELEMENT_LOOP = 65,
    DOCUMENT_ELEMENT_LOOP_ENTRY = 66,
    DOCUMENT_ELEMENT_RULE = 67,
    DOCUMENT_ELEMENT_LIST_LEVEL_SETTING = 68,
    DOCUMENT_ELEMENT_LAYOUT = 69,
    DOCUMENT_ELEMENT_ADVANCED_ILLUSTRATION_AREA = 70,
    DOCUMENT_ELEMENT_ADJUST_HORIZONTALLY = 71,
    DOCUMENT_ELEMENT_DOCTYPE_SCRIPT = 72,
    DOCUMENT_ELEMENT_DM_SCRIPT = 73
}

/** Properties of a ProtoImage. */
export interface IProtoImage {

    /** ProtoImage parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoImage alt */
    alt?: (string|null);

    /** ProtoImage name */
    name?: (string|null);

    /** ProtoImage src */
    src?: (string|null);

    /** ProtoImage filename */
    filename?: (string|null);

    /** ProtoImage scale */
    scale?: (IProtoBoxedDouble|null);

    /** ProtoImage columnScale */
    columnScale?: (IProtoBoxedDouble|null);

    /** ProtoImage width */
    width?: (IProtoBoxedMeasure|null);

    /** ProtoImage height */
    height?: (IProtoBoxedMeasure|null);

    /** ProtoImage x */
    x?: (IProtoBoxedMeasure|null);

    /** ProtoImage y */
    y?: (IProtoBoxedMeasure|null);

    /** ProtoImage positionAbsolute */
    positionAbsolute?: (IProtoBoxedBool|null);

    /** ProtoImage rotation */
    rotation?: (number|null);

    /** ProtoImage flipSettings */
    flipSettings?: (IProtoFlipSettings|null);

    /** ProtoImage cropSettings */
    cropSettings?: (IProtoCropSettings|null);

    /** ProtoImage aia */
    aia?: (IProtoAdvancedIllustrationAreaImageSettings|null);

    /** ProtoImage uuid */
    uuid?: (string|null);

    /** ProtoImage referencePoint */
    referencePoint?: (ProtoImageReferencePoint|null);

    /** ProtoImage hyperlink */
    hyperlink?: (string|null);
}

/** Represents a ProtoImage. */
export class ProtoImage implements IProtoImage {

    /**
     * Constructs a new ProtoImage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoImage);

    /** ProtoImage parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoImage alt. */
    public alt: string;

    /** ProtoImage name. */
    public name: string;

    /** ProtoImage src. */
    public src: string;

    /** ProtoImage filename. */
    public filename: string;

    /** ProtoImage scale. */
    public scale?: (IProtoBoxedDouble|null);

    /** ProtoImage columnScale. */
    public columnScale?: (IProtoBoxedDouble|null);

    /** ProtoImage width. */
    public width?: (IProtoBoxedMeasure|null);

    /** ProtoImage height. */
    public height?: (IProtoBoxedMeasure|null);

    /** ProtoImage x. */
    public x?: (IProtoBoxedMeasure|null);

    /** ProtoImage y. */
    public y?: (IProtoBoxedMeasure|null);

    /** ProtoImage positionAbsolute. */
    public positionAbsolute?: (IProtoBoxedBool|null);

    /** ProtoImage rotation. */
    public rotation: number;

    /** ProtoImage flipSettings. */
    public flipSettings?: (IProtoFlipSettings|null);

    /** ProtoImage cropSettings. */
    public cropSettings?: (IProtoCropSettings|null);

    /** ProtoImage aia. */
    public aia?: (IProtoAdvancedIllustrationAreaImageSettings|null);

    /** ProtoImage uuid. */
    public uuid: string;

    /** ProtoImage referencePoint. */
    public referencePoint: ProtoImageReferencePoint;

    /** ProtoImage hyperlink. */
    public hyperlink: string;

    /**
     * Creates a new ProtoImage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoImage instance
     */
    public static create(properties?: IProtoImage): ProtoImage;

    /**
     * Encodes the specified ProtoImage message. Does not implicitly {@link ProtoImage.verify|verify} messages.
     * @param message ProtoImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoImage message, length delimited. Does not implicitly {@link ProtoImage.verify|verify} messages.
     * @param message ProtoImage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoImage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoImage;

    /**
     * Decodes a ProtoImage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoImage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoImage;

    /**
     * Verifies a ProtoImage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoImage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoImage
     */
    public static fromObject(object: { [k: string]: any }): ProtoImage;

    /**
     * Creates a plain object from a ProtoImage message. Also converts values to other types if specified.
     * @param message ProtoImage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoImage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoImage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoImage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoDirectory. */
export interface IProtoDirectory {

    /** ProtoDirectory _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoDirectory parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoDirectory uuid */
    uuid?: (string|null);

    /** ProtoDirectory comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);

    /** ProtoDirectory semanticType */
    semanticType?: (IProtoBoxedString|null);
}

/** Represents a ProtoDirectory. */
export class ProtoDirectory implements IProtoDirectory {

    /**
     * Constructs a new ProtoDirectory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoDirectory);

    /** ProtoDirectory _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoDirectory parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoDirectory uuid. */
    public uuid: string;

    /** ProtoDirectory comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /** ProtoDirectory semanticType. */
    public semanticType?: (IProtoBoxedString|null);

    /**
     * Creates a new ProtoDirectory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoDirectory instance
     */
    public static create(properties?: IProtoDirectory): ProtoDirectory;

    /**
     * Encodes the specified ProtoDirectory message. Does not implicitly {@link ProtoDirectory.verify|verify} messages.
     * @param message ProtoDirectory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoDirectory message, length delimited. Does not implicitly {@link ProtoDirectory.verify|verify} messages.
     * @param message ProtoDirectory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoDirectory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoDirectory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoDirectory;

    /**
     * Decodes a ProtoDirectory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoDirectory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoDirectory;

    /**
     * Verifies a ProtoDirectory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoDirectory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoDirectory
     */
    public static fromObject(object: { [k: string]: any }): ProtoDirectory;

    /**
     * Creates a plain object from a ProtoDirectory message. Also converts values to other types if specified.
     * @param message ProtoDirectory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoDirectory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoDirectory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoDirectory
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoTextBrick. */
export interface IProtoTextBrick {

    /** ProtoTextBrick _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoTextBrick parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoTextBrick uuid */
    uuid?: (string|null);

    /** ProtoTextBrick id */
    id?: (number|Long|null);

    /** ProtoTextBrick comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);

    /** ProtoTextBrick editable */
    editable?: (boolean|null);
}

/** Represents a ProtoTextBrick. */
export class ProtoTextBrick implements IProtoTextBrick {

    /**
     * Constructs a new ProtoTextBrick.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoTextBrick);

    /** ProtoTextBrick _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoTextBrick parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoTextBrick uuid. */
    public uuid: string;

    /** ProtoTextBrick id. */
    public id: (number|Long);

    /** ProtoTextBrick comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /** ProtoTextBrick editable. */
    public editable: boolean;

    /**
     * Creates a new ProtoTextBrick instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoTextBrick instance
     */
    public static create(properties?: IProtoTextBrick): ProtoTextBrick;

    /**
     * Encodes the specified ProtoTextBrick message. Does not implicitly {@link ProtoTextBrick.verify|verify} messages.
     * @param message ProtoTextBrick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoTextBrick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoTextBrick message, length delimited. Does not implicitly {@link ProtoTextBrick.verify|verify} messages.
     * @param message ProtoTextBrick message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoTextBrick, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoTextBrick message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoTextBrick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoTextBrick;

    /**
     * Decodes a ProtoTextBrick message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoTextBrick
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoTextBrick;

    /**
     * Verifies a ProtoTextBrick message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoTextBrick message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoTextBrick
     */
    public static fromObject(object: { [k: string]: any }): ProtoTextBrick;

    /**
     * Creates a plain object from a ProtoTextBrick message. Also converts values to other types if specified.
     * @param message ProtoTextBrick
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoTextBrick, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoTextBrick to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoTextBrick
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoVariable. */
export interface IProtoVariable {

    /** ProtoVariable parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoVariable path */
    path?: (string|null);

    /** ProtoVariable content */
    content?: (string|null);

    /** ProtoVariable formatUuid */
    formatUuid?: (string|null);

    /** ProtoVariable specialType */
    specialType?: (ProtoVariableSpecialType|null);

    /** ProtoVariable uuid */
    uuid?: (string|null);
}

/** Represents a ProtoVariable. */
export class ProtoVariable implements IProtoVariable {

    /**
     * Constructs a new ProtoVariable.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoVariable);

    /** ProtoVariable parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoVariable path. */
    public path: string;

    /** ProtoVariable content. */
    public content: string;

    /** ProtoVariable formatUuid. */
    public formatUuid: string;

    /** ProtoVariable specialType. */
    public specialType: ProtoVariableSpecialType;

    /** ProtoVariable uuid. */
    public uuid: string;

    /**
     * Creates a new ProtoVariable instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoVariable instance
     */
    public static create(properties?: IProtoVariable): ProtoVariable;

    /**
     * Encodes the specified ProtoVariable message. Does not implicitly {@link ProtoVariable.verify|verify} messages.
     * @param message ProtoVariable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoVariable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoVariable message, length delimited. Does not implicitly {@link ProtoVariable.verify|verify} messages.
     * @param message ProtoVariable message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoVariable, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoVariable message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoVariable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoVariable;

    /**
     * Decodes a ProtoVariable message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoVariable
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoVariable;

    /**
     * Verifies a ProtoVariable message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoVariable message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoVariable
     */
    public static fromObject(object: { [k: string]: any }): ProtoVariable;

    /**
     * Creates a plain object from a ProtoVariable message. Also converts values to other types if specified.
     * @param message ProtoVariable
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoVariable, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoVariable to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoVariable
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoVariableSpecialType enum. */
export enum ProtoVariableSpecialType {
    NOT_SPECIAL = 0,
    TABLE_NUMBER = 1,
    DOC_PAGE_COUNT = 2,
    DOC_CUR_PAGE = 3,
    CUR_PAGE = 4,
    PAGE_COUNT = 5,
    PREV_PAGE = 6,
    SECTION_PAGE = 7,
    UPDATED_AT = 8,
    GENERATED_AT = 9
}

/** Properties of a ProtoFormatted. */
export interface IProtoFormatted {

    /** ProtoFormatted parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoFormatted dteditorSyntax */
    dteditorSyntax?: (boolean|null);

    /** ProtoFormatted doctypeContent */
    doctypeContent?: (string|null);

    /** ProtoFormatted htmlContent */
    htmlContent?: (string|null);

    /** ProtoFormatted comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoFormatted. */
export class ProtoFormatted implements IProtoFormatted {

    /**
     * Constructs a new ProtoFormatted.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoFormatted);

    /** ProtoFormatted parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoFormatted dteditorSyntax. */
    public dteditorSyntax: boolean;

    /** ProtoFormatted doctypeContent. */
    public doctypeContent: string;

    /** ProtoFormatted htmlContent. */
    public htmlContent: string;

    /** ProtoFormatted comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoFormatted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoFormatted instance
     */
    public static create(properties?: IProtoFormatted): ProtoFormatted;

    /**
     * Encodes the specified ProtoFormatted message. Does not implicitly {@link ProtoFormatted.verify|verify} messages.
     * @param message ProtoFormatted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoFormatted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoFormatted message, length delimited. Does not implicitly {@link ProtoFormatted.verify|verify} messages.
     * @param message ProtoFormatted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoFormatted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoFormatted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoFormatted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoFormatted;

    /**
     * Decodes a ProtoFormatted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoFormatted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoFormatted;

    /**
     * Verifies a ProtoFormatted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoFormatted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoFormatted
     */
    public static fromObject(object: { [k: string]: any }): ProtoFormatted;

    /**
     * Creates a plain object from a ProtoFormatted message. Also converts values to other types if specified.
     * @param message ProtoFormatted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoFormatted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoFormatted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoFormatted
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoApplyProtoCDef. */
export interface IProtoApplyProtoCDef {

    /** ProtoApplyProtoCDef cDefUuid */
    cDefUuid?: (string|null);
}

/** Represents a ProtoApplyProtoCDef. */
export class ProtoApplyProtoCDef implements IProtoApplyProtoCDef {

    /**
     * Constructs a new ProtoApplyProtoCDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoApplyProtoCDef);

    /** ProtoApplyProtoCDef cDefUuid. */
    public cDefUuid: string;

    /**
     * Creates a new ProtoApplyProtoCDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoApplyProtoCDef instance
     */
    public static create(properties?: IProtoApplyProtoCDef): ProtoApplyProtoCDef;

    /**
     * Encodes the specified ProtoApplyProtoCDef message. Does not implicitly {@link ProtoApplyProtoCDef.verify|verify} messages.
     * @param message ProtoApplyProtoCDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoApplyProtoCDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoApplyProtoCDef message, length delimited. Does not implicitly {@link ProtoApplyProtoCDef.verify|verify} messages.
     * @param message ProtoApplyProtoCDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoApplyProtoCDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoApplyProtoCDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoApplyProtoCDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoApplyProtoCDef;

    /**
     * Decodes a ProtoApplyProtoCDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoApplyProtoCDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoApplyProtoCDef;

    /**
     * Verifies a ProtoApplyProtoCDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoApplyProtoCDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoApplyProtoCDef
     */
    public static fromObject(object: { [k: string]: any }): ProtoApplyProtoCDef;

    /**
     * Creates a plain object from a ProtoApplyProtoCDef message. Also converts values to other types if specified.
     * @param message ProtoApplyProtoCDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoApplyProtoCDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoApplyProtoCDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoApplyProtoCDef
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoApplyProtoPDef. */
export interface IProtoApplyProtoPDef {

    /** ProtoApplyProtoPDef pDefUuid */
    pDefUuid?: (string|null);
}

/** Represents a ProtoApplyProtoPDef. */
export class ProtoApplyProtoPDef implements IProtoApplyProtoPDef {

    /**
     * Constructs a new ProtoApplyProtoPDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoApplyProtoPDef);

    /** ProtoApplyProtoPDef pDefUuid. */
    public pDefUuid: string;

    /**
     * Creates a new ProtoApplyProtoPDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoApplyProtoPDef instance
     */
    public static create(properties?: IProtoApplyProtoPDef): ProtoApplyProtoPDef;

    /**
     * Encodes the specified ProtoApplyProtoPDef message. Does not implicitly {@link ProtoApplyProtoPDef.verify|verify} messages.
     * @param message ProtoApplyProtoPDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoApplyProtoPDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoApplyProtoPDef message, length delimited. Does not implicitly {@link ProtoApplyProtoPDef.verify|verify} messages.
     * @param message ProtoApplyProtoPDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoApplyProtoPDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoApplyProtoPDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoApplyProtoPDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoApplyProtoPDef;

    /**
     * Decodes a ProtoApplyProtoPDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoApplyProtoPDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoApplyProtoPDef;

    /**
     * Verifies a ProtoApplyProtoPDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoApplyProtoPDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoApplyProtoPDef
     */
    public static fromObject(object: { [k: string]: any }): ProtoApplyProtoPDef;

    /**
     * Creates a plain object from a ProtoApplyProtoPDef message. Also converts values to other types if specified.
     * @param message ProtoApplyProtoPDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoApplyProtoPDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoApplyProtoPDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoApplyProtoPDef
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoApplyPtConfig. */
export interface IProtoApplyPtConfig {

    /** ProtoApplyPtConfig ptConfigUuid */
    ptConfigUuid?: (string|null);
}

/** Represents a ProtoApplyPtConfig. */
export class ProtoApplyPtConfig implements IProtoApplyPtConfig {

    /**
     * Constructs a new ProtoApplyPtConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoApplyPtConfig);

    /** ProtoApplyPtConfig ptConfigUuid. */
    public ptConfigUuid: string;

    /**
     * Creates a new ProtoApplyPtConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoApplyPtConfig instance
     */
    public static create(properties?: IProtoApplyPtConfig): ProtoApplyPtConfig;

    /**
     * Encodes the specified ProtoApplyPtConfig message. Does not implicitly {@link ProtoApplyPtConfig.verify|verify} messages.
     * @param message ProtoApplyPtConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoApplyPtConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoApplyPtConfig message, length delimited. Does not implicitly {@link ProtoApplyPtConfig.verify|verify} messages.
     * @param message ProtoApplyPtConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoApplyPtConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoApplyPtConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoApplyPtConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoApplyPtConfig;

    /**
     * Decodes a ProtoApplyPtConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoApplyPtConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoApplyPtConfig;

    /**
     * Verifies a ProtoApplyPtConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoApplyPtConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoApplyPtConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoApplyPtConfig;

    /**
     * Creates a plain object from a ProtoApplyPtConfig message. Also converts values to other types if specified.
     * @param message ProtoApplyPtConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoApplyPtConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoApplyPtConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoApplyPtConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoApplyUlConfig. */
export interface IProtoApplyUlConfig {

    /** ProtoApplyUlConfig ulConfigUuid */
    ulConfigUuid?: (string|null);
}

/** Represents a ProtoApplyUlConfig. */
export class ProtoApplyUlConfig implements IProtoApplyUlConfig {

    /**
     * Constructs a new ProtoApplyUlConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoApplyUlConfig);

    /** ProtoApplyUlConfig ulConfigUuid. */
    public ulConfigUuid: string;

    /**
     * Creates a new ProtoApplyUlConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoApplyUlConfig instance
     */
    public static create(properties?: IProtoApplyUlConfig): ProtoApplyUlConfig;

    /**
     * Encodes the specified ProtoApplyUlConfig message. Does not implicitly {@link ProtoApplyUlConfig.verify|verify} messages.
     * @param message ProtoApplyUlConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoApplyUlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoApplyUlConfig message, length delimited. Does not implicitly {@link ProtoApplyUlConfig.verify|verify} messages.
     * @param message ProtoApplyUlConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoApplyUlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoApplyUlConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoApplyUlConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoApplyUlConfig;

    /**
     * Decodes a ProtoApplyUlConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoApplyUlConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoApplyUlConfig;

    /**
     * Verifies a ProtoApplyUlConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoApplyUlConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoApplyUlConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoApplyUlConfig;

    /**
     * Creates a plain object from a ProtoApplyUlConfig message. Also converts values to other types if specified.
     * @param message ProtoApplyUlConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoApplyUlConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoApplyUlConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoApplyUlConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoCDef. */
export interface IProtoCDef {

    /** ProtoCDef columSettings */
    columSettings?: (IProtoColumnSettings|null);

    /** ProtoCDef applyToHeaderFooter */
    applyToHeaderFooter?: (IProtoBoxedBool|null);

    /** ProtoCDef applyImmediate */
    applyImmediate?: (IProtoBoxedBool|null);

    /** ProtoCDef Uuid */
    Uuid?: (string|null);
}

/** Represents a ProtoCDef. */
export class ProtoCDef implements IProtoCDef {

    /**
     * Constructs a new ProtoCDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoCDef);

    /** ProtoCDef columSettings. */
    public columSettings?: (IProtoColumnSettings|null);

    /** ProtoCDef applyToHeaderFooter. */
    public applyToHeaderFooter?: (IProtoBoxedBool|null);

    /** ProtoCDef applyImmediate. */
    public applyImmediate?: (IProtoBoxedBool|null);

    /** ProtoCDef Uuid. */
    public Uuid: string;

    /**
     * Creates a new ProtoCDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoCDef instance
     */
    public static create(properties?: IProtoCDef): ProtoCDef;

    /**
     * Encodes the specified ProtoCDef message. Does not implicitly {@link ProtoCDef.verify|verify} messages.
     * @param message ProtoCDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoCDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoCDef message, length delimited. Does not implicitly {@link ProtoCDef.verify|verify} messages.
     * @param message ProtoCDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoCDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoCDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoCDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoCDef;

    /**
     * Decodes a ProtoCDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoCDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoCDef;

    /**
     * Verifies a ProtoCDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoCDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoCDef
     */
    public static fromObject(object: { [k: string]: any }): ProtoCDef;

    /**
     * Creates a plain object from a ProtoCDef message. Also converts values to other types if specified.
     * @param message ProtoCDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoCDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoCDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoCDef
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoPDef. */
export interface IProtoPDef {

    /** ProtoPDef pageWidth */
    pageWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPDef pageDepth */
    pageDepth?: (IProtoBoxedMeasure|null);

    /** ProtoPDef Uuid */
    Uuid?: (string|null);
}

/** Represents a ProtoPDef. */
export class ProtoPDef implements IProtoPDef {

    /**
     * Constructs a new ProtoPDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoPDef);

    /** ProtoPDef pageWidth. */
    public pageWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPDef pageDepth. */
    public pageDepth?: (IProtoBoxedMeasure|null);

    /** ProtoPDef Uuid. */
    public Uuid: string;

    /**
     * Creates a new ProtoPDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoPDef instance
     */
    public static create(properties?: IProtoPDef): ProtoPDef;

    /**
     * Encodes the specified ProtoPDef message. Does not implicitly {@link ProtoPDef.verify|verify} messages.
     * @param message ProtoPDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoPDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoPDef message, length delimited. Does not implicitly {@link ProtoPDef.verify|verify} messages.
     * @param message ProtoPDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoPDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoPDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoPDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoPDef;

    /**
     * Decodes a ProtoPDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoPDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoPDef;

    /**
     * Verifies a ProtoPDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoPDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoPDef
     */
    public static fromObject(object: { [k: string]: any }): ProtoPDef;

    /**
     * Creates a plain object from a ProtoPDef message. Also converts values to other types if specified.
     * @param message ProtoPDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoPDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoPDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoPDef
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoPtConfig. */
export interface IProtoPtConfig {

    /** ProtoPtConfig height */
    height?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig lineFeed */
    lineFeed?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig characterWidth */
    characterWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig spaceWidth */
    spaceWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig Uuid */
    Uuid?: (string|null);
}

/** Represents a ProtoPtConfig. */
export class ProtoPtConfig implements IProtoPtConfig {

    /**
     * Constructs a new ProtoPtConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoPtConfig);

    /** ProtoPtConfig height. */
    public height?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig lineFeed. */
    public lineFeed?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig characterWidth. */
    public characterWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig spaceWidth. */
    public spaceWidth?: (IProtoBoxedMeasure|null);

    /** ProtoPtConfig Uuid. */
    public Uuid: string;

    /**
     * Creates a new ProtoPtConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoPtConfig instance
     */
    public static create(properties?: IProtoPtConfig): ProtoPtConfig;

    /**
     * Encodes the specified ProtoPtConfig message. Does not implicitly {@link ProtoPtConfig.verify|verify} messages.
     * @param message ProtoPtConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoPtConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoPtConfig message, length delimited. Does not implicitly {@link ProtoPtConfig.verify|verify} messages.
     * @param message ProtoPtConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoPtConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoPtConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoPtConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoPtConfig;

    /**
     * Decodes a ProtoPtConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoPtConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoPtConfig;

    /**
     * Verifies a ProtoPtConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoPtConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoPtConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoPtConfig;

    /**
     * Creates a plain object from a ProtoPtConfig message. Also converts values to other types if specified.
     * @param message ProtoPtConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoPtConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoPtConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoPtConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoUlConfig. */
export interface IProtoUlConfig {

    /** ProtoUlConfig mode */
    mode?: (ProtoUnderlineMode|null);

    /** ProtoUlConfig Uuid */
    Uuid?: (string|null);
}

/** Represents a ProtoUlConfig. */
export class ProtoUlConfig implements IProtoUlConfig {

    /**
     * Constructs a new ProtoUlConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoUlConfig);

    /** ProtoUlConfig mode. */
    public mode: ProtoUnderlineMode;

    /** ProtoUlConfig Uuid. */
    public Uuid: string;

    /**
     * Creates a new ProtoUlConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoUlConfig instance
     */
    public static create(properties?: IProtoUlConfig): ProtoUlConfig;

    /**
     * Encodes the specified ProtoUlConfig message. Does not implicitly {@link ProtoUlConfig.verify|verify} messages.
     * @param message ProtoUlConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoUlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoUlConfig message, length delimited. Does not implicitly {@link ProtoUlConfig.verify|verify} messages.
     * @param message ProtoUlConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoUlConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoUlConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoUlConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoUlConfig;

    /**
     * Decodes a ProtoUlConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoUlConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoUlConfig;

    /**
     * Verifies a ProtoUlConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoUlConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoUlConfig
     */
    public static fromObject(object: { [k: string]: any }): ProtoUlConfig;

    /**
     * Creates a plain object from a ProtoUlConfig message. Also converts values to other types if specified.
     * @param message ProtoUlConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoUlConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoUlConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoUlConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoPageMode enum. */
export enum ProtoPageMode {
    NEXT_PAGE = 0,
    NEXT_RECTO_PAGE = 1,
    NEXT_VERSO_PAGE = 2
}

/** ProtoPageOrientation enum. */
export enum ProtoPageOrientation {
    UNSET = 0,
    PORTRAIT = 1,
    LANDSCAPE = 2,
    INVERSE_PORTRAIT = 3,
    INVERSE_LANDSCAPE = 4
}

/** Properties of a ProtoNewPage. */
export interface IProtoNewPage {

    /** ProtoNewPage paperTray */
    paperTray?: (number|null);

    /** ProtoNewPage paperCount */
    paperCount?: (number|null);

    /** ProtoNewPage pageMode */
    pageMode?: (ProtoPageMode|null);

    /** ProtoNewPage pageOrientation */
    pageOrientation?: (ProtoPageOrientation|null);
}

/** Represents a ProtoNewPage. */
export class ProtoNewPage implements IProtoNewPage {

    /**
     * Constructs a new ProtoNewPage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoNewPage);

    /** ProtoNewPage paperTray. */
    public paperTray: number;

    /** ProtoNewPage paperCount. */
    public paperCount: number;

    /** ProtoNewPage pageMode. */
    public pageMode: ProtoPageMode;

    /** ProtoNewPage pageOrientation. */
    public pageOrientation: ProtoPageOrientation;

    /**
     * Creates a new ProtoNewPage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoNewPage instance
     */
    public static create(properties?: IProtoNewPage): ProtoNewPage;

    /**
     * Encodes the specified ProtoNewPage message. Does not implicitly {@link ProtoNewPage.verify|verify} messages.
     * @param message ProtoNewPage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoNewPage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoNewPage message, length delimited. Does not implicitly {@link ProtoNewPage.verify|verify} messages.
     * @param message ProtoNewPage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoNewPage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoNewPage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoNewPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoNewPage;

    /**
     * Decodes a ProtoNewPage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoNewPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoNewPage;

    /**
     * Verifies a ProtoNewPage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoNewPage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoNewPage
     */
    public static fromObject(object: { [k: string]: any }): ProtoNewPage;

    /**
     * Creates a plain object from a ProtoNewPage message. Also converts values to other types if specified.
     * @param message ProtoNewPage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoNewPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoNewPage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoNewPage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoIndentation. */
export interface IProtoIndentation {

    /** ProtoIndentation _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoIndentation parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoIndentation left */
    left?: (IProtoBoxedMeasure|null);

    /** ProtoIndentation right */
    right?: (IProtoBoxedMeasure|null);

    /** ProtoIndentation uuid */
    uuid?: (string|null);

    /** ProtoIndentation comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoIndentation. */
export class ProtoIndentation implements IProtoIndentation {

    /**
     * Constructs a new ProtoIndentation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoIndentation);

    /** ProtoIndentation _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoIndentation parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoIndentation left. */
    public left?: (IProtoBoxedMeasure|null);

    /** ProtoIndentation right. */
    public right?: (IProtoBoxedMeasure|null);

    /** ProtoIndentation uuid. */
    public uuid: string;

    /** ProtoIndentation comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoIndentation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoIndentation instance
     */
    public static create(properties?: IProtoIndentation): ProtoIndentation;

    /**
     * Encodes the specified ProtoIndentation message. Does not implicitly {@link ProtoIndentation.verify|verify} messages.
     * @param message ProtoIndentation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoIndentation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoIndentation message, length delimited. Does not implicitly {@link ProtoIndentation.verify|verify} messages.
     * @param message ProtoIndentation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoIndentation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoIndentation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoIndentation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoIndentation;

    /**
     * Decodes a ProtoIndentation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoIndentation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoIndentation;

    /**
     * Verifies a ProtoIndentation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoIndentation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoIndentation
     */
    public static fromObject(object: { [k: string]: any }): ProtoIndentation;

    /**
     * Creates a plain object from a ProtoIndentation message. Also converts values to other types if specified.
     * @param message ProtoIndentation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoIndentation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoIndentation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoIndentation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoCarryOver. */
export interface IProtoCarryOver {

    /** ProtoCarryOver _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoCarryOver parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoCarryOver comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoCarryOver. */
export class ProtoCarryOver implements IProtoCarryOver {

    /**
     * Constructs a new ProtoCarryOver.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoCarryOver);

    /** ProtoCarryOver _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoCarryOver parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoCarryOver comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoCarryOver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoCarryOver instance
     */
    public static create(properties?: IProtoCarryOver): ProtoCarryOver;

    /**
     * Encodes the specified ProtoCarryOver message. Does not implicitly {@link ProtoCarryOver.verify|verify} messages.
     * @param message ProtoCarryOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoCarryOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoCarryOver message, length delimited. Does not implicitly {@link ProtoCarryOver.verify|verify} messages.
     * @param message ProtoCarryOver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoCarryOver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoCarryOver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoCarryOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoCarryOver;

    /**
     * Decodes a ProtoCarryOver message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoCarryOver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoCarryOver;

    /**
     * Verifies a ProtoCarryOver message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoCarryOver message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoCarryOver
     */
    public static fromObject(object: { [k: string]: any }): ProtoCarryOver;

    /**
     * Creates a plain object from a ProtoCarryOver message. Also converts values to other types if specified.
     * @param message ProtoCarryOver
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoCarryOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoCarryOver to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoCarryOver
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoLoopEntry. */
export interface IProtoLoopEntry {

    /** ProtoLoopEntry _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoLoopEntry parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoLoopEntry path */
    path?: (string|null);

    /** ProtoLoopEntry index */
    index?: (number|Long|null);

    /** ProtoLoopEntry uuid */
    uuid?: (string|null);
}

/** Represents a ProtoLoopEntry. */
export class ProtoLoopEntry implements IProtoLoopEntry {

    /**
     * Constructs a new ProtoLoopEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoLoopEntry);

    /** ProtoLoopEntry _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoLoopEntry parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoLoopEntry path. */
    public path: string;

    /** ProtoLoopEntry index. */
    public index: (number|Long);

    /** ProtoLoopEntry uuid. */
    public uuid: string;

    /**
     * Creates a new ProtoLoopEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoLoopEntry instance
     */
    public static create(properties?: IProtoLoopEntry): ProtoLoopEntry;

    /**
     * Encodes the specified ProtoLoopEntry message. Does not implicitly {@link ProtoLoopEntry.verify|verify} messages.
     * @param message ProtoLoopEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoLoopEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoLoopEntry message, length delimited. Does not implicitly {@link ProtoLoopEntry.verify|verify} messages.
     * @param message ProtoLoopEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoLoopEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoLoopEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoLoopEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoLoopEntry;

    /**
     * Decodes a ProtoLoopEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoLoopEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoLoopEntry;

    /**
     * Verifies a ProtoLoopEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoLoopEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoLoopEntry
     */
    public static fromObject(object: { [k: string]: any }): ProtoLoopEntry;

    /**
     * Creates a plain object from a ProtoLoopEntry message. Also converts values to other types if specified.
     * @param message ProtoLoopEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoLoopEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoLoopEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoLoopEntry
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoLoop. */
export interface IProtoLoop {

    /** ProtoLoop _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoLoop parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoLoop path */
    path?: (string|null);

    /** ProtoLoop uuid */
    uuid?: (string|null);

    /** ProtoLoop comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoLoop. */
export class ProtoLoop implements IProtoLoop {

    /**
     * Constructs a new ProtoLoop.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoLoop);

    /** ProtoLoop _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoLoop parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoLoop path. */
    public path: string;

    /** ProtoLoop uuid. */
    public uuid: string;

    /** ProtoLoop comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoLoop instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoLoop instance
     */
    public static create(properties?: IProtoLoop): ProtoLoop;

    /**
     * Encodes the specified ProtoLoop message. Does not implicitly {@link ProtoLoop.verify|verify} messages.
     * @param message ProtoLoop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoLoop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoLoop message, length delimited. Does not implicitly {@link ProtoLoop.verify|verify} messages.
     * @param message ProtoLoop message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoLoop, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoLoop message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoLoop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoLoop;

    /**
     * Decodes a ProtoLoop message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoLoop
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoLoop;

    /**
     * Verifies a ProtoLoop message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoLoop message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoLoop
     */
    public static fromObject(object: { [k: string]: any }): ProtoLoop;

    /**
     * Creates a plain object from a ProtoLoop message. Also converts values to other types if specified.
     * @param message ProtoLoop
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoLoop, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoLoop to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoLoop
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoSubTotalPosition enum. */
export enum ProtoSubTotalPosition {
    POSITION_ABOVE_FOOTER = 0,
    POSITION_BELOW_CONTENT = 1
}

/** Properties of a ProtoSubTotal. */
export interface IProtoSubTotal {

    /** ProtoSubTotal _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoSubTotal parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoSubTotal applyImmediate */
    applyImmediate?: (boolean|null);

    /** ProtoSubTotal position */
    position?: (ProtoSubTotalPosition|null);

    /** ProtoSubTotal height */
    height?: (IProtoMeasure|null);

    /** ProtoSubTotal comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoSubTotal. */
export class ProtoSubTotal implements IProtoSubTotal {

    /**
     * Constructs a new ProtoSubTotal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoSubTotal);

    /** ProtoSubTotal _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoSubTotal parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoSubTotal applyImmediate. */
    public applyImmediate: boolean;

    /** ProtoSubTotal position. */
    public position: ProtoSubTotalPosition;

    /** ProtoSubTotal height. */
    public height?: (IProtoMeasure|null);

    /** ProtoSubTotal comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoSubTotal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoSubTotal instance
     */
    public static create(properties?: IProtoSubTotal): ProtoSubTotal;

    /**
     * Encodes the specified ProtoSubTotal message. Does not implicitly {@link ProtoSubTotal.verify|verify} messages.
     * @param message ProtoSubTotal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoSubTotal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoSubTotal message, length delimited. Does not implicitly {@link ProtoSubTotal.verify|verify} messages.
     * @param message ProtoSubTotal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoSubTotal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoSubTotal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoSubTotal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoSubTotal;

    /**
     * Decodes a ProtoSubTotal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoSubTotal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoSubTotal;

    /**
     * Verifies a ProtoSubTotal message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoSubTotal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoSubTotal
     */
    public static fromObject(object: { [k: string]: any }): ProtoSubTotal;

    /**
     * Creates a plain object from a ProtoSubTotal message. Also converts values to other types if specified.
     * @param message ProtoSubTotal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoSubTotal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoSubTotal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoSubTotal
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoWsArea. */
export interface IProtoWsArea {

    /** ProtoWsArea _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoWsArea parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoWsArea comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoWsArea. */
export class ProtoWsArea implements IProtoWsArea {

    /**
     * Constructs a new ProtoWsArea.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoWsArea);

    /** ProtoWsArea _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoWsArea parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoWsArea comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoWsArea instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoWsArea instance
     */
    public static create(properties?: IProtoWsArea): ProtoWsArea;

    /**
     * Encodes the specified ProtoWsArea message. Does not implicitly {@link ProtoWsArea.verify|verify} messages.
     * @param message ProtoWsArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoWsArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoWsArea message, length delimited. Does not implicitly {@link ProtoWsArea.verify|verify} messages.
     * @param message ProtoWsArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoWsArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoWsArea message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoWsArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoWsArea;

    /**
     * Decodes a ProtoWsArea message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoWsArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoWsArea;

    /**
     * Verifies a ProtoWsArea message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoWsArea message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoWsArea
     */
    public static fromObject(object: { [k: string]: any }): ProtoWsArea;

    /**
     * Creates a plain object from a ProtoWsArea message. Also converts values to other types if specified.
     * @param message ProtoWsArea
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoWsArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoWsArea to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoWsArea
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoRule. */
export interface IProtoRule {

    /** ProtoRule xOffset */
    xOffset?: (IProtoMeasure|null);

    /** ProtoRule yOffset */
    yOffset?: (IProtoMeasure|null);

    /** ProtoRule width */
    width?: (IProtoMeasure|null);

    /** ProtoRule thickness */
    thickness?: (IProtoMeasure|null);

    /** ProtoRule rotation */
    rotation?: (number|null);

    /** ProtoRule color */
    color?: (IProtoColor|null);

    /** ProtoRule style */
    style?: (ProtoRuleStyle|null);

    /** ProtoRule mode */
    mode?: (ProtoRuleMode|null);

    /** ProtoRule boundaries */
    boundaries?: (IProtoRuleBoundaries|null);
}

/** Represents a ProtoRule. */
export class ProtoRule implements IProtoRule {

    /**
     * Constructs a new ProtoRule.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoRule);

    /** ProtoRule xOffset. */
    public xOffset?: (IProtoMeasure|null);

    /** ProtoRule yOffset. */
    public yOffset?: (IProtoMeasure|null);

    /** ProtoRule width. */
    public width?: (IProtoMeasure|null);

    /** ProtoRule thickness. */
    public thickness?: (IProtoMeasure|null);

    /** ProtoRule rotation. */
    public rotation: number;

    /** ProtoRule color. */
    public color?: (IProtoColor|null);

    /** ProtoRule style. */
    public style: ProtoRuleStyle;

    /** ProtoRule mode. */
    public mode: ProtoRuleMode;

    /** ProtoRule boundaries. */
    public boundaries?: (IProtoRuleBoundaries|null);

    /**
     * Creates a new ProtoRule instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoRule instance
     */
    public static create(properties?: IProtoRule): ProtoRule;

    /**
     * Encodes the specified ProtoRule message. Does not implicitly {@link ProtoRule.verify|verify} messages.
     * @param message ProtoRule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoRule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoRule message, length delimited. Does not implicitly {@link ProtoRule.verify|verify} messages.
     * @param message ProtoRule message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoRule, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoRule message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoRule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoRule;

    /**
     * Decodes a ProtoRule message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoRule
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoRule;

    /**
     * Verifies a ProtoRule message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoRule message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoRule
     */
    public static fromObject(object: { [k: string]: any }): ProtoRule;

    /**
     * Creates a plain object from a ProtoRule message. Also converts values to other types if specified.
     * @param message ProtoRule
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoRule to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoRule
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoRuleMode enum. */
export enum ProtoRuleMode {
    NORMAL = 0,
    BOUNDARY = 1
}

/** Properties of a ProtoRuleBoundaries. */
export interface IProtoRuleBoundaries {

    /** ProtoRuleBoundaries start */
    start?: (IProtoMeasure|null);

    /** ProtoRuleBoundaries end */
    end?: (IProtoMeasure|null);
}

/** Represents a ProtoRuleBoundaries. */
export class ProtoRuleBoundaries implements IProtoRuleBoundaries {

    /**
     * Constructs a new ProtoRuleBoundaries.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoRuleBoundaries);

    /** ProtoRuleBoundaries start. */
    public start?: (IProtoMeasure|null);

    /** ProtoRuleBoundaries end. */
    public end?: (IProtoMeasure|null);

    /**
     * Creates a new ProtoRuleBoundaries instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoRuleBoundaries instance
     */
    public static create(properties?: IProtoRuleBoundaries): ProtoRuleBoundaries;

    /**
     * Encodes the specified ProtoRuleBoundaries message. Does not implicitly {@link ProtoRuleBoundaries.verify|verify} messages.
     * @param message ProtoRuleBoundaries message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoRuleBoundaries, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoRuleBoundaries message, length delimited. Does not implicitly {@link ProtoRuleBoundaries.verify|verify} messages.
     * @param message ProtoRuleBoundaries message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoRuleBoundaries, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoRuleBoundaries message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoRuleBoundaries
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoRuleBoundaries;

    /**
     * Decodes a ProtoRuleBoundaries message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoRuleBoundaries
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoRuleBoundaries;

    /**
     * Verifies a ProtoRuleBoundaries message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoRuleBoundaries message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoRuleBoundaries
     */
    public static fromObject(object: { [k: string]: any }): ProtoRuleBoundaries;

    /**
     * Creates a plain object from a ProtoRuleBoundaries message. Also converts values to other types if specified.
     * @param message ProtoRuleBoundaries
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoRuleBoundaries, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoRuleBoundaries to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoRuleBoundaries
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoColorDef. */
export interface IProtoColorDef {

    /** ProtoColorDef color */
    color?: (IProtoColor|null);
}

/** Represents a ProtoColorDef. */
export class ProtoColorDef implements IProtoColorDef {

    /**
     * Constructs a new ProtoColorDef.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoColorDef);

    /** ProtoColorDef color. */
    public color?: (IProtoColor|null);

    /**
     * Creates a new ProtoColorDef instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoColorDef instance
     */
    public static create(properties?: IProtoColorDef): ProtoColorDef;

    /**
     * Encodes the specified ProtoColorDef message. Does not implicitly {@link ProtoColorDef.verify|verify} messages.
     * @param message ProtoColorDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoColorDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoColorDef message, length delimited. Does not implicitly {@link ProtoColorDef.verify|verify} messages.
     * @param message ProtoColorDef message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoColorDef, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoColorDef message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoColorDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoColorDef;

    /**
     * Decodes a ProtoColorDef message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoColorDef
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoColorDef;

    /**
     * Verifies a ProtoColorDef message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoColorDef message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoColorDef
     */
    public static fromObject(object: { [k: string]: any }): ProtoColorDef;

    /**
     * Creates a plain object from a ProtoColorDef message. Also converts values to other types if specified.
     * @param message ProtoColorDef
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoColorDef, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoColorDef to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoColorDef
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoLayout. */
export interface IProtoLayout {

    /** ProtoLayout parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoLayout name */
    name?: (string|null);
}

/** Represents a ProtoLayout. */
export class ProtoLayout implements IProtoLayout {

    /**
     * Constructs a new ProtoLayout.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoLayout);

    /** ProtoLayout parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoLayout name. */
    public name: string;

    /**
     * Creates a new ProtoLayout instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoLayout instance
     */
    public static create(properties?: IProtoLayout): ProtoLayout;

    /**
     * Encodes the specified ProtoLayout message. Does not implicitly {@link ProtoLayout.verify|verify} messages.
     * @param message ProtoLayout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoLayout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoLayout message, length delimited. Does not implicitly {@link ProtoLayout.verify|verify} messages.
     * @param message ProtoLayout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoLayout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoLayout message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoLayout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoLayout;

    /**
     * Decodes a ProtoLayout message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoLayout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoLayout;

    /**
     * Verifies a ProtoLayout message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoLayout message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoLayout
     */
    public static fromObject(object: { [k: string]: any }): ProtoLayout;

    /**
     * Creates a plain object from a ProtoLayout message. Also converts values to other types if specified.
     * @param message ProtoLayout
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoLayout, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoLayout to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoLayout
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoAdvancedIllustrationArea. */
export interface IProtoAdvancedIllustrationArea {

    /** ProtoAdvancedIllustrationArea _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoAdvancedIllustrationArea parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoAdvancedIllustrationArea uuid */
    uuid?: (string|null);

    /** ProtoAdvancedIllustrationArea absolute */
    absolute?: (boolean|null);

    /** ProtoAdvancedIllustrationArea width */
    width?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea height */
    height?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea x */
    x?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea y */
    y?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea textFlow */
    textFlow?: (ProtoAdvancedIllustrationAreaTextFlowType|null);

    /** ProtoAdvancedIllustrationArea rotation */
    rotation?: (number|null);

    /** ProtoAdvancedIllustrationArea comChannelUUIDs */
    comChannelUUIDs?: (string[]|null);
}

/** Represents a ProtoAdvancedIllustrationArea. */
export class ProtoAdvancedIllustrationArea implements IProtoAdvancedIllustrationArea {

    /**
     * Constructs a new ProtoAdvancedIllustrationArea.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoAdvancedIllustrationArea);

    /** ProtoAdvancedIllustrationArea _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoAdvancedIllustrationArea parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoAdvancedIllustrationArea uuid. */
    public uuid: string;

    /** ProtoAdvancedIllustrationArea absolute. */
    public absolute: boolean;

    /** ProtoAdvancedIllustrationArea width. */
    public width?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea height. */
    public height?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea x. */
    public x?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea y. */
    public y?: (IProtoMeasure|null);

    /** ProtoAdvancedIllustrationArea textFlow. */
    public textFlow: ProtoAdvancedIllustrationAreaTextFlowType;

    /** ProtoAdvancedIllustrationArea rotation. */
    public rotation: number;

    /** ProtoAdvancedIllustrationArea comChannelUUIDs. */
    public comChannelUUIDs: string[];

    /**
     * Creates a new ProtoAdvancedIllustrationArea instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoAdvancedIllustrationArea instance
     */
    public static create(properties?: IProtoAdvancedIllustrationArea): ProtoAdvancedIllustrationArea;

    /**
     * Encodes the specified ProtoAdvancedIllustrationArea message. Does not implicitly {@link ProtoAdvancedIllustrationArea.verify|verify} messages.
     * @param message ProtoAdvancedIllustrationArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoAdvancedIllustrationArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoAdvancedIllustrationArea message, length delimited. Does not implicitly {@link ProtoAdvancedIllustrationArea.verify|verify} messages.
     * @param message ProtoAdvancedIllustrationArea message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoAdvancedIllustrationArea, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoAdvancedIllustrationArea message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoAdvancedIllustrationArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoAdvancedIllustrationArea;

    /**
     * Decodes a ProtoAdvancedIllustrationArea message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoAdvancedIllustrationArea
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoAdvancedIllustrationArea;

    /**
     * Verifies a ProtoAdvancedIllustrationArea message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoAdvancedIllustrationArea message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoAdvancedIllustrationArea
     */
    public static fromObject(object: { [k: string]: any }): ProtoAdvancedIllustrationArea;

    /**
     * Creates a plain object from a ProtoAdvancedIllustrationArea message. Also converts values to other types if specified.
     * @param message ProtoAdvancedIllustrationArea
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoAdvancedIllustrationArea, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoAdvancedIllustrationArea to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoAdvancedIllustrationArea
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoAdjustHorizontally. */
export interface IProtoAdjustHorizontally {

    /** ProtoAdjustHorizontally _children */
    _children?: (IProtoDocumentElement[]|null);

    /** ProtoAdjustHorizontally parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoAdjustHorizontally minFontSize */
    minFontSize?: (IProtoMeasure|null);

    /** ProtoAdjustHorizontally maxFontSize */
    maxFontSize?: (IProtoMeasure|null);
}

/** Represents a ProtoAdjustHorizontally. */
export class ProtoAdjustHorizontally implements IProtoAdjustHorizontally {

    /**
     * Constructs a new ProtoAdjustHorizontally.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoAdjustHorizontally);

    /** ProtoAdjustHorizontally _children. */
    public _children: IProtoDocumentElement[];

    /** ProtoAdjustHorizontally parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoAdjustHorizontally minFontSize. */
    public minFontSize?: (IProtoMeasure|null);

    /** ProtoAdjustHorizontally maxFontSize. */
    public maxFontSize?: (IProtoMeasure|null);

    /**
     * Creates a new ProtoAdjustHorizontally instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoAdjustHorizontally instance
     */
    public static create(properties?: IProtoAdjustHorizontally): ProtoAdjustHorizontally;

    /**
     * Encodes the specified ProtoAdjustHorizontally message. Does not implicitly {@link ProtoAdjustHorizontally.verify|verify} messages.
     * @param message ProtoAdjustHorizontally message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoAdjustHorizontally, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoAdjustHorizontally message, length delimited. Does not implicitly {@link ProtoAdjustHorizontally.verify|verify} messages.
     * @param message ProtoAdjustHorizontally message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoAdjustHorizontally, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoAdjustHorizontally message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoAdjustHorizontally
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoAdjustHorizontally;

    /**
     * Decodes a ProtoAdjustHorizontally message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoAdjustHorizontally
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoAdjustHorizontally;

    /**
     * Verifies a ProtoAdjustHorizontally message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoAdjustHorizontally message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoAdjustHorizontally
     */
    public static fromObject(object: { [k: string]: any }): ProtoAdjustHorizontally;

    /**
     * Creates a plain object from a ProtoAdjustHorizontally message. Also converts values to other types if specified.
     * @param message ProtoAdjustHorizontally
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoAdjustHorizontally, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoAdjustHorizontally to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoAdjustHorizontally
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ProtoDoctypeOutputMode enum. */
export enum ProtoDoctypeOutputMode {
    DOCTYPE_OUTPUT_MODE_NOT_SET = 0,
    DOCTYPE = 1,
    JSON = 2
}

/** Properties of a ProtoDoctypeScript. */
export interface IProtoDoctypeScript {

    /** ProtoDoctypeScript parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoDoctypeScript content */
    content?: (string|null);

    /** ProtoDoctypeScript outputMode */
    outputMode?: (ProtoDoctypeOutputMode|null);
}

/** Represents a ProtoDoctypeScript. */
export class ProtoDoctypeScript implements IProtoDoctypeScript {

    /**
     * Constructs a new ProtoDoctypeScript.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoDoctypeScript);

    /** ProtoDoctypeScript parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoDoctypeScript content. */
    public content: string;

    /** ProtoDoctypeScript outputMode. */
    public outputMode: ProtoDoctypeOutputMode;

    /**
     * Creates a new ProtoDoctypeScript instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoDoctypeScript instance
     */
    public static create(properties?: IProtoDoctypeScript): ProtoDoctypeScript;

    /**
     * Encodes the specified ProtoDoctypeScript message. Does not implicitly {@link ProtoDoctypeScript.verify|verify} messages.
     * @param message ProtoDoctypeScript message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoDoctypeScript, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoDoctypeScript message, length delimited. Does not implicitly {@link ProtoDoctypeScript.verify|verify} messages.
     * @param message ProtoDoctypeScript message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoDoctypeScript, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoDoctypeScript message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoDoctypeScript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoDoctypeScript;

    /**
     * Decodes a ProtoDoctypeScript message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoDoctypeScript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoDoctypeScript;

    /**
     * Verifies a ProtoDoctypeScript message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoDoctypeScript message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoDoctypeScript
     */
    public static fromObject(object: { [k: string]: any }): ProtoDoctypeScript;

    /**
     * Creates a plain object from a ProtoDoctypeScript message. Also converts values to other types if specified.
     * @param message ProtoDoctypeScript
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoDoctypeScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoDoctypeScript to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoDoctypeScript
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a ProtoDmScript. */
export interface IProtoDmScript {

    /** ProtoDmScript parent */
    parent?: (IProtoDocumentElement|null);

    /** ProtoDmScript content */
    content?: (string|null);
}

/** Represents a ProtoDmScript. */
export class ProtoDmScript implements IProtoDmScript {

    /**
     * Constructs a new ProtoDmScript.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProtoDmScript);

    /** ProtoDmScript parent. */
    public parent?: (IProtoDocumentElement|null);

    /** ProtoDmScript content. */
    public content: string;

    /**
     * Creates a new ProtoDmScript instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProtoDmScript instance
     */
    public static create(properties?: IProtoDmScript): ProtoDmScript;

    /**
     * Encodes the specified ProtoDmScript message. Does not implicitly {@link ProtoDmScript.verify|verify} messages.
     * @param message ProtoDmScript message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProtoDmScript, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProtoDmScript message, length delimited. Does not implicitly {@link ProtoDmScript.verify|verify} messages.
     * @param message ProtoDmScript message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProtoDmScript, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProtoDmScript message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProtoDmScript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProtoDmScript;

    /**
     * Decodes a ProtoDmScript message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProtoDmScript
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProtoDmScript;

    /**
     * Verifies a ProtoDmScript message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProtoDmScript message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProtoDmScript
     */
    public static fromObject(object: { [k: string]: any }): ProtoDmScript;

    /**
     * Creates a plain object from a ProtoDmScript message. Also converts values to other types if specified.
     * @param message ProtoDmScript
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProtoDmScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProtoDmScript to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ProtoDmScript
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
